import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  chakra,
  SimpleGrid,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { useState, useEffect } from 'react'
import { Image } from '@chakra-ui/react'

export default function CreateAppointment({ isOpen, focuskey, rindex, index, onClose, record}) {

  // console.log("hehe")
  //  console.log(allrecord)

  //  console.log("This is record yeyeye : ")
  //  console.log(record)
  // console.log(typeof(allrecord))
  // console.log(allrecord[1])

  //console.log(allrecord.length)

  // console.log("This is eiei")
  // console.log(eiei)
  // const { getAllRecords } = props

  // console.log("this is getallrecord")
  // console.log(getAllRecords)

  // const total = allrecord.length
  // console.log("This is total ")
  // console.log(total)
  // console.log(allrecord[1].recordID)
  // console.log(record.recordID)

  let modalStyle = {
    maxWidth: '900px',
    maxHeight: '650px',
    width: '90%',
    borderRadius: '24px',
    padding: { base: '20px', md: '48px' },
  }
  let modalBodyStyle = {
    padding: { base: '0px', md: '8px' },
  }
  let imgStyle = {
    borderRadius: '12px',
    boxSize: '190px',
    objectFit: 'cover',
  }
  let closeButtonStyle = {
    position: 'absolute',
    right: '12px',
    top: '12px',
  }

  // console.log(total)
  // console.log("wewe")
  //console.log(recordIndex)

  // console.log(record.image)
  return (
    
    <>
      {console.log("modal")}
      {console.log(index, record.recordID)}
      <Modal
        isOpen={isOpen && focuskey === index}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay/>
        <ModalContent sx={modalStyle}>
          <ModalCloseButton sx={closeButtonStyle} size="lg" />
          <ModalBody>
            <VStack align="start" spacing={4}>

              <Text sx={GlobalStyle.headingText}>Record #{rindex}</Text>
              <Text sx={GlobalStyle.greyMediumText} textAlign="right">
                {new Date(record.datetime).toLocaleString()}
              </Text>
              <Text sx={GlobalStyle.labelText}>Symptom</Text>
              <Text sx={GlobalStyle.regularText}>{record.symptom}</Text>
              <Text sx={GlobalStyle.labelText}>
                Pain severity:{' '}
                <chakra.span sx={GlobalStyle.regularText}>{record.painScale}</chakra.span>
              </Text>
              <SimpleGrid
                columns={{ base: 2, md: 4 }}
                sx={GlobalStyle.gridStyle}
              >
                {/* Show all images in Record */}
                {record.image.map((image) => (
                  <Image src={image
                  } sx={imgStyle} />
                ))}

              </SimpleGrid>
              <Text sx={GlobalStyle.labelText}>Comment</Text>
              <Text sx={GlobalStyle.regularText}>{record.comment}</Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
