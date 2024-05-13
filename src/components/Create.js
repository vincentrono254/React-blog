import { useState } from "react";

const UserInput = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    course: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    // submit handle
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Firstname</label>
        <br />
        <input
          type="text"
          name="firstname"
          onChange={handleInput}
          placeholder="enter your firstname"
        ></input>
        <br />

        <label>Lastname</label>
        <br />
        <input
          type="text"
          name="lastname"
          onChange={handleInput}
          placeholder="enter your lastname"
        ></input>
        <br />

        <label>Age</label>
        <br />
        <input
          type="text"
          name="age"
          onChange={handleInput}
          placeholder="enter your age"
        ></input>
        <br />

        <label>Course</label>
        <br />
        <input
          type="text"
          name="course"
          onChange={handleInput}
          placeholder="enter your course"
        ></input>
        <br />

        <button type="submit">Submit</button>
      </form>

      <p>{data.firstname}</p>
      <p>{data.lastname}</p>
      <p>{data.age}</p>
      <p>{data.course}</p>
    </div>
  );
};

export default UserInput;
