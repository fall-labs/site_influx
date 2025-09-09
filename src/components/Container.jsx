const Container = ({ children, ...props }) => {
  return (
    <div id="container-center" {...props}>
      {children}
    </div>
  );
};

export default Container;
