import style from "./Home.module.css";
import Navigation from "../../components/Navigation/Navigation"
import {useEffect, useState} from "react";
import {getCategory} from "../../API";
import {NavLink} from "react-router-dom";

export default function Home(){
    const [category,setCategory]= useState([]);
    useEffect(() =>{
        getCategory()
            .then(({data}) =>{
                setCategory(data)
                console.log(data)

            })
    },[])

    return <>
         <Navigation/>
        <div className={style.home}>

            {category.map((data) =>(
                <NavLink  key={data.id} to={data.id}>
                    <h1 className={style.homeTitle}>Hi, Sarthak. UI Designer & Cook</h1>
                    <h2 className={style.category}>Category</h2>
                    <div className={style.btnGeneral}>

                        <button>Breakfast</button>
                        <button>Lunch</button>
                        <button>Dinner</button>

                    </div>

                </NavLink>
            ))

            }

        </div>

    </>
}
