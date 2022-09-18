import React from 'react'

const Students = (props) => {
  return (
    <div>
      {props.students.map((student) => (
        <p>
          <span style={{ color: 'blue' }}>{student.name}</span> :
          <span style={{ color: 'red' }}>{student.score}</span>
        </p>
      ))}
    </div>
  )
}

export default Students
