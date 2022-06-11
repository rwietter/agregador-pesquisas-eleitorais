import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <div>
        <p>Central Política</p>
      </div>
      <nav>
        <a
          href="https://www.estadao.com.br/politica/eleicoes/agregador-pesquisa-eleitoral-2022/"
          target="_blank"
          rel="noreferrer"
        >
          Estadão Dados
        </a>
        <Link href="/tweets">Tweets</Link>
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
