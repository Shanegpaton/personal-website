# Shane Paton - Personal Website

A professional, recruiter-focused personal website built with Next.js, TypeScript, and TailwindCSS. Designed to showcase computer science skills and projects for internship and full-time applications.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd personal_website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
personal_website/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Home page
│   └── resume/           # Resume page
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects showcase
│   ├── Contact.tsx       # Contact form & info
│   └── ResumeViewer.tsx   # PDF resume viewer
├── public/               # Static assets
│   ├── images/          # Images and screenshots
│   ├── resume.pdf       # Resume PDF
│   ├── robots.txt       # SEO robots file
│   └── sitemap.xml      # SEO sitemap
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## 🎨 Customization

### 1. Personal Information

**Update the following files with your information:**

- `app/layout.tsx` - Update metadata, title, description
- `components/Hero.tsx` - Update name, tagline, pitch
- `components/About.tsx` - Update about section content
- `components/Contact.tsx` - Update contact information

### 2. Projects

Edit `components/Projects.tsx` to update your projects:

```typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Brief project description',
    bullets: ['Key achievement 1', 'Key achievement 2', 'Key achievement 3'],
    tech: ['Tech Stack', 'Technologies'],
    image: '/images/projects/your-project.jpg',
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-demo-link.com',
  },
];
```

### 3. Images

**Replace placeholder images:**

1. **Headshot**: Replace `/public/images/headshot.jpg`
   - Size: 400x400px
   - Format: JPG or PNG
   - Professional headshot recommended

2. **Project Screenshots**: Replace files in `/public/images/projects/`
   - Size: 400x300px
   - Format: JPG or PNG
   - Clear screenshots of your projects

3. **Open Graph Image**: Replace `/public/images/og-image.jpg`
   - Size: 1200x630px
   - Format: JPG or PNG
   - Used for social media sharing

### 4. Resume

Replace `/public/resume.pdf` with your actual resume:

- Keep filename as `resume.pdf`
- Ensure PDF is optimized for web viewing
- Test the embedded viewer functionality

### 5. Contact Form (Optional)

To enable the contact form:

1. **Using Formspree:**
   - Sign up at [formspree.io](https://formspree.io)
   - Get your form endpoint
   - Update `components/Contact.tsx` with your endpoint
   - Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to `.env.local`

2. **Using Netlify Forms:**
   - Add `netlify` attribute to the form
   - Deploy to Netlify for automatic form handling

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain Setup**
   - In Vercel dashboard, go to your project settings
   - Add your custom domain (e.g., `shanepaton.dev`)
   - Update DNS records as instructed by Vercel
   - Update `NEXT_PUBLIC_SITE_URL` in your environment variables

### Deploy to Netlify (Alternative)

1. **Build the project**

   ```bash
   npm run build
   npm run export
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `out`

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking
```

### Environment Variables

Copy `env.example` to `.env.local` and configure:

```bash
cp env.example .env.local
```

Available variables:

- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - Formspree endpoint (optional)
- `NEXT_PUBLIC_SITE_URL` - Your site URL

## 📱 Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Accessibility** - WCAG AA compliant
- ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt
- ✅ **Performance** - Optimized images, fast loading
- ✅ **Modern Stack** - Next.js 14, TypeScript, TailwindCSS
- ✅ **PDF Resume Viewer** - Embedded resume with download option
- ✅ **Contact Form** - Optional form integration
- ✅ **Analytics Ready** - Google Analytics integration ready

## 🎯 Before You Show Recruiters

Use this checklist to ensure your site is ready:

- [ ] **Replace headshot** with professional photo
- [ ] **Update email** and contact information
- [ ] **Update projects** with real project details and links
- [ ] **Check mobile responsiveness** on different devices
- [ ] **Buy and connect domain** (shanepaton.dev)
- [ ] **Deploy to production** (Vercel/Netlify)
- [ ] **Add domain to resume** and LinkedIn
- [ ] **Test contact form** and all links
- [ ] **Run Lighthouse audit** for performance
- [ ] **Proofread all content** for typos and clarity
- [ ] **Update social media links** (GitHub, LinkedIn)
- [ ] **Test resume download** and PDF viewer
- [ ] **Verify SEO meta tags** are correct

## 🛠️ Technical Details

### Performance Optimizations

- Next.js Image optimization
- Automatic code splitting
- Static generation where possible
- Optimized fonts and assets

### SEO Features

- Semantic HTML structure
- Open Graph meta tags
- Twitter Card support
- XML sitemap
- Robots.txt
- Structured data ready

### Accessibility Features

- Keyboard navigation
- Screen reader friendly
- High contrast ratios
- Focus indicators
- Alt text for images

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider submitting a pull request to help others!

---

**Need help?** Check the [Next.js documentation](https://nextjs.org/docs) or [TailwindCSS documentation](https://tailwindcss.com/docs) for more information.
