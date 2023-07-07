import MissionCard from "./MissionCard"
import Title from "./Title"
import missions from "../data/missions"

function Missions () {
return (
    <div data-testid='missions'>
    <Title headline="Missões" />
    {missions.map(({name, year, country, destination}) => (
        <MissionCard 
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
        />
    ))}
    
    </div>
)
}

export default Missions