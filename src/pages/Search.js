import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
const Search = () => {
    const [searchParams] = useSearchParams();
    const url = 'http://localhost:3000/products?' + searchParams;
    const { dados: items, loading } = useFetch(url);

    return (
        <div>
            <h1>Resultado da Busca</h1>
            <ul className='products'>
                {items &&
                    items.map(item => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>R$:{item.price}</p>
                            <Link to={`/product/${item.id}`}>Detalhes</Link>
                        </li>
                    ))}
            </ul>
            {/*if se não tiver resultados informa*/}
            {!items?.length && !loading && (
                <div>
                    <h1 style={{ color: 'red',fontSize: '3.5em'  }}>Não foram encontrados resultados</h1>
                    <h2>Faça uma nova busca para encontrar um produto desejado</h2>
                </div>
            )}
        </div>
    );
};

export default Search;
