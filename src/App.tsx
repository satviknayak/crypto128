import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import FeatureA from "./Components/FeatureA";
import FeatureB from "./Components/FeatureB";
import FeatureC from "./Components/FeatureC";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";

function App() {

  return (
    <div className="flex flex-col max-w-full w-full h-fit overflow-hidden bg-black relative scroll-smooth">
      <Navbar/>
      <Header/>
      <FeatureA/>
      <FeatureB/>
      <FeatureC/>
      <Team/>
      <Testimonials/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App
