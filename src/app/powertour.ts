
// variant 1 does not work because jQuery is loaded as a module and therefore not available globally
// import 'jquery';
// import 'jquery-lazyload';
//
// declare let $: any;
// $('img.lazy').lazyload();


// variant 2: works but has to load two chunks

// load jQuery and make it available globally like without module system
import * as jQuery from 'jquery';

(window as any).jQuery = jQuery;
// (window as any).$ = jQuery;
const $: any = jQuery;

const lazyload = import('jquery-lazyload');

export async function activate() {
  await lazyload;
  $('img.lazy').lazyload();
}
