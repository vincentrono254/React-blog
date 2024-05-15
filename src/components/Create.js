// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>
//         We are a team of developers who love building cool things on the web.
//         Contact us at{" "}
//         <a href="mailto:contact@example.com">contact@example.com</a>.
//       </p>
//     </div>
//   );
// };

// export default About;
import { useState } from "react";
import { Form } from "react-bootstrap";

const Create = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    body: "",
  });
  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div>
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
      <p>{data.title}</p>
      <p>{data.author}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default Create;
