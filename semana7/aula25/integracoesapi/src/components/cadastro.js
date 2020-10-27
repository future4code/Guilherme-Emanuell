import React from "react";
import styled from "styled-components";


const BoxCadastroContainer = styled.div`
  display: flex;
  width: 30vw;
  height: 15vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid black;
`;

const InputContainer = styled.label`
  display: flex;
  padding: 0 2vw;
  justify-content: center;
`;

const AddToCartButton = styled.button`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100px;
`;

/* const InputContainer = styled.label`
  display: flex;
  padding: 0 2vw;
`; */

class BoxCadastro extends React.Component {
    render() {
      return (
        <BoxCadastroContainer>
          <div>
          <InputContainer>
            Nome: 
            <input type="text" />
          </InputContainer>

          <InputContainer>
            E-mail: 
            <input type="text" />
          </InputContainer>
          
          <AddToCartButton>Salvar</AddToCartButton>  
          </div>
  
         
        </BoxCadastroContainer>
      );
    }
  }
  
  export default BoxCadastro;