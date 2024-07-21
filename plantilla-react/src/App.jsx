import {} from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main"
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Sidebar/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
