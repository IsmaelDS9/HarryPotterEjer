$(document).ready(function(){
	tabla();
});

function tabla(){

	$.ajax({

	method :"get",
	url : 'https://hp-api.onrender.com/api/characters',
	dataType: 'json',
		


		success: function(response){
			console.log("respuesta--> " +JSON.stringify(response));
 		var list='';
 		

 		for(let i = 0; i <response.length;i++){
 			list+= '<tr>'+
 			'<td>'+response[i].id+'</td>'+
 			'<td>'+response[i].name+'</td>'+
 			'<td>'+response[i].alternate_names+'</td>'+
 			'<td>'+response[i].species+'</td>'+
 			'<td>'+response[i].gender+'</td>'+
 			'<td>'+response[i].house+'</td>'+
 			'<td>'+response[i].dateOfBirth+'</td>'+
 			'<td>'+response[i].yearOfBirth+'</td>'+
 			'<td>'+response[i].wizard+'</td>'+
 			'<td>'+response[i].ancestry+'</td>'+
 			'<td>'+response[i].eyeColour+'</td>'+
 			'<td>'+response[i].hairColour+'</td>'+	

 			'</tr>';
 		}
 		
 		$('#Tabla').html(list);
		}, error:function(resultado){
			console.log("Error al llenar la tabla")
		}
	});
}



//buscar
$('#buscarP').click(function(){

   var house =$('#buscar').val();
  

   var json = {"house":house};
   console.log("JSON a buscar->"+JSON.stringify(json));

   var json ='';

if(house !== ''){
   json ={house};

}
$.ajax({ 
      type:'ajax',
      method: 'get',
      url:'https://hp-api.onrender.com/api/characters',
      data: JSON.stringify(json),

      

      success : function(responce){
         console.log("Responce -> Respuesta el servidor ->"+JSON.stringify(responce));
         
         var lista1 = '';

         responce.forEach(objetos => {
            console.log("Objectos "+JSON.stringify(objetos));
            
            lista1 += '<tr>'+
 			'<td>'+objetos.id+'</td>'+
 			'<td>'+objetos.name+'</td>'+
 			'<td>'+objetos.alternate_names+'</td>'+
 			'<td>'+objetos.species+'</td>'+
 			'<td>'+objetos.gender+'</td>'+
 			'<td>'+objetos.house+'</td>'+
 			'<td>'+objetos.dateOfBirth+'</td>'+
 			'<td>'+objetos.yearOfBirth+'</td>'+
 			'<td>'+objetos.wizard+'</td>'+
 			'<td>'+objetos.ancestry+'</td>'+
 			'<td>'+objetos.eyeColour+'</td>'+
 			'<td>'+objetos.hairColour+'</td>'+	

 			'</tr>';

           })
$('Tabla').html(lista1);

}
});

});
