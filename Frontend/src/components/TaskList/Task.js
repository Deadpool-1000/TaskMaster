import React from 'react'

function Task(props) {
    const date = new Date(props.deadline);
    console.log(date);
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${("0" + date.getHours()).slice(-2)}:${(
              "0" + date.getMinutes()
            ).slice(-2)}`}</p>
    </div>
  )
}

export default Task