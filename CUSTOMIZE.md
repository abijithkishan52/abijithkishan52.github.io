# Quick Customization Guide

This guide will help you quickly personalize your website with your actual information.

## 🎯 5-Minute Quick Start

### Step 1: Basic Information (2 minutes)
Edit these in `index.html`:

1. **Hero Section** (Lines ~50-55):
```html
<!-- CHANGE THIS -->
<h1 class="hero-title">Abijith Kishan Kotamarthy</h1>
<p class="hero-subtitle">Full Stack Developer | Software Engineer | Tech Enthusiast</p>
<p class="hero-description">Building scalable solutions with modern technology</p>

<!-- TO THIS (your info) -->
<h1 class="hero-title">Your Full Name</h1>
<p class="hero-subtitle">Your Title | Your Specialty</p>
<p class="hero-description">Your tagline or mission statement</p>
```

2. **Contact Information** (Lines ~65-75):
```html
<!-- CHANGE THESE -->
<a href="https://linkedin.com/in/abijith-kishan-kotamarthy" target="_blank">LinkedIn</a>
<a href="https://github.com/abijith-kishan" target="_blank">GitHub</a>
<a href="https://twitter.com/abijith_kishan" target="_blank">Twitter</a>
<a href="mailto:abijith.kishan@email.com">Email</a>
```

### Step 2: About Section (1 minute)
Edit lines ~95-105 in `index.html`:

```html
<!-- CHANGE THIS -->
<p>I'm a passionate software developer with a strong foundation...</p>

<!-- TO YOUR ABOUT TEXT -->
<p>Write about yourself here. Your background, what you love doing, etc.</p>
```

### Step 3: Add Your Resume (1 minute)
1. Export your resume as PDF
2. Name it `resume.pdf`
3. Save it in the same folder as `index.html`

### Step 4: Social Media Links (1 minute)
Find and replace these URLs throughout `index.html`:

```
https://linkedin.com/in/YOUR-LINKEDIN-USERNAME
https://github.com/YOUR-GITHUB-USERNAME
https://twitter.com/YOUR-TWITTER-HANDLE
https://instagram.com/YOUR-INSTAGRAM-HANDLE
```

---

## 📝 Detailed Customization

### About Statistics
Edit the stats in the About section (lines ~100-115):

```html
<div class="stat">
    <h3>5+</h3>  <!-- Change this number -->
    <p>Years of Experience</p>
</div>
<div class="stat">
    <h3>50+</h3>  <!-- Change this number -->
    <p>Projects Completed</p>
</div>
<div class="stat">
    <h3>100%</h3>  <!-- Change this percentage -->
    <p>Client Satisfaction</p>
</div>
```

### Update Skills

**Programming Languages Section** (lines ~160-170):
```html
<div class="skill-category">
    <h3>Programming Languages</h3>
    <div class="skill-tags">
        <span class="skill-tag">Python</span>      <!-- Replace with your skills -->
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">TypeScript</span>
        <!-- Add/remove tags as needed -->
    </div>
</div>
```

**How to add/remove skills:**
- Copy and paste a `<span class="skill-tag">Skill Name</span>` to add
- Delete entire `<span>` line to remove
- Do this for each skill category

### Update Experience

Edit the timeline section (lines ~250-290):

```html
<div class="timeline-item">
    <div class="timeline-date">2023 - Present</div>  <!-- Your dates -->
    <div class="timeline-content">
        <h3>Senior Software Engineer</h3>  <!-- Your job title -->
        <p class="company">Tech Company Inc.</p>  <!-- Your company -->
        <p>Your job description and achievements...</p>  <!-- Your description -->
    </div>
</div>
```

**To add more jobs:**
1. Copy the entire `<div class="timeline-item">...</div>` block
2. Paste it in the timeline section
3. Update all information

### Add Your Projects

Find the projects section (lines ~300-400) and update each project:

```html
<div class="project-card">
    <div class="project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
    <div class="project-content">
        <h3>E-Commerce Platform</h3>  <!-- Your project name -->
        <p>Your project description here...</p>
        <div class="project-tags">
            <span>React</span>  <!-- Your technologies -->
            <span>Node.js</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/your-project" target="_blank">View Code</a>
            <a href="https://your-demo.com" target="_blank">Live Demo</a>
        </div>
    </div>
</div>
```

**To add more projects:**
1. Copy the entire `<div class="project-card">...</div>` block
2. Paste it in the projects grid
3. Update project details
4. Change the gradient color if desired

**Popular gradient colors to use:**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);  /* Purple */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);  /* Pink-Red */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);  /* Blue */
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);  /* Orange */
background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);  /* Light Blue */
background: linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%);  /* Red */
```

### Update Contact Information

Edit the contact section (lines ~430-450):

```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
<p>Your City, Your State, Your Country</p>
```

---

## 🎨 Color Customization

Edit the colors in `styles.css` at the top (lines 1-15):

```css
:root {
    --primary-color: #2563eb;      /* Main blue - change this */
    --secondary-color: #1e40af;    /* Darker blue - change this */
    --accent-color: #f59e0b;       /* Orange - change this */
    --dark-bg: #0f172a;            /* Dark background */
    --light-bg: #f8fafc;           /* Light background */
    --text-dark: #1e293b;          /* Dark text */
    --text-light: #64748b;         /* Light text */
}
```

**Popular color combinations:**

**Blue Theme (Default):**
```css
--primary-color: #2563eb;
--accent-color: #f59e0b;
```

**Purple Theme:**
```css
--primary-color: #9333ea;
--accent-color: #ec4899;
```

**Green Theme:**
```css
--primary-color: #059669;
--accent-color: #f59e0b;
```

**Red Theme:**
```css
--primary-color: #dc2626;
--accent-color: #f59e0b;
```

---

## 📞 Update Contact Form

The contact form is in the HTML (lines ~430-450).

**To set up email notifications using Formspree:**

1. Visit [formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a form and get your form ID
4. Update the form action in `index.html`:

```html
<!-- CHANGE THIS -->
<form class="contact-form" id="contactForm">

<!-- TO THIS -->
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual form ID from Formspree.

---

## 👁️ Content to Replace Everywhere

These placeholders appear multiple times. Find and replace:

1. **Name**: "Abijith Kishan Kotamarthy"
2. **Email**: "abijith.kishan@email.com"
3. **Phone**: "+1 (234) 567-890"
4. **LinkedIn**: "linkedin.com/in/abijith-kishan-kotamarthy"
5. **GitHub**: "github.com/abijith-kishan"
6. **Twitter**: "twitter.com/abijith_kishan"
7. **Instagram**: "instagram.com/abijith_kishan"

**Use Find & Replace (Ctrl+H or Cmd+H) in your code editor!**

---

## 🖼️ Optional: Add Profile Picture

1. Save your profile picture as `profile.jpg` in the same folder
2. Add this to the About section (after the opening `<section id="about">`):

```html
<div class="profile-picture">
    <img src="profile.jpg" alt="Abijith Kishan Kotamarthy">
</div>
```

3. Add this CSS to `styles.css`:

```css
.profile-picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.profile-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

## 🔍 Find & Replace Quick Reference

### In index.html:

| Find | Replace With |
|------|---------------|
| Abijith Kishan Kotamarthy | Your Name |
| abijith.kishan@email.com | your.email@example.com |
| +1 (234) 567-890 | Your Phone |
| linkedin.com/in/abijith-kishan-kotamarthy | Your LinkedIn URL |
| github.com/abijith-kishan | Your GitHub URL |
| twitter.com/abijith_kishan | Your Twitter URL |

---

## ✅ Customization Checklist

- [ ] Hero section updated with your name and title
- [ ] About section updated with your bio
- [ ] Contact info (email, phone) updated
- [ ] All social media links updated
- [ ] Skills updated to your actual skills
- [ ] Experience section updated
- [ ] Projects added with your actual projects
- [ ] Resume PDF added
- [ ] Colors customized (optional)
- [ ] Contact form setup (optional)
- [ ] Profile picture added (optional)
- [ ] Website tested locally
- [ ] Mobile version checked

---

## 🚀 Next Steps

1. Complete customization above
2. Test website locally (open index.html in browser)
3. Check on mobile device
4. Deploy to web (see DEPLOYMENT.md)
5. Share with employers!

---

## 💡 Pro Tips

1. **Use consistent formatting** - Maintain same style throughout
2. **Be honest about skills** - Only list what you're comfortable explaining
3. **Update regularly** - Keep projects and skills current
4. **Add real projects** - Remove placeholder projects, add your own
5. **Professional photos** - Use high-quality project screenshots
6. **Spelling check** - Proofread everything before deploying
7. **Mobile test** - Always test on actual mobile devices
8. **Get feedback** - Have friends review before going live

---

**Happy customizing! Your portfolio will be amazing! 🎉**

For more detailed help, see README.md or DEPLOYMENT.md
