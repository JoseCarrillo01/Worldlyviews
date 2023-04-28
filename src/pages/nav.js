
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import explorar from "./explorar";
import Inicio from "./inicio";

const nav = () => {
    return (
        <div className="navbarapp">
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                            <Link to="/explorar" >Explorar</Link>
                            <Link to="/" >Contacto</Link>

                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Link exact  path="/" component={Inicio} />
                    <Link exact path="/explorar" component={explorar} />
                </Switch>
            </div>
        </Router>
        </div>
    );



}

export default nav;