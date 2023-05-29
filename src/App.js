import logo from './logo.svg';
import './App.css';
import { Simple } from './Echarts/Simple';
import { Large } from './Echarts/Large';
import { Custom } from './Echarts/Custom';
import { Custom1 } from './Echarts/Custom1';
import { Custom2 } from './Echarts/Custom2';
import { ReCustom } from './Recharts/ReCustom';
import { ReSimple } from './Recharts/ReSimple';
import { ReLarge } from './Recharts/ReLarge';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>

      <body>
        <h1>Echarts</h1>
        <Simple />
        <Large />
        <Custom />
        <Custom1 />
        <Custom2 />

        <br />
        <br />
        <br />
        <br />

        {/* <h1>Recharts</h1> */}
        {/* <ReSimple /> */}
        {/* <ReLarge /> */}
        {/* <ReCustom /> */}
      </body>
    </div>
  );
}

export default App;
