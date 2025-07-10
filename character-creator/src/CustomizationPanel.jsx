const CustomizationPanel = ({ appearance, setAppearance }) => {
	const handleChange = (part, value) => {
		setAppearance((prev) => ({ ...prev, [part]: value }));
	};

	return (
		<div>
			<select onChange={(e) => handleChange("skin", e.target.value)}>
				<option value="light">Light</option>
				<option value="olive">Olive</option>
				<option value="dark">Dark</option>
			</select>

			<select onChange={(e) => handleChange("hairStyle", e.target.value)}>
				<option value="none">None</option>
				<option value="short">Short</option>
				<option value="spiky">Spiky</option>
			</select>

			<select onChange={(e) => handleChange("hairColor", e.target.value)}>
				<option value="brown">Brown</option>
				<option value="blue">Blue</option>
				<option value="black">Black</option>
			</select>

			<select onChange={(e) => handleChange("facialHair", e.target.value)}>
				<option value="none">None</option>
				<option value="stubble">Stubble</option>
				<option value="beard">Beard</option>
			</select>

			<select onChange={(e) => handleChange("facialHairColor", e.target.value)}>
				<option value="brown">Brown</option>
				<option value="blue">Blue</option>
				<option value="black">Black</option>
			</select>
		</div>
	);
};

export default CustomizationPanel;
