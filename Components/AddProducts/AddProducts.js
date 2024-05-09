
import AddProductsLogic from "./AddProductsLogic"
import styles from './AddProducts.module.css'


export default function AddProducts(){

    const { ProductName, changeProduct, submitForm} = AddProductsLogic();

    return(
        <div  className={styles.mainWrapper}>
            <div className={styles.formWrapper}>
                <div ><h1>Add Product</h1></div>
                <input type="text" id="name" className="form-control" name="productName" onChange={(e)=>{ changeProduct(e) }}  placeholder="Enter the product name here" ></input>
                <button className="btn btn-primary"  onClick={submitForm} >Add Product</button>
                <div>{ProductName.error}</div>
            </div>
        </div>
    )

}













