# Rupa Uppin Portfolio

Personal portfolio website for **Rupa Uppin** showcasing software engineering, cloud data engineering, backend development, and project work.

## Live Site
- GitHub: [UPPIN-RUPA/Portfolio](https://github.com/UPPIN-RUPA/Portfolio)

## About
This portfolio highlights my work as a **Software Engineer, Java Developer, and Cloud Data Engineer** with experience in banking and fintech systems. It includes:
- Professional experience timeline
- Skills and technology stack
- Project showcase
- Contact form integration with EmailJS

## Key Features
- Interactive hero section with 3D model
- Animated sections and transitions
- Responsive design for desktop and mobile
- Light/Dark theme toggle
- EmailJS-powered contact form

## Tech Stack
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js (`@react-three/fiber`, `@react-three/drei`)
- EmailJS

## Project Structure
```bash
animated-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── hoc/
│   ├── types/
│   └── utils/
├── README.md
├── LICENSE
└── package.json
```

## Local Setup
1. Clone the repository
```bash
git clone https://github.com/UPPIN-RUPA/Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` in project root
```env
VITE_EMAILJS_SERVICE_ID=<your_service_id>
VITE_EMAILJS_TEMPLATE_ID=<your_template_id>
VITE_EMAILJS_ACCESS_TOKEN=<your_public_key>
```

4. Start development server
```bash
npm run dev
```

5. Build production
```bash
npm run build
```

## Scripts
- `npm run dev` - start local dev server
- `npm run build` - build for production
- `npm run preview` - preview production build
- `npm run lint` - run lint checks
- `npm run ts:check` - type check

## Contact
- Name: **Rupa Uppin**
- Email: **uppinrupa@icloud.com**
- GitHub: [UPPIN-RUPA](https://github.com/UPPIN-RUPA)

## Contributors
See [CONTRIBUTORS.md](./CONTRIBUTORS.md)

## License
This project is licensed under the MIT License. See [LICENSE](./LICENSE).
