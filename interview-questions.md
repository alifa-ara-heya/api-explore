Here are the answers to the common interview questions shown in the image:

### 1. What is an API?
An **API (Application Programming Interface)** is a set of rules that allows different software entities to communicate with each other. It defines the methods and data formats that applications can use to interact, making it easier for systems to connect and share functionality or data.

### 2. What are the HTTP methods supported by REST?
REST (Representational State Transfer) commonly supports the following HTTP methods:
- **GET**: Retrieve data from the server.
- **POST**: Submit data to the server to create a resource.
- **PUT**: Update a resource on the server.
- **DELETE**: Remove a resource from the server.
- **PATCH**: Apply partial updates to a resource.
- **OPTIONS**: Retrieve information about the communication options available for the resource.

### 3. Can you use GET request instead of PUT to create a resource?
No, a **GET** request should not be used to create a resource. **GET** is used to retrieve data, and it should be idempotent, meaning it doesn't change the state of the resource on the server. **PUT** or **POST** is typically used for creating or updating resources.

### 4. What is the difference between PUT and POST?
- **PUT**: Updates an existing resource or creates a resource if it doesn't exist. It is idempotent, meaning repeated calls to PUT will have the same effect as a single call.
- **POST**: Creates a new resource. It is not idempotent, meaning repeated POST requests will result in multiple resources being created.

### 5. What is JSON?
**JSON (JavaScript Object Notation)** is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used to represent structured data in web applications and APIs.

### 6. What are CRUD operations?
**CRUD** stands for **Create, Read, Update, and Delete**. These are the basic operations that can be performed on data in a database or a similar storage system:
- **Create**: Add a new resource.
- **Read**: Retrieve a resource.
- **Update**: Modify an existing resource.
- **Delete**: Remove a resource.

Here are the answers to the selected interview questions from the image in simplified language:

### 7. What is the file extension of JSON?
The file extension for **JSON** files is `.json`.

### 8. What are the data types supported by JSON?
JSON supports the following data types:
- **String**: Text, like "Hello World."
- **Number**: Numeric values, like 42 or 3.14.
- **Boolean**:

Here are the answers to the additional interview questions shown in the image:

### 9. What is the file extension of JSON?
The file extension of a **JSON** file is **.json**.

### 10. What are the data types supported by JSON?
JSON supports the following data types:
- **String** (text data)
- **Number** (integers and floating-point numbers)
- **Boolean** (true or false)
- **Array** (an ordered list of values)
- **Object** (a collection of key-value pairs)
- **Null** (represents an empty value)

### 11. What is the role of `JSON.stringify()`?
`**JSON.stringify()**` is a function that converts a JavaScript object or value into a JSON string. This is useful for sending data in a format that can be easily shared or stored, such as sending data to a server.

### 12. Show how to parse a JSON.
To parse JSON (convert it from a string to a JavaScript object), you use `**JSON.parse()**`. Here’s an example:

```javascript
const jsonString = '{"name": "John", "age": 30}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // Output: John
```

### 13. Tell us the difference between GET and POST.
- **GET**: Requests data from a server (read-only). It doesn’t change anything on the server.
- **POST**: Sends data to the server to create or update a resource. It often changes the state of the server.

Let me know if you'd like more explanations!

Here are the simplified answers to the questions shown in the image:

### 14. What is the file extension of JSON?
The file extension for **JSON** files is **`.json`**.

### 15. What are the data types supported by JSON?
JSON supports the following data types:
- **String**: Text data.
- **Number**: Both integers and floating-point numbers.
- **Boolean**: `true` or `false`.
- **Array**: A collection of values.
- **Object**: Key-value pairs (like a dictionary or map).
- **Null**: Represents no value.

### 16. What is the role of `JSON.stringify`?
**`JSON.stringify()`** converts a JavaScript object or value into a JSON string. It’s used when you want to send data from your program to a server in JSON format.

### 17. Show how to parse a JSON.
To parse a JSON string into a JavaScript object, you use **`JSON.parse()`**. Here’s an example:

```javascript
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John
```

### 18. Tell us the difference between GET and POST.
- **GET**: Used to request data from a server. It does not change anything on the server and is generally used for retrieving data.
- **POST**: Used to send data to the server, often to create or update a resource. It can change data on the server.

Let me know if you need any further explanations!