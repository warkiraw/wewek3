fetch('user.json')
    .then(responce => responce.json())
    .then(json => console.log(json));
{
    "user": {
        "name":"warki"
    }
}