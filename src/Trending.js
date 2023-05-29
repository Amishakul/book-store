import React, { useState, useEffect } from "react";
import data from "./RiyaBooks.json";
import NavBar from "./NavBar";
import Home from "./Home";
import { useNavigate } from "react-router-dom"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Alkatra&display=swap');
</style>


function BestSellingBook(props) {
  const [books, setBooks] = useState([]);
  let book;
  useEffect(() => {
    const sortedBooks = data
      .sort((a, b) => ((b.saleInfo.TotalSale > a.saleInfo.TotalSale)&&(b.saleInfo.Amount < a.saleInfo.Amount)&&(b.volumeInfo.publishedDate < a.volumeInfo.publishedDate)))
      .slice(0, 5);
    
    // Set state with sorted book data
    setBooks(sortedBooks);
  }, []);

  function showList() {
    return books.map((book) => (
      <div>
        <div className="card h-[55vh] border-4 border-black m-2" key={book.id}>
          <img
            className="card-image mt-3"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt=""
          />
          <div className="textBox">
            <h3 className="card-title text-sm text-[#78bf45] font-bold underline">{book.volumeInfo.title}</h3>
            <p className="card-author text-xs ">Author: {book.volumeInfo.authors}</p>
            
            <p className="card-publisher text-xs">Publisher: {book.volumeInfo.publisher}</p>
            <p className="card-country text-xs">Country: {book.accessInfo.country}</p>
            {/* <p className="card-author text-sm">Sale: {book.saleInfo.TotalSale}</p> */}
            {/* <p className="card-author text-sm">Amount: {book.saleInfo.Amount}</p> */}
            {/* <p className="card-author text-sm">Date: {book.volumeInfo.publishedDate}</p> */}
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
      
        <h1 className="title  font-extrabold text-xl  mt-4 underline font-[cursive]" >Trending Books For New Readers....</h1>
        <br/>
    <div className="Bookset">
      <div className="card-container">{showList()}</div>
      
      {/* <div className="card-container">{Card()}</div> */}
    </div>
   
   </center>
  );
}

export default BestSellingBook;
