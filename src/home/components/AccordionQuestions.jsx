import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from "react";

export const AccordionQuestions = () => {

  const [expanded, setExpanded] = useState('');

  const handleAcordion = (panel) => ( event, newExpanded ) => {
    setExpanded( newExpanded ? panel : false );
  }

  return (
    <>
      <Accordion className="accordion pb-4" expanded={  expanded === 'panel1' } onChange={handleAcordion('panel1')} >
        <AccordionSummary
          className='accordion-summary text-3xl font-bold'
          expandIcon={<ArrowBackIosIcon className="expanded-icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          ¿Cuánto dura el curso?
        </AccordionSummary>
        <AccordionDetails className='accordion-details text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui sequi laudantium in delectus provident id dolor, reiciendis, sapiente rerum eaque necessitatibus velit corporis quaerat similique explicabo laboriosam. Commodi, doloremque.
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion pb-4" expanded={  expanded === 'panel2' } onChange={handleAcordion('panel2')}>
        <AccordionSummary
          className='accordion-summary text-3xl font-bold'
          expandIcon={<ArrowBackIosIcon className="expanded-icon" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          ¿Cuáles son los horarios?
        </AccordionSummary>
        <AccordionDetails className='accordion-details text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion on className="accordion pb-4" expanded={  expanded === 'panel3' } onChange={handleAcordion('panel3')}>
        <AccordionSummary
          className='accordion-summary text-3xl font-bold'
          expandIcon={<ArrowBackIosIcon className="expanded-icon" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          ¿Tienen clases de pruebas?
        </AccordionSummary>
        <AccordionDetails className='accordion-details text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio unde tempore id consequatur? Odit quasi dolore eum facere quo debitis temporibus, illum iure nisi consequatur, deleniti ullam dolores velit mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero atque harum. Alias non nulla pariatur molestias, culpa necessitatibus accusamus iure inventore! Ipsa iusto fuga omnis ipsam eligendi, iure facilis.
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion pb-4" expanded={  expanded === 'panel4' } onChange={handleAcordion('panel4')}>
        <AccordionSummary
          className='accordion-summary text-3xl font-bold'
          expandIcon={<ArrowBackIosIcon className="expanded-icon" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          ¿Cómo son las clases?
        </AccordionSummary>
        <AccordionDetails className='accordion-details text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </>
  );
};
