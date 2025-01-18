import axios from 'axios'
import "../css/fetch.css"
import { useState, useEffect } from 'react'
const Fetch = () => {
  const [data, setData] = useState([])


  const loadData = async () => {
    try {
      let response = await axios.get('http://localhost:3000/students')
      setData(response.data)
    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <center>
        <h1>FETCHED DATA</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Roll NO</th>
              <th>Name</th>
              <th>City</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => {
              return (
                <tr key={student.rollNo}>
                  <td>{student.rollNo}</td>
                  <td>{student.name}</td>
                  <td>{student.city}</td>
                  <td>{student.fees}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </center>
    </>
  )
}

export default Fetch