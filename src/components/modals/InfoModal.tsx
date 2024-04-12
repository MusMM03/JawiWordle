import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cara untuk bermain" isOpen={isOpen} handleClose={handleClose}>
     
      <p className="text-sm text-gray-500">
        Meneka WORDLE dalam 5 percubaan. Selepas setiap tekaan, warna jubin akan berubah untuk menunjukkan ketepatan tekaan anda dengan perkataan.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="س" status="correct" />
        <Cell value="و" />
        <Cell value="ل" />
        <Cell value="و" />
        <Cell value="ل" />
      </div>
      <p className="text-sm text-gray-500" >
       .betul yang posisi di dan perkataan dalam  di  'س' Huruf
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="س" />
        <Cell value="و" />
        <Cell value="ل" status="present" />
        <Cell value="و" />
        <Cell value="ل" />
      </div>
      <p className="text-sm text-gray-500">
        Huruf 'ل' di dalam perkataan tapi di posisi yang salah.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="س" />
        <Cell value="و" status="absent"/>
        <Cell value="ل" />
        <Cell value="و" status="absent" />
        <Cell value="ل" />
      </div>
      <p className="text-sm text-gray-500">
        Huruf 'و' tiada di dalam perkataan.
      </p>
    </BaseModal>
  )
}
