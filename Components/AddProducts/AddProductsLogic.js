import { useEffect, useState } from "react";
import AddProductsApi from "./AddProductsApi";

export default function AddProductsLogic(){

    const INITIAL_PRODUCT_STATE = {value:"", error:""}
    const [ProductName,setProductName] = useState(INITIAL_PRODUCT_STATE);
    const {sendLoginData, processApiError} = AddProductsApi();


    var isProductNameValid;
    function validateProductName(productName){

        isProductNameValid = true;

        if(productName.value == ""){

            setProductName({...productName, error: "The product name cannot be empty"});
            isProductNameValid = false;
        }
        else{
            setProductName({...productName, error: "valid"});
            isProductNameValid = true;
        }

        return isProductNameValid;

    }


    var requestPayload;
    function submitForm(){


        if(validateProductName(ProductName)){

            requestPayload = {name: ProductName.value};

            sendLoginData(requestPayload)
            .then((result)=>{
                alert("hello response from controller");
            });

            
        }
        else{
            console.log(" the product name is invalid");
        }
    }

    function changeProduct(event){

        setProductName((preState)=>{
            return(
                {...preState,
                    value: event.target.value
                }
            )
        })

    }


    return { ProductName, changeProduct, submitForm};

}









