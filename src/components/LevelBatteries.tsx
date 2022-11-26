import { Battery, IBattery } from "./Battery";

interface ILevelBatteries {
  level: number;
  workout: string;
  batteries: IBattery[]
}

export function LevelBatteries({ level, batteries, workout }: ILevelBatteries) {
  return (
    <div className="w-full flex flex-col">
      <h3 className='text-xl font-bold text-zinc-300 flex gap-2 items-center'>
        Nível 0{level}
        <span className='text-sm font-bold text-crossover'>{workout}</span>
      </h3>

      <span className='divide-y w-full h-px bg-zinc-700 rounded my-2 mb-4' />
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full mx-4'>
        {batteries.map(battery => {
          return (
            <Battery
              key={battery.name}
              name={battery.name}
              lanes={battery.lanes}
            />
          )
        })}
      </div>
    </div>
  )
}