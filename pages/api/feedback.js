import fs from "fs";
import path from "path";

function feedbackHandler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const feedback = req.body.text;
    const eventId = req.body.eventId;

    if (!eventId) {
      res.status(422).json({ message: "No event id was submitted." });
      return;
    }

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    if (!feedback || feedback.trim() === "") {
      res.status(422).json({ message: "Invalid feedback." });
      return;
    }

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      name: name,
      feedback: feedback,
      eventId: eventId,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.status(200).json({ feedback: data });
  } else {
    res.status(405).json({ message: "This endpoint only supports POST/GET" });
  }

  // store or log the feedback...
}

export default feedbackHandler;
