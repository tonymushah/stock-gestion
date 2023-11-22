import { Box, Flex, Link, VStack } from "@chakra-ui/react";
import { Link as RemixLink, Outlet, useLocation } from "@remix-run/react";
import React from "react";

export default function UniteMesureLayout() {
    const { pathname } = useLocation();
    return (
        <Flex >
            <VStack width={"200px"} spacing={"15px"}>
                <Link color={pathname.startsWith("/unite-mesure/new") ? "red.500" : undefined} fontSize={"large"} as={RemixLink} to={"./new"}>New</Link>
                <Link color={pathname.startsWith("/unite-mesure/") ? "red.500" : undefined} fontSize={"large"} as={RemixLink} to={"./"}>All</Link>
            </VStack>
            <Box flex={"1"}>
                <Outlet/>
            </Box>
        </Flex>
    );
}

