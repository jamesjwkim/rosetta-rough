import "./PublicationsResults.css";
import SinglePublication from "./SinglePublication";
import { Link } from 'react-router-dom';

function PubResult(props) {
  
    return(
        <Link className="publication-link" to={`/publications/result/${props.id}`} state={props}>
        <div className="singleResult">
            <div className="titleAndDesc">
                <div className="resultTitle">
                    <h4>{props.title}</h4>
                </div>
                <div className="resultDesc">
                    <p>{props.desc}</p>
                </div>
            </div>
            <div className="resultID">
                <p>{props.id}</p>
            </div>
            <div className="resultDate">
                <p>{props.pubDate}</p>
            </div>
            <div>

            </div>
        </div>
        </Link>
    )
}

export default PubResult;