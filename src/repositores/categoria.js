import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;


function getAll() {
    return fetch(`${URL_CATEGORIES}`)
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados :(');
      });
  }

  //======= Insert

  function create(objetoDaCategoria) {
    return fetch(`${URL_CATEGORIES}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objetoDaCategoria),
    })
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível cadastrar os dados :(');
      });
  }

  function delet(id) {
    console.log("Id recebido", id);
    return fetch(`${URL_CATEGORIES}/${id}`, {
      method: 'DELETE',
    })
      .then(async (respostaDoServidor) => {  

        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível excluir os dados :(');
      });
  }

  export default {
    getAll,
    create,
    delet,
  };