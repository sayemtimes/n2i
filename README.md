# ইলম থেকে ইখলাস - From Knowledge to Sincerity

A comprehensive Islamic da'wah platform built with Next.js 14, featuring a 4-month guided Islamic lifestyle transformation program with AI assistance.

## 🌟 Features

- **4-Month Islamic Program**: Structured monthly plans with weekly breakdowns
- **AI Assistant**: Islamic Q&A with Bengali and English support
- **Multi-language**: Bengali (primary) and English support
- **Download Center**: Free PDFs, social media templates, and resources
- **Responsive Design**: Mobile-first approach with beautiful Islamic theming
- **SEO Optimized**: Meta tags, OpenGraph, and social sharing ready

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: TailwindCSS, shadcn/ui components
- **Fonts**: Noto Sans Bengali, Inter
- **Theme**: Islamic green, white, and golden color palette
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/ilm-to-ikhlas.git
cd ilm-to-ikhlas
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   ├── monthly-plan/      # Monthly plan pages
│   ├── ai-assistant/      # AI chat interface
│   ├── downloads/         # Download center
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Homepage hero section
│   ├── navbar.tsx        # Navigation component
│   └── footer.tsx        # Footer component
├── lib/                  # Utility functions
└── public/              # Static assets
\`\`\`

## 🎨 Design System

### Colors
- **Primary Green**: \`hsl(142.1 76.2% 36.3%)\`
- **Islamic Gold**: \`hsl(45 93% 47%)\`
- **Cream Background**: \`hsl(48 100% 96%)\`

### Typography
- **Bengali**: Noto Sans Bengali
- **English**: Inter
- **Arabic**: Amiri

### Components
- Built with shadcn/ui for consistency
- Custom Islamic-themed variants
- Responsive design patterns

## 🌐 Pages Overview

### Homepage (\`/\`)
- Hero section with Bismillah
- Feature highlights
- Monthly plan overview
- Testimonials
- Call-to-action

### Monthly Plan (\`/monthly-plan\`)
- 4-month program breakdown
- Weekly goals and tasks
- Progress tracking
- Category-wise organization (Ilm, Amal, Tazkiyah, Dawah)

### AI Assistant (\`/ai-assistant\`)
- Interactive chat interface
- Quick question templates
- Bengali/English responses
- Islamic knowledge base

### Downloads (\`/downloads\`)
- Free PDF resources
- Social media templates
- Category-wise content
- Sharing capabilities

## 🤖 AI Integration

The platform includes an AI assistant for Islamic guidance:

- **Question Types**: Fiqh, Aqeedah, Ibadah, Akhlaq
- **Languages**: Bengali and English
- **Sources**: Quran and Hadith-based responses
- **Disclaimer**: Encourages consultation with scholars

## 📱 Responsive Design

- **Mobile-first**: Optimized for smartphones
- **Tablet-friendly**: Adapted layouts for tablets
- **Desktop**: Full-featured experience
- **Touch-friendly**: Large tap targets and gestures

## 🔧 Customization

### Adding New Content

1. **Monthly Plans**: Edit \`app/monthly-plan/page.tsx\`
2. **AI Responses**: Modify the AI logic in \`app/ai-assistant/page.tsx\`
3. **Downloads**: Add new resources in \`app/downloads/page.tsx\`

### Styling Changes

1. **Colors**: Update CSS variables in \`app/globals.css\`
2. **Components**: Modify shadcn/ui components in \`components/ui/\`
3. **Layout**: Adjust responsive breakpoints in \`tailwind.config.ts\`

## 🌍 Internationalization

The platform supports Bengali and English:

- **Primary Language**: Bengali (bn)
- **Secondary Language**: English (en)
- **Font Support**: Noto Sans Bengali for Bengali text
- **RTL Support**: Ready for Arabic text integration

## 📈 SEO & Performance

- **Meta Tags**: Comprehensive meta descriptions
- **OpenGraph**: Social media sharing optimization
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and semantic HTML

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/new-feature\`
3. Commit changes: \`git commit -am 'Add new feature'\`
4. Push to branch: \`git push origin feature/new-feature\`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Islamic Scholars**: For guidance on authentic Islamic content
- **Community**: For feedback and suggestions
- **Open Source**: shadcn/ui, Next.js, and other amazing tools

## 📞 Support

For support and questions:
- **Email**: info@ilmtoikhlas.com
- **Issues**: GitHub Issues page
- **Community**: Join our Telegram channel

---

**بارك الله فيكم** - May Allah bless you all!

Built with ❤️ for the Muslim Ummah
\`\`\`
