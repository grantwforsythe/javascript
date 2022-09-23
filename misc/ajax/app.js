/**
 * Make an AJAX request
 * @param {string} fileName - The name of a local file on the server
 * @returns {boolean} - The request was made
 */
const makeAJAXRequest = (fileName) => {
    let request = new XMLHttpRequest();

    if (!request) {
        alert('Unable to create XMLHTTPRequest object');
        return false;
    }

    request.onreadystatechange = () => {
        try {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    parseFile(fileName, request);
                } else {
                    alert('There was a problem making the request');
                }
            }
        } catch (e) {
            alert(`Caught Exception: ${e.description}`);
        }
    };
    request.open('GET', fileName);
    request.send();
};

/**
 * Parse a file's contents and alert the user.
 * @param {string} fileName - The name of a local file on the server 
 * @param {XMLHttpRequest} request - The AJAX request
 */
const parseFile = (fileName, request) => {
    if (fileName.endsWith('txt')) {
        alert(request.responseText);
    } else if (fileName.endsWith('xml')) {
        const xml = request.responseXML;
        const rootNode = xml.querySelector('root');
        alert(rootNode.firstChild.data);
    } else {
       throw new TypeError('File can only end in txt or xml') ;
    }
};

document.querySelector('#button-text').addEventListener('click', makeAJAXRequest.bind(null, 'test.txt'));

document.querySelector('#button-xml').addEventListener('click', makeAJAXRequest.bind(null, 'test.xml'));