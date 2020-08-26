import React from 'react'

export const Note = ({ id, text }) => {
    return (
        <li>
            {text} : {id}
        </li>
    )
}

export default Note