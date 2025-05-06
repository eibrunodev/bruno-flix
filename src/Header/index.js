import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <Link to="/filmes">
                <h2>Filmes</h2>
            </Link>
        </header>
    )
}