import './styles/global.css'

import whiteLogo from './assets/logo-branco.png'
import Tabs from './components/Tabs'
import cx from 'classnames'
import { CalendarBlank, Trophy } from 'phosphor-react'
import { useState } from 'react'
import { LevelBatteries } from './components/LevelBatteries'

type SelectedMenuType = 'inicio' | 'horarios'

function App() {
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenuType>('inicio')

  const handleChangeSelectedMenu = (menu: SelectedMenuType) => {
    setSelectedMenu(menu)
  }

  return (
    <div className="flex flex-col bg-zinc-900 max-w-screen w-full min-h-screen">
      <header
        className='flex items-center justify-center h-16 border-b bg-zinc-900 border-b-zinc-700 w-full fixed top-0'
      >
        <button
          className={cx([
            'h-full text-zinc-200 px-4',
            'transition-colors',
            'hover:bg-zinc-700',
            selectedMenu === 'inicio' ? 'bg-zinc-800' : 'bg-zinc-900',
          ])}

          onClick={() => handleChangeSelectedMenu('inicio')}
        >
          Início
        </button>
        <button
          className={cx([
            'h-full text-zinc-200 px-4',
            'transition-colors',
            'hover:bg-zinc-700',
            selectedMenu === 'horarios' ? 'bg-zinc-800' : 'bg-zinc-900',
          ])}

          onClick={() => handleChangeSelectedMenu('horarios')}
        >
          Horários
        </button>
      </header>

      <div
        className='flex items-center flex-1 flex-col w-full gap-8 mt-16 py-12 max-w-screen px-2'
      >
        <img
          className='w-56 object-contain'
          src={whiteLogo}
          alt="inter games 2022, terceira edição, by crossover"
        />

        <div className='flex w-full flex-col items-center'>
          <h1 className='text-white text-2xl font-bold font-sans'>
            {selectedMenu === 'inicio' ? 'INTER GAMES 2022' : 'HORÁRIOS'}
          </h1>
          <p className='text-zinc-400'>
            {selectedMenu === 'inicio'
              ? 'Acesse o link da classificação de cada nível abaixo'
              : 'Confira os horários de provas abaixo'
            }
          </p>
        </div>

        {selectedMenu === 'inicio'
          ? <Tabs />
          : (
            <div className='flex flex-col w-full max-w-7xl gap-12 mt-10 px-4'>
              <div className='flex flex-col'>
                <h2 className='text-3xl font-bold text-zinc-400 mb-4 flex items-center gap-1'>
                  <CalendarBlank className='text-zinc-200' /> Sábado
                </h2>
                <div className='flex flex-col gap-8'>
                  <LevelBatteries
                    level={1}
                    workout='Prova 01 e 02'
                    batteries={[
                      {
                        name: '17:00 - Bateria 01',
                        lanes: [
                          'DUPLA DE MILHOES',
                          'PINK E CEREBRO',
                          'B1 E B2',
                        ],
                      },
                      {
                        name: '17:20 - Bateria 02',
                        lanes: [
                          'TEAM DAS 20',
                          'É RUIM MAIS É BOM',
                          'CRUSH DE MILHOES',
                        ],
                      },
                      {
                        name: '17:40 - Bateria 03',
                        lanes: [
                          'SALAH E RHADIJA',
                          'SO VIM PELA CAMISA',
                          'AS MENINAS DAS 20',
                        ],
                      },
                    ]}
                  />
                  <LevelBatteries
                    level={2}
                    workout='Prova 01 e 02'
                    batteries={[
                      {
                        name: '18:00 - Bateria única',
                        lanes: [],
                      },
                    ]}
                  />
                  <LevelBatteries
                    level={3}
                    workout='Prova 01 e 02'
                    batteries={[
                      {
                        name: '18:30 - Bateria única',
                        lanes: [],
                      },
                    ]}
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <h2 className='text-3xl font-bold text-zinc-400 mb-4 flex items-center gap-1'>
                  <CalendarBlank className='text-zinc-200' /> Domingo
                </h2>
                <div className='flex flex-col gap-4 mb-12'>
                  <LevelBatteries
                    level={1}
                    workout='Prova 03'
                    batteries={[
                      {
                        name: '08:10 - Bateria 01',
                        lanes: [
                          'B1 E B2',
                          'SO VIM PELA CAMISA',
                          'SALAH E RHADIJA',
                        ],
                      },
                      {
                        name: '08:30 - Bateria 02',
                        lanes: [
                          'PINK E CEREBRO',
                          'TEAM DAS 20',
                          'AS MENINAS DAS 20',
                        ],
                      },
                      {
                        name: '08:50 - Bateria 03',
                        lanes: [
                          'CRUSH DE MILHOES',
                          'É RUIM MAIS É BOM',
                          'DUPLA DE MILHOES',
                        ],
                      },
                    ]}
                  />
                  <LevelBatteries
                    level={2}
                    workout='Prova 03'
                    batteries={[
                      {
                        name: '09:10 - Bateria 01',
                        lanes: [
                          'LUAN HENRIQUE',
                          'TERLAN',
                          'ECLEUDO',
                        ],
                      },
                      {
                        name: '09:30 - Bateria 02',
                        lanes: [
                          'ELOIZA ELENA',
                          'EDMILSON MELO',
                          'STEFANNY ANA',
                        ],
                      },
                      {
                        name: '09:50 - Bateria 03',
                        lanes: [
                          'VITOR MORAIS',
                          'GARDENIA',
                          'RAFAEL ESCOLASTICO',
                        ],
                      },
                    ]}
                  />
                  <LevelBatteries
                    level={3}
                    workout='Prova 03'
                    batteries={[
                      {
                        name: '10:10 - Bateria 01',
                        lanes: [
                          'SERGIO LOPES',
                          'ZE FILHO',
                          'CAIO CESAR',
                        ],
                      },
                      {
                        name: '10:30 - Bateria 02',
                        lanes: [
                          'RELLYSON',
                          'THALYSON',
                          'RIVELINO SILVA',
                        ],
                      },
                      {
                        name: '10:50 - Bateria 03',
                        lanes: [
                          'RONALDO V.',
                          'ROBERTO CARLOS',
                          'GUTEMBERG',
                        ],
                      },
                    ]}
                  />
                </div>
                <div className='flex flex-col gap-4 mb-12'>
                  <LevelBatteries
                    level={1}
                    workout='Prova 04'
                    batteries={[
                      {
                        name: '11:20 - Bateria 01',
                        lanes: [
                          'É RUIM MAIS É BOM',
                          'DUPLA DE MILHOES',
                          'TEAM DAS 20',
                        ],
                      },
                      {
                        name: '11:30 - Bateria 02',
                        lanes: [
                          'AS MENINAS DAS 20',
                          'B1 E B2',
                          'CRUSH DE MILHOES',
                        ],
                      },
                      {
                        name: '11:40 - Bateria 03',
                        lanes: [
                          'PINK E CEREBRO',
                          'SO VIM PELA CAMISA',
                          'SALAH E RHADIJA',
                        ],
                      },
                    ]}
                  />
                  <LevelBatteries
                    level={2}
                    workout='Prova 04'
                    batteries={[
                      {
                        name: '12:00 - Bateria 01',
                        lanes: [
                          'RAFAEL ESCOLASTICO',
                          'ELOIZA ELENA',
                          'VITOR MORAIS',
                        ],
                      },
                      {
                        name: '12:10 - Bateria 02',
                        lanes: [
                          'TERLAN',
                          'STEFANNY ANA',
                          'GARDENIA',

                        ],
                      },
                      {
                        name: '12:20 - Bateria 03',
                        lanes: [
                          'ECLEUDO',
                          'LUAN HENRIQUE',
                          'EDMILSON MELO',
                        ],
                      },
                    ]}
                  />
                  <LevelBatteries
                    level={3}
                    workout='Prova 04'
                    batteries={[
                      {
                        name: '12:30 - Bateria 01',
                        lanes: [
                          'RONALDO V.',
                          'RELLYSON',
                          'SERGIO LOPES',
                        ],
                      },
                      {
                        name: '12:40 - Bateria 02',
                        lanes: [
                          'ROBERTO CARLOS',
                          'RIVELINO SILVA',
                          'ZE FILHO',
                        ],
                      },
                      {
                        name: '12:50 - Bateria 03',
                        lanes: [
                          'GUTEMBERG',
                          'THALYSON',
                          'CAIO CESAR',
                        ],
                      },
                    ]}
                  />
                </div>
                <div className='flex flex-col gap-4 mb-12'>
                  <LevelBatteries
                    level={1}
                    workout='Prova 05'
                    batteries={[
                      {
                        name: '14:00 - Bateria 01',
                        lanes: [
                          'SALAH E RHADIJA vs AS MENINAS DAS 20',
                        ],
                      },
                      {
                        name: 'Bateria 02',
                        lanes: [
                          'TEAM DAS 20 vs PINK E CEREBRO',
                        ],
                      },
                      {
                        name: 'Bateria 03',
                        lanes: [
                          'CRUSH DE MILHOES vs DUPLA DE MILHOES',
                        ],
                      },
                      {
                        name: 'Bateria 04',
                        lanes: [
                          'SO VIM PELA CAMISA vs B1 E B2',
                        ],
                      },
                      {
                        name: 'Bateria 05',
                        lanes: [
                          'É RUIM MAIS É BOM',
                        ],
                      },
                    ]}
                  />
                  <LevelBatteries
                    level={2}
                    workout='Prova 05'
                    batteries={[
                      {
                        name: '14:30 - Bateria 01',
                        lanes: [
                          'ECLEUDO X STEFANNY ANA',
                        ],
                      },
                      {
                        name: 'Bateria 02',
                        lanes: [
                          'EDMILSON MELO X ELOIZA ELENA',
                        ],
                      },
                      {
                        name: 'Bateria 03',
                        lanes: [
                          'VITOR MORAIS X RAFAEL ESCOLASTICO',
                        ],
                      },
                      {
                        name: 'Bateria 04',
                        lanes: [
                          'TERLAN X LUAN HENRIQUE',
                        ],
                      },
                      {
                        name: 'Bateria 05',
                        lanes: [
                          'GARDENIA',
                        ],
                      },

                    ]}
                  />
                  <LevelBatteries
                    level={3}
                    workout='Prova 05'
                    batteries={[
                      {
                        name: '15:00 - Bateria 01',
                        lanes: [
                          'CAIO CESAR X RIVELINO SILVA',
                        ],
                      },
                      {
                        name: 'Bateria 02',
                        lanes: [
                          'THALYSON X RELLYSON',
                        ],
                      },
                      {
                        name: 'Bateria 03',
                        lanes: [
                          'RONALDO V. X SERGIO LOPES',
                        ],
                      },
                      {
                        name: 'Bateria 04',
                        lanes: [
                          'ZE FILHO X GUTEMBERG',
                        ],
                      },
                      {
                        name: 'Bateria 05',
                        lanes: [
                          'ROBERTO CARLOS',
                        ],
                      },
                    ]}
                  />
                </div>
              </div>

              <div className='w-full flex flex-col items-center justify-center'>
                <h2 className='text-3xl text-zinc-200 font-bold'>Pódio - 16:00</h2>
                <Trophy
                  weight='fill'
                  className='text-crossover text-9xl'
                />
              </div>
            </div>
          )}
      </div>

      <footer
        className='h-16 border-t border-t-zinc-700 w-full flex align-center justify-center'
      >
        <span className='flex text-zinc-300 self-center justify-center'>
          powered by
          <a
            href="http://instagram.com/rellysondouglaas"
            target="_blank"
            rel="noopener noreferrer"
            className='mx-1 border-b border-b-crossover hover:text-crossover hover:font-bold'
          >
            rellyson
          </a>
          with
          <a
            href="http://instagram.com/ctcrossover"
            target="_blank"
            rel="noopener noreferrer"
            className='mx-1 text-crossover hover:font-bold'
          >
            ctcrossover
          </a>
        </span>
      </footer>
    </div>
  )
}

export default App
