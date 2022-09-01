import { first, fromEvent, map, tap } from "rxjs";


const click$ = fromEvent<MouseEvent> ( document, 'click');

click$.pipe(
    //first() // Es lo mismo que hacer take(1)
    //Si quiero el primer evento en donde el click tenga el primer clientY mayor a 150
    // tap<MouseEvent>(console.log),
    //first<MouseEvent>( event => event.clientY >= 150)
    //extra tip
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX,
    // })),
    map( ({clientY,clientX}) => ({clientY,clientX})),
    first( event => event.clientY >= 150)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
    
})