import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.postar.titulo}</TitleHeader>
      <Image src={props.postar.imagem} />
      <Description>{props.postar.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
