import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    body: "",
  });
  const [errors, setErrors] = useState({});
  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, author, body } = data;
    const errors = {};

    if (!title) errors.title = "Title is required";
    if (!author) errors.author = "Author is required";
    if (!body) errors.body = "Body is required";

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      toast.error("Please fill in all required fields", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } else {
      axios
        .post("http://localhost:4000/blogs", data)
        .then((res) => {
          toast.success("new blog added successfully", {
            position: toast.POSITION.TOP_RiGHT,
            autoClose: 3000,
          });
        })
        .catch((error) => {
          console.error("Error adding blog:", error);
          toast.error(
            "An error occurred while adding the blog. Please try again later.",
            {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            }
          );
        });
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.controlInput">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            Placeholder="Sample Title"
            onChange={handleOnchange}
            value={data.title}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.controlInput">
          <Form.Label>Author</Form.Label>
          <Form.Control
            name="author"
            type="text"
            Placeholder="Sample Author"
            onChange={handleOnchange}
            value={data.author}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.controlTextarea">
          <Form.Label>Body</Form.Label>
          <Form.Control
            name="body"
            as="textarea"
            Placeholder="Sample Body"
            rows={3}
            onChange={handleOnchange}
            value={data.body}
          ></Form.Control>
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          <ToastContainer />
          Submit
        </Button>
      </Form>
      {/* <p>{data.title}</p>
      <p>{data.author}</p>
      <p>{data.body}</p> */}
    </div>
  );
};

export default Create;
