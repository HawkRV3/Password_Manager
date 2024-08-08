### 1. Create the Dockerfile

Inside your project directory, create a file called `Dockerfile` and add the following content:

```Dockerfile
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

### 2. Create the .dockerignore File

Create a `.dockerignore` file to exclude unnecessary files and directories:

```
node_modules
.git/
```

### 3. Build the Docker Image

From the directory where the Dockerfile is located, run the following command to build the Docker image:

```bash
docker build my-node-app .
```

### 4. Run the Docker Container

To run a container from the image you just created, use the following command:

```bash
docker run -p 3000:3000 my-node-app
```

Your Node.js application should now be running at [http://localhost:3000](http://localhost:3000).

### 5. Run with Docker Compose (Optional)

If you want to use Docker Compose, create a `docker-compose.yml` file in your project directory:

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

To start the application with Docker Compose, run:

```bash
docker-compose up
```
