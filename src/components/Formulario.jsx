import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import uniqid from 'uniqid';

export default function Form() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cell, setCell] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [lista, setLista] = React.useState([]);

  const checkSubmit = (e) => {
    e.preventDefault();

    console.log(nome, email, cell, idade);

    if (!nome.trim()) {
      console.log('nome está vazio');
      return;
    }
    if (!email.trim()) {
      console.log('email está vazio');
      return;
    }
    if (!cell.trim()) {
      console.log('cell está vazio');
      return;
    }
    if (!idade.trim()) {
      console.log('idade está vazio');
      return;
    }

    setLista([...lista, { key: uniqid(), nome, email, cell, idade }]);

    setNome('');
    setEmail('');
    setCell('');
    setIdade('');

    e.target.reset();
  };

  return (
    <>
      <form onSubmit={checkSubmit}>
        <Stack
          mt={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            onChange={(e) => setNome(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Telefone"
            variant="outlined"
            onChange={(e) => setCell(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Idade"
            variant="outlined"
            onChange={(e) => setIdade(e.target.value)}
          />

          <Button variant="contained" type="submit">
            enviar
          </Button>
        </Stack>
      </form>

      <ul>
        {lista.map((item) => (
          <li key={item.key}>
            {item.nome} - {item.email}- {item.cell} - {item.idade}
          </li>
        ))}
      </ul>
    </>
  );
}
