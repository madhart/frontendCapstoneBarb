export default function Character( {name, species, imageURL} ) {
    return (
        <>
            <h2>{name}</h2>
            <p>{species}</p>
            <img src={imageURL}></img>
        </>
    )
}