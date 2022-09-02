import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewPic() {
  const [pic, setPic] = useState({
    name: "",
    url: null,
    location: "",
    is_favorite: true,
  });
  
  const navigate = useNavigate();

  const addPic = (pic) => {
    axios
      .post(`${API}/pics`, pic)
      .then(navigate("/pics"))
      .catch((err) => console.error(err));
  };

  const handleTextChange = (e) => {
    setPic({ ...pic, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPic(pic);
  };

  return (
    <div className="new">
      <form onSubmit={handleSubmit} className="new">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={pic.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
          <br />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          value={pic.url}
          type="text"
          placeholder="URL"
          onChange={handleTextChange}
        />
          <br />
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          type="text"
          name="locations"
          value={pic.location}
          placeholder="Location"
          onChange={handleTextChange}
        />
          <br />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="text"
          name="is_favorite"
          value={pic.is_favorite}
          placeholder="Favorite?"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewPic;
