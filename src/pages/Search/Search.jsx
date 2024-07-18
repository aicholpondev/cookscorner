import Navigation from "../../components/Navigation/Navigation";
import style from "./Search.module.css";
import {search,plus} from "../../assets/image/index"
export default function Search(){

    return <>
        <Navigation/>
    <div className={style.searchContainer}>
        <h1 className={style.title}>What to eat today?</h1>
        <center>
            <div className={style.btnBox}>
                <button>Chefs</button>
                <button>Recipes</button>
            </div>
        </center>
        <div className={style.inputContainer}>
            <input
                placeholder="Search recipes"
                className={style.inputSearch}
                type="search"/>
            <img src={search} alt="img"/>
        </div>
       <center>
           <div className={style.addBtn}>
               <img src={plus} alt="img"/> <button>Add your recipe</button>

           </div>
       </center>


    </div>
    </>
}