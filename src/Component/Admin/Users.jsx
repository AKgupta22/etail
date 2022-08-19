import React from 'react'
import LeftNav from './LeftNav'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
export default function Users() {
    function deleterc(_id) {
        alert("Deleted: " + _id)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                    <LeftNav />
                </div>
                <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12">
                    <h5 className='bgcol p-2 text-light text-center mt-1'>Admin Users page</h5>
                    <div className="responsive-table">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Id</th>
                                    <th>Username</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <th>Akash</th>
                                    <th>Akash Gupta</th>
                                    <th>7355915845</th>
                                    <th>ag45565@gmail.com</th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' onClick={() => deleterc("Akash")}><PersonRemoveIcon ></PersonRemoveIcon> </button></th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <th>Akhilesh</th>
                                    <th>Akhilesh Sharma</th>
                                    <th>6392213247</th>
                                    <th>akhileshmask@gmail.com</th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' onClick={() => deleterc("Akhilesh")}><PersonRemoveIcon ></PersonRemoveIcon> </button></th>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <th>Sachin</th>
                                    <th>Sachin Singh</th>
                                    <th>9973967791</th>
                                    <th>sachinbihar@gmail.com</th>
                                    <th><button className='bgcol text-light btn btn-sm w-100' onClick={() => deleterc("Sachin")}><PersonRemoveIcon ></PersonRemoveIcon> </button></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}
