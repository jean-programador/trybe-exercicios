// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = [
    {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
   },
   {
    id: "jiVfq4MZDlb",
    joke: "Sore throats are a pain in the neck!",
    status: 200,
   }
];

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValueOnce(joke[0])
    .mockResolvedValueOnce(joke[1]),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );

  const newJoke = screen.getByRole('button', {name: 'New Joke'});
  expect(newJoke).toBeInTheDocument();
  userEvent.click(newJoke);
  const renderNewJoke = await screen.findByText('Sore throats are a pain in the neck!');
  expect(renderNewJoke).toBeInTheDocument();
  const firstJoke = screen.queryByText('Whiteboards ... are remarkable.');
  expect(firstJoke).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);

});
