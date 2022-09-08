import { endWith, of, startWith } from "rxjs"

const numeros$ = of(1,2,3).pipe(
    startWith(0),
    endWith(10)
)

numeros$.subscribe( console.log) 