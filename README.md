# JAGO Motion Technologies Website

A static website showcasing healthcare and disability products for enhanced mobility and independence.

## 🚀 Features

- Responsive design optimized for all devices
- Product showcase with interactive carousel
- Contact information and inquiry forms
- Modern UI with Tailwind CSS
- Accessibility-focused design

## 📁 Project Structure

```
JAGO_Website/
├── index.html          # Entry point (redirects to main.html)
├── main.html           # Main homepage
├── ElectricRikshaw.html # Product detail page
├── contacts.html       # Contact page
├── blogs.html          # Blog section
├── navbar.html         # Navigation component
├── footer.html         # Footer component
├── productcorousal.html # Product carousel component
├── images/             # Product images and assets
├── package.json        # NPM configuration
├── netlify.toml        # Netlify deployment configuration
└── README.md           # This file
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

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

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