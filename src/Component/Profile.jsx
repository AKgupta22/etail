import React, { useContext } from 'react'
import Grid from '@mui/material/Grid'
import pic from '../asset/images/profile.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import { CheckoutContext } from '../Store/CheckoutContext';
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


export default function Profile() {
    let { checkout } = useContext(CheckoutContext)
    return (
        <>

            <Grid container spacing={2}>

                <Grid item md={6} xs={12}>
                    <img src={pic} alt="Profile..." className="mt-1" />
                </Grid>


                <Grid item md={6} xs={12}>
                    <h5 className="textcol bgcol text-center p-3 mt-1">User Profile Section</h5>

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
                    <Link to="/updateprofile" className="btn bgcol textcol text-center w-100 btn-sm mt-1"> Update Profile</Link>


                </Grid>
            </Grid>
            <h5 className="bgcol text-light text-center p-2 mt-1">Order History</h5>
            <div className="container-fluid mt-1">
                {
                    checkout.map((item, index) => {
                        return <div key={index} className="row">
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div className="table-responsive">
                                    <table className="table table-stripped table-light table-hover">
                                        <tbody>
                                            <tr>
                                                <th>User Id: </th>
                                                <td>{item.userid}</td>
                                            </tr>
                                            <tr>
                                                <th>Order Id: </th>
                                                <td>{item._id}</td>
                                            </tr>
                                            <tr>
                                                <th>Mode: </th>
                                                <td>{item.mode}</td>
                                            </tr>

                                            <tr>
                                                <th>Status: </th>
                                                <td>{item.status}</td>
                                            </tr>
                                            <tr>
                                                <th>Payment Status: </th>
                                                <td>{item.payment}</td>
                                            </tr>
                                            <tr>
                                                <th>Total: </th>
                                                <td>&#8377;{item.total}</td>
                                            </tr>
                                            <tr>
                                                <th>Shipping Charge: </th>
                                                <td>&#8377;{item.shipping}</td>
                                            </tr>
                                            <tr>
                                                <th>Net Total: </th>
                                                <td>&#8377;{item.finalamount}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className='col-md-8 col-sm-6 col-12'>
                                <div className="table-responsive">
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
                                                item.products.map((p, index) => {
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
                            </div>

                        <hr style={{border:"5px solid grey"}} />
                        </div>
                    })
                }
            </div >
        </>
    )
}
