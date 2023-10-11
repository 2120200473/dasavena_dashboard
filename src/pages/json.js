export const json = {
    "locale": "es",
    "title": "Expediente Proveedores",
    "description": "Ingrese los documentos requeridos para mantener actualizado su expediente digital",
    "logo": {
     "es": "https://api.surveyjs.io/private/Surveys/files?name=ebcb5099-89bc-4e8d-a6ec-536a84e46fda"
    },
    "logoPosition": "right",
    "completedHtml": {
     "es": "<h3>¡Gracias por completar su expediente digital!</h3>"
    },
    "completedBeforeHtml": {
     "es": "<h3>Nuestros registros muestran que ya ha completado el expediente digital.</h3>"
    },
    "loadingHtml": {
     "es": "<h3>El expediente digital está cargando...</h3>"
    },
    "pages": [
     {
      "name": "Expediente Digital",
      "elements": [
       {
        "type": "file",
        "name": "RFC",
        "title": {
         "es": "Ingrese el documento en formato PDF del RFC"
        },
        "isRequired": true
       },
       {
        "type": "file",
        "name": "Comprobante de Domicilio",
        "title": {
         "es": "Ingrese el documento en formato PDF del Comprobante de Domicilio"
        },
        "isRequired": true
       },
       {
        "type": "file",
        "name": "Carta Garantía",
        "title": {
         "es": "Ingrese el documento en formato PDF de la Carta Grantía"
        },
        "isRequired": true
       },
       {
        "type": "file",
        "name": "Ficha Técnica del Producto",
        "title": {
         "es": "Ingrese el documento en formato PDF de la Ficha Técnica del Producto"
        },
        "isRequired": true
       },
       {
        "type": "file",
        "name": "Carta de Revisión Metales",
        "title": {
         "es": "Ingrese el documento en formato PDF de la Carta de Revisión de Metales"
        },
        "isRequired": true
       },
       {
        "type": "file",
        "name": "Carta Declaración",
        "title": {
         "es": "Ingrese el documento en formato PDF de la Carta Declaración"
        },
        "isRequired": true
       },
       {
        "type": "file",
        "name": "Información Nutrimental",
        "title": {
         "es": "Ingrese el documento en formato PDF de la Información Nutrimental"
        },
        "isRequired": true
       }
      ],
      "title": {
       "es": "Expediente Digital"
      }
     }
    ],
    "showPreviewBeforeComplete": "showAllQuestions",
    "widthMode": "responsive"
   }