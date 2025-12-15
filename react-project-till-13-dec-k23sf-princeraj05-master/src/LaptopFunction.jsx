

function LaptopFunction(props){
    return(
        <div>
            <h1>This is laptop function component</h1>
            <p>The color of laptop is {props.color} and the brand is {props.brand}</p>
            <p>The laptop is manufactured in year {props.year}. the model no. is {props.model}</p>
            <p>The specs are : ram {props.con.ram} and ssd {props.con.ssd}</p>
        </div>
    )
}

export default LaptopFunction;