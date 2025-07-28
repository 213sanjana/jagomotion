# JAGO Motion Technologies Website

A static website showcasing healthcare and disability products for enhanced mobility and independence.

## 🚀 Features

- **Responsive design** optimized for all devices
- **Enhanced product galleries** with interactive media navigation
- **Dual thumbnail system** - Horizontal top row + vertical left sidebar
- **Video integration** with thumbnail previews
- **Contact information** and inquiry forms
- **Modern UI** with Tailwind CSS
- **Accessibility-focused** design
- **Brochure download** functionality for each product

## 🎨 Gallery Features

### Interactive Product Galleries
- **Top horizontal thumbnails**: 5 image thumbnails for quick navigation
- **Left vertical thumbnails**: Video previews for multimedia content
- **Main media display**: Large, high-quality product images and videos
- **Smooth transitions**: Seamless switching between media items
- **Video controls**: Full video playback with controls

### Product Showcase
Each product page features:
- **5 high-quality product images** in the main gallery
- **Video demonstrations** accessible via left thumbnails
- **Product specifications** and features list
- **Pricing information** with discount displays
- **Inquiry buttons** for customer engagement
- **Brochure downloads** for detailed product information

## 📁 Project Structure

```
JAGO_Website/
├── index.html                    # Entry point (redirects to main.html)
├── main.html                     # Main homepage
├── CPWalker_Page.html            # Cerebral Palsy Walker product page
├── E_Mini_Page.html              # Electric Mini-Vehicle product page
├── E_Rickshaw_Page.html          # Electric Rickshaw product page
├── E_Tricycle_Page.html          # Electric Tricycle product page
├── E_Trike_Page.html             # Electric Trike product page
├── WAP_Page.html                 # Walker Assisted Prosthetics page
├── contacts.html                 # Contact page
├── blogs.html                    # Blog section
├── navbar.html                   # Navigation component
├── footer.html                   # Footer component
├── productcorousal.html          # Product carousel component
├── images/                       # Product images and assets
│   ├── CPWalker/                 # CP Walker product images & videos
│   ├── E-Mini/                   # Electric Mini product images & videos
│   ├── E-Rickshaw/               # Electric Rickshaw product images & videos
│   ├── E-Tricycle/               # Electric Tricycle product images & videos
│   ├── E-Trike/                  # Electric Trike product images & videos
│   └── WAP/                      # Walker Assisted Prosthetics images & videos
├── package.json                  # NPM configuration
├── netlify.toml                  # Netlify deployment configuration
└── README.md                     # This file
```

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start local development server:**
   ```bash
   npm start
   # or
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🎯 Product Pages

### Available Products
- **Cerebral Palsy Walker** - Specialized mobility assistance
- **Electric Mini-Vehicle** - Compact electric transportation
- **Electric Rickshaw** - Eco-friendly passenger transport
- **Electric Tricycle** - Three-wheeled electric mobility
- **Electric Trike** - Alternative electric transportation
- **Walker Assisted Prosthetics** - Advanced mobility solutions

### Gallery Navigation
- **Click thumbnails** to switch between product images
- **Hover over video thumbnails** for preview
- **Click video thumbnails** to play full videos
- **Download brochures** for detailed product information

## 🚀 Deployment to Netlify

### Option 1: Drag & Drop (Quick Deploy)
1. Go to [Netlify](https://netlify.com)
2. Drag and drop your project folder to the deploy area
3. Your site will be live instantly!

### Option 2: Git Integration (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Configure build settings:
   - **Build command:** Leave empty (static site)
   - **Publish directory:** `.` (root directory)
4. Deploy!

### Option 3: Netlify CLI
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy
   ```

## ⚙️ Build Configuration

The project is configured for static site deployment with:

- **No build process required** - Static HTML files
- **Optimized caching** - Images cached for 1 year
- **Security headers** - XSS protection, frame options
- **SEO-friendly redirects** - Proper 404 handling
- **Video optimization** - Compressed video files for faster loading

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎨 UI/UX Features

- **Responsive design** that works on all screen sizes
- **Smooth animations** and transitions
- **Intuitive navigation** with clear visual hierarchy
- **Accessibility features** for users with disabilities
- **Fast loading** optimized images and videos
- **Professional styling** with Tailwind CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

ISC License - see package.json for details

## 📞 Contact

For questions about deployment or the website, contact JAGO Motion Technologies.

---

**Built with ❤️ for enhanced mobility and independence** 