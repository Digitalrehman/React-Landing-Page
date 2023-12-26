import { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
const App = () => {
  let HeroCount = [
    { Text1: "Mostly Comfortable", Text2: "Sports Plugings Install" },
    { Text1: "Mostly Flexible", Text2: "Imported Parts outsite" },
    { Text1: "Mostly Easly Drive", Text2: "Expansive Imported Engine" },
  ];
  let [count, setCount] = useState(0);
  let [playstatus, setPlaystatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setCount((slide)=>{return slide===2?0:slide+1})
    },3000)
  },[])
  return (
    <>
      <Background count={count} status={playstatus} />
      <Navbar />
      <Hero
        count={count}
        status={playstatus}
        Texts={HeroCount[count]}
        setcount={setCount}
        setplay={setPlaystatus}
      />
    </>
  );
};

export default App;
