import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer'

import './styles/DetailPage.css'

const DetailPage = () => {

    let { id } = useParams();

    id = parseInt(id);
    console.log(id, typeof id)

    return (
        <main className="detail-page-container">
            <ItemDetailContainer id={id}/>
            <Link to="/products" > Volver atrás </Link>
        </main>
    )
}

export default DetailPage
