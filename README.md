# Portfolio API

A serverless API built with **Cloudflare Workers** that powers my personal portfolio by fetching real-time GitHub statistics using the GitHub GraphQL API.

This API provides my portfolio website with dynamic data such as repositories, followers, profile information, and contribution activity.

---

## 🚀 Features

- ⚡ Serverless API running on Cloudflare Workers
- 🔐 Secure GitHub API authentication using Cloudflare Secrets
- 📊 Fetch GitHub profile statistics
- 📦 Repository count tracking
- 👥 Followers count tracking
- 🔥 Contribution activity tracking
- 🌍 Global edge deployment
- 🛡️ CORS protection

---

## 🛠️ Tech Stack

- **Runtime:** Cloudflare Workers
- **Language:** TypeScript
- **API:** GitHub GraphQL API
- **Deployment:** Wrangler CLI
- **Platform:** Cloudflare Edge Network

---

## 📂 Project Structure

```text
portfolio-api/
├── src/
│   └── index.ts              # Worker API logic
│
├── test/
│   └── index.spec.ts         # Worker tests
│
├── wrangler.jsonc            # Cloudflare configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vitest.config.mts         # Test configuration
└── README.md
```

---

## ⚙️ Local Development

### 1. Clone repository

```bash
git clone https://github.com/sujalsubedi06/portfolio-api.git

cd portfolio-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure GitHub Token

Create a GitHub Personal Access Token with permission to read your profile data.

Add it to Cloudflare Workers:

```bash
npx wrangler secret put GITHUB_TOKEN
```

### 4. Start development server

```bash
npm run dev
```

The API will run locally:

```text
http://localhost:8787
```

---

# 🌐 API Endpoints

## Health Check

```
GET /
```

Response:

```json
{
  "message": "Portfolio API running"
}
```

---

## GitHub Statistics

```
GET /github/stats
```

Example response:

```json
{
  "user": {
    "name": "Sujal Subedi",
    "login": "sujalsubedi06",
    "avatarUrl": "https://avatars.githubusercontent.com/",
    "followers": 0,
    "repositories": 12,
    "contributions": 207
  }
}
```

---

## 🚀 Deployment

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

Production API:

```text
https://portfolio-api.sujal-subedi96.workers.dev
```

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `GITHUB_TOKEN` | GitHub GraphQL API authentication token |

Secrets are managed securely through Cloudflare Workers.

---

## 🔗 Related Projects

### Personal Portfolio

https://sujalsubedi.name.np

### Portfolio Frontend

Built using:

- Next.js
- TypeScript
- Tailwind CSS
- Modern React architecture

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sujal Subedi**

GitHub:

https://github.com/sujalsubedi06

Website:

https://sujalsubedi.name.np
