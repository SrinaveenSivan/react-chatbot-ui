# 🧐 AI Chatbot Assistant (Full Stack Project)

A mini full-stack AI chatbot application built using **React** for the frontend and **Spring Boot** for the backend. The bot intelligently interprets natural language input and performs one of three actions:

- ✅ Create a new user from natural language (e.g., "Add a user with name John and email [john@example.com](mailto:john@example.com)")
- 📊 Run dynamic SQL queries (e.g., "How many users are there?")
- 💬 Provide AI-powered direct answers (e.g., "Who is the Prime Minister of India?")

---

## 🚀 Tech Stack

- **Frontend**: React, Axios, HTML, CSS
- **Backend**: Spring Boot (Java), REST API, MySQL, OpenRouter/Mixtral
- **Database**: MySQL (with JDBC access)
- **AI Model**: `mistralai/Mixtral-8x7B-Instruct` via OpenRouter API

---

## 📌 Features

- ✅ Natural language to structured JSON conversion
- ✅ Automatic user creation in DB
- ✅ Execute live SQL queries from plain English
- ✅ Intelligent fallback to direct AI answers
- ✅ Cross-Origin Resource Sharing (CORS) configured
- ✅ Debugger-compatible setup in VSCode

---

## 💡 Architecture Flow

```plaintext
[React Frontend]
     ↓
[natural input message]
     ↓
[Java Spring Boot Backend]
     ↓
[Prompt Builder]
     ↓
[OpenRouter API - Mixtral AI]
     ↓
[Classify Response]
 ├──> Payload (JSON) → Call Internal DB Logic
 ├──> SQL Query → Execute via JDBC
 └──> Direct AI → Show Answer
     ↓
[Return Response to React Chat UI]
```

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

1. Clone the repo and navigate to `ai-chatbot-backend`
2. Configure `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/test_ai_db
   spring.datasource.username=your_mysql_user
   spring.datasource.password=your_password
   openai.api.url=https://api.openrouter.ai/v1/chat/completions
   openai.api.key=your_openrouter_key
   ```
3. Run the project via your IDE or:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### 💻 Frontend Setup

1. Navigate to the React frontend project
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm start
   ```
4. Frontend runs at `http://localhost:3000`

---

## 🧰 Sample Inputs

| Input                            | Output Type  |
| -------------------------------- | ------------ |
| Create a user with name Arjun... | JSON payload |
| How many users are there?        | SQL query    |
| What is the capital of France?   | Direct AI    |

---

## 📄 How It Works

1. Input is classified using a prompt template.
2. AI generates structured JSON or special response prefixes:
   - `StartPayload` → JSON operation (CreateUser, Feedback, etc.)
   - `sql_query` → SQL execution
   - `directAi` → Simple AI reply
3. Java backend parses and routes accordingly.

---

## 📁 Folder Structure (Backend)

```
src/
 ├── controller/       → REST API
 ├── service/          → Prompt, SQL, Router, etc.
 ├── config/           → CORS config
 ├── model/            → POJOs: User, Feedback, etc.
 └── util/             → AI prompt templates, helper classes
```

---

##

---

Backend end (java):
