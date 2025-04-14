import React, { useState } from "react";
import styles from "./SelectVehicleMake.module.css";
import SelectVehicleModel from "./SelectVehicleModel";

function SelectVehicleMake({ onBack, onSelectMake }) {
  const [selectedMake, setSelectedMake] = useState(null);
  const [showModelSelection, setShowModelSelection] = useState(false);

  const handleMakeSelection = (make) => {
    setSelectedMake(make);
  };

  const handleContinue = () => {
    if (selectedMake) {
      setShowModelSelection(true);
    }
  };

  const handleBackToMakes = () => {
    setShowModelSelection(false);
  };

  const vehicleMakes = [
    {
      name: "Toyota",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/1e18b62a2bdb61a6344da6839e418b9c298b08c1?placeholderIfAbsent=true",
      iconClass: styles.iconGray,
      iconStyle: { aspectRatio: "1.47", width: "28px" },
    },
    {
      name: "BMW",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/baa52afe5d59bbea3078db159050f1ae4063e28a?placeholderIfAbsent=true",
      iconClass: styles.iconBlue,
      iconStyle: { aspectRatio: "1", width: "27px" },
    },
    {
      name: "Mercedes",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/e66f1d4fc663d1f789401ec2a3ea02dfbc7b6c3b?placeholderIfAbsent=true",
      iconClass: styles.iconBlack,
      iconStyle: { aspectRatio: "1.04", width: "24px" },
    },
    {
      name: "Audi",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/665bf55cdfb5183cf6ba819f2b251c408ad7c7ee?placeholderIfAbsent=true",
      iconClass: styles.iconDarkGray,
      iconStyle: { aspectRatio: "1.37", width: "26px" },
    },
    {
      name: "Volkswagen",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/860e0db9e37f83b460bd3b85b2a50c7abba271b3?placeholderIfAbsent=true",
      iconClass: styles.iconTransparent,
      iconStyle: { aspectRatio: "1", width: "24px" },
    },
    {
      name: "Honda",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/6bc31d9b8a4eed47cafb47e9ea9e8f0cc9adb633?placeholderIfAbsent=true",
      iconClass: styles.iconLightestGray,
      iconStyle: { aspectRatio: "1.19", width: "25px" },
    },
    {
      name: "Ford",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/fb7479235255db33f550a08110b44b5deb6cea58?placeholderIfAbsent=true",
      iconClass: styles.iconTransparent,
      iconStyle: { aspectRatio: "1.65", width: "28px" },
    },
    {
      name: "Nissan",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/b8d66793ffeae95a8083cc38b952c1bc6b0c6c59?placeholderIfAbsent=true",
      iconClass: styles.iconDarkGray,
      iconStyle: { aspectRatio: "1.17", width: "27px" },
    },
    {
      name: "Porsche",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/44a46e652e27c93f401f72093e75505375383fab?placeholderIfAbsent=true",
      iconClass: styles.iconYellow,
      iconStyle: { aspectRatio: "0.75", width: "21px" },
    },
    {
      name: "Lexus",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/49506ad3e1fbff5edf7514828679d67f1cf8adb8?placeholderIfAbsent=true",
      iconClass: styles.iconLightestGray,
      iconStyle: { aspectRatio: "1", width: "28px" },
    },
    {
      name: "Volvo",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/df1e1905720d0d0b019b22a116305df5337375e3?placeholderIfAbsent=true",
      iconClass: styles.iconNavyBlue,
      iconStyle: { aspectRatio: "1.04", width: "24px" },
    },
    {
      name: "Subaru",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/1b8f6b72d84469fbcaca9c833bc5e0d5eae9f2d5?placeholderIfAbsent=true",
      iconClass: styles.iconTransparent,
      iconStyle: { aspectRatio: "1.78", width: "32px" },
    },
    {
      name: "Lamborghini",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/166215ae1a0d763a7fcd6e1cf3938a08ee56d156?placeholderIfAbsent=true",
      iconClass: styles.iconBlack,
      iconStyle: { aspectRatio: "0.91", width: "20px" },
    },
    {
      name: "Mazda",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/7e7d513810228fa7aefb47ef559b899340b9935b?placeholderIfAbsent=true",
      iconClass: styles.iconLightGray,
      iconStyle: { aspectRatio: "1.29", width: "27px" },
    },
    {
      name: "Land Rover",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/3ad47031ec14139e4b574ca0f43cc3c17161afb6?placeholderIfAbsent=true",
      iconClass: styles.iconTransparent,
      iconStyle: { aspectRatio: "1.8", width: "36px" },
    },
    {
      name: "Audi",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/3a626115f82d607193622f2231e9b683d5863488?placeholderIfAbsent=true",
      iconClass: styles.iconTransparent,
      iconStyle: { aspectRatio: "0.96", width: "26px" },
    },
    {
      name: "ISUZU",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/ad0c66f65c78650ca99c98a68a9d66f2d37e69f1?placeholderIfAbsent=true",
      iconClass: styles.iconBlack,
      iconStyle: { aspectRatio: "4.42", width: "31px" },
    },
    {
      name: "Daihatsu",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/4a5383386556d19c081d1166028a6036defb5cbd?placeholderIfAbsent=true",
      iconClass: styles.iconLightestGray,
      iconStyle: { aspectRatio: "1.26", width: "29px" },
    },
    {
      name: "Mitsubishi",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/d7c7c9a9856891462484803ec00a7cb8e37b7d19?placeholderIfAbsent=true",
      iconClass: styles.iconRedLight,
      iconStyle: { aspectRatio: "0.79", width: "23px" },
    },
    {
      name: "Mini",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/657595c1d6c7a3185fc445f75b92da8aa311d0de?placeholderIfAbsent=true",
      iconClass: styles.iconDarkGray,
      iconStyle: { aspectRatio: "1.83", width: "33px" },
    },
    {
      name: "Opel",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/cfaaf4e10bbd5ae407ead7ff622a8931b1c61629?placeholderIfAbsent=true",
      iconClass: styles.iconTransparent,
      iconStyle: { aspectRatio: "1.26", width: "29px" },
    },
    {
      name: "Jeep",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/77083a9bfea64911913755107158b29f/d10e3befe5bf6a711dd1939d0a191e379e6cc0a6?placeholderIfAbsent=true",
      iconClass: styles.iconLightestGray,
      iconStyle: { aspectRatio: "1.85", width: "24px" },
    },
  ];

  // Create pairs of makes for the grid layout
  const makeRows = [];
  for (let i = 0; i < vehicleMakes.length; i += 2) {
    if (i + 1 < vehicleMakes.length) {
      makeRows.push([vehicleMakes[i], vehicleMakes[i + 1]]);
    } else {
      makeRows.push([vehicleMakes[i]]);
    }
  }

  if (showModelSelection) {
    return (
      <SelectVehicleModel make={selectedMake} onBack={handleBackToMakes} />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.header}>
                <div className={styles.backButton} onClick={onBack}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8337 10H4.16699"
                      stroke="#475569"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.0003 15.8332L4.16699 9.99983L10.0003 4.1665"
                      stroke="#475569"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
               
        <h1 className={styles.pageTitle}>Select Vehicle Make</h1>
        </div>
        {makeRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={rowIndex === 0 ? styles.makeGrid : styles.makeRow}
          >
            {row.map((make, index) => (
              <div
                key={`${make.name}-${index}`}
                className={`${styles.makeCard} ${selectedMake === make.name ? styles.makeCardSelected : ""}`}
                onClick={() => handleMakeSelection(make.name)}
              >
                <div className={`${styles.iconContainer} ${make.iconClass}`}>
                  <img
                    src={make.iconSrc}
                    className={styles.makeIcon}
                    style={make.iconStyle}
                    alt={`${make.name} logo`}
                  />
                </div>
                <div className={styles.makeDetails}>
                  <div className={styles.makeName}>{make.name}</div>
                  <div className={styles.makeAction}>Select this make</div>
                </div>
              </div>
            ))}
          </div>
        ))}

        <button
          className={styles.continueButton}
          onClick={handleContinue}
          disabled={!selectedMake}
        >
          Continue to Selected Make
        </button>
      </div>
    </div>
  );
}

export default SelectVehicleMake;
