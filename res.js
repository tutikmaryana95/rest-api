'user strict'; 
//untuk kode java script bisa lebih pengecekan 

exports.ok = function(values,res){
    var data={
        'status':200,
        'values': values
    };

     res.json(data);
     res.end();
}