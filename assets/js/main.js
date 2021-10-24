

import Greet from "./Classes/greet";

export function main(){
    console.log("Webpack is Awesome. [Webing] " , VERSION );
    
    document.querySelector('#js').classList.remove('working');
    let g = new Greet();
    g.greet();
}

if (document.readyState === 'complete') {
    main()
} else {
    document.addEventListener('DOMContentLoaded', main);
}