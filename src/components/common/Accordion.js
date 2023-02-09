import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FiChevronDown } from "react-icons/fi"
import { border, borderRadius } from '@mui/system';

const Accordion = ({ children, name, title }) => {

  const [expanded, setExpanded] = React.useState(`panel${title}`);

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `0 solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />))(({ theme }) => ({
      flexDirection: 'row-reverse',
      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
      },
      '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
      },
    }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion style={{ backgroundColor: "transparent", borderRadius: "10px" }} expanded={expanded === `panel${title}`} onChange={handleChange(`panel${title}`)}>
      <AccordionSummary style={{ color: "#3b82f6", paddingLeft: "0.3rem", paddingRight: "0.3rem", paddingTop: "0.3rem", paddingBottom: "0.3rem" }} aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{ width: "100%" }}>
          <div className="w-full flex items-center justify-between">
            {title}
            <FiChevronDown className="text-xl" />
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ color: "#64748b" }}>
        <Typography>
          {children}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Accordion;