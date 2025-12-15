import React from "react";

class DashboardComponent extends React.Component{

    constructor(){
        super();
        this.state = {color: "red", type :"D1", year:2000};
    }
    newFunc = () =>{
        this.setState({type:"D2"})
    }
    render(){
        return(
            <div>
                <h1>This is our new Dashboard. It is of {this.state.color} color and 
                    its type is {this.state.type}
                </h1>
                <p>The manufacturing year is {this.state.year}</p>
                <button onClick = {this.newFunc}>Change Property</button>
            </div>
        )
    }

}

export default DashboardComponent;