import React from 'react'
import LeftNav from './LeftNav'
import pic from '../../../src/asset/images/profile.png'
export default function AdminHome() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                    <LeftNav />
                </div>
                <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12">
                    <h5 className='bgcol p-2 text-light text-center mt-1'>Admin Home page</h5>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <img src={pic} alt="" width="60%"  />
                        </div>
                        <div className="col-md-6 col-12">
                            <table className='table table-stripped table-hover'>

                                <tbody>

                                    <tr>
                                        <th>Name</th>
                                        <td>Akash Gupta</td>
                                    </tr>
                                    <tr>
                                        <th>UserName</th>
                                        <td>AKASH</td>
                                    </tr>
                                    <tr>
                                        <th>Phone</th>
                                        <td>8853049148</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>ag565609@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th>Role</th>
                                        <td>Admin</td>
                                    </tr>


                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
