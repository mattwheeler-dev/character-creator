import { useState } from "react";

const bodyTypes = ["type1", "type2"];

const skinTonesMap = {
	type1: [
		{ id: "t1_s1", value: "skin1", color: "#DFC0A4" },
		{ id: "t1_s2", value: "skin2", color: "#FCC18D" },
		{ id: "t1_s3", value: "skin3", color: "#FDD490" },
		{ id: "t1_s4", value: "skin4", color: "#D09861" },
		{ id: "t1_s5", value: "skin5", color: "#E1895F" },
		{ id: "t1_s6", value: "skin6", color: "#624329" },
		{ id: "t1_s7", value: "skin7", color: "#5D3A2E" },
	],
	type2: [
		{ id: "t2_s1", value: "skin1", color: "#FDDBC3" },
		{ id: "t2_s2", value: "skin2", color: "#FDD9B7" },
		{ id: "t2_s3", value: "skin3", color: "#FDE9AF" },
		{ id: "t2_s4", value: "skin4", color: "#F6C399" },
		{ id: "t2_s5", value: "skin5", color: "#845242" },
		{ id: "t2_s6", value: "skin6", color: "#6E3B2D" },
		{ id: "t2_s7", value: "skin7", color: "#593B26" },
	],
};

const hairStyles = ["none", "short"];

const facialHairStyles = ["none", "medium"];

const hairColors = ["brown", "black", "blue", "purple", "green"];

const CharacterDisplay = () => {
	const [selectedType, setSelectedType] = useState("type1");
	const [selectedTone, setSelectedTone] = useState("skin1");
	const [selectedHairStyle, setSelectedHairStyle] = useState("short");
	const [selectedHairColor, setSelectedHairColor] = useState("blue");
	const [selectedFacialHairStyle, setSelectedFacialHairStyle] =
		useState("medium");
	const [selectedFacialHairColor, setSelectedFacialHairColor] =
		useState("blue");

	const skinTones = skinTonesMap[selectedType];

	const skinPath = `/assets/characters/${selectedType}/base/${selectedTone}.webp`;
	const hairPath = `/assets/characters/${selectedType}/hair/${selectedHairStyle}_${selectedHairColor}.webp`;
	const facialHairPath = `/assets/characters/${selectedType}/facial_hair/${selectedFacialHairStyle}_${selectedFacialHairColor}.webp`;

	return (
		<section className="container">
			<div className="character-display">
				<img
					className="base"
					src={skinPath}
					alt={`Game art character with body type ${selectedType} and skin tone ${selectedTone}`}
				/>
				<img
					className="hair"
					src={hairPath}
					alt={`${selectedHairStyle}, ${selectedHairColor} hair`}
				/>
				<img
					className="facial-hair"
					src={facialHairPath}
					alt={`${selectedFacialHairStyle}, ${selectedFacialHairColor} facial hair`}
				/>
			</div>

			<div className="menu">
				<h2>Customization Menu</h2>
				{/* Body type selection */}
				<div className="types-btns">
					<h3>Body Type</h3>
					{bodyTypes.map((type) => (
						<button
							className={selectedType == type ? "selected" : ""}
							key={type}
							onClick={() => setSelectedType(type)}
						>
							{type}
						</button>
					))}
				</div>

				{/* Skin tone selection */}
				<div className="tones-btns">
					<h3>Skin Tone</h3>
					{skinTones.map((tone) => (
						<button
							className={selectedTone == tone.value ? "selected" : ""}
							key={tone.id}
							onClick={() => setSelectedTone(tone.value)}
							style={{
								backgroundColor: tone.color,
							}}
						></button>
					))}
				</div>

				{/* Hair style selection */}
				<div className="hair-style-btns">
					<h3>Hair Style</h3>
					{hairStyles.map((style) => (
						<button
							className={selectedHairStyle == style ? "selected" : ""}
							key={style}
							onClick={() => setSelectedHairStyle(style)}
						>
							{style}
						</button>
					))}
				</div>

				{/* Hair color selection */}
				<div className="hair-color-btns">
					<h3>Hair Color</h3>
					{hairColors.map((color) => (
						<button
							className={selectedHairColor == color ? "selected" : ""}
							key={color}
							onClick={() => setSelectedHairColor(color)}
						>
							{color}
						</button>
					))}
				</div>

				{/* Facial hair style selection */}
				<div className="facial-hair-style-btns">
					<h3>Facial Hair</h3>
					{facialHairStyles.map((style) => (
						<button
							className={selectedFacialHairStyle == style ? "selected" : ""}
							key={style}
							onClick={() => setSelectedFacialHairStyle(style)}
						>
							{style}
						</button>
					))}
				</div>

				{/* Facial hair color selection */}
				<div className="facial-hair-color-btns">
					<h3>Facial Hair Color</h3>
					{hairColors.map((color) => (
						<button
							className={selectedFacialHairColor == color ? "selected" : ""}
							key={color}
							onClick={() => setSelectedFacialHairColor(color)}
						>
							{color}
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export default CharacterDisplay;
