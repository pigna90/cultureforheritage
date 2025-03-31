# Culture for Heritage Website

A modern website for the Culture for Heritage research unit, built with Next.js and Tailwind CSS.

## Features

- Responsive design with mobile-first approach
- Fixed background with semi-transparent sections
- Dynamic news and events section
- Team profiles and project information
- Modern UI with smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cultureforheritage.git
cd cultureforheritage
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Add your background image:
- Place your desired background image in `public/images/background.jpg`
- Recommended size: 1920x1080px or larger
- Format: JPG or WebP for better performance

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── layout.tsx   # Root layout with background
│   └── page.tsx     # Home page
├── components/       # Reusable components
└── styles/          # Global styles
public/
└── images/          # Static images
```

## Customization

1. To modify the navigation items, edit the `navItems` array in `src/components/Navbar.tsx`
2. To update the content sections, edit the corresponding components in `src/app/page.tsx`
3. To change the color scheme, modify the Tailwind classes or update the CSS variables in `src/app/globals.css`

## Deployment

The site can be deployed to any platform that supports Next.js, such as:
- Vercel (recommended)
- Netlify
- AWS Amplify

For the easiest deployment experience, we recommend [Vercel](https://vercel.com/new). 