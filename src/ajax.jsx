import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'


const Ajax = () => {

  const[users, setUsers] = useState([]);

const getUsers = async() => {
  const response =await fetch('https://dev-api.amazepbc.com/mazapi/v1/values/states');
  setUsers(await response.json());
}

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <>
         <h2>Amaze Users</h2>
            {
            
               users.map((curElem, index) => {
                  return(
                    <>
                      <ul>
                        <li>{curElem.id}</li>
                      </ul>
                    </>
                  )
               })
            
            
            }
      </>
    </Container>
  )
}

export default Ajax