// load jQuery
import * as $ from 'jquery';

// and make it available globally like without a module system
(window as any).jQuery = $;
(window as any).$ = $;

// re-export
export const jQuery = $;

// this module will be loaded once
// the export will be shared among all the lazy loaded modules
