import style from "./Home.module.css";
import Navigation from "../../components/Navigation/Navigation"
export default function Home(){
    return <>
         <Navigation/>
        <div className={style.home}>

            <h1 className={style.homeTitle}>Hi, Sarthak. UI Designer & Cook</h1>
             <h2 className={style.category}>Category</h2>
            <div className={style.btnGeneral}>

                    <button>Breakfast</button>
                    <button>Lunch</button>
                    <button>Dinner</button>

            </div>

        </div>

    </>
}