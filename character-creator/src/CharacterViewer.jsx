const CharacterViewer = ({ appearance }) => {
	return (
		<section className="character">
			<img
				src={`..//assets/characters/hair/hair_short_${appearance.hairColor}.webp`}
				alt=""
				width={200}
				height={150}
			/>
			<img
				src={`..//assets/characters/facial-hair/beard_${appearance.facialHairColor}.webp`}
				alt=""
				width={200}
				height={150}
			/>
		</section>
	);
};

export default CharacterViewer;
