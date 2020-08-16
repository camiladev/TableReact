const URL_BACKEND_TOP = 
    window.location.hostname.includes('localhost') &&
    'http://localhost:8080' ;
 // : 'https://crujflix.herokuapp.com';
    //'https://crujflix.herokuapp.com/categorias'; 
      //ou http://localhost:8080/categorias maquina local

export default {
  URL_BACKEND_TOP,
};
