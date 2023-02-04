import React from 'react'

const UserInfo = ({user}) => {
  return (
    <div className='card-container'>
        <div className='user-photo'>
            <img src={user.picture.large} />
        </div>
        <div className='user-info'>
            <h2>{user.name.first} {user.name.last}</h2>
            <p className='user-mail'>{user.email}</p>
            <p className='user-cell'>{user.cell}</p>
            <p className='user-location'>{user.location.city} / {user.location.country}</p>
        </div>
    </div>
  )
}

export default UserInfo