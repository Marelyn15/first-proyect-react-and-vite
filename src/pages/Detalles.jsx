import {Link, useParams} from "react-router-dom";
import { useFetch } from "../utils/hooks/useFetch";

function Detalles(){
    const params = useParams();
    const {data, isLoading} = useFetch(`http://localhost:3000/users/${params.id}`);
    if(isLoading) return <h1></h1>
    return(<div>
        <h1>Hola</h1>
    </div>)
    
}

export default Detalles;