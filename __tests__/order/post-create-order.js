const orderCollection = require('../../collections/order.js');
const testDataDir = __filename.split('.')[0].replace('__tests__', 'test-data');
const logger = require('../../utilities/logger.js');
const verifier = require('../../utilities/verifier.js');


let testData = require('require-all')({
    dirname: testDataDir,
});

let res;

describe('Create Order', () => {
    test.each(Object.values(testData))(
        "Test $title", async ({ title, header, body, expected_result }) => {
            // console.log(expected_result)
            res = await orderCollection.postCreateOrder(header, body);

            logger.logRequest(res)
            logger.logResponse(res)
            logger.logExpectation(res)
            logger.logMessage('Result Reporting')
            console.log(res.body)

            // console.log("🔍 FULL RESPONSE BODY:", JSON.stringify(res.body, null, 2))

            verifier.verifyResponse(res, expected_result)
        }
    )
})