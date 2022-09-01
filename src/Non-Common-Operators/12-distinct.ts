import { distinct, from, of } from "rxjs";

const numeros$ = of(1, 1, 1, 1, "1", 2, 3, 4, 4, 4, 4, 5, 6, 7, 7, 7, 7, 1, 1, 1, 1, 8, 8, 8, 8)

numeros$.pipe(
    distinct() // usa el === triple igual
).subscribe(console.log)

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Batman'
    },
    {
        nombre: 'Robin'
    },
    {
        nombre: 'Gatubela'
    },
    {
        nombre: 'Gatubela'
    },
    {
        nombre: 'Megaman'
    },
]

from(personajes).pipe(
    distinct( p => p.nombre) // Le envío que campo quiero que revise para saber si se repite o no
).subscribe( console.log)