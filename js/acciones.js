// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#todo').on('tap', function(){
	  $.ajax({
		  type: "POST",
		  url: "http://192.168.1.74/icascatalogo/buscartodos.php",
		  error: function(){
		   alert ("no se pudo conectar al servidor");
		  },
		  success: function(resultado){
			  var datosCalzado = JSON.parse(resultado);
		    $('#contenido_calzado').empty();
			$(':mobile-pagecontainer').pagecontainer('chage', '#PaginaMII',{
				trasition: 'pop'
			});
			
			for(var x = 0; x < datosCalzado.tenis.length; x++)
			{
			$('#contenido_calzado').append('<div><div width="318" height="189"><img src="http://192.168.1.74/icascatalogo/recursos/imagenes/fotos/'+ datosCalzado.tenis[x].modelo +'.jpg"  align="left"/><div align="right">modelo'+ datosCalzado.tenis[x].modelo +'</div><div align="center"> <p>'+ datosCalzado.tenis[x].nombre_tenis +'</p> <p>'+ datosCalzado.tenis[x].tipo +'</p> <p>talla(s) disponibles '+ datosCalzado.tenis[x].longitud_disponible +'</p> <p>color(s) disponibles'+ datosCalzado.tenis[x].color_disponible +' </p><p>'+ datosCalzado.tenis[x].marca +'</p><div align="right"> <p> $'+ datosCalzado.tenis[x].precio +' </p></div></div></div></div>');
			}
		  }
	  });
	});
}); 
});

