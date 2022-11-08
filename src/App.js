import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurBlogs from '../src/components/OurBlog/OurBlog';
import CardBlog from './components/CardBlog/CardBlog';
import { Routes, Route, Link } from "react-router-dom";
import CardDetail from './components/CardDetail/CardDetail';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<>
          <OurBlogs />
          <CardBlog />
        </>} />
        <Route path="cardDetails" element={ <CardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
