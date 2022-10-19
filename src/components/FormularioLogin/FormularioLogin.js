import React from "react";
import {Form, FormContainer, Input, SendButton, StyledLabel,} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {

  
  const login = () => {
    props.setPageFlow(2);

    const globalObject = {
       name: props.name,
       profilePic: props.profilePic
    }
    props.setObject(globalObject)
  };

  const onChangeName = (event) => {
    props.setName(event.target.value)
  }

  const onChangeProfilePic = (event) => {
    props.setProfilePic(event.target.value)
  }

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} onChange={onChangeName}  value={props.name} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} onChange={onChangeProfilePic} value={props.profilePic} />
        </StyledLabel>
        <SendButton onClick={login} >Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
