import React, { useState } from "react";
import NavBar from "./NavBar";

        
const styles = {
  // container: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   backgroundColor: "#F5F5F5",
  //   maxHeight: "100vh",
  //   paddingTop: 40,
  //   fontFamily: "Roboto, sans-serif",
  // },
  // header: {
  //   textAlign:s "center",
  //   fontSize: 36,
  //   fontWeight: "bold",
  //   color: "#4CAF50",
  //   marginBottom: 30,
  // },
 
  body:{
    height:"100vh"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
  },
  input: {
    fontSize: 20,
    marginRight: 10,
    border: "none",
    borderBottom: "2px solid #4CAF50",
    outline: "none",
    padding: 5,
    width: 200,
  },
  button: {
    fontSize: 20,
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: 5,
    padding: 10,
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  
  // booksContainer: {
  //   backgroundColor: "rgba(255, 255, 255, 0.9)",
  //   borderRadius: 5,
  //   padding: 20,
  //   boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
  // },
  // bookItem: {
  //   display: "flex",
  //   alignItems: "center",
  //   fontSize: 24,
  //   marginTop: 10,
  // },
  bookIcon: {
    marginRight: 10,
    fontSize: 40,
  },

 
  
  
};

const BookRecommendation = () => {
  const [mood, setMood] = useState("");
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };
  const handleRecommendation = () => {
    // Write your logic for recommending books based on the user's mood
    switch (mood.toLowerCase()) {
      case "happy":
        setRecommendedBooks([
          "📘 The Alchemist",
          "📘 The Hitchhiker's Guide to the Galaxy",
        ]);
        break;
      case "sad":
        setRecommendedBooks([
          "📘 The Fault in Our Stars",
          "📘 A Little Life",
        ]);
        break;
      case "motivated":
        setRecommendedBooks([
          "📘 Atomic Habits",
          "📘 The 7 Habits of Highly Effective People",
        ]);
        break;
        case "angry":
        setRecommendedBooks([
          "📘 Inside a dark box",
          "📘 The hate you give",
        ]);
        break;
        case "crying":
        setRecommendedBooks([
          "📘 The Lovely bones",
          "📘 The kite runner",
        ]);
        break;
      default:
        setRecommendedBooks([
          "🤔 Sorry, we couldn't find any books to recommend for your mood.",
        ]);
        break;
    }
  };

  return (
    <center>
    <NavBar />
    
   <div style={{ margin: "10px auto", maxWidth: "957px" , marginTop:"100px" }}>
   </div>
   <br/>





    <div style={styles.container} >
      {/* <h1>Book Recommendation</h1> */}
      <label style={styles.label}>
        How are you feeling today?{" "}
        <input type="text" style={styles.input} value={mood} onChange={handleMoodChange} />
        <span style={styles.emoji} role="img" aria-label="emoji">
          😊
        </span>
      </label>
      <br/><br/>
      <button style={styles.button} onClick={handleRecommendation}>Get Book Recommendations</button>
      <br/><br/>
      <ul>
        {recommendedBooks.map((book) => (
          <li key={book}><br/>{book}</li>
        ))}
      </ul>
     
    </div>
    
    <br/>

    
    </center>
  
  );
};

export default BookRecommendation;