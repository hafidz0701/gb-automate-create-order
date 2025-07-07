const fs = require('fs');
const path = require('path');
const axios = require('axios');

module.exports = async function () {
  try {
    const response = await axios.post(
      'https://stgapi.bluebird.id/token/auth',
      {
        user_id: "goldjkt5",
        user_secret: "abc123456",
        scope: "openid email profile phone offline_access",
        response_type: "id_token token code"
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    console.log("🔍 Token Response:", response.data);

    const token = response.data.id_token;
    if (!token) throw new Error("❌ id_token tidak ditemukan dalam response");

    const globalVariablesPath = path.join(__dirname, 'global-variables.json');
    const globalVariables = JSON.parse(fs.readFileSync(globalVariablesPath, 'utf8'));

    globalVariables.__TOKEN__ = `Bearer ${token}`;
    fs.writeFileSync(globalVariablesPath, JSON.stringify(globalVariables, null, 2));

    console.log("✅ Token berhasil disimpan ke global-variables.json");

  } catch (error) {
    console.error("❌ Gagal mendapatkan token:", error.message);
  }
};
