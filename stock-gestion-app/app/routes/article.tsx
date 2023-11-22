import { Box, Flex, Link, VStack } from "@chakra-ui/react";
import { Link as RemixLink, Outlet, useLocation } from "@remix-run/react";
import React from "react";

export default function ArticleLayout() {
    const { pathname } = useLocation();
    return (
        <Flex >
            <VStack width={"200px"} spacing={"15px"} border={""}>
                <Link fontSize={"large"} color={pathname == "/article/new" ? "red.500" : undefined} as={RemixLink} to={"./new"}>New</Link>
                <Link fontSize={"large"} color={pathname == "/article/" ? "red.500" : undefined} as={RemixLink} to={"./"}>All</Link>
            </VStack>
            <Box flex={"1"}>
                <Outlet/>
            </Box>
        </Flex>
    );
}