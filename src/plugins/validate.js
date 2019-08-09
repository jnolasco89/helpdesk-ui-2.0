import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default new VeeValidate({
    errorBagName: 'errorsVee', //cambiar cuand la propiedad entre en conflicto
    fieldsBagName: 'fieldsVee'//cambiar cuand la propiedad entre en conflicto
})

/*
ERRORES QUE SURGIERON AL USAR VEE-VALIDATE

1) ERROR QUE APARECE:
   [Vue warn]: The computed property "errors" is already defined in data, 
   [Vue warn]: The computed property "fields" is already defined in data
   CAUSA:
   Este error se muestra en la consola del navegador y se debe a que las variables
   error y fields de vee-validate entran en conflicto con variables de vue.
   Es posible que deba configurar algunas opciones para modificar algunos de los componentes 
   internos del complemento. Esto no es obligatorio, pero podría causar conflictos. 
   Por ejemplo, el uso de una propiedad llamada errores en su instancia vue puede causar conflictos. 
   URLS QUE EXPLICAN EL ERROR:
   https://github.com/ElemeFE/element/issues/4720
   https://andrefigueira.com/2018/06/04/fix-veevalidate-vue-warn-the-computed-property-fields-is-already-defined-in-data
   SOLUCION:
   Cambiar el nombre de las propiedades errorBagName y fieldsBagName dentro de las
   configuraciones de vee-validate.

   Para mas detalles ver las opciones de configuracion de vee-validate
   https://baianat.github.io/vee-validate/configuration.html



*/