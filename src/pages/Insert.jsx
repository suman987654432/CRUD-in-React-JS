import { useState } from "react";
import axios from "axios";

const Insert = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async () => {
        const api = "http://localhost:3000/students";
        try {
            await axios.post(api, input);
            alert("Data inserted");
        } catch (error) {
            console.error("Error inserting data:", error);
            alert("Failed to insert data");
        }
    };

    const inputStyle = {
        margin: "10px 0",
        padding: "10px",
        width: "300px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    };

    const buttonStyle = {
        marginTop: "15px",
        padding: "10px 20px",
        border: "none",
        backgroundColor: "#4CAF50",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
    };

    const containerStyle = {
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
    };

    return (
        <div style={containerStyle}>
            <h1>Insert Data</h1>
            <div>
                <input
                    type="text"
                    name="rollno"
                    placeholder="Enter roll number"
                    onChange={handleInput}
                    style={inputStyle}
                />
                <br />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    onChange={handleInput}
                    style={inputStyle}
                />
                <br />
                <input
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    onChange={handleInput}
                    style={inputStyle}
                />
                <br />
                <input
                    type="number"
                    name="fees"
                    placeholder="Enter fees"
                    onChange={handleInput}
                    style={inputStyle}
                />
                <br />
                <button onClick={handleSubmit} style={buttonStyle}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Insert;
