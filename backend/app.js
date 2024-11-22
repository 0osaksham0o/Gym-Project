// import express from "express";
// import { config } from "dotenv";
// import cors from "cors";
// import { sendEmail } from "./utils/sendEmail.js";

// const app = express();
// const router = express.Router();

// config({ path: "./config.env" });

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// router.post("/send/mail", async (req, res, next) => {
//   const { name, email, message } = req.body;
//   if (!name || !email || !message) {
//     return next(
//       res.status(400).json({
//         success: false,
//         message: "Please provide all details",
//       })
//     );
//   }
//   try {
//     await sendEmail({
//       email: "saksham2226.be22@chitkara.edu.in",
//       subject: "GYM WEBSITE CONTACT",
//       message,
//       userEmail: email,
//     });
//     res.status(200).json({
//       success: true,
//       message: "Message Sent Successfully.",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: " Internal Server Error",
//     });
//   }
// });

// app.use(router);

// app.listen(process.env.PORT, () => {
//   console.log(`Server listening at port ${process.env.PORT}`);
// });



import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";
import fs from "fs";           // Import fs to handle file system operations

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utility function to append data to a JSON file
const appendToJSON = (data) => {
  const filePath = "./emails.json";  // Path to the JSON file

  try {
    let emails = [];

    // Check if the JSON file exists
    if (fs.existsSync(filePath)) {
      console.log("File exists. Reading file...");
      // Read the existing file
      const fileData = fs.readFileSync(filePath, "utf-8");
      emails = JSON.parse(fileData);  // Parse JSON data
    } else {
      console.log("File does not exist. Creating a new one...");
    }

    // Append the new email data
    emails.push({
      name: data.name,
      email: data.email,
      message: data.message,
      date: new Date().toISOString(),  // Optional: Store the current date
    });

    // Write the updated emails array back to the file
    fs.writeFileSync(filePath, JSON.stringify(emails, null, 2)); // Pretty-print JSON
    console.log("Data successfully written to JSON file.");
  } catch (error) {
    console.error("Error appending to JSON file: ", error);
    throw new Error("Error writing to JSON file.");
  }
};

router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    // Send email
    await sendEmail({
      email: "saksham2226.be22@chitkara.edu.in",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });

    // Store data in JSON
    appendToJSON({ name, email, message });

    // Send success response
    res.status(200).json({
      success: true,
      message: "Message Sent and Stored Successfully.",
    });
  } catch (error) {
    console.error("Internal server error: ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
