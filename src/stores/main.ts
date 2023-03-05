import type { ILandingShort } from '@/services/api';
import { defineStore } from 'pinia';

interface IMainState {
	landings: ILandingShort[];
	loading: boolean;
}

const useLandingsStore = defineStore({
	id: 'main',

	state: (): IMainState => ({
		landings: [],
		loading: false,
	}),

	actions: {
		async fetchLandings() {
			try {
				this.loading = true;
				this.landings = await this.apiService.mainApi.getLandings();
			} catch (e: unknown) {
				console.error('fetchLandings error: ', e);
			} finally {
				this.loading = false;
			}
		},

		async updateLanding(file: File) {
			try {
				this.loading = true;
				this.apiService.mainApi.updateLanding(file);
			} catch (e: unknown) {
				console.error('updateLanding error:', e);
			} finally {
				this.loading = false;
			}
		},

		async createLanding(file: File) {
			try {
				this.loading = true;
				this.apiService.mainApi.createLanding(file);
			} catch (e: unknown) {
				console.error('createLanding error:', e);
			} finally {
				this.loading = false;
			}
		},

		async deleteLanding(name: string) {
			try {
				this.loading = true;
				this.apiService.mainApi.deleteLanding(name);
			} catch (e: unknown) {
				console.error('deleteLanding error', e);
			} finally {
				this.loading = false;
			}
		},
	},
});

export default useLandingsStore;
