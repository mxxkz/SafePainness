import {
  Text,
  Box,
  Flex,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import HeadInfo from '/components/HeadInfo'
import { useState } from 'react'
import { useRouter } from 'next/router'
import AddFeedbackModal from '/components/AddFeedbackModal'
import BreadcrumbMenu from '/components/BreadcrumbMenu'
import { FeedbackList } from '/FeedbackList'

export default function Case() {
  let section2 = {
    marginTop: { base: '24px', md: '16px' },
    position: 'relative',
    width: '100%',
    borderRadius: '12px',
    backgroundColor: Colour.white,
    padding: { base: '24px 16px', md: '40px 20px' },
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  }
  let btnPosition = {
    position: 'absolute',
    right: '0',
    top: { base: '-64px', md: '-72px' },
  }
  const currentPage = {
    color: Colour.darkBlue,
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'bold',
    fontSize: { base: '16px', md: '18px' },
  }

  const [showAddFeedback, setShowAddFeedback] = useState(false)
  const onClickAddFeedback = () => setShowAddFeedback(!showAddFeedback)

  const router = useRouter()

  const onClickFeedback = (feedbackID) => {
    router.push(`./feedback/${feedbackID}`)
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadInfo
        name="Patient ID"
        patientID="XXXXXX"
        caseID="XXXX"
        caseName="Grammar addict"
        doctor="Alan Smith"
      />

      <Box sx={GlobalStyle.layout}>
        <BreadcrumbMenu />

        <Box sx={section2}>
          <Box sx={btnPosition}>
            <Button sx={GlobalStyle.turquoiseBtn} onClick={onClickAddFeedback}>
              + Feedback
            </Button>
          </Box>
          <AddFeedbackModal
            isOpen={showAddFeedback}
            onClose={onClickAddFeedback}
          />
          {/* <Feedbacks /> */}
          {FeedbackList.map((feedback, index) => {
            return (
              <Flex
                key={index}
                sx={GlobalStyle.recordBox}
                onClick={() => onClickFeedback(feedback.id)}
              >
                <Text sx={GlobalStyle.boldText}>Feedback #{feedback.id}</Text>
                <Text sx={GlobalStyle.greyMediumText}>{feedback.date}</Text>
              </Flex>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
