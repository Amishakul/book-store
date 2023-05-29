import NavBar from "./NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Genre from "./Genre";
import RiyaBooks from "./RiyaBooks";
import BestSellingBooks from "./BestSellingBooks";
import Trending from "./Trending";
import Discount from "./Discount";
import BookOfTheMonth from "./BookOfTheMonth";
import BookRecommendation from "./BookRecommendation";





function Home() {
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

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyBeSC5gfw_a8XHyvPcUM2DPCAyz_2YYjno`
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
      

    
  

      <div style={{ margin: "10px auto", maxWidth: "957px" , height:"100vh" }}><br/>
      
        <h1><center>Welcome To Our BookStore 😄</center></h1>
        <hr></hr>
        <br/>
        <p>Want to read a book? 🤔 You are likely to find it with us. 🤗 <br></br>Are you confused about what to read ❓
        Fret not. 😄 <br></br>Our genere search option will help you. 🥰 You can even make your decision based on other readers' choices with our best selling, and trending sections!!🔥 </p>
        <br/>
        <form style={{ display: "flex" }} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ flex: "1", marginRight: "10px" }}
          />
          <button type="submit" className="bg-[#78bf45]">Search</button>
        </form>
       <br/><br/>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
  

{searchResults.map((book, index) => (
  // Only render books with valid imageLinks
  book.volumeInfo.imageLinks ? (
    <div
      key={book.id}
      style={{
        width: "25%",
        margin: "10px",
        border: "3px solid black",
        padding: "14px",
        
        
       
      }}
    >
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
        style={{ width: "100%" }}
      />
      <h3 style={{ marginTop: "10px" }}>{book.volumeInfo.title}</h3>
      <p style={{ marginBottom: "10px" }}>
        By {book.volumeInfo.authors?.join(", ")}
      </p>
      <button
        style={{ backgroundColor: "#78bf45", cursor: "pointer" }}
        onClick={() => handleQuickView(book)}
      >
        Quick View
      </button>
    </div>
  ) : null
))}
</div>


{selectedBook && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={handleModalClose}>
        &times;
      </span>
      <b><i><h2>{selectedBook.volumeInfo.title}</h2></i></b>
      <br/><br/>
      <p>
       <b><i> By {selectedBook.volumeInfo.authors?.join(", ")}</i></b><br /><br/>
        Publisher: {selectedBook.volumeInfo.publisher}<br /><br/>
        Published Date: {selectedBook.volumeInfo.publishedDate}<br /><br/>
        Pages: {selectedBook.volumeInfo.pageCount}<br /><br/>
        Language: {selectedBook.volumeInfo.language}<br /><br/>
        ISBN: {selectedBook.volumeInfo.industryIdentifiers?.map((id) => id.identifier).join(", ")}<br /><br/>
        Description: <br/> <br/> 
        {selectedBook.volumeInfo.description ? (
          selectedBook.volumeInfo.description
        ) : (
          "Not available."
        )}
        <br /><br/>
      </p>
    </div>
  </div>
 
)}

       <br/><br/>
      <center>



      <form onSubmit={handleLogout} style={{ marginTop: "20px" }}> 
        <input type="submit" value="Logout" />
        <br/><br/>

      </form>
      
      <br/>
      <footer>
    &#xA9; 2023 All Rights Reserved </footer>
    <br/>
     </center>
    </div>
   
    </center>

   
 </>
);
        
}

export default Home;