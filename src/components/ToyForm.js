import { React, useState } from "react";

function ToyForm({ newToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  // const handleChange = (e) => {
  //   console.log(e.target.name.value);
  //   // setName(e.target.name.value);
  //   // setImage(e.target.image.value);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        likes: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        newToy(data);
      });

    setName("");
    setImage("");
  };

  console.log(name, image);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleImageChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
