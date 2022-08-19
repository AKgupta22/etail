import React,{useContext, useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link,useNavigate} from 'react-router-dom'
import { CartContext } from '../Store/CartContext'
import { CheckoutContext } from '../Store/CheckoutContext'
function createData(keys, value) {
    return { keys, value };
}
const rows = [
    createData('Name', "Akash Gupta"),
    createData('Username', "ag565609"),
    createData('Email', "ag565609@gmail.com"),
    createData('Phone', "7355915842"),
    createData('Address', "67,Vill-Rampur Baldiha"),
    createData('City', "Maharajganj"),
    createData('State', "Uttar Pradesh"),
    createData('Pincode', "273151"),
];
export default function Checkout() {
    let Navigate=useNavigate()
    let { Shopingcart, total} = useContext(CartContext)
    let { checkoutdispatch} = useContext(CheckoutContext)
    let totals = 0
    let shipping = 0
    if (total < 1000)
        shipping = 150
    totals = totals + shipping
    let[mode,setmode]=useState("COD")
    function modecg(e){
        setmode(e.target.value)
    }
    function placeorder(){
        let item={
            type:"ADD_TO_CHECK",
            id:123,
            mode:mode,
            status:"Not Packed",
            payment:"succes",
            total:total,
            shipping:shipping,
            finalamount:total+shipping,
            products:Shopingcart
        }
        checkoutdispatch({item})
        Navigate("/profile")
    }
    return (
        <>

            <div className="container-fluid mt-2">

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <h5 className='bgcol text-light text-center p-2 '>Billing Details</h5>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.keys}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.keys}
                                                </TableCell>
                                                <TableCell align="left">{row.value}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Link to="/updateprofile" className="btn bgcol textcol text-center w-100 btn-sm mt-1"> Update Address </Link>

                        </Grid>
                        <Grid item md={6} xs={12}>
                            <h5 className='bgcol text-light text-center p-2 '>Cart Details</h5>

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
                                <th>Qty</th>
                                <th>Total</th>


                            </tr>

                            {
                                Shopingcart.map((item, index) => {
                                    return <tr key={index}>
                                        <td><img src={item.pic1} alt="pic.." className="rounded" style={{ width: "40px", height: "40px" }} /></td>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>{item.size}</td>
                                        <td>&#8377;{item.finalprice}</td>
                                        <td>{item.qty}</td>
                                        <td>&#8377;{item.qty * item.finalprice}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    }
                </div>

                    
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
                                        <th>Mode</th>
                                        <td> 
                                            <select className='form-select' name="mode" onChange={modecg}>
                                            <option value="COD">COD</option>
                                            <option value="DC/UPI">DC/UPI</option>
                                            </select>
                                             </td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}><button onClick={placeorder} className="btn btn-sm w-100 text-light bgcol m-2">Place Order</button></th>
                                    </tr>
                                </tbody>
                            </table>
                        }
                </Grid>

             </Grid>
                </Box>
            </div>


        </>
    )
}
