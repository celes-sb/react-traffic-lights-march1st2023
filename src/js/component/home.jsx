import React, { useState, useEffect } from "react";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [active, setActive] = useState(""); // definir el estado, variable primitiva
	useEffect(() => { console.log(active) }, [active]); // para renderizar el componente cuando cambie el estado

	return (
		<>
			<div className="container-fluid d-flex flex-column align-items-center">
				<h2 className="title display-3 p-5">Traffic Lights with React</h2>
				<div className="row bg-dark">.</div>
				<div className="row bg-dark">.</div>
				<div className="row bg-dark">.</div>
				<div className="semaforo bg-dark rounded">
					<div class="luces">
						<div className={`red-light` + `${active === "red-light" ? " red-light-active" : ""}`} onClick={(e) => { setActive(e.target.className) }}></div>
					</div>
					<div class="luces">
						<div className={`yellow-light` + `${active === "yellow-light" ? " yellow-light-active" : ""}`} onClick={(e) => { setActive(e.target.className) }}></div>
					</div>
					<div class="luces">
						<div className={`green-light` + `${active === "green-light" ? " green-light-active" : ""}`} onClick={(e) => { setActive(e.target.className) }}></div>
					</div>
				</div>
				<footer>Made by <a href="https://github.com/celes-sb">Celeste S. Bareiro</a>, under the guidance of <a href="https://4geeks.com/">4Geeks Academy</a></footer>
			</div>
		</>
	);
};

export default Home;
