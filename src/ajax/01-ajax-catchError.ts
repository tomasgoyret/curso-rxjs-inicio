import { catchError, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'
const url = 'https://api.github.com/users?per_page=5'

const fetchPromesa = fetch(url);

// const manejaErrores = ( response: Response) => {
//     if( !response.ok ) {
//         throw new Error ( response.statusText )
//     }

//     return response;
// }


// fetchPromesa
//     .then ( manejaErrores ) // esto sí maneja el error. para que funcione el catch debo disparar un error en la promesa
//     .then( resp => resp.json())
//     .then( console.log)
//     .catch( err => console.warn('error en usuarios', err))

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message);
    return of([])

}

ajax(url).pipe(
    pluck('response'),
    catchError( atrapaError)
).subscribe(console.log)