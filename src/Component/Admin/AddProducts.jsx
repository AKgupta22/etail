import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LeftNav from './LeftNav'
import AddIcon from '@mui/icons-material/Add';
export default function AddProducts() {
  let Navigate = useNavigate()
  let [newmc, setnewmc] = useState({
    name: "",
    color: "",
    size: "",
    brand: "",
    mc: "",
    sc: "",
    baseprice: 0,
    finalprice: 0,
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
    setnewmc((olddata) => {
      return {
        ...olddata,
        [name]: value
      }
    })
  }
  function Getfile(e) {

    let name = e.target.name
    let value = e.target.files[0]
    setnewmc((olddata) => {
      return {
        ...olddata,
        [name]: value
      }
    })
  }
  function PostData(e) {
    e.preventDefault()
    console.log(newmc);
    alert(`
    name :${newmc.name}
    color :${newmc.color}
    size :${newmc.size}
    brand :${newmc.brand}
    mc :${newmc.mc}
    sc :${newmc.sc}
    base price :${newmc.baseprice}
    final price :${newmc.finalprice}
    discount :${newmc.discount}
    description :${newmc.description}
    stock :${newmc.stock}
    pic1 : ${newmc.pic1}
    pic2 : ${newmc.pic2}
    pic3 : ${newmc.pic3}
    pic4 : ${newmc.pic4}
    
    `)
    Navigate("/admin-products")
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
          <LeftNav />
        </div>
        <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12">
          <h5 className='bgcol p-2 text-light text-center mt-1'>Add Products</h5>
          <form onSubmit={PostData}>
            <div className="mb-1">
              <label className="form-label">Product Name</label>
              <input type="text" className="form-control" onChange={Getdata} name="name" />
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Size</label>
                <select name="size" className='form-select' onChange={Getdata}>
                  <option defaultChecked>Select</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Brand</label>
                <select name="brand" className='form-select' onChange={Getdata}>
                  <option defaultChecked>Select</option>
                  <option value="Nike">Nike</option>
                  <option value="PUMA">PUMA</option>
                  <option value="GUCCI">GUCCI</option>
                  <option value="HRX">HRX</option>
                </select>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">MainCategory</label>
                <select name="mc" className='form-select' onChange={Getdata}>
                  <option defaultChecked>Select</option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  <option value="KIDS">KIDS</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Sub Category</label>
                <select name="sc" className='form-select' onChange={Getdata}>
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
                <label className="form-label">Color</label>
                <input type="text" className="form-control" onChange={Getdata} name="color" />
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">&#8377; Base Price</label>
                <input type="text" className="form-control" onChange={Getdata} name="baseprice" />
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">&#8377; Final Price</label>
                <input type="text" className="form-control" onChange={Getdata} name="finalprice" />
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Discount %</label>
                <input type="text" className="form-control" onChange={Getdata} name="discount" />
              </div>
            </div>
            <div >
              <label className="form-label">Description</label>
              <textarea style={{ resize: "none" }} type="textarea" rows={6} className="form-control" onChange={Getdata} name="description" >
              </textarea>
            </div>
            <div className="mb-1">
              <label className="form-label">In Stock</label>
              <select name="stock" className='form-select' onChange={Getdata}>
                <option defaultChecked>Select</option>
                <option value="True">Yes</option>
                <option value="False">No</option>
              </select>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Pic 1</label>
                <input type="file" className="form-control" onChange={Getfile} name="pic1" />
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Pic 2</label>
                <input type="file" className="form-control" onChange={Getfile} name="pic2" />
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Pic 3</label>
                <input type="file" className="form-control" onChange={Getfile} name="pic3" />
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <label className="form-label">Pic 4</label>
                <input type="file" className="form-control" onChange={Getfile} name="pic4" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2"> <AddIcon /> </button>
          </form>

        </div>
      </div>
    </div >
  )
}
