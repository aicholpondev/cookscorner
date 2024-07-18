import Navigation from "../../components/Navigation/Navigation";
import style from "./Profile.module.css"
export default function  Profile(){
    return <>
        <Navigation/>
    <div className={style.profileCon}>
        <h1>Profile</h1>
    </div>
    </>
}