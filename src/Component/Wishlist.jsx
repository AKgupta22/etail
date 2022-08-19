import React, { useContext } from 'react'
import { WishlistContext } from '../Store/WishlistContext'
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
export default function Wishlist() {
    let { wishlist, wishlistdispatch } = useContext(WishlistContext)
    return (
        <>
            <div className="container-fluid">
                <h5 className='bgcol mt-1 text-center text-light p-3'>Wishlist</h5>
                <div className="table-responsive">
                    <table className='table table-stripped table-hover'>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th></th>
                                <th></th>


                            </tr>

                            {
                                wishlist.map((item, index) => {
                                    return <tr key={index}>
                                        <td><img src={item.pic1} alt="pic.." className="rounded" style={{ width: "80px", height: "85px" }} /></td>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>{item.size}</td>
                                        <td>&#8377;{item.finalprice}</td>
                                        <td><Link to={`/single-product/${item.id}`} onClick={() => wishlistdispatch({ type: "REMOVE_FROM_WISH", product: item })}>
                                            <ShoppingCartIcon></ShoppingCartIcon>
                                        </Link></td>
                                        <td><DeleteIcon onClick={() => wishlistdispatch({ type: "REMOVE_FROM_WISH", product: item })}></DeleteIcon></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}
