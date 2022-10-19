import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const[name, setName] = useState("")
  const[profilePic, setProfilePic] = useState("")
  const[object, setObject] = useState("")



  const[titulo, setTitulo] = useState("")
  const[imagem, setImagem] = useState("")
  const[descricao, setDescricao] = useState("")
  const[postar, setPostar] = useState("")


  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
            object={object}
          />
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow}
            name={name}
            setName={setName}
            profilePic={profilePic}
            setProfilePic={setProfilePic}
            setObject={setObject}
            />
          ) : (
            <FormularioPostagem 
            titulo={titulo}
            imagem={imagem}
            descricao={descricao}
            setTitulo={setTitulo}
            setImagem={setImagem}
            setDescricao={setDescricao}
            setPostar={setPostar}
            />
          )}
        </aside>
        <TelaDaPostagem 
        postar={postar}
        />
      </Container>
    </>
  );
}


export default App;
