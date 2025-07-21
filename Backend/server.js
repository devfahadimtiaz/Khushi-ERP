require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// Routes
const loginRoutes = require("./routes/login");
const inventory = require("./routes/inventory");
const vahicleSale = require("./routes/vahicleSale");
const bank = require("./routes/bank");
const gatePass = require("./routes/gatepass");
const currentUser = require("./routes/currentUser");
const repair = require("./routes/repair");
const quotation = require("./routes/quotation");
const garage = require("./routes/garage");
const inventoryDashboard = require("./routes/inventoryDashboard");
const vehicleTransfer = require("./routes/vehicleTransfer");
const parkingZone = require("./routes/parkingzone");
const roadtest = require("./routes/roadTest");
const searchFilter = require("./routes/searchFIlter");
const vehicleDetails = require("./routes/vehicleDetails");
const salesDashboard = require("./routes/salesDashboard");
const logBook = require("./routes/logbook");
const userRights = require("./routes/userRights");

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // true only in production with HTTPS
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  })
);

// Async IIFE to connect and start server
(async () => {
  try {
    const db = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306, // ✅ Optional, defaults to 3306
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    console.log("✅ Connected to database");

    // Pass db instance to routes
    app.use("/api", currentUser(db));
    app.use("/api", loginRoutes(db));
    app.use("/api", inventory(db));
    app.use("/api", vahicleSale(db));
    app.use("/api", bank(db));
    app.use("/api", gatePass(db));
    app.use("/api", repair(db));
    app.use("/api", quotation(db));
    app.use("/api", garage(db));
    app.use("/api", inventoryDashboard(db));
    app.use("/api", vehicleTransfer(db));
    app.use("/api", parkingZone(db));
    app.use("/api", roadtest(db));
    app.use("/api", searchFilter(db));
    app.use("/api", vehicleDetails(db));
    app.use("/api", salesDashboard(db));
    app.use("/api", logBook(db));
    app.use("/api", userRights(db));

    app.listen(process.env.PORT, () => {
      console.log("🚀 Server is running on port 8083");
    });
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
    process.exit(1);
  }
})();
