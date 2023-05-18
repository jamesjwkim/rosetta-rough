import React, { useState } from 'react';

import Navbar from "./Navbar";
import Footer from './Footer.js';
import PubResult from './PublicationsResults';

import './Publications.css';
import { Filter } from './Filter';
import { Helmet } from 'react-helmet';

export function Publications(props) {

    const data = require('./samplePub.json');
    

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div>
            <Navbar />
            <div className='scholarDashboard'>
            <Helmet>
                    <script src="https://tableau.washington.edu/javascripts/api/tableau.embedding.3.latest.min.js" type="module" />
                </Helmet>
                <tableau-viz id='tableau-viz' src='https://tableau.washington.edu/views/Global_Publications_2023/PublicationsbyTitle' width='1222' height='666' hide-tabs toolbar='bottom'></tableau-viz>
                <a className="tableau-link" href="https://tableau.washington.edu/views/Global_Publications_2023/PublicationsbyTitle" target="_blank">Open in larger tab</a>
            </div>
            <Footer />
        </div>
    )
}