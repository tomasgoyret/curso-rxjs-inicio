import { combineLatest, fromEvent, merge } from "rxjs";
import { pluck } from "rxjs/operators";

// const keyup$ = fromEvent(document, 'keyup')
// const click$ = fromEvent(document, 'click')

// combineLatest(
//     click$.pipe(pluck('type')),
//     keyup$.pipe(pluck('type'))) 

//     .subscribe(console.log)

const input = document.createElement('input')
const input2 = document.createElement('input')

input.placeholder = 'email@gmail.com'
input2.placeholder = '*********'
input2.type = 'password'

document.querySelector('body').append(input, input2)

const inputElement = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup')
        .pipe(
            pluck<KeyboardEvent>('target', 'value')
            )
}

combineLatest(
     inputElement ( input),
     inputElement ( input2)
     ).subscribe( console.log)