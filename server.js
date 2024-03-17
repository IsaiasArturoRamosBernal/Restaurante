const sql = require('mssql/msnodesqlv8');

const config = {
  server: 'ARTHUR',
  database: 'Restaurante',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
    enableArithAbort: true,
  },
};

let categories = [];

sql.connect(config, function (err) {
  if (err) {
    console.log('Error connecting to SQL Server:', err);
  } else {
    console.log('Connected to SQL Server');

    var request = new sql.Request();

    var query = "SELECT CategoriaID, Nombre, Imagen FROM categorias";

    request.query(query, function (err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
      } else {
        categories = recordset.recordset.map(record => ({
          id: record.CategoriaID,
          name: record.Nombre,
          image: record.Imagen,
        }));

        console.log('Categories:', categories);
      }

      sql.close();
    });
  }
});

module.exports = categories;


/*

const sql = require('mssql/msnodesqlv8');

const config = {
  server: 'ARTHUR',
  database: 'Restaurante',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
    enableArithAbort: true,
  },
};

let categories = [];

sql.connect(config, function (err) {
  if (err) {
    console.log('Error connecting to SQL Server:', err);
  } else {
    console.log('Connected to SQL Server');

    var request = new sql.Request();

    var query = "SELECT CategoriaID, Nombre, Imagen FROM categorias";

    request.query(query, function (err, recordset) {
      if (err) {
        console.log('Error executing query:', err);
      } else {
        categories = recordset.recordset.map(record => ({
            id: record.CategoriaID,
            name: record.Nombre,
            image: record.Imagen,
        }));

        console.log('Categories:', categories);
      }

      sql.close();
    });
  }
});

module.exports = categories;


*/