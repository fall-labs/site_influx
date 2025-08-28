const Container = ({
	children,
	flexDirection = "column",
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
