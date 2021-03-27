import { debug, log, setDebugLevel, warn, i18n } from '../foundryvtt-tokeneffects';
//@ts-ignore
import ColorSetting from '../../colorsettings/colorSetting.js';
export const MODULE_NAME = 'foundryvtt-tokeneffects';

export const registerSettings = function () {

  // ================================
  // COLORED EFFECTS
  // ================================

  game.settings.register(MODULE_NAME, "coloredEffectsEnabled", {
		name: i18n(MODULE_NAME+".coloredEffectsEnabled.name"),
    hint: i18n(MODULE_NAME+".coloredEffectsEnabled.hint"),
		default: false,
		type: Boolean,
		scope: "world",
		config: true
	});

  

  //game.settings.register(MODULE_NAME, "overlayColor", {
  new ColorSetting(MODULE_NAME, "overlayColor", {
    label: "Pick color",
    restricted: false,
    defaultColor: hexToRGBAString(0x43DFDF, 1),

    name: i18n(MODULE_NAME+".overlayColor.name"),
    hint: i18n(MODULE_NAME+".overlayColor.hint"),
    scope: "world",
    config: true,
    default: "ffffff",
    type: String
  });

  game.settings.register(MODULE_NAME, "overlayAlpha", {
    name: i18n(MODULE_NAME+".overlayAlpha.name"),
    hint: i18n(MODULE_NAME+".overlayAlpha.hint"),
    scope: "world",
    config: true,
    type: Number,
    range: {
        min: 0.0,
        max: 1.0,
        step: 0.01
    },
    default: 0.8
  });

  //game.settings.register(MODULE_NAME, "statusBackgroundColor", {
  new ColorSetting(MODULE_NAME, "statusBackgroundColor", {
    label: "Pick color",
    restricted: false,
    defaultColor: hexToRGBAString(0x43DFDF, 1),

    name: i18n(MODULE_NAME+".statusBackgroundColor.name"),
    hint: i18n(MODULE_NAME+".statusBackgroundColor.hint"),
    scope: "world",
    config: true,
    default: "000000",
    type: String
  });

  game.settings.register(MODULE_NAME, "statusBackgroundAlpha", {
    name: i18n(MODULE_NAME+".statusBackgroundAlpha.name"),
    hint: i18n(MODULE_NAME+".statusBackgroundAlpha.hint"),
    scope: "world",
    config: true,
    type: Number,
    range: {
        min: 0.0,
        max: 1.0,
        step: 0.01
    },
    default: 0.4
  });

  //game.settings.register(MODULE_NAME, "statusBorderColor", {
  new ColorSetting(MODULE_NAME, "statusBorderColor", {
    label: "Pick color",
    restricted: false,
    defaultColor: hexToRGBAString(0x43DFDF, 1),

    name: i18n(MODULE_NAME+".statusBorderColor.name"),
    hint: i18n(MODULE_NAME+".statusBorderColor.hint"),
    scope: "world",
    config: true,
    default: "000000",
    type: String
  });

  game.settings.register(MODULE_NAME, "statusBorderWidth", {
    name: i18n(MODULE_NAME+".statusBorderWidth.name"),
    hint: i18n(MODULE_NAME+".statusBorderWidth.hint"),
    scope: "world",
    config: true,
    default: 1,
    type: Number
  });

  //game.settings.register(MODULE_NAME, "statusColor", {
  new ColorSetting(MODULE_NAME, "statusColor", {
    label: "Pick color",
    restricted: false,
    defaultColor: hexToRGBAString(0x43DFDF, 1),

    name: i18n(MODULE_NAME+".statusColor.name"),
    hint: i18n(MODULE_NAME+".statusColor.hint"),
    scope: "world",
    config: true,
    default: "000000",
    type: String
  });

  game.settings.register(MODULE_NAME, "statusAlpha", {
    name: i18n(MODULE_NAME+".statusAlpha.name"),
    hint: i18n(MODULE_NAME+".statusAlpha.hint"),
    scope: "world",
    config: true,
    type: Number,
    range: {
        min: 0.0,
        max: 1.0,
        step: 0.01
    },
    default: 1.0
  });  

  // ================================
  // NO TOKEN ANIMATION
  // ================================

  game.settings.register(MODULE_NAME, "notokenanimEnabled", {
		name: i18n(MODULE_NAME+".notokenanimEnabled.name"),
    hint: i18n(MODULE_NAME+".notokenanimEnabled.hint"),
		default: false,
		type: Boolean,
		scope: 'world',
		config: true
	});

  // ================================
  // TOKEN AURAS
  // ================================

  game.settings.register(MODULE_NAME, "aurasEnabled", {
		name: i18n(MODULE_NAME+".aurasEnabled.name"),
    hint: i18n(MODULE_NAME+".aurasEnabled.hint"),
		default: false,
		type: Boolean,
		scope: 'client',
		config: true
	});

  // ================================
  // SHEET TO TOKEN
  // ================================

  game.settings.register(MODULE_NAME, "sheetToTokenEnabled", {
		name: i18n(MODULE_NAME+".sheetToTokenEnabled.name"),
    hint: i18n(MODULE_NAME+".sheetToTokenEnabled.hint"),
		default: false,
		type: Boolean,
		scope: 'world',
		config: true
	});

  // ================================
  // POINT OF VISION (STILL NEED DEVELOPING)
  // ================================

  // game.settings.register(MODULE_NAME, "pointOfVisionEnabled", {
	// 	name: i18n(MODULE_NAME+".pointOfVisionEnabled.name"),
  //   hint: i18n(MODULE_NAME+".pointOfVisionEnabled.hint"),
	// 	default: false,
	// 	type: Boolean,
	// 	scope: 'world',
	// 	config: true
	// });

  // ================================
  // Token Vision Animation
  // ================================

  game.settings.register(MODULE_NAME, "tokenVisionAnimationWorldEnabled", {
    name: i18n(MODULE_NAME+".tokenVisionAnimationWorldEnabled.name"),
    hint: i18n(MODULE_NAME+".tokenVisionAnimationWorldEnabled.hint"),
    default: false,
    type: Boolean,
    scope: 'world',
    config: true
  });
  

}

// function setup(templateSettings) {
// 	templateSettings.settings().forEach(setting => {
// 		let options = {
// 			name: i18n(templateSettings.name()+"."+setting.name+'.Name'),
// 			hint: i18n(`${templateSettings.name()}.${setting.name}.Hint`),
// 			scope: setting.scope,
// 			config: true,
// 			default: setting.default,
// 			type: setting.type,
// 			choices: {}
// 		};
// 		if (setting.choices) options.choices = setting.choices;
// 		game.settings.register(templateSettings.name(), setting.name, options);
// 	});
// }
