function AdminUserServiceClient() {
	this.createUser = createUser;
	this.findAllUsers = findAllUsers;
	this.findUserById = findUserById;
	this.deleteUser = deleteUser;
	this.updateUser = updateUser;
	this.url = 'http://localhost:8080/api/user';
	var self = this;
	function createUser(user) {
		return fetch(url + '/' + userId, {
		    method: 'PUT'
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
		return fetch(url + '/' + userId, {
		    method: 'PUT',
	    	body: JSON.stringify(user)
		  })
		  .then(response => response.json());
	}
	function deleteUser(userId) {
		return fetch(url + '/' + userId, {
		    method: 'DELETE'
		  })
		  .then(response => response.json());
	}
}