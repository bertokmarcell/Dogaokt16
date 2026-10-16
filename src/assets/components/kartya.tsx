import { useState } from "react";
import { TANULOSZOBAK } from "../../adat";
import type { SZOBATIPUS } from "../../adat";
export interface KARTYAPROPS{
    elem:SZOBATIPUS,
    setfoglalthelyek:(index:number,foglalt_helyek:number)=>void;
}
export default function Kartya({elem,setfoglalthelyek}:KARTYAPROPS){
    function foglalhely(){
        const [index, setfoglalthelyek] = useState(elem.foglalt_helyek)
        /*setfoglalthelyek()*/
        elem.foglalt_helyek+1;
    }
    return(
        <>
        <div className="egykartya">
            <span>{elem.szoba_nev}</span>
            <span>{elem.szobatipus}</span>
            <span>{elem.emelet}</span>
            <span>{elem.ferohely}</span>
            <span>{elem.foglalt_helyek}</span>
        </div>
        <div>
            <button className="pluszfoglalthely" onClick={foglalhely/**/}>
                +
            </button>
        </div>
        </>
    )
}
