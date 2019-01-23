
function AdminUserServiceClient() {
	this.createUser = createUser;
	this.findAllUsers = findAllUsers;
	this.findUserById = findUserById;
	this.deleteUser = deleteUser;
	this.updateUser = updateUser;
	this.searchUser = searchUser;
	this.url = 'http://localhost:8080/api/user';
	
	function createUser(user) {
		return fetch(this.url, {
			method: 'POST',
	    	headers : {
	    		'Content-Type' : 'application/json'
	    	},
	    	body: JSON.stringify(user)
		  })
		  .then(response => response.json());
	}
	function findAllUsers() {
		return fetch(this.url).then(function(response) {
			return response.json();
		});
	}
	function findUserById(userId) {
		return fetch(this.url + "/" + userId).then(function(response) {
			return response.json();
		});
	}
	function updateUser(userId, user) {
		return fetch(this.url + '/' + userId, {
		    method: 'PUT',
	    	headers : {
	    		'Content-Type' : 'application/json'
	    	},
	    	body: JSON.stringify(user)
		  })
		  .then(response => response.json());
	}
	function deleteUser(userId) {
		return fetch(this.url + '/' + userId, {
		    method: 'DELETE'
		})
		.then(response => {
			response.json()
		});
	}
	function searchUser(query) {
		return fetch(this.url, {
			method: "REQUEST",
			headers : {
	    		'Content-Type' : 'application/json'
	    	},
			body: JSON.stringify(query)
		})
		.then(response => {
			response.json()
		})
	}
}