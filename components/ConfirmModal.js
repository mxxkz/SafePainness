import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ButtonGroup,
  chakra,
  Flex,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState } from 'react'
import axios from 'axios'

export default function ConfirmModal({
  isOpen,
  onClose,
  setConfirm,
  caseInfo,
  diseaseName,
}) {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)
  const onConfirm = async () => {
    try {
      const res = await axios.post('/api/caseManager/confirmDiagnosis', {
        caseName: diseaseName,
        caseID: caseInfo.caseID,
      })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
    setTimeout(() => {
      window.location.reload()
    }, 4000)
  }

  let btnFlex = {
    gap: '16px',
    margin: '24px auto 0',
  }

  console.log('diseaseName: ', diseaseName)

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent sx={GlobalStyle.modalStyle}>
          <ModalHeader sx={GlobalStyle.headingText}>
            Confirm Diagnosis
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text sx={GlobalStyle.greyMediumText}>
              Case:{' '}
              <chakra.span sx={GlobalStyle.labelText}>
                {caseInfo.caseID}
              </chakra.span>
            </Text>
            <Text sx={GlobalStyle.greyMediumText}>
              Patient ID:{' '}
              <chakra.span sx={GlobalStyle.labelText}>
                {caseInfo.patientID}
              </chakra.span>
            </Text>
            <Text sx={GlobalStyle.greyMediumText}>
              Disease name:{' '}
              <chakra.span sx={GlobalStyle.labelText}>
                {diseaseName}
              </chakra.span>
            </Text>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup sx={btnFlex}>
              <Button sx={GlobalStyle.whiteBtn} onClick={onClose}>
                Cancel
              </Button>
              <Button
                sx={GlobalStyle.blueBtn}
                onClick={() => {
                  onClose()
                  setConfirm(true)
                  onConfirm()
                }}
              >
                Confirm
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
