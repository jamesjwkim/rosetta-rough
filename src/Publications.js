import React, { useState } from 'react';

import Navbar from "./Navbar";
import Footer from './Footer.js';
import PubResult from './PublicationsResults';

import './Publications.css';
import { Filter } from './Filter';

export function Publications(props) {

    const data = require('./samplePub.json');
    

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div>
            <Navbar />
            <div className="publicationResult">
            <div className="filter">
                <h3>Filter</h3>
                <div className="searchFilter">
                    <input className="searchBar" type="text" placeholder="Search..." />
                    
                </div>
                <div className="filterButtonContainer">
                    <button className="buttonDesign">Filter!</button>
                </div>
            </div>
                <div className="result">
                    <div className="resultLabel">
                        <div className="resultLabelTitle">
                            <p>Title</p>
                        </div>
                        <div className="resultLabelId">
                            <p>ID</p>
                        </div>
                        <div className="resultLabelDate">
                            <p>Pub. Date</p>
                        </div>
                    </div>
                    <div className="resultDiv">
                        {data.slice(startIndex, endIndex).map((item) => (
                            <PubResult {...item} />
                        ))}
                    </div>
                    <div className="resultPagination">
                        <a href="#" onClick={() => setCurrentPage(currentPage - 1)}>&laquo;</a>
                        {Array(Math.ceil(data.length / itemsPerPage))
                            .fill()
                            .map((_, i) => {
                                const pageNumber = i + 1;
                                if (pageNumber <= currentPage + 4 && pageNumber >= currentPage - 5) {
                                    return (
                                        <a
                                            key={i}
                                            href="#"
                                            className={currentPage === pageNumber ? "active" : ""}
                                            onClick={() => setCurrentPage(pageNumber)}
                                        >
                                            {pageNumber}
                                        </a>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        <a href="#" onClick={() => setCurrentPage(currentPage + 1)}>&raquo;</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}