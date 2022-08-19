import React, { createContext } from 'react'

import p1 from "../asset/products/p1.jpg"
import p2 from "../asset/products/p2.jpg"
import p3 from "../asset/products/p3.jpg"
import p4 from "../asset/products/p4.jpg"
import p5 from "../asset/products/p5.jpg"
import p7 from "../asset/products/p7.jpg"
import p8 from "../asset/products/p8.jpg"
import p9 from "../asset/products/p9.jpg"
import p11 from "../asset/products/p11.jpg"
import p12 from "../asset/products/p12.jpg"
import p13 from "../asset/products/p13.jpg"
import p15 from "../asset/products/p15.jpg"
import p16 from "../asset/products/p16.jpg"
import p18 from "../asset/products/p18.jpg"
import p19 from "../asset/products/p19.jpg"
import p21 from "../asset/products/p21.jpg"
import p22 from "../asset/products/p22.jpg"
import p23 from "../asset/products/p23.jpg"
import p24 from "../asset/products/p24.jpg"
import p25 from "../asset/products/p25.jpg"
import p26 from "../asset/products/p26.jpg"
import p28 from "../asset/products/p28.jpg"
import p29 from "../asset/products/p29.jpg"
import p38 from "../asset/products/p38.jpg"
import p39 from "../asset/products/p39.jpg"
import p40 from "../asset/products/p40.jpg"
import p44 from "../asset/products/p44.jpg"
import p46 from "../asset/products/p46.jpg"
import p47 from "../asset/products/p47.jpg"
import p49 from "../asset/products/p49.jpg"
import p53 from "../asset/products/p53.jpg"
import p55 from "../asset/products/p55.jpg"
import p56 from "../asset/products/p56.jpg"
import p58 from "../asset/products/p58.jpg"
import p59 from "../asset/products/p59.jpg"
import p60 from "../asset/products/p60.jpg"
import p61 from "../asset/products/p61.jpg"
import p62 from "../asset/products/p62.jpg"
import p63 from "../asset/products/p63.jpg"
import p64 from "../asset/products/p64.jpg"
import p65 from "../asset/products/p65.jpg"
import p66 from "../asset/products/p66.jpg"
import p67 from "../asset/products/p67.jpg"
import p70 from "../asset/products/p70.jpg"
import p71 from "../asset/products/p71.jpg"
import p72 from "../asset/products/p72.jpg"
import p73 from "../asset/products/p73.jpg"
import p74 from "../asset/products/p74.jpg"

export const ProductContext = createContext()

export default function ProductContextProvider(props) {
    var products = [
        { id: 1, name: "Male Tshirt Adidas Slim Fit", maincategory: "Male", subcategory: "Tshirt", brand: "Adidas", color: "White", size: "XL", stock: "In Stock", baseprice: 5000, discount: 90, finalprice: 500, description: "This is Sample Product", pic1: p15, pic2: p24, pic3: p21, pic4: p29 },
        { id: 2, name: "Male Jeans Adidas Slim Fit", maincategory: "Male", subcategory: "Jeans", brand: "Adidas", color: "Blue", size: "XL", stock: "In Stock", baseprice: 6000, discount: 90, finalprice: 600, description: "This is Sample Product", pic1: p11, pic2: p5, pic3: p13, pic4: p7 },
        { id: 3, name: "Male Jeans Mufti Slim Fit", maincategory: "Male", subcategory: "Jeans", brand: "Mufti", color: "Black", size: "XL", stock: "In Stock", baseprice: 4000, discount: 50, finalprice: 2000, description: "This is Sample Product", pic1: p16, pic2: p1, pic3: p2, pic4: p5 },
        { id: 4, name: "Male Jeans Mufti Slim Fit", maincategory: "Male", subcategory: "Tshirt", brand: "Mufti", color: "Blue", size: "XL", stock: "In Stock", baseprice: 500, discount: 10, finalprice: 450, description: "This is Sample Product", pic1: p1, pic2: p2, pic3: p44, pic4: p49 },
        { id: 5, name: "Male Shirt Polo Slim Fit", maincategory: "Male", subcategory: "Shirt", brand: "Polo", color: "Gray Green Check", size: "XL", stock: "In Stock", baseprice: 50000, discount: 99, finalprice: 500, description: "This is Sample Product", pic1: p25, pic2: p26, pic3: p38, pic4: p40 },
        { id: 6, name: "Female Tshirt Adidas Slim Fit", maincategory: "Female", subcategory: "Tshirt", brand: "Adidas", color: "White", size: "XL", stock: "In Stock", baseprice: 8000, discount: 90, finalprice: 800, description: "This is Sample Product", pic1: p39, pic2: p28, pic3: p23, pic4: p22 },
        { id: 7, name: "Female Tshirt Adidas Slim Fit", maincategory: "Female", subcategory: "Tshirt", brand: "Adidas", color: "Black", size: "XL", stock: "In Stock", baseprice: 1000, discount: 90, finalprice: 1000, description: "This is Sample Product", pic1: p8, pic2: p8, pic3: p8, pic4: p8 },
        { id: 8, name: "Female Jeans Adidas Slim Fit", maincategory: "Female", subcategory: "Jeans", brand: "Adidas", color: "Blue", size: "XL", stock: "In Stock", baseprice: 1000, discount: 90, finalprice: 1000, description: "This is Sample Product", pic1: p12, pic2: p9, pic3: p18, pic4: p19 },
        { id: 9, name: "Female Jeans Tommy Hilfiger Slim Fit", maincategory: "Female", subcategory: "Jeans", brand: "Tommy Hilfiger", color: "Blue", size: "XL", stock: "In Stock", baseprice: 1000, discount: 90, finalprice: 1000, description: "This is Sample Product", pic1: p46, pic2: p47, pic3: p53, pic4: p55 },
        { id: 10, name: "Female Jeans Tommy Hilfiger Slim Fit", maincategory: "Female", subcategory: "Jeans", brand: "Tommy Hilfiger", color: "Blue", size: "XL", stock: "In Stock", baseprice: 1000, discount: 90, finalprice: 1000, description: "This is Sample Product", pic1: p47, pic2: p53, pic3: p55, pic4: p46 },
        { id: 11, name: "Female Jeans Adidas Slim Fit", maincategory: "Female", subcategory: "Jeans", brand: "Adidas", color: "Blue", size: "XL", stock: "In Stock", baseprice: 1000, discount: 90, finalprice: 1000, description: "This is Sample Product", pic1: p53, pic2: p55, pic3: p47, pic4: p46 },
        { id: 12, name: "Female Trouser Nike Slim Fit", maincategory: "Female", subcategory: "Trouser", brand: "Nike", color: "Blue", size: "XL", stock: "In Stock", baseprice: 1000, discount: 90, finalprice: 1000, description: "This is Sample Product", pic1: p1, pic2: p2, pic3: p3, pic4: p4 },
        { id: 13, name: "Female Shirt Nike Slim Fit", maincategory: "Female", subcategory: "Shirt", brand: "Nike", color: "Blue", size: "XL", stock: "In Stock", baseprice: 7200, discount: 40, finalprice: 4400, description: "This is Sample Product", pic1: p70, pic2: p71, pic3: p72, pic4: p73 },
        { id: 14, name: "Female Shirt Polo Slim Fit", maincategory: "Female", subcategory: "Shirt", brand: "Polo", color: "Blue", size: "XL", stock: "In Stock", baseprice: 7200, discount: 40, finalprice: 4400, description: "This is Sample Product", pic1: p74, pic2: p73, pic3: p72, pic4: p71 },
        { id: 15, name: "Female Shirt Polo Slim Fit", maincategory: "Female", subcategory: "Shirt", brand: "Polo", color: "Blue", size: "XL", stock: "In Stock", baseprice: 7200, discount: 40, finalprice: 4400, description: "This is Sample Product", pic1: p72, pic2: p73, pic3: p74, pic4: p71 },
        { id: 16, name: "Kids Tshirt Adidas Slim Fit Black", maincategory: "Kids", subcategory: "Tshirt", brand: "Adidas", color: "Black", size: "XL", stock: "In Stock", baseprice: 7200, discount: 40, finalprice: 4400, description: "This is Sample Product", pic1: p62, pic2: p63, pic3: p64, pic4: p65 },
        { id: 17, name: "Kids Jeans Polo Slim Fit", maincategory: "Kids", subcategory: "Jeans", brand: "Polo", color: "Blue", size: "XL", stock: "In Stock", baseprice: 7200, discount: 40, finalprice: 4400, description: "This is Sample Product", pic1: p64, pic2: p65, pic3: p66, pic4: p67 },
        { id: 18, name: "Kids Jeans Polo Slim Fit", maincategory: "Kids", subcategory: "Jeans", brand: "Polo", color: "Blue", size: "XL", stock: "In Stock", baseprice: 5000, discount: 90, finalprice: 500, description: "This is Sample Product", pic1: p58, pic2: p59, pic3: p60, pic4: p61 },
        { id: 19, name: "Kids Jeans HRX Slim Fit", maincategory: "Kids", subcategory: "Jeans", brand: "HRX", color: "Blue", size: "XL", stock: "In Stock", baseprice: 5000, discount: 90, finalprice: 500, description: "This is Sample Product", pic1: p56, pic2: p56, pic3: p56, pic4: p56 },
        { id: 20, name: "Kids Shirt HRX Slim Fit", maincategory: "Kids", subcategory: "Shirt", brand: "HRX", color: "Blue", size: "XL", stock: "In Stock", baseprice: 5000, discount: 90, finalprice: 500, description: "This is Sample Product", pic1: p67, pic2: p65, pic3: p64, pic4: p63 }
    ]
    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    )
}
