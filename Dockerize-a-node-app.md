# Dockerized Node.js Application

This guide walks you through setting up and running a Node.js application inside a Docker container. We'll also cover using Docker Compose for easier management of the application.

## Prerequisites

- Docker installed on your machine.
- Basic knowledge of Docker and Docker Compose.
- Node.js and npm (Node Package Manager) installed locally if you want to test the app outside of Docker.

## Step-by-Step Instructions

### 1. Create the Dockerfile

The `Dockerfile` defines the environment in which your application will run. Create a file named `Dockerfile` in your project directory with the following content:

```dockerfile
# Use a base image of Node.js
FROM node:20.16-alpine3.19

# Set the working directory inside the container
WORKDIR /build

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --omit=dev && npm cache clean --force

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application
CMD ["node", "src/server.js"]
```

Explanation:
- `FROM node:20.16-alpine3.19`: Uses an Alpine-based Node.js image for a lightweight container.
- `WORKDIR /build`: Sets the working directory inside the container to `/build`.
- `COPY package.json package-lock.json ./`: Copies `package.json` and `package-lock.json` to the working directory.
- `RUN npm ci --omit=dev && npm cache clean --force`: Installs production dependencies and clears the npm cache.
- `COPY . .`: Copies the rest of the application code to the working directory.
- `EXPOSE 3000`: Exposes port 3000 for the application.
- `CMD ["node", "src/server.js"]`: Specifies the command to run the application.

### 2. Create the .dockerignore File

The `.dockerignore` file tells Docker which files and directories to ignore when building the image. Create a `.dockerignore` file in your project directory with the following content:

```plaintext
node_modules
.git/
```

### 3. Build the Docker Image

Navigate to the directory containing the `Dockerfile` and run the following command to build the Docker image:

```sh
docker build -t my-node-app .
```

Explanation:
- `docker build -t my-node-app .`: Builds the Docker image and tags it as `my-node-app`.

### 4. Run the Docker Container

Run a container from the image you just created using the following command:

```sh
docker run -p 3000:3000 my-node-app
```

Explanation:
- `docker run -p 3000:3000 my-node-app`: Runs the container and maps port 3000 of the host to port 3000 of the container.

Your Node.js application should now be running at [http://localhost:3000](http://localhost:3000).

### 5. Run with Docker Compose (Optional)

Docker Compose simplifies running multi-container Docker applications. Create a `docker-compose.yml` file in your project directory with the following content:

```yaml
version: '3'
services:
  app:
    build: .
    volumes:
      - .:/src/server.js
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
```

Explanation:
- `version: '3'`: Specifies the Compose file format version.
- `services`: Defines the services that make up your application.
- `app`: The name of the service.
  - `build: .`: Builds the Docker image from the current directory.
  - `volumes: - .:/src/server.js`: Mounts the current directory to `/src/server.js` in the container.
  - `ports: - "3000:3000"`: Maps port 3000 of the host to port 3000 of the container.
  - `environment: - NODE_ENV=development`: Sets the `NODE_ENV` environment variable to `development`.

To start the application with Docker Compose, run:

```sh
docker-compose up
```
# Docker pull command
With this command, you can download the image for use on any machine.
```sh
docker pull jonhatan2004/gestor
```
And you can run it with this command
```sh
docker run -p 3000:3000 jonhatan2004/gestor
```
