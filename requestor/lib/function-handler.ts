import request = require("request");

export function handleFunctionCall(context: string, callback: Function) {
    try {
        request(JSON.parse(context), (error, response, body) => {
            callback(undefined, {
                error: error,
                response: response,
                body: body
            });
        });
    } catch (error) {
        callback(error);
    }
}
