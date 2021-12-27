import './Experience.css'
import nasa from '../../images/nasa.png';
import amazon from '../../images/amazon.png';
import deliverr from '../../images/deliverr.png';
import codeucate from '../../images/codeucate.png';
import samtrans from '../../images/samtrans.png';
import alienvault from '../../images/alienvault.png';

import sjsu from '../../images/sjsu.png';

import { ExperienceContent }from '../ExperienceContent';
export const Experience = () => {

    return (
        <>
            <h2><u>
                Work Experience    
            </u></h2>
            <div className="experience-content">
                <ExperienceContent
                    company="NASA Glenn Research Center"
                    time ="August 2021 - December 2021"
                    logo={nasa}
                    description={
                    `In Fall 2021 I had the opportunity to intern with NASA as a data 
                    science intern on various projects to improve the machine learning pipeline.
                    I worked with in the Scientific Computing and Visualization Team as a part of 
                    the Graphics and Visualization Lab (GVIS). '\n' My intern project was to `
                }
                />
                <ExperienceContent
                    company="Amazon"
                    time ="June 2021 - August 2021"
                    logo={amazon}
                    description =""
                    setBackground={true}
                />
                <ExperienceContent
                    company="Deliverr"
                    time ="January 2021 - May 2021"
                    logo={deliverr}
                    description =""
                />
                <ExperienceContent
                    company="Codeucate"
                    time ="July 2020 - August 2020"
                    logo={codeucate}
                    description =""
                />                
                <ExperienceContent
                    company="San Jose State University"
                    time ="January 2020 - July 2020"
                    logo={sjsu}
                    description =""
                />
                <ExperienceContent
                    company="San Mateo County Transit District"
                    time ="June 2019 - May 2021"
                    logo={samtrans}
                    description =""
                    setBackground={true}
                />
                <ExperienceContent
                    company="AlienVault"
                    time ="August 2017 - September 2018"
                    logo={alienvault}
                    description =""
                />
            </div>
            
            <h2><u>
                Leadership Experience
            </u></h2>
        </>
    )
}