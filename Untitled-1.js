const getRes = async(url) => {
    const res = await fetch(url);
    if(!res.ok) {
        throw new Error('status:$(res.status)');
    }
    return await res.json();
}
getRes('user.json')
    .then(data=> {
        console.log(data);
        for (let key in data) {
            console.log(key)
        }
    });
{
    "card one":{
        "name":"warki",
        "age": 20
    },
    "card two":{
        "name":"wai",
        "age": 25
    }
}