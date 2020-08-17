import React from 'react';
import categoryRepository from '../repositores/categoria';




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
        alert('Enviado: '+ this.state.nome + " Cor: " + this.state.cor);
        const nome = this.state.nome;
        const cor = this.state.cor;

            categoryRepository.create({
                titulo: nome,
                cor: cor,
           });   
        event.preventDefault();
        this.props.onSubmit();
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>Nome:</label>
                    <input type="text" 
                            name="nome"
                            value={this.state.value}
                            onChange={this.handleChangeName}
                    />
                    <br />
                    <label>Cor:</label>
                    <input type="color" 
                            name="cor" 
                            value={this.state.cor}
                            onChange={this.handleChangeColor}
                    />
                    <br />
                    
                    <input type="submit" value="Insert" />
                </form>
            </div>
        );
    }
}
