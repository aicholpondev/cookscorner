import style from "./Recipe.module.css"
import {like,save} from "../../assets/image/index";

export default function Recipe(){
    return<>
        <div className={style.recipes}>

                <div className={style.info}>
                    <h2>Egg Omlet</h2>
                    <p>by Ainsley Harriott</p>
                    <div className="recipe__save">
                        <img src={like} alt="" />
                        <h4>118</h4>
                        <img src={save} alt="" />
                        <h4>118</h4>
                    </div>
                </div>


        </div>
    </>
}