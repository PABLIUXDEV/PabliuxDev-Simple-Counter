import React from "react";
import Card from "./Card.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const SecondsCounter = ({seconds}) => {
	return (
		<div className="container-fluid h-full d-flex justify-content-center gap-2 mt-5">
			{/* Meter icono de reloj aquí desde fontawesome */}
			<Card number={Math.floor(seconds % 1000000 / 100000)}/>
			<Card number={Math.floor(seconds % 100000 / 10000)}/>
			<Card number={Math.floor(seconds % 10000 / 1000)}/>
			<Card number={Math.floor(seconds % 1000 / 100)}/>
			<Card number={Math.floor(seconds % 100 / 10)}/>
			<Card number={seconds % 10}/>
	</div>
);
};

export default SecondsCounter;

// Buscar version de react y usar fontawesome para el reloj