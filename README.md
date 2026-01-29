# StartupPerks

An exclusive platform for startup founders to browse and claim premium SaaS deals. Built with a focus on high-end interaction design and clear user flows.

## 🚀 Tech Stack
- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Animations:** Framer Motion (Page transitions, layout animations)
- **Icons:** Lucide React

## 🛠️ Features implemented
1. **Dynamic Benefits Grid:** Categorized filtering with smooth layout transitions.
2. **Interactive Hero Section:** Premium SaaS-style entry animations.
3. **Dynamic Routing:** Individual detail pages for every benefit using `[id]` routes.
4. **User Dashboard:** Tracking system for claimed benefits and approval status.
5. **Locked Content Logic:** Visual indicators and restricted access for unverified deals.

## 🧠 Design Decisions
- **Framer Motion:** I chose `AnimatePresence` with `popLayout` for the deals grid to ensure that when items are filtered, the remaining cards slide into place rather than jumping, providing a "premium" feel.
- **Glassmorphism:** The UI utilizes semi-transparent backgrounds and backdrop blurs to match modern SaaS aesthetics.
- **App Router:** Utilized for optimized routing and simplified directory structures.

## 🏁 How to Run
1. Navigate to the `frontend` folder: `cd frontend`
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Visit `http://localhost:3000`