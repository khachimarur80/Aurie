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
				"primary": "#41B883",
				"secondary": "#61C495",
				"accent": "#558B2F",
				"error": "#FF6F61",
				"info": "#5C6BC0",
				"success": "#2196F3",
				"warning": "#FFD54F",
				"background": "#121212",
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
