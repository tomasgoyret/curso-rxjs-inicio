import { Observable, Observer } from 'rxjs';

console.log('Hola Mundo!');

const observer: Observer<any> = {
    next: value => console.log('siguiente [value]' , value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('completado [obs]')
}

const obs$ = new Observable<string>( subs => {
    subs.next('Hola')
    subs.next('Mundo')
    subs.complete()
}
)

obs$.subscribe(observer)





