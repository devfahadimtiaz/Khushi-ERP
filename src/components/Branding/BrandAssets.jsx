import React, { useState } from "react";
import styles from "./BrandAssets.module.css";
import FileCard from "./FileCard";

// SVG Components
const UploadIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99967 3.33325V16.6666M3.33301 9.99992H16.6663"
      stroke="white"
      strokeWidth="2"
    ></path>
  </svg>
);

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 14L11 11M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
      stroke="#363565"
      strokeWidth="2"
    ></path>
  </svg>
);

const SquareIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33301 4.16659C3.33301 3.70635 3.70611 3.33325 4.16634 3.33325H15.833C16.2933 3.33325 16.6663 3.70635 16.6663 4.16659V15.8333C16.6663 16.2935 16.2933 16.6666 15.833 16.6666H4.16634C3.70611 16.6666 3.33301 16.2935 3.33301 15.8333V4.16659Z"
      stroke="black"
      strokeWidth="2"
    ></path>
  </svg>
);

const FilledSquareIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667Z"
      stroke="black"
      strokeWidth="2"
    ></path>
  </svg>
);

function BrandAssets() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample file data
  const files = [
    {
      id: 1,
      name: "Company Logo Primary.png",
      size: "2.4 MB",
      date: "2024-01-15",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e0ffce7792504f7860c79b5cb645a24381eec57?placeholderIfAbsent=true",
      category: "logos",
    },
    {
      id: 2,
      name: "Corporate Brochure 2024.pdf",
      size: "5.8 MB",
      date: "2024-01-10",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3cb8eda1d4384dedc1402358eb74bbdfdfc18df?placeholderIfAbsent=true",
      category: "brochures",
    },
    {
      id: 3,
      name: "Company Profile.pdf",
      size: "3.2 MB",
      date: "2024-01-08",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3cb8eda1d4384dedc1402358eb74bbdfdfc18df?placeholderIfAbsent=true",
      category: "company-profiles",
    },
    {
      id: 4,
      name: "Product Flyer Q1.ai",
      size: "4.1 MB",
      date: "2024-01-05",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6c7c8595e541767d496da5264187ebeea78b7c7?placeholderIfAbsent=true",
      category: "flyers",
    },
    {
      id: 5,
      name: "Brand Guidelines.pdf",
      size: "8.7 MB",
      date: "2024-01-03",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3cb8eda1d4384dedc1402358eb74bbdfdfc18df?placeholderIfAbsent=true",
      category: "brochures",
    },
    {
      id: 6,
      name: "Social Media Kit.zip",
      size: "15.2 MB",
      date: "2024-01-01",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a18e1f1653f75fdc06b5849e3b0690a0762951b1?placeholderIfAbsent=true",
      category: "social-media",
    },
  ];

  // Categories for sidebar
  const categories = [
    { id: "all", label: "All Files", icon: <SquareIcon /> },
    { id: "logos", label: "Logos", icon: <FilledSquareIcon /> },
    { id: "brochures", label: "Brochures", icon: <FilledSquareIcon /> },
    {
      id: "company-profiles",
      label: "Company Profiles",
      icon: <FilledSquareIcon />,
    },
    { id: "flyers", label: "Flyers", icon: <FilledSquareIcon /> },
    { id: "stickers", label: "Stickers", icon: <FilledSquareIcon /> },
    {
      id: "business-cards",
      label: "Business Cards",
      icon: <FilledSquareIcon />,
    },
    { id: "social-media", label: "Social Media", icon: <FilledSquareIcon /> },
  ];

  // Filter files based on search query and selected category
  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || file.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleDownload = (fileId) => {
    console.log(`Downloading file with ID: ${fileId}`);
    // Implement download functionality
  };

  const handleDelete = (fileId) => {
    console.log(`Deleting file with ID: ${fileId}`);
    // Implement delete functionality
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <button className={styles.uploadButton}>
            <UploadIcon />
            <span>Upload New</span>
          </button>

          {categories.map((category) => (
            <div
              key={category.id}
              className={`${styles.categoryItem} ${selectedCategory === category.id ? styles.active : ""}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className={styles.iconContainer}>{category.icon}</div>
              <span>{category.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>Brand Assets</h1>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon />
            </div>
          </div>

          <div className={styles.fileGrid}>
            {filteredFiles.map((file) => (
              <FileCard
                key={file.id}
                file={file}
                onDownload={() => handleDownload(file.id)}
                onDelete={() => handleDelete(file.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandAssets;
