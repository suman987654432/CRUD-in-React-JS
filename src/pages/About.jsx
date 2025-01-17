import { useState } from "react";

const About = () => {
    const [input, setInput] = useState({

    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setInput((Values) => ({ ...Values, [name]: value }));

    };

    const handleSubmit = () => {
        console.log(input);
    };

    return (
        <>
            <h1>Application Form</h1>
            Enter name: <input type="text" name="stuname" onChange={handleInput} />  <br />
            Enter city: <input type="text" name="city" onChange={handleInput} /><br />
            Enter subject: <input type="text" name="sub" onChange={handleInput} /> <br />
            Enter fees: <input type="text" name="number" onChange={handleInput} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
};

export default About;
