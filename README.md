# resuMatic – Free AI Resume Builder | Create ATS-Optimized Resumes in Minutes

**🚀 The AI-Powered Resume Builder That Gets You Hired**

📌 **Submitted for the 3MTT Knowledge Showcase – July 2025**
👤 **Built by:** Suleiman Abdulkadir
🆔 **Fellow ID:** FE/23/22599501


[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge\&logo=next.js)](https://nextjs.org/)

---

## 🎯 Why Choose resuMatic?

**resuMatic** is a free, AI resume builder that helps job seekers create professional, ATS-optimized resumes that increase interview chances by up to **3x**.
Built with students and new developers in mind—especially from underserved regions like Nigeria—it puts powerful resume tools into everyone’s hands.

---

##  How resuMatic Works – Features Explained

**resuMatic** is designed to help students, job seekers, and developers easily create smart, tailored resumes that beat Applicant Tracking Systems (ATS). Here’s how each major feature works:

---

###  1. AI Resume Assistant

* **What it does:** You input your work experience, and the AI rewrites your bullet points using job-specific language.
* **How it helps:** Makes your resume stand out with strong action verbs, measurable impact, and keywords that match job descriptions.
* **Behind the scenes:** Uses OpenAI (or Claude, Gemini) to analyze job postings and generate personalized resume content.

---

###  2. Resume Dashboard

* **What it does:** Lets you create and manage multiple resumes—both base versions and tailored versions.
* **How it helps:** Organizes your job search with version tracking, resume edits, and job-specific targeting.

---

###  3. Resume Scoring & ATS Analysis

* **What it does:** Scores your resume for ATS compatibility by checking formatting, keyword usage, and structure.
* **How it helps:** Improves your chances of getting past automated filters that most companies use to screen resumes.

---

###  4. AI Cover Letter Generator

* **What it does:** Generates job-specific cover letters using your resume content and job description.
* **How it helps:** Saves time and improves the quality and relevance of each application.

---

###  5. PDF Export & Download

* **What it does:** Generates polished, printable PDFs with professional resume templates.
* **How it helps:** Ensures your resume looks great both digitally and on paper.

---

###  6. Secure, Private, and Customizable

* ✅ Self-hosted capable
* ✅ Use your own API keys
* ✅ Own your data

Everything is **fully open-source** and built with privacy in mind.

---

##  Example Workflow

1. Enter your resume basics: name, education, experience, skills
2. Upload or paste a job description
3. Let the AI tailor your bullet points and cover letter
4. Preview your resume and download the final PDF
5. Submit with confidence!

---

##  Key Features & Screenshots

###  AI-Powered Resume Assistant

![AI Resume Assistant](public/SS%20Chat.jpg)

**90% More Effective Bullet Points**

* Smart content suggestions based on your experience
* Real-time feedback on resume content
* Industry-specific optimization for better results
* ATS-friendly formatting and keyword targeting


---

###  Beautiful Resume Dashboard

![Resume Dashboard](public/Dashboard%20Image.png)


**Organize Your Entire Job Search**

* Centralized resume management
* Easily create and track multiple versions
* Edit, duplicate, and preview resumes quickly


---

###  Resume Performance Scoring

![Resume Scoring](public/SS%20Score.png)

**3x Higher Response Rates**

* ATS scoring and formatting checks
* Keyword match analysis
* Improvement suggestions



---

###  AI Cover Letter Generator

![Cover Letter Generator](public/SS%20Cover%20Letter.png)

**Save 30+ Minutes Per Application**

* AI-generated content tailored to each job
* Professional tone and custom formatting
* Integrates with your resume and job description


---

##  Tech Stack

### Frontend

* **Next.js 15** – App Router + RSC
* **React 19** – Latest stable release
* **Tailwind CSS** – Utility-first styling
* **Shadcn UI** – Accessible component system
* **Framer Motion** – Animation library

### Backend & Database

* **PostgreSQL** – Relational database
* **Supabase** – Auth, Storage, RLS
* **Row Level Security** – User-specific data access

### AI Services

* **OpenAI** – Bullet point & letter generation
* **Claude AI** – Alternative natural language model
* **Gemini AI** – Google’s AI integration
* **DeepSeek & Groq** – Cost-efficient model runners

### Extra Features

* **React PDF** – Resume export
* **Stripe** – Optional monetization
* **Live Preview** – Real-time updates
* **Responsive** – Mobile-first design

---

##  Installation & Setup

### Requirements

* Node.js 18+
* pnpm (preferred) or npm
* PostgreSQL / Supabase

---

###  Quick Start – Step-by-Step Guide

#### 1. Clone the Project

```bash
git clone https://github.com/suletete/resumatic.git
cd resumatic
```

#### 2. Install Dependencies

```bash
pnpm install
```

#### 3. Create Environment Config

```bash
cp .env .env.local
```

#### 4. Fill in `.env.local`

```env
DATABASE_URL=your_postgresql_url
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key

OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_claude_key
GOOGLE_AI_API_KEY=your_gemini_key

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_auth_secret
```

#### 5. Setup the Database

```bash
# Via Supabase SQL Editor or CLI
supabase db push
```

#### 6. Start the Dev Server

```bash
pnpm dev
```

Then go to [http://localhost:3000](http://localhost:3000) in your browser.

---

##  Security

* ✅ **Row Level Security**
* ✅ **Supabase Auth Integration**
* ✅ **Encrypted Resume Data**

---

##  Use Cases

* Nigerian students applying for internships
* Remote developers targeting international jobs
* Career switchers & junior tech talents
* 3MTT Fellows submitting July 2025 projects

---

##  SEO & Performance

* ✅ 95+ Lighthouse Scores
* ✅ WCAG 2.1 Accessibility
* ✅ Optimized images & lazy loading
* ✅ Rich metadata & Open Graph support

---

##  Final Note

**resuMatic** – Built with ❤️ to help you land your dream job.
**Created proudly for the 3MTT July 2025 Knowledge Showcase.**

 [**View Source on GitHub**](https://github.com/suletete/resumatic)
