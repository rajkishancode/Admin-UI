### Admin User Management Interface

This project is a web application built using React and Tailwind CSS for managing user information. It provides a user-friendly interface to add, view, edit, and delete user details, with functionalities such as search, pagination, and bulk deletion.
Features

    -Search: Filter users by name, email, or role.
    -Pagination: Navigate through users with buttons for first, previous, next, and last pages.
    -Edit and Delete: Edit or delete individual users directly in the table.
    -Bulk Delete: Select multiple users and delete them in one go.
    -Select All: Select or deselect all users on the current page.


### API Reference
## Get All Users
GET https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json

Response Example:
```
[
  {
    "id": "1",
    "name": "Aaron Miles",
    "email": "aaron@mailinator.com",
    "role": "member"
  },
  {
    "id": "2",
    "name": "Aishwarya Naik",
    "email": "aishwarya@mailinator.com",
    "role": "member"
  },
  {
    "id": "3",
    "name": "Arvind Kumar",
    "email": "arvind@mailinator.com",
    "role": "admin"
  }
]
```

### Project Setup
## Prerequisites

    -Node.js and npm
    -Yarn
    -React

## Installation

    -Clone the repository and install dependencies:

    ```
    git clone https://github.com/yourusername/admin-user-management-interface.git
    cd admin-user-management-interface
    yarn install
   ```
### Running the Application

## Start the development server:

    ```
    yarn start

    ```
    -The application will be available at http://localhost:3000.

## File Structure

your-project/
├── src/
│   ├── api/
│   │   └── users.js
│   ├── components/
│   │   ├── Pagination.jsx
│   │   ├── UserRow.jsx
│   │   └── UserTable.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
├── public/
│   ├── index.html
│   └── ...
├── package.json
├── README.md
└── yarn.lock


### JSON Structure of a User

```
{
  "id": "1",
  "name": "Aaron Miles",
  "email": "aaron@mailinator.com",
  "role": "member"
}

```