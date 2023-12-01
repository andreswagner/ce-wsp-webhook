function main(params) {
const axios = require('axios').default;
      axios({
					method: "POST", // Required, HTTP method, a string, e.g. POST, GET
					url: "http://52.117.223.57:1880/webhook",
					data: {
						hola: "mundo"
						},
					},
					headers: {
						"Content-Type": "application/json"
					},
				});
    
      return {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
          body: {"hola":"mundo"}
       }
  }
  
  module.exports.main = main;
