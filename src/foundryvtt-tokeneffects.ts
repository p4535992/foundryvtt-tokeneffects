/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your module, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your module
 */
// Import JavaScript modules

// Import TypeScript modules
import { registerSettings } from './module/settings';
import { preloadTemplates } from './module/preloadTemplates';
import { MODULE_NAME } from './module/settings';
import { initHooks, readyHooks } from './module/Hooks';
// import { installedModules, setupModules } from './module/setupModules';
import { PointOfVision } from './module/point-of-vision';

export let debugEnabled = 0;
// 0 = none, warnings = 1, debug = 2, all = 3
export let debug = (...args) => {if (debugEnabled > 1) console.log(`DEBUG:${MODULE_NAME} | `, ...args)};
export let log = (...args) => console.log(`${MODULE_NAME} | `, ...args);
export let warn = (...args) => {if (debugEnabled > 0) console.warn(`${MODULE_NAME} | `, ...args)};
export let error = (...args) => console.error(`${MODULE_NAME} | `, ...args);
export let timelog = (...args) => warn(`${MODULE_NAME} | `, Date.now(), ...args);

export let i18n = key => {
  return game.i18n.localize(key);
};
export let i18nFormat = (key, data = {}) => {
  return game.i18n.format(key, data);
}

export let setDebugLevel = (debugText: string) => {
  debugEnabled = {"none": 0, "warn": 1, "debug": 2, "all": 3}[debugText] || 0;
  // 0 = none, warnings = 1, debug = 2, all = 3
  if (debugEnabled >= 3) CONFIG.debug.hooks = true;
}

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async () => {
	console.log(`${MODULE_NAME} | Initializing ${MODULE_NAME}`);

	// Register custom module settings
	registerSettings();

	initHooks();
	// Assign custom classes and constants here

	// Register custom module settings
	//registerSettings();
	//fetchParams();

	// Preload Handlebars templates
	await preloadTemplates();
	// Register custom sheets (if any)

});

/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function () {
	// Do anything after initialization but before ready
	// setupModules();

	registerSettings();

});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', () => {

	// Do anything once the module is ready
	if (!game.modules.get("lib-wrapper")?.active && game.user.isGM){
   	ui.notifications.error(`The '${MODULE_NAME}' module requires to install and activate the 'libWrapper' module.`);
		return;
	}
	if (game.modules.get("token-auras")?.active && game.user.isGM){
	  ui.notifications.warn(`The 'token-auras', is not needed anymore just use '${MODULE_NAME}'`);
	}
	if (game.modules.get("notokenanim")?.active && game.user.isGM){
	  ui.notifications.warn(`The 'notokenanim', is not needed anymore just use '${MODULE_NAME}'`);
	}
  	if (game.modules.get("coloredeffects")?.active && game.user.isGM){
	  ui.notifications.warn(`The 'coloredeffects', is not needed anymore just use '${MODULE_NAME}'`);
	}
  	if (game.modules.get("sheet-to-token")?.active && game.user.isGM){
	  ui.notifications.warn(`The 'sheet-to-token', is not needed anymore just use '${MODULE_NAME}'`);
	}
  	if (game.modules.get("point-of-vision")?.active && game.user.isGM){
	  ui.notifications.warn(`The 'point-of-vision', is not needed anymore just use '${MODULE_NAME}'`);
	}
	if (game.modules.get("token-vision-animation-world")?.active && game.user.isGM){
	  ui.notifications.warn(`The 'token-vision-animation-world', is not needed anymore just use '${MODULE_NAME}'`);
	}
	// if (game.modules.get("token-factions")?.active && game.user.isGM){
	//   ui.notifications.warn(`The 'token-factions', is not needed anymore just use '${MODULE_NAME}'`);
	// }
	readyHooks();
});

// Add any additional hooks if necessary

