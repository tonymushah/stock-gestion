import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { Form } from "@remix-run/react";

export default function NewUniteMesure(){
    return (
        <Box mr={2} ml={2}>
            <Heading>Inserer une Unite de Mesure</Heading>
            <Form>
                <FormControl isRequired>
                    <FormLabel>Nom</FormLabel>
                    <Input type="text" name="nom" placeholder="Inserer un nom"/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Initial</FormLabel>
                    <Input type="text" name="initial" placeholder="Inserer un initial (comme kg, g, l)"/>
                </FormControl>
                <Center m={2}>
                    <Button type="submit">
                        Ajouter
                    </Button>
                </Center>
            </Form>
        </Box>
    )
}