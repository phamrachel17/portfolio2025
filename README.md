# Portfolio 2025

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Scrolling**: Navigate between sections with smooth animations
- **Modern UI**: Clean, minimalist design with hover effects
- **Professional Sections**:
  - Landing page with introduction
  - Professional experience timeline
  - Project showcase with technologies
  - Skills and interests

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── components/
│   ├── NavBar.tsx      # Vertical navigation with theme toggle
│   ├── Landing.tsx     # Hero section
│   ├── Experience.tsx  # Professional experience timeline
│   ├── Projects.tsx    # Project showcase grid
│   └── Hobbies.tsx     # Skills and interests
├── providers/
│   └── ThemeProvider.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

## Customization

- Update personal information in each component
- Modify colors in `tailwind.config.js`
- Add your own projects and experiences
- Customize animations and transitions

## Deployment

The site can be deployed to Vercel, Netlify, or any platform supporting Next.js.

```bash
npm run build
npm start
```
