import { useState, useEffect } from "react";
import {
  Download,
  Car,
  FileText,
  Calculator,
  MapPin,
  Calendar,
  Settings,
  Fuel,
  Users,
  Camera,
} from "lucide-react";
import Button from "../../ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/Tabs";
import { Badge } from "../../ui/Badge";
import styles from "./VehicleDetails.module.css";
import { useParams } from "react-router-dom";
import JSZip from "jszip";
import { saveAs } from "file-saver";
const API_URL = process.env.REACT_APP_API_URL;
const API_IMAGE = process.env.REACT_APP_API_IMAGE;

// Mock data for demonstration

const VehicleDetails = () => {
  const params = useParams();
  const vehicleId = params.id;
  const [activeTab, setActiveTab] = useState("general");
  const [vehicleData, setVehicleData] = useState([]);
  const [vehicleImages, setVehicleImages] = useState([]);
  const [vehicleVideo, setVehicleVideo] = useState([]);
  const [vehicleDocuments, setVehicleDocuments] = useState([]);
  const [expenseDetails, setExpenseDetails] = useState([]);
  const [parkingSlot, setParkingSlot] = useState();
  const statusVariantMap = {
    "In Stock": "default",
    Sold: "destructive",
    Transferable: "outline",
    secondary: "destructive",
    Committed: "outline",
    // add more as needed
  };
  //Fetch Vehicle General Details
  useEffect(() => {
    const fetchGeneralDetails = async () => {
      try {
        const response = await fetch(
          `${API_URL}/VehicleGeneralDetails/${vehicleId}`
        );
        const data = await response.json();
        setVehicleData(data[0]);
      } catch (error) {
        console.log("Error in BAckend");
      }
    };
    fetchGeneralDetails();
  }, [vehicleId]);
  const numFmt = (v) =>
    Number(v || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_URL}/VehicleImages/${vehicleId}`);
        const data = await response.json();
        setVehicleImages(data);
      } catch (error) {
        console.log("Error in BAckend");
      }
    };
    fetchImages();
  }, [vehicleId]);

  //Fetch Video
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`${API_URL}/VehicleVideo/${vehicleId}`);
        const data = await response.json();
        setVehicleVideo(data);
      } catch (error) {
        console.log("Error in BAckend");
      }
    };
    fetchVideo();
  }, [vehicleId]);

  //Fetch Documents

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch(`${API_URL}/VehicleDocs/${vehicleId}`);
        const data = await response.json();
        setVehicleDocuments(data);
      } catch (error) {
        console.log("Error in Backend");
      }
    };
    fetchDocuments();
  }, [vehicleId]);

  //Fetch Expense

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await fetch(`${API_URL}/VehcileExpense/${vehicleId}`);
        const data = await response.json();
        setExpenseDetails(data);
      } catch (error) {
        console.log("Error in Backend");
      }
    };
    fetchExpense();
  }, [vehicleId]);
  useEffect(() => {
    const fetchParkSlot = async () => {
      try {
        const response = await fetch(
          `${API_URL}/ParkingSlotVehicle/${vehicleId}`
        );
        const data = await response.json();
        setParkingSlot(data[0].slot_number);
      } catch (error) {
        console.log("Error in Backend");
      }
    };
    fetchParkSlot();
  }, [vehicleId]);

  const handleImageDownload = async (imageUrl, imageName) => {
    try {
      const imageName = extractFileName(imageUrl);
      const response = await fetch(`${API_IMAGE}${imageUrl}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = imageName || "downloaded-image";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };
  const handleVideoDownload = async (videoUrl, customName) => {
    try {
      const fileName = extractFileName(videoUrl);
      const response = await fetch(`${API_IMAGE}${videoUrl}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${customName || fileName || "downloaded-video"}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  };

  const extractFileName = (url) => {
    const parts = url.split("/");
    const file = parts[parts.length - 1];
    // Remove extension for clean name if you want:
    return file.replace(/\.[^/.]+$/, "");
  };

  const downloadAllImagesAsZip = async () => {
    if (!vehicleImages || vehicleImages.length === 0) {
      console.error("No images to download.");
      return;
    }

    const zip = new JSZip();
    const folder = zip.folder(
      `${vehicleData.stock_no} - ${vehicleData.make} ${vehicleData.model} ${vehicleData.year}`
    );

    for (const [index, image] of vehicleImages.entries()) {
      const filename = extractFileName(image.url);
      try {
        const response = await fetch(`${API_IMAGE}${image.url}`);
        const blob = await response.blob();
        folder.file(`${index + 1}-${filename}.jpg`, blob);
      } catch (error) {
        console.error(`Error adding ${filename} to zip:`, error);
      }
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipFileName = `${vehicleData.stock_no} - ${vehicleData.make} ${vehicleData.model} ${vehicleData.year}.zip`;
    saveAs(zipBlob, zipFileName);
  };
  const downloadAllVideosAsZip = async () => {
    if (!vehicleVideo || vehicleVideo.length === 0) {
      console.error("No videos to download.");
      return;
    }

    const zip = new JSZip();
    const folder = zip.folder(
      `${vehicleData.stock_no} - ${vehicleData.make} ${vehicleData.model} ${vehicleData.year} - Videos`
    );

    for (const [index, video] of vehicleVideo.entries()) {
      const filename = extractFileName(video.url);
      try {
        const response = await fetch(`${API_IMAGE}${video.url}`);
        const blob = await response.blob();
        folder.file(`${index + 1}-${filename}.mp4`, blob);
      } catch (error) {
        console.error(`Error adding ${filename} to zip:`, error);
      }
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipFileName = `${vehicleData.stock_no} - ${vehicleData.make} ${vehicleData.model} ${vehicleData.year} - Videos.zip`;
    saveAs(zipBlob, zipFileName);
  };

  const handleDocumentDownload = async (documentUrl, documentName) => {
    try {
      const fileName = extractFileName(documentUrl);
      const response = await fetch(`${API_IMAGE}${documentUrl}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${documentName || fileName || "document"}.pdf`; // Adjust extension if needed
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading document:", error);
    }
  };
  const downloadAllDocumentsAsZip = async () => {
    if (!vehicleDocuments || vehicleDocuments.length === 0) {
      console.error("No documents to download.");
      return;
    }

    const zip = new JSZip();
    const folder = zip.folder(
      `${vehicleData.stock_no} - ${vehicleData.make} ${vehicleData.model} ${vehicleData.year} - Documents`
    );

    for (const [index, document] of vehicleDocuments.entries()) {
      const fileName = extractFileName(document.url);
      try {
        const response = await fetch(`${API_IMAGE}${document.url}`);
        const blob = await response.blob();
        folder.file(`${index + 1}-${fileName}.pdf`, blob); // Adjust if other file types
      } catch (error) {
        console.error(`Error adding ${fileName} to zip:`, error);
      }
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipFileName = `${vehicleData.stock_no} - ${vehicleData.make} ${vehicleData.model} ${vehicleData.year} - Documents.zip`;
    saveAs(zipBlob, zipFileName);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <Car className={styles.headerIcon} />
            <h1 className={styles.title}>
              {vehicleData.year} {vehicleData.make} {vehicleData.model}
            </h1>
            <Badge
              variant={statusVariantMap[vehicleData.status] || "default"}
              className={styles.badge}
            >
              {vehicleData.status}
            </Badge>
          </div>
          <p className={styles.subtitle}>
            Stock No: {vehicleData.stock_no} • {vehicleData.name}
          </p>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className={styles.tabsList}>
            <TabsTrigger value="general" className={styles.tabTrigger}>
              <Settings className={styles.tabIcon} />
              General Details
            </TabsTrigger>
            <TabsTrigger value="images" className={styles.tabTrigger}>
              <Camera className={styles.tabIcon} />
              Images
            </TabsTrigger>
            <TabsTrigger value="video" className={styles.tabTrigger}>
              <FileText className={styles.tabIcon} />
              Video
            </TabsTrigger>
            <TabsTrigger value="documents" className={styles.tabTrigger}>
              <FileText className={styles.tabIcon} />
              Documents
            </TabsTrigger>
            <TabsTrigger value="expenses" className={styles.tabTrigger}>
              <Calculator className={styles.tabIcon} />
              Expenses
            </TabsTrigger>
          </TabsList>

          {/* General Details Tab */}
          <TabsContent value="general" className="space-y-6">
            <div className={styles.generalGrid}>
              {/* Basic Information */}
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>
                    <Car className={styles.cardIcon} />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.detailGrid}>
                    <span className={styles.detailLabel}>Vehicle Type:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.vehicle_type}
                    </span>
                    <span className={styles.detailLabel}>Make:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.make}
                    </span>
                    <span className={styles.detailLabel}>Model:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.model}
                    </span>
                    <span className={styles.detailLabel}>Year:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.year}
                    </span>
                    <span className={styles.detailLabel}>Variant:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.variant}
                    </span>
                   
                    
                  </div>
                </CardContent>
              </Card>

              {/* Technical Specifications */}
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>
                    <Settings className={styles.cardIcon} />
                    Technical Specs
                  </CardTitle>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.detailGrid}>
                    <span className={styles.detailLabel}>Engine:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.engine}
                    </span>
                    <span className={styles.detailLabel}>Engine No:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.engine_no}
                    </span>
                    <span className={styles.detailLabel}>Transmission:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.transmission}
                    </span>
                    <span className={styles.detailLabel}>Drive Type:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.drive_type}
                    </span>
                    <span className={styles.detailLabel}>Fuel Type:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.fuel_type}
                    </span>
                    <span className={styles.detailLabel}>Mileage:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.mileage}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Physical Attributes */}
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>
                    <MapPin className={styles.cardIcon} />
                    Physical Attributes
                  </CardTitle>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.detailGrid}>
                    <span className={styles.detailLabel}>Body Type:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.body_type}
                    </span>
                    <span className={styles.detailLabel}>Exterior Color:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.exterior_color}
                    </span>
                    <span className={styles.detailLabel}>Interior:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.interior}
                    </span>
                    <span className={styles.detailLabel}>Doors:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.doors}
                    </span>
                    <span className={styles.detailLabel}>Seats:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.seats}
                    </span>
                    <span className={styles.detailLabel}>Steering:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.steering}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Dimensions */}
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>
                    <Users className={styles.cardIcon} />
                    Dimensions
                  </CardTitle>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.detailGrid}>
                    <span className={styles.detailLabel}>Length:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.length} ft
                    </span>
                    <span className={styles.detailLabel}>Width:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.width} ft
                    </span>
                    <span className={styles.detailLabel}>Height:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.height} ft
                    </span>
                    <span className={styles.detailLabel}>
                      Ground Clearance:
                    </span>
                    <span className={styles.detailValue}>
                      {vehicleData.ground_clearance} mm
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Registration & Auction */}
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>
                    <FileText className={styles.cardIcon} />
                    Registration & Auction
                  </CardTitle>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.detailGrid}>
                    <span className={styles.detailLabel}>VIN:</span>
                    <span
                      className={`${styles.detailValue} ${styles.vinValue}`}
                    >
                      {vehicleData.vin_no}
                    </span>
                    <span className={styles.detailLabel}>Registration:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.registration_no}
                    </span>
                    <span className={styles.detailLabel}>Model Code:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.model_code}
                    </span>
                    <span className={styles.detailLabel}>Auction Grade:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.auction_grade}
                    </span>
                    <span className={styles.detailLabel}>Parked:</span>
                    <span className={styles.detailValue}>
                      {parkingSlot ? parkingSlot : "No"}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing & Dates */}
              <Card className={styles.card}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitle}>
                    <Calendar className={styles.cardIcon} />
                    Pricing & Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.detailGrid}>
                    <span className={styles.detailLabel}>
                      Total After Expenses ({vehicleData.currency}):
                    </span>
                    <span
                      className={`${styles.detailValue} ${styles.priceValue}`}
                    >
                      {numFmt(vehicleData.total_price_after_expense)} {vehicleData.currency}
                    </span>
                    <span className={styles.detailLabel}>
                      Total After Expenses (USD):
                    </span>
                    <span
                      className={`${styles.detailValue} ${styles.priceValue}`}
                    >
                      {numFmt(vehicleData.total_usd_price)} USD
                    </span>
                    <span className={styles.detailLabel}>Created:</span>
                    <span className={styles.detailValue}>
                      {new Date(vehicleData.created_at).toLocaleString(
                        "en-GB",
                        {
                          timeZone: "Asia/Karachi",
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        }
                      )}
                    </span>
                    <span className={styles.detailLabel}>Updated:</span>
                    <span className={styles.detailValue}>
                      {vehicleData.updated_at
                        ? new Date(vehicleData.updated_at).toLocaleString(
                            "en-GB",
                            {
                              timeZone: "Asia/Karachi",
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            }
                          )
                        : "-"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Images Tab */}
          <TabsContent value="images">
            <Card className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <CardTitle>Vehicle Images</CardTitle>
                <button
                  className={styles.downlaodButton}
                  onClick={downloadAllImagesAsZip}
                >
                  Download All
                </button>
                <p className="text-gray-600">
                  High-resolution images of the vehicle from multiple angles
                </p>
              </CardHeader>
              <CardContent className={styles.cardContent}>
                <div className={styles.imagesGrid}>
                  {vehicleImages.map((image) => (
                    <div key={image.id} className={styles.imageContainer}>
                      <div className={styles.imageWrapper}>
                        <img
                          src={`${API_IMAGE}${image.url}`}
                          alt={image.name}
                          className={styles.image}
                        />
                      </div>
                      <div className={styles.imageOverlay}>
                        <button
                          size="sm"
                          variant="secondary"
                          className={styles.downloadButton}
                          onClick={() =>
                            handleImageDownload(image.url, image.name)
                          }
                        >
                          Download
                        </button>
                      </div>
                      <p className={styles.imageName}>{image.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          {/* Vidio Tab */}
          <TabsContent value="video">
            <Card className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <CardTitle>Vehicle Video</CardTitle>
                <button
                  className={styles.downlaodButton}
                  onClick={downloadAllVideosAsZip}
                >
                  Download All
                </button>
                <p className="text-gray-600">
                  High-resolution Video of the vehicle from multiple angles
                </p>
              </CardHeader>
              <CardContent className={styles.cardContent}>
                <div className={styles.imagesGrid}>
                  {vehicleVideo.map((image) => (
                    <div key={image.id} className={styles.imageContainer}>
                      <div className={styles.videoWrapper}>
                        <video
                          src={`${API_IMAGE}${image.url}`}
                          controls
                          className={styles.video}
                        />
                      </div>
                      <div className={styles.imageOverlay}>
                        <button
                          size="sm"
                          variant="secondary"
                          className={styles.downloadButton}
                          onClick={() =>
                            handleVideoDownload(image.url, image.name)
                          }
                        >
                          Download
                        </button>
                      </div>
                      <p className={styles.imageName}>{image.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <Card className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <CardTitle>Vehicle Documents</CardTitle>
                <button
                  className={styles.downlaodButton}
                  onClick={downloadAllDocumentsAsZip}
                >
                  Download All
                </button>
                <p className="text-gray-600">
                  Important documents related to this vehicle
                </p>
              </CardHeader>
              <CardContent className={styles.cardContent}>
                <div className={styles.documentsList}>
                  {vehicleDocuments.map((document) => (
                    <div key={document.id} className={styles.documentItem}>
                      <div className={styles.documentInfo}>
                        <FileText className={styles.documentIcon} />
                        <div className={styles.documentDetails}>
                          <h3>{extractFileName(document.url)}</h3>
                          <p>
                            {document.type} • {document.size}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleDocumentDownload(document.url, document.name)
                        }
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Expenses Tab */}
          <TabsContent value="expenses">
            <Card className={styles.card}>
              <CardHeader className={styles.cardHeader}>
                <CardTitle>Vehicle Expense Details</CardTitle>
                <p className="text-gray-600">
                  Breakdown of all costs associated with this vehicle
                </p>
              </CardHeader>
              <CardContent className={styles.cardContent}>
                <div className={styles.expensesList}>
                  
                  {expenseDetails.map((expense, index) => (
                    <div key={index} className={styles.expenseItem}>
                      <div className={styles.expenseDetails}>
                        <h3>{expense.type}</h3>
                        <p>{expense.description}</p>
                      </div>
                      <div className={styles.expenses}>
                      <div className={styles.expenseAmount}>
                        <p>
                          {expense.amountCurrency}{" "}
                          {numFmt(expense.amount === "" ? "" : expense.amount)}
                        </p>
                      </div> 
                      <div className={styles.expenseAmount}>
                        <p>
                          {expense.showroomCurrency}{" "}
                          {numFmt(expense.convertedAmount === "" ? "" : expense.convertedAmount)}
                        </p>
                      </div>
                      <div className={styles.expenseAmount}>
                        <p>
                          {expense.USDCurrency}{" "}
                          {numFmt(expense.usdConvertedAmount === "" ? "" : expense.usdConvertedAmount)}
                        </p>
                      </div>  
                      </div>            
                    </div>
                  ))}
                  <div className={styles.separator}></div>
                  <div className={styles.totalExpense}>
                    <div>
                      <h3>Total After Expenses</h3>
                      <p>Final price including all costs</p>
                    </div>
                    <div className={styles.totalAmount}>
                      <p>
                        {vehicleData.currency} {" "}
                        {numFmt(vehicleData.total_price_after_expense)}
                      </p>
                      <p>
                        USD {" "}
                        {numFmt(vehicleData.total_usd_price)}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VehicleDetails;
