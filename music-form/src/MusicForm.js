import React, { useState } from 'react';
import axios from 'axios';

const MusicForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [label, setLabel] = useState('');
  const [year, setYear] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const musicData = {
      title,
      author,
      label,
      year,
    };

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', musicData);
      setMessage('Dados enviados com sucesso!');
      console.log('Resposta da API:', response.data);
    } catch (error) {
      setMessage('Ocorreu um erro ao enviar os dados.');
      console.error('Erro na requisição:', error);
    }

    // Limpar os campos do forms após o envio
    setTitle('');
    setAuthor('');
    setLabel('');
    setYear('');
  };

  return (
    <div>
      <h1>Formulário de Músicas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nome do Autor:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nome da Gravadora:</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ano de Lançamento:</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MusicForm;
