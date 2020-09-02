import React from 'react';
import '../../index.css';
import categoryRepository from '../../repositores/categoria';

import ProductTable from '../pages/table';
import SelectForm from '../../form/selectForm';

  
  export default class FilterableProductTable extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        category: [],
        requestedForm:'',
        valueEdit:[],
      };
      this.updateTable = this.updateTable.bind(this);
      this.updateCategory = this.updateCategory.bind(this);
      this.deletCategory = this.deletCategory.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.editCategory = this.editCategory.bind(this);
            
      
    }

    componentDidMount() {
      this.updateTable();
      this.updateRequest('Insert');
    }

    updateRequest(request){
        this.setState({
          requestedForm: request,
        })
    }
       
    updateTable(){
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
    updateCategory(){
      this.updateRequest('Insert');
      this.updateTable();
       
    }

    //============

    handleClick(e, value){
            
      if (e === "delet") {
          this.deletCategory(value);
      } else {        
          this.updateRequest('Edit');
          //Passar os dados velhos
          this.setState({
            valueEdit: value,
          })
        
      }
    }

    // ============Pega os dados novos
    editCategory(value){
      var newName = value;
      console.log('edtCategory: ' + value)

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
    const requestedForm = this.state.requestedForm;    
    const valueEdit = this.state.valueEdit;
    console.log("Value edit: ", valueEdit);
        return(
          <div>
  
              <div>
                    <SelectForm 
                          requestedForm={requestedForm} 
                          onSubmit={() => this.updateCategory()}
                          valueEdit={valueEdit}
                    />
                </div>
                  <div>                
                      <ProductTable 
                        category={this.state.category} 
                        onClick={(e, value) => this.handleClick(e, value)}                     
                      />
                </div>    
  
          </div>
        )
      
    }
  }
  