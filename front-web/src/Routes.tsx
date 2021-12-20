import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Order from "./pages/Order";

const DRoutes = () => (
    <Router>
       <Header/>
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/order' element={<Order />} />
       </Routes>
     </Router>
   );
   
   export default DRoutes;