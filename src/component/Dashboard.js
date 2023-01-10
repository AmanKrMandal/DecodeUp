import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../App.css'

const Dashboard = () => {
    const navigate = useNavigate();
    const [frist, setFrist] = useState('')
    const [last, setLast] = useState('')
    const [email, setEamil] = useState('')

    const nextButton = () => {
        if (frist === "" || last === "" || email === "") {
            return alert("fill all form")
        }
        navigate('/product')
    }

    return (
        <div className='container'>
            <br></br>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
            </div>
            <br></br>
            <form >
                <div class="form-group">
                    <label htmlfor="exampleInputEmail1">Frist Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter frist name" onChange={e => setFrist(e.target.value)} required />
                </div>
                <div class="form-group">
                    <label htmlfor="exampleInputEmail1">Last Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter last name" onChange={e => setLast(e.target.value)} required />
                </div>
                <div class="form-group">
                    <label htmlfor="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEamil(e.target.value)} required />
                </div>
                <br></br>

                <br></br>
                <button type="submit" onClick={nextButton} class="btn btn-primary">Next</button>
            </form>
        </div>
    )
}

export default Dashboard
