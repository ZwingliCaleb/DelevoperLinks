# Backend for Professional Link Sharing App

This backend handles APIs for user management and data storage for the Professional Link Sharing App.

## Installation

1. Clone the repository:

2. Install dependencies:

3. Set up environment variables:
Create a `.env` file in the `backend` directory with the following:

## Usage

1. Start the backend server:

2. The backend server will start running on `http://localhost:5000`.

## Project Structure


- **controllers/**: Contains controller functions for handling business logic.
- **models/**: Defines Mongoose models for MongoDB data schema.
- **routes/**: Defines API routes using Express.js.
- **.env**: Stores environment variables like MongoDB URI and server port.
- **server.js**: Entry point for starting the Express server.
- **config/db.js**: Configuration for connecting to MongoDB using Mongoose.

## API Endpoints

- **GET `/api/users`**: Get all users.
- **POST `/api/users`**: Create a new user.
- **GET `/api/users/:id`**: Get a user by ID.
- **PUT `/api/users/:id`**: Update a user.
- **DELETE `/api/users/:id`**: Delete a user.

## Environment Variables

Ensure you set up the `.env` file with appropriate values for `MONGO_URI` and `PORT`.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
