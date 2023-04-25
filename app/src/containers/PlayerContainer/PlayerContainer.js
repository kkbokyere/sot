import Player from "../../components/Player";
import {EVENT_TYPES, PERIOD_NAMES} from '../../config'
import {useState} from "react";

const PlayerContainer = ({ events = [] }) => {
    const [ currentPeriod, setCurrentPeriod ] = useState(1)
    const [homeScore, setHomeScore ] = useState({
        score: 0,
        periodScore: 0
    })
    const [awayScore, setAwayScore ] = useState({
        score: 0,
        periodScore: 0
    })

    const handlePointEvent = ({ homeScore, awayScore }) => {
        setAwayScore((prevState) => ({
            ...prevState, score: awayScore
        }))
        setHomeScore((prevState) => ({
        ...prevState, score: homeScore
        }))
    }

    const handlePeriodScore = ({ homeScore, awayScore, period }) => {
        setAwayScore((prevState) => ({
            ...prevState, periodScore: awayScore, period
        }))
        setHomeScore((prevState) => ({
        ...prevState, periodScore: homeScore, period
        }))
    }

    const handleCurrentPeriod = ({ periodName }) => {
        setCurrentPeriod(PERIOD_NAMES[periodName])
    }

    events.forEach((event) => {
        switch (event.type) {
            case EVENT_TYPES.POINT:
                handlePointEvent(event)
                break;
            case EVENT_TYPES.PERIOD_SCORE:
                handlePeriodScore(event)
                break
            case EVENT_TYPES.PERIOD_START:
                handleCurrentPeriod(event)
                break;
            default:
        }
    })

    return (
        <div className='player-container'>
            <Player name={'Player A'} type={'home'} results={homeScore} currentPeriod={currentPeriod}/>
            <Player name={'Player B'} type={'away'} results={awayScore} currentPeriod={currentPeriod}/>
        </div>
    )
}

export default PlayerContainer;
