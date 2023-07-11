import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="">
        <Header />
        <Banner />
        <div className="bg-purple-300 py-20">
          <p className="mx-44 text-4xl font-bold py-10">Explore</p>
          <div className="grid grid-cols-3 px-20">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
