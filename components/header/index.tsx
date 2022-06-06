const Header: React.FC = () => {
  return (
    <>
      <div>
        <p>CronoSas</p>
      </div>
      <nav>
        <a
          href="https://www.estadao.com.br/politica/eleicoes/agregador-pesquisa-eleitoral-2022/"
          target="_blank"
          rel="noreferrer"
        >
          Estadão Dados
        </a>
        <a
          href="https://www.poder360.com.br/pesquisas-de-opiniao/"
          target="_blank"
          rel="noreferrer"
        >
          Poder360
        </a>
      </nav>
    </>
  );
};

export { Header };
