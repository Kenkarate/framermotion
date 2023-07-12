import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="">
        <Header />
        <Banner />
        <div className="bg-purple-300 py-20 text-center">
          <p className="mx-44 text-4xl font-bold py-10">Explore</p>
          <div className="grid grid-cols-3 px-20">
            <Card />
            <Card />
            <Card />
          </div>
          <button className="border rounded border-black p-2 my-10">
             Explore more
          </button>
        </div>
        <div className="text-center py-44">
          <p className="text-4xl font-semibold">
            “If you can dream it, you can do it.” ―Walt Disney.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
