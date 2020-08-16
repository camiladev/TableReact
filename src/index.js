import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import categoryRepository from './repositores/categoria';

function ButtonDelete(props){
    return (
        <button className="delete"
                onClick={props.onClick}>
            Excluir
        </button>
    );
}

class ProductRow extends React.Component {
    render() {
      const category = this.props.category;

      return (
                <tr>

                <td>{category.titulo}</td>
                <td>{category.cor}</td>
                <td>
                  <ButtonDelete value={category}
                                onClick={() => this.props.onClick(category)}
                  />
                </td>
                </tr>

      );
    }
  }
    
  
  class ProductTable extends React.Component {
    render() {
      const rows = [];    
      console.log('Tabela: ', this.props.category)
      this.props.category.forEach((category) => {      
        rows.push(
          <ProductRow
            category={category}
            key={category.id}
            onClick={() => this.props.onClick(category)}
         />
        );
        
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cor</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  
  class FilterableProductTable extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        category: [],
      };
      this.atualizaCategorias = this.atualizaCategorias.bind(this);
            
    }
    componentDidMount(){
      this.atualizaCategorias();
    }
    
    atualizaCategorias(){
      categoryRepository.getAll().then((response) => {
          console.log("atualiza: ", response);
          this.setState({
            category: response,
          })
      })
      .catch((err) => {
        console.log('Erro Busca: ',err.message);
      })

    }

    
    
    // ============
  
    
    categorySelect(value){
        const selecte = value;
        this.setState = {
            selecte: selecte,
        }
        alert('Selecionado: ' + selecte.id);
        console.log("Selecionado: ", selecte.titulo);
    }   
    
    render() {
  
      return (
        <div>    
            <div>
              <div>
                  <h1>{console.log(this.state.category)}</h1>
              </div>
                <ProductTable 
                   category={this.state.category} 
                   onClick={value => this.categorySelect(value)}
                    
                />
            </div>    

            <div>
                <div></div>
            </div>
        </div>
        
      );
    }
  }
  

  ReactDOM.render(
    <FilterableProductTable />,
    document.getElementById('root')
  );
  
