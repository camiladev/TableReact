import React from 'react';
import categoryRepository from '../repositores/categoria';
import FormField from '../form/formField';




export default class InsertItem extends React.Component{
    constructor(props){
        super(props);
            this.state = {
            nome: '',
            cor: '',
            
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
        
    }

    componentDidMount() {
        const valueEdit = this.props.valueEdit;
        this.setState({
            nome: valueEdit.titulo,
            cor: valueEdit.cor,
        })
        console.log("Cheguei: ", valueEdit.titulo);
      }

    handleChangeName(event){
        const target = event.target;
        const nome = target.value;
        
        this.setState({
            nome: nome,
        });
        
    }

    handleChangeColor(event){
        const target = event.target;
        const cor = target.value;
        
        this.setState({
            cor: cor,
        });
        
    }

    handleSubmit(event){
        const nome = this.state.nome;
        const cor = this.state.cor;
        const valueEdit = this.props.valueEdit;
        const id = valueEdit.id;
        
        alert(id + 'Enviado: '+ this.state.nome + " Cor: " + this.state.cor);
        categoryRepository.update({

            id: id,
            titulo: nome,
            cor: cor,

        });
     
        event.preventDefault();
        this.props.onSubmit();
        this.clearForm();
        
    }

    clearForm(){
        this.setState({
            nome: '',
            cor: '',
        })
    }


    render(){
        return(
            <div>
                <FormField 
                    onSubmit={(value) => this.handleSubmit(value)}
                    onChangeName={(name) => this.handleChangeName(name)}
                    onChangeColor={(color) => this.handleChangeColor(color)}
                    valueName={this.state.nome}
                    valueColor={this.state.cor}
                    
                />
            </div>
        );
    }
}
