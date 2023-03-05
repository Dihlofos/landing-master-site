import { BASE_URL } from '@/constants/index';
import type HttpService from '../http-service';

export interface ILandingShort {
	id: number;
	baseUrl: string;
	name: string;
	description: string;
}

export default class MainApi {
	constructor(private httpService: HttpService) {}

	async getLandings(): Promise<ILandingShort[]> {
		return this.httpService.get(`${BASE_URL}/site`);
	}

	async updateLanding(file: File): Promise<void> {
		this.httpService.put(`${BASE_URL}/site`, file);
	}

	async createLanding(file: File): Promise<void> {
		this.httpService.post(`${BASE_URL}/site`, file);
	}

	async deleteLanding(name: string): Promise<void> {
		this.httpService.delete(`${BASE_URL}/site/${name}`);
	}
}
