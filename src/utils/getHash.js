// Para que nuestro router trabaje sobre las rutas establecidas, debemos generar una funcon que se encargue de obtener el hash. Significa que manipularemos la URL cuando se acceda a un personaje y mostrar el template idoneo. Entonces creamos una funcion en la carpeta utils para saber cual es la ruta a la que nuestro usuario esta accediendo.

// location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/
// .slice(1) corta la url y muestra a partir del primer elemento. En este Caso el resultado es /1/
// .toLocaleLowerCase() convierte a minúscula la cadena
// .split(’/’) separa la cadena en un array, y elimina el / quedando un espacio vacio Ej [’’, ‘1’ ,’’]
// [1] trae el primer elemento del split anterior que en este caso es 1 (representa la id 1)

const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'

// Tambien se puede buscar el ID usando una expresion regular. Que es mas legible 
// const getHash = () => location.hash.replace(/#\/(\d{1,2})\/?/, "$1").toLowerCase() || '/'

export default getHash