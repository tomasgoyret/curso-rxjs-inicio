import { asyncScheduler, distinctUntilChanged, fromEvent, map, pluck, sampleTime, throttleTime } from "rxjs"

const click$ = fromEvent<MouseEvent>( document, 'click')

click$.pipe(
    sampleTime(2000),
    map( ({x,y}) => ({x,y}))
).subscribe(console.log)

