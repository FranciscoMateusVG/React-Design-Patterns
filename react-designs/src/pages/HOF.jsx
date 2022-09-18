import React from 'react'
import { Link } from 'react-router-dom'
import StudentsComplex from '../components/Hof/StudentsComplex'
import StudentsSimple from '../components/Hof/StudentsSimple'

export const HOF = ({}) => {
  return (
    <div>
      <Link to={'/'}> Return Home</Link>
      <h1>HOF (High Order Functions)</h1>
      <h2>Simple Case</h2>
      <StudentsSimple />
      <h2>Complex Case</h2>
      <StudentsComplex />
    </div>
  )
}
