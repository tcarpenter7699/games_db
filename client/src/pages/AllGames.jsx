import { useEffect, useState } from "react";

const AllGames = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            //set Games state
            try{
            const response = await fetch("/api/game");
            const gameData = await response.json();
            // console.log(gameData);
            setGames(gameData);
            }catch(err){
                console.log(err);
            } 
        };
        fetchGames();
    }, []);

    return (
    <>
        <h2>Games</h2>
        {games.map(game => {
            return <p key={game.id}>{game.title}</p>
        })}
    </>
    );
};

export default AllGames;