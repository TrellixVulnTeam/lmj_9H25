const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");
const transporter = require("./config");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const buildPath = path.join(__dirname, "..", "build");

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(buildPath));

app.post("/send", (req, res) => {
	try {
		const mailOptions = {
			from: req.body.email,
			to: process.env.email,
			subject: req.body.subject,
			html: `
            <p>You have a new contact request</p>
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
                <li>Subject: ${req.body.subject}</li>
                <li>Message: ${req.body.message}</li>
            </ul>
            `,
		};

		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				res.status(500).send({
					success: false,
					message: "Something went wrong. Try again later",
				});
			} else {
				res.send({
					success: true,
					message: "Your message has been received. Thanks for contacting us.",
				});
			}
		});
	} catch (err) {
		res.status(500).send({
			success: false,
			message: "Something went wrong. Try again later",
		});
	}
});

app.post("/subscribe", (req, res) => {
	const { email } = req.body;
	const mcData = {
		members: [
			{
				email_address: email,
				status: "pending",
			},
		],
	};

	const mcDataPost = JSON.stringify(mcData);

	const options = {
		url: process.env.mailchimpUrl,
		method: "POST",
		headers: {
			Authorization: `auth ${process.env.mailchimpApiKey}`
		},
		body: mcDataPost
	};

	if (email) {
		request(options, (err, response, body) => {
			if (err) {
				res.json({ error: err });
			} else {
				res.sendStatus(200);
			}
		});
	} else {
		res.status(404).send({ message: "Failed" });
	}
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
	res.sendFile(path.join(`${buildPath}/index.html`));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running"));
