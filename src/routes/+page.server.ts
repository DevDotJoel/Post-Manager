/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }: any) {
	const response = await fetch('/data-api/rest/Post');
	const persons = await response.json();
	console.log(persons);
	return {
		persons
	};
}
