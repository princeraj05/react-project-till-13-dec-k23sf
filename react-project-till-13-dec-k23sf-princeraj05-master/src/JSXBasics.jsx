import './JSXBasics.css'
function calculateWeight(wt){

    return wt*100;

}
function click(){
    alert("submit");
}

function JSXBasics(){

    const x = 5+5;
    const y = "myclass";
    const TV={
        brand:"samsung",
        price:20000,
        country:"china"
    };

    const style1 ={
        color: "orange",
        backgroundColor: "grey"

    }
    return(
        <div className={y}>

        <h1>I have calculated {10*5}</h1>
        <h1>The sum is : {x}</h1>
        <h2>The calculation of weight is : {calculateWeight(5)}</h2>
        {/* <h2>The calculation of weight is : {calculateWeight(5)}</h2> */}
        <h3>The brand of TV is {TV.brand}, the price is {TV.price} and it is manufactured in {TV.country}</h3>
        <button onClick={click} disabled={false}>submit</button>

        <div style={style1}>
            <h2>Hello, this is the child div section</h2>
        </div>

        </div>

        
    )

}

export default JSXBasics;