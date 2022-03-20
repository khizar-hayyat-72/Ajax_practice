import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import './ajax.css'

import axios from 'axios'


const Ajax = () => {

   const [users, setUser] = useState([]);

  useEffect(() => {
    const getData = async() =>{
      const res = await axios.get(`https://api.github.com/users`);
      setUser(res.data);
    }

    getData();
  } , [])

console.log(users);
  return (
      <>
      <Container mt={5}>
        <table >
          <th>ID</th>
          <th>Image</th>
          <th>Username</th>
          <th>User Type</th>
          <th>Node ID</th>
          <th>Github Url</th>
            {
              users.map((user) => {
                return(
                  <tr>
                    <td>
                      {user.id}
                    </td>
                    <td>
                      <img src={user.avatar_url} alt="text" />
                    </td>
                    <td className='userName'>
                      {user.login }
                    </td>
                    <td>
                      {user.type}
                    </td>
                    <td>
                      {user.node_id}
                    </td>
                    <td>
                      {user.url}
                    </td>
                    
                  </tr>
                )
              })
            }
          </table>
        </Container>
      </>
  )
}

export default Ajax