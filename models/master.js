var connection = require('../connection');
 

function master() {
	
	//----------- Category List -----------------------------------
    this.getcategorylist = function (res) {
		var sql=connection.acquire(function (err, con) {
			con.query('SELECT  * from categories',  function (err, result) {
					//console.log(sql);
				con.release(); 
				res.send(result);
			});
		});
	};    
	
	//-------------- Category associated products List -------------
    this.getmyproducts = function (categoryid,res) {
		connection.acquire(function (err, con) {
			var sql=con.query('SELECT *,(select categoryname from categories where categoryid=products.categoryid)as category from products where categoryid='+categoryid+' ',  function (err, result) {
				//console.log(sql);
				con.release(); 
				res.send(result);
			});
		});
	};
	
	//---------- Delete Category and Associated products -----------
	this.DeleteCategory= function (categoryid, res) {
        connection.acquire(function (err, con) {
            var sql=con.query('delete from categories where categoryid = ?', [categoryid], function (err, result) {
			    //console.log(sql);
			    console.log(result);
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: 'Failed to delete'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Deleted successfully'
                    });
                }
            });
        });
    };

	
}

module.exports = new master();