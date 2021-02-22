import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { addProductToCart } from '../redux/cart/cartAction';
import {connect} from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';




const mapStateToProps=state=>{
    return{
        cart: state.cartReducer.cart
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addItemToCart: (item)=>dispatch(addProductToCart(item))
    }
}
const ProductDetails = (props) => {

    const [productInfo, updateProductInfo] = useState({});

    const {addToast} = useToasts();

    const addItem = (item) => {
        props.addItemToCart(item)
       // console.log(item);
      addToast("Item Added Successfully",{appearance:'success',autoDismiss:true})
      }


    let { id } = useParams();  // chosen productid is passed in this id by params.
    useEffect(() => {
   

        Axios.get("https://fakestoreapi.com/products/" + id).then((response) => { //get the data of chosen id
            updateProductInfo(response.data);
        })
    },[])




    return (
        <>

            <div className="container">
                <h2 className="text-center m-5">Product Details</h2>
                <div className="row m-5">
                    <div className="col-sm-6">
                        <img width="100%" src={productInfo.image} alt=" Image " />
                    </div>
                    <div className="col-sm-6">
                        <h1 className="display-3" style ={{fontSize:"2.5rem"}}>{productInfo.title}</h1>
                        <p className="lead">{productInfo.category} <b className="pull-right">${productInfo.price}</b></p>
                        <hr className="my-2" />
                        <p>{productInfo.description}</p>
                        <p className="lead">
                        <button className="btn btn-primary " onClick={() =>addItem(productInfo)}>
                            <AddShoppingCartIcon /> Add To Cart</button>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);