import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
export default function UpdateProfile() {
    let [update, setupdate] = useState({
        name: "",
        email: "",
        phone: "",
        address:"",
        city:"",
        state:"",
        pincode:""

    })
    function Getdata(e) {
        let name=e.target.name
        let value=e.target.value
     setupdate((olddata)=>{
     
        return {
            ...olddata,
            [name]:value
        }
     })
     console.log(update.password);
    }
 function PostData(e){
    e.preventDefault()
    alert(
        `
        Name:${update.name}
        Email:${update.email}
        Phone no:${update.phone}
        Address:${update.address}
        City:${update.city}
        State:${update.state}
        Pincode:${update.pincode}

        `
    )

 }
    return (
        <>
            <Grid container spacing={2}>

                <Grid item md={2} xs={12}>
                </Grid>
                <Grid item md={8} xs={12}>
                    <h5 className="bgcol text-light text-center p-3 mt-2">Update your details</h5>


                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '98%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField
                            onChange={Getdata}
                            id="outlined-name-input"
                            label="Name"
                            type="text"
                            autoComplete="current-name"
                            placeholder="Enter name"
                            name="name"
                        />
                        <TextField
                            onChange={Getdata}
                            id="outlined-email-input"
                            label="Email id"
                            type="email"
                            autoComplete="current-email"
                            placeholder="Enter email id"
                            name="email"
                        />
                        <TextField
                            onChange={Getdata}
                            id="outlined-phone-input"
                            label="Phone no"
                            type="text"
                            autoComplete="current-phone"
                            placeholder="Enter Phone no"
                            name="phone"
                        />
                          <TextField
                            onChange={Getdata}
                            id="outlined-address-input"
                            label="Address"
                            type="text"
                            autoComplete="current-address"
                            placeholder="Enter address "
                            name="address"
                        />
                        <TextField
                            onChange={Getdata}
                            id="outlined-city-input"
                            label="City"
                            type="text"
                            autoComplete="current-city"
                            placeholder="Enter city "
                            name="city"
                        />
                        <TextField
                            onChange={Getdata}
                            id="outlined-state-input"
                            label="State"
                            type="text"
                            autoComplete="current-state"
                            placeholder="Enter state "
                            name="state"
                        />
                        <TextField
                            onChange={Getdata}
                            id="outlined-pincode-input"
                            label="Pincode"
                            type="text"
                            autoComplete="current-pincode"
                            placeholder="Enter pincode no"
                            name="pincode"
                        />
                        <Button type="sumbit" variant="contained" className="bgcol textcol" onClick={PostData}>Update Now</Button>
                        <Link to="/Profile" style={{ color: "black", textDecoration: "none" }}>My Account</Link>

                    </Box>


                </Grid>
                <Grid item md={2} xs={12}>
                </Grid>

            </Grid>

        </>
    )
}
