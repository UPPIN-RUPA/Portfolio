# Rupa Uppin Portfolio

A polished personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Three.js.

This application presents professional experience, technical skills, selected projects, and contact pathways in an interactive format designed to feel more immersive than a static resume page.

## What The Portfolio Does

The portfolio acts as a public-facing professional presentation layer.

It helps visitors:

- understand who Rupa Uppin is as an engineer
- review technical strengths and tools
- explore selected projects visually
- scan career experience in a structured timeline
- reach out directly through the contact section

It is designed to communicate both technical credibility and product taste.

## How The Portfolio Helps

This site helps by turning professional information into a more engaging experience.

It:

- makes project work easier to browse
- gives context around experience instead of listing only bullet points
- shows frontend implementation capability through animation and layout
- serves as a stronger showcase than a plain profile page
- creates a more memorable first impression for recruiters, collaborators, and hiring teams

## Core Features

- animated hero section
- interactive 3D canvas elements
- project showcase
- experience timeline
- technology stack section
- motion-rich transitions
- contact form integration with EmailJS
- responsive layout for desktop and mobile

## Main Sections

### Hero

The hero section establishes the overall tone of the site and introduces the personal brand with an interactive visual treatment.

### About

This section frames professional identity, strengths, and the kind of work being highlighted.

### Experience

The experience timeline organizes professional history into a readable sequence and gives context to technical growth over time.

### Tech

The tech stack section highlights engineering tools and ecosystems across frontend, backend, cloud, and data-focused work.

### Works

The project showcase presents selected builds and makes it easier for visitors to understand practical output rather than only skills claims.

### Contact

The contact section gives visitors a direct path to reach out through the integrated form flow.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- EmailJS

## Project Structure

```text
src/
  assets/
  components/
    atoms/
    canvas/
    layout/
    sections/
  constants/
  hoc/
  types/
  utils/
  App.tsx
  main.tsx
  globals.css
```

## Design Characteristics

This portfolio is designed to feel:

- visual instead of text-heavy
- polished instead of template-like
- animated without becoming distracting
- personal without losing professionalism

The use of motion and 3D elements helps the site stand out while still keeping the content readable and structured.

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure EmailJS

Create a `.env` file in the project root and set:

```env
VITE_EMAILJS_SERVICE_ID=<your_service_id>
VITE_EMAILJS_TEMPLATE_ID=<your_template_id>
VITE_EMAILJS_ACCESS_TOKEN=<your_public_key>
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`
- `npm run ts:check`

## Why This Portfolio Is Useful

This project is useful as:

- a personal branding site
- a project showcase
- a frontend animation and interaction example
- a portfolio piece demonstrating React and Three.js integration
- a more compelling alternative to a static resume-only presentation

## Contact

- Name: **Rupa Uppin**
- Email: **uppinrupa@icloud.com**
- GitHub: [UPPIN-RUPA](https://github.com/UPPIN-RUPA)

## Summary

Rupa Uppin Portfolio is a presentation-focused frontend project that blends engineering credibility with visual storytelling. It helps visitors understand experience, technical depth, and project work through an interactive and modern web experience.
