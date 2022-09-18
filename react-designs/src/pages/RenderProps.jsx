import React from 'react'
import { Link } from 'react-router-dom'
import StudentsRenderProps from '../components/RenderProps/StudentsRenderProps'

export const RenderProps = ({}) => {
  return (
    <div>
      <Link to={'/'}> Return Home</Link>
      <h1>Render Props</h1>
      <StudentsRenderProps />
    </div>
  )
}
