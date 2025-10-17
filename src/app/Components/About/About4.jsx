"use client"
import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import CoreModules from '../Services/CoreModules';
import Problem from '../Services/Problem';
import Hrms from '../Services/Hrms';
import Acheive from './Acheive';


const 
About4 = ({ data, listitem }) => {

	useEffect(() => {
		loadBackgroudImages();
	}, []);

	return (
		<>
			<div className="about-section style-three relative" data-background="/assets/images/resource/about-bg3.jpg">
				{/* <p>about 4</p> */}

				<div className="container">

					{/* --------- PROBLEM → AGITATION → SOLUTION ------------------------*/}


					{/* ------------ WHAT YOU’LL ACHIEVE --------------------- */}
					


				</div>
			</div>


		</>
	);
};

export default About4;