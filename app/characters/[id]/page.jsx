import Character from "@/components/Character.jsx"
export default async function CharacterDetail( props ) {
    const {id} = await props.params;

    const response = await fetch("https://rickandmortyapi.com/api/character/" + id )
    const data = await response.json()
    return (
        <Character name={data.name} species={data.species} imageURL={data.image}/>
    )
}