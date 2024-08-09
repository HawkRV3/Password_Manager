# Dokcerized_Password_Manager
## Uso de Docker para la Imagen `gestor`

### 1. `docker pull jonhatan2004/gestor`

**Función:** Este comando se utiliza para descargar una imagen de Docker desde un repositorio, normalmente el Docker Hub.

**Explicación:**
- **`docker pull`**: Este es el comando que se usa para descargar una imagen.
- **`jonhatan2004/gestor`**: Este es el nombre de la imagen que se quiere descargar. Aquí, `jonhatan2004` sería el nombre del usuario o la organización en Docker Hub, y `gestor` es el nombre de la imagen.

### 2. `docker run -p 3000:3000 jonhatan2004/gestor`

**Función:** Este comando se utiliza para ejecutar un contenedor a partir de una imagen de Docker.

**Explicación:**
- **`docker run`**: Este es el comando que se usa para crear y ejecutar un contenedor.
- **`-p 3000:3000`**: Esta opción se utiliza para mapear puertos. El puerto `3000` del contenedor se vincula al puerto `3000` en la máquina host. Esto permite acceder a la aplicación que está corriendo dentro del contenedor a través de `localhost:3000` en la máquina local.
- **`jonhatan2004/gestor`**: Este es el nombre de la imagen que se va a ejecutar. En este caso, se refiere a la misma imagen que se descargó con el comando `docker pull`.

### Resumen

- **`docker pull jonhatan2004/gestor`**: Descarga la imagen `gestor` desde el repositorio de Docker Hub.
- **`docker run -p 3000:3000 jonhatan2004/gestor`**: Ejecuta esa imagen como un contenedor, mapeando el puerto `3000` del contenedor al puerto `3000` de la máquina host, permitiendo acceder a la aplicación ejecutada en ese puerto.

