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
      .sort((a, b) => b.saleInfo.TotalSale < a.saleInfo.TotalSale)
      .slice(0, (data.length -3));

    // Set state with sorted book data
    setBooks(sortedBooks);
  }, []);

  function showList() {
   let Price

        return books.map((book) => (
      <div>
        <div className="card h-[55vh]  border-2 border-black m-2  items-center " key={book.id}>
          <img
            className="card-image mt-2"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt=""
          />
          <div className="textBox">
            <h3 className="card-title text-sm text-[#78bf45] font-bold underline">{book.volumeInfo.title}</h3>
            <p className="card-Price text-xs">Country: {book.accessInfo.country}</p>
            <p className="card-author text-xs">Author: {book.volumeInfo.authors}</p>
            
            <p className="card-publisher text-xs">Publisher: {book.volumeInfo.publisher}</p>
            {/* <p className="card-country text-xs">Country: {book.accessInfo.country}</p> */}
            {/* <p className="card-Price">Price: {book.saleInfo.Amount}</p> */}
            {/* <p className="card-Price">Discount Price: {(book.saleInfo.Amount-(book.saleInfo.Amount/10))}</p> */}
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
      
        <h1 className="title  font-extrabold text-xl  mt-4 underline font-serif">Books in Discount for Book-Bargainers ! </h1>
        <br/><br/>
        
        
        
 
    <div className="Bookset">
      <div className="card-container grid grid-cols-3 space-x-2 w-[40rem]">{showList()}</div>
       <br></br>
      {/* <div className="card-container">{Card()}</div> */}
    </div>
   
   </center>
  );
}

export default BestSellingBook;
