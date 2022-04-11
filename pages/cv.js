import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import React, {useState} from 'react'


export default function CV(){

    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)


    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages)
    }
    return(<>
    
    <Document file="../public/callumhemmingcv.pdf" onLoadSuccess={onDocumentLoadSuccess}>

    </Document>

    <p>
        Page {pageNumber} of {numPages}
    </p>
    </>)
}