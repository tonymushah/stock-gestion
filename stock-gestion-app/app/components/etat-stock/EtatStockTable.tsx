import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export type EtatStockTableItem = {
    articleId: string,
    article: string,
    quantiteInitial: number,
    quantiteActuelle: number,
    prixUnitaire: number,
    prixTotal: number,
}

export default function EtatStockTable({ items }: {
    items: EtatStockTableItem[]
}) {
    return (
        <TableContainer>
            <Table>
                <TableCaption>Etat De Stock</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Article</Th>
                        <Th>Quantite Initial</Th>
                        <Th>Quantite Actuelle</Th>
                        <Th>Prix Unitaire</Th>
                        <Th>Prix Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {items.map((i) => (
                        <Tr key={`etat-stock-row-${i.articleId}`}>
                            <Td>{i.article}</Td>
                            <Td>{i.quantiteInitial}</Td>
                            <Td>{i.quantiteActuelle}</Td>
                            <Td>{i.prixUnitaire}</Td>
                            <Td>{i.prixTotal}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}