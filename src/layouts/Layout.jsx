//components
import Navbar from "../components/Navbar";

//page
import Home from "../pages/Home";

const Layout = () => {
  return (
    <div className="my-20 w-full h-fit max-w-7xl bg-gradient-to-b from-[#d3dcde] to-[#eeefda] rounded-3xl shadow-2xl backdrop-blur-xl ">
      <Navbar />
      <Home />
    </div>
  );
};

export default Layout;
