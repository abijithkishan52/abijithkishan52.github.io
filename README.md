# Abijith Kishan Kotamarthy - Professional Portfolio Website

A modern, responsive, and professional portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your skills, projects, experience, and resume to potential employers.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Multiple Sections**:
  - Hero/Landing section with call-to-action
  - About Me with statistics
  - Skills & Expertise with categorized tags
  - Professional Experience timeline
  - Featured Projects showcase
  - Resume section with PDF viewer
  - Contact form with validation
  - Social media links

- **Interactive Elements**:
  - Smooth scrolling navigation
  - Mobile hamburger menu
  - Animated sections on scroll
  - Contact form with validation
  - Scroll-to-top button
  - Active navigation highlighting

- **Performance Optimized**:
  - Lazy loading for images
  - Optimized animations
  - Minimal dependencies (uses CDN for icons)
  - Clean, organized code

- **SEO Friendly**:
  - Semantic HTML
  - Meta tags for better search visibility
  - Proper heading hierarchy
  - Fast loading times

## 📁 File Structure

```
Personal website/
├── index.html           # Main HTML file
├── styles.css           # All CSS styling
├── script.js            # JavaScript functionality
├── resume.pdf          # Your PDF resume (add your own)
├── resume-text.txt     # Text version of resume
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- Optional: A local development server (Python, Node.js, or VS Code Live Server)

### Installation

1. **Clone or download the website files** to your local machine

2. **Add your information**:
   - Open `index.html` and update all placeholder text with your actual information
   - Replace LinkedIn, GitHub, and social media URLs
   - Update your email and phone number
   - Add your projects and experience

3. **Add your resume**:
   - Save your resume as `resume.pdf` in the same directory
   - The resume section will display it in an embedded viewer
   - Also create/update `resume-text.txt` for accessibility

4. **Customize the design** (optional):
   - Edit CSS variables in `styles.css` to change colors
   - Modify fonts, spacing, or layout as needed

### Running Locally

#### Option 1: Direct Browser Opening
Simply double-click `index.html` or drag it into your browser.

#### Option 2: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

#### Option 3: Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server
```

#### Option 4: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"

## 📝 Customization Guide

### Update Personal Information

Edit `index.html` and replace these sections:

```html
<!-- Hero Section -->
<h1 class="hero-title">Your Name Here</h1>
<p class="hero-subtitle">Your Title Here</p>

<!-- About Section -->
<p>Your about text here...</p>

<!-- Contact Information -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

### Update Skills

Add or remove skill categories in the Skills section:

```html
<div class="skill-category">
    <h3>Your Skill Category</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

### Update Projects

Modify the projects grid with your own projects:

```html
<div class="project-card">
    <div class="project-image" style="background: linear-gradient(...);">
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="github-link" target="_blank">View Code</a>
            <a href="live-demo" target="_blank">Live Demo</a>
        </div>
    </div>
</div>
```

### Customize Colors

Edit CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Darker shade */
    --accent-color: #f59e0b;       /* Accent/CTA color */
    --dark-bg: #0f172a;            /* Dark background */
    --light-bg: #f8fafc;           /* Light background */
    --text-dark: #1e293b;          /* Dark text */
    --text-light: #64748b;         /* Light text */
}
```

### Add Your Resume PDF

1. Create or export your resume as PDF
2. Save it as `resume.pdf` in the same directory as `index.html`
3. Optionally update `resume-text.txt` with text version for accessibility

## 🔧 Features Explained

### Navigation Menu
- Fixed sticky navigation with smooth scrolling
- Mobile hamburger menu for small screens
- Active link highlighting based on scroll position

### Hero Section
- Eye-catching gradient background
- Animated floating elements
- Call-to-action buttons
- Social media links with hover effects

### Skills Section
- Organized by category
- Hover effects on skill tags
- Easy to add/remove skills

### Experience Timeline
- Visual timeline with alternating layout
- Company and role information
- Description of responsibilities

### Projects Showcase
- Grid layout with hover effects
- Project images with gradient backgrounds
- Technology tags
- Links to code and live demos

### Contact Form
- Form validation
- Success/error notifications
- Auto-saves draft to browser's local storage
- Can be connected to email service

### Responsive Design
- Mobile-first approach
- Hamburger menu for small screens
- Flexible grid layouts
- Touch-friendly buttons

## 📧 Contact Form Setup

The contact form is currently set up for client-side validation only. To enable email sending:

### Option 1: Using Formspree (Recommended)
1. Visit [formspree.io](https://formspree.io)
2. Create a new form with your email
3. Update the form in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Form fields here -->
</form>
```

### Option 2: Using Backend Service
Connect to your own backend service or use services like:
- Sendgrid
- Mailgun
- AWS SES

## 🎨 Design Customization

### Fonts
The site uses system fonts for optimal performance. To change fonts, edit in `styles.css`:

```css
body {
    font-family: 'Your Font', fallback font, sans-serif;
}
```

### Gradients
Multiple gradient colors are used for visual appeal. Customize them in:
- `.hero` section
- `.project-image` backgrounds
- CSS color variables

## 🔐 Best Practices

1. **Keep Contact Information Updated**: Review your email and phone number regularly
2. **Update Projects**: Regularly add new projects you've completed
3. **Refresh Content**: Update your experience and skills as you grow
4. **Test on Mobile**: Always verify the website works on all devices
5. **Use HTTPS**: If hosting online, ensure you use HTTPS
6. **Optimize Images**: Compress project images for faster loading

## 📱 Social Media Links

Make sure to update all social media URLs in:
1. Hero section
2. Contact section at bottom
3. All `href` attributes with platform links

Supported platforms (add your username):
- LinkedIn
- GitHub
- Twitter
- Instagram
- YouTube

## 🚀 Deployment

### GitHub Pages (Free)
1. Create a GitHub repository named `yourusername.github.io`
2. Push all files to the repository
3. Visit `https://yourusername.github.io` in your browser

### Other Hosting Options
- Netlify (drag & drop deployment)
- Vercel
- AWS S3 + CloudFront
- Bluehost/GoDaddy
- Any web hosting service

## 🛠 Troubleshooting

### Resume PDF not displaying
- Ensure `resume.pdf` is in the same directory as `index.html`
- Browser may block PDF due to security settings
- Provide a download link as fallback (already included)

### Mobile menu not closing
- Check that hamburger click event is properly bound
- Clear browser cache and reload
- Ensure `script.js` is loaded correctly

### Styles not loading
- Verify `styles.css` is in the same directory
- Check for typos in file paths
- Clear browser cache

### Contact form not working
- Check browser console for errors
- Ensure form validation passes
- Connect to email service if you want emails to send

## 📊 Performance Tips

1. **Optimize Images**: Compress project images to reduce file size
2. **Lazy Load Images**: Already implemented in script.js
3. **Minify CSS/JS**: For production, minify files
4. **Use CDN**: FontAwesome icons loaded from CDN
5. **Browser Caching**: Configure on your hosting service

## 🎯 SEO Optimization

The website includes:
- Meta tags for social sharing
- Open Graph tags
- Proper semantic HTML
- Fast loading times
- Mobile responsiveness
- Structured data ready

For better SEO:
1. Update meta description in `<head>`
2. Add unique keywords
3. Build backlinks to your site
4. Regularly update content
5. Use alt text for images

## 📚 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **Vanilla JavaScript**: No framework dependencies
- **Font Awesome**: Icon library (CDN)
- **Responsive Design**: Mobile-first approach

## 💡 Additional Tips

1. **Keep Updated**: Regularly update your projects and experience
2. **Add Testimonials**: Consider adding client testimonials
3. **Blog Section**: Consider adding a blog for technical writing
4. **Dark Mode**: Can be added with CSS media queries
5. **Analytics**: Add Google Analytics to track visitors
6. **SSL Certificate**: Use HTTPS when deployed
7. **Mobile Testing**: Test on real devices
8. **Accessibility**: Ensure keyboard navigation works

## 📄 License

This portfolio template is provided as-is for personal use.

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the code comments in the files
3. Test in different browsers
4. Check browser console for errors

## ✅ Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Resume PDF added
- [ ] All project links verified
- [ ] Social media links updated
- [ ] Contact form tested
- [ ] Website tested on mobile
- [ ] All images optimized
- [ ] Links checked for 404 errors
- [ ] Meta tags customized
- [ ] Browser compatibility verified

## 🌐 Making it Live

1. Choose a hosting service
2. Upload all files
3. Set up custom domain (optional)
4. Enable HTTPS
5. Test thoroughly
6. Share with employers and network

---

**Last Updated**: January 26, 2026

Good luck with your job search! Show those employers what you're made of! 🚀
