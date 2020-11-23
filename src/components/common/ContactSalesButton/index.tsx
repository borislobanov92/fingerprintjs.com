import React, { useState } from 'react'
import Button from '../../common/Button'
import Modal from '../../common/Modal'
import ContactSalesForm from '../../ContactSalesForm'
import classNames from 'classnames'

interface ContactSalesButtonProps {
  className?: string | string[]
}
export default function ContactSalesButton({ className }: ContactSalesButtonProps) {
  const [isContactSalesModalOpen, setIsContactSalesModalOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsContactSalesModalOpen(true)} variant='outline' className={classNames(className)}>
        Contact Sales
      </Button>

      <Modal title='Contact Sales' open={isContactSalesModalOpen} onClose={() => setIsContactSalesModalOpen(false)}>
        <ContactSalesForm />
      </Modal>
    </>
  )
}
