
import styles from "./button.module.css"
// with modules we don't have to worry about naming conflicts as a unique hash key is generated for each module see f12

function Button(){

    return(
        <button className = {styles.button}>Click Me</button>
    )
}

export default Button