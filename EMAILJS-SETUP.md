# EmailJS Setup Guide

Your contact form is now configured to send emails directly from the website to **abijithkishan.0502@outlook.com** using EmailJS.

## What is EmailJS?

EmailJS is a free service that allows you to send emails directly from JavaScript without needing a backend server. This is perfect for GitHub Pages deployments.

## Setup Steps

### Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Click "Create New Service" to set up your email service

### Step 2: Connect Your Email Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Create New Service"
3. Select "Gmail" or "Other Email Service"
4. If using Gmail:
   - Generate an [App Password](https://myaccount.google.com/apppasswords) (not your regular password)
   - Enter your Gmail and App Password
5. For Outlook (abijithkishan.0502@outlook.com):
   - Select "Office 365" or "Other SMTP"
   - Enter your Outlook email and password
6. Click "Create Service" and note the **Service ID** (format: `service_xxxxx`)

### Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use these settings:
   - **Template Name**: `template_contact`
   - **To Email**: `{{to_email}}`
   - **Subject**: `New Message from Portfolio: {{subject}}`
   - **Content** (HTML):
```html
<h2>You have a new message from your portfolio!</h2>
<p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
<p><strong>Subject:</strong> {{subject}}</p>
<hr>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<hr>
<p><em>Reply to: {{reply_to}}</em></p>
```

4. Click "Create Template" and note the **Template ID** (format: `template_xxxxx`)

### Step 4: Get Your Public Key
1. In EmailJS dashboard, go to "Account" → "API Keys"
2. Copy your **Public Key** (starts with `xxxxx`)

### Step 5: Update Your Website Code
In `/script.js`, replace the placeholder keys with your actual credentials:

**Line 74:** Replace `XYZ_PUBLIC_KEY_XYZ` with your EmailJS Public Key
```javascript
emailjs.init('YOUR_PUBLIC_KEY_HERE');
```

**Line 111:** Update service and template IDs if different from defaults
```javascript
emailjs.send('service_xxxxx', 'template_xxxxx', templateParams)
```

### Step 6: Test the Form
1. Go to your website
2. Fill out the contact form
3. Click "Send Message"
4. You should receive an email at **abijithkishan.0502@outlook.com**

## Free Tier Limits
- EmailJS free tier allows **200 emails per month**
- Perfect for personal portfolios

## Troubleshooting
- **"Failed to send message"**: Check that your service and template IDs are correct
- **Emails not arriving**: Check spam folder, verify email service is active in EmailJS dashboard
- **Error 400**: Make sure template variable names match exactly: `to_email`, `from_name`, `from_email`, `subject`, `message`, `reply_to`

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- Common Issues: https://www.emailjs.com/docs/faq/

---

**Note**: Your Public Key can be exposed in frontend code (it's meant to be). However, keep your Service ID and Template ID private if sharing code publicly.
