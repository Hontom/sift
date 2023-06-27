import ky from 'ky-universal';

const api = ky.create({ prefixUrl: 'https://api.anify.tv/' });

function bestFallback(artwork: Artwork[]): string {
	let newImg = '';

	for (let i = 0; i < artwork.length; i++) {
		if (artwork[i].providerId == 'mal') newImg = artwork[i].img;
		if (artwork[i].providerId == 'anilist') newImg = artwork[i].img;
		if (artwork[i].providerId == 'anilist' && artwork[i].img.includes('large'))
			newImg = artwork[i].img;
		if (artwork[i].providerId == 'kitsu' && artwork[i].type == 'poster') newImg = artwork[i].img;
	}

	return newImg;
}

interface Artwork {
	img: string;
	type: string;
	providerId: string;
}

export { api, bestFallback };
