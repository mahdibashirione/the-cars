import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { FiChevronDown } from "react-icons/fi"

const Accordion = ({ description, name, title }) => {

  const [expanded, setExpanded] = React.useState('panel1');
  const [data, setData] = React.useState(description);

  const theme = useSelector(store => store.theme)

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
    <Accordion style={{ backgroundColor: "transparent" }} expanded={expanded === `panel${title}`} onChange={handleChange(`panel${title}`)}>
      <AccordionSummary style={{ color: "#3b82f6", paddingTop: "0.3rem", paddingBottom: "0.3rem" }} aria-controls="panel1d-content" id="panel1d-header">
        <Typography style={{ width: "100%" }}>
          <div className="w-full flex items-center justify-between">
            {title}
            <FiChevronDown className="text-xl" />
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ color: "#64748b" }}>
        <Typography>
          <div className='w-full flex flex-col gap-y-2'>
            {data.map(item => <span> -{item.title}</span>)}
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Accordion;