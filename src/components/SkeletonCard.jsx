import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

const SkeletonCard = () => {
	const [foregroundColor, setForegroundColor] = useState("#ecebeb");
	const [backgroundColor, setBackgroundColor] = useState("#8892a1");

	useEffect(() => {
		const updateThemeColors = () => {
			const isDark = document.documentElement.classList.contains("dark");
			if (isDark) {
				setForegroundColor("#334155");
				setBackgroundColor("#8892a1");
			} else {
				setForegroundColor("#ecebeb");
				setBackgroundColor("#8892a1");
			}
		};

		// Initial color update
		updateThemeColors();

		const observer = new MutationObserver(updateThemeColors);
		observer.observe(document.documentElement, { attributes: true });

		return () => {
			observer.disconnect();
		};
	}, []);
	return (
		<ContentLoader
			className="max-w-full scale-125 min-372:scale-100"
			speed={1}
			width={335}
			height={335}
			viewBox="0 0 335 335"
			backgroundColor={backgroundColor}
			foregroundColor={foregroundColor}
		>
			<rect x="21" y="287" rx="7" ry="7" width="218" height="13" />
			<rect x="21" y="144" rx="8" ry="8" width="119" height="19" />
			<rect x="21" y="103" rx="8" ry="8" width="119" height="19" />
			<rect x="21" y="35" rx="8" ry="8" width="177" height="36" />
			<rect x="21" y="205" rx="7" ry="7" width="265" height="13" />
			<rect x="21" y="246" rx="7" ry="7" width="240" height="13" />
		</ContentLoader>
	);
};

export default SkeletonCard;
