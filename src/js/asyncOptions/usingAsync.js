// Async-Await needs polyfill as a dependancy in webpack

const asyncRequest = async function () {

	let getPost1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
	let post1toJson = getPost1.json();

	// OR
	// let post1toJson = (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();

	// console.log(await post1toJson);
	return post1toJson;
}

export default asyncRequest;