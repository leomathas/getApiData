const handleResponse = function (response) {
	return response.json()
		.then(function (json) {
			if (response.ok) {
				return json;
			} else {
				return Promise.reject(response);
			}
		});
};

const failedFetch = () => {
	fetch('https://jsonplaceholder.typicode.com/postses')
		.then(handleResponse)
		.then(function (data) {
			console.log('success', data);
		})
		.catch(function (error) {
			console.log('error', error);
		});
}

const successFetch = () => {
	fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then(handleResponse)
		.then(function (data) {
			console.log('success', data);
		})
		.catch(function (error) {
			console.log('error', error);
		});
}

const postFetch = () => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'Posted Title',
				body: 'This is some random body i posted',
				userId: 1
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(handleResponse)
		.then(function (data) {
			console.log('success', data);
		})
		.catch(function (error) {
			console.log('error', error);
		});
}
const getFetch = (postId) => {
	fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then(handleResponse)
		.then(function (data) {
			console.log('success', data);
		})
		.catch(function (error) {
			console.log('error', error);
		});
}

const PostGet = () => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'Posted Title',
				body: 'This is some random body i posted',
				userId: 1
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(handleResponse)
		.then(function (data) {
			console.log('response from get request ', data);
			return 100;
		})
		.then(
			function (kati) {
				getFetch(kati);
			}
		)
	// .then(
	// 	console.log(data.body.postId)
	// )
}
export {
	failedFetch,
	successFetch,
	postFetch,
	getFetch,
	PostGet
};