import Card from "./Card/Card.jsx";
import Button from "./Button/Button.jsx";
import Student from './Students/Student.jsx'
import Greeting from './Cndnl_rendering/UserGreeting.jsx'

function App() {
  return (
    <div>
      <Card />
      <Button />
      <Greeting isloggedin = {false} username = "Ghaniket" />
      <Greeting />
      <Student name = "Ghaniket" age={30} isStudent = {true}/>
      <Student name = "Patrick" age ={34} isStudent = {false} />
      <Student name = "Tylror" age = {20} isStudent = {true}/>
      <Student name = "Tysonr" age = {40} isStudent = {false}/>
      <Student />

    </div>
  );
}

export default App;
