import React, { useState, useContext } from 'react'
import LeftNav from './LeftNav'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Store/ProductContext'
export default function AdminProducts() {
    var product = useContext(ProductContext)
    let [edit, setedit] = useState("")
    let [newdata, setnewdata] = useState({
        name: "",
        color: "",
        size: "",
        brand: "",
        mc: "",
        sc: "",
        baseprice: "",
        finalprice: "",
        discount: "",
        description: "",
        stock: "",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""

    })
    function Getdata(e) {
        let name = e.target.name
        let value = e.target.value
        setnewdata((olddata) => {
            return {
                ...olddata,
                [name]: value
            }
        })

    }
    function Getfile(e) {

        let name = e.target.name
        let value = e.target.files[0]
        setnewdata((olddata) => {
            return {
                ...olddata,
                [name]: value
            }
        })
    }
    function PostData(e) {
        e.preventDefault()
        alert(`
           name :${newdata.name}
           Color :${newdata.color}
           Size :${newdata.size}
           Brand:${newdata.brand}
           MainCategory :${newdata.mc}
           SubCategory :${newdata.sc}
           BasePrice :${newdata.baseprice}
           FinalPrice :${newdata.finalprice}
           Discount :${newdata.discount}
           description :${newdata.description}
           stock :${newdata.stock}
           pic1 : ${newdata.pic1}
           pic2 : ${newdata.pic2}
           pic3 : ${newdata.pic3}
           pic4 : ${newdata.pic4}
           

           
           `)
        console.log(newdata.pic1);
        setnewdata({
            name: "",
            color: "",
            size: "",
            brand: "",
            mc: "",
            sc: "",
            baseprice: "",
            finalprice: "",
            discount: "",
            description: "",
            stock: ""

        })
    }
    function deleterc(_id) {
        alert("Deleted: " + _id)
    }
    function edited(single) {
        setedit(single)

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                    <LeftNav />
                </div>
                <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12">
                    <h5 className='bgcol p-2 text-light text-center mt-1'>Products <Link to="/add-products" className='text-light'> <AddIcon /> </Link> </h5>
                    <div className="table-responsive tablu">
                        <table className="table table-sm">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Pic1</th>
                                    <th>Pic2</th>
                                    <th>Pic3</th>
                                    <th>Pic4</th>
                                    <th>Name</th>
                                    <th>Color</th>
                                    <th>Size</th>
                                    <th>Brand</th>
                                    <th>Main Category</th>
                                    <th>Sub Category</th>
                                    <th>Base Price</th>
                                    <th>Final Price</th>
                                    <th>Discount</th>
                                    <th>Stock</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                {
                                    product.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.id}</td>
                                            <td><img src={item.pic1} alt="pic.." className="rounded" style={{ width: "40px", height: "40px" }} /></td>
                                            <td><img src={item.pic2} alt="pic.." className="rounded" style={{ width: "40px", height: "40px" }} /></td>
                                            <td><img src={item.pic3} alt="pic.." className="rounded" style={{ width: "40px", height: "40px" }} /></td>
                                            <td><img src={item.pic4} alt="pic.." className="rounded" style={{ width: "40px", height: "40px" }} /></td>
                                            <td>{item.name}</td>
                                            <td>{item.color}</td>
                                            <td>{item.size}</td>
                                            <td>{item.brand}</td>
                                            <td>{item.maincategory}</td>
                                            <td>{item.subcategory}</td>
                                            <td>&#8377;{item.baseprice}</td>
                                            <td>&#8377;{item.finalprice}</td>
                                            <td>{item.discount}%</td>
                                            <td>{item.stock}</td>
                                            <th><button className='bgcol text-light btn btn-sm w-100' type="button" data-bs-toggle="modal" data-bs-target="#UpdateModal" onClick={() => edited(item)}><EditIcon ></EditIcon > </button></th>
                                            <th><button className='bgcol text-light btn btn-sm w-100' onClick={() => deleterc(item.id)}><DeleteIcon ></DeleteIcon > </button></th>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                    <div className="modal fade popup" id="UpdateModal" tabindex="-1" aria-labelledby="UpdateModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Product Id {edit.id} </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="container-fluid">
                                    <form onSubmit={PostData}>
                                        <div className="row">
                                            <div className="col-sm-6 col-12">
                                                <label className="form-label">Current Product Name</label>
                                                <input type="text" className="form-control" disabled value={edit.name} />
                                            </div>
                                            <div className="col-sm-6 col-12">
                                                <label className="form-label">New Product Name</label>
                                                <input type="text" className="form-control" value={newdata.name} onChange={Getdata} name="name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 col-sm-6 col-12">
                                                <label className="form-label">New Size</label>
                                                <select name="size" value={newdata.size} className='form-select' onChange={Getdata}>
                                                    <option defaultChecked>Select</option>
                                                    <option value="M">M</option>
                                                    <option value="L">L</option>
                                                    <option value="XL">XL</option>
                                                    <option value="XXL">XXL</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3 col-sm-6 col-12">
                                                <label className="form-label">New Brand</label>
                                                <select name="brand" value={newdata.brand} className='form-select' onChange={Getdata}>
                                                    <option defaultChecked>Select</option>
                                                    <option value="Nike">Nike</option>
                                                    <option value="PUMA">PUMA</option>
                                                    <option value="GUCCI">GUCCI</option>
                                                    <option value="HRX">HRX</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3 col-sm-6 col-12">
                                                <label className="form-label">New MainCategory</label>
                                                <select name="mc" value={newdata.mc} className='form-select' onChange={Getdata}>
                                                    <option defaultChecked>Select</option>
                                                    <option value="MALE">MALE</option>
                                                    <option value="FEMALE">FEMALE</option>
                                                    <option value="KIDS">KIDS</option>
                                                    <option value="OTHERS">OTHERS</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3 col-sm-6 col-12">
                                                <label className="form-label">New Sub Category</label>
                                                <select name="sc" value={newdata.sc} className='form-select' onChange={Getdata}>
                                                    <option defaultChecked>Select</option>
                                                    <option value="JEANS">JEANS</option>
                                                    <option value="T-SHIRT">T-SHIRT</option>
                                                    <option value="TROUSER">TROUSER</option>
                                                    <option value="SHOES">SHOES</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mt-1">
                                            <div className="col-md-3 col-sm-6 col-12">
                                                <label className="form-label">New Color</label>
                                                <input type="text" className="form-control" value={newdata.color} onChange={Getdata} name="color" />
                                            </div>
                                            <div className="col-md-3 col-sm-6 col-12">
                                                <label className="form-label">&#8377; New  Base Price</label>
                                                <input type="text" className="form-control" value={newdata.baseprice} onChange={Getdata} name="baseprice" />
                                            </div>
                                            <div className="col-md-3 col-sm-6 col-12">
                                                <label className="form-label">&#8377; New Final Price</label>
                                                <input type="text" className="form-control" value={newdata.finalprice} onChange={Getdata} name="finalprice" />
                                            </div>
                                            <div className="col-md-3 col-sm-6 col-12">
                                                <label className="form-label">New Discount %</label>
                                                <input type="text" className="form-control" value={newdata.discount} onChange={Getdata} name="discount" />
                                            </div>
                                        </div>
                                        <div >
                                            <label className="form-label">New Description</label>
                                            <textarea style={{ resize: "none" }} type="textarea" rows={6} className="form-control" value={newdata.description} onChange={Getdata} name="description" >
                                            </textarea>
                                        </div>
                                        <div className="mb-1">
                                            <label className="form-label">In Stock</label>
                                            <select name="stock" value={newdata.stock} className='form-select' onChange={Getdata}>
                                                <option defaultChecked>Select</option>
                                                <option value="True">Yes</option>
                                                <option value="False">No</option>
                                            </select>
                                        </div>
                                        <div className="row mb-1">
                                            <div className=" col-sm-6 col-12">
                                                <label className="form-label">New Pic 1</label>
                                                <input type="file" className="form-control" onChange={Getfile} name="pic1" />
                                            </div>
                                            <div className=" col-sm-6 col-12">
                                                <label className="form-label">New Pic 2</label>
                                                <input type="file" className="form-control" onChange={Getfile} name="pic2" />
                                            </div>
                                            <div className=" col-sm-6 col-12">
                                                <label className="form-label">New Pic 3</label>
                                                <input type="file" className="form-control" onChange={Getfile} name="pic3" />
                                            </div>
                                            <div className="col-sm-6 col-12">
                                                <label className="form-label">New Pic 4</label>
                                                <input type="file" className="form-control" onChange={Getfile} name="pic4" />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

