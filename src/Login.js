import NavBar from "./NavBar";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const nav = useNavigate();
  useEffect(() => {
    const un = localStorage.getItem("un");
    if (un != null) nav("/home");
  }, []);
  const [un, setUn] = useState("");
  const [pw, setPw] = useState("");
  const [ans, setAns] = useState("");

  const hUn = (event) => {
    setUn(event.target.value);
  };
  const hPw = (event) => {
    setPw(event.target.value);
  };

  const check = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, un, pw)
      .then((res) => {
        localStorage.setItem("un", un);
        nav("/");
      })
      .catch((err) => {
        alert("An error occurred: " + err);
      });
    }
  return (
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
        <NavBar />
        <br />
        <h7>Login Page </h7>
        <form onSubmit={check}>
          <div
            style={{
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
            
            }}
          >
            <br />
            <br />
            Enter Your Reg Email-id{" "}
            <input type="email" placeholder="Type here" onChange={hUn} />
            <br />
            <br />
            Enter Your Reg Password{" "}
            <input type="password" placeholder="Type here" onChange={hPw} />
            <br />
            <br />
            <input type="submit" value="Login" />
            <br />
            <br />
            Note: Set your Window zoom size to 80% for better website experience. 
          </div>
        </form>
        <h1> {ans} </h1>
      </center>
    </>
  );
}

export default Login;
