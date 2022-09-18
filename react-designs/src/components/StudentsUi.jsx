import React, { useContext } from 'react'
import { StudentsContext } from './Context/StudentsContext'

const Students = (props) => {
  const studentsContext = useContext(StudentsContext)

  if (Object.keys(studentsContext).length !== 0) {
    return (
      <div>
        {studentsContext.map((student, index) => (
          <p key={index}>
            <span style={{ color: 'blue' }}> {student.name} </span> :
            <span style={{ color: 'red' }}> {student.score} </span>
          </p>
        ))}
      </div>
    )
  }

  return (
    <div>
      {props.students.map((student, index) => (
        <p key={index}>
          <span style={{ color: 'blue' }}> {student.name} </span> :
          <span style={{ color: 'red' }}> {student.score} </span>
        </p>
      ))}
    </div>
  )
}

export default Students
