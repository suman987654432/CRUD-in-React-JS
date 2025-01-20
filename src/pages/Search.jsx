import axios from "axios";
import { useState } from "react";
import "../css/search.css";

const Search = () => {
    const [rno, setRno] = useState("");
    const [mydata, setMydata] = useState([]);

    const handleSubmit = async () => {
        if (rno.trim() === "") {
            alert("Please enter a roll number");
            return;
        }
        const api = `http://localhost:3000/students/?rollno=${rno}`;
        try {
            const response = await axios.get(api);
            setMydata(response.data);

            alert("Data search successful");
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const ans = mydata.map((key) => (
        <>
            <tr >
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
        </>
    ));

    return (
        <div className="container">
            <input
                type="number"
                name="rno"
                placeholder="Enter roll number"
                value={rno}
                onChange={(e) => setRno(e.target.value)}
            />
            <button onClick={handleSubmit}>Check</button>
            <table>
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Fees</th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </table>
        </div>
    );
};

export default Search;