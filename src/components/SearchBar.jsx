import { useEffect,useState } from "react";
import { useDebounce } from "../utils/hooks/useDebounce";

/**
 *
 * @param {{ onSearch: void }} props
 * @returns
 */

export function SearchBar({ onSearch  = () => {}}){
    const [input, setInput] = useState("");
    const debounced = useDebounce(input, 500);

    useEffect(()=>{
        onSearch(debounced)
    }, [debounced]);

    return(
        <div>
            <label>
                Search: 
                <input 
                style={{width: "100%"}}
                placeholder="Busca por nombre..."
                onChange={(event) => setInput(event.target.value)}
                />
            </label>
        </div>
    );
}
