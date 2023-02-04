import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
	const [pesquisa, setPesquisa] = useState('')
	const [ filme, setFilmes ] = useState({});
	const apiKey = 'b86fa66d'
	
	const getFilme = async () => {
		try {
			const res = await axios.get(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`);
			setFilmes(res.data)
		} catch (error) {
			console.log(error)
		}
}

	useEffect(() => {
		getFilme()
	}, [])

	return (
		<div className="container">
			<h1>Procure o filme que você deseja</h1>
			<input id="pesquisa" type="text" placeholder="Pesquise aqui !" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} />
			<div className="list">
				<ul>
        {
          setFilmes().map(data => (
            <li key={data.id}>{ data.Title }</li>
          ))
        }
      </ul>
			</div>
		</div>
	)
}

export default Home;