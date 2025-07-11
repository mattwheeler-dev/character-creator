const CharacterViewer = ({ appearance }) => {
	return (
		<section className="character">
			<img
				src={`./assets/characters/${appearance.gender}/face/${appearance.skin}.png`}
				alt=""
				width={200}
				height={150}
			/>

			<img
				className={appearance.hairStyle == "none" ? "empty" : ""}
				src={`./assets/characters/${appearance.gender}/hair/${appearance.hairStyle}_${appearance.hairColor}.webp`}
				alt=""
				width={200}
				height={150}
			/>
			<img
				className={appearance.facialHair == "none" ? "empty" : ""}
				src={`./assets/characters/${appearance.gender}/facial-hair/${appearance.facialHair}_${appearance.facialHairColor}.webp`}
				alt=""
				width={200}
				height={150}
			/>
		</section>
	);
};

export default CharacterViewer;
