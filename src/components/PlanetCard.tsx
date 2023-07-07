type PlanetaCardProps = {
    planetName: string,
    planetImage: string,
};


function PlanetCard (props: PlanetaCardProps) {
    const { planetName, planetImage} = props;
    
    return (
        <div data-testid='planet-card'>
            <p data-testid='planet-name'>{planetName}</p>
            <img src={planetImage} alt={`Planeta ${planetName}`} />
        </div>
    );
}

export default PlanetCard