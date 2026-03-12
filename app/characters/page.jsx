import Link from "next/link";

export default async function Characters() {

    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json()
    
    return (
        <>
        <h2>Characters</h2>
        <ul>
            { data.results.map((character) => {   
                return <li key={character.id}><Link href={"/characters/" + character.id} key={character.id}>{character.name}</Link></li>
            })}
        </ul>
        </>
    )
}