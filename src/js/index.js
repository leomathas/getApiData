import "@babel/polyfill";


import {
	failedFetch,
	successFetch,
	postFetch,
	getFetch,
	PostGet
} from './asyncOptions/usingFetch';
import usingXhr from './asyncOptions/usingXhr';
import usingAsync from './asyncOptions/usingAsync';
import {
	axiosGetPosts,
	axiosPostPost,
	axiosMultiActions
} from './asyncOptions/usingAxios';

// Fetch API
// failedFetch();
// successFetch();
// postFetch();
// PostGet();

// XHR
// usingXhr();

// Async - Await
// cannot be at top level
// const asyncLoad = async () => {
// 	console.log(await usingAsync());
// }

// asyncLoad();

axiosMultiActions();