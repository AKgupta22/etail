import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button  from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    let [login,setlogin]=useState({
        username:"",
        password:""
    })
    let Navigate=useNavigate()
    function Getdata(e){
        let name=e.target.name
        let value=e.target.value
        setlogin((olddata)=>{
            return {
                ...olddata,
                [name]:value
            }
        })
    }
    function PostData(e){
        e.preventDefault()
        localStorage.setItem("login",true)
        localStorage.setItem("username",login.username)
        Navigate("/Profile")
    }
    return (
        <>
            <Grid container spacing={2}>

                <Grid item md={2} xs={12}>
                </Grid>
                <Grid item md={8} xs={12}>
                    <h5 className="bgcol text-light text-center p-3 mt-2">Login Section</h5>
               

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
                                id="outlined-username-input"
                                label="UserName*"
                                type="text"
                                autoComplete="current-username"
                                placeholder="Enter your username"
                                name="username"
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
                           <Button type="sumbit" variant="contained" className="bgcol textcol" onClick={PostData}>Login</Button>
                           <div className="d-flex justify-content-between">
                           <Link to="#" style={{color:"black",textDecoration:"none"}}> Forget Password </Link>
                           <Link to="/Signup" style={{color:"black",textDecoration:"none"}}> New User? Create an account </Link>
                           </div>
                        </Box>

                </Grid>
                <Grid item md={2} xs={12}>
                </Grid>

            </Grid>

        </>
    )
}
