import Navigation from "../../components/Navigation/Navigation";
import style from "./Profile.module.css"
export default function  Profile(){
    return <>
        <Navigation/>
    <div className={style.profileCon}>
        <h1>Profile</h1>
        <div>
            <h2>29</h2>
            <p>recipe</p>
        </div>
        <div>
            <h2>144</h2>
            <p>followers</p>
        </div>
        <div>
            <h2>118</h2>
            <p>follow</p>
        </div>
    </div>
    </>
}