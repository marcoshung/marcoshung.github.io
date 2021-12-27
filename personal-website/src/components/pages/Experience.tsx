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
                    <>   
                        In Fall 2021 I had the opportunity to intern with NASA as a Data 
                        Science Intern on various projects to improve the machine learning pipeline.
                        I worked with in the Scientific Computing and Visualization Team as a part of 
                        the Graphics and Visualization Lab (GVIS). I had the privilege of working with 
                        numerous researchers across the research center where I gained invaluable 
                        insight into various areas of focus related to space exploration as well as 
                        experience within the data science realm.
                        <br/><br/> 
                        My Intern project was to research and explore different explainable artificial 
                        intelligence tools that could be implemented in projects throughout the agency.
                        I experimented with different tools and techniques such as SHAP, LIME, InterpretML,
                        Captum, and OpenAI Microscope. Throughout this internship I utilized languages and 
                        frameworks such as Python, Tensorflow, PyTorch, keras, pandas, and Linux.
                    </>
                }
                />
                <ExperienceContent
                    company="Amazon"
                    time ="June 2021 - August 2021"
                    logo={amazon}
                    description ={
                        <>
                        In Summer 2021 I got the chance to intern with Amazon as a Software Development Engineer 
                        Intern. I was assigned to work with Amazon Web Services as part of the Worldwide Public 
                        Sector. My team worked on a internal project management tool that consisted of numerous
                        resources and nested resources that needed to be managed.
                        <br/><br/>
                        For my Intern project I designed a new feature for my team's web application that was able to 
                        automatically generate nested resources with the correct and corresponding resources based 
                        on user input and filters. I came involved with a lot of full stack work. I designed and 
                        implemented the UI/UX of the web application in TypeScript and React and constructed an AWS 
                        Lambda in Python on the backend to allocate the queries to our DynamoDB off the client's servers
                        and invoked it on the Frontend through a REST API I created. It was an incredibly rewarding 
                        experience in which I gained valuable experience in a large tech stack, such as React, TypeScript, 
                        Python, AWS Lambda, API Gateway, CloudWatch, DynamoDB, Amazon EC2, SageMaker, CloudFormation, 
                        CloudTrail, IAM Roles, Postman, and Elasticsearch
    
                        </>
                    }
                    setBackground={true}
                />
                <ExperienceContent
                    company="Deliverr"
                    time ="January 2021 - May 2021"
                    logo={deliverr}
                    description ={
                    <>
                    Deliverr is an e-commerce platform that provides shipping services and logistics for businesses around 
                    the U.S and one of LinkedIn's 2020 Top Startups in the USA and in Spring 2021 I was delighted to have my 
                    first Software Engineering Internship at Deliverr where I worked on the Inbounds team. 
                    <br/><br/>
                    I had a variety of different projects that I had the opportunity to work on. Throughout the internship I 
                    took on tickets on the Frontend to help resolve issues that were affecting our users. One of my projects 
                    was to conduct a funnel analysis on our web application to identify where our users were dropping off and 
                    identify user choke points, as well as provide recommendations on how to reduce these issues. I also had 
                    the chance to take on a Backend related project to create an ETL pipeline between our master Snowflake database 
                    to our application's local MySQL database to access missing data in our application. I did this by constructing 
                    an API on the backend that retrieved and handled all the transformations that needed to be done, then scheduled 
                    a simple lambda to hit the API daily during low use hours. I'm incredibly grateful to have had the opportunity to
                    intern with Deliverr and have the chance to wear many different hats in this role where I was able to gain 
                    experience in a large tech stack such as TypeScript, React, CSS, Python, AWS Lambda, Snowflake, MySQL, cron jobs, 
                    Postman, Jest, and React styled components.
                    </>}
                />
                <ExperienceContent
                    company="Codeucate"
                    time ="July 2020 - August 2020"
                    logo={codeucate}
                    description ={
                    <>
                    </>}
                />                
                <ExperienceContent
                    company="San Jose State University"
                    time ="January 2020 - July 2020"
                    logo={sjsu}
                    description ={<></>}
                />
                <ExperienceContent
                    company="San Mateo County Transit District"
                    time ="June 2019 - May 2021"
                    logo={samtrans}
                    description ={<></>}
                    setBackground={true}
                />
                <ExperienceContent
                    company="AlienVault"
                    time ="August 2017 - September 2018"
                    logo={alienvault}
                    description ={<></>}
                />
            </div>
            
            <h2><u>
                Leadership Experience
            </u></h2>
        </>
    )
}