import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Select } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { v4 } from "uuid";
import ErrorBoundary_ from "~/components/ErrorBoundary";

export const ErrorBoundary = ErrorBoundary_ ;

export default function NewArticle() {
    return (
        <Box ml={5} mr={5}>
            <Heading size={"lg"}>Inserer un article</Heading>
            <Form>
                <FormControl isRequired>
                    <FormLabel>Nom</FormLabel>
                    <Input name="nom" type="text" placeholder="Ajouter un nom"/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Identifiant</FormLabel>
                    <Input name="id" type="test" placeholder="Ajouter un indetifiant"/>
                </FormControl>
                <FormControl>
                    <FormLabel>Unite de mesure</FormLabel>
                    <Select placeholder="Selectionnez un unite de mesure" name="unite">
                        <option value={v4()}>kg</option>
                        <option value={v4()}>T</option>
                        <option value={v4()}>l</option>
                    </Select>
                </FormControl>
                <Center m={2}>
                    <Button type="submit">
                        Ajouter
                    </Button>
                </Center>
                
            </Form>
        </Box>
    );
}