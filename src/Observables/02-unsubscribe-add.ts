import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.log('completado')
}

const interval$ = new Observable<number> ( subs => {
    let time = 0
    const interval = setInterval(() => {
        time = time + 1
        subs.next(time)
        console.log(time)
    }, 1000)

    setTimeout(()=> {
        subs.complete()
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
        
    }
})


const subs1 = interval$.subscribe(observer)
const subs2 = interval$.subscribe(observer)
const subs3 = interval$.subscribe(observer)

subs1.add(subs2)
     //.add(subs3) //TODO: Deprecado? 

setTimeout(()=> {
    subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    console.log('Completado timeout');
}, 6000)