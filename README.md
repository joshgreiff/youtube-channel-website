# Work, Save, Bitcoin - YouTube Channel Website

A professional website for your YouTube channel focused on work, saving strategies, and Bitcoin education. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **Coaching Services**: Dedicated page with calendar booking integration
- **Bitcoin Education**: Comprehensive Bitcoin guide and resources
- **SEO Optimized**: Built-in SEO with proper meta tags and structure
- **Vercel Ready**: Configured for easy deployment on Vercel

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd youtube-channel-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Header Component** (`components/Header.tsx`):
   - Update YouTube channel URL
   - Update social media links

2. **Footer Component** (`components/Footer.tsx`):
   - Update social media links
   - Update contact email

3. **About Page** (`app/about/page.tsx`):
   - Replace "Your Name" with your actual name
   - Update your story and credentials
   - Add your photo

4. **Coaching Page** (`app/coaching/page.tsx`):
   - Update Calendly links with your actual booking URLs
   - Adjust pricing and package details
   - Update testimonials

### Calendar Integration

The coaching page includes Calendly integration. To set up:

1. Create a Calendly account at [calendly.com](https://calendly.com)
2. Set up your coaching sessions and pricing
3. Update the Calendly links in `app/coaching/page.tsx`:
   - Replace `https://calendly.com/yourusername/single-session`
   - Replace `https://calendly.com/yourusername/3-session-package`
   - Replace `https://calendly.com/yourusername/6-session-package`

### YouTube Integration

Update all YouTube links throughout the site:
- Replace `https://youtube.com/@yourchannel` with your actual channel URL

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the Next.js configuration
4. Your site will be deployed and available at your Vercel URL

### Environment Variables

No environment variables are required for basic functionality. If you add features like contact forms or analytics, you may need to configure:

- `NEXT_PUBLIC_ANALYTICS_ID` for Google Analytics
- `CONTACT_EMAIL` for contact form submissions

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── about/             # About page
│   ├── bitcoin/           # Bitcoin education page
│   ├── coaching/          # Coaching services page
│   ├── resources/         # Free resources page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── vercel.json          # Vercel deployment config
```

## Customization Guide

### Colors

The site uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue tones for main branding
- Bitcoin: Orange/yellow tones for Bitcoin-related content
- Standard Tailwind colors for UI elements

### Content Updates

1. **Homepage**: Update hero text, statistics, and service descriptions
2. **About Page**: Personalize your story, credentials, and philosophy
3. **Coaching Page**: Adjust pricing, packages, and testimonials
4. **Bitcoin Page**: Update educational content and resources
5. **Resources Page**: Add your actual free resources and tools

### Adding New Pages

1. Create a new folder in the `app/` directory
2. Add a `page.tsx` file with your content
3. Update the navigation in `components/Header.tsx`
4. Add the link to `components/Footer.tsx` if needed

## Support

For questions or support with customization, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

## License

This project is open source and available under the [MIT License](LICENSE).
