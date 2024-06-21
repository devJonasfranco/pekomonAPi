import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay } from './style'
import { useContext } from 'react'
import { PaginacaoContext } from '../../context/contextPaginacao'
import { X } from '@phosphor-icons/react'
export function ModalCard() {
  const { pokemonModal } = useContext(PaginacaoContext)

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <div>
          <Dialog.Title>{pokemonModal?.nome}</Dialog.Title>
          <Dialog.Close asChild>
            <X size={24} />
          </Dialog.Close>
        </div>
        <img src={pokemonModal?.front_default} alt="" />

        <Dialog.Description>
          <p>Poder: 25</p>
          <p>Defesa: 12</p>
          <p>agilidade: 10</p>
        </Dialog.Description>
      </Content>
    </Dialog.Portal>
  )
}
