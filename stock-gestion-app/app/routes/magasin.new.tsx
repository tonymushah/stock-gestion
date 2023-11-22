import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { Form } from "@remix-run/react";

export default function NewMagasin(){
    return (
        <Box mr={2} ml={2}>
            <Heading size={"lg"}>Inserer un magasin</Heading>
            <Form>
                <FormControl isRequired>
                    <FormLabel>Nom</FormLabel>
                    <Input type="text" name="nom" placeholder="Inserer un nom"/>
                </FormControl>
                <Center m={2}>
                    <Button type="submit">Ajouter</Button>
                </Center>
            </Form>
        </Box>
    )
}