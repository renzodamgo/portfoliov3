import { Document } from 'mongodb';

export interface MovieRes extends Document {
	_id: string;
	fullplot?: string | null;
	imdb: Imdb;
	year: number;
	plot: string;
	genres?: string[] | null;
	rated: string;
	metacritic: number;
	title: string;
	lastupdated: string;
	languages?: string[] | null;
	writers?: string[] | null;
	type: string;
	tomatoes: Tomatoes;
	poster: string;
	num_mflix_comments: number;
	released: string;
	awards: Awards;
	countries?: string[] | null;
	cast?: string[] | null;
	directors?: string[] | null;
	runtime: number;
}
export interface Imdb {
	rating: number;
	votes: number;
	id: number;
}
export interface Tomatoes {
	viewer: ViewerOrCritic;
	dvd: string;
	critic: ViewerOrCritic;
	lastUpdated: string;
	rotten: number;
	production: string;
	fresh: number;
	consensus?: string | null;
	website?: string | null;
	boxOffice?: string | null;
}
export interface ViewerOrCritic {
	rating: number;
	numReviews: number;
	meter: number;
}
export interface Awards {
	wins: number;
	nominations: number;
	text: string;
}
