import { filter, from, map, of, range } from 'rxjs';

// range(1,10).pipe(
    //     filter( val => val % 2 == 1)
    // ).subscribe(console.log)
    // range(3,10).pipe(
    //     filter( (val,i) =>{ 
    //         console.log('index', i)
    //         return val % 2 == 1})
    // ).subscribe(console.log)

    const personajes = [
        {
            tipo: "heroe",
            nombre: "Batman"
        },
        {
            tipo: "heroe",
            nombre: "Robin"
        },
        {
            tipo: "villano",
            nombre: "Joker"
        },
        {
            tipo: "villano",
            nombre: "Engima"
        },
    ]

    //const personajes$ = of(...personajes)
    const personajes$ = from(personajes)

    const personajeFilter = personajes$.pipe(
        filter((personaje) => {
            return personaje.tipo === 'heroe'
        }),
        map((personaje) => personaje.nombre)
    )

    personajeFilter.subscribe(console.log)

