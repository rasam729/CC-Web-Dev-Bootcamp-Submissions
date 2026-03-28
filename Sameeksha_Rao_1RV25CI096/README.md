# TickTask - Card-Based To-Do Manager

TickTask is a lightweight, interactive task management application built using the core principles of **Web Fundamentals** (HTML, CSS, and JavaScript). The app allows users to create tasks that are displayed as distinct "information cards" with dynamic styling.

## 🚀 Features
- **Dynamic Task Creation**: Add tasks using a simple input and "+" button.
- **Card Representation**: Every task is generated as a separate card with a unique background color to distinguish information.
- **Interactive Deletion**: Each task card includes a delete button to remove it from the list instantly.
- **Responsive Design**: Uses modern layout techniques to ensure a clean UI.

## 🛠️ Tools & Tags Used

### 1. HTML (Structure)
- **Semantic Tags**: Used `<header>` and `<main>` for better document structure and accessibility
- **Form Elements**: Utilized `<input type="text">` for data entry and `<button>` for user actions
- **Lists**: Employed `<ul>` and `<li>` to manage the dynamic collection of tasks

### 2. CSS (Styling)
- **Flexbox**: Applied `display: flex` and `justify-content` to align the input bar and card contents
- **Box Model**: Used `padding`, `margin`, and `border-radius` to create the "card" aesthetic
- **Interactivity**: Implemented `:hover` pseudo-classes to provide visual feedback on buttons
- **Transitions**: Added `transition` properties for smooth visual scaling and color changes

### 3. JavaScript (Logic)
- **DOM Manipulation**: Used `querySelector` to target elements and `textContent` to safely inject task data.
- **Event Listeners**: Implemented `addEventListener` to handle 'click' and 'submit' events without reloading the page.
- **Dynamic UI Updates**: 
    - `document.createElement`: To build new cards in memory.
    - `appendChild`: To attach cards to the live task board.
    - `element.remove()`: To delete specific tasks from the DOM.
- **Modern Syntax**: Used `const`, `let`, and **Arrow Functions** (`=>`) for clean, block-scoped logic.

