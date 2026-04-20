# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ♊ Gemini AI Clone 
> A sleek, responsive AI Chatbot interface built with React.js and powered by Google's Gemini 1.5 Flash API.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

---

### 🌟 Project Highlight
This project is a functional clone of the Gemini AI web application. It features a modern UI, real-time API integration, and persistent chat history within the session.

### ✨ Core Features

* **Real-time AI Interaction:** Integrated with `@google/generative-ai` to fetch intelligent responses.
* **Dynamic Sidebar:** Toggle-able navigation bar that tracks "Recent" chat history for quick access.
* **Contextual State Management:** Utilizes React's **Context API** for seamless data flow across `Main` and `Sidebar` components.
* **Typewriter Effect & Loaders:** Professional skeleton loading state during API calls.
* **Responsive Design:** Fully styled with custom CSS to mimic the official Gemini aesthetic.

---

### 🛠️ Tech Stack & Tools

* **Frontend:** React.js (Hooks & Context API)
* **AI Engine:** Google Generative AI (Gemini 1.5 Flash)
* **Styling:** Modular CSS & Assets Integration
* **Environment:** Node.js / Vite (or CRA)

---

### 📂 Smart Component Breakdown

| Component | Responsibility |
| :--- | :--- |
| **Main.jsx** | Handles the chat display, user input, and result rendering with `dangerouslySetInnerHTML`. |
| **Sidebar.jsx** | Manages "New Chat" logic and maps through the `prev` prompts array. |
| **gemini.js** | The API config layer where `generationConfig` and `model` are initialized. |

---

### 🚀 Setup & Installation

1.  **Clone the Repo:**
    ```bash
    git clone [https://github.com/Alisha418/gemini-clone.git](https://github.com/Alisha418/gemini-clone.git)
    cd gemini
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **API Key Configuration:**
    * Go to `config/gemini.js`.
    * Replace the `apiKey` variable with your own key from [Google AI Studio](https://aistudio.google.com/).

4.  **Run Application:**
    ```bash
    npm run dev
    ```

---

### 📝 Key Logic Implemented
The app uses an `onSet` function within the `Context` provider to:
1.  Set the `loading` state to `true`.
2.  Append the user prompt to the `recentPrompt` list.
3.  Execute the `run(prompt)` function from the Gemini config.
4.  Sanitize and display the response with a custom loader.

---

