# GitHub Pages Hosting Guide

Complete guide to host your portfolio on GitHub Pages with automatic updates.

---

## 🚀 Quick Start (15 minutes)

### Step 1: Create GitHub Repository

1. **Go to GitHub**
   - Visit https://github.com/
   - Sign in (or create account if needed)

2. **Create New Repository**
   - Click the **+** icon (top right) → "New repository"
   - Repository name: `portfolio` (or any name you prefer)
   - Description: "My professional portfolio website"
   - Make it **Public** (required for free GitHub Pages)
   - ✅ Check "Add a README file" (optional)
   - Click **"Create repository"**

---

### Step 2: Push Your Code to GitHub

Open Terminal and run these commands:

```bash
# Navigate to your portfolio folder
cd /Users/lavanika/Documents/Career/Lavanika_portfolios/lavafolio

# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"

# Add GitHub repository as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** Replace `USERNAME` with your actual GitHub username and `portfolio` with your repo name.

---

### Step 3: Enable GitHub Pages

1. **Go to Repository Settings**
   - Open your repository on GitHub
   - Click **"Settings"** tab (top menu)

2. **Navigate to Pages**
   - Scroll down left sidebar
   - Click **"Pages"** under "Code and automation"

3. **Configure Source**
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `main` (or `master`)
   - **Folder:** Select `/ (root)`
   - Click **"Save"**

4. **Wait for Deployment**
   - GitHub will build your site (takes 1-2 minutes)
   - Refresh the page to see the deployment status
   - Your site will be live at: `https://USERNAME.github.io/portfolio/`

---

## ✅ Automatic Updates Setup

**Good news!** GitHub Pages automatically updates when you push changes. Here's how:

### Making Updates (Workflow)

```bash
# 1. Make changes to your files
# 2. Save all changes

# 3. Add changed files
git add .

# 4. Commit with descriptive message
git commit -m "Updated projects section"

# 5. Push to GitHub
git push

# 6. Wait 1-2 minutes - your site updates automatically!
```

That's it! Every `git push` automatically triggers a new deployment.

---

## 🎯 Option: Use GitHub Desktop (No Terminal)

If you prefer a GUI:

1. **Download GitHub Desktop**
   - Visit https://desktop.github.com/
   - Install the app

2. **Add Your Repository**
   - File → Add Local Repository
   - Choose your portfolio folder
   - Publish to GitHub

3. **Push Updates**
   - Make changes to files
   - GitHub Desktop shows changes
   - Write commit message
   - Click "Commit to main"
   - Click "Push origin"
   - Done!

---

## 🌐 Custom Domain (Optional)

Want to use your own domain (e.g., `lavanika.com`)?

### Step 1: Buy a Domain
- Namecheap, GoDaddy, Google Domains, etc.

### Step 2: Configure DNS
Add these DNS records at your domain provider:

```
Type: A      Name: @      Value: 185.199.108.153
Type: A      Name: @      Value: 185.199.109.153
Type: A      Name: @      Value: 185.199.110.153
Type: A      Name: @      Value: 185.199.111.153
Type: CNAME  Name: www    Value: USERNAME.github.io
```

### Step 3: Configure GitHub Pages
1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Click "Save"
4. ✅ Check "Enforce HTTPS" (recommended)

Wait 24-48 hours for DNS propagation.

---

## 📝 Important Files for GitHub Pages

### 1. Create CNAME file (for custom domain)

If using custom domain, create a file named `CNAME` (no extension):

```bash
echo "yourdomain.com" > CNAME
```

### 2. Update Meta Tags

Once deployed, update URLs in your HTML files:

**index.html** (and other HTML files):
```html
<!-- Replace placeholder URLs -->
<meta property="og:url" content="https://USERNAME.github.io/portfolio/">
<meta property="og:image" content="https://USERNAME.github.io/portfolio/og-image.jpg">
```

### 3. Add .nojekyll file

Prevent GitHub from processing with Jekyll:

```bash
touch .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll file"
git push
```

---

## 🔧 Troubleshooting

### Issue: Page shows 404
- ✅ Check that GitHub Pages is enabled in Settings
- ✅ Verify branch is set to `main`
- ✅ Wait 2-3 minutes for deployment
- ✅ Try accessing `https://USERNAME.github.io/portfolio/index.html`

### Issue: Changes not showing
- ✅ Clear browser cache (Cmd+Shift+R on Mac)
- ✅ Wait 2-3 minutes after pushing
- ✅ Check Actions tab for build status

### Issue: CSS/JS not loading
- ✅ Ensure all paths are relative (no leading `/`)
- ✅ Check file names match exactly (case-sensitive)
- ✅ Verify files were pushed to GitHub

### Issue: 404.html not working
- ✅ GitHub Pages automatically uses 404.html
- ✅ Make sure it's in the root directory
- ✅ Already set up in your portfolio! ✓

---

## 📊 Monitoring Your Site

### View Deployment Status
1. Go to your repository
2. Click **"Actions"** tab
3. See build and deployment history

### Check Live Site
- Your site: `https://USERNAME.github.io/portfolio/`
- Status page: https://www.githubstatus.com/

---

## 🎨 Best Practices

### Commit Messages
Use clear, descriptive messages:
```bash
git commit -m "Add new project: ML Image Classifier"
git commit -m "Fix contact form validation"
git commit -m "Update about section"
```

### Regular Updates
```bash
# Quick update workflow
git add .
git commit -m "Update portfolio content"
git push
```

### Backup Important Files
Keep local backups of:
- Images
- Project descriptions
- Resume/CV

---

## 🚀 Complete Setup Checklist

- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages in Settings
- [ ] Add .nojekyll file
- [ ] Update meta tag URLs
- [ ] Test live site
- [ ] Test automatic updates (make a change and push)
- [ ] Generate and add favicons
- [ ] Set up contact form email (Formspree/EmailJS)
- [ ] Optional: Configure custom domain
- [ ] Optional: Set up Google Analytics

---

## 📱 Quick Commands Reference

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main

# Regular updates
git add .
git commit -m "Description of changes"
git push

# Check status
git status

# View commit history
git log --oneline

# Undo last commit (before push)
git reset --soft HEAD~1
```

---

## 🎉 After Deployment

### Share Your Portfolio
Once live, share your link:
- LinkedIn: Add to "Featured" section
- Resume: Add URL
- GitHub profile: Pin the repository
- Email signature: Include link

### Monitor Performance
- Test on different devices
- Check loading speed: https://pagespeed.web.dev/
- Validate HTML: https://validator.w3.org/

---

## 💡 Pro Tips

1. **Use meaningful commits** - Future you will thank you
2. **Test locally first** - Always preview changes before pushing
3. **Keep it updated** - Regular updates show active development
4. **Monitor analytics** - Understand your visitors
5. **Mobile first** - Most visitors will be on mobile

---

## 🆘 Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- GitHub Community: https://github.community/
- Check Actions tab for build errors

---

## ✨ You're All Set!

Your portfolio will now:
- ✅ Be live on the internet
- ✅ Update automatically with every push
- ✅ Be accessible 24/7
- ✅ Load fast (served by GitHub's CDN)
- ✅ Have HTTPS enabled
- ✅ Be completely free

**Your site:** `https://USERNAME.github.io/portfolio/`

Happy coding! 🚀
