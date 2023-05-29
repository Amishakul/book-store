import NavBar from "./NavBar";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ForgotPassword()
{
   const nav = useNavigate();
   const [un, setUn] = useState("");
   const [ans, setAns] = useState("");
  
   useEffect( () => {
                      const un = localStorage.getItem("un");
                      if(un != null)
                            nav("/home");
},[]);

const hUn = (event) => {setUn(event.target.value);}

const save = (event) => {
               event.preventDefault();
               const auth = getAuth();
               sendPasswordResetEmail(auth, un)
               .then(res => nav("/login"))
               .catch(err => alert("issue " + err))
}

return(

      <>
<style>
        {`
          body {
            background-image: url("image2.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            
            
          }
          }
        `}
      </style>
      <center>
          <NavBar/><br/>
          <h7> ForgotPassword (Check Your email) </h7>
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
marginRight: "567px",
backgroundColor: "rgb(250, 235, 215,0.7)",



  
}}>
<br/><br/>
          Enter Reg Email-id: <input type="email" placeholder="Type here" onChange={hUn}/>
          <br/><br/>
          
           <input type="submit" value="Change Password"/>
          <br/><br/>
</div>
    </form>
          
          <h1> { ans } </h1>
       </center>
    </>
 );
}

export default ForgotPassword;