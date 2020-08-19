import React from 'react';

function ButtonDelete(props){
    return (
        <button onClick={props.onClick}>
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
                                onClick={() => this.props.onClick("delet", category)}
                                
                  />
                </td>
                <td>
                    <button value={category}
                            onClick={() => this.props.onClick("edit", category)}>
                            
                        Editar
                    </button>
                </td>
                </tr>

      );
    }
  }
    
  
  export default class ProductTable extends React.Component {
    render() {
      const rows = [];    
      this.props.category.forEach((category) => {      
        rows.push(
          <ProductRow
            
            category={category}
            key={category.id}
            onClick={(e) => this.props.onClick(e, category)}
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
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }