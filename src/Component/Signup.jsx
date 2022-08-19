import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
export default function Signup() {
    let [register, setregister] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    function Getdata(e) {
        let name=e.target.name
        let value=e.target.value
     setregister((olddata)=>{
     
        return {
            ...olddata,
            [name]:value
        }
     })
     console.log(register.password);
    }
 function PostData(e){
    e.preventDefault()
    if(register.password===register.cpassword)
    alert(
        `
        name:${register.name}
        username:${register.username}
        email:${register.email}
        phone no:${register.phone}
        password:${register.password}
        confirm password:${register.cpassword}
        `
    )
    else
    alert("Confirm password and password mismatch")
 }
    return (
        <>
            <Grid container spacing={2}>

                <Grid item md={2} xs={12}>
                </Grid>
                <Grid item md={8} xs={12}>
                    <h5 className="bgcol text-light text-center p-3 mt-2">SignUp Section</h5>


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
                            label="Name*"
                            type="text"
                            autoComplete="current-name"
                            placeholder="Enter name"
                            name="name"
                        />
                        <TextField
                            onChange={Getdata}
                            id="outlined-username-input"
                            label="UserName*"
                            type="text"
                            autoComplete="current-Username"
                            placeholder="Enter Username"
                            name="username"
                        />
                        <TextField
                            onChange={Getdata}
                            id="outlined-email-input"
                            label="Email id*"
                            type="email"
                            autoComplete="current-email"
                            placeholder="Enter email id"
                            name="email"
                        />
                        <TextField
                            onChange={Getdata}
                            id="outlined-phone-input"
                            label="Phone no*"
                            type="text"
                            autoComplete="current-phone"
                            placeholder="Enter Phone no"
                            name="phone"
                        />
                        <TextField
                            onChange={Getdata}
                            id="outlined-password-input"
                            label="Password*"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            name="password"
                        />
                        <TextField
                            onChange={Getdata}
                            id="outlined-cpassword-input"
                            label="Confirm Password *"
                            type="password"
                            autoComplete="current-cpassword"
                            placeholder="Confirm Password"
                            name="cpassword"
                        />
                        <Button type="sumbit" variant="contained" className="bgcol textcol" onClick={PostData}>Sign-up</Button>
                        <Link to="/Login" style={{ color: "black", textDecoration: "none" }}> Existing User? Login now</Link>

                    </Box>


                </Grid>
                <Grid item md={2} xs={12}>
                </Grid>

            </Grid>

        </>
    )
}
