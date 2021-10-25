

import Greet from "./Classes/greet";

export function main(){
    console.log("Webpack is Awesome. [Webing] " , VERSION );
    
    let g = new Greet();
    g.greet();
}

if (document.readyState === 'complete') {
    main()
} else {
    document.addEventListener('DOMContentLoaded', main);
}