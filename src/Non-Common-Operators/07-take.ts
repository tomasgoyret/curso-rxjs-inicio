import { of, take, tap } from "rxjs";


const numeros$ = of(1,2,3,4,5)

numeros$.pipe(
    tap( console.log),
    take(3) // El take toma los primeros 3 y completa la subscripción
).subscribe({
    next: val => console.log('next' , val),
    complete: () => console.log('complete'),
})