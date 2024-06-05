/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }: any) {
	console.log(url.href + 'data-api/rest/Post');
	const response = await fetch(url.href + 'data-api/rest/Post');
	const persons = await response.json();
	return {
		persons
	};
}
