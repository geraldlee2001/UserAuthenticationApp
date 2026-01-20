---
# UserAuthenticationApp
An application that using Global Auth State to demonstrate an user performing registration, login and a landing home page to display registered user detail
---

## 🚀 Features

- **Global Auth State:** Managed via React Context API (Login, Signup, Logout).
- **Secure Navigation:** Conditional rendering of screens using React Navigation (Auth Stack vs. App Stack).
- **Form Validation:** Real-time validation for email formats, password length, and missing fields.
- **Persistent Login:** Integration with `AsyncStorage` to keep users logged in across app restarts.
- **Bonus UI Features:** \* Password visibility toggle (Show/Hide).
- Modern UI/UX with clean input fields and feedback messages.

---

## 🛠 Tech Stack

- **Framework:** React Native
- **Language:** TypeScript
- **State Management:** Context API
- **Navigation:** React Navigation (Stack)
- **Storage:** AsyncStorage
- **Environment:** Node.js (v20+)

---

## 📂 Project Structure

```text
root
├── context/
│   └── AuthContext.tsx    # Auth logic and state provider
├── navigation/
│   └── AppNavigator.tsx  # Navigation container & route protection
├── screens/
    ├── LoginScreen.tsx    # User login with validation
    ├── SignupScreen.tsx   # User registration
    └── HomeScreen.tsx     # Protected user profile dashboard

```

---

## 📝 Key Functionality

### Authentication Context

The AuthProvider wraps the entire application, providing a user object and authentication methods:

- **login(email, password):** Updates state and persists user data.
- **signup(user:{name, email, password}):** Creates a new user.
- **logout():** Clears the global state and AsyncStorage.

---

## ⚙️ Installation & Setup

Follow these steps to get the project running locally:

### 1. Prerequisites

- **Node.js:** v20.x or higher (Required for Metro bundler compatibility).
- **NPM or Yarn**
- **Expo CLI** or **React Native CLI**

### 2. Install Dependencies

```bash
yarn install
```

### 3. Run the Application

```bash
# For React Native CLI
yarn ios # or android
```

---

## ⚙️ Project Setup Step

These are the steps to setup project from beginning:

# 1. Setup project with react-native-cli

```
npx @react-native-community/cli init UserAuthenticationApp
```

# 2. Install dependencies

```
yarn add lodash @react-native-async-storage/async-storage react-native-screens react-native-safe-area-context @react-navigation/native @react-navigation/native-stack
```

# 3. Run the application

```
cd ios && pod install && cd ../ && yarn ios
```
