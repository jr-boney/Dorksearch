

# Dorku - Google Dorks 

Dorku is a web application designed to help bug bounty hunters and security researchers by providing a collection of useful and critical Google Dorks. The platform allows users to explore and search for various types of dorks categorized based on common web vulnerabilities and misconfigurations.

The main goal of this website is to provide an easy-to-use tool that can help security professionals find vulnerable web pages, databases, and sensitive files through simple search queries.

---

## Features

- **Comprehensive Collection of Google Dorks**: Organized into categories such as `directoryLeaks`, `sensitiveFiles`, `exposedDatabases`, `misconfigurations`, and more.
- **Search Functionality**: Easily search for specific domains to quickly apply dorks and find potential vulnerabilities.
- **Categorized Dorks**: Dorks are grouped into categories based on their type, such as sensitive files, login pages, exposed APIs, and more.
- **Intuitive UI**: A clean and user-friendly interface that allows you to select categories, search domains, and view the relevant dorks.

---

## Categories of Dorks

The Google Dorks provided on Dorku are grouped into the following categories:

1. **Directory Leaks**: Dorks that help find open directories on web servers.
2. **Sensitive Files**: Dorks that locate sensitive files like `.env`, `config.php`, and other critical configurations.
3. **Exposed Databases**: Find exposed database backups, SQL dumps, and admin interfaces.
4. **Login Pages**: Discover login forms or admin panels for potential brute-force or credential stuffing attacks.
5. **Misconfigurations**: Find misconfigurations in web servers, git repositories, and other vulnerable points.
6. **Vulnerable Endpoints**: Search for potentially vulnerable API endpoints or admin areas.
7. **Sensitive Information**: Dorks to find leaked sensitive data like passwords, keys, and API tokens.
8. **Cloud Misconfigurations**: Dorks to find misconfigured cloud resources like AWS S3, Azure Blob Storage, and others.
9. **Open Source Code**: Find exposed open-source repositories and source code with potential vulnerabilities.
10. **Admin Interfaces**: Find exposed admin panels and dashboards that could be targeted for exploitation.
11. **Vulnerable Files**: Dorks to locate backup files or other vulnerable files on a server.
12. **Exposed APIs**: Find exposed APIs that may leak sensitive data or have insecure endpoints.

---

## Demo

You can visit the live demo of the Dorku web application here:  
[Dorku - Google Dorks for Bug Bounty](https://dorku.vercel.app/)

---

## Installation

To run this project locally on your machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (>=v14.0.0)
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/))

### Steps

1. Clone this repository:
    ```bash
    git clone https://github.com/<your-github-username>/dorku.git
    ```
   
2. Navigate to the project directory:
    ```bash
    cd dorku
    ```

3. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```

5. Open the app in your browser by visiting `http://localhost:3000`.

---

## Technologies Used

- **Next.js**: The framework for building the React application.
- **React**: For building the interactive components and state management.
- **Tailwind CSS**: For styling the application with a utility-first CSS framework.
- **Vercel**: The platform used to deploy and host the application.

---

## Contributing

If you'd like to contribute to the development of this project, feel free to fork the repository and make changes. Pull requests are welcome!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request to the `main` branch.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Disclaimer

This website is for educational purposes only. The use of Google Dorks and other security techniques should be conducted in accordance with the law and ethical guidelines. Always obtain permission before testing any website or system for vulnerabilities.

---

## Contact

For any inquiries or feedback, feel free to reach out:

- LinkedIn: [https://www.linkedin.com/in/aswin-krishna-344064202/](LinkedIn)
- GitHub: [https://github.com/jr-boney](https://github.com/jr-boney)

