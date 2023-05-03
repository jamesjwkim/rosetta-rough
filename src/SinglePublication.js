import { useParams, useLocation } from 'react-router-dom';

function SinglePublication(props) {
    const { id } = useParams();
    const location = useLocation();
    const { title, desc, pubDate } = location.state;

    return (
        <div>
        <h1>Single Publication Page</h1>
        <p>title: {title}</p>
        <p>description: {desc}</p>
        <p>Publication ID: {id}</p>
        <p>date: {pubDate}</p>
      </div>
    )
}

export default SinglePublication;