## Intro

For this college task, I built a Student Management App using React and Vite. The app lets you add students, mark their attendance (present/absent), search and filter them by course, sort the list, and delete students from the list. It also has two view modes and a form popup for adding new students. I used React's useState hook to manage all the state — like the student list, search text, filter, and sort options. Overall, it was a good hands-on practice for understanding component-based architecture, props, and state management in React.

---

## Features

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
- View students in **Grid** or **List** mode
- Add new students using a controlled form
- Search students by name
- Filter students by course
- Sort students by name or grade
- Toggle attendance status (**Present / Absent**)
- Delete students
- Conditional badges:
  - Present / Absent badge
  - Top Performer badge
- Empty-state rendering when no students are available
- Save and load student data using `localStorage`

## Tech Stack

- React (functional components + hooks)
- Vite
- JavaScript (ES6)
- Plain CSS

---

## Project Setup

### 1) Clone the repository

```bash
git clone https://github.com/bijesh-09/CollegeReactTask
cd CollegeReactTask
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run in development

```bash
npm run dev
```

Then open the local URL shown in terminal (usually `http://localhost:5173`).

### 4) Build for production

```bash
npm run build
```

### 5) Preview production build

```bash
npm run preview
```

> Note: `npm start` is not configured in this Vite project. Use `npm run dev` instead.

---

## Component Structure

- `Header` – app title and subtitle
- `Toolbar` – search, filter, sort, and view toggle controls
- `StudentForm` – controlled form for adding students
- `StudentList` – maps and renders the student array
- `StudentCard` – student details + action buttons
- `Button` – reusable button variants
- `Badge` – reusable status labels
- `Input` – reusable labeled input component

---

## Functional Checklist Mapping

- ✅ `useState` for students, form fields, and UI controls
- ✅ Event handling (`onChange`, `onSubmit`, add, delete, toggle)
- ✅ List rendering with `.map()` and stable `id` key
- ✅ Conditional rendering cases (empty state, status badge, top performer)
- ✅ Reusable components used across the app
- ✅ Local storage persistence (bonus)

---

## Screenshot

<img width="1920" height="1080" alt="Screenshot (152)" src="https://github.com/user-attachments/assets/057cc260-6e60-48f0-b791-9bf9b3f88dae" />

---
