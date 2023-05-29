import React, { useState, useEffect } from "react";
import data from "./RiyaBooks.json";
import NavBar from "./NavBar";
import Home from "./Home";
import { useNavigate } from "react-router-dom"

function BestSellingBook(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const sortedBooks = data
      .sort((a, b) => b.saleInfo.TotalSale > a.saleInfo.TotalSale)
      .slice(0, 3);

    setBooks(sortedBooks); 
  }, []);

  function showList() {
    return books.map((book) => (
      <div className="card h-[60vh]  border-black m-2 border-dashed border-2 " key={book.id}>
        <img
          className="card-image mt-4 w-[30rem] h-[7rem]"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt=""
        />
        <div className="textBox  items-center ">
          <h3 className="card-title text-center -mb-5 text-sm font-semibold underline mt-5">{book.volumeInfo.title}</h3>
          <p className="card-author text-xs ">Author: {book.volumeInfo.authors}</p>
          <p className="card-country text-xs ">Country: {book.accessInfo.country}</p>
          <p className="card-language text-xs ">Language: {book.volumeInfo.language}</p>
          <p className="card-year text-xs ">Year: 2023 {book.year}</p>
          {/* <p className="card-year text-sm">Sells: {book.saleInfo.TotalSale}</p> */}
          <a
            className="card-link"
            href={book.volumeInfo.imageLinks.thumbnail}
          ></a>
        </div>
      </div>
    ));
  }

  return (

<center>
     
     <NavBar />
     
     <div style={{ margin: "10px auto", maxWidth: "957px" }}>
       
         {/* <center>Welcome</center> */}
       
       </div>
       <br/>




<div className="container">
      <h1 className="title text-center font-extrabold text-lg -mb-4 -mt-[1.5rem] underline">Top-Notch Best-Selling Books</h1> <br></br> 
      <div className="bookset mt-3">
        <div className="card-container">{showList()}</div>
      </div>
    </div>
    <br/><br/>
    

</center>

  );
}
<br></br>

export default BestSellingBook;

