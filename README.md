# JS Todo App

A simple and clean task management application built with vanilla JavaScript, HTML, and CSS. It allows users to add, view, and delete tasks, with all data persisted in the browser's `localStorage`.

## Features

- **Add Tasks** – Create new tasks with a title and a category (Academic or Work)
- **Delete Tasks** – Mark tasks as done and remove them from the list
- **Task Counter** – Displays the current number of pending tasks
- **Live Date Display** – Shows the current day, date, and month/year in the header
- **Persistent Storage** – Tasks are saved in `localStorage` so they survive page refreshes
- **Modal Form** – A centered overlay form for adding new tasks
- **Backdrop Dismiss** – Click the backdrop to close the new-task form

## Technologies Used

- **HTML5** – Semantic markup and form elements
- **CSS3** – Flexbox layout, custom styling, and responsive design
- **JavaScript (ES6+)** – DOM manipulation, event handling, and `localStorage` API
- No frameworks or external libraries required

## Getting Started

### Prerequisites

A modern web browser (Chrome, Firefox, Edge, Safari) is all you need — no build tools or dependencies to install.

### Running the App

1. Clone or download the repository:
   ```bash
   git clone https://github.com/zaselalk/js-todo.git
   ```
2. Open the project folder:
   ```bash
   cd js-todo
   ```
3. Open `index.html` directly in your browser:
   - Double-click `index.html` in your file manager, **or**
   - Serve it with any static file server, for example:
     ```bash
     npx serve .
     ```

No installation or build step is required.

## Usage

1. **View tasks** – All saved tasks are listed on the main screen.
2. **Add a task** – Click the **New Task** button (bottom-right corner) to open the form.
   - Enter a task title in the **Text** field.
   - Choose a **Task Type** (Academic or Work) from the dropdown.
   - Click **ADD NEW TASK** to save.
3. **Close the form** – Click the ✕ button or the dimmed backdrop.
4. **Complete a task** – Click the **Done?** button next to a task to remove it from the list.

## Project Structure

```
js-todo/
├── index.html   # Application markup and layout
├── script.js    # Application logic (CRUD, localStorage, date display)
└── style.css    # Styles and responsive layout
```

## License

This project is open source and available under the [MIT License](LICENSE).
