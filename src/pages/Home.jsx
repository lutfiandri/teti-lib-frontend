import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import {
    ChakraProvider,
    Box,
    Container,
    SimpleGrid,
    Grid,
    GridItem,
    Image,
    Text,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress,
    useToast,
} from "@chakra-ui/react";

import React from "react";

import useFetch from "@/useFetch";

export function Home() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const { error, isLoading, data: books} = useFetch('http://localhost:5000/book'); 
   
        return (
            < DefaultLayout >
    
                <Box bg='orange.100' w='100%' p={5}>
    
                    <SimpleGrid minChildWidth='236px' spacing={5}>

                        {error && <div>{ error }</div>}
                        { isLoading && <div>Loading...</div> }
                        {books && books.data.books.map((book) => (
                        <Box onClick={onOpen} cursor='pointer' borderRadius='10' bg='white' width='236px' height='391px' key={book._id}>
                            <Box borderRadius='10' bg='lightgray' w='190px' h='249px' m={6}>
                                <image></image>
                            </Box>
                            <Box bg='white' w='190px' h='40px' m={6}>
                                <Text>
                                    { book.title }
                                </Text>
                                <Text fontSize='12'>
                                    { book.author}
                                </Text>
                            </Box>
                        </Box>    
                    ))}
    
                    </SimpleGrid>
    
                </Box>
    
                <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior='inside'>
                    <ModalOverlay></ModalOverlay>
                    <ModalContent>
                        <ModalHeader> Book Details </ModalHeader>
                        <ModalCloseButton></ModalCloseButton>
                        <ModalBody>
                            <Box borderRadius='10' bg='lightgray' h='473px' m={5 } >
                                <image></image>
                            </Box>
                            <Text fontSize='24' marginBottom={2}>
                                BOOK TITLE BOOK TITLE BOOK TITLE
                            </Text>
                            <Text marginBottom={2} fontSize='16'>
                                by AUTHOR AUTHOR AUTHOR
                            </Text>
    
                            <Text fontSize='16'>
                                BOOK SYNOPSIS Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris suscipit diam in leo congue congue. Aliquam hendrerit eget purus
                                a consequat. Fusce elit lectus, ornare vitae diam quis, cursus porta eros.
                                Suspendisse est leo, rhoncus vel euismod nec, vulputate sed odio. Vestibulum
                                varius purus erat, ac commodo leo hendrerit quis. Curabitur nibh dolor, euismod
                                id nunc vitae, ornare mattis massa. Nulla facilisi.
                            </Text>
                
                        </ModalBody>
    
                        <ModalFooter>
                            <Button colorScheme='teal' mr={3}
                                onClick={() =>
                                    toast({
                                        title: 'Borrowed',
                                        description: "Book saved into My library.",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                    })
                                }
                            >
                                Borrow
                            </Button>
                            <Button isDisabled colorScheme='teal'>
                                Return
                            </Button>
                        </ModalFooter>
                    </ModalContent>
    
                </Modal>
    
            </DefaultLayout >
            
        )
    
    

    
}
