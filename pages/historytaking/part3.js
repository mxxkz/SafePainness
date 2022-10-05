import {
  Box,
  Text,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  HStack,
} from '@chakra-ui/react'
import GlobalStyle from '../../Style'
import Colour from '../../Colour'
import HeadForm from '../../components/HeadForm'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default () => {
  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadForm progress={60} />
      <Box sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.boldText}>Part 3: Exacerbating Factors</Text>
        <VStack spacing={16}>
          <VStack spacing={16} align="left" sx={GlobalStyle.formBox}>
            {/* Question 10 */}
            <FormControl>
              <FormLabel sx={GlobalStyle.normalText}>
                10. What makes the pain worse?
              </FormLabel>
              <Input sx={GlobalStyle.inputStyle} />
            </FormControl>

            {/* Question 11 */}
            <FormControl>
              <FormLabel sx={GlobalStyle.normalText}>
                11. How did you relieve your pain?
              </FormLabel>
              <Input sx={GlobalStyle.inputStyle} />
            </FormControl>
          </VStack>

          <HStack spacing={8}>
            <Link href="/historytaking/part2">
              <Button leftIcon={<ArrowBackIcon />} sx={GlobalStyle.btnBack}>
                Back
              </Button>
            </Link>
            {/* <Link href="/historytaking/part2"> */}
            <Button rightIcon={<ArrowForwardIcon />} sx={GlobalStyle.btnNext}>
              Next
            </Button>
            {/* </Link> */}
          </HStack>
        </VStack>
      </Box>
    </Box>
  )
}
