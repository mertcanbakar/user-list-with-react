import React, { useEffect, useState } from 'react'
import axios from 'axios'
// https://randomuser.me/api/?results=5
// Components
import UserInfo from './UserInfo'
const UserList = () => {
    const [users, setUsers] = useState([])

    async function getUser() {
        try{
        const response = await axios.get ("https://randomuser.me/api/?results=20")
        setUsers(response.data.results)
      
        }catch (error){
        console.log(error)
        }
    }
    useEffect(()=>{
    getUser()
    }, [])
  return (
    <div>
        <ul className='user-list'>
        {users.map((user, idx)=>(
                <li> <UserInfo user ={user} key={idx} /> </li> ))}
        </ul>
    </div>
  )
}

export default UserList