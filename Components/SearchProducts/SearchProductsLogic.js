import { useEffect, useState } from "react";
import SearchProductsApi from "./SearchProductsApi";
import { CLIENT_PUBLIC_FILES_PATH } from "next/dist/shared/lib/constants";

export default function SearchProductsLogic(){

    const INITIAL_PRODUCT_STATE = {value:"", error:""}
    const [ProductName,setProductName] = useState(INITIAL_PRODUCT_STATE);
    const {getAllPrdouctData, getPrdouctData, processApiError} = SearchProductsApi();
    const [ProductList, setProductList] = useState([]);


    // useEffect(()=>{

    //     getAllPrdouctData()
    //     .then((result)=>{

    //         console.log("getAllPrdouctData");
    //         console.log(result);

    //         setProductList(result.payload);
    //     })

    // },[]);

    var isProductNameValid;
    function validateProductName(productName){

        isProductNameValid = true;

        if(productName.value == ""){

            setProductName({...productName, error: "The product name cannot be empty"});
            isProductNameValid = false;
        }
        else{
            setProductName({...productName, error: ""});
            isProductNameValid = true;
        }

        return isProductNameValid;

    }


    var requestPayload;
    function submitForm(){


        if(validateProductName(ProductName)){
           

            getPrdouctData(ProductName.value)
            .then((result)=>{
                setProductList(result.payload)
            })
            
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


    return { ProductName, changeProduct, submitForm, ProductList};

}









