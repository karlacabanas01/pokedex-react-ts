import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';
//Hacer con css
import {getPokemons} from '../controller/getpokemon';
import {Pokemon} from '../models/pokemon.m';


const Listado = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        const getData = async () => { //Todo async va con un await
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        getData();
    });

    const FilterPokemon = pokemons?.slice(0, 151).filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase());

    });


/*
    Slice devuelve una copia de un array a un nuevo array comenzando por el inicio hasta el fin
    y con esto el array original  no se modificará.
    Map es el mapeo de los atributos.
    En la imagen se le puede por gif, normal o large ya que estan siendo traidas de la API
*/
  return (
    <>
        <h1>Pokemon Ander Code</h1>

        <header>
            <input value={query} placeholder="Buscar pokemon" type="text"
            onChange={(event) => setQuery(event.target.value.trim())}  />
        </header>
        <br />
        <div className='content-wrapper'>
            <div className="content">
                <div className="row gap-3">
                {FilterPokemon?.slice(0, 151).map((pokemon)=>(

                    <Card className='mx-auto' style={{ width: '18rem' }}>
                    <Card.Header><b>Tipo: </b> {pokemon.type}</Card.Header>
                        <Card.Img width='80' height='100' variant="top" src={pokemon.imggif} className='d-block mx-auto w-50'/>
                        <Card.Body>
                            <Card.Title className='text-center' > {pokemon.id} - {pokemon.name}</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item> 
                                    <Figure.Image width={16} height={16} alt="171x180"
                                        src="https://cdn-icons-png.flaticon.com/512/833/833472.png"/>
                                    <b> HP: </b>{pokemon.hp}                            
                                </ListGroup.Item>

                                <ListGroup.Item> 
                                    <Figure.Image width={16} height={16} alt="171x180"
                                        src="https://cdn-icons-png.flaticon.com/512/1007/1007003.png" />
                                    <b> Ataque: </b> {pokemon.attack}
                                </ListGroup.Item>

                                <ListGroup.Item> 
                                    <Figure.Image width={16} height={16} alt="171x180"
                                        src="https://cdn-icons-png.flaticon.com/512/5185/5185689.png"/>
                                    <b> Defensa: </b> {pokemon.defense}
                                </ListGroup.Item>

                                <ListGroup.Item> 
                                    <Figure.Image width={16} height={16} alt="171x180"
                                        src="https://cdn-icons-png.flaticon.com/512/7674/7674388.png"/>
                                    <b> E. Ataque: </b>  {pokemon.sp_atk}
                                </ListGroup.Item>

                                <ListGroup.Item> 
                                    <Figure.Image width={16} height={16} alt="171x180"
                                        src="https://cdn-icons-png.flaticon.com/512/1065/1065450.png"/>
                                    <b> E. Defensa: </b> {pokemon.sp_def} 
                                </ListGroup.Item>
                               
                                <ListGroup.Item> 
                                <Figure.Image width={16} height={16} alt="171x180"
                                        src=" https://cdn-icons-png.flaticon.com/512/1455/1455318.png"/>
                                    <b> Velocidad: </b> {pokemon.speed}
                                </ListGroup.Item>
                            </ListGroup>
                        <Button variant="primary">Ver información</Button>
                        </Card.Body>
                    </Card>
                ))}
               
                </div>
            </div>
        </div>
      
    </>
  )
}


export default Listado;