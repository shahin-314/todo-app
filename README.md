# MOST IMPORTANT TO STEP TO LOGIN IN WEBAPP #
  Test with Sample Credentials:
  Email: abc@abc.com
  Password: abc123

🌐 Live Demo:
Deployed URL: https://todo-rhoewsuqv-shahins-projects-430e94f7.vercel.app

# 🌟 Advanced React To-Do App

Welcome to the **Advanced React To-Do App**! 🎉 This is a responsive, feature-rich to-do application built with modern web technologies. It allows users to manage tasks with priorities, integrates user authentication, and is designed to be scalable and user-friendly.

## 🚀 Features

- **Task Management** 🖥️
  - Add, delete, and prioritize tasks (High, Medium, Low).
  - Tasks are stored in Firebase Firestore for persistence and user-specific access.
- **User Authentication** 🔒
  - Secure login/logout using Firebase Authentication.
  - Tasks are protected and visible only to the logged-in user.
- **Weather Integration** 🌍
  - Planned integration with OpenWeatherMap API (currently disabled due to activation delay; displays a placeholder error).
- **Responsive Design** 📱💻
  - Fully responsive layout using CSS Grid, Flexbox, and Bootstrap, ensuring a great experience on mobile, tablet, and desktop.
- **Error Handling** ⚠️
  - Graceful handling of API and authentication errors with user-friendly messages.

## 🛠️ Tech Stack

- **Frontend**: React, Redux, Bootstrap
- **State Management**: Redux Toolkit with async actions
- **Backend**: Firebase (Authentication & Firestore)
- **API**: OpenWeatherMap API (temporarily disabled)
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📥 Setup Instructions

To run the app locally, follow these steps:

1. **Clone the Repository**:
   git clone https://github.com/shahin-314/todo-app.git
   cd todo-app
2. Install Dependencies:
   npm install
3. Configure Firebase:
   Set up a Firebase project at console.firebase.google.com.
   Enable Email/Password Authentication and Firestore Database.
   Replace the config in src/firebase.js with your Firebase project config.
4. Run the App:
   npm start
The app will launch at http://localhost:3000.

