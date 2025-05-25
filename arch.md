# Rehab Finder & Admissions Platform - Architecture Document

AI-Guided Admission (chat agent)

Manual Search / Filter

I keep it “design-first”—no backend wiring yet—so you can copy-paste this into Figma or React code later.

1️⃣ Top-Level Layout (Desktop -> collapsible on mobile)
pgsql
Copy
Edit
┌─ Navbar ────────────────────────────────────────────────────────────┐
│ Logo | “Find Rehab” | Pricing | Help | Login/Me │
└─────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────┐
│ 🗂️ Sidebar (Tabs) │ Main Workspace │
│ ┌ Chat w/Agent │ │ │
│ ├ Search & Filters │ │ │
│ └ Saved Facilities │ │ │
│ │ │ Dynamic area (card grid, chat, etc.) │
└─────────────────────────────────────────────────────────────────────┘
└ Footer (links, copyright) ──────────────────────────────────────────┘
Mobile: Sidebar becomes a bottom tab-bar; Main Workspace stacks vertically.

2️⃣ Sidebar Tabs
Tab Purpose Key Elements
Chat Agent Conversational flow for AI-guided admission. – Bot + user bubbles.
– Quick-reply chips (e.g., “Upload insurance”, “Show rehabs near me”).
– Mini-progress bar (Benefits ➞ Approval ➞ Stay Details).
Search & Filters Manual exploration. – Location (zip/radius).
– Insurance accepted (dropdown).
– Treatment type (detox, inpatient, outpatient).
– Amenities checkboxes.
– Rating slider.
– “Apply / Reset” buttons.
Saved User’s shortlist. – Cards with bookmark icon.
– Compare button.

3️⃣ Main Workspace Views
A. Chat View
pgsql
Copy
Edit
┌ ChatHeader: “AI Admissions Assistant” ────────────────┐
│ Progress bar (Benefits · Approval · Stay) │
└────────────────────────────────────────────────────────┘
[ Bot ] “Hi John! Upload your insurance card to start.”
[ User ] ➜ drag-and-drop / camera-capture.
[ Bot ] “Great! Fetching benefits…” ⏳ spinner
…
╭──────────── Quick Actions ───────────╮
│ • Show rehabs that accept my plan │
│ • Compare cost breakdown │
│ • Talk to human │
╰──────────────────────────────────────╯
UX notes

Use typing indicator & subtle fade-in for realism.

Persist chat history in local storage or DB for later resumption.

Make each bot “step” a discrete state so the user can back-step.

B. Results Grid View
Card grid (3-column desktop, 1-column mobile).

Card anatomy:

pgsql
Copy
Edit
┌────────────────────┐
│ Hero photo │ ★4.7
├────────────────────┤
│ Rehab Name │
│ Location • 30 mi │
│ Accepts: BCBS, Aetna
│ Tags: Detox · Yoga · Beach
│ $ Avg nightly cost
└─ [ Save ] [ View Details ] ─────────┘
Clicking View Details opens a side drawer or full page:

Gallery carousel

Program descriptions

Admissions contact

“Start AI Admission” button (links back to chat pre-filled with facility).

4️⃣ Component Inventory (React / Tailwind naming)
Layer Components (suggested names)
Layout <AppShell>, <SidebarTabs>, <MainPanel>
Chat <ChatWindow>, <MessageBubble>, <QuickReplies>, <TypingDots>, <ProgressStepper>
Search <FilterDrawer>, <RangeSlider>, <CheckboxList>
Results <RehabCard>, <RehabGrid>, <RehabDetailDrawer>
State React Context or Zustand slice: useAdmissionsStore()
holds userProfile, filters, chatHistory, savedIds.

5️⃣ Color / Typography (matches earlier Tailwind theme)
Token Value
Primary oklch(62% 0.19 250) (calm indigo)
Accent / CTA oklch(70% 0.24 210) (teal)
Surface #ffffff / #f9fafb
Text slate-800 normal, slate-500 secondary
Font Inter 400 / 600 / 700

6️⃣ Interaction Flow (AI Path)
Upload insurance →

Runtime hits /benefits API → returns coverage JSON →

Bot summarizes & asks preferences →

User picks facility (via suggested cards) →

Bot calls /authorize API → gets approval →

Bot offers calendar-picker for start date →

Confirmation screen → user receives email w/ PDF.

(We’ll add transportation later.)

7️⃣ Interaction Flow (Manual Path)
User opens Search tab → sets filters → hits Apply.

Grid updates (skeletal loaders).

User bookmarks 3 rehabs → Saved tab badge increments.

Click Compare → table modal (cost, rating, amenities).

Click Start AI Admission for chosen rehab → deep-links to Chat tab with facility context pre-loaded at step #4 above.
