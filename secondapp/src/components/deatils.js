import React from 'react';

class Details extends React.Component{

    render() {
        return (
             <h1>Details page {this.props.selectedCourseId}</h1>
        );
    }
}

export default Details;