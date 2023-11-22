import { Box, Button, Center, FormControl, FormLabel, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import { Form } from "@remix-run/react";

export default function NewMouvement() {
    return (
        <Box mr={2} ml={2}>
            <Heading size={"lg"}>Inserer Mouvement</Heading>
            <Form>
                <FormControl isRequired>
                    <FormLabel>Article</FormLabel>
                    <Select name="article" placeholder="Selectionnez un article">
                        <option value={"1"}>Vary</option>
                        <option value={"2"}>Laoka</option>
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Mode</FormLabel>
                    <Select name="article" placeholder="Selectionnez un mode">
                        <option value={"1"}>Entree</option>
                        <option value={"2"}>Sortie</option>
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Quantite</FormLabel>
                    <NumberInput>
                        <NumberInputField name="quantite" />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Prix unitaire</FormLabel>
                    <NumberInput>
                        <NumberInputField name="prix_unitaire" />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <Center m={2}>
                    <Button type="submit">
                        Accepter
                    </Button>
                </Center>
            </Form>
        </Box>
    )
}