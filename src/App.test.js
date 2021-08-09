import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { act } from 'react-dom/test-utils';
import App from './App';
import { GET_ALL_PEOPLE } from './apollo/queries';

let container;
const swMock = {
  request: {
    query: GET_ALL_PEOPLE,
  },
  result: {
    data: {
      allPeople: {
        people: [
          {
            id: 1, name: 'Luke Skywalker', birthYear: '19BBY', gender: 'male', species: null, homeworld: {
            id: 1,
              name: 'Tatooine',
            }
          },
          {
            id: 2, name: 'C-3PO', birthYear: '112BBY', gender: 'n/a', species: null, homeworld: {
            id: 1,
              name: 'Tatooine',
            }
          }
        ],
        totalCount: 2,
      },
      
    },
  },
};

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders app title', () => {
  render(
    <MockedProvider>
      <App />
    </MockedProvider>
  );
  const h1Element = screen.getByText(/Star War Persons/i);
  expect(h1Element).toBeInTheDocument();
});

it('renders app table', async () => {
  await act(async () => {
    ReactDOM.render(
      <MockedProvider mocks={[swMock]} addTypename={false}>
        <App />
      </MockedProvider>
      , container
    );

    await new Promise(resolve => setTimeout(resolve, 50));

    const tableCells = container.getElementsByClassName('MuiTableCell-body');

    expect(tableCells[0].textContent).toBe('C-3PO');
  });

  
});

it('renders app table pagination', async () => {
  await act(async () => {
    ReactDOM.render(
      <MockedProvider mocks={[swMock]} addTypename={false}>
        <App />
      </MockedProvider>
      , container
    );

    await new Promise(resolve => setTimeout(resolve, 50));

    const tablePagination = container.querySelector('.MuiTablePagination-toolbar');

    expect(tablePagination).toBeDefined();
  });

  
});
