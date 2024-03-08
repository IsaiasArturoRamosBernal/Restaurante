const express = require('express');
const mssql = require('mssql');

const app = express();

// SQL Server configuration
const config = {
  user: 'your_db_user',
  password: 'your_db_password',
  server: 'your_db_server',
  database: 'Restaurante',
};

// API endpoint to fetch categories
app.get('/api/categories', async (req, res) => {
  try {
    // Connect to the database
    await mssql.connect(config);

    // Query the database
    const result = await mssql.query`SELECT id, name, image FROM categorias`;

    // Send the result as JSON
    res.json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Close the database connection
    await mssql.close();
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:8081`);
});
