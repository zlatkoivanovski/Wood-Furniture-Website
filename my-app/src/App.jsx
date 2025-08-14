import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { NavBar, Hero, Footer, CardDetail } from "./components";
import { Gallery, Customization, Contact } from "./pages";
import GalleryCardDetails from "./components/gallery/GalleryCardDetails";

const Layout = () => {
  const location = useLocation();

  const showFooterPaths = ["/", "/gallery", "/customization", "/contact"];

  const showFooter = showFooterPaths.includes(location.pathname);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<GalleryCardDetails />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card/:id" element={<CardDetail />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Layout />
      </Router>
    </div>
  );
};

export default App;
