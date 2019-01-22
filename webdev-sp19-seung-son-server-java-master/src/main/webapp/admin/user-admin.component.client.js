(function() {
	var $usernameFld, $passwordFld, $firstNameFld, $lastNameFld, $roleFld;
	var $removeBtn, $editBtn, $createBtn, $updateBtn;
	var $userRowTemplate, $tbody;
	var userService = new AdminUserServiceClient();
	$(main);

	function main() {
		$usernameFld = $("#usernameFld");
		$passwordFld = $("#passwordFld");
		$firstNameFld = $("#firstNameFld");
		$lastNameFld = $("#lastNameFld");
		$roleFld = $("#roleFld")
		$removeBtn = $("#wbdv-remove");
		$editBtn = $("#wbdv-edit");
		$updateBtn = $(".wbdv-update");
		$createBtn = $(".wbdv-create");
		$userRowTemplate = $(".wbdv-template");
		$tbody = $("tbody");

		findAllUsers();
		
		$removeBtn.click(deleteUser);
		$editBtn.click(findUserById);
		$updateBtn.click(updateUser);
		$createBtn.click(createUser);
	}
	function createUser() {
		const user = {
				username: $usernameFld,
				password: $passwordFld,
				firstName: $firstNameFld,
				lastName: $lastNameFld,
				role: $roleFld
		}
		userService.createUser(user);
		findAllUsers();
	}
	function findAllUsers() {
		//TODO: find clicked id
		return userService.findAllUsers().then(renderUsers);
	}
	function findUserById() {
		const id = $(this).closest('table').attr('id')
		return userService.findUserById(id)
	}
	function updateUser() {
		//TODO: find clicked id
		return userService.updateUser($)
	}
	function deleteUser() {
		//TODO: find clicked id
		return userService.deleteUser($)
	}
	function renderUser(user) {
		$username = user.username;
		$password = user.password;
		$firstName = user.firstName;
		$lastName = user.lastName;
		$role = user.role;
	}
	function renderUsers(users) {
		for (var u = 0; u < users.length; u++) {
			console.log(users[u]);
			var clone = $userRowTemplate.clone();
			clone.find(".username").html(users[u].username);
			clone.find(".password").html(users[u].firstName);
			clone.find(".firstName").html(users[u].firstName);
			clone.find(".lastName").html(users[u].firstName);
			clone.find(".role").html(users[u].firstName);
			$tbody.append(clone);
		}
	}
})();