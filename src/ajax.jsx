import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import axios from 'axios'


const Ajax = () => {
 

   const [users, setUser] = useState([]);

  useEffect(() => {
    const getData = async() =>{
      const res = await axios.get(`https://api.github.com/users`);
      setUser(res.data);
    }

    getData();
  })
  return (
    <Container>
      <>
        {
          users.map((user,index) => {
            return(
              <ul key={index}>
                <li>
                  {user.login} 
                </li>
                <li>
                   <img src={user.avatar_url} alt='Img'/>
                </li>
                <li>
                   {user.type}
                </li>
              </ul>
            )
          })
        }
      </>
    </Container>
  )
}

export default Ajax