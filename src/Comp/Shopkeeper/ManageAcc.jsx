import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './index1.css'
export default function ManageAcc() {
    const [data, setData] = useState([])
    const d = async () => {
        try {
            const res = await axios.get("http://localhost:5500/getcus")
            return res.data.customer
        } catch (err) {
            console.log("error")
        }
    }
    useEffect(() => {
        const getdata = async () => {
            const alldata = await d()
            if (alldata) setData(alldata)
        }
        getdata()
    }, [])
    return (
        <>
            <div className="manageacc" >
                <table style={{margin: "auto",textAlign:"center"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((post) => {
                            const { shopkeeperId, firstName, lastName, email, number } = post
                            if (post) {
                                return(
                                <tr className="container" key={email}>
                                    <td>{shopkeeperId}</td>
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{email}</td>
                                    <td>{number}</td>
                                    <td><i className="fa-solid fa-trash" style={{ color: "#ff0000", cursor: "pointer" }}></i></td>
                                </tr>)
                            }
                        })}
                    </tbody>
                </table>

            </div>
        </>
    )
}
