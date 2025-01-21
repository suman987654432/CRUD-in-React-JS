import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({

  });

  const loadData = () => {
    const api = `http://localhost:3000/students/${id}`;
    axios.get(api).then((res) => {
      setInput(res.data);
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    const api = `http://localhost:3000/students/${id}`;
    axios.put(api, input).then((res) => {
      console.log(res.data);
      alert("Data updated successfully");
      navigate("/display");
    }).catch((error) => {
      console.error("Error updating data:", error);
    });
  };

  return (
    <>
      <h1>Edit Page with ID: {id}</h1>

      <h1>Insert Data</h1>
      <div>
        <input
          type="text"
          name="rollno"
          value={input.rollno || ""}
          placeholder="Enter roll number"
          onChange={handleInput}
        />
        <br />
        <input
          type="text"
          name="name"
          value={input.name || ""}
          placeholder="Enter name"
          onChange={handleInput}
        />
        <br />
        <input
          type="text"
          name="city"
          value={input.city || ""}
          placeholder="Enter city"
          onChange={handleInput}
        />
        <br />
        <input
          type="number"
          name="fees"
          value={input.fees || ""}
          placeholder="Enter fees"
          onChange={handleInput}
        />
        <br />
        <button onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default EditPage;
