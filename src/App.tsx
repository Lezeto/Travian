import React, { useState, useEffect } from 'react';
import MaderaImg from './Madera.jpg';
import BarroImg from './Barro.jpg';
import HierroImg from './Hierro.jpg';
import CerealImg from './Cereal.jpg';
import Casa0Img from './casa0.jpg';
import Casa1Img from './casa1.jpg';
import Casa2Img from './casa2.jpg';
import Casa3Img from './casa3.jpg';
import Casa4Img from './casa4.jpg';
import Casa5Img from './casa5.jpg';
import Casa6Img from './casa6.jpg';



const App: React.FC = () => {
 const [Madera, setMadera] = useState(150);
 const [Barro, setBarro] = useState(150);
 const [Hierro, setHierro] = useState(150);
 const [House, setHouse] = useState(0);
 const [Cereal, setCereal] = useState(150);
 const [buttonsPressed, setButtonsPressed] = useState({
  Madera: 0,
  Barro: 0,
  Hierro: 0,
  Cereal: 0
 });

 useEffect(() => {
 const intervalId1 = setInterval(() => {
  setMadera((prevMadera) => prevMadera + 1 * Math.pow(1.5, buttonsPressed.Madera));
 }, 1000);

 const intervalId2 = setInterval(() => {
  setBarro((prevBarro) => prevBarro + 1 * Math.pow(1.5, buttonsPressed.Barro));
 }, 1000);

 const intervalId3 = setInterval(() => {
  setHierro((prevHierro) => prevHierro + 1 * Math.pow(1.5, buttonsPressed.Hierro));
 }, 1000);

 const intervalId4 = setInterval(() => {
  setCereal((prevCereal) => prevCereal + 1 * Math.pow(1.5, buttonsPressed.Cereal));
 }, 1000);

 return () => {
  clearInterval(intervalId1);
  clearInterval(intervalId2);
  clearInterval(intervalId3);
  clearInterval(intervalId4);
 };
 }, [buttonsPressed]);

 const handleButtonClick = (variable: string) => {
  setButtonsPressed((prevState) => {
    const newButtonsPressed = { ...prevState };
    newButtonsPressed[variable as keyof typeof newButtonsPressed] += 1;
    setMadera((prevMadera) => prevMadera - 50/1.5 * Math.pow(1.5, newButtonsPressed[variable as keyof typeof newButtonsPressed]));
    setBarro((prevBarro) => prevBarro - 50/1.5 * Math.pow(1.5, newButtonsPressed[variable as keyof typeof newButtonsPressed]));
    setHierro((prevHierro) => prevHierro - 50/1.5 * Math.pow(1.5, newButtonsPressed[variable as keyof typeof newButtonsPressed]));
    setCereal((prevCereal) => prevCereal - 50/1.5 * Math.pow(1.5, newButtonsPressed[variable as keyof typeof newButtonsPressed]));
    return newButtonsPressed;
  });
 };
 
 const handleHouseButtonClick = () => {
  setHouse((prevHouse) => prevHouse + 1);
  setHierro((prevHierro) => prevHierro - 250 * Math.pow(2, House));
  setCereal((prevCereal) => prevCereal - 250 * Math.pow(2, House));
  setBarro((prevBarro) => prevBarro - 250 * Math.pow(2, House));
  setMadera((prevMadera) => prevMadera - 250 * Math.pow(2, House));
 };
 

 return (
 <div>
    <div id="house">
 <img id="house-img" src={House === 0 ? Casa0Img : House === 1 ? Casa1Img : House === 2 ? Casa2Img : House === 3 ? Casa3Img : House === 4 ? Casa4Img : House === 5 ? Casa5Img : Casa6Img} alt="Casa"/>
 <h1>Casa nivel {House}</h1>
 <p>Siguiente nivel {250*Math.pow(2, House)}</p>
 <button onClick={handleHouseButtonClick} disabled={Hierro < 250 * Math.pow(2, House) || Cereal < 250 * Math.pow(2, House) || Barro < 250 * Math.pow(2, House) || Madera < 250 * Math.pow(2, House)}>Increase House</button>
 </div>
  <div className="counter">
 <div>
  <img src={MaderaImg} alt="Madera"/>
  <h1>Madera</h1>
  <p>{3600*Math.pow(1.5, buttonsPressed.Madera)} /h</p>
  <h3>{Math.floor(Madera)}</h3>
  <p>Siguiente Nivel: {Math.floor(50*Math.pow(1.5, buttonsPressed.Madera))}</p>
  <button onClick={() => handleButtonClick('Madera')} disabled={Cereal < 50 * Math.pow(1.5, buttonsPressed.Madera) || Madera < 50 * Math.pow(1.5, buttonsPressed.Madera) || Barro < 50 * Math.pow(1.5, buttonsPressed.Madera) || Hierro < 50 * Math.pow(1.5, buttonsPressed.Madera)}> x1.5</button>
 </div>
 <div>
  <img src={BarroImg} alt="Barro"/>
  <h1>Barro</h1>
  <p>{3600*Math.pow(1.5, buttonsPressed.Barro)} /h</p>
  <h3>{Math.floor(Barro)}</h3>
  <p>Siguiente Nivel: {Math.floor(50*Math.pow(1.5, buttonsPressed.Barro))}</p>
  <button onClick={() => handleButtonClick('Barro')} disabled={Cereal < 50 * Math.pow(1.5, buttonsPressed.Barro) || Madera < 50 * Math.pow(1.5, buttonsPressed.Barro) || Barro < 50 * Math.pow(1.5, buttonsPressed.Barro) || Hierro < 50 * Math.pow(1.5, buttonsPressed.Barro)}> x1.5</button>
 </div>
 <div>
  <img src={HierroImg} alt="Hierro"/>
  <h1>Hierro</h1>
  <p>{3600*Math.pow(1.5, buttonsPressed.Hierro)} /h</p>
  <h3>{Math.floor(Hierro)}</h3>
  <p>Siguiente Nivel: {Math.floor(50*Math.pow(1.5, buttonsPressed.Hierro))}</p>
  <button onClick={() => handleButtonClick('Hierro')} disabled={Cereal < 50 * Math.pow(1.5, buttonsPressed.Hierro) || Madera < 50 * Math.pow(1.5, buttonsPressed.Hierro) || Barro < 50 * Math.pow(1.5, buttonsPressed.Hierro) || Hierro < 50 * Math.pow(1.5, buttonsPressed.Hierro)}> x 1.5</button>
 </div>
 <div>
  <img src={CerealImg} alt="Cereal"/>
  <h1>Cereal</h1> 
  <p>{3600*Math.pow(1.5, buttonsPressed.Cereal)} /h</p>
  <h3>{Math.floor(Cereal)}</h3>
  <p>Siguiente Nivel: {Math.floor(50*Math.pow(1.5, buttonsPressed.Cereal))}</p>
  <button onClick={() => handleButtonClick('Cereal')} disabled={Cereal < 50 * Math.pow(1.5, buttonsPressed.Cereal) || Madera < 50 * Math.pow(1.5, buttonsPressed.Cereal) || Barro < 50 * Math.pow(1.5, buttonsPressed.Cereal) || Hierro < 50 * Math.pow(1.5, buttonsPressed.Cereal)}> x 1.5</button>

 </div>
 </div>
 </div>
 );
};

export default App;
