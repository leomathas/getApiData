import axios from 'axios';

const axiosGetPosts = () => {
	axios.get('https://jsonplaceholder.typicode.com/postses')
		.then(function (response) {
			// handle success
			console.log('response: ', response);
		})
		.catch(function (error) {
			// handle error
			console.log('error: ', error);
		})
		.then(function () {
			// always executed
		});
}
const axiosPostPost = () => {
	axios.post('https://jsonplaceholder.typicode.com/posts', {
			title: 'Posted Title',
			body: 'This is some random body i posted',
			userId: 1
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}
const axiosMultiActions = () => {
	axios.all([axiosGetPosts(), axiosPostPost()])
		.then(axios.spread(function (acct, perms) {
			// Both requests are now complete
			console.log('both axios actions are complete');
		}));
}
export {
	axiosGetPosts,
	axiosPostPost,
	axiosMultiActions
};