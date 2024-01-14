import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		dark: true,
		options: {
			customProperties: true,
		},
		themes: {
			dark: {
				"primary": "#4CAF50",
				"secondary": "#81C784",
				"accent": "#689F38",
				"error": "#FF5252",
				"info": "#2196F3",
				"success": "#4CAF50",
				"warning": "#FFC107",
				"background": "#1B5E20",
				"surface": "#388E3C",
				"onPrimary": "#ffffff",
				"onSecondary": "#000000",
				"onBackground": "#ffffff",
				"onSurface": "#ffffff",
				"onError": "#ffffff",
				"border": "#1B5E20"
			},
		}
	}
});
