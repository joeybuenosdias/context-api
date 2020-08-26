import React from 'react'
import Context from '../../Context/Context'
import ListItem from './ListItem/ListItem'

export const List = () => {
    return (
        <Context.Consumer>
            {({ todoList }) => {
                return (
                    <ul>
                        {todoList.map((item) => {
                            return (
                                <ListItem key={item.id} {...item} />
                            )
                        })}
                    </ul>
                )
            }}
        </Context.Consumer>
    )
}

export default List