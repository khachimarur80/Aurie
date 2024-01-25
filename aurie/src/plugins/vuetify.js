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
				"primary": "#FFD95A",
				"secondary": "#C07F00",
				"accent": "#FFF7D4",
				"background": "#4C3D3D",
			},
		}

	}
});
