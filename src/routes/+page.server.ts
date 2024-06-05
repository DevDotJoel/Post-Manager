/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }: any) {
	console.log(url.href + 'data-api/rest/Post');
	const response = await fetch(url.href + 'data-api/rest/Post');
	const data = await response.json();
	const persons = data.value;
	return {
		persons
	};
}
