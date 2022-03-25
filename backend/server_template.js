const http = require('http');
const fs = require('fs');
const path = require('path');



const server = http.createServer((request, response) => {

    const errorHTML = `
		
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet">
        <style>
            body{
                padding: 0; margin: 0;
                font-family: 'Montserrat', sans-serif;
                font-weight: 800;
                background-color: #4343F9;
                color: #fff;
            }
            #root{
                width: 100%;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 21px;
            }
        </style>
        <title>Not here</title>
    </head>
    <body>
        <div id="root">Rise your gaze to the sky<br/>than a bit back to the URL bar<br/>and check that link again</div>
    </body>
    </html>

    `;
    
	let filePath = path.resolve(__dirname + '/../frontend' + request.url);

    
	fs.access(filePath, fs.constants.R_OK, (error) => {
	if(error){
		response.statusCode = 404;
		response.end(errorHTML);
	}else{
        // let syncedPath = fs.statSync(filePath);
		if( fs.statSync(filePath).isDirectory()) {
            // if(syncedPath){ //request.url === "data"){
            //     filePath += '/data.json';
            // }
			filePath += '/index.html';
            
            // filePath += '/data.json';
		}
		fs.readFile(filePath, (err, data) => {
			if(err) {
				response.statusCode = 500;
				response.end(errorHTML);
			} else {
				response.end(data);
			}
		});
	}
	});
});

server.listen(9000, "127.0.0.1", () => {
    const addr = server.address();
		console.log(`http://${addr.address}:${addr.port}`);
});







// const dataServer = http.createServer((request, response) => {
    
// 	let filePath = path.resolve(__dirname + '/../frontend' + request.url);
    
// 	fs.access(filePath, fs.constants.R_OK, (error) => {
// 	if(error){
// 		response.statusCode = 404;
// 		response.end(errorHTML);
// 	}else{
// 		if(fs.statSync(filePath).isDirectory()) {
// 			// filePath += '/index.html';
//             filePath += '/data.json';
// 		}
// 		fs.readFile(filePath, (err, data) => {
// 			if(err) {
// 				response.statusCode = 500;
// 				response.end(errorHTML);
// 			} else {
// 				response.end(data);
// 			}
// 		});
// 	}
// 	});
// });

// dataServer.listen(9000, "127.0.0.2", () => {
//     const addr = dataServer.address();
// 		console.log(`http://${addr.address}:${addr.port}`);
// });