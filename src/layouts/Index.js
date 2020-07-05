import React, {Suspense, lazy}from 'react';
import { Route, Switch} from 'react-router-dom';


const Dashboard = lazy(()=>import('./../components/App.js'))
const Customers = lazy(()=> import('./../components/Search.js'))


class Layout extends React.Component{
 constructor(){
     super();
     this.state = {}
 }

 render(){
     return(
         <>
        <header class="main-header">
          <h2>URL Preview</h2> 
        </header>
 
         <div className="mainScreen">
            <div className="mainScreen__routeScreen">
                <Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/search" component={Dashboard} />
					</Switch>               
                </Suspense>
            </div>
            
         </div>
                
         <footer className="footer">
                <p className="copyright">
                    Copyright &copy; URL
                </p>
        </footer>
        </>
     )
 }
}
export default Layout