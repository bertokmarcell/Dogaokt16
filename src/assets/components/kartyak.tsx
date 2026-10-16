import { useState } from "react";
import { TANULOSZOBAK } from "../../adat";
import type { SZOBATIPUS } from "../../adat";
import './kartyak.css'
import Kartya from "./kartya";
interface Kartyakprops{
    lista:SZOBATIPUS[],
}
export default function kartyak({lista}:Kartyakprops){
   return(
    <>
    {lista.map(elem,i)=>{return(
        Kartya();
    )}}
    </>
   )

}
