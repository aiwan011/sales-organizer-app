Sales Organizer App
A cross-platform mobile and web application built with Ionic, Angular, and Supabase (PostgreSQL), designed to manage sales tasks, customers, and team member assignments efficiently.

🚀 Features
Cloud Relational Database: Uses Supabase (PostgreSQL) for secure, structured storage of tasks, customers, and team members.

Full CRUD Operations: Create, read, update, and delete tasks in real-time.

Smart Sorting & Filtering: Automatically sorts lists alphabetically using sorting utilities and filters tasks dynamically by customer or team member.

Advanced UI Components:

Modals & Overlays: View and manage task details smoothly without losing context.

Badges: Real-time task counter badges for customers and team members.

Chips: Clean tag-based visualization for assigned entities.

Popovers: Quick contextual menu options.

Radio Buttons & Groups: Theme selection menus.

Local Storage Integration: Persists user preferences (such as color themes) locally using @ionic/storage-angular.

Dynamic Theming: Instant theme switching (Blue, Red, Brown palettes) persisted across sessions.

Mobile Ready: Configured with Capacitor for native Android deployment.

🛠️ Tech Stack
Frontend: Ionic Framework, Angular, TypeScript, HTML5, SCSS

Backend / Database: Supabase, PostgreSQL

State & Storage: Ionic Storage

Mobile Tooling: Capacitor

📦 Project Setup & Installation
Follow these steps to run the project locally on your machine:

Clone the repository:

Bash
git clone https://github.com/aiwan011/sales-organizer-app.git
cd sales-organizer-app
Install dependencies:

Bash
npm install
Configure Environment Variables:
Create or update src/environments/environment.ts and add your Supabase project credentials:

TypeScript
export const environment = {
  production: false,
  supabaseUrl: 'YOUR_SUPABASE_URL',
  supabaseKey: 'YOUR_SUPABASE_ANON_KEY'
};
Run the development server:

Bash
ionic serve
Open your browser at http://localhost:8100.

📱 Native Deployment (Capacitor)
To build and run the app as a native mobile application:

Build for production:

Bash
ionic build --prod
Add Android platform:

Bash
ionic capacitor add android
Sync assets and open Android Studio:

Bash
npx cap sync
npx cap open android
Save this file as README.md in your project folder, commit it to Git, and push it to GitHub:

Bash
git add README.md
git commit -m "Add professional project README"
git push origin main