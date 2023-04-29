import Navbar from "./Navbar";
import Footer from './Footer.js';
import './Publications.css';


function generatePublications() {

    


    return (
        <div>

        </div>
    );
}



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
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <p>Field of Interest</p>
                        <select className="department">
                            <option value="any">Any</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <p>Location</p>
                        <select className="department">
                            <option value="any">Any</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <p>Institution</p>
                        <select className="department">
                            <option value="any">Any</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
                <div className="result">
                    <div className="resultTitle">
                        <h1>Publication</h1>
                    </div>
                    <div><p>result</p></div>
                    <div><p>result</p></div>
                </div>
            </div>
            <Footer />
        </div>   
    )
}