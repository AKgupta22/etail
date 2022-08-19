import React, { useContext } from 'react'
import { CartContext } from '../Store/CartContext'
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
export default function Cart() {
    let { Shopingcart, total, cartdispatch } = useContext(CartContext)
    let totals = 0
    let shipping = 0
    if (total < 1000)
        shipping = 150
    totals = totals + shipping
    return (
        <>
            <div className="container-fluid">
            <h5 className='bgcol mt-1 text-center text-light p-3'>Cart</h5>

                <div className="table-responsive">
                    {
                        total===0?"":<table className='table table-stripped table-hover'>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th></th>
                                <th>Qty</th>
                                <th></th>
                                <th>Total</th>
                                <th></th>


                            </tr>

                            {
                                Shopingcart.map((item, index) => {
                                    return <tr key={index}>
                                        <td><img src={item.pic1} alt="pic.." className="rounded" style={{ width: "80px", height: "85px" }} /></td>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>{item.size}</td>
                                        <td>&#8377;{item.finalprice}</td>
                                        <td><RemoveIcon onClick={() => cartdispatch({ type: "DC_CART", product: item })}></RemoveIcon></td>
                                        <td>{item.qty}</td>
                                        <td><AddIcon onClick={() => cartdispatch({ type: "INC_CART", product: item })}></AddIcon ></td>
                                        <td>&#8377;{item.qty * item.finalprice}</td>
                                        <td><DeleteIcon onClick={() => cartdispatch({ type: "REMOVE_FROM_CART", product: item })}></DeleteIcon></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    }
                </div>

                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                    </Grid>
                    <Grid item md={6} xs={12}>
                    {
                            total === 0 ? <Link to="/Shop/All/All/All" className="btn btn-sm w-100 text-light bgcol m-2">No item in cart | Shop Now</Link> : <table className="table table-stripped table-hover">
                                <tbody>
                                    <tr>
                                        <th>Total</th>
                                        <td>&#8377;{total}</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping Charge</th>
                                        <td>&#8377;{totals}</td>
                                    </tr>
                                    <tr>
                                        <th>Net Total</th>
                                        <td>&#8377;{total + totals}</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}><Link to="/checkout" className="btn btn-sm w-100 text-light bgcol m-2">Checkout</Link></th>
                                    </tr>
                                </tbody>
                            </table>
                        }
                    </Grid>
                </Grid>

            </div>

        </>
    )
}
