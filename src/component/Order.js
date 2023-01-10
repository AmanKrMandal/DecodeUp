import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Order = () => {
    const navigate = useNavigate();

    const [Contact, setContact] = useState('')
    const [Address, setAddress] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')

    const previousButton = () => {
        if (Contact === "" || Address === "" || City==="" || State==="") {
            return alert("fill all form")
        }
        navigate('/product')
    }

    const submits = () => {
        if (Contact === "" || Address === "" || City==="" || State==="") {
            return alert("fill all form")
        }
    }
    return (
        <div className='container'>
            <div class="form-group col-md-6">
                <label for="inputPassword4">Contact us</label>
                <input type="number" class="form-control" id="inputPassword4"  placeholder="pls Enter Contact Number" onChange={e => setContact(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" onChange={e => setAddress(e.target.value)} />
            </div>
            <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" onChange={e => setCity(e.target.value)} />
            </div>
            <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <input type="text" class="form-control" id="inputCity" onChange={e => setState(e.target.value)} />
            </div>
            <br></br>
            <button type="submit" onClick={previousButton} class="btn btn-primary">previous</button>
            <button type="submit" onClick={submits} style={{ marginLeft: "10px" }} class="btn btn-primary">Submit</button>
            <div class="progress" style={{ marginTop: "20px" }}>
                <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
            </div>
        </div>
    )
}

export default Order
