import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken:
    import.meta.env.VITE_EMAILJS_ACCESS_TOKEN ||
    import.meta.env.VITE_EMAIL_JS_ACCESS_TOKEN,
};

const withTimeout = <T,>(promise: Promise<T>, ms: number) =>
  Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Email request timed out.")), ms)
    ),
  ]);

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | undefined
  ) => {
    if (e === undefined) return;
    e.preventDefault();

    if (
      !emailjsConfig.serviceId ||
      !emailjsConfig.templateId ||
      !emailjsConfig.accessToken
    ) {
      alert(
        "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_ACCESS_TOKEN in .env and restart npm run dev."
      );
      return;
    }

    setLoading(true);

    try {
      await withTimeout(
        emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            form_name: form.name,
            to_name: config.html.fullName,
            from_email: form.email,
            to_email: config.html.email,
            message: form.message,
          },
          emailjsConfig.accessToken
        ),
        15000
      );

      alert("Thank you. I will get back to you as soon as possible.");
      setForm(INITIAL_STATE);
    } catch (error) {
      console.error(error);
      alert("Email failed to send. Check EmailJS keys/template configuration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="theme-surface flex-[0.75] rounded-2xl border theme-border p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="theme-text-muted mb-4 font-medium">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="theme-input placeholder:text-secondary rounded-lg border px-6 py-4 font-medium outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="theme-button w-fit rounded-xl px-8 py-3 font-bold shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
