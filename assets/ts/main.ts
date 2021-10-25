import Greet from "./Classes/greet";

export function main(){
    let s = new Greet();
    s.greet();    
}

if (document.readyState === 'complete') {
    main()
} else {
    document.addEventListener('DOMContentLoaded', main);
}