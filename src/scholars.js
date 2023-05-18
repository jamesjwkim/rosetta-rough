import Navbar from "./Navbar";
import Footer from "./Footer";
import './Scholars.css'
// import { Profile } from "./Profile.js";
import { Filter } from './Filter.js';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';





export function Scholar() {

    return (
        <div>
            <Navbar />
            <div className="scholarDashboard">
                <Helmet>
                    <script src="https://tableau.washington.edu/javascripts/api/tableau.embedding.3.latest.min.js" type="module" />
                </Helmet>
                <tableau-viz id='tableau-viz' src='https://tableau.washington.edu/views/Global_Publications_2023/PublicationsbyFacultyName' width='1000' height='700' hide-tabs toolbar='bottom'></tableau-viz>
                <a className="tableau-link" href="https://tableau.washington.edu/views/Global_Publications_2023/PublicationsbyFacultyName" target="_blank">Open in larger tab</a>
            </div >
            <div>
                test
            </div>
            <Footer />
        </div >
        

    )
}