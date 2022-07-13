import React from 'react'

export default function Alert(props) {
    return (
    
        

            props.alert === null ? "" : <div class="alert alert-success" role="alert" >
                                                <strong>{props.alert.type}</strong>{props.alert.msg}
                                        </div>
        
    )
}
