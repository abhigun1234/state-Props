import logo from './logo.svg';
import './App.css';
import Students from './Students';
import Faculty from './Faculty';
import ConditionalRendering from './ConditionalRendering';
import Props from './Props';
import StateData from './StateData';

function App() {
  return (
    <div className="App">
      {/* <Students name="abhi" phone_no="7777777777" email="abhi@gmail.com"></Students>
      <Faculty></Faculty> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      <Props name="raj" city="pune"></Props>
      <StateData></StateData>
    </div>
  );
}

export default App;
