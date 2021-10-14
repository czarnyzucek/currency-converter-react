import styled from "styled-components";

export const Wrapper = styled.form`
    margin: 0 5px;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid rgb(157, 157, 157);
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const Legend = styled.legend`
    background-color: hsl(154, 100%, 80%);
    padding: 7px 15px;
    border-radius: 5px;
`;

export const LabelData = styled.span`
    display: inline-block;
    width: 100%;
    max-width: 211px;
    text-align: left;
`;

export const Input = styled.input`
    border: 1px solid rgb(157, 157, 157);
    padding: 5px;
    margin-top: 5px;
    width: 100%;
    max-width: 225px;
`;

export const Select = styled.select`
    border: 1px solid rgb(157, 157, 157);
    padding: 5px;
    margin-top: 5px;
    width: 100%;
    max-width: 225px;
`;

export const Paragraph = styled.p`
    text-align: center;
`;

export const ButtonContainer = styled.div`
    text-align: center;
`;

export const Button = styled.button`
    padding: 10px 50px;
    background-color: hsl(154, 100%, 80%);
    border: none;
    border-radius: 5px;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
        background-color: hsl(154, 100%, 70%);
    }

    &:active {
        background-color: hsl(154, 100%, 60%);
    }
`;

export const Information = styled.p`
    font-size: 10px;
`;
