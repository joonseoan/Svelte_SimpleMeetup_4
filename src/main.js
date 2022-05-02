import App from './App.svelte';

/**
 * Lets for say, index.html in public folder has the body elements like
 * 
 * <body>
 * 	<div id="header"></div>
 *  <div id="app"></div>
 * </body>
 * 
 */

// Under assumption of the one above,
// const header = new App({
// 	target: document.querySelector("#header")
// });

// const app = new App({
// 	target: document.querySelector("#app");
// })

// The ones above are two different projects that are not in the communication line.
// 1) reasoning 1 - This is a great approach if you are not building a SPA but want to add some
// widget-like elements into our page.
// For instance, Existing (server-side rendered) pages that you don't want 
// to turn in Svelte Single-Page-Apps - instead you might want to add some 
// dynamic elements (e.g. a Svelte-controlled Dropdown button)
// 2) reasoning 2 - Another reason for this approach is Web apps (SPA or not) 
// that are generally controlled via another framework or library 
// (e.g. via React) - you could still take over control of a part 
// of the page via Svelte components

// But we will use SPA here.

// ------------------------ 
const app = new App({
	target: document.body,
	// props: {
	// 	name: 'world'
	// }
});

export default app;