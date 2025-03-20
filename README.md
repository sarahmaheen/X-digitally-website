# X-Digitally Website - Client

Welcome to the **X-Digitally Website** client-side codebase. This project is built using React.js and is organized to ensure scalability and maintainability.

## 🚀 Technologies and Frameworks

This project utilizes the following technologies:

- **React.js** – A JavaScript library for building user interfaces.
- **Vite** – A fast development build tool for modern web applications.
- **Custom CSS** – Handcrafted CSS for styling components.
- **React Router** – Declarative routing for React applications.
- **Axios** – Promise-based HTTP client for making API requests.
- **ESLint & Prettier** – Tools for maintaining code quality and formatting.

## 📂 Project Structure

The `client/src` directory is organized as follows:

src/ ├── assets/ # Images, fonts, and other static resources ├── components/ # Reusable UI components ├── fonts/ # Custom font files ├── App.css # Global CSS styles ├── App.js # Main application component ├── index.css # Global CSS styles └── index.js # Application entry point

markdown
Copy
Edit

- **assets/**: Contains images, fonts, and other static resources.
- **components/**: Houses reusable UI components.
- **fonts/**: Stores custom font files used throughout the application.
- **App.css**: Global CSS styles applied across the application.
- **App.js**: The main application component that sets up the overall structure.
- **index.css**: Additional global CSS styles.
- **index.js**: The entry point of the React application, rendering the `App` component.

## 🛠️ Installation & Setup

To set up the project locally, follow these steps:

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/sarahmaheen/X-digitally-website.git
2️⃣ Navigate to the Client Directory
sh
Copy
Edit
cd X-digitally-website/client
3️⃣ Install Dependencies
Ensure you have Node.js installed. Then, run:

sh
Copy
Edit
npm install
This will install all necessary dependencies.

4️⃣ Run the Development Server
Start the development server with:

sh
Copy
Edit
npm run dev
This will launch the application, and you can view it in your browser at http://localhost:3000.

🏗️ Building for Production
To create an optimized production build, run:

sh
Copy
Edit
npm run build
This will generate the production-ready files in the build/ directory.

🤝 Contributing
We welcome contributions to enhance this project. To contribute:

Fork the repository.
Create a new branch: git checkout -b feature/YourFeature.
Make your changes and commit them: git commit -m 'Add new feature'.
Push to the branch: git push origin feature/YourFeature.
Submit a pull request.
Please ensure your code adheres to the project's coding standards and includes relevant tests.

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
