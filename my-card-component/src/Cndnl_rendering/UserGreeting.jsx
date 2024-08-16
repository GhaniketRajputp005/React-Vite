
import styles from "./greeting.module.css"
import ptypes from "prop-types"
function UserGreeting(props){

    const welcomeMessage = <h2 className = {styles["welcome-message"]}> Welcome {props.username}</h2>

    const loginPrompt = <h2 className={styles.prompt}>Please log in to continue</h2>

    return(props.isloggedin?welcomeMessage : loginPrompt )

    // if(props.isloggedin){
    //     return(
    //       <h2>
    //         Welcome {props.username}
    //       </h2>
    //     )
    // }
    // return <h2>Please Log in to continue:</h2>

}

UserGreeting.ptypes = {
    username : ptypes.string,
    isloggedin : ptypes.boolean
    

}
UserGreeting.defaultProps ={
    username: "Guest",
    isloggedin: false
}
export default UserGreeting