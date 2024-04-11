import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Info" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
       
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          Main Wordle versi asal di sini.
        </a>
      </p>
    </BaseModal>
  )
}
