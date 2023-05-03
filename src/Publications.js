import React, { useState } from 'react';

import Navbar from "./Navbar";
import Footer from './Footer.js';
import PubResult from "./PublicationsResults";

import './Publications.css';

export function Publications(props) {
    
    const data = [
        { title: "Document1", desc: "This is a description for Document1", id: "132", pubDate: "3-11-2002" },
        { title: "Document2", desc: "This is a description for Document2", id: "12", pubDate: "4-1-2000" },
        { title: "Document3", desc: "This is a description for Document3", id: "32", pubDate: "5-21-2012" },
        { title: "Document4", desc: "This is a description for Document4", id: "41", pubDate: "1-13-2002" },
        { title: "Document5", desc: "This is a description for Document5", id: "21", pubDate: "1-19-2002" },
        { title: "Document6", desc: "This is a description for Document6", id: "99", pubDate: "2-25-2010" },
        { title: "Document7", desc: "This is a description for Document7", id: "77", pubDate: "6-9-2005" },
        { title: "Document8", desc: "This is a description for Document8", id: "45", pubDate: "8-14-2018" },
        { title: "Document9", desc: "This is a description for Document9", id: "39", pubDate: "10-29-2007" },
        { title: "Document10", desc: "This is a description for Document10", id: "57", pubDate: "12-3-2011" },
        { title: "Document11", desc: "This is a description for Document11", id: "29", pubDate: "7-27-2001" },
        { title: "Document12", desc: "This is a description for Document12", id: "16", pubDate: "9-18-2015" },
        { title: "Document13", desc: "This is a description for Document13", id: "8", pubDate: "11-6-2019" },
        { title: "Document14", desc: "This is a description for Document14", id: "68", pubDate: "4-8-2013" },
        { title: "Document15", desc: "This is a description for Document15", id: "22", pubDate: "2-14-2004" },
        { title: "Document16", desc: "This is a description for Document16", id: "52", pubDate: "7-7-2017" },
        { title: "Document17", desc: "This is a description for Document17", id: "40", pubDate: "6-4-2009" },
        { title: "Document18", desc: "This is a description for Document18", id: "33", pubDate: "12-1-2002" },
        { title: "Document19", desc: "This is a description for Document19", id: "92", pubDate: "9-30-2014" },
        { title: "Document20", desc: "This is a description for Document20", id: "81", pubDate: "3-17-2010" },
        { title: "Document21", desc: "This is a description for Document21", id: "201", pubDate: "5-8-2013" },
        { title: "Document22", desc: "This is a description for Document22", id: "202", pubDate: "1-25-2005" },
        { title: "Document23", desc: "This is a description for Document23", id: "203", pubDate: "8-12-2009" },
        { title: "Document24", desc: "This is a description for Document24", id: "204", pubDate: "12-2-2017" },
        { title: "Document25", desc: "This is a description for Document25", id: "205", pubDate: "10-31-2010" },
        { title: "Document26", desc: "This is a description for Document26", id: "206", pubDate: "4-19-2016" },
        { title: "Document27", desc: "This is a description for Document27", id: "207", pubDate: "9-27-2011" },
        { title: "Document28", desc: "This is a description for Document28", id: "208", pubDate: "2-18-2008" },
        { title: "Document29", desc: "This is a description for Document29", id: "209", pubDate: "7-7-2015" },
        { title: "Document30", desc: "This is a description for Document30", id: "210", pubDate: "6-11-2004" },
        { title: "Document31", desc: "This is a description for Document31", id: "211", pubDate: "11-22-2018" },
        { title: "Document32", desc: "This is a description for Document32", id: "212", pubDate: "3-6-2006" },
        { title: "Document33", desc: "This is a description for Document33", id: "213", pubDate: "4-13-2012" },
        { title: "Document34", desc: "This is a description for Document34", id: "214", pubDate: "1-7-2003" },
        { title: "Document35", desc: "This is a description for Document35", id: "215", pubDate: "9-3-2007" },
        { title: "Document36", desc: "This is a description for Document36", id: "216", pubDate: "8-28-2014" },
        { title: "Document37", desc: "This is a description for Document37", id: "217", pubDate: "5-14-2019" },
        { title: "Document38", desc: "This is a description for Document38", id: "218", pubDate: "10-20-2001" }
        // ... more objects
    ];

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
                        <input className="searchBar" type="text" placeholder="Search..."/>
                        <p>Department</p>
                        <select className="department">
                            <option value="any">Any</option>
                        </select>
                        <p>Field of Interest</p>
                        <select className="department">
                            <option value="any">Any</option>
                        </select>
                        <p>Location</p>
                        <select className="department">
                            <option value="any">Any</option>
                        </select>
                        <p>Institution</p>
                        <select className="department">
                            <option value="any">Any</option>
                        </select>
                        
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
                        <a href="#">&laquo;</a>
                        {Array(Math.ceil(data.length / itemsPerPage))
                        .fill()
                        .map((_, i) => (
                            <a
                            key={i}
                            href="#"
                            className={currentPage === i + 1 ? "active" : ""}
                            onClick={() => setCurrentPage(i + 1)}
                            >
                            {i + 1}
                            </a>
                        ))}
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>   
    )
}