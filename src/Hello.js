import React from "react";

//Rider.propTypes = { desc: propTypes.String.isRequired };
export const Hello = () => {
  return <h4>Hello World</h4>;
};

export default React.memo(Hello);
