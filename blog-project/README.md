# 🚀 BlogSpace — My Blog Manager

<div align="center">

## ✨ A Modern React Blog Management System

**Create • Read • Update • Delete • Manage**

A clean, colorful and responsive blog management dashboard built with **React.js + JSON Server**.

<br>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-REST_API-000000?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-Fast-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)

</div>

---

# 🌟 About The Project

**BlogSpace** is a modern **Blog Management System** built using **React.js**.

The application allows users to manage blog posts from one simple and attractive dashboard.

Users can:

* 📝 Create new blogs
* 📖 View all blogs
* ✏️ Edit existing blogs
* 🗑️ Delete blogs
* 🖼️ Add blog images using image URLs
* 📅 Manage post dates
* 📊 View total blog count

The project uses **JSON Server** as a lightweight REST API and demonstrates complete **CRUD operations** between a React frontend and an API.

---

# 🎥 Project Preview

<div align="center">

## 🏠 Blog Dashbaord
<img src="./public/Screenshot 2026-10-01 155945.png" width="90%" alt="BlogSpace Dashboard">

<br><br>

## 🏠 Add Blog
<img src="./public/Screenshot 2026-10-01 155955.png" width="44%" alt="Add Blog">

## 🏠 Edit Blog
<img src="./public/Screenshot 2026-10-01 160008.png" width="44%" alt="Edit Blog">

<br><br>

## 🏠BlogSpace Mobile View
<img src="./public/Screenshot 2026-10-01 160029.png" width="40%" alt="BlogSpace Mobile View">

</div>

> 📌 **Note:** Add your project screenshots inside the `screenshots` folder using the filenames shown above.

---

# ✨ Features

<table>
<tr>
<td width="50%">

## 📝 Add Blog

Create a new blog post with:

* Blog Number
* Blog Title
* Image URL
* Blog Description
* Post Date

</td>

<td width="50%">

## 📖 View Blogs

All blogs are loaded from the API and displayed as attractive cards containing:

* Blog Image
* Blog Number
* Title
* Description
* Date

</td>
</tr>

<tr>
<td>

## ✏️ Edit Blog

Select any blog and edit its information.

Existing data automatically appears inside the form.

</td>

<td>

## 🗑️ Delete Blog

Delete any blog directly from its card using the Delete button.

</td>
</tr>

<tr>
<td>

## 📊 Blog Counter

The dashboard automatically displays the total number of blogs.

Example:

**9 Blogs**

</td>

<td>

## 📱 Responsive Design

The interface adapts to different screen sizes:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

</td>
</tr>
</table>

---

# 🖥️ Dashboard

The application has a clean two-section dashboard.

## 🟣 Left Side — Blog Form

The left panel contains the blog management form.

```text
┌──────────────────────────────┐
│  ✎ Add New Blog              │
│  Create a new blog post      │
│                              │
│  Blog No.                    │
│  [________________________]  │
│                              │
│  Blog Title                  │
│  [________________________]  │
│                              │
│  Blog Image                  │
│  [________________________]  │
│                              │
│  Blog Description            │
│  [________________________]  │
│                              │
│  Post Date                   │
│  [________________________]  │
│                              │
│        + Add Blog            │
└──────────────────────────────┘
```

---

## 🔵 Right Side — Blog Dashboard

All blog posts are displayed in a responsive card grid.

```text
┌────────────────────────────────────────────┐
│ All Blogs                         9 Blogs │
│ Manage all your blog posts                │
├────────────────────┬───────────────────────┤
│    🖼️ Blog Card    │     🖼️ Blog Card      │
│    Blog #1         │     Blog #2            │
│                    │                       │
│    Blog Title      │     Blog Title         │
│    Description     │     Description        │
│    📅 Date         │     📅 Date            │
│                    │                       │
│  ✎ Edit 🗑 Delete  │   ✎ Edit 🗑 Delete     │
└────────────────────┴───────────────────────┘
```

---

# 🔄 CRUD Operations

BlogSpace implements all four basic **CRUD operations**.

| Operation | HTTP Method | API Endpoint |
| --------- | ----------- | ------------ |
| 🟣 Create | `POST`      | `/blogs`     |
| 🔵 Read   | `GET`       | `/blogs`     |
| 🟢 Update | `PUT`       | `/blogs/:id` |
| 🔴 Delete | `DELETE`    | `/blogs/:id` |

---

## 🔁 CRUD Flow

```text
                    BlogSpace
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
        React Frontend       JSON Server
             │                   │
             └─────────┬─────────┘
                       │
                       ▼
                  Blog Data
                       │
       ┌───────────────┼───────────────┐
       │               │               │
       ▼               ▼               ▼
    CREATE           UPDATE          DELETE
     POST              PUT            DELETE
       │               │               │
       └───────────────┼───────────────┘
                       ▼
                Updated Blog List
```

---

# ⚛️ React Concepts Used

This project demonstrates important React concepts.

## `useState()`

Used for managing:

```text
blogs
blogNo
title
image
description
date
editId
```

Example:

```jsx
const [blogs, setBlogs] = useState([]);
```

---

## `useEffect()`

Used to fetch blog data when the application loads.

```jsx
useEffect(() => {
  getBlogs();
}, []);
```

---

## Event Handling

React event handling is used for:

* Input changes
* Add Blog
* Edit Blog
* Update Blog
* Delete Blog
* Cancel Edit

Example:

```jsx
onChange={(e) => setTitle(e.target.value)}
```

---

## Conditional Rendering

The form changes according to the current mode.

### Add Mode

```text
Add New Blog
+
Add Blog
```

### Edit Mode

```text
Edit Blog
✓ Update Blog
Cancel Edit
```

This is controlled using:

```jsx
{editId ? "Edit Blog" : "Add New Blog"}
```

---

# 🌐 API Integration

BlogSpace uses **JSON Server** as a lightweight backend.

## API Endpoint

```text
http://localhost:3000/blogs
```

---

## Example Blog Object

```json
{
  "id": "1",
  "blogNo": 1,
  "title": "The Future of Web Development",
  "image": "https://images.unsplash.com/...",
  "description": "Web development is continuously changing...",
  "date": "2026-09-10"
}
```

---

# 📂 Project Structure

```text
BlogSpace/
│
├── public/
│
├── screenshots/
│   ├── dashboard.png
│   ├── add-blog.png
│   ├── edit-blog.png
│   └── mobile-view.png
│
├── src/
│   ├── App.jsx
│   ├── style.css
│   └── main.jsx
│
├── db.json
├── package.json
├── package-lock.json
└── README.md
```

---

# 📄 Main Files

| File           | Purpose                                   |
| -------------- | ----------------------------------------- |
| `App.jsx`      | Main React application and CRUD logic     |
| `style.css`    | Complete UI design and responsive styling |
| `main.jsx`     | React application entry point             |
| `db.json`      | Blog data used by JSON Server             |
| `package.json` | Project dependencies and scripts          |
| `README.md`    | Project documentation                     |

---

# 🛠️ Technologies Used

## Frontend

* ⚛️ React.js
* 🟨 JavaScript
* 🎨 CSS3
* ⚡ Vite

## API / Backend

* 🗄️ JSON Server
* 🔗 REST API
* 🌐 Fetch API

## React Concepts

* `useState`
* `useEffect`
* Event Handling
* Conditional Rendering
* `.map()`
* Async / Await
* Fetch API

---

# 🎨 UI & Design

BlogSpace focuses on a modern and colorful dashboard experience.

### 🌈 Gradient Design

Purple and violet gradients are used throughout the interface to create a modern visual identity.

### 🃏 Card-Based Layout

Every blog is presented in a clean card containing:

* Blog image
* Blog number
* Blog title
* Description
* Date
* Edit button
* Delete button

### ✨ Hover Animations

Cards and buttons include smooth hover effects to make the interface more interactive.

### 📌 Sticky Form

On desktop screens, the blog form remains visible while browsing through the blog list.

---

# 📱 Responsive Design

BlogSpace is designed to work across different screen sizes.

## 💻 Desktop

```text
┌───────────────┬─────────────────────────────┐
│               │                             │
│  Blog Form    │       Blog 1   Blog 2      │
│               │                             │
│               │       Blog 3   Blog 4      │
│               │                             │
└───────────────┴─────────────────────────────┘
```

## 📱 Mobile

```text
┌──────────────────────┐
│      Blog Form       │
├──────────────────────┤
│      Blog Card       │
├──────────────────────┤
│      Blog Card       │
├──────────────────────┤
│      Blog Card       │
└──────────────────────┘
```

---

# ⚙️ Installation & Setup

Follow the steps below to run BlogSpace locally.

## 1️⃣ Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

## 2️⃣ Open the Project

```bash
cd BlogSpace
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Start JSON Server

Open a terminal and run:

```bash
npx json-server --watch db.json --port 3000
```

Your API will be available at:

```text
http://localhost:3000/blogs
```

## 5️⃣ Start React

Open another terminal and run:

```bash
npm run dev
```

Then open the local URL provided by Vite.

---

# 🔄 How The Application Works

## 1. Application Starts

React loads the application.

## 2. Fetch Blog Data

`useEffect()` calls:

```jsx
getBlogs();
```

The application sends:

```text
GET /blogs
```

## 3. Store API Data

The received data is stored using:

```jsx
setBlogs(data);
```

## 4. Display Blogs

React uses `.map()` to display each blog as a card.

```jsx
blogs.map((blog) => (
  <div className="blog">
    ...
  </div>
))
```

## 5. User Performs CRUD Operations

```text
🟣 Add       → POST
🔵 View      → GET
🟢 Edit      → PUT
🔴 Delete    → DELETE
```

---

# 📝 Add Blog Flow

When the user clicks **Add Blog**:

```text
Enter Blog Details
        ↓
Create newBlog object
        ↓
POST Request
        ↓
JSON Server
        ↓
Clear Form
        ↓
Fetch Blogs Again
        ↓
New Blog Appears
```

---

# ✏️ Edit Blog Flow

When the user clicks **Edit**:

```text
Click Edit
    ↓
Store Blog ID
    ↓
Load Existing Data
    ↓
Edit Form
    ↓
Click Update Blog
    ↓
PUT Request
    ↓
Refresh Blog List
```

---

# 🗑️ Delete Blog Flow

When the user clicks **Delete**:

```text
Click Delete
      ↓
Get Blog ID
      ↓
DELETE Request
      ↓
Remove From API
      ↓
Fetch Blogs Again
      ↓
Blog Disappears
```



# 📚 Sample Blogs

The current project includes sample blog posts covering web development topics.

| #  | Blog                            |
| -- | ------------------------------- |
| 01 | The Future of Web Development   |
| 02 | Why Learning React Is Important |
| 03 | Tips for Better UI Design       |
| 04 | Understanding JavaScript        |
| 05 | Getting Started With CSS        |
| 06 | Importance of Responsive Design |
| 07 | How APIs Work                   |
| 08 | Learning Web Development        |
| 09 | Modern Website Development      |

---

# 🎯 Learning Goals

This project was developed to practice real-world React concepts.

### Through this project I practiced:

* ⚛️ React application development
* 🧠 State management using `useState`
* 🔄 Lifecycle handling using `useEffect`
* 🌐 REST API integration
* 🔗 Fetch API
* 🟣 POST requests
* 🔵 GET requests
* 🟢 PUT requests
* 🔴 DELETE requests
* 📝 Form handling
* ✏️ Editing existing data
* 🗑️ Deleting API data
* 📊 Dynamic data rendering
* 📱 Responsive CSS
* 🎨 Modern UI design

---

# 🔮 Future Improvements

Some features that can be added in future versions:

* 🔍 Blog Search
* 🏷️ Blog Categories
* 📑 Pagination
* 🌙 Dark Mode
* ❤️ Like System
* 💬 Comment System
* 🔐 User Authentication
* 👤 User Profiles
* 🖼️ Image Upload
* 🔔 Toast Notifications
* ☁️ Real Database
* ✍️ Rich Text Editor

---

# 📌 Project Information

| Information     | Details                |
| --------------- | ---------------------- |
| 📌 Project Name | BlogSpace              |
| 🎯 Project Type | Blog Management System |
| ⚛️ Frontend     | React.js               |
| 🎨 Styling      | CSS3                   |
| 🔗 API          | JSON Server            |
| 💾 Data         | `db.json`              |
| 🔄 Operations   | CRUD                   |
| 📱 Responsive   | Yes                    |
| 🟢 Status       | Completed              |

---

## 🎥 Project Demo

<p align="center">

Watch the complete working demonstration of the **Blog Space** by clicking the button below.
<p><strong>🎥 Click the button below to watch the complete working demonstration of this Image Slider project.</strong></p>

<a href="https://drive.google.com/file/d/1Ii4WQTtAnUcBfhc11KD3X4MA7AHyk8hW/view?usp=sharing" target="_blank">

<img src="https://img.shields.io/badge/▶️%20Watch%20Project%20Demo-Click%20Here-red?style=for-the-badge&logo=googleplay&logoColor=white">

</a>

</p>

# 🏆 Project Status

<div align="center">

## 🟢 BlogSpace v1.0

### Completed React CRUD Blog Management System

**Create → Read → Update → Delete**

</div>

---

# 👨‍💻 Developer

<div align="center">

## **Shabbir Hathiyari**

🎓 Full Stack Web Development Student

💻 React.js • JavaScript • HTML • CSS • Bootstrap

---

### ⭐ If you like this project, consider giving it a Star!

### Made with ❤️ using React.js

</div>

---

# 📄 License

This project is created for **educational and learning purposes**.

You are free to use this project for practice and learning.
