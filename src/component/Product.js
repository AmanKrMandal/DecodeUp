import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Product = () => {
    const navigate = useNavigate();

    const [frist, setFrist] = useState('')
    const [last, setLast] = useState('')

    const previousButton = () => {
        // if (frist === "" || last === "") {
        //     return alert("fill all form")
        // }
        navigate('/')
    }

    const nextButton = () => {
        if (frist === "" || last === "") {
            return alert("fill all form")
        }
        navigate('/order')
    }

    return (

        <div className='container'>

            <p> select gender type!:</p>
            <input type="radio" id="male" name="fav_language" value="male" required />
            <label for="male">male</label><br></br>
            <input type="radio" id="female" name="fav_language" value="female" />
            <label for="female">female</label><br /><br></br>

            
            <div class="form-group">
                <label htmlfor="exampleInputEmail1">Occupation</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Occupation" onChange={e=>setLast(e.target.value)} required />
            </div>
            <div class="form-group">
                <label htmlfor="exampleInputEmail1">Date of birth</label>
                <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter frist name" onChange={e=>setFrist(e.target.value)} required />
            </div>
            <br></br>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
            </div>
            <br></br>
            <button type="submit" onClick={previousButton} class="btn btn-primary">previous</button>
            <button type="submit" style={{ marginLeft: "10px" }} onClick={nextButton} class="btn btn-primary">Next</button>

        </div>
    )
}

export default Product
