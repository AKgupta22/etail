import React, { useState, useContext } from 'react'
import LeftNav from './LeftNav'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { CheckoutContext } from '../../Store/CheckoutContext';
import { Link } from 'react-router-dom';
export default function AdminCheckout() {
    let { checkout } = useContext(CheckoutContext)
    console.log(checkout);
    let [edit, setedit] = useState("")
    let [status, setstatus] = useState({

        mode: "",
        status: "",
        payment: ""
    })
    function deleterc(_id) {
        alert("Deleted: " + _id)
    }
    function edited(_id) {
        setedit(_id)

    }

    function Getdata(e) {
        let name = e.target.name
        let value = e.target.value
        setstatus((old) => {
            return {
                ...old,
                [name]: value
            }
        })

    }
    function PostData(e) {
        e.preventDefault()
        alert(`
         
        new mode : ${status.mode}
        new status : ${status.status}
        new payment : ${status.payment}
        
        `)
        setstatus({

            mode: "",
            status: "",
            payment: ""
        })

    }

    return (
        <div className="container-fluid row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <LeftNav />
            </div>
            <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12">
                <h5 className='bgcol p-2 text-light text-center mt-1'>Checkouts </h5>
                <div className="row">
                    {
                        checkout.length > 0 ?
                            <div className="row">
                                <div className="responsive-table">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Order no </th>
                                                <th>User id</th>
                                                <th>Mode</th>
                                                <th>Order Status </th>
                                                <th>Payment Status</th>
                                                <th>Total Amount </th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            {
                                                checkout.map((item, index) => {
                                                    return <tr key={index}>
                                                        <th>{item._id}</th>
                                                        <th>{item.userid}</th>
                                                        <th>{item.mode}</th>
                                                        <th>{item.status}</th>
                                                        <th>{item.payment}</th>
                                                        <th>{item.finalamount}</th>
                                                        <th><button className='bgcol text-light btn btn-sm w-100' type="button" data-bs-toggle="modal" data-bs-target="#ViewModal" onClick={() => edited(item)}><RemoveRedEyeIcon /></button></th>
                                                        <th><button className='bgcol text-light btn btn-sm w-100' onClick={() => deleterc(item._id)}><DeleteIcon /> </button></th>
                                                    </tr>
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            : <Link to="/Admin" className='btn btn-sm text-light text-center w-100 p-3 mt-5 bgcol'> No checkout visit home page</Link>

                    }

                </div>
            </div>


            <div className="modal fade" id="ViewModal" tabindex="-1" aria-labelledby="ViewModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ViewModalLabel">Order no {edit._id}  for User id {edit.userid}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={PostData}>
                            <div className="modal-body">
                                <div className="row">

                                    <div className="col-sm-6 col-12">
                                        <label className="form-label">Payment Mode</label>
                                        <input type="text" className="form-control" disabled value={edit.mode} />
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <label className="form-label">Change Payment Mode</label>
                                        <select name="mode" value={status.mode} onChange={Getdata} className='form-select' >
                                            <option defaultChecked>Select</option>
                                            <option value="COD">COD</option>
                                            <option value="DC/UPI">DC/UPI</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="row">

                                    <div className="col-sm-6 col-12">
                                        <label className="form-label">Order Status</label>
                                        <input type="text" className="form-control" disabled value={edit.status} />
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <label className="form-label">Change Order Status</label>
                                        <select name="status" value={status.status} onChange={Getdata} className='form-select' >
                                            <option defaultChecked>Select</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Not Packed">Not Packed</option>
                                            <option value="Packed">Packed</option>
                                            <option value="Ready to Ship">Ready to Ship</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="RTO">RTO</option>
                                            <option value="Returned">Returned</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="row">

                                    <div className="col-sm-6 col-12">
                                        <label className="form-label">Payment Status</label>
                                        <input type="text" className="form-control" disabled value={edit.payment} />
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <label className="form-label">Change Payment Status</label>
                                        <select name="payment" value={status.payment} onChange={Getdata} className='form-select' >
                                            <option defaultChecked>Select</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Succes">Succes</option>
                                            <option value="Refunded">Refunded</option>
                                            <option value="Failed">Failed</option>
                                        </select>
                                    </div>

                                </div>
                                {
                                    <div className="table-responsive mt-1">
                                        <table className="table table-stripped table-light table-hover">
                                            <tbody>
                                                <tr>
                                                    <th></th>
                                                    <th>Name</th>
                                                    <th>Color</th>
                                                    <th>Size</th>
                                                    <th>Price</th>
                                                    <th>Qty</th>
                                                    <th>Total</th>



                                                </tr>
                                                {
                                                    edit === "" ? "" : edit.products.map((p, index) => {
                                                        return <tr key={index}>
                                                            <td><img src={p.pic1} alt="pic.." className="rounded" style={{ width: "42px", height: "42px" }} /></td>
                                                            <td>{p.name}</td>
                                                            <td>{p.color}</td>
                                                            <td>{p.size}</td>
                                                            <td>&#8377;{p.finalprice}</td>
                                                            <td>{p.qty}</td>
                                                            <td>&#8377;{p.qty * p.finalprice}</td>
                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </div>




    )
}

