import { useState } from "react";
import { TANULOSZOBAK } from "../../adat";
import type { SZOBATIPUS } from "../../adat";
export interface KARTYAPROPS{
    elem:SZOBATIPUS,
}
export default function Kartya({elem}:KARTYAPROPS){

        const [foglalHelyek, setfoglalthelyek] = useState(elem.foglalt_helyek)
        const foglalohely = ()=>{
            setfoglalthelyek((prev)=>prev+1)
        };
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
            <button className="pluszfoglalthely" onClick={()=>foglalHelyek}>+</button>
        </div>
        </>
    )
}
