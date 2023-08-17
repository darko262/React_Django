import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/home";
import store from "./store";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Sobremi from "containers/pages/about";
import Blog from "containers/pages/blog";
import imagent4 from "assets/img/fondo2.svg"
import imagent5 from "assets/img/cognibot2.webp"
import Contacto from "containers/pages/contacto";
function App() {


  return (
    <HelmetProvider>
      <Helmet>
        <title>CogniBot | Software Agency</title>
        <meta name="description" content="Agencia de software y marketing digital Chile. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web, chile' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://www.cognibot.dev" />
        <meta name="author" content='Cognibot' />
        <meta name="publisher" content='Cognibot' />

        {/* Social Media Tags */}
        <meta property="og:title" content='Cognibot | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital Chile. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
        <meta property="og:url" href="https://www.cognibot.dev" />
        <meta property="og:image" content={imagent4} />

        <meta name="twitter:title" content='Cognibot | Software Agency' />
        <meta
          name="twitter:description"
          content='Agencia de software y marketing digital Chile. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
        />
        <meta name="twitter:image" content={imagent5} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="bg-contain bg-center " style={{ backgroundImage: `url(${imagent4})` }}>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="*" element={<Error404 />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<Sobremi />}></Route>
              <Route path="/blog/:slug" element={<Blog />}></Route>
              <Route path="/contact" element={<Contacto />}></Route>
            </Routes>
          </Router>
        </Provider>
      </div>
    </HelmetProvider>
  );
}

export default App;
