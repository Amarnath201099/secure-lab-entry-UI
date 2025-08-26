# 🧪 Coder's Lab

Welcome to **Coder's Lab**, a simple interactive web app built with React, designed for learners to explore a series of web development lab courses. This application includes a login interface, animated transitions, a countdown timer for session control, and a logout mechanism.

---

## 📁 Folder Structure

```
/src
│
├── components
│ ├── CountdownTimer
│ │ ├── index.js
│ │ └── index.css
│ ├── LoginForm
│ │ ├── index.js
│ │ └── index.css
│ └── DoorContent
│   ├── index.js
│   └── index.css
│
├── context
│ └── AuthContext.js
│
├── pages
│ ├── LoginPage
│ │ ├── index.js
│ │ └── index.css
│ └── LabPage
│   ├── index.js
│   └── index.css
│
├── App.js
├── App.css
└── index.js
```

---

## 🚀 Features

### ✅ Authentication

- Simple password-based login.
- Auth state managed using `React Context` and cookies (`js-cookie`).
- Session persists with local storage.

### ⏱️ Countdown Timer

- 1-minute countdown timer (configurable).
- Timer persists across page reloads.
- When the timer ends, login is disabled.

### 💻 Lab Page

- Displays a set of technology-based lab cards using React Icons.
- Countdown timer visible during active session.
- Logout button that clears session.

### 🔐 Login Page

- Features animated "doors" and login form.
- Animations differ based on screen size (responsive).
- Login form becomes inaccessible after timer expires.

---

## ⚙️ Tech Stack

- **React**
- **React Icons**
- **React Context API**
- **React Toastify**
- **JS Cookie**
- **CSS Animations**
- **LocalStorage + Cookies**

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Amarnath201099/secure-lab-entry-UI.git
cd secure-lab-entry-UI
```

### 2. Install Dependencies

```
npm install
```

### 3. Run the App

```
npm start
```

App will be running on: http://localhost:3000

---

## 🔗 Live Demo

You can explore the project here: [🚀 Coder's Lab Live on Vercel](https://secure-lab-entry-ui.vercel.app/)

---

## 🔐 Login Credentials

| **Username** | **Password** |
| ------------ | ------------ |
| `Coder101`   | `1234`       |

---

⚠️ **Login Timer Notice**

- The login system is currently set with a **1-minute timer** (for testing/demo purposes).
- Once the timer expires, **login is disabled** until you follow the reset timer procedure below.

---

## 🛠️ Resetting the Timer (For Access Again)

To regain access follow these steps:

1. **Open Developer Tools**:
   - Right-click anywhere on the page and select **Inspect**, or press `F12`.
2. Navigate to the **Application** tab.
3. In the left sidebar, go to **Local Storage**.
4. Select the entry that matches your **website URL**.
5. Locate and **delete the key** named: `timerTimeLeft`.
6. **Refresh the page** to restore login access.

---

## 💡 Future Enhancement (Suggestion)

In a production environment:

- Timer values can be stored in a **backend database**.
- Admins can be given permissions to **reset or extend access** via an admin panel or dashboard.
- This ensures more secure and centralized control over login access, especially in time-restricted sessions.

---

## 🎨 Animations

- `left-door`, `right-door`, and `login-form` animate out on **successful login**.
- Responsive transitions vary between **mobile and desktop** using **media queries**.

---

## 📦 Dependencies

- `react`
- `react-dom`
- `react-icons`
- `react-toastify`
- `js-cookie`

---

## 📌 Notes

- ✅ **Mobile-first responsive design**
- 🧩 **Modular codebase**: Organized into components and pages.
- ⏳ **Countdown timer logic** is maintained in a **global context** for centralized state management.

---

## 🙌 Acknowledgements

- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [JS Cookie](https://github.com/js-cookie/js-cookie)

---

## 👨‍💻 Author

Developed and maintained by **Amarnath Racha**  
📫 **Contact:** [amarnath201099@gmail.com]

---

## 💡 Feedback & Suggestions

I’m always looking to improve and expand this project.  
If you have any feedback, suggestions, or feature requests, feel free to get in touch via email.

Your insights are highly appreciated and can help shape future updates.

---
