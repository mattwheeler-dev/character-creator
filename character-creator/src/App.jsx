import { useState } from "react";
import CharacterViewer from "./CharacterViewer";
import CustomizationPanel from "./CustomizationPanel";

const App = () => {
	const [appearance, setAppearance] = useState({
		gender: "male",
		skin: "light",
		hairStyle: "short",
		hairColor: "brown",
		facialHair: "beard",
		facialHairColor: "brown",
		torso: "starter_shirt",
		legs: "starter_pants",
		feet: "starter_boots",
	});
	return (
		<>
			<h1>Character Creator</h1>
			<CharacterViewer appearance={appearance} />
			<CustomizationPanel
				appearance={appearance}
				setAppearance={setAppearance}
			/>
		</>
	);
};

export default App;
