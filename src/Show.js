import {useParams,useLocation,useHistory} from 'react-router-dom';
const Show=()=>{
    const {fn}=useParams();
    const {pathname}=useLocation();
    const h=useHistory();
    return(
        <>
            <h2>Show</h2>
            <p>Some content for Show goes here</p>
            <p>Name is : {fn}</p>
            <p>Path name : {pathname}</p>
            <p>

                <input type="button" value="back to home" onClick={()=>h.push("/")} />
            </p>
        </>
    );
}
export default Show;