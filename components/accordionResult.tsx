import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import React from "react";
import AccordionCard, { AccordionResultRepositoriesInterface } from "./accordionCard";

interface AccordionResultInterface {
    title: string,
    repositories: AccordionResultRepositoriesInterface[]
}

const AccordionResult = ({ title, repositories }: AccordionResultInterface) => {
    return <div className="accordion-wrapper">
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h6">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    repositories && repositories.length > 0 && repositories.map((item) => {
                        return <AccordionCard name={item?.name} stargazers_count={item.stargazers_count} description={item.description} />
                    })
                }
            </AccordionDetails>
        </Accordion>
    </div>
}

export default AccordionResult;