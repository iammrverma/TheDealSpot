import React from "react";

const asusStyles = {
  display: "flex",
  alignItems: "center",
};

const Asus = ({ src }) => {
  return (
    <div className="Asus" style={asusStyles}>
        <img
          src={src}
          style={{
            width: "100%",
            height: "auto",
            backgroundSize: "contain",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            boxShadow:"border box",
            padding:"0 10px"
          }}
          alt="Asus"
        />
    </div>
  );
};

export default Asus;
