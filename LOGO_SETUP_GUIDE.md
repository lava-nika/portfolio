# Adding Company Logos to Your Portfolio

I've updated your experience page to display company logos! Here's how to add the actual logo images:

## 📁 Where to Put Logo Files

Save your logo images in: `/Users/lavanika/Documents/Career/Lavanika_portfolios/lavafolio/images/logos/`

## 🖼️ Required Logo Files

You need to save these 4 logo files with these exact names:

1. **hpe-logo.png** - HPE Juniper Networking logo
2. **cisco-logo.png** - Cisco Systems logo  
3. **microsoft-logo.png** - Microsoft logo
4. **mysmartprice-logo.png** - MySmartPrice logo

## 📝 How to Save the Logos

### Method 1: From Screenshots (Recommended)

Since you provided screenshots, here's how to extract and save them:

1. **Open the screenshot images you sent**
2. **For each logo:**
   - Open in Preview or any image editor
   - Crop to just the logo (remove white space)
   - For best results, make the image square or close to it
   - Save as PNG with transparent background if possible

3. **Save each file with the correct name:**
   ```bash
   # Navigate to logos folder
   cd /Users/lavanika/Documents/Career/Lavanika_portfolios/lavafolio/images/logos/
   
   # Copy your logo files here with these exact names:
   # - hpe-logo.png
   # - cisco-logo.png
   # - microsoft-logo.png
   # - mysmartprice-logo.png
   ```

### Method 2: Download Official Logos

Alternatively, download official logos from:

1. **HPE:** https://www.hpe.com/us/en/about/media-center.html
2. **Cisco:** https://www.cisco.com/c/en/us/about/brand-center.html
3. **Microsoft:** https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks
4. **MySmartPrice:** Use the one you provided in the screenshot

## 🎨 Logo Specifications

For best appearance:
- **Format:** PNG (with transparent background preferred)
- **Size:** At least 200x200 pixels
- **Aspect Ratio:** Square or close to square works best
- **File Size:** Keep under 100KB each for fast loading

## ✅ Quick Save Instructions

**Using Finder:**

1. Open Finder and navigate to:
   ```
   /Users/lavanika/Documents/Career/Lavanika_portfolios/lavafolio/images/logos/
   ```

2. Drag and drop your logo files into this folder

3. Rename them to match exactly:
   - `hpe-logo.png`
   - `cisco-logo.png`
   - `microsoft-logo.png`
   - `mysmartprice-logo.png`

## 🧪 Testing

After adding the logos:

1. Open `experience.html` in your browser
2. You should see company logos next to each position
3. They will be:
   - 60x60 pixels on desktop
   - 50x50 pixels on mobile
   - Rounded corners with subtle shadow
   - White background

## 🚀 Push to GitHub

Once you've added the logo files:

```bash
cd /Users/lavanika/Documents/Career/Lavanika_portfolios/lavafolio

# Add the logo files
git add images/logos/*.png

# Add the updated HTML and CSS
git add experience.html styles.css

# Commit
git commit -m "Add company logos to experience section"

# Push (your site will update automatically!)
git push
```

## 📱 Mobile Responsive

The logos are fully responsive:
- Desktop: 60x60px, side-by-side layout
- Mobile: 50x50px, stacked layout

## 🎨 Logo Background

All logos have:
- White background (works in both light and dark mode)
- Subtle border and shadow
- Rounded corners (12px radius)
- Padding for nice spacing

## 🔧 Customizing Logo Size (Optional)

If you want to adjust logo size, edit `styles.css`:

```css
.company-logo {
    width: 60px;  /* Change this */
    height: 60px; /* And this */
}
```

---

## ✨ What's Been Updated

1. ✅ Added `images/logos/` folder
2. ✅ Updated `experience.html` with logo containers
3. ✅ Added CSS styling for logos
4. ✅ Made logos responsive for mobile
5. ✅ Added dark mode support
6. ⏳ **You need to:** Add the actual logo image files

---

Need help extracting logos from your screenshots? Let me know!
