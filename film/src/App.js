import {Admin, EditButton, ListGuesser, Resource } from "react-admin";
import lb4Provider from 'react-admin-lb4';
import { FilmeList } from "./filmes";
import { ReceitaList } from "./receitas";

const d =lb4Provider("http://localhost:3000/")
const App = () => (
  <Admin dataProvider={d}>
    <Resource name="filmes" list={FilmeList} edit={EditButton} />
    <Resource name="receitas" list={ReceitaList} edit={EditButton}/>
  </Admin>

);







// import logo from './logo.svg';
// import './App.css';

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

export default App;
