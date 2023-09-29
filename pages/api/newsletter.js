import fs from "fs";
import path from "path";

function newsletterHandler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const newFeedback = {
      id: new Date().toISOString(),
      email: userEmail,
    };

    // store that in a database or in a file
    const filePath = path.join(process.cwd(), "data", "newsletter.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!" });
  } else {
    res.status(405).json({ message: "This endpoint only supports POST" });
  }
}

export default newsletterHandler;
