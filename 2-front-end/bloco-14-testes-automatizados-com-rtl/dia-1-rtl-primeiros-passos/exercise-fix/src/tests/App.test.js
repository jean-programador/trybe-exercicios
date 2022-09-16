import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Tela de inserção de email',() => {
  it('Verificando se existe o campo Email.', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
  it('Verificando se existem dois botões', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
  
  it('Verificando se existe um botão de enviar', () => {
    render(<App />);
    const btnSend = screen.getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  });
});
