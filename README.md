# 📋 React Task Manager with GitHub Integration

A modern React application featuring a **To-Do task manager** and **GitHub user search**, built with **Redux Toolkit**, **React Router**, and **Tailwind CSS**.

---

## 🚀 Live Demo

🔗 [View Live on Netlify](https://azeemuddintask.netlify.app/)

---

## ✨ Features

### 🏠 Home Page
- Central navigation to the To-Do App and GitHub Search

### ✅ To-Do App
- Add, view, and delete tasks
- Task counter
- State managed with Redux Toolkit

### 🔍 GitHub User Search
- Search any GitHub username
- Display:
  - Profile picture
  - Username / name
  - Bio, location
  - Followers count
  - Public repositories
- Error handling for empty or invalid usernames

---

## 🛠 Technologies Used

- ⚛️ **React 19**
- 💨 **Tailwind CSS**
- 🔄 **Redux Toolkit**
- 🛣️ **React Router**
- ⚡ **Vite** (build tool)
- 🌐 **GitHub Users API**

---

## 🗂 Folder Structure

A modular and scalable architecture:

```

src/
│
├── assets/                   # Static assets
│   └── react.svg             # React logo (default Vite asset)
│
├── components/               # Reusable UI components
│   ├── GitHub/
│   │   └── GitHubCard.jsx    # Displays GitHub user profile
│   │
│   └── Todo/
│       ├── TodoInput.jsx     # Input field for adding tasks
│       └── TodoList.jsx      # Displays and manages tasks
│
├── features/                 # Redux slices
│   └── todo/
│       ├── todoSelectors.js  # Redux selectors for tasks
│       └── todoSlice.js      # Reducer and actions for todo state
│
├── pages/                    # Route-level pages
│   ├── GitHub.jsx            # GitHub search page
│   ├── Home.jsx              # Landing page
│   ├── NotFound.jsx          # 404 page
│   └── Todo.jsx              # To-do app page
│
├── redux/                    # Redux store configuration
│   └── store.js              # Main Redux store
│
├── App.jsx                   # Root component with routing
├── index.css                 # Tailwind directives
└── main.jsx                  # App entry point with Redux Provider

````

---

## 🔁 Data Flow

### 🧠 To-Do Feature
- `Todo.jsx` uses:
  - `<TodoInput />` to dispatch `addTask`
  - `<TodoList />` to display and delete tasks
- State is managed in `todoSlice.js`
- Selectors in `todoSelectors.js`

### 🧑‍💻 GitHub Feature
- `GitHub.jsx` handles API requests and loading/error states
- `GitHubCard.jsx` displays fetched user data via props

---

## 🧑‍💻 Local Development

### 1. Clone the repository

```bash
git clone https://github.com/MohdAzimuddin/Bawaja_Media_Task.git
cd your-repo
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

### 4. Open in browser

Navigate to: [http://localhost:5173](http://localhost:5173)

---

## 🌍 Deployment (Netlify)

Deployed via [Netlify](https://www.netlify.com/). To deploy your own version:

1. Push your code to a GitHub repository

2. Connect the repository to Netlify

3. Set the build command to:

   ```
   npm run build
   ```

4. Set the publish directory to:

   ```
   dist
   ```

---

## 📫 Contact

Have questions or feedback?

📧 [sfsuper2020@gmail.com](mailto:sfsuper2020@gmail.com)

---

## 📌 License

This project is open-source and free to use.




