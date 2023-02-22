import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ViewPage from "./pages/ViewPage/ViewPage";
import AddEdit from "./pages/AddEdit/AddEdit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer position="top-center" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path={`/view/:id`} element={<ViewPage />} />
          <Route path={`/add`} element={<AddEdit />} />
          <Route path={`/update/:id`} element={<AddEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
