import {like,save,detailback,time} from "../../assets/image/index"
import style from"./Details.module.css";
import Navigation from "../../components/Navigation/Navigation";

export default function Detail()
{
    return <>
        <Navigation/>
        <div className={style.detailContainer}>
            <div className={style.detBack}>
                <img src={detailback} alt="img" />
            </div>
            <div className={style.recipeContainer}>
                <h3 className={style.name}>Ainsley’s Jerk Chicken</h3>
                <h5 className={style.title}>by Ainsley Harriott</h5>
                <div className={style.time}>
                    <img src={time} alt="clock" />
                    <h4>20-30 min</h4>
                </div>
                <h2 className={style.button}>Easy</h2>
                <div className={style.public}>
                    <div className={style.like}><img src={like} alt=""/> 12likes</div>
                    <img src={save} alt=""/>
                </div>

                    <h4 className={style.description}>Description</h4>
                    <p className={style.descriptionText}>You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...</p>

                <div className="recipe__ingredients">
                    <h4 className={style.description}>Ingredients</h4>
                    <p>Chicken 1kg</p>
                    <p>Olive oil 3/4 spoon</p>
                    <p>Garlic powder 1/2 spoon</p>
                </div>
            </div>
        </div>
    </>
}