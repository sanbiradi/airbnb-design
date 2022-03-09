import Header from "./components/Header";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Data from "./Data"

export default function App() {

  const Cards = Data.map((item)=>{
    return(
      <Card key={item.id} item={item}/>
      )
  })
  return (
    <div>
      <Header />
      <Hero/>
      <div className="card-list">
        {Cards}
      </div>
      <Footer/>
    </div>
  );
}
