import React, { useEffect, useState } from 'react';
import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  Select,
  Textarea,
  Button,
  BackgroundContainer,
} from '../../styles/contato.ts';
import { GlobalStyle } from '../../styles/global.ts';
import { Header } from '../Header/index.tsx';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Contato = () => {
  const navigate = useNavigate(); // Use useNavigate ao invés de useHistory

  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast("Enviado com Sucesso!")
    navigate('/');
  };

  return (
    <BackgroundContainer>
      <Header></Header>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label bold>Nome:</Label> {/* Add bold style */}
            <Input type="text" name="nome" required />
          </FormGroup>

          <FormGroup>
            <Label bold>Telefone:</Label> {/* Add bold style */}
            <Input type="tel" name="telefone" required />
          </FormGroup>

          <FormGroup>
            <Label bold>Email:</Label> {/* Add bold style */}
            <Input type="email" name="email" required />
          </FormGroup>

          <FormGroup>
            <Label bold>Cidade:</Label> {/* Add bold style */}
            <Select name="cidade" required>
              <option value="cidade1">Ivaté</option>
              <option value="cidade2">Douradina</option>
              <option value="cidade3">Herculandia</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label bold>Mensagem:</Label> {/* Add bold style */}
            <Textarea name="mensagem" rows={4} required />
          </FormGroup>

          <Button type="submit">Enviar</Button> {/* Add bold style */}
        </form>
      </FormContainer>
    </BackgroundContainer>
  )
}
