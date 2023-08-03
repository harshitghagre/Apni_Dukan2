import React from 'react'
import './Dash.css'
import { useState, useEffect } from 'react';

export default function Item() {

    const [product, setpro] = useState()
    const [unit, setunit] = useState()
    const [mrp, setmrp] = useState()
    const [cost, setcost] = useState()
    const [sale, setsale] = useState()


    const getitem = () => {
        const gi = localStorage.getItem('item')
        if (gi) {
            return JSON.parse(gi)
        }
        else {
            return []
        }
    }
    const [data, setData] = useState(getitem)


    const handleSub = (e) => {
        e.preventDefault()
        // console.log(item)
        let item = {
            product, unit, mrp, cost, sale
        }
        setData([...data, item])
        console.log(data)

    }
    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(data))
    }, [data])
    
    const reset = () =>{
        setpro('')
        setmrp('')
        setunit('')
        setcost('')
        setsale('')
    }

    return (
        <>
            <div className="itemform ">
                <form onSubmit={handleSub}>
                    <h4>Create Item</h4>
                    <div className="row" style={{ margin: "1rem 0" }}>
                        <label htmlFor="product">Product:</label>
                        <input type="text" value={product} onChange={(e) => { setpro(e.target.value) }} name="product" id="product" style={{ border: "1px solid black", margin: "0 1rem" }} />
                        <label htmlFor="unit">Unit:</label>
                        <input type="text" value={unit} onChange={(e) => { setunit(e.target.value) }} name="" id="unit" style={{ border: "1px solid black", margin: "0 1rem" }} />
                        <label htmlFor="mrp">MRP:</label>
                        <input type="text" value={mrp} onChange={(e) => { setmrp(e.target.value) }} name="" id="mrp" style={{ border: "1px solid black", margin: "0 1rem" }} />
                    </div>
                    <div className="row">
                        <label htmlFor="cost">Cost:</label>
                        <input type="text" value={cost} onChange={(e) => { setcost(e.target.value) }} name="cost" id="cost" style={{ border: "1px solid black", margin: "0 1rem" }} />
                        <label htmlFor="sale">Sale Rate:</label>
                        <input type="text" value={sale} onChange={(e) => { setsale(e.target.value) }} name="sale" id="sale" style={{ border: "1px solid black", margin: "0 1rem" }} />
                    </div>
                    <div className="row">
                        <button className='btn' type="submit" style={{ background: "black", color: "white", padding: "0.6rem" }}>Create</button>
                        <button className='btn' onClick={reset}type="reset" style={{ background: "white", color: "black", padding: "0.6rem", border: "1px solid black" }}>Clear</button>
                    </div>
                </form>
            </div>
            <div className="itemtable" >
                <h2>Item Table</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Unit</th>
                            <th>MRP</th>
                            <th>Cost</th>
                            <th>Sale</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data)=>{
                                return(
                                <tr key={data.product}>
                                    <td>{data.product}</td>
                                    <td>{data.unit}</td>
                                    <td>{data.mrp}</td>
                                    <td>{data.cost}</td>
                                    <td>{data.sale}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
