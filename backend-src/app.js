const express = require("express");

// const store = require("./store");

const app = express();

let publishersList = [
  {
    publisher: 'publisher 1',
    domains: [
      {
        domain: "bla.com",
        desktopAds: 5,
        mobileAds: 3,
      },
      {
        domain: "bla1.com",
        desktopAds: 2,
        mobileAds: 30,
      }
    ]
  },
  {
    publisher: 'publisher 2',
    domains: [
      {
        domain: "gar.com",
        desktopAds: 0,
        mobileAds: 4,
      },
      {
        domain: "gar.com",
        desktopAds: 5,
        mobileAds: 3,
      }
    ]
  }
];

app.get("/api/domains", (req, res) => {
  res.status(200).json({
    domains: getAllDomains(),
  });
});

app.post("/api/domain", (req, res) => {
  publishersList
    .find((publisher) => publisher.publisher === req.selectedPublisher)
    .domains.push(req.body.domain);

  res.status(201).json({ message: "Domain added" });
});

app.post("/api/updateDomain", (req, res) => {
  getAllDomains().find(domain => domain.domain === req.body.domain) = deepCopy(req.body);

  res.status(200).json({ message: "Domain updated" });
});

app.post("/api/deleteDomain", (req, res) => {
  getAllDomains().find(domain => domain.domain === req.body.domain) = undefined;

  res.status(200).json({ message: "Domain deleted" });
});


const getAllDomains = () => {
  let domains = [];
  publishersList.forEach((publisher) => 
    domains.push(...publisher.domains));
  return domains;
}

const deepCopy = (object) => {
  return JSON.parse(JSON.stringify(object));
}

module.exports = app;
