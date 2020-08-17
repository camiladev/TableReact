import React from 'react';


export default class InsertItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <form>
                    <label>Nome</label>
                    <input type="text" name="nome"></input>
                </form>
            </div>
        );
    }
}
