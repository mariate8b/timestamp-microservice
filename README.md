# Timestamp Microservice

This is a simple Timestamp Microservice built with Node.js and Express. The service provides a way to convert dates into UNIX and UTC formats. It can handle both human-readable date strings and UNIX timestamps.

## Features

- Return the current date and time in both UNIX and UTC formats when no date is provided.
- Convert valid date strings (e.g., `2015-12-25`) to UNIX and UTC formats.
- Convert UNIX timestamps (e.g., `1451001600000`) to human-readable UTC format.
- Handle invalid date input and return an error.

## Endpoints

### **1. Base URL**
`GET /`

Returns a welcome message with instructions.

#### Example Response:
```json
{
  "message": "Welcome to the Timestamp Microservice! Use the /api/:date endpoint."
}
