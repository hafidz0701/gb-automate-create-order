const path = require('path');
const globalVars = require(path.resolve(process.cwd(), 'config/global-variables.json'));
const scriptName = path.basename(__filename).split('.')[0];
const schema = require('../../../schema/success-create-order.json');
// const tools = require('../../../utilities/tools.js');

const test_data = {
    "title": scriptName,
    "header": {
        "authorization": globalVars.__TOKEN__
    },
    "body":{
        "header": {
          "order_area": "JKT",
          "creator_code": "HO",
          "order_status": "OPEN",
          "created_by": "Gold JKT Tester",
          "order_code": "Reservasi",
          "complementary": false,
          "order_type": "TUNAI",
          "channel": "Reservasi",
          "company_phone": "",
          "company_code": "",
          "customer_tag": "",
          "company_name": "coba",
          "customer_phone": "081324201437",
          "customer_name": "Hafidz Anandityo Ramadhan",
          "customer_email": "apeace0701@gmail.com",
          "customer_code": "",
          "service_type_id": 151,
          "rate_usd": 15000,
          "ppn": "NO",
          "hotel_name": "",
          "currency": "IDR",
          "executor_code": "HO"
        },
        "details": [
          {
            "category_executor": "PUSAT",
            "consumer_name": "Hafidz Anandityo Ramadhan",
            "consumer_phone": "081324201437",
            "is_visitor": false,
            "order_area": "JKT",
            "created_by": "Gold JKT Tester",
            "creator_code": "HO",
            "consumer_email": "apeace0701@gmail.com",
            "consumer_company": "coba",
            "category_creator": "PUSAT",
            "discount_type": "PERCENTAGE",
            "rate_usd": 15000,
            "pickup_point": "KANTOR PUSAT BLUEBIRD, MAMPANG PRAPATAN, SOUTH JAKARTA  INDONESIA, 12790",
            "pickup_latlong": "-6.2465,106.825897",
            "destination_group": "TIMEBASE",
            "price_idr": 2125000,
            "price_usd": 20,
            "vehicle_type": "KIJANG",
            "vehicle_class": "STD2",
            "destination_code": "PP10J",
            "service_type": "OUT_OF_TOWN",
            "duration_used": 10,
            "duration_used_unit": "HOURS",
            "id_service_type_rules": 189,
            "destination_type": "NON_INAP",
            "destination_name": "PP10J - Bandung",
            "deposit_toll": null,
            "package_toll": null,
            "additional_toll": null,
            "drop_point": "LUI RESTAURANT, WARTEG HIPSTER, JALAN BAHUREKSA, CITARUM, BANDUNG WETAN, WEST JAVA, 40116, INDONESIA",
            "start_date": new Date().toISOString(), // if want to set time use "2025-04-14T12:38:00+07:00"
            "start_time": new Date().toISOString(), // if want to set time use "2025-04-14T12:38:00+07:00"
            "type_service": "OUT_OF_TOWN",
            "drop_latlong": "-6.905517,107.614296",
            "end_time": new Date(Date.now() + 10 * 60 * 60 * 1000).toISOString(), // i set this end time is 1 hour from start_time, 
            // if u want create order for 2 times or more u can set this time more than 1 hour use "end_time": new Date(Date.now() + 60 * 60 * 3 * 1000).toISOString(), change *3 
            // and if u want set manually use "end_time": "2025-04-14T12:38:00+07:00", follow the start time
            "duration": null,
            "max_distance": null,
            "request_driver": {},
            "driver_notes": "",
            "notes": "",
            "overtime_payer": "Tamu",
            "overtime_payment_method": "Cash ke Pengemudi",
            "charge_toll_to": "TAMU",
            "executor_option": {
              "id": 90,
              "code": "HO",
              "area_code": "JKT",
              "name": "Pusat Jakarta",
              "category": "PUSAT",
              "status": true,
              "type": "ORDER_BASED",
              "telepon": "0217463 6151",
              "customer_code": "1",
              "customer_tag": "HOUSE_USE",
              "address": "Mampang Parapatan",
              "pickup_address": "",
              "pickup_latlong": "",
              "price_type": "BASE",
              "ppn": "NO",
              "hotel_star": 0,
              "rate_dollar": 15000,
              "currency": [
                "IDR"
              ],
              "service_type_id": 151,
              "service_type_name": "Base Price Jakarta",
              "created_at": new Date().toISOString(),
              "updated_at": new Date().toISOString(),
              "deleted_at": "0001-01-01T00:00:00Z",
              "label": "HO - Pusat Jakarta"
            },
            "attention_name": "Gold JKT Tester",
            "total_price": 2125000,
            "executor_code": "HO",
            "executor_name": "Pusat Jakarta",
            "executor_id": 90,
            "assign_driver": null,
            "price_idr_default": 2125000
          }
        ],
        "payment": {
          "order_area": "JKT",
          "creator_code": "HO",
          "created_by": "Gold JKT Tester",
          "complementary": false,
          "list_additional_toll": [
            0
          ],
          "list_deposit_toll": [
            0
          ],
          "list_package_toll": [
            0
          ],
          "list_price": [
            2125000
          ],
          "list_discount": [
            0
          ],
          "payment_type": "TUNAI",
          "currency": "IDR",
          "executor_code": "HO",
          "payment_method": "CASH",
          "total_price": 2125000,
          "down_payment": 0,
          "base_price": 2125000,
          "total_deposit_toll": 0,
          "total_package_toll": 0,
          "total_additional_toll": 0,
          "nominal_discount": 0,
          "cash_to": "Pengemudi"
        }
      },
      "expected_result": {
        "status_code": 200,
        "body" : {
        "data": [{
            "item_no": 1,
            "order_area": "JKT",
            "vehicle_type": "KIJANG"
        }],
    },
        "json_schema": schema
    }
}

module.exports = test_data