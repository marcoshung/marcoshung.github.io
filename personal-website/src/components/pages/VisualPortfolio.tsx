import './VisualPortfolio.css'
import { ProjectContent }from '../PortfolioContent';
import calInfo from '../../images/cal-infographic.png';
import calFires from '../../images/cal-wildfires.png';
import fyreComp from '../../images/fyre-comp.png';

export const VisualPortfolio = () => {
    return (
        <>
            <h2><u>
                Projects    
            </u></h2>
            <div className='projects'>
                <ProjectContent
                    title='California County Analyzer'
                    picture={calInfo}
                    description={
                        <>
                        This is an infographic detailing the housing situation in California.
                        California has one of the highest housing costs in the country, but in 
                        recent years home ownership has been steadily increasing, giving some hope 
                        for prospective home buyers for the future.
                        </>
                    }
                />

                <ProjectContent
                    title='California Wildfires'
                    picture={calFires}
                    description={
                        <>
                        This is a dashboard of data compiled regarding California wildfires which areas
                        have been most affected by them.
                        </>
                    }
                />

                <ProjectContent
                    title='Fyre Festival Competition'
                    picture={fyreComp}
                    description={
                        <>
                        This is an analysis of Fyre Festival's position in the market it entered using the 
                        Magic Quadrant
                        </>
                    }
                />
            </div>
        </>
    )
}