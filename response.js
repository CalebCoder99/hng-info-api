const response = (req, res) => {
  const response = {
    email: "Calebasamah@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/CalebCoder99/hng-info-api",
  };
  res.status(200).json(response);
};

module.exports = response;
