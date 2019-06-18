import React from 'react';

export function CardHeader(props){

        return (
             <div className="card-header">
                 {props.data.name}
             </div>
        );
}