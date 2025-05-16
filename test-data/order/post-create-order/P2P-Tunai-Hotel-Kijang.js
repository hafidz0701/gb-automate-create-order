const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];
const schema = require('../../../schema/success-create-order.json');
// const tools = require('../../../../utilities/tools.js');

const test_data = {
    "title": scriptName,
    "header": {
        "authorization": "bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDc0Njc3NTYsImlhdCI6MTc0NzM4MTM1NiwiaXNzIjoic2VjdXJpdHkuYmx1ZWJpcmQuaWQiLCJzdWIiOiJHb2xkIEpLVCBQdXNhdCIsImF1dGhfdGltZSI6MTc0NzM4MTM1NiwibmFtZSI6IkdvbGQgSktUIFB1c2F0IiwiZW1haWwiOiJnb2xkamt0NUBibHVlYmlyZC5pZCIsInBob25lX251bWJlciI6IjA4NTczMjcyMTAzMSIsImFkZHJlc3MiOnt9LCJ1dWlkIjoiN2M1ZjE3YjctMDhkNi00OTJiLWI1NjQtYmNiMjQ0OGRiNDU3IiwidWlkIjoiZ29sZGprdDUiLCJkb21haW4iOiJibHVlYmlyZC5pZCIsImFjbCI6eyIxIjo0Mjk0OTY3Mjk1LCIxMCI6MTQwNzM3NDg4MzU1MzI3LCIxMjYiOjMsIjE4Ijo4MTkxLCIyNSI6MTMxMDcxLCIzMCI6NDI5NDk2NzI5NiwiMzkiOjY4NzE5NDc2NzM1LCI0NiI6MTA3Mzc0MTgyMywiNTUiOjE1LCI2MSI6MTY3NzcyMTUsIjY3IjoyMDQ3LCI3NiI6MTI3LCI5MyI6NTYyOTQ5OTUzNDIxMzExfSwiYWNscyI6eyIxIjoiNDI5NDk2NzI5NSIsIjEwIjoiMTQwNzM3NDg4MzU1MzI3IiwiMTI2IjoiMyIsIjE4IjoiODE5MSIsIjI1IjoiMTMxMDcxIiwiMzAiOiI0Mjk0OTY3Mjk2IiwiMzkiOiI2ODcxOTQ3NjczNSIsIjQ2IjoiMTA3Mzc0MTgyMyIsIjU1IjoiMTUiLCI2MSI6IjE2Nzc3MjE1IiwiNjciOiIyMDQ3IiwiNzYiOiIxMjciLCI5MyI6IjU2Mjk0OTk1MzQyMTMxMSJ9LCJkb21haW5faWQiOiJhMGE0ODA3Ni0zMTk0LTQ2MTItYWZhZS01YmEwYjQ2ZDYxOGMiLCJkb21haW5fbmFtZSI6IkpLVCIsImRvbWFpbl90eXBlIjoyLCJncm91cF9uYW1lIjoiZ2JfcmVzZXJ2YXNpIiwiYmJnLmJiZC5hY2Nlc3MiOnsiYXJlYXMiOlsiYTBhNDgwNzYtMzE5NC00NjEyLWFmYWUtNWJhMGI0NmQ2MThjIl0sIm91dGxldHMiOm51bGwsInBvb2xzIjpudWxsfSwidXNlcl90eXBlIjoxLCJvcGVyYXRvcl9jb2RlIjoiSE8ifQ.vsMMdaFmxu7TXuW2qYWYXDR57hObeW413A83gijkb-3W7fdRr8PD_YzvHUoCMGDsYGiwveRLSyUT_ppMMHqs_w"
    },
    "body": {
    "header": {
        "order_area": "JKT",
        "creator_code": "GH",
        "order_status": "OPEN",
        "created_by": "Hotel Jakarta All",
        "order_code": "Hotel",
        "complementary": false,
        "order_type": "TUNAI",
        "channel": "Walk In",
        "company_phone": "-",
        "company_code": "GH",
        "customer_tag": "",
        "company_name": "coba",
        "customer_phone": "081324201437",
        "customer_name": "Hafidz Anandityo Ramadhan",
        "customer_email": "apeace0701@gmail.com",
        "customer_code": "",
        "service_type_id": 151,
        "rate_usd": 15000,
        "ppn": "PPN_OVERTIME",
        "hotel_name": "GRAND HYATT PPT",
        "currency": "IDR",
        "executor_code": "GH"
    },
    "details": [
        {
            "category_executor": "HOTEL",
            "consumer_name": "Hafidz Anandityo Ramadhan",
            "consumer_phone": "081324201437",
            "is_visitor": false,
            "order_area": "JKT",
            "created_by": "Hotel Jakarta All",
            "creator_code": "GH",
            "consumer_email": "apeace0701@gmail.com",
            "consumer_company": "coba",
            "category_creator": "HOTEL",
            "discount_type": "PERCENTAGE",
            "rate_usd": 15000,
            "pickup_point": "HOTEL GRAND HYATT, PLAZA INDONESIA, JALAN M.H. THAMRIN, RW 05, GONDANGDIA, MENTENG, JAKARTA PUSAT, DAERAH KHUSUS IBUKOTA JAKARTA, 10240, INDONESIA",
            "pickup_latlong": "-6.1929,106.822304",
            "destination_group": "POINT",
            "price_idr": 210000,
            "price_usd": 15,
            "vehicle_type": "KIJANG",
            "vehicle_class": "STD2",
            "destination_code": "PDA1",
            "service_type": "",
            "duration_used": 1,
            "duration_used_unit": "HOURS",
            "id_service_type_rules": 176,
            "destination_type": "AIRPORT",
            "destination_name": "PDA1 - Airport Transfer Zona 1",
            "deposit_toll": null,
            "package_toll": null,
            "additional_toll": null,
            "drop_point": "TERMINAL 3 SOETTA, SOEKARNO-HATTA INTERNATIONAL AIRPORT, JALAN RAYA BANDARA, PAJANG, TANGERANG, BANTEN, 19120, INDONESIA",
            "start_date": "2025-05-16T11:17:00+07:00",
            "start_time": "2025-05-16T11:17:00+07:00",
            "driver_notes": "",
            "notes": "",
            "attention_name": "TESTING IT",
            "charge_toll_to": "TAMU",
            "executor_option": {
                "id": 22,
                "code": "GH",
                "area_code": "JKT",
                "name": "GRAND HYATT PPT",
                "category": "HOTEL",
                "status": true,
                "type": "ORDER_BASED",
                "telepon": "-",
                "customer_code": "",
                "customer_tag": "",
                "address": "GRAND HYATT PUSAKA PRIMA TRANSPORT",
                "pickup_address": "HOTEL GRAND HYATT, PLAZA INDONESIA, JALAN M.H. THAMRIN, RW 05, GONDANGDIA, MENTENG, JAKARTA PUSAT, DAERAH KHUSUS IBUKOTA JAKARTA, 10240, INDONESIA",
                "pickup_latlong": "-6.1929,106.822304",
                "price_type": "BASE",
                "ppn": "PPN_OVERTIME",
                "hotel_star": 5,
                "rate_dollar": 15000,
                "currency": [
                    "IDR",
                    "USD"
                ],
                "service_type_id": 151,
                "service_type_name": "Base Price Jakarta",
                "created_at": "2024-01-30T08:53:36.744181Z",
                "updated_at": "0001-01-01T00:00:00Z",
                "deleted_at": "0001-01-01T00:00:00Z",
                "label": "GH - GRAND HYATT PPT"
            },
            "total_price": 210000,
            "drop_latlong": "-6.1204,106.660103",
            "end_time": "2025-05-16T12:17:00+07:00",
            "price_idr_default": 210000,
            "assign_driver": null,
            "executor_code": "GH",
            "executor_name": "GRAND HYATT PPT",
            "executor_id": 22
        }
    ],
    "payment": {
        "order_area": "JKT",
        "creator_code": "GH",
        "created_by": "Hotel Jakarta All",
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
            210000
        ],
        "list_discount": [
            0
        ],
        "payment_type": "TUNAI",
        "currency": "IDR",
        "executor_code": "GH",
        "payment_method": "CASH",
        "total_price": 210000,
        "down_payment": 0,
        "base_price": 210000,
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