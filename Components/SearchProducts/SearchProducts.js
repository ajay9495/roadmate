
import styles from './SearchProducts.module.css';
import SearchProductsLogic from './SearchProductsLogic';

export default function SearchProducts(){

    const { ProductName, changeProduct, submitForm, ProductList} = SearchProductsLogic();

    return(
        <div className={styles.mainWrapper} >
            <div className={styles.searchWrapper} >
                <div className={styles.searchBar}>
                    <input type="text" id="name" className={styles.searchBox+' form-control'} name="productName" onChange={changeProduct}  ></input>
                    <button className='btn btn-success'  onClick={submitForm} >Search</button>
                </div>

                <div className={styles.searchError+' text-danger'}>{ProductName.error}</div>
            </div>
            <div className={styles.tableWrapper} >
                <div className={styles.innerWrapper} >
                    {
                        ProductList.map((item,index)=>{
                            return(
                                <div className={styles.tableRow} key={item.id} >{item.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}












