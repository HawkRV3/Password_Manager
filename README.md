# Password Manager - Technical Documentation

## Introduction

This document describes the implementation of a password manager as part of the DevSecOps course capstone project. The project includes a web application developed in HTML, CSS, and JavaScript, which allows users to manage their passwords securely.

## System Architecture

The system is composed of the following main components:

### Frontend (User Interface)
- **login.html**: A login page that allows users to authenticate to the system.
- **dashboard.html**: A control panel where users can add, view, and manage their passwords.
- **database.js**: Contains the logic to handle user authentication and CRUD (Create, Read, Update, Delete) operations for stored passwords.
- **Login.css**: Defines the specific style of the login page of a website or application.
- **Dashboard.css**: Defines the style of the dashboard page or section, which is usually the main interface for users after logging in.

### Backend (Server Logic and Database)
- **Server.js**: Typically used to create and configure an HTTP server that listens for incoming requests on a specific port.

### Security Integration
- Use of ticket sanitization methods to prevent injection attacks.
- Secure password management through encryption.

## Database Design

The design of the password manager database is simple and effective, oriented towards the functionality of storing and securely retrieving user credentials.

### User
- **username**: A username that identifies the user.
- **password**: Encrypted password of the user.

### Stored Passwords
- **site**: Name of the website or application for which the password is stored.
- **username**: Username used on the website.
- **password**: Encrypted password.

## Justification of Technical Decisions

1. **Use of HTML, CSS, and JavaScript**: Selected for their simplicity and because they are standard for web application development. They allow agile development and easy integration with security tools.
2. **Password Encryption**: All passwords are stored in encrypted form to protect users' sensitive data, meeting security standards in password management.
3. **Project Dockerization**: Docker was used to create containers that encapsulate the application and its dependencies, ensuring a consistent execution environment and reducing configuration issues across different environments.
4. **Continuous Integration (CI/CD)**: Pipelines were set up in GitHub Actions to automate the build, testing, and deployment of the application, ensuring that any changes to the code are tested and deployed securely and efficiently.

## Test Log

### Build
This is the first step in the pipeline. The code is built and verified before it can be deployed or analyzed. The steps include:

- **Set up job**: Initializes the environment needed to run the job.
- **Checkout Code**: Downloads the source code from the repository.
- **Set up Node.js**: Configures the Node.js environment.
- **Install Dependencies**: Installs all necessary dependencies defined in the project.
- **Run Lint**: Verifies that code meets style conventions and best practices.
- **Run Tests**: Runs automated tests to ensure that the code works as expected.
- **Complete job**: Marks the completion of this workflow.

### Deploy
This workflow is responsible for deploying the application once it has been built and successfully tested. The steps include:

- **Set up job**: Initializes the environment for the deployment job.
- **Checkout Code**: Downloads the source code.
- **Set up Node.js**: Configures the Node.js environment.
- **Install Dependencies**: Installs the necessary dependencies.
- **Deploy**: Deploys the application to the desired environment (e.g., a server or the cloud).
- **Complete job**: Marks the completion of the deployment process.

### Security Analysis
This flow is responsible for analyzing code security and dependencies before or after deployment. The steps include:

- **Set up job**: Initializes the environment for security analysis.
- **Checkout Code**: Downloads the source code.
- **Set up Node.js**: Configures Node.js.
- **Install Dependencies**: Installs dependencies.
- **Authenticate Snyk**: Authenticates the security scan tool (Snyk) to perform the scan.
- **Run Security Analysis with Snyk**: Runs security analysis on code and dependencies to identify vulnerabilities.
- **Complete job**: Completes the security scan job.

## Security Analysis and Vulnerability Mitigation

During the security analysis of the project using Snyk, the following vulnerabilities were detected:

1. **Information Exposure (CWE-200)**
   - **Description**: The application exposes information about the framework used (Express), which could be exploited by attackers.
   - **Mitigation**: Disable the X-Powered-By header using middleware such as Helmet on Express to hide this information.

2. **Cross-site Scripting (XSS) (CWE-79)**
   - **Description**: A risk of unsanitized code injection was identified in the `innerHTML` function, allowing attackers to execute malicious scripts.
   - **Mitigation**: Sanitize all data from remote resources before inserting it into the DOM. Use features like `textContent` instead of `innerHTML` or implement a sanitization library.

3. **Allocation of Resources Without Limits or Throttling (CWE-770)**
   - **Description**: An endpoint driver was found to perform file system operations without rate-limiting, allowing potential denial-of-service (DoS) attacks.
   - **Mitigation**: Implement middleware like `express-rate-limit` to limit the number of requests in a defined period, preventing system overload.

## Conclusion

Working on this password manager project has been an enriching experience. It allowed us to apply fundamental cybersecurity concepts, such as identifying and mitigating vulnerabilities in web applications. Through the use of tools like Snyk, we've learned to spot common security issues, giving us a clear view of the threats facing modern applications. Implementing security measures such as Helmet middleware in Express has highlighted the importance of integrating security practices from the earliest stages of development.

This project has given us invaluable hands-on experience, preparing us to meet real-world security challenges and reinforcing our understanding of secure system design, especially in encryption and sensitive data management. Overall, this project has been key in our growth as future cybersecurity professionals.

