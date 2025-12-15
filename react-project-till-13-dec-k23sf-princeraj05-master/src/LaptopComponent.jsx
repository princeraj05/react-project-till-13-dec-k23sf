
import React from "react";
class LaptopComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            brand :"Dell",
            processor : "P1",
            color : "Grey"
        }
    }


    changecolor = () =>{
        this.setState({color:"Silver"})
    }


    render() {
      return (
        <div>
            <h2>The laptop is of {this.state.brand} brand and  color is {this.state.color} and processor is {this.state.processor}</h2>
          <button onClick={this.changecolor}>Change Color</button>
        </div>
      )
    }

}

export default LaptopComponent