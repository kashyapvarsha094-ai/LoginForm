import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email,setEmail] =useState("")
  const [password,setPassword]=useState("")
const [emailWarning,setEmailWarning]=useState(false)
const [passwardWarning,setPasswordWarning]=useState(false)
const [ incorrectEmail, setIncorrectEmail]=useState(false)
const [ incorrectPassward, setIncorrectPassward]=useState(false)



  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

    if (!email){
      setEmailWarning(true)
      setIncorrectEmail(false)
    }
    else{
      setEmailWarning(false)
    }

    if (!password){
      setPasswordWarning(true)
      setIncorrectPassward(false)
    }
    else{
      setPasswordWarning(false)
    }
    if (email && password){
      if (email==="john@email.com" && password==="john123"){
        navigate("/home")
      }
      else{
        if(email!=="john@email.com"){
          setIncorrectEmail(true)
        }
        else{
          setIncorrectEmail(false)
        }
        if (password!== "john123"){
          setIncorrectPassward(true)
        }
        else{
          setIncorrectPassward(false)
        }

      }
    }



  }
    

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="bg-warning p-3 m-2 rounded"onSubmit={handleSubmit}> 
        <h4 className="text-center">Login</h4>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1" onChange={(e)=>{setEmail(e.target.value)
             
              setEmailWarning(false)
              setIncorrectEmail(false)
            }
          }

          />
         { incorrectEmail &&<p className="text-danger"> Incorrect email</p>}
          { emailWarning&&<p className="text-danger">Email is required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1" onChange={(e)=>{
              setPassword(e.target.value)
              setIncorrectPassward(false)
              setPasswordWarning(false)

            }}

          />
          { incorrectPassward  &&<p className="text-danger"> Incorrect password</p>}
         {passwardWarning &&<p className="text-danger"> passward is required </p>}
        </div>
        <div className="text-center">

        <button type="submit" className="btn btn-dark w-100" >
          Submit
        </button>
</div>
      </form>
    </div>
  );
}