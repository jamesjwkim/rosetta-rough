import { useParams } from 'react-router-dom';

function SinglePublication() {
    const { id } = useParams();

    return (
        <div>
        <h1>Single Publication Page</h1>
        <p>Publication ID: {id}</p>
      </div>
    )
}

export default SinglePublication;