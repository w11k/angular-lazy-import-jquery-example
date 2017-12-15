// import statements are synchronous and ordered
// first import jQuery
import {jQuery} from './jquery-global';
// then import the plugin
import 'jquery-lazyload';

const $: any = jQuery;

export function activate() {
  $('img.lazy').lazyload();
}
