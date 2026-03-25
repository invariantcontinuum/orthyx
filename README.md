# OrthyxAI - The Structural Integrity Platform

A full-stack web application for OrthyxAI, featuring a React frontend with internationalization (i18n), dark/light theme support, and a Node.js/Express backend with SMTP email capabilities.

## Project Structure

```
/data/OrthyxAI/
├── frontend/                 # React SPA (Vite + TailwindCSS)
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── layout/       # Layout components (Navbar, Footer, etc.)
│   │   │   └── ui/           # UI components (Hero, Sections, etc.)
│   │   ├── contexts/         # React contexts (Theme, Cookie)
│   │   ├── hooks/            # Custom hooks
│   │   ├── locales/          # i18n translations (EN, FR, DE)
│   │   ├── pages/            # Page components
│   │   │   └── legal/        # Legal pages
│   │   ├── utils/            # Utility functions
│   │   ├── App.jsx           # Main app component
│   │   ├── main.jsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── public/               # Static assets
│   ├── Dockerfile            # Frontend Docker config
│   ├── nginx.conf            # Nginx configuration
│   └── package.json
├── backend/                  # Node.js/Express API
│   ├── src/
│   │   ├── routes/           # API routes
│   │   └── server.js         # Express server
│   ├── Dockerfile            # Backend Docker config
│   └── package.json
├── docker-compose.yml        # Docker Compose configuration
├── .env.example              # Environment variables template
└── README.md                 # This file
```

## Features

### Frontend
- **React 18** with Vite for fast development
- **TailwindCSS** for styling with custom warm color palette
- **i18n** support for English, French, and German
- **Dark/Light theme** toggle with persistence
- **Cookie consent** banner with persistence
- **Responsive design** for all screen sizes
- **Interactive visualizations** (Chart.js for market matrix)

### Pages
1. **Home** - Hero, ORA Loop, Live Simulation, Market Analysis, Roadmap, Pricing
2. **About Us** - Mission, Vision, Values, Team
3. **Services** - Active Governance, GraphRAG Intelligence, Compliance, Consulting
4. **Portfolio** - Use Cases (FinTech, Healthcare, Media)
5. **Blog** - Articles and news
6. **Contact** - Functional contact form with email integration
7. **FAQ** - Accordion-style questions and answers
8. **Legal Pages** - Terms, Privacy, Cookies, Impressum

### Backend
- **Express.js** API server
- **SMTP Integration** via Nodemailer
- **Rate limiting** for security
- **Input validation** with express-validator
- **Security headers** with Helmet
- **CORS** configured for cross-origin requests

## Quick Start

### Prerequisites
- Docker and Docker Compose
- Or Node.js 20+ for local development

### Using Docker (Recommended)

1. Clone and navigate to the project:
```bash
cd /data/OrthyxAI
```

2. Create environment file:
```bash
cp .env.example .env
# Edit .env with your SMTP credentials
```

3. Build and run:
```bash
docker-compose up -d --build
```

4. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/api/health

### Local Development

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd backend
npm install
# Create .env file with your SMTP settings
npm run dev
```

## Environment Variables

Create a `.env` file in the project root with:

```env
# SMTP Configuration
SMTP_HOST=mail.invariantcontinuum.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM=noreply@orthyxai.com

# Contact Form
CONTACT_EMAIL=contact@orthyxai.com

# Application
NODE_ENV=production
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health | Health check |
| POST | /api/contact | Submit contact form |

### Contact Form Payload
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Hello, I'm interested in..."
}
```

## Internationalization

The application supports three languages:
- **English** (en) - Default
- **French** (fr)
- **German** (de)

Translations are stored in `/frontend/src/locales/` as JSON files.

## Theming

The application supports both light and dark modes:
- Toggle in the navbar
- Preference saved to localStorage
- System preference detection on first visit

## Production Deployment

1. Set up your domain DNS to point to your server
2. Configure SSL certificates (Let's Encrypt recommended)
3. Update the `docker-compose.yml` with production values
4. Set up proper SMTP credentials
5. Deploy:
```bash
docker-compose -f docker-compose.yml up -d
```

## Security Features

- Helmet.js for security headers
- Rate limiting on API endpoints
- Input validation and sanitization
- CORS configuration
- Non-root user in Docker containers
- Health checks for container monitoring

## License

© 2026 OrthyxAI Inc. All rights reserved.
