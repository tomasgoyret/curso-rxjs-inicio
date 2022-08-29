import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next', value),
    error: error => console.warn('error', error),
    complete: () => console.log('completado')
}

const interval$ = new Observable ( subs => {
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


const subs1 = interval$.subscribe((num)=> console.log('Num', num))
const subs2 = interval$.subscribe((num)=> console.log('Num', num))
const subs3 = interval$.subscribe((num)=> console.log('Num', num))

setTimeout(()=> {
    subs1.unsubscribe()
    subs2.unsubscribe()
    subs3.unsubscribe()

    console.log('Completado timeout');
}, 6000)