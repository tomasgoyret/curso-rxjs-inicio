import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1,5).pipe(
//     map<number,string>( val => {  // map<number,number> significa que voy a recibir un number y devolver un number
//         return (val * 10).toString()
//     })
// )

// .subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup')

const keyupCode$ = keyup$.pipe(
    map( event => event.code)
)

const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
)

keyupCode$.subscribe( code => console.log('map', code))

keyupPluck$.subscribe(code => console.log('pluck', code))

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
)

keyupMapTo$.subscribe( code => console.log('mapTo', code))
