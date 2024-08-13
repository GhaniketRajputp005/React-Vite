import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"

function App() {
  return (
    // <> is a fragment
    <> 
      <Header />
      <Food />
      <Footer />  
    </>
  );
}

export default App

// Only One Default Export: A module can only have one export default. If you try to have more than one, you'll get an error.

// Importing: When you import a default export, you can name it whatever you like, since it's the default export of that module. For example, import Header from './Header.jsx'; allows you to import Header even if the function was named something else in the source file.

//============= Default Export:

// A module can have only one default export.
// You can import it with any name without using curly braces.
// Example: import MyComponent from './MyComponent';


// ==============Named Export:

// A module can have multiple named exports.
// You must import it using the exact name with curly braces.
// Example: import { MyComponent } from './MyComponent';
// You can also rename the import using the as keyword: import { MyComponent as Component } from './MyComponent';