import Navbar from "./Navbar";
import Footer from './Footer.js'


function generatePublications() {

    


    return (
        <div>

        </div>
    );
}



export function Publications(props) {

    
    return (
        <main>
            <div>
                <Navbar />
                <div className="filter">
                    <p>Filter</p>
                    <div className="searchFilter">
                        <select id="department">
                            <option value="any">Any</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    
                </div>
            </div>
            
        </main>
        
    )
}