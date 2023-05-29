import React, { useState, useEffect } from "react";
import data from "./RiyaBooks.json";
import NavBar from "./NavBar";
import Home from "./Home";
import { useNavigate } from "react-router-dom"


function BestSellingBook(props) {
  const [books, setBooks] = useState([]);
  let book;
  useEffect(() => {
    const sortedBooks = data
      .sort((a, b) => b.saleInfo.TotalSale > a.saleInfo.TotalSale)
      .slice(0, 1);

    // Set state with sorted book data
    setBooks(sortedBooks);
  }, []);

  function showList() {
    return books.map((book) => (
      <div>
        <div className="card" key={book.id}>
          <img
            className="card-image"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt=""
          />
          <div className="textBox"><br/>
            <h3 className="card-title font-bold underline">{book.volumeInfo.title}</h3>
            <p className="card-author">Author: {book.volumeInfo.authors}</p>
            
            <p className="card-publisher">publisher: {book.volumeInfo.publisher}</p>
            <p className="card-country">Country: {book.accessInfo.country}</p>
            <p className="card-Price">Price: 250 INR {book.saleInfo.Amount}</p>
            <p className="card-Price">TotalSale: {book.saleInfo.TotalSale}</p>
            {/* <p className="card-year">Sales: {book.saleInfo.TotalSale}</p> */}
            <a
              className="card-link"
              href={book.volumeInfo.imageLinks.thumbnail}
            ></a>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <center>
    <NavBar />
    
     

   <div style={{ margin: "10px auto", maxWidth: "957px" }}>
  </div>
  <br/>
  
  
  
        
        
  <h1 className="title text-center font-extrabold text-lg -mb-4 -mt-[1.5rem] underline">Presenting You Book Of The Month</h1> <br></br> 
      
        
        <br/>
    <div className="Bookset">
      <div className="card-container2">{showList()}</div>
    </div>
    
    <br/><br/>
    </center>
  );
}

export default BestSellingBook;