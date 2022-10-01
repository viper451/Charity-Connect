import React from 'react';
import HowItWorksOne from '../components/HowItWorksOne';
import HowItWorksTwo from '../components/HowItWorksTwo';
import HowItWorksThree from '../components/HowItWorksThree';
import HowItWorksFour from '../components/HowItWorksFour';
import HowItWorksFive from '../components/HowItWorkFive';

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
                <section className="six">
                    <HowItWorksFive />
                </section>
      
    </div>
  );
}

export default Instruction;