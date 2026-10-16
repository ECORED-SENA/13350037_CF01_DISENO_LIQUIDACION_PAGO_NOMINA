<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                    
        <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos laborales y novedades de nómina',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la capacidad del aprendiz para identificar los elementos de la relación laboral, diferenciar las modalidades de contratación, clasificar los conceptos que conforman la nómina, reconocer las obligaciones de seguridad social, parafiscales y prestaciones, y aplicar controles para registrar, depurar y validar las novedades del periodo.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una empresa contrata verbalmente a una persona para atender un establecimiento. La persona debe cumplir horario, seguir instrucciones del administrador y recibe un pago mensual. ¿Qué permite concluir esta situación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Existe una relación laboral porque hay servicio personal, subordinación y remuneración.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'No existe contrato laboral porque el acuerdo no se firmó por escrito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Existe únicamente una relación comercial por tratarse de un acuerdo verbal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El vínculo depende exclusivamente de la denominación que le otorgue la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La relación laboral se configura cuando concurren la prestación personal del servicio, la subordinación y la remuneración, aunque el contrato se haya celebrado verbalmente',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una diseñadora firma un contrato de prestación de servicios, pero debe trabajar diariamente en las instalaciones de la empresa, cumplir horario y solicitar autorización para ausentarse. ¿Qué aspecto debe revisarse?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La obligación de convertir el contrato en uno de compraventa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La forma de pago utilizada por la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La duración del contrato civil, sin considerar la subordinación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La existencia de una posible relación laboral por las condiciones reales de ejecución.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La realidad de la prestación del servicio prevalece sobre el nombre del contrato cuando se presentan los elementos propios de una relación laboral',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál control resulta especialmente importante en un contrato de trabajo a término fijo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Revisar únicamente el cargo del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Convertir automáticamente el contrato en uno de prestación de servicios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar la fecha de vencimiento y el procedimiento aplicable para su terminación o prórroga.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Suspender el pago de prestaciones durante las prórrogas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El seguimiento de la fecha de vencimiento permite aplicar oportunamente las condiciones de prórroga o terminación previstas para esta modalidad contractual',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una empresa vincula a un trabajador para instalar el sistema eléctrico de una construcción específica. ¿Qué elemento debe estar claramente identificado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La obra o labor que determina la duración del contrato.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número de trabajadores que tiene la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La entidad bancaria en la que se pagará la nómina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El valor de las ventas del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. En esta modalidad, la duración del contrato se encuentra relacionada con la ejecución y finalización de una obra o labor determinada',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Un trabajador recibe salario básico, comisiones por ventas y un bono mensual condicionado al cumplimiento de metas. ¿Cuál tratamiento resulta más adecuado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificar todos los pagos como no salariales porque son variables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incluir como salariales los pagos que remuneran directamente el servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Excluir las comisiones de todas las bases de liquidación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Considerar únicamente el salario básico como remuneración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los pagos que retribuyen directamente el trabajo, como las comisiones y los incentivos habituales por resultados, pueden constituir salario',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Una empresa devuelve a un trabajador $180.000 correspondientes a materiales comprados para ejecutar una reparación autorizada. ¿Cómo debe clasificarse este valor?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como comisión salarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Como recargo por trabajo suplementario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Como reembolso que no remunera directamente el servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Como salario en especie.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El reembolso restituye un gasto asumido por el trabajador para cumplir la labor y no constituye una remuneración directa por el servicio',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Un trabajador cumple su jornada ordinaria y posteriormente labora dos horas adicionales autorizadas. ¿Qué debe hacer el área de nómina?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compensarlas únicamente mediante un cambio de horario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrarlas como horas ordinarias sin recargo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Excluirlas porque ocurrieron después del horario habitual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificarlas como trabajo suplementario y aplicar el recargo correspondiente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Las horas trabajadas por encima de la jornada ordinaria deben reconocerse como trabajo suplementario cuando han sido autorizadas y debidamente soportadas',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál información es indispensable para liquidar correctamente una novedad de trabajo nocturno?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La fecha, el horario laborado y el número de horas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La dirección de residencia del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El número de beneficiarios en salud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La fecha de apertura de la cuenta bancaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La fecha y el horario permiten determinar si las horas se encuentran dentro de la jornada nocturna y establecer el recargo aplicable',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Una nómina presenta salario básico de $2.500.000, comisión de $300.000, aporte del trabajador a salud de $112.000 y descuento autorizado de $80.000. ¿Cuáles valores forman parte del deducido?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El salario básico y la comisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La comisión y el aporte a salud.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El aporte a salud y el descuento autorizado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El salario básico y el descuento autorizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El deducido está conformado por los valores que se descuentan al trabajador, como aportes obligatorios y descuentos autorizados',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Un trabajador tiene un devengado de $3.100.000 y deducciones por $280.000. ¿Cuál es el valor neto pagado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$2.720.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$2.820.000',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '$3.280.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$3.380.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El valor neto se obtiene restando las deducciones al total devengado: $3.100.000 − $280.000 = $2.820.000',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Una trabajadora dependiente tiene un ingreso base de cotización de $3.000.000. ¿Cuál es el valor general descontado a la trabajadora por concepto de salud?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$255.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$375.000',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$480.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$120.000',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El aporte general del trabajador a salud corresponde al 4 % del ingreso base: $3.000.000 × 4 % = $120.000',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Un trabajador dependiente tiene un ingreso base de cotización de $2.800.000. ¿Cuál valor corresponde al aporte del trabajador a pensión?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$84.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$112.000',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '$224.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$336.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El aporte general del trabajador a pensión equivale al 4 %: $2.800.000 × 4 % = $112.000',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Quién asume el aporte al sistema de riesgos laborales de un trabajador dependiente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El trabajador en su totalidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El trabajador y el empleador por partes iguales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El empleador, según la clase y tarifa de riesgo aplicable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La caja de compensación familiar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El aporte a riesgos laborales es asumido por el empleador y su valor depende de la clasificación de la actividad o del centro de trabajo',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Una empresa no se encuentra cobijada por exoneraciones y liquida aportes parafiscales sobre una base de $4.000.000. ¿Cuál es el valor total correspondiente a caja de compensación, SENA e ICBF?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$360.000',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '$160.000',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$200.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$500.000',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Las tarifas generales suman 9 %: caja de compensación 4 %, SENA 2 % e ICBF 3 %. El cálculo es $4.000.000 × 9 % = $360.000',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Una trabajadora tiene un salario de $2.300.000 y recibe $200.000 de auxilio de transporte. Para liquidar prima de servicios, ¿cuál base se utiliza en el ejercicio planteado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$2.100.000',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$2.300.000',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$4.800.000',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$2.500.000',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Para la liquidación de la prima se suma el salario y el auxilio de transporte cuando la trabajadora cumple las condiciones para recibirlo',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál de las siguientes corresponde a una novedad temporal?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambio permanente de salario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Retiro definitivo del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incapacidad por cinco días.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Modificación del tipo de contrato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La incapacidad afecta un periodo determinado y termina cuando se cumple el tiempo indicado en el soporte correspondiente',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'El jefe de producción informa verbalmente que un trabajador realizó diez horas extras, pero no presenta registro ni autorización. ¿Qué debe hacer el auxiliar de nómina?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incluir las horas porque el jefe las informó.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solicitar el soporte y la autorización antes de aprobar la novedad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Duplicar la cantidad para prevenir reclamos posteriores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrarlas como bonificación no salarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La novedad debe contar con información verificable sobre fechas, cantidad, origen y aprobación antes de incorporarse a la nómina',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Una novedad de horas extras fue ingresada por dos usuarios para el mismo trabajador y periodo. ¿Cuál control debe aplicarse?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Procesar ambos registros porque provienen de usuarios diferentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Revisar la duplicidad y conservar únicamente la novedad autorizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Convertir uno de los registros en comisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Trasladar automáticamente ambos valores al periodo siguiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El control de duplicidad evita reconocer dos veces un mismo concepto y permite mantener la trazabilidad de la corrección',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Una comisión fue registrada con una tarifa del 6 %, pero el documento aprobado establece una tarifa del 4 %. ¿Qué acción debe realizarse?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener el 6 % porque ya está registrado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar toda la comisión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiarla por una bonificación no salarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recalcularla con el porcentaje autorizado y documentar la modificación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La depuración exige cotejar el valor registrado con el soporte y corregir las diferencias antes de aprobar la prenómina',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'En la prenómina se incluyó un reembolso de herramientas dentro del ingreso base de cotización. ¿Qué procedimiento resulta adecuado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Revisar su naturaleza, excluirlo de la base cuando no remunera el servicio y recalcular los aportes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Mantenerlo en la base porque aparece dentro del devengado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Descontar el reembolso al trabajador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Convertir el reembolso en horas extras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La validación debe diferenciar los pagos salariales de los reembolsos y otros conceptos no salariales para evitar aportes y deducciones incorrectos',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
    },
  }),
}
</script>
