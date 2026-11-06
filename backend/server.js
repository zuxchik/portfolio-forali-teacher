
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = (
  process.env.FRONTEND_URL || "http://localhost:5173"
).split(",").map(origin => origin.trim());

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    callback(new Error("Origin not allowed"));
  }
}));

app.use(express.json({ limit: "10kb" }));

// Server test
app.get("/", (req, res) => {
  res.send("ALI Portfolio API is running!");
});

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, telegram, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof telegram !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        message: "Invalid form data"
      });
    }

    const cleanName = name.trim();
    const cleanTelegram = telegram.trim();
    const cleanMessage = message.trim();

    if (
      !cleanName ||
      !/^@?[a-zA-Z0-9_]{5,32}$/.test(cleanTelegram) ||
      !cleanMessage ||
      cleanName.length > 100 ||
      cleanMessage.length > 2000
    ) {
      return res.status(400).json({
        message: "Please check your information"
      });
    }

    const token = process.env.BOT_TOKEN;
    const chatId = process.env.CHAT_ID;

    if (!token || !chatId) {
      return res.status(500).json({
        message: "Server configuration error"
      });
    }

    const text = [
      "📩 NEW PORTFOLIO MESSAGE",
      "",
      `👤 Name: ${cleanName}`,
      `✈️ Telegram: ${cleanTelegram}`,
      "",
      "💬 Message:",
      cleanMessage
    ].join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text
        })
      }
    );

    const result = await response.json();

    if (!response.ok || !result.ok) {
      console.error("Telegram API error:", result);

      return res.status(502).json({
        message: "Could not send Telegram message"
      });
    }

    return res.json({
      success: true,
      message: "Message sent successfully!"
    });

  } catch (error) {
    console.error("Contact error:", error);

    return res.status(500).json({
      message: "Internal server error"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
