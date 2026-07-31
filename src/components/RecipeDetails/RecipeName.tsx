const RecipeName = ({ name, creator }: { name: string, creator: string }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Created by: {creator}</p>
        </div>
    );
}

export default RecipeName;