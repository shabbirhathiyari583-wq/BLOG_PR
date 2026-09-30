import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [blogNo, setBlogNo] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [editId, setEditId] = useState(null);
  const getBlogs = async () => {
    const response = await fetch("http://localhost:3000/blogs");
    const data = await response.json();

    setBlogs(data);
  };

  

  useEffect(() => {
    getBlogs();
  }, []);

  const addBlog = async () => {
    const newBlog = {
      blogNo: blogNo,
      title: title,
      image: image,
      description: description,
      date: date
    };
    await fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBlog)
    });
    clearForm();
    getBlogs();
  };

  const editBlog = (blog) => {
    setEditId(blog.id);

    setBlogNo(blog.blogNo);
    setTitle(blog.title);
    setImage(blog.image);
    setDescription(blog.description);
    setDate(blog.date);
  };

  const updateBlog = async () => {
    const updatedBlog = {
      blogNo: blogNo,
      title: title,
      image: image,
      description: description,
      date: date
    };

    await fetch("http://localhost:3000/blogs/" + editId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBlog)
    });

    clearForm();
    getBlogs();
  };

  const deleteBlog = async (id) => {
    await fetch("http://localhost:3000/blogs/" + id, {
      method: "DELETE"
    });
    getBlogs();
  };

  const clearForm = () => {
    setBlogNo("");
    setTitle("");
    setImage("");
    setDescription("");
    setDate("");
    setEditId(null);
  };

  return (
    <div className="container">
      <div className="header">
        <div>
          <h1>BlogSpace</h1>
          <p>My Blog Manager</p>
        </div>
      </div>

      <div className="main">
        <div className="leftSide">
          <div className="formTitle">
            <div className="formIcon">{editId ? "✎" : "+"}</div>
            <div><h2>{editId ? "Edit Blog" : "Add New Blog"}</h2>
              <p>{editId? "Update your blog information": "Create a new blog post"}</p>
            </div>
          </div>


          <label>Blog No.</label>
          <input type="number"value={blogNo}onChange={(e) => setBlogNo(e.target.value)}placeholder="Enter Blog No."/>
          <label>Blog Title</label>
          <input type="text"value={title}onChange={(e) => setTitle(e.target.value)}placeholder="Enter Blog Title"/>
          <label>Blog Image</label>
          <input type="text"value={image}onChange={(e) => setImage(e.target.value)}placeholder="Enter Image URL"/>
          <label>Blog Description</label>
          <textarea value={description}onChange={(e) => setDescription(e.target.value)}placeholder="Enter Blog Description"></textarea>
          <label>Post Date</label>
          <input type="date"value={date}onChange={(e) => setDate(e.target.value)}/>

          {editId ? (
            <button
              className="updateBtn"onClick={updateBlog}><span>✓</span>Update Blog</button>
          ) : (
            <button className="addButton"onClick={addBlog}><span>+</span>Add Blog</button>
          )}
          {editId && (<button className="cancelBtn"onClick={clearForm}>Cancel Edit</button>)}
        </div>

        <div className="rightSide">
          <div className="blogHeading">
            <div>
              <h2>All Blogs</h2>
              <p>Manage all your blog posts</p>
            </div>

            <div className="blogCount">
              {blogs.length} Blogs
            </div>
          </div>

          <div className="blogs">
            {blogs.map((blog) => (

              <div className="blog" key={blog.id}>
                <div className="imageBox">
                  <img src={blog.image}alt={blog.title}/>
                  <span>Blog #{blog.blogNo}</span>
                </div>

                <div className="blogContent">
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <div className="date">📅 {blog.date}</div>
                  <div className="buttons">
                    <button className="editButton"onClick={() => editBlog(blog)}>✎ Edit</button>
                    <button className="deleteButton"onClick={() => deleteBlog(blog.id)}>🗑 Delete</button>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
      <footer className="footer">
        <strong>BlogSpace</strong> © 2026
        <span> | </span>
        My Blog Manager
      </footer>
    </div>
  );
}

export default App;