# To Do List
## Proyectop para organizar las atareas de los usuarios
## Dependencias
   - Expres: Framework para el desarrollo de la app
   - Pug: Motor encargado de la generación de las plantillas de las views, no es necesario importar pues para su suso se hace al configurar la carpoeta de views y la parte de que controlador voy a usar
   - Helmet: Encargado de mejorar la gestión de las cabeceras http
   - Morgan: mandar mensajes del servidor a la consola
   - MySQL2: conexión a la base de datos

## Planificación: requisitos, objetivos
- Desarrollo de una app para organizar tareas
     - Agregar tareas
     - Completar tareas
     - Eliminar tareas
     - Interfaz intuitiva

## Arquitectura: MVC
- **La arquitectura que se usara es MVC**
    - Es un proyecto pequeño y no requiere mayor complejidad
      
- **Tecnologías**
    - **Base de Datos**
            - SQL (lenguaje de programación)
            - MySQL (SGBD - Sistema Gestor de Bases de Datos)

    - **Backend**
         - NodeJs (Entorno principal para crear la API)
         - ExpressJs (Framework popular de node que cumple con los requisitos)
         - Pug (Motor generador de plantillas)
         - Helmet (Seguiridad)
         - Cors (Transmición de datos segura)

## Modelodo de datos: tipo de BDs
- Se usara una BDs SQL: MySQL
    1. Definición de entidades: TPD, FK, PK,  Atributos
        - tasks (ED)
          - id INT AUTO_INCREMENT PRIMARY KEY
          - title VARCHAR(255) NOT NULL
          - completed BOOLEAN DEFAULT false

     - **Nomenclatura**
        - ED => Entidad de datos
        - EP => Entidad pivote
        - EC => Entidad catalogo
        - FK => llave foranea
        - PK => llave primaria
        - 
    1. Logica de negocio
        - users
            - Crear una tarea
            - Leer todas las tareas
            - Actualizar el nombre de una tarea
            - Eliminar una tarea
