import {NavLink,useNavigate} from "react-router-dom";
import style from "./LoginForm.module.css";
import React,{useState} from "react";
import {email,visibility,visibilityOff} from "../../assets/image/index";
import {useFormik} from "formik";
import {loginSchema} from "../../schemas";
import {postLogin} from "../../API"

export default function LoginForm(){
    const [passVisible, setPassVisible] = useState(false);
    const navigate = useNavigate();

    const handleLogin =async (data) =>{
        try{
            const response = await postLogin(data);
            console.log(response.data)
        } catch (err){
            if (!err?.response){
                console.log(err);
            }
        }
    };

    const {
        values,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues:{
            login:"",
            password:"",
        },
        validationSchema:loginSchema,
        onSubmit:()=>{
            handleLogin({
                username:values.login,
                password: values.password
            })
            console.log("submit")
            navigate("/register")

        }
    })


    const togglePassVisibility = () => {
        setPassVisible(!passVisible);
    };
    return(
        <div>
            <div className={style.loginBackground}>
             <center>
                 <h1 className={style.loginTitle}>Welcome Back
                    <br/> To <span >CooksCorner</span> </h1>
             </center>
            </div>
            <div className={style.form}>
                <form className={style.formLogin} onSubmit={handleSubmit}>
                    <label htmlFor="email">Gmail</label>
                    <div className={style.inputContainer}>
                        <input
                            value={values.email}
                            onChange={handleChange}
                            className={style.input}
                            onBlur={handleBlur}
                            type="email"
                            id="email"
                            placeholder="Enter your email"

                        />
                        <img src={email}
                        alt="img"
                             className={style.eyeIcon}
                        />
                    </div>

                    <label htmlFor="password">Password</label>
                   <div className={style.inputContainer}>
                       <input className={style.input}
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}

                              type={passVisible ? "text" : "password"}
                              id="password"
                              placeholder="Enter your password"
                       />
                       <img src={ passVisible ? visibility : visibilityOff}
                            alt="img"
                            onClick={togglePassVisibility}
                            className={style.eyeIcon}/>
                   </div>

                    <button type="submit" className={style.btnSign}>Sign In</button>
                </form>
            </div>

          <div className={style.linkGeneral}>
              <p>I don’t have an account? </p>
              <NavLink to="/register" className={style.link}>
                  Sign Up Now
              </NavLink>
          </div>


        </div>
    )
}