package com.example.webdevsp19serverjava.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsp19serverjava.model.User;

@RestController
public class UserService {
	User alice = new User(123, "alice", "ALICE", "Alice", "Wonderland", "STUDENT");
	User bob = new User(234, "bob", "BOB", "Bob", "Marley", "FACULTY");
	User charlie = new User(345, "charlie", "CHARLIE", "Charlie", "Brown", "STUDENT");
	User dan = new User(456, "dan", "DAN", "Dan", "Bonker", "FACULTY");
	User[] users = { alice, bob, charlie, dan };

	@GetMapping("/api/user")
	public User[] findAllUser() {
		return users;
	}

	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable("userId") Integer id) {
		for (User user : users) {
			if (id == user.getId().intValue())
				return user;
		}
		return null;
	}

	@RequestMapping("api/user")
	public User[] searchUser(@RequestBody User query) {
		String username = query.getUsername();
		String password = query.getPassword();
		String firstName = query.getFirstName();
		String lastName = query.getLastName();
		String role = query.getRole();

		List<User> searchedUsers = new ArrayList<User>();

		for (int i = 0; i < users.length; i++) {
			searchedUsers.add(users[i]);
		}

		if (username != "") {
			for (int i = 0; i < searchedUsers.size(); i++) {
				User user = searchedUsers.get(i);
				if (!user.getUsername().equals(username))
					searchedUsers.remove(user);
			}
		}
		if (password != "") {
			for (int i = 0; i < searchedUsers.size(); i++) {
				User user = searchedUsers.get(i);
				if (!user.getPassword().equals(password))
					searchedUsers.remove(user);
			}
		}
		if (firstName != "") {
			for (int i = 0; i < searchedUsers.size(); i++) {
				User user = searchedUsers.get(i);
				if (!user.getFirstName().equals(firstName))
					searchedUsers.remove(user);
			}
		}
		if (lastName != "") {
			for (int i = 0; i < searchedUsers.size(); i++) {
				User user = searchedUsers.get(i);
				if (!user.getLastName().equals(lastName))
					searchedUsers.remove(user);
			}
		}
		if (role != "") {
			for (int i = 0; i < searchedUsers.size(); i++) {
				User user = searchedUsers.get(i);
				if (!user.getRole().equals(role))
					searchedUsers.remove(user);
			}
		}
		User[] newUsers = new User[searchedUsers.size()];
		for (int i = 0; i < searchedUsers.size(); i++) {
			newUsers[i] = searchedUsers.get(i);
		}
		return newUsers;
	}

	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		User[] newUsers = new User[users.length + 1];
		for (int i = 0; i < users.length; i++) {
			newUsers[i] = users[i];
		}
		int n = users.length;
		newUsers[n] = user;
		users = newUsers;

		return user;
	}

	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") Integer id) {
		for (User user : users) {
			if (id == user.getId().intValue()) {
				List<User> allUsers = new ArrayList<User>();

				for (int i = 0; i < users.length; i++) {
					allUsers.add(users[i]);
				}

				allUsers.remove(user);
				
				User[] newUsers = new User[allUsers.size()];
				for (int i = 0; i < allUsers.size(); i++) {
					newUsers[i] = allUsers.get(i);
				}
				users = newUsers;
			}
		}
	}

	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") Integer userId, @RequestBody User newUser) {
		int id = userId.intValue();

		for (int i = 0; i < users.length; i++) {
			User user = users[i];
			if (id == user.getId().intValue()) {
				List<User> allUsers = new ArrayList<User>();

				for (int j = 0; j < users.length; j++) {
					allUsers.add(users[i]);
				}
				allUsers.set(i, newUser);
				
				for (int j = 0; j < allUsers.size(); j++) {
					users[i] = allUsers.get(i);
				}
				break;
			}
			
		}
		return newUser;
	}
}