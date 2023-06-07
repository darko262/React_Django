import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/home";
import store from "./store";
import { Provider } from "react-redux";
import Sobremi from "containers/pages/about";
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={<Error404/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Sobremi/>}></Route>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
