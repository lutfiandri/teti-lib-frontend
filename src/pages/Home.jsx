import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import {
    Box, Container, SimpleGrid, Grid, GridItem, Image, Text,
    useDisclosure,
    useConst,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";

export function Home() {
    //const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        < DefaultLayout >

            <Box bg='orange.100' w='100%' p={5}>

                <SimpleGrid minChildWidth='236px' spacing={5}>

                    <Box borderRadius='10' bg='white' width='236px' height='391px' >
                        <Box borderRadius='10' bg='lightgray' w='190px' h='249px' m={6}>
                            <image></image>
                        </Box>
                        <Box bg='white' w='190px' h='40px' m={6}>
                            <Text>
                                BOOK TITLE
                            </Text>
                            <Text fontSize='12'>
                                AUTHOR
                            </Text>
                        </Box>
                    </Box>

                    <Box borderRadius='10' bg='white' width='236px' height='391px' >
                        <Box borderRadius='10' bg='lightgray' w='190px' h='249px' m={6}>
                            <image></image>
                        </Box>
                        <Box bg='white' w='190px' h='40px' m={6}>
                            <Text>
                                BOOK TITLE
                            </Text>
                            <Text fontSize='12'>
                                AUTHOR
                            </Text>
                        </Box>
                    </Box>

                    <Box borderRadius='10' bg='white' width='236px' height='391px' >
                        <Box borderRadius='10' bg='lightgray' w='190px' h='249px' m={6}>
                            <image></image>
                        </Box>
                        <Box bg='white' w='190px' h='40px' m={6}>
                            <Text>
                                BOOK TITLE
                            </Text>
                            <Text fontSize='12'>
                                AUTHOR
                            </Text>
                        </Box>
                    </Box>

                    <Box borderRadius='10' bg='white' width='236px' height='391px' >
                        <Box borderRadius='10' bg='lightgray' w='190px' h='249px' m={6}>
                            <image></image>
                        </Box>
                        <Box bg='white' w='190px' h='40px' m={6}>
                            <Text>
                                BOOK TITLE
                            </Text>
                            <Text fontSize='12'>
                                AUTHOR
                            </Text>
                        </Box>
                    </Box>

                    <Box borderRadius='10' bg='white' width='236px' height='391px' >
                        <Box borderRadius='10' bg='lightgray' w='190px' h='249px' m={6}>
                            <image></image>
                        </Box>
                        <Box bg='white' w='190px' h='40px' m={6}>
                            <Text>
                                BOOK TITLE
                            </Text>
                            <Text fontSize='12'>
                                AUTHOR
                            </Text>
                        </Box>
                    </Box>

                    <Box borderRadius='10' bg='white' width='236px' height='391px' >
                        <Box borderRadius='10' bg='lightgray' w='190px' h='249px' m={6}>
                            <image></image>
                        </Box>
                        <Box bg='white' w='190px' h='40px' m={6}>
                            <Text>
                                BOOK TITLE
                            </Text>
                            <Text fontSize='12'>
                                AUTHOR
                            </Text>
                        </Box>
                    </Box>

                    <Box borderRadius='10' bg='white' width='236px' height='391px' >
                        <Box borderRadius='10' bg='lightgray' w='190px' h='249px' m={6}>
                            <image></image>
                        </Box>
                        <Box bg='white' w='190px' h='40px' m={6}>
                            <Text>
                                BOOK TITLE
                            </Text>
                            <Text fontSize='12'>
                                AUTHOR
                            </Text>
                        </Box>
                    </Box>

                    <Box borderRadius='10' bg='white' width='236px' height='391px' >
                        <Box borderRadius='10' bg='lightgray' w='190px' h='249px' m={6}>
                            <image></image>
                        </Box>
                        <Box bg='white' w='190px' h='40px' m={6}>
                            <Text>
                                BOOK TITLE
                            </Text>
                            <Text fontSize='12'>
                                AUTHOR
                            </Text>
                        </Box>
                    </Box>

                    <Box borderRadius='10' bg='white' width='236px' height='391px' >
                        <Box borderRadius='10' bg='lightgray' w='190px' h='249px' m={6}>
                            <image></image>
                        </Box>
                        <Box bg='white' w='190px' h='40px' m={6}>
                            <Text>
                                BOOK TITLE
                            </Text>
                            <Text fontSize='12'>
                                AUTHOR
                            </Text>
                        </Box>
                    </Box>

                    <Box borderRadius='10' bg='white' width='236px' height='391px' >
                        <Box borderRadius='10' bg='lightgray' w='190px' h='249px' m={6}>
                            <image></image>
                        </Box>
                        <Box bg='white' w='190px' h='40px' m={6}>
                            <Text>
                                BOOK TITLE
                            </Text>
                            <Text fontSize='12'>
                                AUTHOR
                            </Text>
                        </Box>
                    </Box>

                   
                </SimpleGrid>

            </Box>
        </DefaultLayout >
        
    )
    
}

