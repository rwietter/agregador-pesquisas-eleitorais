import Link from "next/link";
import { PopoverMenu } from "../menu";
import { Navigation } from "./styled";

const Header: React.FC = () => {
  return (
    <>
      <div>
        <p>Central Política</p>
      </div>
      <Navigation>
        <Link href="/tweets">Tweets</Link>
        <PopoverMenu />
      </Navigation>
    </>
  );
};

export { Header };
