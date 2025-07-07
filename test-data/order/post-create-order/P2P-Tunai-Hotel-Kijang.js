const path = require('path');
const globalVars = require(path.resolve(process.cwd(), 'config/global-variables.json'));
const scriptName = path.basename(__filename).split('.')[0];
const schema = require('../../../schema/success-create-order.json');

const test_data = {
  title: scriptName,
  header: {
    authorization: globalVars.__TOKEN__ 
  },
  body: {
    header: {
      order_area: "JKT",
      creator_code: "GH",
      order_status: "OPEN",
      created_by: "Hotel Jakarta All",
      order_code: "Hotel",
      complementary: false,
      order_type: "TUNAI",
      channel: "Walk In",
      company_phone: "-",
      company_code: "GH",
      customer_tag: "",
      company_name: "coba",
      customer_phone: "081324201437",
      customer_name: "Hafidz Anandityo Ramadhan",
      customer_email: "apeace0701@gmail.com",
      customer_code: "",
      service_type_id: 151,
      rate_usd: 15000,
      ppn: "PPN_OVERTIME",
      hotel_name: "GRAND HYATT PPT",
      currency: "IDR",
      executor_code: "GH"
    },
    details: [
      {
        category_executor: "HOTEL",
        consumer_name: "Hafidz Anandityo Ramadhan",
        consumer_phone: "081324201437",
        is_visitor: false,
        order_area: "JKT",
        created_by: "Hotel Jakarta All",
        creator_code: "GH",
        consumer_email: "apeace0701@gmail.com",
        consumer_company: "coba",
        category_creator: "HOTEL",
        discount_type: "PERCENTAGE",
        rate_usd: 15000,
        pickup_point: "HOTEL GRAND HYATT, PLAZA INDONESIA, JALAN M.H. THAMRIN, RW 05, GONDANGDIA, MENTENG, JAKARTA PUSAT, DAERAH KHUSUS IBUKOTA JAKARTA, 10240, INDONESIA",
        pickup_latlong: "-6.1929,106.822304",
        destination_group: "POINT",
        price_idr: 210000,
        price_usd: 15,
        vehicle_type: "KIJANG",
        vehicle_class: "STD2",
        destination_code: "PDA1",
        service_type: "",
        duration_used: 1,
        duration_used_unit: "HOURS",
        id_service_type_rules: 176,
        destination_type: "AIRPORT",
        destination_name: "PDA1 - Airport Transfer Zona 1",
        drop_point: "TERMINAL 3 SOETTA, SOEKARNO-HATTA INTERNATIONAL AIRPORT, JALAN RAYA BANDARA, PAJANG, TANGERANG, BANTEN, 19120, INDONESIA",
        start_date: new Date().toISOString(),
        start_time: new Date().toISOString(),
        end_time: new Date(Date.now() + 60 * 60 * 1000).toISOString(), // 1 jam setelah start_time
        driver_notes: "",
        notes: "",
        attention_name: "TESTING IT",
        charge_toll_to: "TAMU",
        executor_option: {
          id: 22,
          code: "GH",
          area_code: "JKT",
          name: "GRAND HYATT PPT",
          category: "HOTEL",
          status: true,
          type: "ORDER_BASED",
          telepon: "-",
          customer_code: "",
          customer_tag: "",
          address: "GRAND HYATT PUSAKA PRIMA TRANSPORT",
          pickup_address: "HOTEL GRAND HYATT, PLAZA INDONESIA, JALAN M.H. THAMRIN, RW 05, GONDANGDIA, MENTENG, JAKARTA PUSAT, DAERAH KHUSUS IBUKOTA JAKARTA, 10240, INDONESIA",
          pickup_latlong: "-6.1929,106.822304",
          price_type: "BASE",
          ppn: "PPN_OVERTIME",
          hotel_star: 5,
          rate_dollar: 15000,
          currency: ["IDR", "USD"],
          service_type_id: 151,
          service_type_name: "Base Price Jakarta",
          created_at: new Date().toISOString(),
          updated_at: "0001-01-01T00:00:00Z",
          deleted_at: "0001-01-01T00:00:00Z",
          label: "GH - GRAND HYATT PPT"
        },
        total_price: 210000,
        drop_latlong: "-6.1204,106.660103",
        price_idr_default: 210000,
        assign_driver: null,
        executor_code: "GH",
        executor_name: "GRAND HYATT PPT",
        executor_id: 22
      }
    ],
    payment: {
      order_area: "JKT",
      creator_code: "GH",
      created_by: "Hotel Jakarta All",
      complementary: false,
      list_additional_toll: [0],
      list_deposit_toll: [0],
      list_package_toll: [0],
      list_price: [210000],
      list_discount: [0],
      payment_type: "TUNAI",
      currency: "IDR",
      executor_code: "GH",
      payment_method: "CASH",
      total_price: 210000,
      down_payment: 0,
      base_price: 210000,
      total_deposit_toll: 0,
      total_package_toll: 0,
      total_additional_toll: 0,
      nominal_discount: 0,
      cash_to: "Pengemudi"
    }
  },
  expected_result: {
    status_code: 200,
    body: {
      data: [{
        item_no: 1,
        order_area: "JKT",
        vehicle_type: "KIJANG"
      }]
    },
    json_schema: schema
  }
};

module.exports = test_data;
