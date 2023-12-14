import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Titulo from '../components/Titulo'
import Voltar from '../components/Voltar'

const Imagem = () => {
    const {id} = useParams()

    const [imagem,setImagem] = useState({})


    function getImagens(){
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then(response => setImagem(response.data)).catch(error => console.log(error))
    }

    useEffect(() => {
        getImagens()
    },[])

  return (
    <div>
        <Titulo/>
        <Voltar/>
        <h1 className='border-b-2 border-black py-3'>{imagem.title}</h1>
        <img className='mt-4' width={600} height={600} src={imagem.url}/>
    </div>
  )
}

export default Imagem
