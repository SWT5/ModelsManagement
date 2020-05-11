var url = "https://yourUrl";
fetch(url, {
	method: 'GET', //or POST, PUT, DELETE
	credentials: 'include',
	headers: {
		'Authorization': 'Bearer ' + localStorage.getItem("token"),
		'Content Type': 'application/json'
	}
	}).then(responseJson => {
		var items = JSON.parse(responseJson);
	})
	.catch(error => ThisParameterType.setState({
		isLoading: false,
		message: 'Something bad happened ' + error
	}));