import profilePic from '../assets/kakashi.jpg';
import styles from './cardindex.module.css'; // Use .module.css for CSS Modules

function Card() {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage} // Corrected: cardImage instead of card-image
        src={profilePic}
        alt="Profile Picture"
        width="240"
        height="240"
      />
      <h2 className={styles.cardTitle}>Ghaniket Rajput</h2> {/* Corrected: cardTitle */}
      <p className={styles.cardText}>I'm a Computer Science Student and Watch anime</p> {/* Corrected: cardText */}
    </div>
  );
}

export default Card;
