module.exports = {
    connectDatabase(bot) {
      const loadDatabase = require("./loadDatabase.js");
  
      bot.db = loadDatabase();
  
      bot.db.connect(function (err) {
        if (!err) {
          console.log("La database s'est connecté avec succès")
        } else {
          console.log("La database ne s'est pas connecté")
          process.exit()
        }
      });
    },
  };
  