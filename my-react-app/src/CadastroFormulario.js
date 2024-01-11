import React, { useState } from 'react';
import './CadastroFormulario.css';

const CadastroFormulario = () => {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com os dados do formulário, por exemplo, enviar para um servidor
    console.log('Dados do formulário:', dadosFormulario);
    // Você pode adicionar lógica adicional aqui, como enviar dados para o servidor
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={dadosFormulario.nome}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={dadosFormulario.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={dadosFormulario.senha}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroFormulario;
