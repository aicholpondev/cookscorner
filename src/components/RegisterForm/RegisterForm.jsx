import {NavLink,useNavigate} from "react-router-dom";
import style from "./Register.module.css";
import React,{useState} from "react";
import {postRegister} from "../../API";
import {useFormik} from "formik";
import {registerSchema} from "../../schemas";

import {user,email,visibility,visibilityOff} from "../../assets/image/index"
export default function RegisterForm(){
    const [passVisible, setPassVisible] = useState(false);
    const [conPassVisible, setConPassVisible] = useState(false);
    const navigate = useNavigate();

    const togglePassVisibility = () => {
        setPassVisible(!passVisible);
    };
    const toggleConPassVisibility = () => {
        setConPassVisible(!conPassVisible);
    };
    const handleRegister = async (data) => {
        try {
            const response = await postRegister(data);
            console.log(response.data);
        } catch (err) {
            if (!err?.response) {
                console.log(err);
            }
        }
    };

    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
            confirmPassword:"",
            login:"",
        },
        validationSchema:registerSchema,
        onSubmit:()=>{
            handleRegister({email: formik.values.email,
                username:formik.values.login,
                password: formik.values.password})
            // sentRegister()
            console.log("submit")

            navigate("/navigation")
        }
    })

    return(
        <div>
            <div className={style.loginBackground}>
                <center>
                    <h1 className={style.loginTitle}>Sign up for delicious <br/>
                         <span >Discoveries!</span> </h1>
                </center>
            </div>
            <div className={style.form}>
                <form className={style.formLogin}>
                    <label htmlFor="name">Name</label>
                    <div className={style.inputContainer}>
                        <input
                            value={formik.values.login}
                            onChange ={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={style.input}
                            type="text"
                            id="name"
                            placeholder="Enter your Name"

                        />
                        <img src={user}
                             alt="img"
                             className={style.eyeIcon}
                        />
                    </div>
                    <label htmlFor="email">Gmail</label>
                    <div className={style.inputContainer}>
                        <input
                            value={formik.values.email}
                            onChange ={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={style.input}
                            type="email"
                            id="email"
                            placeholder="Enter your Gmail"

                        />
                        <img src={email}
                             alt="img"
                             className={style.eyeIcon}
                        />
                    </div>

                    <label htmlFor="password">Password</label>
                    <div className={style.inputContainer}>
                        <input
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={style.input}
                            type={passVisible ? "text" : "password"}
                            id="password"
                            placeholder="Enter your password"
                        />
                        <img src={ passVisible ? visibility : visibilityOff}
                             alt="img"
                             onClick={togglePassVisibility}
                             className={style.eyeIcon}/>
                    </div>
                    <label htmlFor="re-password">Re-Password</label>
                    <div className={style.inputContainer}>
                        <input
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={style.input}
                            type={conPassVisible ? "text" : "password"}
                            id="confirmpassword"
                            placeholder="Re-Enter your Password"
                        />
                        <img src={ conPassVisible ? visibility : visibilityOff}
                             alt="img"
                             onClick={toggleConPassVisibility}
                             className={style.eyeIcon}/>
                    </div>

                    <button type="submit" className={style.btnSign}>Sign In</button>
                </form>
            </div>

            <div className={style.linkGeneral}>
                <p>Already have an account? </p>
                <NavLink to="/navigation" className={style.link}>
                    Sign In Now
                </NavLink>
            </div>


        </div>
    )
}