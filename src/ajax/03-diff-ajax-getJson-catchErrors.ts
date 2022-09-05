import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'

const url = 'https://httpbin.org/delay/1'

const manejaError = ( resp: AjaxError ) => {
    console.warn('error', resp.message)
    return of({
        ok: false,
        usuarios: []
    })
}
const obs$ = ajax.getJSON(url).pipe(catchError(manejaError));
const obs2$ = ajax(url).pipe(catchError(manejaError));


obs$.subscribe({
    next: data => console.log('getJson : ', data),
    error: err => console.warn('error', err),
    complete: () => console.log('complete')
})
// obs2$.subscribe( data => console.log('ajax : ', data))