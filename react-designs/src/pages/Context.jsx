import React from 'react'
import { Link } from 'react-router-dom'
import { StudentsContextComponent } from '../components/Context/StudentsContext'

export const Context = ({}) => {
  return (
    <div>
      <Link to={'/'}> Return Home</Link>
      <h1>Context</h1>
      <StudentsContextComponent />
    </div>
  )
}
