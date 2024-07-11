This is a simple to-do list application built with React that allows users to manage their tasks efficiently. Users can add new tasks, mark them as complete, delete tasks, and filter tasks based on their status. The app also features a dark/light mode toggle for a customizable user experience. It uses json-server to handle task data and React-modal for modal dialogs.

### Features
* Fetch and display to-do notes: Retrieve tasks from a server and display them in the app.
* Filter displayed to-do notes: Use the search bar and dropdown filter to display all tasks, completed tasks, or incomplete tasks (Client-side filtering).
* Mark to-do as completed: Mark tasks as completed with a checkbox.
* Delete a to-do: Remove tasks from the list.
* Create a new to-do: Add new tasks to the list.
* Toggle dark/light scheme: Switch between dark and light modes for a better visual experience.

### Prerequisites
* Node.js and npm installed on your machine.
* json-server installed globally or locally in your project.
### Getting Started

1.Clone the repository: git clone https://github.com/GKitsos90/todolistapp

2.Navigate to the project directory: cd new-todo-list-app

3.Install the dependencies: npm install

4.Start the development server: npm run dev

5.Start the JSON server: npx json-server http://localhost:3000

### Acknowledgments
* React-modal for handling modal dialogs.
* json-server for providing an way to create a fake REST API.
