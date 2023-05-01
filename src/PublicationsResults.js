import "./PublicationsResults.css";

function PubResult(props) {
    return(
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
    )
}

export default PubResult;