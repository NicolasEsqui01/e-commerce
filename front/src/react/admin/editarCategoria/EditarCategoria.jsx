import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../assets/scss/admin.scss";
import styled from 'styled-components';

const DivContainer = styled.div`
    padding: 40px 0px
`;

const FormContainer = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    background-color: #fff;
    padding: 30px 20px 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 500px;
`;

const FormTitle = styled.h2`
    padding-bottom: 20px;
    font-weight: 100;
    font-size: 26px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 18px;
    color: #777;
`;

const Input = styled.input`
    margin-bottom: 20px;
    height: 25px;
    font-size: 18px;
    color: #474747;
    padding: 15px 5px
`;

const InputSubmit = styled.input`
    background-color: #1d232d;
    border: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px 0px;
    cursor: pointer;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
`;

export default ({handleSubmit , handleOnchange}) => {

  return (
    <DivContainer>
    <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Editar categoría</FormTitle>
        <Form>
        <Label>Tipo:</Label>
        <Input type="text" onChange={handleOnchange}/>
        <InputSubmit type="submit" value="Editar"/>
        </Form>
    </FormContainer>
    </DivContainer>
  );
};