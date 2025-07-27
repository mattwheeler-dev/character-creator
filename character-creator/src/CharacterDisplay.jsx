import { useState } from "react";

const bodyTypes = ["type1", "type2"];

const skinTonesMap = {
	type1: [
		{ id: "peach-glow", value: "skin1", color: "#DFC0A4" },
		{ id: "soft-honey", value: "skin2", color: "#FCC18D" },
		{ id: "warm-ivory", value: "skin3", color: "#FDD490" },
		{ id: "sunlit-amber", value: "skin4", color: "#D09861" },
		{ id: "clay-rose", value: "skin5", color: "#E1895F" },
		{ id: "mahogany-heat", value: "skin6", color: "#624329" },
		{ id: "deep-cocoa", value: "skin7", color: "#5D3A2E" },
	],
	type2: [
		{ id: "sandy-beige", value: "skin1", color: "#FDDBC3" },
		{ id: "melon-blush", value: "skin2", color: "#FDD9B7" },
		{ id: "golden-dawn", value: "skin3", color: "#FDE9AF" },
		{ id: "caramel-earth", value: "skin4", color: "#F6C399" },
		{ id: "sunset-terracotta", value: "skin5", color: "#845242" },
		{ id: "spiced-oak", value: "skin6", color: "#6E3B2D" },
		{ id: "ember-rust", value: "skin7", color: "#593B26" },
	],
};

const hairColors = [
	{ id: "brown", name: "Brown", color: "#4E3A25" },
	{ id: "black", name: "Black", color: "#2C2A23" },
	{ id: "blue", name: "Blue", color: "#263D4B" },
	{ id: "purple", name: "Purple", color: "#1B0148" },
	{ id: "green", name: "Green", color: "#263D0C" },
];

const hairStyles = ["none", "short", "afro"];

const facialHairStyles = ["none", "medium"];

const CharacterDisplay = () => {
	const [selectedType, setSelectedType] = useState("type1");
	const [selectedTone, setSelectedTone] = useState(skinTonesMap["type1"][0]);
	const [selectedHairStyle, setSelectedHairStyle] = useState("short");
	const [selectedHairColor, setSelectedHairColor] = useState(hairColors[0]);
	const [selectedFacialHairStyle, setSelectedFacialHairStyle] =
		useState("medium");
	const [selectedFacialHairColor, setSelectedFacialHairColor] = useState(
		hairColors[0]
	);

	const skinTones = skinTonesMap[selectedType];

	const skinPath = `/assets/characters/${selectedType}/base/${selectedTone.value}.webp`;
	const clothesPath = `assets/characters/${selectedType}/clothes.webp`;
	const hairPath = `/assets/characters/${selectedType}/hair/${selectedHairStyle}_${selectedHairColor.id}.webp`;
	const facialHairPath = `/assets/characters/${selectedType}/facial_hair/${selectedFacialHairStyle}_${selectedFacialHairColor.id}.webp`;

	return (
		<section className="container">
			<div className="character-display">
				<img
					className="base"
					src={skinPath}
					alt={`Game art character with body type ${selectedType} and skin tone ${selectedTone.id}`}
				/>
				<img
					className="clothes"
					src={clothesPath}
					alt={`Game art fantasy theme basic outfit`}
				/>
				{selectedHairStyle != "none" && (
					<img
						className="hair"
						src={hairPath}
						alt={`${selectedHairStyle}, ${selectedHairColor} hair`}
					/>
				)}
				{selectedFacialHairStyle != "none" && (
					<img
						className="facial-hair"
						src={facialHairPath}
						alt={`${selectedFacialHairStyle}, ${selectedFacialHairColor} facial hair`}
					/>
				)}
			</div>

			<div className="menu">
				<h2>Customization Menu</h2>
				{/* Body type selection */}
				<div className="btns-container types">
					<h3>Body Type</h3>
					{bodyTypes.map((type) => (
						<button
							className={selectedType == type ? "selected" : ""}
							key={type}
							onClick={() => setSelectedType(type)}
							title={type}
						>
							{type}
						</button>
					))}
				</div>

				{/* Skin tone selection */}
				<div className="btns-container tones">
					<h3>Skin Tone</h3>
					{skinTones.map((tone) => (
						<button
							className={selectedTone.value == tone.value ? "selected" : ""}
							key={tone.id}
							onClick={() => setSelectedTone(tone)}
							title={tone.id.replace("-", " ")}
							style={{
								backgroundColor: tone.color,
							}}
						></button>
					))}
				</div>

				{/* Hair style selection */}
				<div className="btns-container hair-styles">
					<h3>Hair Style</h3>
					{hairStyles.map((style) => (
						<button
							className={selectedHairStyle == style ? "selected" : ""}
							key={style}
							onClick={() => setSelectedHairStyle(style)}
							title={style}
						>
							{style}
						</button>
					))}
				</div>

				{/* Hair color selection */}
				<div className="btns-container hair-colors">
					<h3>Hair Color</h3>
					{hairColors.map((color) => (
						<button
							className={selectedHairColor.id == color.id ? "selected" : ""}
							key={color.id}
							onClick={() => setSelectedHairColor(color)}
							title={color.name}
							aria-label={`Hair Color: ${color.name}`}
							style={{
								backgroundColor: color.color,
							}}
						></button>
					))}
				</div>

				{/* Facial hair style selection */}
				<div className="btns-container facial-hair-styles">
					<h3>Facial Hair</h3>
					{facialHairStyles.map((style) => (
						<button
							className={selectedFacialHairStyle == style ? "selected" : ""}
							key={style}
							onClick={() => setSelectedFacialHairStyle(style)}
							title={style}
						>
							{style}
						</button>
					))}
				</div>

				{/* Facial hair color selection */}
				<div className="btns-container facial-hair-colors">
					<h3>Facial Hair Color</h3>
					{hairColors.map((color) => (
						<button
							className={
								selectedFacialHairColor.id == color.id ? "selected" : ""
							}
							key={color.name}
							onClick={() => setSelectedFacialHairColor(color)}
							title={color.name}
							aria-label={`Facial Hair Color: ${color.name}`}
							style={{
								backgroundColor: color.color,
							}}
						></button>
					))}
				</div>
			</div>
		</section>
	);
};

export default CharacterDisplay;
