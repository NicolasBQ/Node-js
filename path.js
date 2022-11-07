const path = require('path');

const filePath = path.join('/public', '/dist', '/styles', 'main.css');// Este método nos permite unir diferentes directorios
console.log(path.basename(filePath)); // Este método nos retorna el archivo base de toda la URL
console.log(path.dirname(filePath)); // Este método nos permite ver la URL pero sin el archivo base
console.log(path.parse(filePath)); // Este método nos permite ver la URL pero en forma de Objeto
console.log(path.resolve('dist')); // Este es una alternativa a join(), resulve una ruta desde la raíz del sistema operativo 