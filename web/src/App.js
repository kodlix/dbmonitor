import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a class="navbar-brand ml-4 pr-4" href="#">DB Monitor</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>

      <main role="main" class="container">
        <div class="">
          <h1> Database Metrics</h1>
          <form class="form-inline mt-2 mt-md-0">
            <label class="pr-2">Select Period: </label>
            <select>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
            <hr class="py-4" />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Database Name</th>
                  <th scope="col">Size Yestarday</th>
                  <th scope="col">Current Size</th>
                  <th scope="col">Daily Growth Rate (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
