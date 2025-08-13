const Container = ({
	children,
	flexDirection = "row",
	customStyle = {},
}) => {
	return (
		<div
			className={`container-center`}
			style={{ ...customStyle, flexDirection }}
		>
			{children}
		</div>
	);
};

export default Container;
