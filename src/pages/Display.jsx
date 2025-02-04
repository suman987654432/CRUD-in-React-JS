import { useState, useEffect } from "react";
import axios from "axios";
import "../css/display.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Display = () => {
    const [mydata, setmydata] = useState([]);
    const navigate = useNavigate();
    
    const loadData = async () => {
        const api = "http://localhost:3000/students";
        try {
            const response = await axios.get(api);
            setmydata(response.data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    const handleDelete = async (id) => {
        const api = `http://localhost:3000/students/${id}`;
        try {
            await axios.delete(api);
            loadData()
            alert("Data deleted");
        } catch (error) {
            console.error("Error deleting data:", error);
            alert("Failed to delete data");
        }
    };
    const handleEdit = (id) => {

        navigate(`/editdata/${id}`);
    };

    useEffect(() => {
        loadData();
    }, []);
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                    <td
                        onClick={() => handleDelete(key.id)} >
                        <MdDeleteForever style={{ width: "30px", height: "30px", cursor: "pointer", color: "red" }} />
                    </td>
                    <td onClick={() => handleEdit(key.id)}>
                        <FaEdit />
                    </td>
                </tr >
            </>
        );
    });

    return (
          <center><div className="container">
            <h1>Display Data</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th-td">Roll no</th>
                        <th className="th-td">Name</th>
                        <th className="th-td">City</th>
                        <th className="th-td">Fees</th>
                        <th className="th-td">Actions</th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </table>
        </div> </center>
    );
};

export default Display;
