import NavBar from "./NavBar";
import { useState } from "react";
import { getAuth, updatePassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useEffect } from "react";

function ChangePassword()
{
   const nav = useNavigate();
   const [pw1, setPw1] = useState("");
   const [pw2, setPw2] = useState("");
   const [ans, setAns] = useState("");
 
  useEffect( () => {
          const un = localStorage.getItem("un");
          if(un==null)
              nav("/login");
  },[]);

   const hPw1 = (event) => {setPw1(event.target.value);}
   const hPw2 = (event) => {setPw2(event.target.value);}

   const save =(event) => {
            event.preventDefault();
            if(pw1 == pw2)
            {
               const auth = getAuth();
               onAuthStateChanged(auth, (user) => {
                   updatePassword(user, pw1)
               .then(res=> {
                            localStorage.clear();
                            nav("/login")
           })
           .catch(err => alert("issue" + err))
               })
  }
  else
  {
       alert("passwords did not match");
  }
}

  return(
      <>
      <center>
          <NavBar/><br/>
          
          <h1><b> Change Your Password 🔎 </b></h1>
          <br/>
          <form onSubmit={save}>
<div style={{ 
  border: "5px solid black", 
  boxSizing: "border-box",
  width: "50%",
  height: "50%",
 
textShadow: "0 0 8px rgba(255, 255, 153, 1)",
fontWeight: "bold",
color: "black",
borderRadius: "15px",
marginRight: "-6px"

}}>
<br/><br/>

         Enter New Password: <input type="password" placeholder="Type here" onChange={hPw1}/>
          <br/><br/>
          Re-Enter Confirm Password: <input type="password" placeholder="Type here" onChange={hPw2}/>
          <br/><br/>
          <input type="submit" value="Change Password"/>
          <br/><br/>
</div>
    </form>
          <h1>{ ans } </h1>
       </center>
    </>
 );
}
export default ChangePassword;