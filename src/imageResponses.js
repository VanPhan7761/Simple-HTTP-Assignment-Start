const fs = require('fs');
const dankmeme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const displayImage = (request, response) => {
    response.writeHead(200, {'Content-Type':'MIMEType'});
    response.write(dankmeme);
    response.end();
}

module.exports = {
    displayImage
};