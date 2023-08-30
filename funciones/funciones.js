$(document).ready(function(){
	tabla();
});

function tabla(){
	$.ajax({
		type:'GET',
		url:'https://hp-api.onrender.com/api/characters',
		contentType:'application/json; charset=UTF-8',
		headers:{'Access-Control-Allow-Origin':'*'},
		CORS: true,
		crossDomain: true,
		dataType:'JSON',
		async: false,
		


		success: function(response){
			console.log("respuesta--> " +JSON.stringify(response));
 		var list='';
 		response.forEach(perso=>{
 			console.log("respuesta--> " +JSON.stringify(perso));

 			list+= '<tr>'+
 			'<td>'+perso.id+'</td>'+
 			'<td>'+perso.name+'</td>'+
 			'<td>'+perso.alternate_names+'</td>'+
 			'<td>'+perso.species+'</td>'+
 			'<td>'+perso.gender+'</td>'+
 			'<td>'+perso.house+'</td>'+
 			'<td>'+perso.dateOfBirth+'</td>'+
 			'<td>'+perso.yearOfBirth+'</td>'+
 			'<td>'+perso.wizard+'</td>'+
 			'<td>'+perso.ancestry+'</td>'+
 			'<td>'+perso.eyeColour+'</td>'+
 			'<td>'+perso.hairColour+'</td>'+


 			'</tr>';

 		});
 		$('#tabla').html(list);
		}
	});
}