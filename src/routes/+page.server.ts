/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }: any) {
	const response = await fetch('data-api/rest/Post');
	const data = await response.json();
	return {
		data
	};
}
