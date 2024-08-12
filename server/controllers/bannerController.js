const { Banner } = require('../models');

class BannerController {
  view = async (req, res) => {
    try {
      const banner = await Banner.findOne({ order: [["createdAt", "DESC"]] });
      res.json(
        banner || {
          bannerOn: true,
          heading: "Limited time offer",
          description: "",
          link: "",
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      );
    } catch (error) {
      res.status(500).json({ error: "Error fetching banner settings" });
    }
  };
  update = async (req, res) => {
    try {
      const [updated] = await Banner.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedBanner = await Banner.findByPk(req.params.id);
        res.json(updatedBanner);
      } else {
        res.status(404).json({ error: "Banner settings not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error updating banner settings" });
    }
  };

  add = async (req, res) => {
    try {
      const banner = await Banner.create(req.body);
      res.json(banner);
    } catch (error) {
      res.status(500).json({ error: "Error updating banner settings" });
    }
  };
}

const bannerController = new BannerController();
module.exports = bannerController;
