import styled from 'styled-components';

export const FormContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Form = styled.div`
    width: 40vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`   

export const Input = styled.input`
    padding: 8px;
    margin-left: 16px;
    border-radius: 5px;
`

export const SendButton = styled.button`
    background-color: #513b29;
    border-radius: 8px;
    padding: 16px;
    width: 200px;
    border-radius: none;
    color: white;
    margin-top: 32px;
    cursor: pointer;
`

export const StyledLabel = styled.label`
    width: 300px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`