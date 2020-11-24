# API para formulario de contacto

Curso Javascript Intermedio II del [CETAV](http://parquelalibertad.org/cetav/).

URL base: `https://js2-contact-form-api.netlify.app/`

## Documentación

El API recibe únicamente consultas POST. Debe enviarse un cuerpo en formato JSON
con los siguientes elementos:

- `name` (string): Nombre de la persona
- `email` (string): Correo electrónico
- `phone` (string): Teléfono de la persona
- `subject` (string): Asunto del mensaje
- `message` (string): Mensaje

### Ejemplo

```
{
  "name": "Fulanito de Tal",
  "email": "fulanito@fulanitodetal.com",
  "phone": "5555-5555",
  "subject": "Reclamo sobre mal servicio recibido",
  "message": "¡Me atendieron muy mal!"
}
```
