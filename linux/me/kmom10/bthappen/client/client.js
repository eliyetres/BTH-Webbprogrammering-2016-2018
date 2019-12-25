/**
 * Front for Client Server
 */


// Import the http server as base
var http = require("http");



/**
 * Class for the client.
 *
 */
class Client {


    /**
     * Set the url of the server to connect to.
     *
     * @param  String url to use to connect to the server.
     *
     */
    setServer(url) {
        this.server = url;
    }



    /**
     * Make a HTTP GET request, wrapped in a Promise.
     *
     * @param  String url to connect to.
     *
     * @return Promise
     *
     */
    httpGet(url) {
        return new Promise((resolve, reject) => {
            http.get(this.server + url, (res) => {
                var data = "";

                res.on('data', (chunk) => {
                    data += chunk;
                }).on('end', () => {
                    if (res.statusCode === 200) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                }).on('error', (e) => {
                    reject("Got error: " + e.message);
                });
            });
        });
    }



 

    /**
     * View the command in browser.
     *
     * @param  URL
     *
     * @return Promise
     *
     */
    view() {
        return this.httpGet("/view/ascii");
    }


}

export default client;
