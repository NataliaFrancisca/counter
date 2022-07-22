import { Score } from "../Score/style";

const TeamComponent = ({nameTeam, className}) => {
    return(
        <section className={className}>
            <h2 className="title-team">{nameTeam}</h2>
            <Score />
        </section>
    )
}

export default TeamComponent;