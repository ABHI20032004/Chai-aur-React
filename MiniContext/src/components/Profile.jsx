import React , {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {User} = useContext(UserContext)
  
    if(! User) return <div>Please Login</div>
    return  <div>WelCome {User.username}</div>
  
}

export default Profile