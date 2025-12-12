import Image from "next/image";
import React from "react";

const CustomDivider = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        style={{
          height: 1,
          width: 550,
          backgroundColor: "#C2E2FA",
          marginRight: 40,
        }}
      />
      <Image
        src="/images/logoSquare.webp"
        width={50}
        height={50}
        alt="Grand Blanc Fields Square Logo"
        style={{objectFit: 'contain'}}
      />
      <div
        style={{
          height: 1,
          width: 550,
          backgroundColor: "#C2E2FA",
          marginLeft: 40,
        }}
      />
    </div>
  );
};

export default CustomDivider;
