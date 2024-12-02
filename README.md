## Project: Task Manager

### Description
A web application to efficiently organize tasks.

### Technologies
* **Backend:** Node.js, Express.js
* **Frontend:** Pug (for views)
* **Database:** MySQL
* **Others:** Helmet, Morgan, CORS

### Features
* Create tasks
* Mark tasks as completed
* Delete tasks
* Intuitive interface

### Architecture
* **MVC:** Model-View-Controller

### Data Model
* **`tasks` table:**
  * `id` (integer, auto-increment, primary key)
  * `title` (string, not null)
  * `completed` (boolean, default false)
  * `createdAt` (timestamp, default current timestamp)
  * `dueDate` (date, optional)
  * `priority` (enum: low, medium, high, optional)
