const Second = (req, res) => {
  res.json({ msg: "requested Second api" });
};

const Third = (req, res) => {
  res.json({ msg: "requested Third api" });
};

module.exports = { Second, Third };
