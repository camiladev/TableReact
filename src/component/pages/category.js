import React from 'react';
import '../../index.css';
import categoryRepository from '../../repositores/categoria';
import InsertForm from '../../form/formCategoria';
import ProductTable from '../pages/table';

  
  export default class FilterableProductTable extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        category: [],
        selecte: [],
      };
      this.atualizaCategorias = this.atualizaCategorias.bind(this);
      this.insertItem = this.insertItem.bind(this);
      this.deletCategory = this.deletCategory.bind(this);
      this.handleClick = this.handleClick.bind(this);
            
      this.atualizaCategorias();
    }
       
    atualizaCategorias(){
      categoryRepository.getAll().then((response) => {
          this.setState({
            category: response,
          })
      })
      .catch((err) => {
        console.log('Erro Busca: ',err.message);
      })

    }    
    
    // ============
    insertItem(){
        this.atualizaCategorias();
        console.log("Atualiza: ", this.state.category);
    }

    //============

    handleClick(e, value){
      var button = e;
      var id = value.id;
      
      console.log('id: ',button);
      console.log('Name: ',id);

      if (button === "delet") {
        console.log('Delet?: ',button);
        this.deletCategory(value)
      } else {
        console.log('Edit?: ',button);
      }
    }
    
    // ============
    deletCategory(value){
        let list = this.state.category.slice();
        let index = list.indexOf(value);
        let newList = list.splice(index, 1);
        var idSel = value.id;

      
        categoryRepository.delet(idSel)
        .then(resposta => {
          console.log('Excluido: ',resposta);
        })
        .catch(err => {
          console.log('Erro Exclusão: ',err.message);
        })

        this.setState({
          category: list,
        });
       
        alert('Selecionado: ' + idSel);
        
        
    }  
    
    
    
    render() {
  
      return (
        <div> 
                <div>
                   <InsertForm
                        onSubmit= {() => this.insertItem()}
                   />   
                </div>
            <div>                
                <ProductTable 
                   category={this.state.category} 
                   //onClick={value => this.deletCategory(value)} 
                   onClick={(e, value) => this.handleClick(e, value)}                     
                />
            </div>    

            <div>
            </div>
        </div>
        
      );
    }
  }
  