import React from 'react';
import HowItWorksOne from './HowItWorksOne';
import HowItWorksTwo from './HowItWorksTwo';
import HowItWorksThree from './HowItWorksThree';
import HowItWorksFour from './HowItWorksFour';

function Instruction(props) {
  return (
    <div>
         <section className="two">
                    <HowItWorksOne />
                </section>
                <section className="three">
                    <HowItWorksTwo />
                </section>
                <section className="four">
                    <HowItWorksThree />
                </section>
                <section className="five">
                    <HowItWorksFour />
                </section>
      
    </div>
  );
}

export default Instruction;