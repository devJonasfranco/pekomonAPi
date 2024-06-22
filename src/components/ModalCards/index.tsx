import * as Dialog from '@radix-ui/react-dialog'
import {
  Close,
  Content,
  Description,
  Overlay,
  ProgressIndicador,
  ProgressRoot,
  Title,
} from './style'
import { useContext } from 'react'
import { PaginacaoContext } from '../../context/contextPaginacao'
import { X } from '@phosphor-icons/react'

export function ModalCard() {
  const { pokemonModal } = useContext(PaginacaoContext)
  if (!pokemonModal) {
    return null
  }
  const getValueStat = (statName: string) => {
    const stat = pokemonModal.stats.find((stat) => stat.stat.name === statName)
    return stat ? stat.base_stat : 0
  }
  const normalizeStat = (stat: number) => {
    return Math.min(stat, 100)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <div>
          <Title>{pokemonModal?.nome}</Title>
          <Close asChild>
            <X size={24} />
          </Close>
        </div>
        <img src={pokemonModal?.front_default} alt="" />

        <Description>
          <div>
            <p>Attack: {getValueStat('attack')}</p>

            <ProgressRoot>
              <ProgressIndicador
                style={{
                  width: `${getValueStat('attack')}%`,
                }}
              />
            </ProgressRoot>
          </div>
          <div>
            <p>Defesa: {getValueStat('defense')}</p>
            <ProgressRoot>
              <ProgressIndicador
                style={{
                  width: `${getValueStat('defense')}%`,
                }}
              />
            </ProgressRoot>
          </div>
          <div>
            <p>Velocidade: {getValueStat('speed')}</p>
            <ProgressRoot>
              <ProgressIndicador
                style={{
                  width: `${getValueStat('speed')}%`,
                }}
              />
            </ProgressRoot>
          </div>
        </Description>
      </Content>
    </Dialog.Portal>
  )
}
