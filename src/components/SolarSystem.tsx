import Title from "./Title";
import PlanetCard from "./PlanetCard";
import Planets from "../data/planets";


function SolarSystem () {
    return (
        <div data-testid='solar-system'>
            <Title headline="Planetas" />
            {Planets.map(({name, image}) => (
                <PlanetCard 
                key={name}
                planetName={ name }  
                planetImage={ image }  
                />
            ))}
            
        </div>

    );
}
export default SolarSystem