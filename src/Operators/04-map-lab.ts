import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div')
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere, libero id blandit gravida, metus felis mattis lacus, ac hendrerit elit odio in ipsum. Integer tempus leo ante, sed sodales lorem sagittis non. Maecenas congue tristique laoreet. Sed volutpat ornare nulla, vel maximus sem finibus id. Fusce facilisis eleifend molestie. Duis et facilisis erat, ac placerat urna. Aliquam maximus ligula vel est vulputate pellentesque. Mauris congue sed elit in consequat. Fusce ullamcorper nibh dui, sit amet rhoncus dui ornare et. Aliquam eu orci mi. In eleifend enim rhoncus nibh sagittis, sit amet vestibulum lacus interdum.
<br/><br/>
In porta placerat purus, non dictum velit interdum id. Nunc in consectetur est. Curabitur posuere justo a lectus hendrerit pharetra. Donec quis suscipit est, a iaculis justo. Duis finibus enim et ex dictum dapibus. Sed volutpat dolor eget hendrerit cursus. Mauris a molestie dolor, quis malesuada felis. Ut egestas sagittis nunc, eget volutpat quam bibendum sit amet. Suspendisse vestibulum ipsum interdum est tempus vulputate. Nunc rutrum pellentesque nisi, in fringilla dolor malesuada quis. Sed hendrerit quam est. Fusce lobortis tristique eros, eget finibus quam fringilla vel. Vestibulum eget ultricies ante. Etiam sit amet risus nec felis tristique ultricies tempus quis purus. Vivamus elit felis, sagittis et dictum ac, rutrum quis dolor. Etiam in tristique risus.
<br/><br/>
Aliquam varius pellentesque placerat. Pellentesque vulputate placerat elit, ut tempor odio vestibulum euismod. Nunc congue nibh quis sodales varius. Pellentesque ut magna vitae nunc cursus rutrum. Duis imperdiet nibh nec neque feugiat, vel ultricies velit mollis. Aenean tincidunt dapibus dui eu bibendum. Vestibulum porta ullamcorper enim, nec pharetra nisi mollis ac. Mauris eleifend nisi risus, in ultricies dolor ultricies quis. Cras tristique lectus vitae sapien ultrices, sed varius massa aliquet. Duis at condimentum est. Quisque sed ante ac sem dignissim vehicula. Sed id mattis neque. Donec et lorem sit amet sem vehicula commodo. Mauris ultrices bibendum ligula at accumsan. Curabitur mauris nibh, interdum eget ornare a, volutpat a libero. Nam ullamcorper mollis dui, non feugiat mauris iaculis id.
<br/><br/>
Duis porta risus dolor, eu sagittis purus consequat eget. Donec venenatis ullamcorper urna nec sagittis. Vivamus in consectetur elit. Vivamus eu nunc magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi id nisl sed lacus placerat ultricies. Vestibulum venenatis dolor eu ante vulputate convallis. Pellentesque suscipit condimentum rutrum. Phasellus varius iaculis arcu sit amet placerat. Suspendisse vel auctor turpis, non fermentum lectus.
<br/><br/>
Nullam vulputate condimentum imperdiet. Suspendisse euismod metus ac auctor egestas. Nam risus dui, porta non volutpat eget, porttitor id mauris. Cras venenatis orci in libero vestibulum fringilla. Fusce hendrerit felis sed mollis auctor. Aliquam et suscipit metus, at sollicitudin purus. Vivamus convallis id neque ac consequat. Maecenas accumsan mollis lorem, mollis imperdiet nunc accumsan quis. Nulla convallis tortor neque, et pharetra orci maximus sit amet. Duis interdum posuere tortor pulvinar volutpat. Ut semper, erat nec molestie venenatis, magna tellus ultrices erat, vitae interdum enim massa vel dui. Nam porttitor dolor sapien, sit amet blandit odio malesuada sed. Nulla et eros velit. Vestibulum quam leo, tincidunt quis dui non, lobortis tincidunt mauris. Aliquam ex quam, interdum at massa non, condimentum sollicitudin mauris.`

const body = document.querySelector('body')
body.append(texto)

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar)

//funcion que haga el calculo

const calcularPorcentajeScroll = (event)=> {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / (scrollHeight - clientHeight)) * 100;
    
}

//Streams

const scroll$ = fromEvent( document, 'scroll')

const progress$ = scroll$.pipe(
    map( event => calcularPorcentajeScroll(event) ),
    //map( calcularPorcentajeScroll )
    tap( console.log)
);

progress$.subscribe((porcentaje) => {
    progressBar.style.width = `${porcentaje}%`
})