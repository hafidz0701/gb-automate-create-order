const restApiCaller = require('../callers/rest-api.js')

async function postCreateOrder(header, body) {

    const callers = new restApiCaller({
        url : __URL__,
        endPoint : '/gb/v1/gateway/order',
        header : header,
        body : body,
    })

    const res = await callers.post();
    // console.log("📦 Request Payload:", { header, body}); // <-- Tambahkan ini
    return res;
}

module.exports ={
    postCreateOrder
}