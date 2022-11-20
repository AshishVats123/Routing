import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Show from './Show';
import Menu from './Menu';
const App=()=>{   
    return(
        <>
            <h1 style={{textAlign:'center'}}>Welcome @ React App</h1>           
            <Menu />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/about" component={About} />

                <Route path="/show/:fn">
                    <Show />
                </Route>
                <Route>
                    <>
                        <h2>Error</h2>
                        <p>The resource you are looking is not here :</p>
                    </>
                </Route>
            </Switch>       
        </>
       
    );
}
export default App;