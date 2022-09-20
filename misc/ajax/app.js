document.querySelector('#ajaxButton').addEventListener('click', () => {
    let request = new XMLHttpRequest();

    if (!request) {
        alert('Unable to create XMLHTTPRequest object');
        return false;
    }

    request.onreadystatechange = () => {
        try {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    alert(request.responseText);
                } else {
                    alert('There was a problem making the request');
                }
            }
        } catch (e) {
            alert(`Caught Exception: ${e.description}`);
        }
    };
    request.open('GET', 'test.txt');
    request.send();
});