import React from 'react'
import { Link } from 'react-router-dom'

export const Home = ({}) => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to={'/render_props'}>Render Props</Link>
        </li>
        <li>
          <Link to={'/hof'}> HOF (High Order Functions)</Link>
        </li>
        <li>
          <Link to={'/context'}>Context</Link>
        </li>
      </ul>
    </div>
  )
}
