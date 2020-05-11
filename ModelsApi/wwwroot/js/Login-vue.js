
vm = new Vue({
	el: '#loginApp',
	data: {
		email: '',
		password: '',
		message: ''
	},
	methods: {
		loginApplication() {
			let login = {};
			login.email = this.email;
			login.password = this.password;
			fetch('/api/Account/login',
				{
					method: 'POST',
					body: JSON.stringify(login),
					headers: new Headers({
						'Content-Type': 'application/json'
					})
				}).then(res => res.json().then((token) => {
					localStorage.setItem("token", token.jwt);
				}
			).catch(error => console.error('Error:', error)));
		}
	}
})