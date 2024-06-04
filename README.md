# Analytx Frontend 📊
## The perfect frontend interface for Analytx - the collective intern analysis tool!

Analytx Frontend provides a user-friendly interface for interacting with the Analytx backend system. It allows employees to seamlessly rate interns across various domains, view detailed reports, and manage intern evaluations with ease.

## Features

- **Intuitive User Interface**: Analytx Frontend offers a clean and intuitive interface for effortless navigation and interaction.
- **Multi-Domain Evaluation**: Users can rate interns across eight different domains, providing comprehensive feedback.
- **Personal Remarks**: Include personal remarks alongside ratings to provide additional context and insights.
- **Visual Reports**: Analytx Frontend generates detailed reports with interactive charts, offering visual representations of intern performance.
- **Individual Score Details**: Access a table with individual scores and all feedback for in-depth analysis of each intern's performance.
- **Secure Authentication**: Implements JWT authentication for secure access to the system, ensuring data privacy.

## Pages

<img src="src/assets/login.png" >
<img src="src/assets/register.png" >
<img src="src/assets/analytx_rating.png" >
<img src="src/assets/analytx_bar_chart.png" >
<img src="src/assets/analytx_table.png" >


  
## Upcoming features

- **PDF Download**: Download reports as PDF for offline viewing and sharing.
- **Email Integration**: Send reports directly to email addresses for convenient distribution.

## Technologies Used

- **Vite**: Frontend build tool for fast and efficient development.
- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling the frontend components.
- **Shadcn UI**: For building streamlined scaleable components.
- **JWT Authentication**: Secure authentication mechanism for accessing the frontend.
  
## Getting Started Without Docker 

To run Analytx Frontend locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.

```bash
git clone https://github.com/Lordhacker756/analytx-frontend
cd analytx-frontend
```

3. Install dependencies using npm or yarn.

```bash
npm install
# or
yarn install
```

4. Start the development server.

```bash
npm run dev
# or
yarn dev
```

5. Once the server is up and running, access Analytx Frontend at `http://localhost:3000`.

6. Ensure the Analytx backend is also running locally to interact with the frontend seamlessly.

## Getting started with Docker and Docker Hub🐋

1. Go to [Analytx-Backend](https://github.com/Lordhacker756/analytx) and simply run `docker-compose up -d`. The app will be available on `http://localhost:3000`

2. You can also build the image locally using the command `npm run build-image` and then run `docker-compose up -d` in the backend.

## Contributing

Contributions to Analytx Frontend are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.