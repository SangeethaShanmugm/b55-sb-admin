import React, { useState, useContext } from 'react'
import { UserContext } from "./UserContext"
import { useHistory } from "react-router-dom"
function UserCreate() {
    const [name, setName] = useState("john")
    const [email, setEmail] = useState("john@gmail.com")
    const [phone, setPhone] = useState("12345")
    const history = useHistory()


    const data = useContext(UserContext)//subscribe
    console.log(data)//{userData: Array(0), setUserData: ƒ}

    const handleSubmit = () => {
        console.log(name, email, phone)
        const newUserData = { name, email, phone }
        console.log(newUserData)
        //copy userData and add newUserData
        data.setUserData([...data.userData, newUserData])
        console.log("data", data.userData)
        history.push("/user")
    }
    return (
        <div className='container'>
            <h1>User Create</h1>
            <div className='row'>
                <div className='col-lg-12'>
                    <label>Name</label>
                    <input type="text" id="name" name="name" className='form-control'
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='col-lg-12'>
                    <label>Email</label>
                    <input type="email" id="email" name="email" className='form-control'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>


                <div className='col-lg-12'>
                    <label>Phone</label>
                    <input type="number" id="phone" name="phone" className='form-control'
                        value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>

            <div className='row' style={{ justifyContent: "center" }}>
                <div className='btn btn-primary'>
                    <input className='btn btn-primary' type="submit"
                        onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default UserCreate