import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="test">
        <img
          src="https://avatars.githubusercontent.com/u/84684478?v=4"
          alt="Wellynton Delfino"
        />
        <div>
          <strong>wnodelfino/goStack-gitHubExplorer-frontend</strong>
          <p>Primeira api com React!!!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="test">
        <img
          src="https://avatars.githubusercontent.com/u/84684478?v=4"
          alt="Wellynton Delfino"
        />
        <div>
          <strong>wnodelfino/goStack-gitHubExplorer-frontend</strong>
          <p>Primeira api com React!!!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="test">
        <img
          src="https://avatars.githubusercontent.com/u/84684478?v=4"
          alt="Wellynton Delfino"
        />
        <div>
          <strong>wnodelfino/goStack-gitHubExplorer-frontend</strong>
          <p>Primeira api com React!!!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
