# 🌾 Premium Rice Export Company Website

A modern, professional, and responsive corporate website for a rice export company based in India, specializing in exports to Dubai and UAE markets.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🌍 **Bilingual Support** - English & Arabic with RTL layout
- 📱 **Fully Responsive** - Mobile, Tablet, Desktop optimized
- 🎨 **Premium Design** - Earthy colors, elegant typography, smooth animations
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Smooth Animations** - Framer Motion for professional transitions
- 📧 **Contact Form** - With validation and WhatsApp integration
- 🔍 **SEO Optimized** - Meta tags, semantic HTML, clean URLs

## 📄 Pages

1. **Home** - Hero section, features, product preview, CTA
2. **About Us** - Company story, vision, mission, achievements
3. **Our Products** - Basmati, Non-Basmati, Parboiled, Broken Rice
4. **Export Markets** - Dubai/UAE focus, logistics, statistics
5. **Quality & Certifications** - ISO, FSSAI, APEDA, quality process
6. **Why Choose Us** - 6 key benefits with testimonial
7. **Contact Us** - Form, contact info, WhatsApp CTA, map placeholder

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Navigate to project directory
cd rice

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
rice/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Button.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── ProductCard.jsx
│   ├── context/            # React Context
│   │   └── LanguageContext.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── ExportMarkets.jsx
│   │   ├── Quality.jsx
│   │   ├── WhyChooseUs.jsx
│   │   └── Contact.jsx
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Design system & global styles
├── index.html              # HTML template with SEO
├── package.json
└── vite.config.js
```

## 🎨 Design System

### Colors
- **Primary**: Rice Gold (#D4AF37)
- **Secondary**: Forest Green (#2D5016)
- **Accent**: Beige (#F5F5DC), Cream (#FFFDD0)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Key Features
- Responsive spacing system
- Smooth animations and transitions
- Professional shadows and gradients
- Mobile-first approach

## 🛠️ Technologies

- **React 18.3** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 🌐 Customization

### Update Company Information

Edit `src/context/LanguageContext.jsx`:
- Company name, address, phone, email
- Product descriptions
- Arabic translations

### Change Colors

Edit `src/index.css`:
```css
:root {
  --color-primary: #D4AF37;
  --color-secondary: #2D5016;
  /* ... other colors */
}
```

### Add Your Images

Replace Unsplash URLs in components with your own:
```jsx
// Before
backgroundImage="https://images.unsplash.com/..."

// After
backgroundImage="/images/your-image.jpg"
```

### Google Maps Integration

In `src/pages/Contact.jsx`, replace the map placeholder:
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>
```

### Contact Form Backend

In `src/components/ContactForm.jsx`, replace the simulation with your API:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Replace with your API endpoint
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  // Handle response...
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json:
# "homepage": "https://yourusername.github.io/rice"
npm run build
npx gh-pages -d dist
```

## 📝 Environment Variables

Create `.env` file for sensitive data:
```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key
VITE_CONTACT_API_URL=your_api_url
```

Access in code:
```jsx
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
```

## 🧪 Testing Checklist

- [x] All navigation links work
- [x] Language toggle (EN/AR) functions properly
- [x] RTL layout displays correctly for Arabic
- [x] Contact form validation works
- [x] Responsive design on all devices
- [x] Smooth scroll animations
- [x] WhatsApp link opens correctly

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.3",
  "framer-motion": "^11.18.0",
  "react-icons": "^5.4.0",
  "react-intersection-observer": "^9.14.0"
}
```

## 🎯 Future Enhancements

- [ ] Add image carousel/slider
- [ ] Integrate blog section
- [ ] Add customer testimonials page
- [ ] Implement live chat (WhatsApp Business API)
- [ ] Add downloadable product catalog PDF
- [ ] Video background on hero section
- [ ] Google Analytics integration
- [ ] Admin panel for content management

## 📄 License

MIT License - feel free to use this project for your business needs.

## 🤝 Support

For issues or questions:
1. Check the code comments in each component
2. Review the [walkthrough documentation](file:///C:/Users/ishik/.gemini/antigravity/brain/a7c61f2a-0020-4c5b-9079-94786091bd1e/walkthrough.md)
3. Refer to component-specific CSS files for styling details

## 🎨 Screenshots

The website features:
- Clean, professional design
- Smooth animations on scroll
- Mobile-responsive navigation
- Elegant product showcases
- Professional contact forms

---

**Built with ❤️ using React.js, Vite, and Framer Motion**

*Premium quality, just like our rice!* 🌾
