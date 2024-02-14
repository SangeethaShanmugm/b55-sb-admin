import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SideBar from './component/SideBar';
import TopBar from './component/TopBar';
import Dashboard from './component/Dashboard';
import Table from './component/Table';
import user from './component/user';
import UserCreate from './component/UserCreate';
import { UserProvider } from './component/UserContext';

function App() {
  return (
    <UserProvider>
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
                    {/* <Route path="/table" exact={true} component={Table} /> */}
                    <Route path="/user" exact={true} component={user} />
                    <Route path="/user-create" exact={true} component={UserCreate} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>


        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
