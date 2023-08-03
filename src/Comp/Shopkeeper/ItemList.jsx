import React from 'react'
import './Dash.css'
import { useState, useEffect } from 'react';
export default function ItemList() {
    
    const getitem = () => {
        const gi = localStorage.getItem('item')
        if (gi) {
            return JSON.parse(gi)
        }
        else {
            return []
        }
    }
    const [item,setItem]=useState(getitem)
    return (
        <>
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
                        </tr>
                    </thead>
                    <tbody>
                    {
                            item.map((data)=>{
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
