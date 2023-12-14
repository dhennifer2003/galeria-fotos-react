import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Titulo from './components/Titulo'

function App() {

  const [albums, setAlbums] = useState([])

  function getAlbums(){
    axios.get('https://jsonplaceholder.typicode.com/albums').then(response => setAlbums(response.data)).catch(error => console.log(error))
  }

  useEffect(() => {
    getAlbums()
  },[])


  return (
    <div className='w-full h-full'>
      <div className='border-1 border-black'>
        <Titulo/>
        <div className='px-3 flex flex-col gap-2 pt-4'>
          {albums && albums.map((album,index) => (
            <Link to={`/album/${album.id}`} className='w-full border-2 py-3 px-4 border-black' key={index+1}>{album.title}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
