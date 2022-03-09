import React from "react";
// import JokesData from "../JokesData";
// import Joke from "./Joke"

export default function Card(pros) {
  let badgeText
  if(pros.item.openSpots ===0){
    badgeText = "SOLD OUT"
  }
else if(pros.item.location ==="Online"){
  badgeText = "ONLINE"
}
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${pros.item.coverImg}`} className="card-img" />
      <div className="card-stats">
        <img src="../images/star.png" className="card-star" />
        <span>{pros.item.stats.rating}</span>
        <span>({pros.item.stats.reviewCount}) • </span>
        <span>{pros.item.location}</span>
      </div>
      <p className="car-title">{pros.item.title}</p>
      <p className="car-price"><span className="bold">From ${pros.item.price}</span> / person</p>
    </div>
  );
}
// export default function MainContent() {
//   const jokesElements = JokesData.map((joke)=>{
//     return <Joke setup={joke.setup} punchline={joke.punchline}/>
//   });
//   return (
//     <main>
//       {jokesElements}
//     </main>
//   );}
