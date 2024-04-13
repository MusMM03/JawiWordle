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
        منك ڤركاتان دالم 6 ڤرچوبأن. سلڤس ستياڤ تكاان، ورنا جوبين اكن بروبه اونتوق منونجوقكن كتڤتن تكاان اندا دڠن ڤركاتان.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="س" status="correct" />
        <Cell value="و" />
        <Cell value="ل" />
        <Cell value="و" />
        <Cell value="ل" />
      </div>
      <p className="text-sm text-gray-500" >
       حروف "س" د دالم ڤركاتان دان د ڤوسيسي يڠ بتول.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="س" />
        <Cell value="و" />
        <Cell value="ل" status="present" />
        <Cell value="و" />
        <Cell value="ل" status="present" />
      </div>
      <p className="text-sm text-gray-500">
        حروف "ل" د دالم ڤركاتان دان د ڤوسيسي يڠ بتول.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="س" />
        <Cell value="و" status="absent"/>
        <Cell value="ل" />
        <Cell value="و" status="absent" />
        <Cell value="ل" />
      </div>
      <p className="text-sm text-gray-500">
        حروف "و" د دالم ڤركاتان دان د ڤوسيسي يڠ بتول.
      </p>
    </BaseModal>
  )
}
