import React from "react"

export default function UserContainer(props){
    return(
        <div >
            <ul>
                <li>{props.data.title}</li>
            </ul>
        </div>
    )
}