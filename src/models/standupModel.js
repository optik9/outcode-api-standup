const db = require('../config/database');

class StandupModel {
  static async getStandupsByDateAndLocation(startDate, endDate, location) {
    const query = `
      SELECT
        p.name AS project_name,
        u.name AS user_name,
        s.*
      FROM
        standup_standupmodel s
      JOIN
        project_member pm ON s.user_project_id = pm.id
      JOIN
        project p ON pm.project_id = p.id
      JOIN
        "user" u ON pm.user_id = u.id
      WHERE
        s.date BETWEEN $1 AND $2 
        AND u.location = $3
      ORDER BY s.date DESC
    `;

    try {
      const result = await db.query(query, [startDate, endDate, location]);
      return result.rows;
    } catch (error) {
      throw new Error(`Error getting standups: ${error.message}`);
    }
  }
}

module.exports = StandupModel;