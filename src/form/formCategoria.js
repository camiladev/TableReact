import React from 'react';


export default class InsertItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <form>
                    <label>Nome:</label>
                    <input type="text" name="nome"></input>
                    <br />
                    <label>Cor:</label>
                    <input type="color" name="cor"></input>
                    <br />
                    
                    <input type="button" name="insert" value="Insert"></input>
                </form>
            </div>
        );
    }
}
