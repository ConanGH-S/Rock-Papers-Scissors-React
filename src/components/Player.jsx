import './player.css';

const Player = () => {
	return (
		<main>
			<form action="game.jsx">
				<label htmlFor="player1">Digite el nombre del primer jugador</label>
				<input type="text" name="player1" placeholder='Digite los datos aquí' id="player1" />
				<label htmlFor="player2">Digite el nombre del segundo jugador</label>
				<input type="text" name="player2" placeholder='Digite los datos aquí' id="player2" />
				<button>Enviar</button>
			</form>
		</main>
	);
};

export default Player;
