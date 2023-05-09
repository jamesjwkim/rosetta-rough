import { useParams, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from './Footer.js';

function SinglePublication(props) {
    const { id } = useParams();
    const location = useLocation();
    const { title, desc, pubDate } = location.state;

    return (
        <div>
          <Navbar />
          <div>
            <h1>{title}</h1>
            <p>{desc}</p>
            <p>Publication ID : {id}</p>
            <p>Date : {pubDate}</p>
            <p>Publisher(s) :</p>
          </div>
          <Footer className="footerP"/>
      </div>
    )
}

export default SinglePublication;