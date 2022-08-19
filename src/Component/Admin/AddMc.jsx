import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import LeftNav from './LeftNav'
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
export default function AddMc() {
  let [newmc,setnewmc]=useState("")
  let Navigate = useNavigate()
  function Getdata(e){
       setnewmc(e.target.value)
  }
  function deleterc(e) {
    e.preventDefault()
    alert("Added Category: " + newmc)
    Navigate("/admin-mc")
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
          <LeftNav />
        </div>
        <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12">
          <h5 className='bgcol p-2 text-light text-center mt-1'>Add MainCategory</h5>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Enter category name"
                name='newmc'
                onChange={Getdata}
              />
            </div>
            <Button className='bgcol w-100' variant="contained" onClick={deleterc}><AddIcon/></Button>
          </Box>
        </div>
      </div>
    </div>
  )
}
