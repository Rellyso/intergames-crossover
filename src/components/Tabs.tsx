import * as TabsPrimitive from "@radix-ui/react-tabs";
import cx from "classnames";
import { Link } from 'phosphor-react'
import { LinkItem } from "./LinkItem";

interface Tab {
  title: string;
  value: string;
}

const tabs: Tab[] = [
  {
    title: "Classificação geral",
    value: "tab1",
  },
  {
    title: "Cronograma",
    value: "tab2",
  },
];

interface Props { }

const Tabs = (props: Props) => {
  return (
    <section id='materiais' className="p-4 my-12  w-full max-w-screen-lg self-center">
      <div>
        <LinkItem
          title='NV1 - FEMININO'
          description='Acompanhe a classificação do nível 1 feminino'
          link='https://keepthescore.com/board/qqfjcjjmmsypr/'
        />
        <LinkItem
          title='NV1 - MASCULINO'
          description='Acompanhe a classificação do nível 1 masculino'
          link='https://keepthescore.com/board/dgtmkgcdqnsxr/'
        />
        <LinkItem
          title='NV2 - FEMININO'
          description='Acompanhe a classificação do nível 2 feminino'
          link='https://keepthescore.com/board/lxhzpfwdsllsr/'
        />
        <LinkItem
          title='NV2 - MASCULINO'
          description='Acompanhe a classificação do nível 2 masculino'
          link='https://keepthescore.com/board/mwpjvqdknspbr/'
        />
        <LinkItem
          title='NV3 - AVANÇADO'
          description='Acompanhe a classificação do nível 3'
          link='https://keepthescore.com/board/ztsmtczsxzdbr/'
        />
      </div>
    </section>
  );
};


export default Tabs;
