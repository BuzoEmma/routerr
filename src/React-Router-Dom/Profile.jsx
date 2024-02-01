import React from 'react'
import { AuthUser } from './ProtectedRouteAuth'


const Profile = () => {

  const { User } = AuthUser()

  return (
    <div>
      You welcome Mr {User}
    </div>
  )
}

export default Profile