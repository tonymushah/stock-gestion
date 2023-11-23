import { json, type LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import React from "react"
import { v4 } from "uuid"
import type { EtatStockTableItem } from "~/components/etat-stock/EtatStockTable"
import EtatStockTable from "~/components/etat-stock/EtatStockTable"

export const loader: LoaderFunction = async function () {
    const items : EtatStockTableItem[] = [
        {
            articleId: v4(),
            article: "Vary",
            quantiteInitial: 0,
            quantiteActuelle: 10,
            prixTotal: 10000,
            prixUnitaire: 1000
        }
    ];
    return json({ items })
}

export default function EtatStockIndex(){
    const { items } = useLoaderData<typeof loader>();
    return (
        <React.Fragment>
            <EtatStockTable items={ items }/>
        </React.Fragment>
    );
}