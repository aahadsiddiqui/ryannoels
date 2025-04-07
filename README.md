# Ryan Noels Real Estate Website

A modern, responsive website for Ryan Noels, a real estate agent in the Greater Toronto Area. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Property listings with detailed information
- Client testimonials
- Contact form with email integration
- SEO optimized

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Nodemailer](https://nodemailer.com/) - Email handling

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ryan-noels-real-estate.git
   cd ryan-noels-real-estate
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your SMTP configuration:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-specific-password
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ryan-noels-real-estate/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero.jpg
│   │   ├── properties/
│   │   └── testimonials/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── properties/
│   │   ├── about/
│   │   ├── contact/
│   │   └── testimonials/
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PropertyCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── TestimonialCard.tsx
│   │
│   ├── lib/
│   │   └── email.ts
│   │
│   └── styles/
│       └── globals.css
│
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Deployment

The website can be deployed to any platform that supports Next.js, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Ryan Noels - [info@ryannoels.com](mailto:info@ryannoels.com)

Website Link: [https://www.ryannoels.com](https://www.ryannoels.com) 