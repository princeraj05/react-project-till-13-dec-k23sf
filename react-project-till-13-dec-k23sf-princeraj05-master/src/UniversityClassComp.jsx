import React from "react";

class UniversityClassComp extends React.Component{
    render(){
        return(

            <div>
                <h3>the university name is {this.props.name}</h3>
            </div>
        )
    }
}

export default UniversityClassComp;