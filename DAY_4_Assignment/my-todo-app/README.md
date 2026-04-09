Markdown
# Task Master - Premium Task Manager

A high-end, interactive Task Management application built with **React** and **Tailwind CSS**. This project features a sophisticated dark-gold aesthetic and utilizes **ReactBits** components for advanced UI interactions like spotlight effects and variable proximity typography.

## 🚀 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. **Clone or create the project directory:**
   ```bash
   mkdir my-todo-app
   cd my-todo-app
Install dependencies:

Bash
npm install
npm install react-router-dom framer-motion lucide-react tailwindcss postcss autoprefixer @tailwindcss/postcss
Run the Development Server:

Bash
npm run dev
View in Browser:
Open http://localhost:5173 in your browser.

🛠️ Built With
Core Frameworks
React 18: Used for building the component-based UI.

Vite: The build tool and development server.

Tailwind CSS: For utility-first styling and custom design variables.

React Concepts Used
useState: Manages the task list, input fields, and UI toggle states.

useEffect: Synchronizes the task list with localStorage for data persistence.

Props: Pass data and state-setter functions between App.jsx, Tasks.jsx, and Progress.jsx.

useMemo: Efficiently calculates performance statistics without unnecessary re-renders.

Specialized UI
ReactBits: Integrated SpotlightCard and VariableProximity for high-end animations.

Framer Motion: The animation engine powering the UI transitions.

React Router: Manages navigation between the Dashboard and the Performance (Stats) pages.

📂 Project Structure
Plaintext
src/
├── components/
│   ├── ui/
│   │   ├── SpotlightCard.jsx      # ReactBits interactive card
│   │   └── VariableProximity.jsx  # Interactive typography
│   ├── TaskFilter.jsx             # Filter buttons logic
│   └── Toggle.jsx                 # Focus Mode switch
├── pages/
│   ├── Tasks.jsx                  # Main dashboard logic
│   └── Progress.jsx               # Performance & stats page
├── App.jsx                        # Root component & Routing
├── main.jsx                       # Entry point
└── index.css                      # Global styles & Tailwind

✨ Features
Data Persistence: Tasks are saved to your browser so they remain even after refreshing.

Focus Mode: A one-click toggle to filter for High Priority tasks only.

Performance Tracking: Visual breakdown of your productivity and completion rate.

Responsive Design: Mobile-friendly layout using Tailwind's flex and grid systems.