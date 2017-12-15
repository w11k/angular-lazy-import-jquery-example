// import statements are synchronous and ordered
// first import jQuery
import {jQuery} from './jquery-global';
// then import the plugin
import 'rangeslider.js';

const $: any = jQuery;

export function activate() {
  $('input[type="range"]').rangeslider();
}
