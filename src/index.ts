import { debounceTime, fromEvent, map, mergeAll, mergeMap, Observable, pluck } from "rxjs"
import { ajax } from "rxjs/ajax"
import { GitHubUser, GitHubUsers } from "./interfaces/interfaces"

const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append( textInput, orderList)

//Helpers

const mostrarUsuarios = ( usuarios) => {
    console.log(usuarios);

    orderList.innerHTML='';

    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url
        const anchor = document.createElement('a')
        anchor.href = usuario.html_url
        anchor.text = 'Ver página';
        anchor.target = '_blank'

        li.append( img )
        li.append ( usuario.login + ' ')
        li.append( anchor );

        orderList.append(li)

    }
    
}

const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup')

input$.pipe(
    debounceTime<KeyboardEvent>(500), // recibe y devuelve keyboard event
    pluck<KeyboardEvent>( 'target', 'value'), // recibe keyboard event pero te devuelve un unknow si no lo tipamos
    mergeMap<unknown,Observable<GitHubUsers>>( texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    pluck<GitHubUsers>('items') //    pluck<GitHubUsers[]>('items')

)//.subscribe( mostrarUsuarios )

const url = 'https://httpbin.org/delay/1?arg='

input$.pipe(
    pluck('target', 'value'),
    mergeMap( texto => ajax.getJSON( url + texto )) // no seria conveniente en este caso usar merge map por que hacen muchas peticiones 
).subscribe( console.log )


