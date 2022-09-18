import React from 'react'
import Students from './StudentsUi'

const withStudents = (Component) => {
  const students = [
    { name: 'John', score: 'A-' },
    { name: 'Samuel', score: 'B-' },
    { name: 'Smith', score: 'A+' },
    { name: 'Mark', score: 'A-' },
    { name: 'Mike', score: 'B-' },
    { name: 'John', score: 'B+' }
  ]
  return () => <Component students={students}></Component>
}

const StudentsSimple = withStudents(Students)

export default StudentsSimple
