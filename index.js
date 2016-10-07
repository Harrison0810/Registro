/**
 * Created by hcardona on 6/10/2016.
 */
$(function () {
    var cont = 0;
    var agregar = $('.boton1');
    var obj = {};
    var vec = [];
    var guardar = $('.guardar');
    var almacenar = $('.almacenar');
    var i = 0;
    agregar.click(function (ev) {
        var newTbl = nuevaTbl
            .replace(':cont:', cont)
            .replace(':cont:', cont)
            .replace(':cont:', cont)
            .replace(':cont:', cont)
            .replace(':cont:', cont)
            .replace(':cont:', cont);
        cont++;
        $(".agregar").append(newTbl);
        console.log(cont);
    });
    var eliminar =  $('#delete');
    eliminar.click(function (ev) {
        var del = datos
            .replace(':cont:', cont);
        alert('Me van a eliminar D:');
        $('#delete').remove(datos);
        console.log('Todo ha sido consumado');
        i++;
    });
    guardar.click(function (ev) {
       alert('Guardando...') ;
        var nombre = $('.nombre').val();
        var apellido = $('.apellido').val();
        var correo = $('.correo').val();
        var edad = $('.edad').val();
        var ciudad = $('.ciudad').val();
        var telefono = $('.telefono').val();
        obj.nombre = nombre;
        obj.apellido = apellido;
        obj.correo = correo;
        obj.edad = edad;
        obj.ciudad = ciudad;
        var otros = datos
            .replace(':nombre:', nombre)
            .replace(':apellido:',apellido)
            .replace(':correo:', correo)
            .replace(':edad:', edad)
            .replace(':ciudad:', ciudad)
            .replace(':telefono:', telefono);
        var $datos = $(otros);
        vec.push(obj);
        console.log(vec);
        alert('Te voy a pintar');
        $('.almacenar').append($datos);
    });
    var datos =
        "<div class=\"container eliminar\">" +
            "<div class=\"row\">"+
                "<div class=\"col s10\">"+
                    "<div class=\"row line\">"+
                        "<div class=\"col s2 nombre center\">"+':nombre:'+"</div>"+
                        "<div class=\"col s2 apellido center\">"+':apellido:'+"</div>"+
                        "<div class=\"col s2 correo center\">"+':correo:'+"</div>"+
                        "<div class=\"col s2 edad center\">"+':edad:'+"</div>"+
                        "<div class=\"col s2 ciudad center\">"+':ciudad:'+"</div>"+
                        "<div class=\"col s2 telefono center\">"+':telefono:'+"</div>"+
                        "</div>"+
                    "</div>"+
                "<div class=\"col s2 center\"><button id=\"unicoDelete\"+i+ class=\"delete borrar\">Delete</button></div>"+
            "</div>"+
        "</div>";
    var nuevaTbl =
        "<div class=\"container eliminar\">" +
            "<div class=\"row\">"+
                "<div class=\"col s10\">"+
                    "<div class=\"row\">"+
                        "<div id=\"nom_:cont:\"+i+ class=\"col s2 nombre\"><input type=\"text\" placeholder=\"Nombre\"></div>"+
                        "<div id=\"apell:cont:\"+i+ class=\"col s2 apellido\"><input type=\"text\" placeholder=\"Apellido\"></div>"+
                        "<div id=\"correo_:cont:\"+i+ class=\"col s2 correro\"><input type=\"text\" placeholder=\"Correo\"></div>"+
                        "<div id=\"edad_:cont:\"+i+ class=\"col s2 edad\"><input type=\"text\" placeholder=\"Edad\"></div>"+
                        "<div id=\"ciudad_:cont:\"+i+ class=\"col s2 ciudad\"><input type=\"text\" placeholder=\"Ciudad\"></div>"+
                        "<div id=\"tel_:cont:\"+i+ class=\"col s2 telefono\"><input type=\"text\" placeholder=\"Teléfono\"></div>"+
                    "</div>"+
                "</div>"+
            "<div class=\"col s2 center\">"+
            "</div>"+
        "</div>";
});
