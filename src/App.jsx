import "./App.css";
import Footer from "./components/Footer";
import RegionMap from "./components/RegionMap";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <RegionMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
