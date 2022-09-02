import {   distinctUntilKeyChanged, from } from "rxjs";

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Batman'
    },
    {
        nombre: 'Gatubela'
    },
    {
        nombre: 'Robin'
    },
    {
        nombre: 'Gatubela'
    },
    {
        nombre: 'Megaman'
    },
]

from(personajes).pipe(
    distinctUntilKeyChanged( 'nombre') // Le envío que campo quiero que bloquee si se cumple
).subscribe( console.log)