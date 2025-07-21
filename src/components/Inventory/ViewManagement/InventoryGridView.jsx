import React, { useState, useEffect } from "react";
import {
  Filter,
  Grid,
  List,
  Search,
  ChevronDown,
  Car,
  Calendar,
  MapPin,
  Gauge,
} from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Card, CardContent } from "./ui/Card";
import Badge from "./ui/Badge";
import { Checkbox } from "./ui/CheckBox";
import styles from "./InventoryGridView.module.css"; // <-- CSS Module import
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL;
const API_Image = process.env.REACT_APP_API_IMAGE;

const InventoryGridView = () => {
  const [selectedShowrooms, setSelectedShowrooms] = useState([]);
  const [carData, setCarData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [userInfo, setUserInfo] = useState();
  const [showrooms, setShowroom] = useState([]);
  const navigate = useNavigate();

  const fetchGarage = async () => {
    try {
      const res = await axios.get(`${API_URL}/GarageList`);
      const data = res.data;
      setShowroom(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchGarage();
  }, []);

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
    if (userInfo && userInfo.showroom) {
      setSelectedShowrooms([parseInt(userInfo.showroom)]);
    } else {
      setSelectedShowrooms([]); // fallback
    }
  }, [userInfo]);

  useEffect(() => {
    axios
      .get(`${API_URL}/InventoryGridView`)
      .then((res) => setCarData(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    let result = [...carData];

    if (searchTerm) {
      result = result.filter(
        (car) =>
          `${car.make} ${car.model}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          car.stock_no.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedShowrooms.length > 0) {
      result = result.filter((car) =>
        selectedShowrooms.includes(car.showroom_id)
      );
    }

    if (sortBy) {
      result.sort((a, b) => {
        const valA = a[sortBy];
        const valB = b[sortBy];

        if (typeof valA === "string") {
          return sortOrder === "asc"
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        }

        return sortOrder === "asc" ? valA - valB : valB - valA;
      });
    }

    setFilteredData(result);
  }, [carData, selectedShowrooms, sortBy, sortOrder, searchTerm]);
  const handleView = (id) => {
    navigate(`/VehicleDetails/${id}`);
  };
  const toggleShowroom = (id) => {
    setSelectedShowrooms((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h1 className={styles.heading}>Vehicle Inventory</h1>
          </div>
          <div className={styles.viewButtons}>
            <Button
              className={styles.gridButton}
              onClick={() => navigate("/Stock")}
            >
              <Grid className={styles.icon} />
              List View
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className={styles.filterSection}>
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} />
            <Input
              placeholder="Search "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.showroomFilters}>
            <h3 className={styles.filterTitle}>
              <Filter className={styles.icon} />
              Filter by Showroom
            </h3>
            <div className={styles.checkboxes}>
              {showrooms
                .filter(
                  (s) =>
                    selectedShowrooms.length === 0 ||
                    selectedShowrooms.includes(s.id)
                )
                .map((showroom) => (
                  <div key={showroom.id} className={styles.checkboxItem}>
                    <Checkbox
                      id={`showroom-${showroom.id}`}
                      checked={selectedShowrooms.includes(showroom.id)}
                      onCheckedChange={() => toggleShowroom(showroom.id)}
                    />
                    <label
                      htmlFor={`showroom-${showroom.id}`}
                      className={styles.checkboxLabel}
                    >
                      {showroom.name}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className={styles.resultsCount}>
          Showing <strong>{filteredData.length}</strong> vehicles
        </div>

        <div className={styles.grid}>
          {filteredData.map((car) => (
            <Card key={car.id} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img
                  src={`${API_Image}${
                    car.images[0] || "/uploads/placeholder.jpg"
                  }`}
                  alt={`${car.make} ${car.model}`}
                  className={styles.mainImage}
                />
                <div className={styles.badgeTopLeft}>
                  <Badge variant="secondary" className={styles.gradeBadge}>
                    Grade: {car.auction_grade}
                  </Badge>
                </div>
                <div className={styles.badgeTopRight}>
                  <Badge className={styles.yearBadge}>{car.year}</Badge>
                </div>
              </div>
              <CardContent className={styles.cardContent}>
                <div className={styles.carInfo}>
                  <h3 className={styles.carTitle}>
                    {car.make} {car.model}
                  </h3>
                  <p className={styles.stockNo}>Stock: {car.stock_no}</p>
                </div>

                <div className={styles.priceMileage}>
                  <span className={styles.price}>
                    {car.currency} {car.total_price_after_expense}
                  </span>
                  <div className={styles.mileage}>
                    <Gauge className={styles.iconSmall} />
                    {car.odo} mi
                  </div>
                </div>

                {car.images.length > 1 && (
                  <div className={styles.thumbnails}>
                    {car.images.slice(1, 5).map((image, idx) => (
                      <img
                        key={idx}
                        src={`${API_Image}${image}`}
                        className={styles.thumbnail}
                        alt=""
                      />
                    ))}
                  </div>
                )}

                <Button
                  className={styles.viewButton}
                  onClick={() => handleView(car.id)}
                >
                  <Car className={styles.icon} />
                  View Details
                </Button>

                <p className={styles.updatedDate}>
                  Updated: {new Date(car.updated_at).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className={styles.emptyState}>
            <Car className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>No vehicles found</h3>
            <p className={styles.emptyMessage}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryGridView;
