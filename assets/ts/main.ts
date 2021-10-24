import Greet from "./Classes/greet";

let el: HTMLElement;

export function main(){
    let s = new Greet();
    s.greet();    

    el = document.querySelector('#ts');
    el.classList.remove('working');
}

if (document.readyState === 'complete') {
    main()
} else {
    document.addEventListener('DOMContentLoaded', main);
}