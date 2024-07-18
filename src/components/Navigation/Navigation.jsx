import {home,profile,logo,search,next} from "../../assets/image";
import style from './Navigation.module.css';
import {NavLink} from "react-router-dom";

export default function Navigation(){
    return(
        <nav className="navigation">
           <NavLink  to="/">
               <img src={logo} alt="logo" />
           </NavLink>
            <div className={style.line}></div>
            <div className="links">
                <NavLink to="/home" >
                    <div className={style.link}>
                        <img
                            src={home} alt="home" />
                    </div>
                </NavLink>
                <NavLink to="/search">
                    <div className={style.link}>
                        <img src={search} alt="home" />
                    </div>
                </NavLink>
                <NavLink to="/profile">
                    <div className={style.link}>
                        <img src={profile} alt="home" />
                    </div>
                </NavLink>
            </div>
            <div className={style.next}>
                <img src={next} alt="home" />
            </div>

        </nav>
    )
}