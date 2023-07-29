import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/home";
import store from "./store";
import { Provider } from "react-redux";
import Sobremi from "containers/pages/about";
import Blog from "containers/pages/blog";
// bg-[#0C182F]
import imagent4 from "assets/img/fondo2.svg"
import Contacto from "containers/pages/contacto";
function App() {
  

  return (
    
    <div className="bg-contain bg-center " style={{ backgroundImage: `url(${imagent4})`}}>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={<Error404/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Sobremi/>}></Route>
        <Route path="/blog/:slug" element={<Blog />}></Route>
        <Route path="/contact" element={<Contacto />}></Route>
      </Routes>
    </Router>
    </Provider>
    </div>
  );
}

export default App;
