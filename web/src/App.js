import {Helmet} from 'react-helmet'

import Monitor from './Monitor';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet title={'Netop DB Monitorcd'} />
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a className="navbar-brand ml-4 pr-4" href="#">Netop DB Monitor</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <Monitor />
     
    </div>
  );
}

export default App;
