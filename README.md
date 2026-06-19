# Fake-Voice-Detection-
🎙️ Fake Voice Detection is an AI-powered application that identifies whether an audio recording is genuine or AI-generated. Built using machine learning and audio signal processing techniques, the system analyzes voice patterns, spectral features, and speech characteristics to detect deepfake or synthetic voices with high accuracy.

# 🎙️ FoiceDetect — AI-Powered Voice Deepfake Detection Platform

FoiceDetect is a full-stack web application that protects users from voice-based scams by detecting AI-generated (deepfake) audio using machine learning. Built during the **Nosu AI Hackathon**, it combines a React frontend, a Django REST backend, and an SVM-based ML model to analyze uploaded or recorded audio and determine whether the voice is real or artificially synthesized.

> 🏆 **Award Winner** — Cybersecurity Track (WithSandra) · $325 Prize

---

## 🌐 Live Demo

📹 [Watch the Video Demo](https://youtu.be/YJB9-aR2dEc)

---

## 🧠 How It Works

1. User uploads or records an audio sample through the browser.
2. The audio is sent to the Django backend via REST API.
3. Librosa extracts MFCC (Mel Frequency Cepstral Coefficients) audio features.
4. A trained SVM (Support Vector Machine) model classifies the voice as **real** or **fake**.
5. Nebius AI and AssemblyAI enhance analysis with transcription and contextual threat assessment.
6. The result — including confidence scores and smart countermeasures — is returned to the user.
7. Users can save, view, and export results as PDF documents.

---

## 🛡️ Key Features

- 🔍 **Deepfake Detection** — Classifies audio as real or AI-generated with high accuracy
- ⚠️ **Risk Assessment** — Evaluates threat level of suspicious voice samples
- 💬 **Smart Replies** — Suggests witty or confusing responses to throw off scammers
- 📄 **PDF Reports** — Generate and download formatted analysis reports
- 🔐 **User Authentication** — Secure login, signup, and protected routes
- 🗄️ **Evidence Storage** — Save and manage past analysis results for legal reference
- ⚡ **Real-time Processing** — Fast audio analysis with minimal latency

---

## 🏗️ Project Structure & File Descriptions

### 📁 Root Level

| File | Description |
|------|-------------|
| `package.json` | Defines Node.js dependencies and npm scripts (`start`, `build`, `test`) for the React frontend. Contains all frontend library versions. |
| `package-lock.json` | Auto-generated lockfile that pins exact versions of every installed npm package to ensure reproducible installs. |
| `.gitignore` | Specifies files and folders that Git should not track, such as `node_modules/`, `.env`, build outputs, and Python virtual environments. |
| `.gitattributes` | Controls Git line-ending normalization across operating systems (LF vs CRLF) to prevent diff noise on cross-platform teams. |
| `readme-img.png` / `readme-img1.png` | Screenshots used in documentation to visually demonstrate the application interface. |

---

### 📁 `public/` — Static HTML Shell

| File | Description |
|------|-------------|
| `index.html` | The root HTML template for the React app. Contains the `<div id="root">` mount point and meta tags for SEO and PWA support. |
| `manifest.json` | PWA manifest defining the app name, icons, theme color, and display mode — enables "Add to Home Screen" on mobile. |
| `favicon.png` | The browser tab icon displayed for the application. |
| `robots.txt` | Instructs search engine crawlers which pages to index or ignore. |

---

### 📁 `src/` — React Frontend Source

| File | Description |
|------|-------------|
| `index.js` | Entry point of the React application. Mounts the `<App />` component into the DOM and wraps it with `BrowserRouter` for routing. |
| `App.js` | Root application component. Defines all client-side routes using React Router, connecting pages like Home, Login, Signup, Detection, and Saved Results. |
| `App.css` | Base-level CSS applied globally to the App component, including font imports and root layout styles. |
| `index.css` | Global CSS reset and base styling applied before any component styles. |
| `style.css` | The primary stylesheet (~600 lines) containing all shared component styles, glassmorphism effects, gradient backgrounds, animations, and responsive layout rules used across the entire app. |
| `api.js` | Centralized Axios configuration. Sets the base URL for all backend API calls and attaches the JWT token from localStorage to every outgoing request header automatically. |
| `constant.js` | Stores app-wide constant values such as the backend base URL, making it easy to switch environments (development vs production). |
| `reportWebVitals.js` | Utility to measure and report Core Web Vitals (performance metrics) like FCP, LCP, and CLS. |
| `setupTests.js` | Configures Jest testing environment with `@testing-library/jest-dom` matchers for React component testing. |
| `App.test.js` | Basic smoke test to verify the root `App` component renders without crashing. |

---

### 📁 `src/components/` — UI Components

#### 🔑 `Authentication/`

| File | Description |
|------|-------------|
| `Form.js` | Reusable form wrapper component with shared layout and validation logic used by both Login and Signup pages. |
| `Form.css` | Styles for the authentication form — input fields, buttons, error messages, and layout. |
| `Login.js` | Login page component. Handles credential input, calls the `/api/token/` endpoint, stores the JWT access token, and redirects authenticated users. |
| `Signup.js` | Registration page component. Collects user details, calls the signup API endpoint, and auto-logs in on success. |
| `Logout.js` | Simple component that clears the JWT token from localStorage and redirects the user to the login page. |
| `Delete.js` | Allows authenticated users to permanently delete their account, sending a DELETE request to the backend and clearing local session data. |
| `Profile.js` | Displays the logged-in user's profile information fetched from the backend API. |
| `Profile.css` | Styles for the profile page card layout and user info display. |

#### 🎧 `Fakevoicedetect/`

| File | Description |
|------|-------------|
| `Fakevoicedetect.js` | The core detection page (~600 lines). Handles audio file upload and live recording, sends audio to the backend, receives and renders the full analysis: real/fake classification, confidence score, risk level, AI-generated reply suggestions, and transcription. |
| `Analysis.js` | Displays the overall analysis summary card — real/fake verdict and confidence percentage returned by the ML model. |
| `AnalysisItem.js` | Renders individual analysis detail rows (e.g., risk score, feature breakdown) in a structured, styled list format. |
| `Reply.js` | Displays the AI-generated smart reply suggestions — humorous or confusing responses the user can use against scammers. |

#### 💾 `SaveResults/`

| File | Description |
|------|-------------|
| `SaveResultsForm.js` | Form component that lets users annotate and save a detection result (with a title and notes) to their account via a POST request. |
| `SaveResultsForm.css` | Styles for the save-results form modal and input layout. |
| `UserResultDocs.js` | Lists all previously saved analysis results for the logged-in user, fetched from the backend, with options to view or delete each record. |
| `UserResultDocs.css` | Styles for the results list — cards, badges, timestamps, and action buttons. |
| `DocumentPage.js` | Detailed view of a single saved result, with all detection metadata displayed and an option to generate a formatted PDF report. |
| `DocumentPage.css` | Styles for the document detail view page. |
| `Test.js` | Utility/test component used during development to validate API response rendering. |

#### 🗃️ Other Components

| File | Description |
|------|-------------|
| `Navbar.js` | Responsive top navigation bar with links to all major pages, active link highlighting, and login/logout state awareness. |
| `Footer.js` | Simple footer component displaying project credits and links. |
| `Particle.js` | Renders an animated particle background using `react-tsparticles` for a dynamic visual effect on the home and detection pages. |
| `ProtectedRoute.js` | Higher-order route wrapper that checks for a valid JWT token. Redirects unauthenticated users to the login page before allowing access to protected pages. |
| `ScrollToTop.js` | React Router utility that scrolls the page back to the top on every route change, preventing awkward mid-page loads. |

---

### 📁 `backend/foicedetect_backend/` — Django Backend

#### ⚙️ `audio_detection/` — ML Core

| File | Description |
|------|-------------|
| `train.py` | Trains the SVM classifier using MFCC features extracted from real and fake audio samples. Saves the trained model and scaler as `.pkl` files. |
| `predict.py` | Loads the trained `svm_model.pkl` and `scaler.pkl`, extracts MFCC features from a new audio file using Librosa, and returns a real/fake prediction with confidence score. |
| `svm_model.pkl` | Serialized (pre-trained) Support Vector Machine model file. Loaded at runtime to classify audio without retraining. |
| `scaler.pkl` | Serialized StandardScaler used to normalize MFCC features to the same scale as training data before prediction. |
| `views.py` | Django view that accepts audio file uploads, runs the prediction pipeline, calls Nebius AI and AssemblyAI for enriched analysis, and returns the full result as JSON. |
| `urls.py` | URL routing for the `audio_detection` app — maps endpoints like `/detect/` to the appropriate view functions. |
| `text_generate.py` | Interfaces with **Nebius AI** to generate contextual threat assessments and analysis text based on the detection result and audio transcription. |
| `music_generate.py` | Uses AI to generate audio-based or music-inspired responses as part of the countermeasure feature set. |
| `reply.py` | Generates smart, humorous reply suggestions using AI that users can send back to scammers to confuse or delay them. |
| `models.py` | Django ORM model definitions for the `audio_detection` app (currently minimal, detection is stateless). |
| `admin.py` | Registers `audio_detection` models with the Django admin interface. |

#### 🔐 `api/` — Auth & User Data

| File | Description |
|------|-------------|
| `models.py` | Defines the `SavedResult` model — stores detection results linked to user accounts with fields for audio metadata, verdict, score, and notes. |
| `serializers.py` | DRF serializers that convert `SavedResult` model instances to/from JSON for API communication. |
| `views.py` | API views for user registration, profile retrieval, and CRUD operations on saved results (list, create, retrieve, delete). |
| `admin.py` | Registers `api` app models with the Django admin panel for backend management. |

#### 🛠️ Backend Config

| File | Description |
|------|-------------|
| `manage.py` | Django's CLI utility — used to run the dev server, apply migrations, and manage the project. |
| `requirements.txt` | Lists all Python dependencies: Django, DRF, Librosa, Scikit-learn, NumPy, AssemblyAI, and more. Run `pip install -r requirements.txt` to install. |
| `db.sqlite3` | SQLite database file storing all user accounts and saved detection results during development. |

---

## 🚀 Getting Started

### Prerequisites
- Python 3.8+, Node.js 14+, npm, Git

### Backend
```bash
cd backend/foicedetect_backend
python -m venv venv
venv\Scripts\activate        # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
npm install
npm start
# Open http://localhost:3000
```

### Environment Variables
Create a `.env` file in the project root:
```
NEBIUS_API_KEY=your_nebius_api_key
ASSEMBLY_API_KEY=your_assembly_api_key
```

---

## 🧰 Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React.js, React Router, React Bootstrap, Axios |
| Backend | Python, Django, Django REST Framework |
| ML | Scikit-learn (SVM), Librosa, NumPy, Joblib |
| AI APIs | Nebius AI, AssemblyAI |
| Auth | JWT (JSON Web Tokens) |
| Database | SQLite (dev) |

---

Built with ❤️ by the **FoiceDetect Team** — protecting people from the next generation of voice scams.
