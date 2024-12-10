# Homework Tracker Application

## Table of Contents
- [Project Objective](#project-objective)
- [Introduction](#introduction)
- [Features](#features)
- [Software Used](#software-used)
- [Setting Up](#setting-up)
    - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)

---

## Project Objective
Create a professional and responsive web aplication using Node.js. This project will allow you to demonstrate your understanding of routing, templating, database interactions, and best practives for building scalable applications.

---

## Introduction
Homework Tracker is a Node.js application designed to help users organize and track their homework. This tool is helpful for students to prioritize and manage deadlines of their assignments efficiently. 

This allows user to:
- Track their homework assignments by selecting due date and time
- Mark priorities for assignments
- Remove tasks once completed

---

## Features
- Home page navigation to enter classes, add homework, and a table to view homework list
- Add homework with class details, due dates, and if it's a priority
- Mark completed homework and remove them from the list
- A '⭐' indicator for priority homework
- Organized the homework by when it was created

---

## Software Used
- **Backend and Frontend**: VS Code - Node.js, Express.js, EJS, HTML5
- **Database**: MariaDB, MySQL Workbench

---

## Setting Up

### Installation
1. Fork and clone this repository:
    ```bash
    git clone <copy URL>
    ```

2. Navigate to the project directory:
```bash
    cd homeworkManager
```

3. Install dependecies:
```bash
    npm install
```

4. Run through server:
```bash
    npm app.js
    npx nodemon
```

5. Click the link `http://localhost:3000` on your terminal.

---

## Usage
- Explore home page navigation. We recommend you to enter classes first.
- Fill out the details for your homework.
- Click on "Remove Checked Homework" to deleted completed tasks.

---

## Contributing
Contributions are welcome! Please follow these steps to contribute to this project:
1. Fork this repository.
2. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add a meaningful message"
    ```
4. Push the branch to your fork:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

---

## Authors
- ** Juno A.** - [Github Profile](https://github.com/arcjun01)
- ** Liza K.** - [Github Profile](https://github.com/Lizock)

## License
This project is licensed under the [MIT License](LICENSE).

---

## Looking Forward
- Be able to select different colors for each class and display on the homework list
- Be able to edit your entries in the table
- Experiment with more innovative features
