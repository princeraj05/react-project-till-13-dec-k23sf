
import React from "react";

class NewComponent extends React.Component{

    render(){
        // return React.createElement('h3', {style:{color:'green'}} , 'This heading is created using createElement method')
        return React.createElement('div',{style:{backgroundColor:'yellow'}},
            React.createElement('h1',{style:{color:"purple"}},
                'This is new heading inside the div'))
    }

}

export default NewComponent;