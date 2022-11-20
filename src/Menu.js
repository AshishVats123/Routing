import {Link} from 'react-router-dom';
const Menu=()=>{
    const nm="Rajeev gupta";
    return(
        <>
            <Link to="/">Home</Link> &nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;
            <Link to={"/show/"+nm}>Show</Link>
        </>
    );
}
export default Menu;