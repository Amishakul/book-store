import NavBar from "./NavBar";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignUp()
{
  const nav = useNavigate();
  useEffect( () => {
                const un = localStorage.getItem("un");
                if(un !=null)
                   nav("/home");
    },[]);
  const [un, setUn] = useState("");
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  
  const [ans, setAns] = useState("");
  
  const [pho, setPho] = useState("");

  const hUn = (event) => {setUn(event.target.value);}
  const hPw1 = (event) => {setPw1(event.target.value);}
  const hPw2 = (event) => {setPw2(event.target.value);}
  
  
  const hPho = (event) => {setPho(event.target.value);}


  const save = (event) => {
                 event.preventDefault();
                 if(pw1 == pw2)
                 {
                    const auth = getAuth();
                    createUserWithEmailAndPassword(auth, un, pw1)
                    .then(res => nav("/login"))
                    .catch((err) => {
                      alert("An error occurred: " + err);
                    });
                 }
                 else
                 {
                      alert("passwords did not match");
                 }
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
          <h7> SignUp </h7>
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
padding: "0.5px",

  
  
}}>
<br/><br/>
           
            Enter your email-id:  <input type = "email" placeholder="Type here"  onChange={hUn}/>
             <br/><br/>
             Enter Password:  <input type ="password" placeholder="Type here" onChange={hPw1}/>
             <br/><br/>
             Re-enter Password: <input type ="password" placeholder="Type here" onChange={hPw2}/>
             <br/><br/>
             Enter Your Phone no: <input type ="number" placeholder="Type here" onChange={hPho}/>
             <br/><br/>
             <input type="submit" value="SignUp"/>
            
             <br/><br/>
           </div>
          
      </form>
           <h1> {ans} </h1>
      </center>
      </>
  );
}
export default SignUp;