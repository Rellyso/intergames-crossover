export interface IBattery {
  name: string;
  lanes: string[]
}

export function Battery({ name, lanes }: IBattery) {
  return (
    <div className='w-auto'>
      <h4 className='text-zinc-400 text-md font-semibold mb-1'>{name}</h4>
      <p className='flex flex-col gap-1 text-zinc-200 text-md'>
        {lanes.length > 0 ? lanes.map((lane, i) => {
          const laneNumber = `0${i + 1}`
          return (
            <div key={lane} className='flex gap-1'>
              {lanes.length > 1 && <span className='text-crossover font-bold'>Raia {laneNumber}:</span>}
              <span>{lane}</span>
            </div>
          )
        })
          : (
            <span className='text-md text-zinc-200'>À definir...</span>
          )
        }
      </p>
    </div>
  )
}