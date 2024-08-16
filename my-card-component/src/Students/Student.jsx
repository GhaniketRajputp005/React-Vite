// props  = read only properties that are shared betweeen components.
// A parent component can send data to a child component.
{/* <Component key = "value"/> */}

// propTypes = to ensure passed value is of correct datatype
// age : propTypes.number
// if you are working with props it is good practice to use propTypes

import propTypes from 'prop-types'
import styles from "./Student.module.css"
function Student(props){

    return(
        <div className={styles.student}>
            <p>
                Name:{props.name}
            </p>
            <p>
                Age:{props.age}
            </p>
            <p>
                Student:{props.isStudent?"Yes":"No"}
                {/* booleans generally dont display directly to DOM */}
            </p>
        </div>
    )
}

Student.propTypes = {
    name: propTypes.string,
    age:propTypes.number,
    isStudent: propTypes.boolean
}

Student.defaultProps ={
    name: "Guest",
    age : 0,
    isStudent: false
}

export default Student;