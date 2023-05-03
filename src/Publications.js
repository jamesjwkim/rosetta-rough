import React, { useState } from 'react';


import Navbar from "./Navbar";
import Footer from './Footer.js';
import PubResult from "./PublicationsResults";


import './Publications.css';


export function Publications(props) {
    
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
                        <PubResult title="Document1" desc="This is a description for Document1" id="132" pubDate="3-11-2002"/>
                        <PubResult title="Document2" desc="This is a description for Document2" id="12" pubDate="4-1-2000"/>
                        <PubResult title="Document3" desc="This is a description for Document3" id="32" pubDate="5-21-2012"/>
                        <PubResult title="Document4" desc="This is a description for Document4" id="41" pubDate="1-13-2002"/>
                    </div>
                    <div className="resultPagination">
                        <a href="#">&laquo;</a>
                        <a href="#" class="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">7</a>
                        <a href="#">8</a>
                        <a href="#">9</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>   
    )
}