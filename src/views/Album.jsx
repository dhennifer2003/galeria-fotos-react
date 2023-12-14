import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Titulo from '../components/Titulo'
import Voltar from '../components/Voltar'

const Album = () => {

    const {id} = useParams()

    const [tituloAlb, setTituloAlb] = useState('')
    const [imagem,setImagens] = useState([]) 

    function getAlbum(){
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`).then(response => setTituloAlb(response.data.title)).catch(error => console.log(error))
    }

    function getImagens(){
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then(response => setImagens(response.data)).catch(error => console.log(error))
    }

    useEffect(() => {
        getAlbum()
        getImagens()
    },[])

  return (
    <div>
        <Titulo/>
        <Voltar/>
        <h1 className='text-3xl font-bold border-b-2 border-black py-3'>{tituloAlb}</h1>
        <div className='flex flex-wrap gap-3 mt-4'>
            {imagem.map((foto,index) => (
                    <Link key={index} to={`/imagem/${foto.id}`}><img className='border-2 p-2' key={index+1} src={foto.url} width={150} height={150}/></Link>
            ))}
        </div>
    </div>
  )
}

export default Album
