
import sty1 from './CSSModule.module.css'
import sty2 from './CSSModule1.module.css'

console.log(sty1);
console.log(sty2);

function CSSModule(){
    return(
        <div className={sty2.mystyle} >
            <h1>This is CSS Module Example</h1>
        </div>
    )
}

export default CSSModule;