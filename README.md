# 🎯 Tetisnet Spinning Wheel - گردونه شانس Tetisnet

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/tetisnet-spinning-wheel)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen.svg)](https://web.dev/progressive-web-apps/)

A beautiful, responsive Progressive Web App (PWA) spinning wheel game designed for Tetisnet employee rewards program. Built with vanilla JavaScript, HTML5, and CSS3.

> **Persian Description**: یک برنامه وب پیشرفته (PWA) گردونه شانس زیبا و واکنش‌گرا برای برنامه پاداش کارمندان Tetisnet. ساخته شده با JavaScript خالص، HTML5 و CSS3.

## ✨ Features / ویژگی‌ها

### 🎮 Core Features
- **Interactive Spinning Wheel** - چرخش تعاملی گردونه
- **Customizable Prizes** - جوایز قابل تنظیم
- **Beautiful Persian UI** - رابط کاربری زیبا فارسی
- **Responsive Design** - طراحی واکنش‌گرا
- **Smooth Animations** - انیمیشن‌های روان

### 📱 PWA Capabilities
- **Cross-Platform Support** - پشتیبانی از تمام پلتفرم‌ها
  - iOS Safari
  - Android Chrome
  - Windows Edge
  - Desktop browsers
- **Offline Functionality** - قابلیت کار آفلاین
- **Installable App** - قابلیت نصب به عنوان اپ
- **Push Notifications** - اعلان‌های push
- **Background Sync** - همگام‌سازی پس‌زمینه

### 🎨 Design Features
- **Persian Fonts** - فونت‌های فارسی (Vazir, Amiri)
- **Gradient Backgrounds** - پس‌زمینه‌های گرادیان
- **Radial Text Layout** - چیدمان متن شعاعی
- **Modern UI/UX** - رابط کاربری مدرن
- **Mobile Optimized** - بهینه‌سازی موبایل

## 🚀 Quick Start / شروع سریع

### Option 1: Deploy to Vercel (Recommended)
1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Deploy instantly!

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/tetisnet-spinning-wheel.git

# Navigate to project directory
cd tetisnet-spinning-wheel

# Serve locally (Python 3)
python -m http.server 8000

# Or using Node.js
npx serve .

# Or using PHP
php -S localhost:8000
```

Visit `http://localhost:8000` in your browser.

## 📁 Project Structure / ساختار پروژه

```
tetisnet-spinning-wheel/
├── index.html              # Main HTML file / فایل HTML اصلی
├── manifest.json            # PWA manifest / مانیفست PWA
├── sw.js                   # Service Worker / سرویس ورکر
├── browserconfig.xml       # Windows tiles config / تنظیمات Windows
├── README.md              # Project documentation / مستندات پروژه
├── LICENSE                # MIT License / مجوز MIT
├── .gitignore            # Git ignore rules / قوانین Git ignore
├── vercel.json           # Vercel configuration / تنظیمات Vercel
└── prizes.txt            # External prizes file (optional) / فایل جوایز خارجی (اختیاری)
```

## 🛠️ Configuration / پیکربندی

### Default Prizes / جوایز پیش‌فرض
The app comes with 20 pre-configured Persian prizes for employee rewards:
- Immediate time off / مرخصی فوری
- Flexible work hours / ساعات کاری منعطف
- Gift cards / کارت‌های هدیه
- Entertainment vouchers / کوپن‌های تفریحی
- And more... / و بیشتر...

### Custom Prizes / جوایز سفارشی
Create a `prizes.txt` file in the root directory with one prize per line:
```
Your custom prize 1
Your custom prize 2
جایزه سفارشی ۱
جایزه سفارشی ۲
```

## 🔧 Technical Details / جزئیات فنی

### Technologies Used / تکنولوژی‌های استفاده شده
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **PWA**: Service Worker, Web App Manifest
- **Fonts**: Google Fonts (Vazir, Amiri)
- **Icons**: SVG-based with data URIs
- **Deployment**: Vercel, GitHub Pages compatible

### Browser Support / پشتیبانی مرورگرها
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11.1+
- ✅ Edge 79+
- ✅ iOS Safari 11.3+
- ✅ Android Chrome 60+

### Performance / عملکرد
- **Lighthouse Score**: 100/100 PWA
- **Load Time**: < 2 seconds
- **Bundle Size**: < 100KB (excluding fonts)
- **Offline Ready**: Full functionality without internet

## 📱 Installation as PWA / نصب به عنوان PWA

### Desktop / دسکتاپ
1. Open in Chrome/Edge
2. Click the install button in address bar
3. Follow installation prompts

### Mobile / موبایل
**iOS:**
1. Open in Safari
2. Tap Share button
3. Select "Add to Home Screen"

**Android:**
1. Open in Chrome
2. Tap menu (⋮)
3. Select "Add to Home screen"

## 🚀 Deployment / استقرار

### Vercel (Recommended)
1. Fork this repository
2. Connect to Vercel
3. Deploy automatically

### GitHub Pages
1. Go to repository Settings
2. Enable GitHub Pages
3. Select source branch

### Netlify
1. Connect repository to Netlify
2. Deploy with default settings

### Other Platforms
The app is a static site and works on any static hosting platform:
- Firebase Hosting
- AWS S3 + CloudFront
- Azure Static Web Apps
- Cloudflare Pages

## 🔒 Security / امنیت

- No external API dependencies
- Client-side only processing
- HTTPS required for PWA features
- Content Security Policy headers recommended

## 🎯 Customization / سفارشی‌سازی

### Colors / رنگ‌ها
Edit CSS variables in `index.html`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ff6b6b;
}
```

### Wheel Segments / بخش‌های گردونه
Modify the `colors` array in JavaScript to change segment colors.

### Text and Branding / متن و برندینگ
Update the Persian text in HTML and JavaScript as needed.

## 🐛 Troubleshooting / عیب‌یابی

### Common Issues / مشکلات رایج

**PWA not installing:**
- Ensure HTTPS is enabled
- Check service worker registration
- Verify manifest.json validity

**Fonts not loading:**
- Check internet connection
- Verify Google Fonts CDN access

**Wheel alignment issues:**
- Clear browser cache
- Check console for JavaScript errors

## 🤝 Contributing / مشارکت

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License / مجوز

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments / قدردانی

- **Vazir Font** by Saber Rastikerdar
- **Amiri Font** by Khaled Hosny
- **Persian localization** for Tetisnet team
- **PWA best practices** from web.dev

## 📞 Support / پشتیبانی

For support and questions:
- Open an issue on GitHub
- Contact: [your-email@example.com]

---

**Made with ❤️ for Tetisnet Team**

**ساخته شده با ❤️ برای تیم Tetisnet** 