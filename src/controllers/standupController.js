const StandupModel = require('../models/standupModel');

class StandupController {
  static async getStandups(req, res) {
    try {
      const { startDate, endDate, location } = req.query;
      
      // Validar parámetros
      if (!startDate || !endDate || !location) {
        return res.status(400).json({
          error: 'Missing required parameters: startDate, endDate, and location'
        });
      }

      const standups = await StandupModel.getStandupsByDateAndLocation(
        startDate,
        endDate,
        location
      );

      res.json({
        success: true,
        data: standups,
        count: standups.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
}

module.exports = StandupController;
