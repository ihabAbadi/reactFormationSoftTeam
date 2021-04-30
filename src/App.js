import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './FirstComponent';
import { FirstComponentEvent } from './ComponentWithEvent/FirstComponentEvent';
import { PersonsComponent } from './ComponentWithEvent/PersonsComponent';
import { ProductsComponent } from './Products/ProductsComponent';
import { HomeNavigation } from './DemoNavigation/HomeNavigation';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => (<div>
      {/* <h1>Hello world</h1> */}
      {/* <FirstComponent></FirstComponent>
      <FirstComponent></FirstComponent> */}
      {/* <FirstComponentEvent></FirstComponentEvent> */}
      {/* <PersonsComponent></PersonsComponent> */}
      {/* <ProductsComponent></ProductsComponent> */}
      <HomeNavigation></HomeNavigation>
</div>)

export default App;
