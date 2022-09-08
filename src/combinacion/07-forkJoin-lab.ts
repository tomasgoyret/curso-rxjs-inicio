import { catchError, forkJoin, of } from "rxjs"
import { ajax } from "rxjs/ajax"

const GITHUB_API_URL = 'https://api.github.com/users'
const GITHUB_USER = 'tomasgoyret'


forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`),
        respos: ajax.getJSON(
            `${GITHUB_API_URL}/${GITHUB_USER}/repos`),
        gists: ajax.getJSON(
            `${GITHUB_API_URL}/${GITHUB_USER}/gists`),
}).pipe(
    catchError( err => of(err.message))
).subscribe( console.log)