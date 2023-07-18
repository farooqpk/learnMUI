import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

export const AccordianMUI = () => {
  return (
    <>
      <Stack justifyContent={"center"}>
        <Accordion>
          <AccordionSummary
            aria-controls="accordian1 content"
            id="accordian1 content"
            expandIcon={<ExpandMore />}
          >
            <Typography>Accordian 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quo maxime, placeat quasi necessitatibus odit minus quod delectus
              dolores id odio cum corrupti dolor iste! Quaerat veritatis quo
              eveniet totam?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="accordian2 content"
            id="accordian2 content"
            expandIcon={<ExpandMore />}
          >
            <Typography>Accordian 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quo maxime, placeat quasi necessitatibus odit minus quod delectus
              dolores id odio cum corrupti dolor iste! Quaerat veritatis quo
              eveniet totam?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </>
  );
};
