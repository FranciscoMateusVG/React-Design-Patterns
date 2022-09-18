import React from 'react'
import { Link } from 'react-router-dom'

export const RenderProps = ({}) => {
  return (
    <div>
      <Link to={'/'}> Return Home</Link>
      <h1>Render Props</h1>
    </div>
  )
}
