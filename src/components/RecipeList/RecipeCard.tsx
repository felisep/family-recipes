type RecipeCardProps = {
    name: string;
    picture: string;
}

const RecipeCard = ( {name, picture}: RecipeCardProps) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={picture} alt={name} />
        </div>
    )
}