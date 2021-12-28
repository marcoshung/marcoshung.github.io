import './Experience.css'
import nasa from '../../images/nasa.png';
import amazon from '../../images/amazon.png';
import deliverr from '../../images/deliverr.png';
import codeucate from '../../images/codeucate.png';
import samtrans from '../../images/samtrans.png';
import alienvault from '../../images/alienvault.png';
import akpsi from '../../images/akpsi.png'
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
                    In Summer 2020 I volunteered as a Developer Intern for the non-profit Codeucate which provides computer science 
                    education to elementary and middle school students. In addition to helping migrate their existing website from 
                    a Wordpress site to a Django based website, I also designed an email automation system that helped the marketing team's
                    outreach efforts. I had the chance to work with in Python and Django throughout this internship.
                    </>}
                />                
                <ExperienceContent
                    company="San Jose State University"
                    time ="January 2020 - July 2020"
                    logo={sjsu}
                    description ={
                    <>
                    In Spring 2020 I held two student assistant positions at San Jose State University simultaneously. My first role was
                    as a teaching assistant for the Introduction to Data Structures course where I I helped review and debug 167 students' 
                    homework and projects to streamline the grading process. I also helped build the foundation of the class's knowledge 
                    of basic data structures and algorithms by explaining and illustrating topics such as Inheritance, Polymorphism, 
                    Recursion, Sorting, Stacks, Queues, Linked-Lists, Trees, Maps and overall best coding practices. I ensured that every 
                    student got constructive feedback on their code to ensure that their foundation of data structures was exceptional in 
                    order to help them succeed in future course work.
                    <br/><br/>
                    My second position was as a student assistant for the School of Social Work where I helped facilitate faculty events and 
                    served as a liaison for any current or potential student or alumni. In addition to data entry and book keeping to help 
                    manage the department's documents, I also performed outreach for our department to increase funding for department held 
                    events.
                    </>}
                />
                <ExperienceContent
                    company="San Mateo County Transit District"
                    time ="June 2019 - May 2021"
                    logo={samtrans}
                    description ={
                    <>
                    In Summer 2019 I had the opportunity to intern with the San Mateo County Transit District as the 
                    Information Technology Intern, where I was in charge of designing the new employee intranet portal 
                    that would be utilized for internal communications. I constructed the site in SharePoint and was able 
                    to replace the outdated portal, drastically increasing user satisfaction. As a result, my internship 
                    was extended to allow me to continue maintain and update the website with new designs throughout the 
                    school year and beyond. 
                    </>}
                    setBackground={true}
                />
                <ExperienceContent
                    company="AlienVault"
                    time ="August 2017 - September 2018"
                    logo={alienvault}
                    description ={
                    <>
                    In my Senior year of High School I interned with AlienVault (now AT&T Cybersecurity) as an accounting 
                    intern where I processed AP invoices and managed vendor transactions in Oracle NetSuite. I was able
                    to consolidate transactions from over 30 vendors to help predict future purchases and help senior 
                    accountants manage funds for future financial needs.
                    </>}
                />
            </div>
            
            <h2><u>
                Leadership Experience
            </u></h2>
            <div className="experience-content">
                    <ExperienceContent
                        company="Alpha Kappa Psi"
                        time ="February 2019 - December 2021"
                        logo={akpsi}
                        description ={
                        <>
                        Alpha Kappa Psi is the premier business fraternity founded on the principles of educating 
                        its members and the public to appreciate and demand higher ideals in business and to further 
                        the individual welfare of members during college and beyond. I was accepted into this organization
                        and had the privilege of taking on multiple roles for the organization in my college career.
                        <br/><br/>
                        I was first the Fundraising Director, I managed a committee of 6 to execute over a dozen fundraisers 
                        in the 12 weeks of my term generating $3,000 in revenue to support our organization's professional 
                        events and recruitment efforts. For these events, I collaborated with vendors and coordinated with 
                        members of the fraternity to volunteer and market the event via social media platforms. I also 
                        tracked expenses and revenue for all events and kept clear financial transparency with the rest 
                        of the fraternity.
                        <br/><br/>
                        Afterwards I served as the Vice President of Finance where I tracked and budgeted all of our 
                        organizations revenue and expenses to ensure the financial longevity of our Chapter. To keep 
                        clear communication with my board members as well as general members, I generated concise data 
                        visualizations in Tableau for easy quantitative analysis of our financial standing.
                        <br/><br/>
                        During the 2020 pandemic I served as the Social Chair for the organization and conducted events 
                        online to help promote engagement from our members during difficult times, while also ensuring the 
                        safety of our members.
                        <br/><br/>
                        Finally in my last term, I had the opportunity to be one of the Pledge Mentors of our semester's 14 
                        recruits. My co and I committed to growing and developing 14 aspiring business professionals through 
                        a rigorous 7-week long process in Alpha Kappa Psi and instilling critical business skills into the 
                        Pledge Class such as professional switches, impromptu public speaking, strong resume/linkedin’s, 
                        conflict resolution, etc. I am incredibly grateful to have been able to lead these 14 individuals 
                        and incredibly proud of every single one of them for the growth they have exhibited and will continue 
                        to see in their professional careers.
                        </>}
                    />
                </div>
        </>
    )
}