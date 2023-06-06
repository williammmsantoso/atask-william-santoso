import { Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import React from "react";

export interface AccordionResultRepositoriesInterface {
    name: string,
    stargazers_count: number,
    description: string
}

const AccordionCard = ({ name, stargazers_count, description }: AccordionResultRepositoriesInterface) => {
  return (
    <div className="accordion-card-wrapper">
        <div className="flex items-center justify-between mb-2">
             <Typography variant="subtitle1">
                {name}
            </Typography>
            <div className="flex items-center justify-between gap-2">
                <Typography variant="subtitle1">
                    {stargazers_count}
                </Typography>
                <StarIcon/>
            </div>
        </div>
        <Typography variant="body2" color="#858585" >
            {description || "No description..."}
        </Typography>
    </div>
  );
};

export default AccordionCard;
