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
				primary: '#FF5252',
				secondary: '#FF8A80',
				accent: '#607D8B',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107',

				background: '#121212',
				surface: '#212121',
				onPrimary: '#ffffff',
				onSecondary: '#000000', 
				onBackground: '#ffffff',
				onSurface: '#ffffff', 
				onError: '#ffffff',

				border: '#37474F',
			},
		}
	}
});
