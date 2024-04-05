export const errorHandler = (statusCode, message)=>{
  console.error(`Error: ${message}`); // Log the error message to the console
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
}