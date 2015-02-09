$(function(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'db/sqlite.db', true);
	xhr.responseType = 'arraybuffer';

	xhr.onload = function(e) {
	        var uInt8Array = new Uint8Array(this.response);
	        var db = new SQL.Database(uInt8Array);
	        var contents = db.exec("SELECT * FROM users");

	        //
	        var tasks = db.exec("SELECT * FROM tasks WHERE user_id=1")

	        console.log(tasks);
	};
	xhr.send();

});
