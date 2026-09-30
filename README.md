# AttendQR — QR-Based Attendance Management System

**Rubii <sub>(Group 6)</sub> · BSE2201 Software Engineering Foundations**

A responsive landing page for **AttendQR**, our proposed QR-based attendance system. It introduces the team, explains the school problem we identified (slow, unreliable manual attendance), and presents our proposed solution.

> Scope: this repository is the **landing page only**. The attendance system itself is not implemented.

---

## Live link

🔗 **https://YOUR-LIVE-URL** ← _TODO (Kamboyi): replace after deployment (GitHub Pages / Netlify / Vercel)_

## Technologies

| Technology | Use |
|---|---|
| HTML5 | Semantic page structure (`header`, `nav`, `main`, `section`, `article`, `footer`) |
| CSS3 | Custom properties (design tokens), Flexbox, Grid, media queries, animations |
| SVG | Logo, hero illustration and icons (no image downloads needed) |
| Google Fonts | Plus Jakarta Sans (headings), Inter (body) |
| Git + GitHub | Version control, branches, pull requests, code review |
| Jira | Task tracking, linked to GitHub |

No JavaScript is required — smooth scrolling and the mobile menu are pure CSS.

## Project structure

```
attendqr-landing/
├── index.html            # All sections (each marked with its owner)
├── assets/
│   ├── logo.svg          # Logo + favicon            (Nathan Nansenga)
│   └── hero-phone.svg    # Hero illustration         (Nathan Nansenga)
├── css/                  # ONE FILE PER OWNER → fewer merge conflicts
│   ├── base.css          # Design system             (Nathan Nansenga)
│   ├── navigation.css    # Header / nav              (Kamaloni Ackson)
│   ├── hero.css          # Hero                      (Daka Wesley)
│   ├── about.css         # Team identity             (Kamboyi Rapheal)
│   ├── problem-solution.css# Problem + Solution      (Silungwe Lanzi)
│   ├── features-benefits.css # Features + Benefits   (Zimba Nathan)
│   ├── team.css          # Team members              (Saninga Mwansa)
│   ├── contact-footer.css# Contact + footer          (Kamaloni Ackson)
│   ├── accessibility.css # Focus, skip link, QA fixes(Chimbokaila Remmy)
│   └── responsive.css    # All breakpoints — loads LAST (Banda Madalitso)
└── docs/
    ├── CONTRIBUTING.md         # Git/Jira workflow rules
    ├── TESTING_CHECKLIST.md    # QA checklist
    └── CONTRIBUTION_TABLE.md   # Submission table (fill in)
```

## Setup instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/mr-kamboyi-rapheal/Rubii-Group-6
   ```
2. Open `index.html` in any modern browser — no build step or install needed.
3. Optional (recommended): use the VS Code **Live Server** extension for auto-reload.

## Deployment (GitHub Pages)

1. Repo → **Settings → Pages**.
2. Source: **Deploy from a branch** → `main` → `/ (root)` → Save.
3. Copy the public URL into the *Live link* section above and test it logged out, on phone and desktop.

## Team responsibilities

Jira project key used below is **QRA** 

| Member | Student No. | Role | Section / Files | Jira | Branch |
|---|---|---|---|---|---|
| Kamboyi Rapheal | 2510928 | Team Leader + Frontend | Page skeleton, About/Team identity — `index.html`, `about.css`, README | QRA-1, QRA-5 | `QRA-1-project-setup`, `QRA-5-about-section` |
| Daka Wesley | 2511586 | Hero / Home | Hero section — `hero.css` | QRA-4 | `QRA-4-hero-section` |
| Silungwe Lanzi | 2511587 | Problem + Proposed System | Problem & Solution — `problem-solution.css` | QRA-6, QRA-7 | `QRA-6-problem-section`, `QRA-7-solution-section` |
| Zimba Nathan | 2510936 | Features & Benefits | Features & Benefits — `features-benefits.css` | QRA-8, QRA-9 | `QRA-8-features-section`, `QRA-9-benefits-section` |
| Saninga Mwansa | 2510963 | Team Members | Team section — `team.css` | QRA-10 | `QRA-10-team-section` |
| Kamaloni Ackson | 2300780 | Navigation / Contact / Footer | Header, mobile menu, contact, footer — `navigation.css`, `contact-footer.css` | QRA-3, QRA-11 | `QRA-3-navigation`, `QRA-11-contact-footer` |
| Banda Madalitso | 2120992 | Responsive / Mobile UI | All breakpoints — `responsive.css` | QRA-12 | `QRA-12-responsive-design` |
| Nathan Nansenga | 2510923 | Visual Assets / UI Styling | Design system + SVGs — `base.css`, `assets/` | QRA-2 | `QRA-2-design-system` |
| Chimbokaila Remmy | 2300084 | Testing / QA + Frontend | Accessibility + fixes — `accessibility.css`, test checklist | QRA-13 | `QRA-13-qa-accessibility` |
| _10th member — TBC_ | | | | | |

## Suggested merge order

`QRA-1` → `QRA-2` → `QRA-3` → `QRA-4` … `QRA-11` → `QRA-12` (responsive) → `QRA-13` (QA regression).
Base and skeleton go first because every other section depends on them.
