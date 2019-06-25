import React from 'react';

export default class Dummy extends React.Component{

    render() {
        return (
            <div>
             <h1>Dummy</h1>
             <ul>
                     {this.props.courses.map(course=><li key={course.id}>{course.title}</li>)}
             </ul>
             </div>
        );
    }
}