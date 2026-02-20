# 🎯 ROADMAP KUSTOMISASI PORTFOLIO - 4 HARI

> **Target Akhir**: Portfolio live & siap dikirim ke recruiter pada Hari ke-4

## 📋 OVERVIEW PROYEK

Portfolio ini adalah template dari GitHub yang akan dikustomisasi menjadi portfolio personal yang fokus, simple, dan 1-page only.

**Tech Stack:**

- Next.js 15.3.8
- TypeScript
- Tailwind CSS
- React 19
- Motion (Animations)

---

## 🗂 FITUR TEMPLATE - KEEP vs REMOVE

### ✅ FITUR YANG AKAN DIGUNAKAN

#### **Homepage Sections:**

- ✅ Hero / Introduction singkat
- ✅ Experience overview
- ✅ Projects showcase
- ✅ About / Perkenalan diri
- ✅ Footer (simple - all rights reserved only)

#### **Komponen:**

- ✅ Navbar
- ✅ Contact Form
- ✅ Container & Layout components
- ✅ Animation components (Motion)

---

### ❌ FITUR YANG AKAN DIHAPUS

#### **Homepage Sections:**

- ❌ Github Activity
- ❌ Blog section
- ❌ Book Meeting (Cal.com)
- ❌ Development Setup
- ❌ Journey
- ❌ Quotes
- ❌ OnekoCat animation
- ❌ ChatBubble (AI chat)

#### **Halaman Terpisah:**

- ❌ `/blog` - Blog page & blog posts
- ❌ `/journey` - Journey page
- ❌ `/setup` - Setup page
- ❌ `/gears` - Gears page
- ❌ `/resume` - Resume page
- ❌ `/work-experience` - Work experience separate page
- ❌ `/api/chat` - AI chatbot API

#### **Features:**

- ❌ Realtime chat AI-based
- ❌ Light/Dark mode toggle (optional - bisa keep kalau mau)
- ❌ Blog system lengkap
- ❌ Meeting booking integration

---

## 🏗 FITUR BARU YANG DITAMBAHKAN

1. **Education Section** - Informasi pendidikan singkat
2. **Certifications Display** - Showcase sertifikasi yang dimiliki
3. **Tech Stack Section** - Menampilkan teknologi yang dikuasai
4. **All-in-One Page** - Experience & Projects detail langsung di homepage (bukan page terpisah)
5. **UI Animations** - Smooth animations untuk UX yang lebih baik

---

## 📅 ROADMAP 4 HARI

### 🔹 HARI 1 — SETUP & CLEANUP (Fondasi Proyek)

**🎯 Fokus utama:** Memahami struktur + membuang kompleksitas

#### **1. Setup Project (Wajib)**

- [x] Clone repo
- [ ] Install dependency
- [ ] Run project
- [ ] Pastikan tidak ada error

**Checklist:**

- [ ] Project jalan normal
- [ ] Tidak ada error di console
- [ ] Paham struktur folder besarannya

#### **2. Mapping Struktur Template**

**Target:** Kamu paham alur file, bukan hafal semua.

**Pahami:**

- [ ] `app/page.tsx` - Homepage utama
- [ ] `components/` - Komponen reusable
- [ ] `layouts` - Layout sistem
- [ ] `routing system` - Sistem routing Next.js

#### **3. Cut Feature (Paling Penting Hari 1)**

**Section Homepage yang dihapus:**

- [ ] Github activity (`components/landing/Github.tsx`)
- [ ] Blog section (`components/landing/Blog.tsx`)
- [ ] Development setup (`components/landing/Setup.tsx`)
- [ ] Journey (`components/landing/Journey.tsx`)
- [ ] Meeting booking di CTA (simplify CTA)

**Komponen Layout yang dihapus:**

- [ ] OnekoCat (`components/common/OnekoCat.tsx`)
- [ ] Quotes (`components/common/Quote.tsx`)
- [ ] ChatBubble (`components/common/ChatBubble.tsx`)
- [ ] Optional: ThemeSwitch (dark/light mode)

**Routes/Halaman yang dihapus:**

- [ ] `app/blog/` folder
- [ ] `app/journey/` folder
- [ ] `app/setup/` folder
- [ ] `app/gears/` folder
- [ ] `app/resume/` folder
- [ ] `app/work-experience/` folder
- [ ] `app/api/chat/` folder

**Config Files yang dibersihkan:**

- [ ] `config/Github.tsx`
- [ ] `config/Journey.tsx`
- [ ] `config/Setup.tsx`
- [ ] `config/Quote.ts`
- [ ] `config/ChatPrompt.ts`

#### **4. Jadikan 1 Page Only**

**Pindahkan ke homepage:**

- [ ] Full experience list (bukan hanya overview)
- [ ] Full projects list (bukan hanya overview)
- [ ] About section (sudah ada)

**Target Struktur Homepage:**

```
Hero Section
↓
About Me
↓
Education (NEW)
↓
Tech Stack (NEW)
↓
Experience (FULL LIST)
↓
Projects (FULL LIST)
↓
Certifications (NEW)
↓
CTA / Contact
↓
Footer
```

#### **🎯 Output Hari 1:**

- ✅ Struktur bersih
- ✅ 1 halaman utama
- ✅ Tidak ada fitur berlebih
- ✅ Project siap diisi konten

---

### 🔹 HARI 2 — STRUKTUR SECTION + KONTEN UTAMA

**🎯 Fokus:** Membangun kerangka portfolio + isi identitas

#### **Section yang dikerjakan:**

**1. Hero Section**

- [ ] Nama
- [ ] Role/Title
- [ ] 1 kalimat value proposition
- [ ] CTA buttons (Projects + Contact)

**2. About Me**

- [ ] Perkenalan singkat
- [ ] Background
- [ ] Minat & fokus
- [ ] Foto/Avatar

**3. Education (NEW)**

- [ ] Nama Kampus
- [ ] Jurusan
- [ ] Tahun (mulai - selesai)
- [ ] Fokus pembelajaran
- [ ] GPA (optional)

**4. Tech Stack (NEW)**

- [ ] Frontend technologies
- [ ] Backend technologies
- [ ] Tools & platforms
- [ ] Database
- [ ] Icon/logo untuk setiap tech

#### **🎯 Output Hari 2:**

- ✅ 60% portfolio selesai
- ✅ Struktur sudah terasa sebagai portfolio personal
- ✅ Identitas sudah jelas

---

### 🔹 HARI 3 — PROJECTS + EXPERIENCE + CERTIFICATIONS

**🎯 Fokus:** Nilai jual utama

#### **1. Projects Section (Prioritas #1)**

**Project Utama:**

- [ ] **Mari Futsal** (project flagship)
  - [ ] Deskripsi lengkap
  - [ ] Tech stack yang digunakan
  - [ ] Fitur-fitur utama
  - [ ] Screenshot/demo
  - [ ] Link demo/GitHub

**Project Pendukung (2-3 projects):**

- [ ] Project #2 - [Nama Project]
  - [ ] Deskripsi
  - [ ] Tech stack
  - [ ] Screenshot
- [ ] Project #3 - [Nama Project]
  - [ ] Deskripsi
  - [ ] Tech stack
  - [ ] Screenshot

**Struktur per project:**

```
- Nama Project
- Tagline/Deskripsi 1 kalimat
- Deskripsi detail (2-3 paragraf)
- Tech Stack (badges/icons)
- Fitur Utama (bullet points)
- Screenshots (2-4 gambar)
- Links (Demo / GitHub / Case Study)
```

#### **2. Experience Section**

**Isi bisa berupa:**

- [ ] Freelance work
- [ ] Project team
- [ ] Tugas kampus berbasis real-case
- [ ] Internship (kalau ada)

**Struktur per experience:**

```
- Company/Organization name
- Role/Position
- Periode (Bulan Tahun - Bulan Tahun)
- Deskripsi pekerjaan (2-3 bullets)
- Teknologi yang digunakan
- Impact/Achievement (kalau ada)
```

#### **3. Certifications (NEW)**

- [ ] Nama sertifikat
- [ ] Penerbit/Institution
- [ ] Tahun perolehan
- [ ] Credential ID
- [ ] Link verifikasi (jika ada)
- [ ] Badge/logo

**Format Gallery:**

- [ ] Card layout dengan hover effect
- [ ] Credential badge display
- [ ] Click to verify link

#### **🎯 Output Hari 3:**

- ✅ 90% portfolio selesai
- ✅ Nilai jual sudah sangat kuat
- ✅ Semua konten sudah lengkap

---

### 🔹 HARI 4 — ANIMASI + POLISHING + DEPLOY

**🎯 Fokus:** WOW effect + professional finishing

#### **1. Animasi**

**Tambahkan:**

- [ ] Hero entrance animation (fade in + slide up)
- [ ] Section reveal saat scroll (intersection observer)
- [ ] Hover animation di card (scale/shadow)
- [ ] Smooth scroll behavior
- [ ] Page transition animations
- [ ] Button hover states
- [ ] Image lazy loading animations

**Library yang sudah ada:**

- Motion (Framer Motion alternative)
- Lenis (Smooth scroll)

**Target:**

- ✅ Animasi halus, tidak lebay
- ✅ Performance tetap optimal
- ✅ Mobile-friendly animations

#### **2. UI Polishing**

**Typography:**

- [ ] Konsistensi font sizes
- [ ] Line height & letter spacing
- [ ] Hierarchy yang jelas

**Spacing:**

- [ ] Consistent padding/margin
- [ ] Section spacing optimal
- [ ] Whitespace yang balance

**Colors:**

- [ ] Color palette konsisten
- [ ] Contrast ratio accessible
- [ ] Accent colors yang tepat

**Responsive:**

- [ ] Mobile view (320px - 768px)
- [ ] Tablet view (768px - 1024px)
- [ ] Desktop view (1024px+)
- [ ] Large desktop (1440px+)

**Components:**

- [ ] Button states (hover, active, focus)
- [ ] Card hover effects
- [ ] Form validation styling
- [ ] Loading states

#### **3. Final Test**

**Mobile View:**

- [ ] Navigation berfungsi
- [ ] Touch interactions smooth
- [ ] Images loading properly
- [ ] Forms working
- [ ] No horizontal scroll

**Desktop View:**

- [ ] Layout proporsional
- [ ] Hover states working
- [ ] Animations smooth
- [ ] All links working

**Performance Check:**

- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 90

**Browser Testing:**

- [ ] Chrome
- [ ] Firefox
- [ ] Safari (jika ada)
- [ ] Edge

#### **4. Deploy ke Vercel**

**Pre-Deploy:**

- [ ] Build locally success (`bun run build`)
- [ ] No build errors
- [ ] Environment variables ready
- [ ] Meta tags & SEO configured

**Deploy:**

- [ ] Push to GitHub
- [ ] Connect Vercel to repo
- [ ] Configure build settings
- [ ] Deploy production

**Post-Deploy:**

- [ ] Test live version
- [ ] Check all links
- [ ] Test contact form
- [ ] Verify analytics (Umami)
- [ ] Setup custom domain (optional)

**Optional Enhancements:**

- [ ] Setup Google Analytics
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Add favicon
- [ ] Add OG images untuk social media

#### **🎯 Output Hari 4:**

- ✅ Portfolio live & production ready
- ✅ Professional look & feel
- ✅ Smooth animations & interactions
- ✅ Fully responsive
- ✅ Performance optimized
- ✅ Ready to share dengan recruiter

---

## 🎨 DESIGN GUIDELINES

### **Color Scheme**

- Primary: [Tentukan warna utama]
- Secondary: [Tentukan warna sekunder]
- Accent: [Untuk CTA & highlights]
- Text: [Dark mode & Light mode variants]

### **Typography**

- Heading Font: Hanken Grotesk (sudah ada)
- Body Font: Hanken Grotesk
- Code Font: (untuk tech stack/snippets)

### **Component Style**

- Border Radius: Consistent (8px / 12px / 16px)
- Shadow: Subtle elevation
- Cards: Clean & minimal
- Buttons: Clear hierarchy

---

## 📁 STRUKTUR FILE SIMPLIFIED

```
src/
├── app/
│   ├── page.tsx           # Homepage (1 page only)
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── contact/           # ✅ Keep
│   │   └── page.tsx
│   └── projects/          # ✅ Keep untuk detail
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── landing/           # Homepage sections
│   │   ├── Hero.tsx       # ✅
│   │   ├── About.tsx      # ✅
│   │   ├── Education.tsx  # 🆕 NEW
│   │   ├── TechStack.tsx  # 🆕 NEW
│   │   ├── Experience.tsx # ✅ (expand to full)
│   │   ├── Projects.tsx   # ✅ (expand to full)
│   │   ├── Certifications.tsx # 🆕 NEW
│   │   └── CTA.tsx        # ✅ (simplify)
│   │
│   ├── common/            # Shared components
│   │   ├── Navbar.tsx     # ✅
│   │   ├── Footer.tsx     # ✅
│   │   └── Container.tsx  # ✅
│   │
│   └── ui/                # UI primitives (keep all)
│
├── config/                # Configuration files
│   ├── Hero.tsx           # ✅
│   ├── About.tsx          # ✅
│   ├── Education.tsx      # 🆕 NEW
│   ├── TechStack.tsx      # 🆕 NEW
│   ├── Experience.tsx     # ✅
│   ├── Projects.tsx       # ✅
│   ├── Certifications.tsx # 🆕 NEW
│   ├── Contact.tsx        # ✅
│   ├── Footer.tsx         # ✅
│   └── Meta.tsx           # ✅
│
└── lib/                   # Utilities
    └── utils.ts           # ✅
```

---

## 🚀 QUICK START

### **Install Dependencies**

```bash
bun install
```

### **Run Development Server**

```bash
bun dev
```

### **Build for Production**

```bash
bun run build
```

### **Start Production Server**

```bash
bun start
```

---

## ✅ DAILY CHECKLIST

### **Hari 1 - Cleanup**

- [ ] Project running tanpa error
- [ ] Hapus section yang tidak perlu dari homepage
- [ ] Hapus komponen global yang tidak perlu
- [ ] Hapus routes/halaman yang tidak perlu
- [ ] Hapus config files yang tidak terpakai
- [ ] Struktur jadi simple & clean

### **Hari 2 - Konten Identitas**

- [ ] Hero section dengan info personal
- [ ] About Me lengkap
- [ ] Education section baru dibuat
- [ ] Tech Stack section baru dibuat
- [ ] 60% portfolio completed

### **Hari 3 - Portfolio Content**

- [ ] Mari Futsal project showcased
- [ ] 2-3 project pendukung added
- [ ] Experience list completed
- [ ] Certifications section created
- [ ] 90% portfolio completed

### **Hari 4 - Polish & Deploy**

- [ ] Animations implemented
- [ ] UI polished (spacing, typography, responsive)
- [ ] Cross-device testing done
- [ ] Performance optimized
- [ ] Deployed to Vercel
- [ ] 100% Portfolio live & ready

---

## 📝 NOTES & REMINDERS

### **Important:**

- Focus on **simplicity & clarity** - less is more
- **Mobile-first approach** - mayoritas recruiter buka dari mobile
- **Performance matters** - fast loading = professional impression
- **Content > Design** - konten yang solid lebih penting dari design yang wow
- **Call-to-Action jelas** - mau recruiter ngapain setelah liat portfolio

### **Content Writing Tips:**

- **Hero**: Langsung to the point - "Siapa kamu & apa value kamu"
- **About**: Personal tapi professional - show personality tapi tetap relevant
- **Projects**: Focus on impact & problem solving, bukan hanya tech stack
- **Experience**: Gunakan bullet points dengan action verbs
- **CTA**: Clear & simple - "Mari diskusi project" bukan "Book a call"

### **Red Flags to Avoid:**

- ❌ Terlalu banyak animasi (bikin pusing)
- ❌ Konten terlalu panjang (recruiter ga akan baca)
- ❌ Project tanpa screenshot/demo (ga ada bukti)
- ❌ Typo & grammar errors (unprofessional)
- ❌ Broken links (bad impression)
- ❌ Slow loading (langsung ditutup)

---

## 🎯 SUCCESS METRICS

**Hari 1:** Struktur bersih, siap diisi konten
**Hari 2:** Identitas jelas, foundation solid
**Hari 3:** Konten lengkap, nilai jual kuat
**Hari 4:** Portfolio live, siap share ke dunia

### **Definition of Done:**

✅ Portfolio accessible via public URL
✅ Semua section terisi dengan konten real
✅ Responsive di semua device
✅ Performance score > 90
✅ No console errors
✅ Contact form working
✅ Confidence level: Siap dikirim ke recruiter

---

## 💪 LET'S BUILD THIS!

**Remember:**

> "Done is better than perfect" - Focus on completing, bukan perfecting.
> 4 hari adalah waktu yang cukup kalau fokus & konsisten.

**Daily commitment:**

- Minimal 4-6 jam focused work per hari
- No perfectionism - 80% done & shipped > 100% stuck di revisi
- Progress > Perfect

---

**Last Updated:** 15 Februari 2026
**Status:** 🟡 Hari 1 - Ready to Start
