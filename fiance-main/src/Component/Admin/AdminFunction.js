import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

const AdminFunction = () => { 
    const [values, setValues] = useState({
        date: "",
        tips: "",
        stockname: "",
    });
    const handleSubmit = () => {
        if(!values.date || !values.tips){
            alert("Please Fill Data")
        } 
        axios.post('http://localhost:4500/register', values)
        .then(res => console.log("Data Submited"))
        .catch(err => console.log(err));
    } 
    return (
        <>
            <div className="admin-container">
                    <div>
                    <select className='section-des'  onChange={event => setValues((prev) => ({ ...prev, stockname: event.target.value }))}  id="">
                    <option value="select stock name">--Select Stock Names--</option>
                    <option >IBM</option>
                    <option >DOW</option>
                    <option >GOOD</option>
                    <option >MSFT</option>
                    <option >TESLA</option>
                    </select>
                    </div>

                    <div className='add-tips'>
                        <input type="date" className='date' onChange={event => setValues((prev) => ({ ...prev, date: event.target.value }))} />
                        <textarea cols="48" rows="10" onChange={event => setValues((prev) => ({ ...prev, tips: event.target.value }))}  ></textarea>
                        <button onClick={handleSubmit}   className='btns' >Add Tips</button>
                    </div>
                  
                </div>
        </>
    )

}

export default AdminFunction
