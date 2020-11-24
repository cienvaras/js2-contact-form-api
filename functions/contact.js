exports.handler = async (event, context, callback) => {
  switch (event.httpMethod) {
    case 'OPTIONS':
      return {
        statusCode: 204,
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        },
        body: JSON.stringify({}),
      };
    case 'POST':
      const formData = event.body && JSON.parse(event.body);
      if (!(formData && Object.keys(formData).length)) {
        return {
          statusCode: 400,
          headers: {
            'content-type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
          },
          body: 'BAD REQUEST',
        }
      }
      return {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*', 
        },
        body: JSON.stringify({
          name: formData.name ? formData.name : null,
          email: formData.email ? formData.email : null,
          phone: formData.phone ? formData.phone : null,
          subject: formData.subject ? formData.subject : null,
          message: formData.message ? formData.message : null,
        }),
      };
    default:
      return {
        statusCode: 400,
        headers: {
          'content-type': 'text/plain',
          'Access-Control-Allow-Origin': '*',
        },
        body: 'BAD REQUEST',
      }
  }
};
