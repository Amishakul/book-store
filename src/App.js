import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import { BrowserRouter, Routes, Route,  Navigate } from "react-router-dom";
import { app } from "./FirebaseConfig";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import Genre from "./Genre";
import myImage from './logo.png';
import BestSellingBooks from './BestSellingBooks';
import Trending from './Trending';
import Discount from './Discount';
import BookOfTheMonth from "./BookOfTheMonth";
import BookRecommendation from './BookRecommendation';









function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
            <Route path="/cp" element={<ChangePassword/>}/>
            <Route path="/fp" element={<ForgotPassword/>}/>
            <Route path="ge" element={<Genre/>}/>
            <Route path="bs" element={<BestSellingBooks/>}/>
            <Route path="nt" element={<Trending/>}/>
            <Route path="ds" element={<Discount/>}/>
            <Route path="bm" element={<BookOfTheMonth/>}/>
            <Route path="br" element={<BookRecommendation/>}/>
         </Routes>
      </BrowserRouter>
  </div>
 );
}
export default App;
