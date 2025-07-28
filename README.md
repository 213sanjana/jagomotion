# Jago Motion Technologies Website

A responsive website for Jago Motion Technologies, featuring disability and healthcare products with separate desktop and mobile optimizations.

## 🚀 How It Works

### Device Detection & Routing
The website automatically detects the user's device and serves the appropriate version:

- **Desktop Users** → Desktop version (main.html)
- **Mobile Users** → Mobile version (mobile/main.html)

### Entry Point
- `index.html` - Main entry point that detects device type and redirects accordingly
- Shows a loading screen while determining the appropriate version

### Manual Toggle
Users can manually switch between versions:
- **Desktop navbar**: "Mobile View" button
- **Mobile navbar**: "Desktop View" button

## 📁 File Structure

```
jagomotion-1/
├── index.html              # Entry point with device detection
├── main.html               # Desktop version main page
├── navbar.html             # Desktop navigation
├── footer.html             # Desktop footer
├── productcorousal.html    # Desktop product carousel
├── [Product Pages].html    # Desktop product pages
├── mobile/                 # Mobile version folder
│   ├── main.html           # Mobile version main page
│   ├── navbar.html         # Mobile navigation
│   ├── footer.html         # Mobile footer
│   ├── js/
│   │   └── carousel.js     # Mobile carousel functionality
│   └── [Product Pages].html # Mobile product pages
└── images/                 # Shared image assets
```

## 🎨 Features

### Desktop Version
- 3 products per carousel slide
- Full navigation with dropdowns
- Optimized for larger screens

### Mobile Version
- 1 product per carousel slide
- Touch-friendly navigation
- Responsive design for mobile devices
- Optimized images and layouts

## 🛠️ Development

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
npm start
```

### Deployment
The site is configured for Netlify deployment with automatic device detection.

## 📱 Device Detection Logic

The system uses both user agent detection and screen width:
- **Mobile**: User agent contains mobile keywords OR screen width ≤ 768px
- **Desktop**: User agent doesn't contain mobile keywords AND screen width > 768px

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Carousel**: Custom JavaScript with Hammer.js for touch support
- **Deployment**: Netlify

## 📄 License

ISC License - Jago Motion Technologies 