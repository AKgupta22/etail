import React, { useContext } from 'react';
import { useParams,Link  } from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { ProductContext } from '../Store/ProductContext';
import {CartContext} from '../Store/CartContext'
import {WishlistContext} from '../Store/WishlistContext'
export default function Singlepage() {
    let product = useContext(ProductContext)
    let {cartdispatch}=useContext(CartContext)
    let {wishlistdispatch}=useContext(WishlistContext)
    let { _id } = useParams()
    product = product.find((item) => item.id === parseInt(_id))
    var items = [
        {
            pic: product.pic1
        },
        {
            pic: product.pic2
        },
        {
            pic: product.pic3
        },
        {
            pic: product.pic4
        }
    ]
    function Item(props) {
        return (
            <Paper>
                <img src={props.item.pic} alt="" height="500px" width="100%" />

            </Paper>
        )
    }
    return (
        <>
            <div className="container-fluid mt-2">

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>

                            <Carousel>
                                {

                                    items.map((item, i) => <Item key={i} item={item} />)

                                }
                            </Carousel>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <h5 className="textcol bgcol text-center p-3 mt-1">Product details</h5>
                            <div className="table-responsive">
                                <table className="table table-striped table-hover">

                                    <tbody>
                                        <tr>
                                            <th>
                                                Name
                                            </th>
                                            <td>{product.name}</td>


                                        </tr>
                                        <tr>
                                            <th>
                                                Maincategory
                                            </th>
                                            <td>{product.maincategory}</td>

                                            
                                        </tr>
                                        <tr>
                                            <th>
                                                Sub category
                                            </th>
                                            <td>{product.subcategory}</td>

                                            
                                        </tr>
                                        <tr>
                                            <th>
                                                Brand
                                            </th>
                                            <td>{product.brand}</td>

                                            
                                        </tr>
                                        <tr>
                                            <th>
                                               Orginal price
                                            </th>
                                            <td>&#8377;{product.baseprice}</td>

                                            
                                        </tr>

                                        <tr>
                                            <th>
                                                Discount
                                            </th>
                                            <td>{product.discount}%</td>

                                            
                                        </tr>

                                        <tr>
                                            <th>
                                                Final Price
                                            </th>
                                            <td>&#8377;{product.finalprice}</td>

                                            
                                        </tr>
                                        <tr>
                                            <th>
                                                Discount
                                            </th>
                                            <td>{product.discount}%</td>

                                            
                                        </tr>
                                        <tr>
                                            <th>
                                                Color
                                            </th>
                                            <td>{product.color}</td>

                                            
                                        </tr>
                                        <tr>
                                            <th>
                                                Size
                                            </th>
                                            <td>{product.size}</td>
                                      
                                            
                                        </tr>
                                        <tr>
                                            <th>
                                                Description
                                            </th>
                                            <td>{product.description}</td>

                                            
                                        </tr>
                                    </tbody>


                                </table>


                            </div>
                           <div className="d-flex justify-content-between">
                           <Link to="/cart" className="btn bgcol textcol text-center btn-sm mt-1" style={{width:"49%"}} onClick={()=>{cartdispatch({type:"ADD_TO_CART",product:product})}} > Add to Cart</Link>
                            <Link to="/wishlist" className="btn bgcol textcol text-center btn-sm mt-1" style={{width:"49%"}}
                            onClick={()=>{wishlistdispatch({type:"ADD_TO_WISH",product:product})}}
                            > Add to Wishlist</Link>
                           </div>
                        </Grid>
                    </Grid>
                </Box>


            </div>

        </>
    );
}
