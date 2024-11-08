2. How to handle asynchronous operations using async/await over callback/promise TypeScript?
Ans:
Using async/await in TypeScript makes it much easier to handle asynchronous tasks. Instead of dealing with the complexity of callbacks or chaining .then() methods as with Promises, async/await lets us write asynchronous code that are simple, step-by-step code. We start by marking a function as async, which signals that the function will work with asynchronous actions. Inside an async function, we use await to pause execution until the task is complete. This way, each line runs in the right order, making it easier to read and understand the flow of operations.

For example, imagine we want to simulate fetching data from a server. The following code example shows how async and await can handle this in a readable way:


    async function fetchData(): Promise<string> {
        return new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 1000));
    }

    async function loadData() {
        try {
            const data = await fetchData();
            processData(data); 
            console.log(data); 
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    loadData();


In this example, loadData() waits for fetchData() to complete before moving to the next line. This is for await, which pauses the function execution until fetchData() finishes. So before calling the processData function the fetchData will be done. Once we get data then processData will be called. This is how order is maintained in async/await. Using try/catch with await also simplifies error handling, so we can catch all errors in one place. This method of handling asynchronous code is especially useful when we need to run multiple tasks in order, as it keeps the code clear and prevents the need for nested callbacks or .then() chains. This way, async/await makes managing asynchronous tasks simpler, more organized, and easier to read.

The same code in promise looks like this:

        function fetchData(): Promise<string> {
            return new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 1000));
        }

        function loadData() {
            fetchData()
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error("An error occurred:", error);
                });
        }

        loadData();

In the above code, fetchData() returns a Promise that resolves after a delay, and we handle the result using 
.then(). To catch errors, we add .catch(), which can lead to nested or chained .then() and .catch() blocks, especially if we have more asynchronous tasks to handle. It will make the code messy. On the other hand, async/await is much more simpler and easy to handle.
