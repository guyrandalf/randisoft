import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import hero from "../../assets/images/hero/hero.png";
import "./Hero.css";

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="hero-info">
					<div className="hero-msg">
						<h1>Maintaining Experience</h1>
						{/* <h1>
							Maintaining Development
						</h1>
						<h1>
							Maintaining Applicability
						</h1> */}
						<h2>
							Changing The Digital Environment To Bring The Vision To Life
						</h2>
						<Router>
							<Route to="#">talk with consultant</Route>
							<Route to="#">talk with consultant</Route>
						</Router>
					</div>
					<div className="hero-img">
						<img src={hero} alt="Hero_Randisoft" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
