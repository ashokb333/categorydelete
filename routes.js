 var master = require('./models/master');

module.exports = {
   configure: function(app) {
	   
		//-------------- Category List -----------------  
			app.get('/api/getcategorylist/', function (req, res) {
				master.getcategorylist(res);
			});
			
		//----------- Category associated products List -----------------	
			app.get('/api/getmyproducts/:categoryid', function (req, res) {
				master.getmyproducts(req.params.categoryid,res);
			}); 
			
		//-----------Delete Category and Associated products -------------
			app.delete('/api/DeleteCategory/:categoryid', function(req, res) {
			    master.DeleteCategory(req.params.categoryid, res); });
	
	}
  
};