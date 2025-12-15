
import './CSSExternal.css'
import './CSSExternal1.css'
const myStyle = {
    color:"blue",
    backgroundColor : "yellowgreen",
    border : "2px solid red",
    borderRadius : "10px"
}


function CSSInline(){
    return(
        // <div style={myStyle}>
        //     <h1>This is Inline CSS Example</h1>
        // </div>

        <div className="container">
            <h2>This is new style</h2>
        </div>
    )
}
export default CSSInline;