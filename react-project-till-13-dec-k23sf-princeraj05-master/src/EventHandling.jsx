


function EventHandling(){
    function clickFun(){
        alert("This is an alert")
    }
    return(
        <div>
            <h1>Event Handling Function Component</h1>
            <button onClick={clickFun}>Click Here</button>
        </div> 
    )

}

export default EventHandling;