function main(params) {
      return {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
          body: {"hola":"mundo"}
       }
  }
  
  module.exports.main = main;
