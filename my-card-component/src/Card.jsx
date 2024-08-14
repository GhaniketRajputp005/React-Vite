
import profilePic from './assets/kakashi.jpg'

function Card(){

    return(
        <div className = "card">
            <img  className = "card-image" src={profilePic} alt="Profile Picture" width= "240" height="240"/>
                <h2 className = "card-title">Ghaniket Rajput</h2>
                <p className = "card-text">I'm a Computer Science Student and Watch anime</p>
        </div>
    )
}
export default Card