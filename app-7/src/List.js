import React from 'react';
import ToDo from './Todo';

export default function List (props){
    let displayToDoList = props.item.map((e,i) =>{
        return (
          <ToDo key={i} item={e}/>
          )
        })
    return ( 
            <div>
                {displayToDoList}
            </div>
    )
}