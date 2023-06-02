import { TextField } from '@mui/material'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div id='home-container'>
      <h1>Home</h1>
      <div className="input-wrapper">
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
      
      <div className="button-wrapper">
        <button className="default-button" role="button">Search</button>
      </div>
      
    </div>
  )
}

export default Home
