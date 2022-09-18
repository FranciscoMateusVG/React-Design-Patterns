import React from 'react'
import Students from './StudentsUi'

const withStudents = (count) => (Component) => {
  const students = [
    { name: 'John', score: 'A-' },
    { name: 'Samuel', score: 'B-' },
    { name: 'Smith', score: 'A+' },
    { name: 'Mark', score: 'A-' },
    { name: 'Mike', score: 'B-' },
    { name: 'John', score: 'B+' }
  ]
  const listStudentsLimited = students.slice(0, count)
  return () => <Component students={listStudentsLimited}></Component>
}
const maxStudentCount = 3

const StudentsComplex = withStudents(maxStudentCount)(Students)

export default StudentsComplex
