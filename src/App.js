 import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
 import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom"; // Link bileşenini import edin
import SiteContent from "./component/SiteContent";
import SiteFooter from "./component/SiteFooter";
 import SiteHeader from "./component/SiteHeader";
import ProductPages from "./pages/ProductPages";
 import ProfilePage from "./pages/ProfilePage";
import ButtonSample from "./stateSamples/ButtonSample";
import CityState from "./stateSamples/CityState";
import ChangeColor from "./stateSamples/ChangeColor";
import Suppliers from "./pages/Suppliers";
import Users from "./pages/Users";
import Todos from "./pages/Todos";

function App() {
  
  return (
    <>
     <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
       <Link to='/contact'>Contact</Link>
         <Link to='/products'>Products</Link>
         <Link to='/profile'>Profile</Link>
         <Link to ='/suppliers'>Suppliers</Link>
         <Link to ='/users'>Users</Link>
         <Link to ='/todos'>Todos</Link>
       </ul>
       <Routes>
         <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/products" element={<ProductPages />} />
        <Route path="/profile" element={<ProfilePage/>} />
       <Route path="*" element={<NotFound />} />
       <Route path="/suppliers" element={<Suppliers />} />
       <Route path="/users" element={<Users />} />
       <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
   );
}

export default App;
