# todo_fancy

List of routes user:

| **Route** | **HTTP** | **Description** | **Parameters**            |
| --------- | -------- | --------------- | ------------------------- |
| /signup   | POST     | Signup new user | fullname, email, password |
| /signin   | POST     | Signin user     | email, password           |

List of routes sticker:

| **Route**     | **HTTP** | **Description** | **Parameters** |
| ------------- | -------- | --------------- | -------------- |
| /todo         | GET      | Get all task    |                |
| /todo         | POST     | Add new task    |                |
| /todo/:id | delete   | delete task     |                |
| /todo/:id | put      | edit a task     |                |
