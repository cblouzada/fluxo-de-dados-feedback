import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  const finalClick = () => {
    const globalObject = {
      titulo: props.titulo,
      imagem: props.imagem,
      descricao: props.descricao
    }
    props.setPostar(globalObject)
  }

  const onChangeTitulo = (event) => {
    props.setTitulo(event.target.value)
  }
  const onChangeImagem = (event) => {
    props.setImagem(event.target.value)
  }
  const onChangeDescricao = (event) => {
    props.setDescricao(event.target.value)
  }

  return (
    <FormContainer>
      {/* <h2>Insira sua postagem abaixo: </h2> */}
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" onChange={onChangeTitulo} value={props.titulo} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={onChangeImagem} value={props.imagem} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={onChangeDescricao} value={props.descricao} />
        </StyledLabel>
        <SendButton onClick={finalClick} >Postar!</SendButton>
      </Form>
    </FormContainer>
  );
}; 

export default FormularioCadastro;
