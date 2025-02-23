import { useEffect, useState } from 'react';

const MovieList = () => {

    const [movies, setMovies] = useState([])
    
    useEffect(async () => {
        const url = "http://localhost:5000/movies";
        const res = await fetch(url);
        setMovies(await res.json());
    }, [])
    
    return(
            <table className="striped">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Episódios</th>
                    <th>Episódio atual</th>
                    <th>Visto por último</th>
                </tr>
                </thead>

                <tbody>
                {movies.map(movie => {
                    //let type = movie.type === 0 ? 'Série' : 'Filme';
                    let type = ''
                    if(movie.type === 0){
                        type = 'Série'
                    } else{
                        type = 'Filme'
                    }
                    let formatDate = (movie.last_view).split('T', 2)

                    return(
                        <tr key={movie.id}>
                            <td>{movie.name}</td>
                            <td>{type}</td>
                            <td>{movie.total_ep}</td>
                            <td>{movie.atual_ep}</td>
                            <td>{movie.last_view}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )
}

export default MovieList;
