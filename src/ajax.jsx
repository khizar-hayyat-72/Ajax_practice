import React, { useEffect} from 'react'
import Container from '@mui/material/Container'
import axios from 'axios'


const Ajax = () => {

  useEffect(() => {
    async function getData(){
      const res = await axios.get(`https://dev-api.amazepbc.com/mazapi/v1/values/states`, { mode: 'no-cors' });
      console.log(res.data.id)
    }

    getData();
  })
  return (
    <Container>
      <>
         <h2>Amaze Users</h2>
      </>
    </Container>
  )
}

export default Ajax