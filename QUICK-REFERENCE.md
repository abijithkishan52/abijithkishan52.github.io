# Quick Reference Card

Print this card and keep it handy while customizing your website!

---

## 🎯 ESSENTIAL UPDATES

### In index.html - Find & Replace These:

| FIND | REPLACE WITH |
|------|--------------|
| Abijith Kishan Kotamarthy | YOUR NAME |
| Full Stack Developer \| Software Engineer \| Tech Enthusiast | YOUR TITLE |
| Building scalable solutions with modern technology | YOUR TAGLINE |
| abijith.kishan@email.com | YOUR EMAIL |
| +1 (234) 567-8900 | YOUR PHONE |
| linkedin.com/in/abijith-kishan-kotamarthy | YOUR LINKEDIN URL |
| github.com/abijith-kishan | YOUR GITHUB URL |
| twitter.com/abijith_kishan | YOUR TWITTER URL |
| City, State, Country | YOUR LOCATION |

---

## 🛠️ FILE QUICK REFERENCE

### Main Files You'll Use

| File | Purpose | Edit In |
|------|---------|---------|
| index.html | Website content/structure | Any text editor |
| styles.css | Colors & design | Any text editor |
| script.js | Interactive features | Code editor (optional) |
| resume.pdf | Your resume | PDF creator |
| config.json | Configuration reference | Any text editor |

### Documentation Files (Read These)

| File | Read For |
|------|----------|
| START-HERE.md | Overview & next steps |
| CUSTOMIZE.md | How to customize |
| DEPLOYMENT.md | How to go live |
| TESTING.md | Quality assurance |
| README.md | Full documentation |

---

## 🎨 QUICK COLOR CHANGE

In `styles.css`, line 1-15, change these:

```css
--primary-color: #2563eb;      /* CHANGE TO YOUR COLOR */
--accent-color: #f59e0b;       /* CHANGE TO YOUR COLOR */
```

**Color Ideas:**
- Purple: #9333ea
- Green: #059669
- Red: #dc2626
- Orange: #ea580c

---

## 📝 SECTION LOCATIONS IN HTML

- **Hero**: Lines 40-75
- **About**: Lines 77-125
- **Skills**: Lines 127-220
- **Experience**: Lines 222-290
- **Projects**: Lines 292-450
- **Resume**: Lines 452-495
- **Contact**: Lines 497-560
- **Footer**: Lines 562-568

---

## ✨ SKILLS TO REPLACE

Each skill category has this format:

```html
<div class="skill-category">
    <h3>Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill Name</span>
        <!-- Add/remove spans for skills -->
    </div>
</div>
```

Categories:
1. Programming Languages
2. Frontend Development
3. Backend Development
4. Databases & Tools
5. Cloud & DevOps
6. Other Skills

---

## 💼 EXPERIENCE TO UPDATE

Timeline location: Lines 270-290

```html
<div class="timeline-item">
    <div class="timeline-date">YEAR - YEAR</div>
    <div class="timeline-content">
        <h3>JOB TITLE</h3>
        <p class="company">COMPANY NAME</p>
        <p>Job description...</p>
    </div>
</div>
```

Need to add more? Copy and paste the entire `timeline-item` div.

---

## 🎬 PROJECTS TO ADD

Project location: Lines 320-420

```html
<div class="project-card">
    <div class="project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
    <div class="project-content">
        <h3>PROJECT NAME</h3>
        <p>Description...</p>
        <div class="project-tags">
            <span>Tech 1</span>
            <span>Tech 2</span>
        </div>
        <div class="project-links">
            <a href="GITHUB_URL">View Code</a>
            <a href="DEMO_URL">Live Demo</a>
        </div>
    </div>
</div>
```

**Gradient Color Options:**
```css
#667eea 0%, #764ba2 100%        /* Purple */
#f093fb 0%, #f5576c 100%        /* Pink */
#4facfe 0%, #00f2fe 100%        /* Blue */
#fa709a 0%, #fee140 100%        /* Orange */
#a8edea 0%, #fed6e3 100%        /* Light Blue */
#ff9a56 0%, #ff6a88 100%        /* Red */
```

---

## 📞 CONTACT FORM SETUP

**Location**: Lines 527-545

To enable email notifications:
1. Visit formspree.io
2. Create form, get ID
3. Replace form line:

FROM:
```html
<form class="contact-form" id="contactForm">
```

TO:
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
```

---

## ✅ CUSTOMIZATION CHECKLIST

- [ ] Name & title updated
- [ ] About text updated
- [ ] Contact info updated (email, phone)
- [ ] All social links updated
- [ ] Skills updated to your actual skills
- [ ] Experience section updated
- [ ] Projects added (remove samples)
- [ ] Resume PDF added
- [ ] Resume text updated
- [ ] Colors customized (optional)
- [ ] Tested locally in browser
- [ ] Tested on mobile (F12 → Ctrl+Shift+M)

---

## 🚀 DEPLOYMENT QUICK STEPS

### GitHub Pages (Easiest)
1. Create repo: `yourusername.github.io`
2. Upload all files
3. Website live at: `https://yourusername.github.io`

### Netlify
1. Go to netlify.com
2. Drag & drop folder
3. Website live instantly

### Vercel
1. Go to vercel.com
2. Import GitHub repo
3. Website live in seconds

---

## 🔗 IMPORTANT LINKS TO UPDATE

Find and replace throughout HTML:

**Social Media:**
- `linkedin.com/in/YOUR-NAME`
- `github.com/YOUR-USERNAME`
- `twitter.com/YOUR-HANDLE`
- `instagram.com/YOUR-HANDLE`

**Email & Phone:**
- `mailto:YOUR-EMAIL`
- `tel:YOUR-PHONE`

**Projects:**
- `https://github.com/your-project`
- `https://your-demo.com`

---

## 📱 RESPONSIVE TESTING

**Test Breakpoints** (F12 in browser):

| Device | Width | Check |
|--------|-------|-------|
| Mobile | 375px | Menu works, readable |
| Tablet | 768px | Grid 2 cols |
| Laptop | 1200px | Full layout |
| Desktop | 1920px | Spacious |

All breakpoints are configured. Just test!

---

## 🎓 FILE SIZES (Approximate)

| File | Size | Notes |
|------|------|-------|
| index.html | 35KB | Main structure |
| styles.css | 42KB | Professional styling |
| script.js | 15KB | Interactions |
| Total | ~92KB | Very fast loading |

*Plus your resume PDF (~500KB-2MB)*

---

## 🔐 SECURITY QUICK TIPS

✅ DO:
- Use HTTPS when live
- Validate form inputs
- Keep software updated
- Use strong passwords
- Test thoroughly

❌ DON'T:
- Share API keys
- Hardcode secrets
- Skip HTTPS
- Ignore errors
- Deploy untested

---

## 📊 PERFORMANCE TARGETS

Aim for these metrics:

| Metric | Target | Check Using |
|--------|--------|------------|
| Load Time | < 3s | Google PageSpeed |
| Lighthouse | 80+ | Chrome DevTools |
| Mobile View | Responsive | DevTools mobile |
| Form Submit | < 1s | Manual test |

---

## 🆘 QUICK TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Styles not loading | Check file path in HTML |
| Scripts not running | Open DevTools (F12), check console |
| Images not showing | Verify path and filename |
| Form not working | Check formspree setup or validation |
| Not responsive | Check viewport meta tag |
| Links broken | Verify URLs with trailing slashes |

---

## 📞 SUPPORT RESOURCES

| Need Help With | See This File |
|---|---|
| How to customize | CUSTOMIZE.md |
| How to deploy | DEPLOYMENT.md |
| Testing website | TESTING.md |
| Features & details | README.md |
| Everything | START-HERE.md |

---

## ⚡ FASTEST PATH TO LIVE

**Time: ~2-3 hours**

1. **30 min** - Customize content (use CUSTOMIZE.md)
2. **30 min** - Add resume & test
3. **30 min** - Read TESTING.md & verify
4. **30 min** - Deploy (use DEPLOYMENT.md)
5. **30 min** - Final verification

**Then**: Share with employers!

---

## 🎯 SUCCESS CHECKLIST

Before sharing with employers:

- [ ] All customization complete
- [ ] No placeholder text
- [ ] All links working
- [ ] Mobile tested
- [ ] Resume included
- [ ] Professional appearance
- [ ] Forms working
- [ ] No console errors
- [ ] Fast loading (< 3s)
- [ ] Ready to impress!

---

## 💡 PRO TIPS

1. **Use Find & Replace** - Ctrl+H to replace text throughout
2. **Test on Real Mobile** - Don't just use DevTools
3. **Get Feedback** - Have friends review before going live
4. **Keep Updating** - Add projects quarterly
5. **Monitor Form** - Check for employer inquiries
6. **Stay Fresh** - Update resume when job hunting
7. **Use Analytics** - See who visits your portfolio
8. **Be Authentic** - Let your personality show through

---

## 🌐 YOUR WEBSITE URL WILL BE

### GitHub Pages:
`https://yourusername.github.io`

### Netlify:
`https://your-site-name.netlify.app`

### Vercel:
`https://your-site-name.vercel.app`

### Custom Domain:
`https://yourname.com` (if you buy domain)

---

## 🎉 YOU'RE ALL SET!

Your portfolio website is ready to launch!

**Next Step**: Open `CUSTOMIZE.md` and start customizing!

Remember: This website is your opportunity to show employers what you're made of. Make it count! 💪

---

*Keep this card handy while customizing your portfolio!*

**Good luck! You've got this! 🚀**
