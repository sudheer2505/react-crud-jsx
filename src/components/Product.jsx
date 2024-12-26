import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Product() {

    let [productDetails, setProductDetails] = useState({});
    const { state } = useLocation();
    let navigator = useNavigate();

    useEffect(() => {
        setProductDetails(state);
        console.log("sssssssss = ", state, productDetails);
    }, [])


    let updateProductDetails = () => {
        console.log("update = ", productDetails);
        axios.put('http://localhost:8000/products/' + productDetails.id, productDetails)
    }

    let setInputValue = (e) => {
        let data = { ...productDetails, [e.target.name]: e.target.value };
        setProductDetails(data)
    }

    let navigateToHome = () => {
        navigator('/')
    }

    return (
        <div className='p-4'>
            <div className='text-center'><h2>Edit Product Details </h2></div>

            <hr />
            <div className='row col-md-12 mt-3'>
                <div className='col-md-3'>
                    Product Title
                    <br />
                    <input type='text' name="title" value={productDetails.title} onChange={(e) => setInputValue(e)} />
                </div>
                <div className='col-md-3'>
                    Product Price
                    <br />
                    <input type='number' name="price" value={productDetails.price} onChange={(e) => setInputValue(e)} />
                </div>
                <div className='col-md-3'>
                    Product Description
                    <textarea type='text' name="description" value={productDetails.description} onChange={(e) => setInputValue(e)} > </textarea>
                </div>
            </div>

            <div className='mt-3'>
                <button className='btn btn-primary' onClick={updateProductDetails}>Update</button>
                <button className='btn btn-secondary ms-2' onClick={navigateToHome}>Cancel</button>
            </div>
        </div>
    )
}

export default Product