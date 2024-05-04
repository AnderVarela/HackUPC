import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import "../styles/App.css";
import Product from "./Product";


const Body = () => {

    return (

        <div className="container">
            <br/>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
            </Routes>
        </div>

    );

};

export default Body;