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
		$searchBtn = $("#wbdv-search");
		$removeBtn = $("#wbdv-remove");
		$editBtn = $("#wbdv-edit");
		$createBtn = $(".wbdv-create");
		$userRowTemplate = $(".wbdv-template");
		$tbody = $(".wbdv-tbody");

		findAllUsers();

		$searchBtn.click(searchUsers);
		$createBtn.click(createUser);
	}
	function createUser(event) {
		//required because getTime() can't be stored in an integer
		var generatedId = parseInt(((new Date()).getTime()).toString().substring(4));

		const user = {
			id : generatedId,
			username : $usernameFld.val(),
			password : $passwordFld.val(),
			firstName : $firstNameFld.val(),
			lastName : $lastNameFld.val(),
			role : $roleFld.val()
		}
		console.log(user);
		userService.createUser(user).then(findAllUsers)
		
	}
	function findAllUsers() {
		return userService.findAllUsers().then(renderUsers);
	}
	function findUserById(event) {
		editIcon = event.currentTarget
		editIcon = $(editIcon)
		id = editIcon.attr("id")
		var user = userService.findUserById(id).then((response) =>{
			renderUser(response);
		})
		
		$updateIcon = $(".wbdv-update");
		$updateIcon.attr("id", id)
		$updateIcon.click(updateUser)
	}
	function updateUser(event) {
		updateIcon = event.currentTarget
		$updateIcon = $(updateIcon)
		oldId = $updateIcon.attr("id")

		const user = {
			id : oldId,
			username : $usernameFld.val(),
			password : $passwordFld.val(),
			firstName : $firstNameFld.val(),
			lastName : $lastNameFld.val(),
			role : $roleFld.val()
		}
		userService.updateUser(oldId, user).then(findAllUsers);
	}
	function deleteUser(event) {
		deleteIcon = event.currentTarget
		$deleteIcon = $(deleteIcon)
		id = $deleteIcon.attr("id")
		userService.deleteUser(id).then(findAllUsers)
	}
	function renderUser(user) {
		$usernameFld.val(user.username);
		$passwordFld.val(user.password);
		$firstNameFld.val(user.firstName);
		$lastNameFld.val(user.lastName);
		$roleFld.val(user.role);
	}
	function renderUsers(users) {
		$tbody.empty();
		for (var u = 0; u < users.length; u++) {
			var $clone = $userRowTemplate.clone();
			$clone.find(".wbdv-username").html(users[u].username);
			$clone.find(".wbdv-first-name").html(users[u].firstName);
			$clone.find(".wbdv-last-name").html(users[u].lastName);
			$clone.find(".wbdv-role").html(users[u].role);
			$tbody.append($clone);

			$deleteIcon = $clone.find(".wbdv-remove")
			$deleteIcon.attr("id", users[u].id)
			$deleteIcon.click(deleteUser)

			$editIcon = $clone.find(".wbdv-edit")
			$editIcon.attr("id", users[u].id)
			$editIcon.click(findUserById);
		}
	}
	function searchUsers() {
		const query = {
			id : 0,
			username : $usernameFld,
			password : $passwordFld,
			firstName : $firstNameFld,
			lastName : $lastNameFld,
			role : $roleFld
		}
		userService.searchUsers(query).then(renderUsers);
	}
})();