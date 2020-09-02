import React from 'react';

export default class FormField extends React.Component{
    constructor(props){
        super();
        this.state = {
           
        }
    }

    render(){

        return(
            <div>
                <form onSubmit={this.props.onSubmit}>

                    <label>Nome:</label>
                    <input type="text" 
                            name="nome"
                            value={this.props.valueName}
                            onChange={this.props.onChangeName}
                    />
                    <br />
                    <label>Cor:</label>
                    <input type="color" 
                            name="cor" 
                            value={this.props.valueColor}
                            onChange={this.props.onChangeColor}
                    />
                    <br />
                    
                    <input type="submit" value="Insert" />
                    
                </form>
               
            </div>
        );
    }

}