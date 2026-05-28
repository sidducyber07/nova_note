<div align="center">

<!-- 🖼️ Add your hero/banner image here -->
<!-- ![nova_note Banner](docs/images/hero.png) -->

<br />

# 🧠 nova\_note

### *Where thoughts become intelligent.*

**An AI-powered workspace that blends the best of Notion with GPT-4 intelligence.**
Organize notes, get AI summaries, enhance writing, extract tasks, upload documents,
and collaborate — all in one beautiful dark-mode platform.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.dev/)
[![OpenAI](https://img.shields.io/badge/AI-GPT--4-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

<br />

[🚀 Get Started](#-getting-started) &nbsp;·&nbsp;
[✨ Features](#-features) &nbsp;·&nbsp;
[🧱 Tech Stack](#-tech-stack) &nbsp;·&nbsp;
[🗄️ Database](#️-database-schema) &nbsp;·&nbsp;
[🤖 AI Features](#-ai-features) &nbsp;·&nbsp;
[🌐 Deployment](#-deployment) &nbsp;·&nbsp;
[🤝 Contributing](#-contributing)

</div>

---

## ✨ Features

> nova\_note is a **full-stack SaaS** application packed with intelligent features built for modern productivity.

| Feature | Description |
|---|---|
| 📝 **Smart Notes** | Create rich markdown notes with pinning, archiving, tagging & full-text search |
| 🤖 **AI Assistant** | GPT-4 powered summarization, writing improvement, task extraction, and Q&A chat |
| 📁 **Workspaces** | Organize notes into colored workspaces with role-based collaboration |
| 📄 **Document Upload** | Upload PDFs & text files — AI extracts and analyzes content instantly |
| 🔐 **Auth with Clerk** | Secure sign-up/sign-in with social login support (Google, GitHub, etc.) |
| 🗂️ **Note Hierarchy** | Nest notes inside parent notes, just like Notion's page tree |
| 📊 **Activity Logs** | Full audit trail for all note and workspace changes |
| 💳 **Subscription Plans** | Free, Pro, and Enterprise tiers (extendable with Stripe) |
| 🌙 **Dark Mode UI** | Stunning dark-first design with glassmorphism and neon accents |
| ⚡ **Rate Limiting** | Configurable API rate limiting to protect your endpoints |

---

## 🧱 Tech Stack

<table>
<thead>
<tr><th>Layer</th><th>Technology</th><th>Version</th></tr>
</thead>
<tbody>
<tr><td>🖼️ Frontend Framework</td><td>Next.js (App Router) + TypeScript</td><td>15 / 5.3</td></tr>
<tr><td>🎨 Styling</td><td>Tailwind CSS + class-variance-authority</td><td>3.4</td></tr>
<tr><td>🔐 Authentication</td><td>Clerk (@clerk/nextjs)</td><td>^6.0</td></tr>
<tr><td>🗄️ Database ORM</td><td>Prisma + PostgreSQL</td><td>^6.0</td></tr>
<tr><td>🤖 AI Engine</td><td>OpenAI SDK (GPT-4 Turbo)</td><td>^4.0</td></tr>
<tr><td>📦 State Management</td><td>Zustand</td><td>^4.4</td></tr>
<tr><td>🔔 Notifications</td><td>Sonner + react-hot-toast</td><td>latest</td></tr>
<tr><td>📅 Date Utilities</td><td>date-fns</td><td>^2.30</td></tr>
<tr><td>📝 Markdown Rendering</td><td>react-markdown + remark-gfm</td><td>^9.0</td></tr>
<tr><td>🌐 HTTP Client</td><td>Axios</td><td>^1.6</td></tr>
<tr><td>🔣 Icons</td><td>lucide-react + react-icons</td><td>latest</td></tr>
</tbody>
</table>

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed before you begin:

| Requirement | Version | Link |
|---|---|---|
| **Node.js** | `v18+` | [nodejs.org](https://nodejs.org/) |
| **npm** | `v9+` | Bundled with Node.js |
| **PostgreSQL** | `v14+` | [postgresql.org](https://www.postgresql.org/download/) or use [Neon (free)](https://neon.tech/) |
| **Clerk Account** | — | [clerk.com (free tier)](https://clerk.com/) |
| **OpenAI API Key** | — | [platform.openai.com](https://platform.openai.com/) |

---

### 📥 Step 1 — Clone the Repository

```bash
git clone https://github.com/your-username/nova_note.git
cd nova_note
```

---

### 📦 Step 2 — Install Dependencies

```bash
npm install
```

> This installs all packages: Next.js, Prisma, Clerk, OpenAI SDK, Tailwind CSS, Zustand, and more.

---

### ⚙️ Step 3 — Set Up Environment Variables

Copy the example file and fill in your credentials:

```bash
# Windows (PowerShell)
Copy-Item .env.example .env

# Mac / Linux
cp .env.example .env
```

Open `.env` and configure each value:

```env
# ─────────────────────────────────────────────────────────────
# 🗄️  DATABASE
# ─────────────────────────────────────────────────────────────
# Local PostgreSQL:
DATABASE_URL="postgresql://user:password@localhost:5432/nova_note"

# Cloud (Neon — recommended for Vercel):
# DATABASE_URL="postgresql://user:password@ep-xxxx.us-east-2.aws.neon.tech/nova_note?sslmode=require"


# ─────────────────────────────────────────────────────────────
# 🔐  CLERK AUTHENTICATION
# Get keys from: https://dashboard.clerk.com → Your App → API Keys
# ─────────────────────────────────────────────────────────────
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxx

# Redirect URLs (keep as-is for local development)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard


# ─────────────────────────────────────────────────────────────
# 🤖  OPENAI
# Get key from: https://platform.openai.com/api-keys
# ─────────────────────────────────────────────────────────────
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


# ─────────────────────────────────────────────────────────────
# 🌐  APP CONFIGURATION
# ─────────────────────────────────────────────────────────────
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development


# ─────────────────────────────────────────────────────────────
# ⚡  RATE LIMITING
# ─────────────────────────────────────────────────────────────
RATE_LIMIT_WINDOW_MS=60000        # 60-second rolling window
RATE_LIMIT_MAX_REQUESTS=30        # Max requests per window
```

---

### 🗄️ Step 4 — Set Up the Database

**Create the database** (skip if using Neon cloud):
```bash
psql -U postgres -c "CREATE DATABASE nova_note;"
```

**Push the schema** to your database:
```bash
npm run db:push
```

**Generate the Prisma Client**:
```bash
npm run db:generate
```

> ✅ All database tables are now created and the Prisma client is ready.

---

### 🔑 Step 5 — Configure Clerk

1. Sign up at [clerk.com](https://clerk.com/) — free tier is sufficient
2. Create a **New Application**
3. Choose sign-in methods: Email, Google, GitHub, etc.
4. Go to **API Keys** and copy your **Publishable Key** + **Secret Key** into `.env`
5. In **Clerk Dashboard → Redirects**, confirm:
   - Sign-in URL: `/auth/sign-in`
   - Sign-up URL: `/auth/sign-up`
   - After sign-in: `/dashboard`
   - After sign-up: `/dashboard`

---

### ▶️ Step 6 — Start the Dev Server

```bash
npm run dev
```

🎉 Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📋 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the optimized production bundle |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint across all source files |
| `npm run db:push` | Sync Prisma schema changes to the database |
| `npm run db:generate` | Regenerate the Prisma Client |
| `npm run db:studio` | Open Prisma Studio — visual database browser |

---

## 🗄️ Database Schema

nova\_note uses **PostgreSQL** managed with **Prisma ORM**. Overview of all data models:

```
User
 ├── Workspace[]        → workspaces they own
 ├── Note[]             → all their notes
 ├── UploadedFile[]     → files they've uploaded
 ├── AIHistory[]        → AI interaction logs
 └── ActivityLog[]      → audit trail of all actions

Workspace
 ├── Note[]             → notes inside this workspace
 └── WorkspaceMember[]  → collaborators (owner / editor / viewer)

Note
 ├── Note[]             → nested child pages (like Notion)
 ├── AIHistory[]        → AI interactions tied to this note
 ├── UploadedFile[]     → files attached to this note
 └── ActivityLog[]      → change history

AIHistory
 └── type, prompt, response, model, tokens, duration, status

UploadedFile
 └── filename, url, mimeType, size, fileType, extractedText

ActivityLog
 └── action, entityType, entityId, changes (JSON)

Subscription
 └── plan (free | pro | enterprise), status, startDate, endDate
```

---

## 📁 Project Structure

```
nova_note/
│
├── prisma/
│   └── schema.prisma          # All database models
│
├── src/
│   ├── app/
│   │   ├── (auth)/            # Clerk-managed auth routes
│   │   │   ├── sign-in/       # → /auth/sign-in
│   │   │   └── sign-up/       # → /auth/sign-up
│   │   ├── globals.css        # Global CSS variables & base styles
│   │   ├── layout.tsx         # Root layout: ClerkProvider + Toaster
│   │   └── page.tsx           # Public landing page
│   │
│   ├── components/
│   │   └── ui/                # Reusable shadcn-style components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       └── textarea.tsx
│   │
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client singleton (prevents hot reload issues)
│   │   └── utils.ts           # Shared utilities: cn(), slugify helpers, etc.
│   │
│   └── types/                 # Global TypeScript type definitions
│
├── docs/
│   └── images/                # Screenshots for README (add your images here)
│
├── .env.example               # Template — copy to .env and fill in values
├── .gitignore
├── next.config.js             # Next.js config: images, strict mode, etc.
├── tailwind.config.ts         # Tailwind config: theme, colors, fonts
├── tsconfig.json              # TypeScript compiler options
├── postcss.config.js
└── package.json
```

---

## 🤖 AI Features

nova\_note integrates **GPT-4 Turbo** to turn your notes into a smart assistant:

| AI Action | Trigger | What it does |
|---|---|---|
| 📋 **Summarize** | Click "Summarize" on a note | Generates a concise, bullet-point summary |
| ✍️ **Improve Writing** | Click "Improve" | Fixes grammar, clarity, tone, and structure |
| ✅ **Extract Tasks** | Click "Extract Tasks" | Pulls out all action items as a checklist |
| 💬 **Chat with Note** | Open AI chat panel | Ask any question about the note's content |
| 📄 **Analyze Document** | Upload a PDF or TXT file | AI reads and summarizes the document for you |

> All AI sessions are logged in `AIHistory` — including prompt, response, token usage, model used, duration, and status.

---

## 🔒 Security & Auth Flow

```
User visits nova_note
        │
        ▼
 Clerk middleware intercepts
        │
   ┌────┴────────┐
   │             │
Not signed in  Signed in
   │             │
   ▼             ▼
/auth/sign-in  /dashboard  ← protected routes
```

**Key security details:**
- ✅ **No passwords stored** in your database — Clerk handles all of it
- ✅ User's `clerkId` is synced to the `User` table on first sign-in
- ✅ All `/dashboard` routes are protected via Clerk middleware
- ✅ API routes use `auth()` from `@clerk/nextjs/server` to verify sessions
- ✅ Rate limiting on AI endpoints prevents abuse

---

## 🌐 Deployment

### ☁️ Deploy to Vercel (Recommended)

```
1. Push your code to GitHub
2. Go to https://vercel.com → Import Project
3. Add ALL environment variables from your .env file
4. Click Deploy ✅
```

> 💡 **Tip:** Pair with **[Neon](https://neon.tech/)** for a free, serverless PostgreSQL database — perfect for Vercel's serverless architecture.

---

### 🐳 Deploy with Docker

```dockerfile
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source and build
COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 3000
ENV NODE_ENV=production

CMD ["npm", "start"]
```

```bash
# Build and run
docker build -t nova_note .
docker run -p 3000:3000 --env-file .env nova_note
```

---

## 🤝 Contributing

Contributions are warmly welcome! Follow these steps:

```bash
# 1. Fork the repo on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/nova_note.git

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes, then commit (Conventional Commits format)
git commit -m "feat: add dark mode toggle"
git commit -m "fix: correct prisma relation cascade"
git commit -m "docs: update setup instructions"

# 5. Push and open a Pull Request
git push origin feature/your-feature-name
```

**Commit message types:** `feat` · `fix` · `docs` · `style` · `refactor` · `test` · `chore`

---

## 🐛 Troubleshooting

<details>
<summary><strong>❌ Prisma Client not found / @prisma/client errors</strong></summary>

Regenerate the Prisma client:
```bash
npm run db:generate
```
If that doesn't work, delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
npm run db:generate
```
</details>

<details>
<summary><strong>❌ Database connection failed</strong></summary>

1. Confirm PostgreSQL is running: `pg_ctl status`
2. Double-check `DATABASE_URL` in your `.env` file
3. Verify the database exists: `psql -U postgres -l`
4. Re-run: `npm run db:push`
</details>

<details>
<summary><strong>❌ Clerk auth errors or infinite redirect loop</strong></summary>

1. Verify both Clerk keys (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`) in `.env`
2. Ensure sign-in/sign-up URLs in `.env` match your actual routes exactly
3. Check Clerk Dashboard → Redirects for mismatches
4. Clear all browser cookies for `localhost:3000` and retry
</details>

<details>
<summary><strong>❌ OpenAI API errors (401 / quota exceeded)</strong></summary>

1. Verify your `OPENAI_API_KEY` starts with `sk-` and is valid
2. Check billing is enabled: [platform.openai.com/account/billing](https://platform.openai.com/account/billing)
3. Check usage limits: [platform.openai.com/usage](https://platform.openai.com/usage)
4. Note: GPT-4 access requires a paid OpenAI account (Tier 1+)
</details>

<details>
<summary><strong>❌ Port 3000 already in use</strong></summary>

```bash
# Run on a different port
npx next dev -p 3001

# Or find and kill the process using port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```
</details>

<details>
<summary><strong>❌ Environment variables not loading</strong></summary>

1. Make sure your file is named `.env` (not `.env.example` or `.env.local`)
2. Restart the dev server after any `.env` changes — Next.js does NOT hot-reload env files
3. Public variables must start with `NEXT_PUBLIC_` to be accessible in the browser
</details>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for full details.

---

<div align="center">

```
  ███╗   ██╗ ██████╗ ██╗   ██╗ █████╗     ███╗   ██╗ ██████╗ ████████╗███████╗
  ████╗  ██║██╔═══██╗██║   ██║██╔══██╗    ████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝
  ██╔██╗ ██║██║   ██║██║   ██║███████║    ██╔██╗ ██║██║   ██║   ██║   █████╗  
  ██║╚██╗██║██║   ██║╚██╗ ██╔╝██╔══██║    ██║╚██╗██║██║   ██║   ██║   ██╔══╝  
  ██║ ╚████║╚██████╔╝ ╚████╔╝ ██║  ██║    ██║ ╚████║╚██████╔╝   ██║   ███████╗
  ╚═╝  ╚═══╝ ╚═════╝   ╚═══╝  ╚═╝  ╚═╝    ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝
```

*Where thoughts become intelligent.*

Made with ❤️ and ☕ &nbsp;|&nbsp; ⭐ **Star this repo if you find it useful!**

[🐛 Report Bug](https://github.com/your-username/nova_note/issues) &nbsp;·&nbsp;
[💡 Request Feature](https://github.com/your-username/nova_note/issues) &nbsp;·&nbsp;
[💬 Discussions](https://github.com/your-username/nova_note/discussions)

</div>
