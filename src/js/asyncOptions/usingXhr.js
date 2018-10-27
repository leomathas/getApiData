const xhr = new XMLHttpRequest();

// Setup our listener to process compeleted requests
xhr.onreadystatechange = () => {

	// Only run if the request is complete
	if (xhr.readyState !== 4) return;

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		console.log('success', JSON.parse(xhr.responseText));
	} else {
		// What to do when the request has failed
		console.log('error', xhr);
	}

};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');


const usingXhr = () => {
	xhr.send();
}

export default usingXhr;