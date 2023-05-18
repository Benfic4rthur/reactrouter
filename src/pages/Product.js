import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
// css
import './Product.css';

const Product = () => {
    // rota dinamica
    const { id } = useParams();
    // carregando dados
    const url = `http://localhost:3000/products/${id}`;
    const { dados: product, loading, error } = useFetch(url);

    return (
        <>
            <h1>Detalhes</h1>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            <ul className='product'>
                {product && (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>R$:{product.price}</p>
                        {/*Nested route*/}
                        <Link to={`/product/${product.id}/info`}>Mais informações</Link>
                    </li>
                )}
            </ul>
        </>
    );
};

export default Product;
