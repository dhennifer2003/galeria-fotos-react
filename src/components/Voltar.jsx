import React from 'react'
import { useNavigate } from 'react-router-dom'

const BotaoVoltar = () => {
    
    const navigate = useNavigate()

    const redirect = () => {
        navigate(-1)
    }
  return (
    <button className='flex p-1 ml-3 mt-1 bg-gray-300 rounded-md border-[1px]' onClick={redirect}>
        Voltar
    </button>
  )
}

export default BotaoVoltar
