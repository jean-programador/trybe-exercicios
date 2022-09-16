import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testa se nenhuma mensagem aparece antes de enviar o email', () => {
  render(<ValidEmail email="" />);
  const title = screen.queryByTestId('id-is-email-valid');
  expect(title).not.toBeInTheDocument();
});

test('Testa se quando o email é váildo ele renderiza um parágrafo com a cor verde', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const colorGreen = screen.getByText('Email Válido');
  expect(colorGreen).toHaveStyle('color: green');
});

test('Testa se quando o email é inváildo ele renderiza um parágrafo com a cor vermelha', () => {
  const EMAIL_USER = 'wrongmail';
  render(<ValidEmail email={ EMAIL_USER } />);
  const colorGreen = screen.getByText('Email Inválido');
  expect(colorGreen).toHaveStyle('color: red');
});
