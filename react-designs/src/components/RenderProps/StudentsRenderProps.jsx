import React from 'react'
import Students from '../StudentsUi'

function StudentsRenderProps() {
  return (
    <StudentWithRenderProps>
      {({ students }) => <Students students={students} />}
    </StudentWithRenderProps>
  )
}

const StudentWithRenderProps = (props) => {
  const students = [
    { name: 'John', score: 'A-' },
    { name: 'Samuel', score: 'B-' },
    { name: 'Smith', score: 'A+' },
    { name: 'Mark', score: 'A-' },
    { name: 'Mike', score: 'B-' },
    { name: 'John', score: 'B+' }
  ]
  return props.children({
    students
  })
}

export default StudentsRenderProps
