import * as TabsPrimitive from "@radix-ui/react-tabs";
import cx from "classnames";
import { Link } from 'phosphor-react'

interface Tab {
  title: string;
  value: string;
}

const tabs: Tab[] = [
  {
    title: "Nível 1",
    value: "tab1",
  },
  {
    title: "Nível 2",
    value: "tab2",
  },

  {
    title: "Nível 3",
    value: "tab3",
  },
  {
    title: "Cronograma",
    value: "tab4",
  },
];

interface Props { }

const Tabs = (props: Props) => {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List
        className={cx("flex max-w-screen rounded-t-lg bg-zinc-200 mx-2 wrap")}
      >
        {tabs.map(({ title, value }) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className={cx(
              "group",
              "first:rounded-tl-lg last:rounded-tr-lg",
              "border-b first:border-r last:border-l",
              "border-zinc-300",
              "focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-zinc-50 radix-state-active:border-b-zinc-200",
              "flex-1 px-3 py-2.5",
              "focus:radix-state-active:border-b-red",
              "focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-crossover focus-visible:ring-opacity-75"
            )}
          >
            <span
              className={cx(
                "text-sm font-semibold",
                "md:text-md",
                "lg:text-lg",
                "text-crossover"
              )}
            >
              {title}
            </span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map(({ value }) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className={cx("rounded-b-lg px-6 py-4 bg-zinc-200 min-h-[120px] mx-2")}
        >
          <span className="text-sm text-zinc-100">
            {
              {
                tab1: <TabWorkoutOne />,
                tab2: <TabWorkoutTwo />,
                tab3: <TabWorkoutThree />,
                tab4: <TabTimeline />,
              }[value]
            }
          </span>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};


const TabTimeline = () => {
  return (
    <div>
      <p className="text-sm text-zinc-900 font-semibold">Horário das provas, baterias, raias, times:</p>
      <a
        href="https://docs.google.com/document/d/1t4v69rYENgFQocR5mUVpZ1WqYS--KQvU/edit?usp=share_link&ouid=100703017116547237526&rtpof=true&sd=true"
        target='blank'
        className='text-crossover font-bold hover:text-green-600 hover:decoration-slate-50 flex items-center gap-1'
      >
        <Link weight="bold" /> Acessar cronograma intergames 2022
      </a>
    </div>
  )
}

const TabWorkoutOne = () => {
  return (
    <div>
      <p className="text-sm text-zinc-900 font-semibold">Acompanhe a classificação, pontuação em provas, reaja e comente:</p>
      <a
        href="https://keepthescore.co/board/ghzrfrmrkwr/"
        target='blank'
        className='text-crossover font-bold hover:text-green-600 hover:decoration-slate-50 flex items-center gap-1'
      >
        <Link weight="bold" /> Acessar leadboard do nível 1
      </a>
    </div>
  )
}

const TabWorkoutTwo = () => {
  return (
    <div>
      <p className="text-sm text-zinc-900 font-semibold">Acompanhe a classificação, pontuação em provas, reaja e comente:</p>
      <a
        href="https://keepthescore.co/board/ebkrbacnvgr/"
        target='blank'
        className='text-crossover font-bold hover:text-green-600 hover:decoration-slate-50 flex items-center gap-1'
      >
        <Link weight="bold" />Acessar leadboard do nível 2
      </a>
    </div>
  )
}

const TabWorkoutThree = () => {
  return (
    <div>
      <p className="text-sm text-zinc-900 font-semibold">Acompanhe a classificação, pontuação em provas, reaja e comente:</p>
      <a
        href="https://keepthescore.co/board/tmuudsapqmr/"
        target='blank'
        className='text-crossover font-bold hover:text-green-600 hover:decoration-slate-50 flex items-center gap-1'
      >
        <Link weight="bold" /> Acessar leadboard do nível 3
      </a>
    </div>
  )
}

export default Tabs;
