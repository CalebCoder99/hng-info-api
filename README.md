# HNG12 Stage 0

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Backlinks](#Backlinks)

## Description

This is a simple Express.js API built for the HNG12 internship.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/CalebCoder99/hng-info-api.git

   ```

2. **Navigate to the project directory:**

   ```
   cd hng-info-api

   ```

3. **Install the dependencies:**

   ```
   npm install
   ```

4. **Set up environment variables: Create a .env file in the root of the project and add the following variables:**

   ```
   PORT=3000
   NODE_ENV=development
   ```

5. **SRun the application:**

   ```
   npm start
   ```

## API Documentation

```
Endpoint URL:
GET /api/v1/dev - Returns the developer's email, current datetime, and GitHub URL.

Request:

Method: GET

URL: /api/v1/dev



```

1. **Response (200 OK)**

```

{
"email": "Calebasamah@gmail.com",
"current_datetime": "2025-01-30T09:30:00Z",
"github_url": "https://github.com/CalebCoder99/hng-info-api.git"
}

```

2. **Example Usage:**
   a. **Making a GET request using curl:**

```
curl http://localhost:3000/api/v1/dev
```

b. **Response:**

```
{
  "email": "Calebasamah@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/CalebCoder99/hng-info-api.git"
}

```

## Backlinks

Explore more opportunities to hire developers in different programming languages:

https://hng.tech/hire/nodejs-developers
