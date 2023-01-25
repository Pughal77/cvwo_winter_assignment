import React from 'react'
import { User } from '../interface'

type HomeProps = {
    User:User
}

const Home = ({User}: HomeProps) => {
  return (
    <div>Hi, {User.UserName} </div>
  )
}

export default Home