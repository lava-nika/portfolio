# Favicon Generation Instructions

You'll need to create favicon images for your portfolio. Here are the required sizes:

## Required Files:
- `favicon-16x16.png` - 16x16 pixels
- `favicon-32x32.png` - 32x32 pixels
- `apple-touch-icon.png` - 180x180 pixels
- `icon-192.png` - 192x192 pixels
- `icon-512.png` - 512x512 pixels
- `favicon.ico` - Multi-size ICO file

## Easy Options to Generate Favicons:

### Option 1: Use a Favicon Generator (Recommended)
1. Visit https://realfavicongenerator.net/
2. Upload a high-resolution image (at least 512x512px) with your logo/initials "LS"
3. Customize the design if needed
4. Download the generated package
5. Replace the placeholder files in your portfolio directory

### Option 2: Design Your Own
1. Create a design in Figma, Photoshop, or Canva with the "LS" logo
2. Use your pastel orange (#ffb899) and pink (#ffb3c6) colors
3. Export at 512x512px
4. Use an online tool to resize for different dimensions

### Option 3: Simple Text-Based Icon
Use this HTML/Canvas approach to generate a simple text icon:

```html
<!DOCTYPE html>
<html>
<body>
  <canvas id="canvas" width="512" height="512"></canvas>
  <script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, '#ffb899');
    gradient.addColorStop(1, '#ffb3c6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 280px Outfit, Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('LS', 256, 276);
    
    // Download
    const link = document.createElement('a');
    link.download = 'icon-512.png';
    link.href = canvas.toDataURL();
    link.click();
  </script>
</body>
</html>
```

Save this as `favicon-generator.html`, open in a browser, and it will download your icon!

## Additional Images for Social Sharing:
You should also create:
- `og-image.jpg` - 1200x630 pixels (for Open Graph)
- `twitter-card.jpg` - 1200x600 pixels (for Twitter Cards)

These should showcase your name, title, and brand colors.
