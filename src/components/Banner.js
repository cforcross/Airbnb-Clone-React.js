import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import '../css/Banner.css'
import Search from './Search'
import { useHistory } from 'react-router-dom'
function Banner() {
  const history = useHistory()
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='banner'>
      {showSearch && <Search />}
      <div className='banner__search'>
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant='outlined'
          className='banner__searchButton'
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div>
      <div className='banner__info'>
        <h1>Imagination is more Important than knowledge</h1>
        <h5>plan a different kind of adventure for yourselve</h5>
        <Button onClick={() => history.push('/search')} variant='outline'>
          Explore the World
        </Button>
      </div>
    </div>
  )
}

export default Banner
