import React from 'react';

import InsertForm from '../form/formCategoria';
import EditCategory from '../form/editCategory';

export default class SelectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
        
    }

    render(){
        const request = this.props.requestedForm;
        const valueEdit = this.props.valueEdit;
        console.log("Render value edit: ", valueEdit)
        if (request === "Edit"){
                return(
                    <div>
                        {console.log("Form Edit")}
                        <EditCategory 
                            valueEdit = {valueEdit}
                            onSubmit={() => this.props.onSubmit()}
                        />
                    </div>
                );

        }else{
            return(
                <div>
                    {console.log("Select Form Insert: " + request)}
                    <InsertForm 
                        onSubmit={() => this.props.onSubmit()}
                    />
                </div>
            );
        }
    }
}