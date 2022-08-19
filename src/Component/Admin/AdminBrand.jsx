import React, { useState } from 'react'
import LeftNav from './LeftNav'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
export default function AdminBrand() {
    let [edit, setedit] = useState("")
    let [newdata, setnewdata] = useState("")
    function deleterc(_id) {
        alert("Deleted: " + _id)
    }
    function edited(_id) {
        setedit(_id)

    }
    function Getdata(e) {
        setnewdata(e.target.value)

    }
    function PostData() {
        alert("Edited: " + newdata)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                    <LeftNav />
                </div>
                <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12">
                    <h5 className='bgcol p-2 text-light text-center mt-1'>Brands <Link to="/add-brand" className='text-light'> <AddIcon /> </Link> </h5>
                    <div className="responsive-table">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Sr No </th>
                                    <th>Brand Name</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <th>Nike</th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' type="button" data-bs-toggle="modal" data-bs-target="#UpdateModal" onClick={() => edited("Nike")}><EditIcon ></EditIcon > </button></th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' onClick={() => deleterc("Nike")}><DeleteIcon ></DeleteIcon > </button></th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <th>Tomy Hilfigure</th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' type="button" data-bs-toggle="modal" data-bs-target="#UpdateModal" onClick={() => edited("Tomy Hilfigure")}><EditIcon ></EditIcon > </button></th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' onClick={() => deleterc("Tomy Hilfigure")}><DeleteIcon ></DeleteIcon> </button></th>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <th>Puma</th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' type="button" data-bs-toggle="modal" data-bs-target="#UpdateModal" onClick={() => edited("Puma")}><EditIcon ></EditIcon > </button></th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' onClick={() => deleterc("Puma")}><DeleteIcon ></DeleteIcon> </button></th>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <th>Gucci</th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' type="button" data-bs-toggle="modal" data-bs-target="#UpdateModal" onClick={() => edited("Gucci")}><EditIcon ></EditIcon > </button></th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' onClick={() => deleterc("Gucci")}><DeleteIcon ></DeleteIcon> </button></th>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <th>Rebook</th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' type="button" data-bs-toggle="modal" data-bs-target="#UpdateModal" onClick={() => edited("Rebook")}><EditIcon ></EditIcon > </button></th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' onClick={() => deleterc("Rebook")}><DeleteIcon ></DeleteIcon> </button></th>
                                </tr>
                                <tr>
                                    <th>6</th>
                                    <th>Levis</th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' type="button" data-bs-toggle="modal" data-bs-target="#UpdateModal" onClick={() => edited("Levis")}><EditIcon ></EditIcon > </button></th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' onClick={() => deleterc("Levis")}><DeleteIcon ></DeleteIcon> </button></th>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="modal fade" id="UpdateModal" tabindex="-1" aria-labelledby="UpdateModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit {edit} Brand</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">New name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Brand.." onChange={Getdata} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={PostData} data-bs-dismiss="modal" >Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

