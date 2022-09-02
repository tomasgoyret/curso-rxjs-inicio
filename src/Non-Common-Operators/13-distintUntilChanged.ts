import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of(1, 1, 1, 1, "1", 2, 3, 4, 4,2,2, 4, 4, 5, 6, 7, 7, 7, 7, 1, 1, 1, 1, 8, 8, 8, 8)

numeros$.pipe(
    distinctUntilChanged() // usa el === triple igual
).subscribe(console.log)

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
    distinctUntilChanged( (ant,act) => ant.nombre === act.nombre) // Le envío que campo quiero que bloquee si se cumple
).subscribe( console.log)