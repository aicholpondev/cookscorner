import style from "./Home.module.css";
import Navigation from "../../components/Navigation/Navigation"
import {useEffect, useState} from "react";
import {getCategory} from "../../API";

export default function Home(){
    const [category,setCategory]= useState([]);
    useEffect(() =>{
        getCategory()
            .then(({data}) =>{
                console.log(data)
                setCategory(data)
            })
    },[])

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