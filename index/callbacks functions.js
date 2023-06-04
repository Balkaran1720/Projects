// Simulated asynchronous library
class AsyncLibrary {
  operation1(callback) {
    setTimeout(() => {
      const result = "Result of operation 1";
      callback(result);
    }, 1000);
  }

  operation2(callback) {
    setTimeout(() => {
      const result = "Result of operation 2";
      callback(result);
    }, 1000);
  }

  operation3(callback) {
    setTimeout(() => {
      const result = "Result of operation 3";
      callback(result);
    }, 1000);
  }
}

// Callback function for operation 1
function operation1Callback(result) {
  console.log("Operation 1 completed:", result);
  asyncLib.operation2(operation2Callback);
}

// Callback function for operation 2
function operation2Callback(result) {
  console.log("Operation 2 completed:", result);
  asyncLib.operation3(operation3Callback);
}

// Callback function for operation 3
function operation3Callback(result) {
  console.log("Operation 3 completed:", result);
}

// Create an instance of the library
const asyncLib = new AsyncLibrary();

// Start the process by invoking operation 1
asyncLib.operation1(operation1Callback);

// Simulated asynchronous file operations
function readFile(path, callback) {
  setTimeout(() => {
    // Simulating file read operation
    const fileContent = "This is the content of the file.";
    callback(null, fileContent);
  }, 1000);
}

function modifyContent(content, callback) {
  setTimeout(() => {
    // Simulating content modification
    const modifiedContent = content.toUpperCase();
    callback(null, modifiedContent);
  }, 1000);
}

function writeFile(path, content, callback) {
  setTimeout(() => {
    // Simulating file write operation
    callback(null, true);
  }, 1000);
}

// Callback function for file operations
function fileOperationCallback(error, result) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Operation completed successfully:", result);
  }
}

// Perform file operations
readFile("example.txt", (readError, fileContent) => {
  if (readError) {
    fileOperationCallback(readError);
  } else {
    modifyContent(fileContent, (modifyError, modifiedContent) => {
      if (modifyError) {
        fileOperationCallback(modifyError);
      } else {
        writeFile("example.txt", modifiedContent, fileOperationCallback);
      }
    });
  }
});

// Simulated AJAX requests
function sendRequest(url, method, data, callback) {
  setTimeout(() => {
    // Simulating AJAX request
    const response = {
      status: 200,
      data: "Response data",
    };
    callback(null, response);
  }, 1000);
}

// Callback function for AJAX requests
function ajaxCallback(error, response) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Request successful:", response);
  }
}

// Perform AJAX requests
sendRequest("https://api.example.com/data", "GET", null, (error, response) => {
  if (error) {
    ajaxCallback(error);
  } else {
    const requestData = response.data;
    sendRequest("https://api.example.com/submit", "POST", requestData, ajaxCallback);
  }
});
