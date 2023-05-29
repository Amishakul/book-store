import NavBar from "./NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Home from "./Home";

function Genre() {
  const [user, setUser] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const nav = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleLogout = () => {
    const auth = getAuth();
    localStorage.clear();
    signOut(auth)
      .then((res) => nav("/login"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let u = localStorage.getItem("un");
    if (u == null) nav("/login");
    else setUser(u);
  }, []);

  const handleSearch = async (event, genre) => {
    event.preventDefault();
    
  let subject = "";
  switch (genre) {
    case "comic":
      subject = "Comic";
      break;
    case "fiction":
      subject = "Fiction";
      break;
    case "non-fiction":
      subject = "Nonfiction";
      break;
    case "self-help":
      subject = "Self-Help";
      break;
    case "horror":
      subject = "Horror";
      break;
    case "biography":
      subject = "Biography";
      break;
    case "religious":
      subject = "Religion";
      break;
    case "education":
      subject = "Programming";
      break;
    default:
      subject = "";
      break;
  }
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=AIzaSyBeSC5gfw_a8XHyvPcUM2DPCAyz_2YYjno`
    );
    const data = response.data;
    setSearchResults(data.items);
    setSearchTerm("");
  };

  const handleQuickView = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  return (
    <>
   <center>
     
      <NavBar />
      
      <div style={{ margin: "10px auto" }}>
        
          {/* <center>Welcome</center> */}
        
        <br/>
        <h1><b>Choose Your Favorite Genre from below 😄 </b></h1>
        <br/>
        <div style={{ display:"grid", justifyContent: "space-between" }} className="grid-flow-row w-[28rem] space-x-4 grid-cols-4">
          <button  onClick={(e) => handleSearch(e, "Comic")}>Comic</button>
          <button onClick={(e) => handleSearch(e, "fiction")}>Fiction</button>
          <button onClick={(e) => handleSearch(e, "Nonfiction")}>Non-fiction</button>
          <button  onClick={(e) => handleSearch(e, "self-help")}>Self-Help</button>
        </div>
        <div style={{ display:"grid", justifyContent: "space-between" }} className="grid-flow-row w-[20rem] space-x-3 grid-cols-3 m-5">
        <button onClick={(e) => handleSearch(e, "biography")}>Biography</button>
          <button onClick={(e) => handleSearch(e, "religious")}>Religious</button>
          <button onClick={(e) => handleSearch(e, "programming")}>Coding</button>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {searchResults.map((book, index) =>
            book.volumeInfo.imageLinks ? (
              <div
                key={book.id}
                style={{
                  width: "15%",
                  margin: "0px",
                  border: "3px solid black",
                  padding: "10px",
                  marginBottom: "55px",
                  marginLeft: "55px",
                  marginRight: "55px",
                  height: "655px"
                }}
              >
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  style={{ width: "100%" }}
                />
                <h3 style={{ marginTop: "10px" }}>{book.volumeInfo.title}</h3>
                <p style={{ marginBottom: "10px" }}>
                  
                </p>
                <button
                  style={{ backgroundColor: "#78bf45", cursor: "pointer" }}
                  onClick={() => handleQuickView(book)}
                >
                  Quick View
                </button>
              </div>
            ) : null
          )}
        </div>
      </div>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "",
width: "100%",
height: "100%",
backgroundColor: "rgba(0,0,0,0.4)",
display: "flex",
justifyContent: "center",
alignItems: "center",

}}
>
<div
style={{
backgroundColor: "white",
padding: "20px",
borderRadius: "5px",
width: "80%",
maxWidth: "800px",
maxHeight: "80%",
overflowY: "auto",
position: "relative",

}}
>
<button
style={{
position: "absolute",
top: "10px",
right: "10px",
backgroundColor: "transparent",
border: "none",
cursor: "pointer",
fontSize: "30px",
}}
onClick={handleModalClose}
>
×
</button>


{selectedBook && (
<>
 
<img
src={selectedBook.volumeInfo.imageLinks?.thumbnail}
alt={selectedBook.volumeInfo.title}
style={{
width: "200px",
height: "300px",
objectFit: "contain",
float: "center",marginRight: "20px",
}}
/>
<b><i><h2 style={{ marginTop: "55px" }}>{selectedBook.volumeInfo.title}</h2></i></b>

<p>
<b><i>By {selectedBook.volumeInfo.authors?.join(", ")}</i></b><br/><br/>(
{("Published Year: ") + selectedBook.volumeInfo.publishedDate?.substring(0, 4)})
</p><br/><br/>
<p>{selectedBook.volumeInfo.description}</p>


</>
)}
</div>
</div>
)}


{/* <button style={{ marginTop: "10px" }} onClick={handleLogout}>
Logout
</button> <br/><br/> */}

</center>

</>
);
}


export default Genre;
