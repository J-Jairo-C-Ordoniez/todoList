# To Do List
## Proyectop para organizar las atareas de los usuarios
## Dependencias
   - Expres: Framework para el desarrollo de la app
   - Pug: Motor encargado de la generación de las plantillas de las views, no es necesario importar pues para su suso se hace al configurar la carpoeta de views y la parte de que controlador voy a usar
   - Helmet: Encargado de mejorar la gestión de las cabeceras http
   - Cors
   - Morgan: mandar mensajes del servidor a la consola
## __dirname
  - Es una vcar que guarda la ruta de donde se encuentra ejecutando la apliación, no funciona cuando usamos ES6 solo es compatible con      cammond JS, pero si puedo crearla: **let __dirname =  dirname(new url(import.meta.url).pathname)**: 
    **import.meta.url:** proporciona la URL del módulo actual. En el contexto de ES6, no tenemos acceso directo a __dirname o __filename como en CommonJS, por lo que usamos import.meta.url para obtener la URL del archivo actual.
    **new URL(import.meta.url).pathname:** aquí, creamos un nuevo objeto URL usando import.meta.url. El método pathname de este objeto URL nos da la ruta del archivo actual en formato de cadena. Esto es esencialmente la ruta completa del archivo sin el protocolo file://.**dirname(pathname):**finalmente, usamos la función dirname del módulo path para obtener el directorio del archivo actual a partir de su ruta. dirname toma una ruta de archivo y devuelve la ruta del directorio que contiene ese archivo.

    Importaciones: Importamos dirname del módulo path y fileURLToPath del módulo url.
    fileURLToPath: Convertimos la URL del módulo actual (import.meta.url) a una ruta de archivo usando fileURLToPath.
    dirname: Usamos dirname para obtener el directorio del archivo actual a partir de la ruta de archivo.
    Este enfoque te permite trabajar con __dirname en un entorno de módulos ES6, similar a cómo lo harías en CommonJS.

## Morgan
   - Es un middleware y al llamarlo se le pueden pasar varios para,etros: dev: muestra todod los detalñles de el servidor, short y thing: son mensajes cortos

## body parser
   - se usa en express para obtener el cuerpo de las respyestas o res que manda express al cliente, se integra en cors, antes habia que usarlo como dependencia e iniciarlo como middleware

## app.use(express.static(join(__dirname, 'public')))
   - Esta línea sirve para servir archivos estáticos como imágenes, archivos CSS y JavaScript desde un directorio específico. Aquí está el desglose:

   - express.static: Es un middleware incorporado en Express que se utiliza para servir archivos estáticos.
    join(__filename, 'public'): Combina la ruta del archivo actual (__filename) con el directorio 'public' para crear una ruta absoluta. Sin embargo, debería ser __dirname en lugar de __filename para obtener el directorio del archivo actual. La línea correcta sería:
    JavaScript

## app.use(express.json())
   - express.json(): Este middleware analiza las solicitudes entrantes con cargas JSON y las convierte en un objeto JavaScript accesible a través de req.body. Es útil para manejar datos enviados en formato JSON, como en solicitudes POST.

## use(express.urlencoded({ extended: false }))
   - express.urlencoded(): Este middleware analiza las solicitudes entrantes con cargas URL-encoded (como los datos enviados desde formularios HTML) y las convierte en un objeto JavaScript accesible a través de req.body.
    { extended: false }: La opción extended determina cómo se deben analizar los datos URL-encoded. Si es false, solo se pueden analizar objetos simples con pares clave-valor. Si es true, se pueden analizar objetos anidados y matrices.

## Definición de rutas:
  - Se las definira en la carpeta controladores,y se las importara como modulos de esa manera  en mi archivo principal solo estaran las importaciones y su ejecuciones en sus respectivas rutas

## App en Modelo Vista Controlodar (MVC)