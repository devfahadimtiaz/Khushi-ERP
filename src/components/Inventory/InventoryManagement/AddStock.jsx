import React, { useState, useEffect } from "react";
import styles from "./AddStock.module.css";
import General from "./General";
import ExpenseTracker from "./ExpenseTracker";
import MediaUpload from "./MediaUpload";
import CameraaMenTask from "./CameraMenTask";
import DocumentUpload from "./DocumentUpload";
import DesignerTask from "./DesignerTask";
import VehicleInspectionChecklist from "./VehicleInspectionChecklist";
import Report from "./Report";
import StockDetail from "./StockDetail";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const API_URL = process.env.REACT_APP_API_URL;
const API_IMAGE = process.env.REACT_APP_API_IMAGE;
const AddStock = ({ handleBack }) => {
  const params = useParams();
  const vehicleId = params.id;
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoFiles, setVideoFiles] = useState([]);
  const [photoFiles, setPhotoFiles] = useState([]);
  const [docFiles, setDocsFile] = useState([]);
  const [expen, setExpen] = useState([]);
  const [cameraMenPhotoFiles, setCameraMenPhotosFiles] = useState([]);
  const [camperaMenVideosFiles, setCameraMenVideosFiles] = useState([]);
  const [GarageName, setGarageName] = useState([]);
  const [existingExpense, setExistingExense] = useState([]);
  const [existingPhotos, setExistingPhotos] = useState([]);
  const [existingVideos, setExistingVideos] = useState([]);
  const [existingDocs, setExistingDocs] = useState([]);
  const [selectedShowroom, setSelectedShowroom] = useState();
  const [userInfo, setUserInfo] = useState([]);
  const [currency, setCurrency] = useState();
  const [showroomCurrency, setShowroomCurrency] = useState();

  useEffect(() => {
    console.log("Photos File: ", photoFiles);
    console.log("Video Files: ", videoFiles);
    console.log("Document Files: ", docFiles)
    console.log("Expense : ", expen)
  }, [photoFiles, videoFiles,docFiles]);

  const [InventoryData, setInventoryData] = useState({
    //General Details
    garageId: "",
    vehicleType: "",
    stockNo: "",
    make: "",
    model: "",
    year: "",
    varient: "",
    mileage: "",
    vinNo: "",
    engine: "",
    interior: "",
    exterior: "",
    bodyType: "",
    fuelType: "",
    transmission: "",
    driveType: "",
    doors: "",
    seats: "",
    modelCode: "",
    auctionGrade: "",
    registrationNo: "",
    height: "",
    width: "",
    length: "",
    steering: "",
    groundClearance: "",
    engineNo: "",
    status: "",
    buyingPrice: "",
    totalPriceAfterExpense: "",
    totalPriceinUSD: "",

    media: [],
    documents: [],
    photograph: [],
    reels: [],
    verification: [],
    expense: [],
    reports: [],
    currentShowroom: "",
  });

  //fetch User Session
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${API_URL}/dashboard`, {
        withCredentials: true,
      });
      const data = response.data;
      if (data.valid) {
        setUserInfo(data);
      } else {
        console.log("User is not logged in");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (userInfo) {
      setSelectedShowroom(userInfo.showroom);
      setInventoryData((prev) => ({
        ...prev,
        currentShowroom: userInfo.showroom,
      }));
    }
  }, [userInfo]);

  const handleCancle = () => {
    navigate("/Stock");
  };
  //Garage Details Handler

  useEffect(() => {
    const fetchGarage = async () => {
      try {
        const res = await axios.get(`${API_URL}/garage`);
        const FetchedGarage = res.data;
        setGarageName(FetchedGarage);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGarage();
  }, []);
  //Load Inventory Data if vehicleId is provided
  useEffect(() => {
    if (!vehicleId) return;
    axios
      .get(`${API_URL}/allVehiclesDetails/${vehicleId}`)
      .then(async (res) => {
        const photos = (res.data.mediaData || [])
          .filter((media) => media.type === "image")
          .map((photo) => ({
            ...photo,
            fullUrl: API_IMAGE + photo.url, // <== For previews
          }));
        const videos = (res.data.mediaData || [])
          .filter((media) => media.type === "video")
          .map((video) => ({
            ...video,
            fullUrl: API_IMAGE + video.url,
          }));
        const documents = (res.data.documents || []).filter(
          (document) => document.type === "document" || []
        );
        setExistingPhotos(photos);
      
      
        setExistingVideos(videos);
       
        setExistingDocs(documents);

        setInventoryData({
          garageId: res.data.showroom_id,
          vehicleType: res.data.vehicle_type,
          stockNo: res.data.stock_no,
          make: res.data.make,
          model: res.data.model,
          year: res.data.year,
          varient: res.data.variant,
          mileage: res.data.mileage,
          vinNo: res.data.vin_no,
          engine: res.data.engine,
          interior: res.data.interior,
          exterior: res.data.exterior_color,
          bodyType: res.data.body_type,
          fuelType: res.data.fuel_type,
          transmission: res.data.transmission,
          driveType: res.data.drive_type,
          doors: res.data.doors,
          seats: res.data.seats,
          modelCode: res.data.model_code,
          auctionGrade: res.data.auction_grade,
          registrationNo: res.data.registration_no,
          height: res.data.height,
          width: res.data.width,
          length: res.data.length,
          steering: res.data.steering,
          groundClearance: res.data.ground_clearance,
          engineNo: res.data.engine_no,
          status: res.data.status,
          buyingPrice: res.data.price,
          totalPriceAfterExpense: res.data.total_price_after_expense,
          totalPriceinUSD: res.total_usd_price,
          media: photos,
          photograph: videos,
          documents: documents,
          expense: res.data.expensesData ,
        });
        setExistingExense(res.data.expensesData || []);
        setExpen(res.data.expensesData)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [vehicleId]);

  useState(()=>{
     console.log("Inventory Data: ", InventoryData)
  },[InventoryData])

  const handleGeneralDetails = (data) => {
    setInventoryData((prevInventoryData) => ({
      ...prevInventoryData,
      garageId: data.garageId,
      vehicleType: data.vehicleType,
      stockNo: data.stockNo,
      make: data.make,
      model: data.model,
      year: data.year,
      varient: data.varient,
      mileage: data.mileage,
      vinNo: data.vinNo,
      engine: data.engine,
      engineNo: data.engineNo,
      status: data.status,
      interior: data.interior,
      exterior: data.exterior,
      bodyType: data.bodyType,
      fuelType: data.fuelType,
      transmission: data.transmission,
      driveType: data.driveType,
      doors: data.doors,
      seats: data.seats,
      modelCode: data.modelCode,
      auctionGrade: data.auctionGrade,
      registrationNo: data.registrationNo,
      height: data.height,
      width: data.width,
      length: data.length,
      steering: data.steering,
      groundClearance: data.groundClearance,
      buyingPrice: data.buyingPrice,
    }));
  };

  useEffect(() => {
    setInventoryData((prev) => ({
      ...prev,
      media: [...videoFiles, ...photoFiles], // OR split into separate fields if needed
    }));
  }, [videoFiles, photoFiles]);

  useEffect(() => {
    setInventoryData((prev) => ({
      ...prev,
      documents: [...docFiles],
    }));
  }, [docFiles]);

  useEffect(() => {
    setInventoryData((prev) => ({
      ...prev,
      photograph: [...cameraMenPhotoFiles, ...camperaMenVideosFiles],
    }));
  }, [cameraMenPhotoFiles, camperaMenVideosFiles]);

  useEffect(() => {
    setInventoryData((prev) => ({
      ...prev,
      expense: [...expen],
    }));
  }, [expen]);
  const handleSubmisssion = async (e) => {
    e.preventDefault();
   
    const formData = new FormData();

    // Fix existing video data
    const existingVideos = [];
    InventoryData.video = InventoryData.video
      ?.map((file) => {
        if (file instanceof File) {
          return file; // New video
        } else if (file?.url) {
          existingVideos.push(file.url); // Track for backend to reuse
          return null;
        }
        return null;
      })
      .filter(Boolean); // Remove nulls

    // Helper: Rename documents
    const renameDocument = (file, type) => {
      const { stockNo, make, model, year } = InventoryData;
      const cleanedMake = make?.trim().replace(/\s+/g, "-").toLowerCase();
      const cleanedModel = model?.trim().replace(/\s+/g, "-").toLowerCase();
      const cleanedType = type?.trim().replace(/\s+/g, "-").toLowerCase();
      const extension = file.name.split(".").pop();
      return new File(
        [file],
        `${cleanedType}-${stockNo}-${cleanedMake}-${cleanedModel}-${year}.${extension}`,
        { type: file.type }
      );
    };

    for (const key in InventoryData) {
      const value = InventoryData[key];

      if (Array.isArray(value)) {
        if (key === "expense") {
          formData.append(key, JSON.stringify(value));
        } else if (key === "documents") {
          value.forEach((doc) => {
            if (doc?.file instanceof File && doc?.type) {
              formData.append(key, renameDocument(doc.file, doc.type));
            }
          });
        } else if (
          ["media", "photograph", "reels", "verification"].includes(key)
        ) {
          value.forEach((item) => {
            if (item instanceof File) {
              formData.append(key, item);
            } else if (item?.file instanceof File) {
              formData.append(key, item.file);
            }
          });
        } else if (key === "video") {
          // Already handled above
          value.forEach((file) => {
            if (file instanceof File) {
              formData.append("video", file);
            }
          });
        } else {
          formData.append(key, JSON.stringify(value));
        }
      } else if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    }

    // Send list of existing video URLs separately
    if (existingVideos.length > 0) {
      formData.append("existingVideos", JSON.stringify(existingVideos));
    }

    try {
      const endpoint = vehicleId
        ? `${API_URL}/editStock/${vehicleId}`
        : `${API_URL}/addStock`;
      const method = vehicleId ? "put" : "post";

      const response = await axios[method](endpoint, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/Stock");
        handleBack?.();
      }, 2000);
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Failed to save stock data.");
    }
  };

  //Set Currency

  useEffect(() => {
    if (!InventoryData.garageId) return;

    const garage = GarageName.find(
      (g) => g.id.toString() === InventoryData.garageId.toString()
    );

    if (garage) {
      setCurrency(garage.currency);
    }
  }, [InventoryData.garageId, GarageName]);
  useEffect(() => {
    if (!selectedShowroom) return;
    const showcurrency = GarageName.find(
      (g) => g.id.toString() === selectedShowroom.toString()
    );
    if (showcurrency) {
      setShowroomCurrency(showcurrency.currency);
    }
  }, [selectedShowroom, GarageName]);

  const ButtonComponents = [
    {
      label: "General",
      component: (
        <General
          data={InventoryData}
          handleGeneralDetails={handleGeneralDetails}
          showroom={selectedShowroom}
          currency={showroomCurrency || "USD"}
        />
      ),
    },
    {
      label: "Media Library",
      component: (
        <MediaUpload
          videoFiles={videoFiles}
          setVideoFiles={setVideoFiles}
          photoFiles={photoFiles}
          setPhotoFiles={setPhotoFiles}
          existingPhotos={existingPhotos}
          existingVideos={existingVideos}
        />
      ),
    },
    {
      label: "Documents",
      component: (
        <DocumentUpload
          docFiles={docFiles}
          setDocsFile={setDocsFile}
          existingDocs={existingDocs}
          setExistingDoc={setExistingDocs}
        />
      ),
    },
    /*{
      label: "Photograph",
      component: (
        <CameraaMenTask
          cameraMenPhotoFiles={cameraMenPhotoFiles}
          setCameraMenPhotosFiles={setCameraMenPhotosFiles}
          camperaMenVideosFiles={cameraMenPhotoFiles}
          setCameraMenVideosFiles={setCameraMenVideosFiles}
        />
      ),
    },
    { label: "Reels", component: <DesignerTask /> },
    { label: "Verification", component: <VehicleInspectionChecklist /> },*/
    {
      label: "Expense",
      component: (
        <ExpenseTracker
          price={InventoryData.buyingPrice || 0}
          currency={currency || "USD"}
          expen={expen}
          setExpen={setExpen}
          InventoryData={InventoryData}
          setInventoryData={setInventoryData}
          existingExpense={existingExpense}
          showroomCurrency={showroomCurrency}
        />
      ),
    },
    /* { label: "Reports", component: <Report /> },
    {
      label: "Stock Detail",
      component: <StockDetail InventoryData={InventoryData} />,
    },*/
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          {vehicleId ? "Edit Stock" : "Add Stock"}
        </div>
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabRow}>
          {ButtonComponents.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${styles.tab} ${
                activeIndex === index ? styles.activeTab : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div>{ButtonComponents[activeIndex].component}</div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={handleCancle}>
            Cancel
          </button>
          <button className={styles.saveButton} onClick={handleSubmisssion}>
            {vehicleId ? "Update" : "Save"}
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddStock;
