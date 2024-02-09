import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SideBar from './component/SideBar';
import TopBar from './component/TopBar';
import Dashboard from './component/Dashboard';
import Table from './component/Table';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              <div className="container-fluid">
                <Switch>
                  <Route path="/" exact={true} component={Dashboard} />
                  <Route path="/table" exact={true} component={Table} />
                </Switch>
              </div>
            </div>
          </div>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
