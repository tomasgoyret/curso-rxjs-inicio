
//creando formulario
import { catchError, exhaustMap, from, fromEvent, map, mergeMap, of, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


//Helper

const peticionHttpLogin = (userPass) => {
    return ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            pluck( 'response','token'),
            catchError( err => of('xxx'))
        )
}

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input')
const submitBtn = document.createElement('button')


inputEmail.type = 'email'
inputEmail.placeholder = 'Email'
inputEmail.value = 'eve.holt@reqres.in'

inputPass.type = 'password'
inputPass.placeholder = 'Password'
inputPass.value = 'cityslicka'

submitBtn.innerHTML = 'Ingresar'

form.append(inputEmail, inputPass, submitBtn)
document.querySelector('body').append(form)

const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value,
    })),
    mergeMap( peticionHttpLogin),
    // switchMap( peticionHttpLogin),
    // exhaustMap( peticionHttpLogin)
)

submitForm$.subscribe(token => console.log(token))