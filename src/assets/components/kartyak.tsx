import { useState } from "react";
import { TANULOSZOBAK } from "../../adat";
import type { SZOBATIPUS } from "../../adat";
import kartya from "./kartya";
interface Kartyakprops{
    lista:SZOBATIPUS,
}
export default function kartyak({lista}:Kartyakprops){
    return(<>
        TANULOSZOBAK.map((elem,i)=>
        return(<>
            {kartya(elem) key={i}}
        </>);
        </>
    )
}
