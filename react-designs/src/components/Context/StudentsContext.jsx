import React from 'react'
import Students from '../StudentsUi'

export const StudentsContext = React.createContext({})

export const StudentsContextComponent = () => {
  const students = [
    { name: 'John', score: 'A-' },
    { name: 'Samuel', score: 'B-' },
    { name: 'Smith', score: 'A+' },
    { name: 'Mark', score: 'A-' },
    { name: 'Mike', score: 'B-' },
    { name: 'John', score: 'B+' }
  ]
  return (
    <StudentsContext.Provider value={students}>
      <Students />
    </StudentsContext.Provider>
  )
}
