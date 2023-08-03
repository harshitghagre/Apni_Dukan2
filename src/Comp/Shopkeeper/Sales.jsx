import React from 'react'
import './Dash.css'
export default function Sales() {
    return (
        <>
            <div className="container" style={{backgroundColor:"rgba(0, 0, 0, 0.034)",margin:"auto"}}>
                <form>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-white">Bill No:</label>
                            <input style={{ margin: "1rem 1rem" }} type="text" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-white">Customer Name:</label>
                            <input type="text" style={{ margin: "1rem 1rem" }} className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-white">Date:</label>
                            <input style={{ margin: "1rem 1rem" }} type="date" className="form-control" id="exampleFormControlInput1" />
                        </div>

                        <div className="col">
                            <label htmlFor="exampleFormControlInput1" className="form-label text-white">Mobile No:</label>
                            <input style={{ margin: "1rem 1rem" }} type="text" className="form-control" id="exampleFormControlInput1" />
                        </div>
                    </div>

                </form>
                </div>
                <table className="saletable" style={{textAlign:"center",margin:"auto"}}>
                    <thead className="table-warning">
                        <tr className="fs-4 fw-bolder">
                            <th scope="col">Bar C..</th>
                            <th scope="col">Product</th>
                            <th scope="col">Packing</th>
                            <th scope="col">MRP</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Disc(%)</th>
                            <th scope="col">Amount(₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Rice</td>
                            <td>12-6-2022</td>
                            <td>70</td>
                            <td>1kg</td>
                            <td></td>
                            <td></td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>tea,sugar</td>
                            <td>12-12-2021,3-6-2023</td>
                            <td>20,13</td>
                            <td>1kg,1kg</td>
                            <td></td>
                            <td>10</td>
                            <td>33</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>shampoo</td>
                            <td>4-5-2023</td>
                            <td>273</td>
                            <td>1</td>
                            <td></td>
                            <td>33</td>
                            <td>273</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>soap</td>
                            <td>23-2-2023</td>
                            <td>165</td>
                            <td>5</td>
                            <td></td>
                            <td>10</td>
                            <td>165</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>sketchbook,pencil box</td>
                            <td></td>
                            <td>180,100</td>
                            <td>1,1</td>
                            <td></td>
                            <td></td>
                            <td>280</td>
                        </tr>

                        <tr className="table-secondary fw-bold">
                            <td colSpan="2">Total: 0 Product</td>
                            <td></td>
                            <td></td>
                            <td>0.00</td>
                            <td>Goods Values</td>
                            <td></td>
                            <td>0.00</td>
                        </tr>
                    </tbody>
                </table >
        </>
    )
}
