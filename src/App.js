import logo from './logo.svg';
import './App.css';
import { Demo } from './demo';
import Fav, { Fruit } from './ford';
import { Count } from './count';
import { Colour as Color } from './colour';
import { Test } from './test';
import { DataFetching } from './DataFetching';
import LoginPage from './loginApi';
import ChatApp from './chatApp';

function App() {
  return (
    <div className="App">
      {/* <Test/> */}
      {/* <LoginPage/> */}
      {/* <ChatApp/> */}
      <DataFetching/>
      {/* <Demo/> */}
      {/* <Fav/> */}
      {/* <Count/> */}
      {/* <Color/> */}
    </div>
  );
}

export default App;
