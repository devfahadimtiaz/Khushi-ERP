/** @jsxImportSource @emotion/react */
import React from "react";

function InputDesign() {
  return (
    <div className="input-design-container">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/3eccee2b7e2f4fc881196a8d6eb3ed20/22902b104205dc63081cf8ff5f07e8f9c0e41be1?placeholderIfAbsent=true"
        css={{
          aspectRatio: "1.5",
          objectFit: "contain",
          objectPosition: "center",
          width: "100%",
          "@media (max-width: 991px)": {
            maxWidth: "100%",
          },
        }}
        alt="Design input"
      />
    </div>
  );
}

export default InputDesign;
