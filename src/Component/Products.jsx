import React, { useContext } from 'react'
import { ProductContext } from '../Store/ProductContext'
import ProductDetails from './ProductDetails'
import Grid from '@mui/material/Grid';
export default function Products(props) {
    var product = useContext(ProductContext)
    if (props.mc === "All" && props.sc === "All" && props.Brand === "All") {

    }
    else if (props.mc !== "All" && props.sc === "All" && props.Brand === "All") {
        product = product.filter((item) => item.maincategory === props.mc)


    }
    else if (props.mc === "All" && props.sc !== "All" && props.Brand === "All") {
        product = product.filter((item) => item.subcategory === props.sc)


    }
    else if (props.mc === "All" && props.sc === "All" && props.Brand !== "All") {
        product = product.filter((item) => item.brand === props.Brand)


    }
    else if (props.mc !== "All" && props.sc !== "All" && props.Brand === "All") {
        product = product.filter((item) => item.maincategory === props.mc && item.subcategory === props.sc)


    }
    else if (props.mc !== "All" && props.sc === "All" && props.Brand !== "All") {
        product = product.filter((item) => item.maincategory === props.mc && item.brand === props.Brand)


    }
    else if (props.mc === "All" && props.sc !== "All" && props.Brand !== "All") {
        product = product.filter((item) => item.subcategory === props.sc && item.brand === props.Brand)


    }
    else {
        product = product.filter((item) => item.maincategory === props.mc && item.subcategory === props.sc && item.brand === props.Brand)

    }



    return (
        <>
            <Grid container spacing={2}>
                {
                    product.map((item, index) => {
                        return <Grid key={index} item xxl={2} xl={2} lg={3} md={4} sm={6} xs={12}>

                            <ProductDetails
                                name={item.name}
                                pic={item.pic1}
                                baseprice={item.baseprice}
                                discount={item.discount}
                                fnl={item.finalprice}
                                id={item.id}

                            />
                        </Grid>
                    })
                }



            </Grid>




        </>
    )
}
