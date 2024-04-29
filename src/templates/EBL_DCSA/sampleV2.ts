import { v2 } from "@tradetrust-tt/tradetrust";
import { EBL_DCSASchemaV2 } from "./types";

export const EBL_DCSASampleV2: EBL_DCSASchemaV2 = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: "EBL_DCSA",
    "url": "https://master.dzfel3p4uihte.amplifyapp.com"
  },
  issuers: [
    {
      name: "abc",
      tokenRegistry: "0x142Ca30e3b78A840a82192529cA047ED759a6F7e",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "example.tradetrust.io",
      },
    },
  ],

  "dcsa_ebl_document": [
    {
      "bol_ref": "ibI.4YnwqOfRe5@ZR1[&",
      "shipping_ref": "+q<9$nO3|c.~oCO`<\\'c,nDj3dt9(#!A-8W>1/yd2!L|mC!Gcwr1\\Vy0v?+h1e+                                     ",
      "status": "string",
      "shipped_onboard": true,
      "freight_payment_cd": "PRE",
      "origin_charges_cd": "PRE",
      "destination_charges_cd": "PRE",
      "to_order": true,
      "place_of_receipt": [
      ],
      "port_of_load": [
        "string1",
        "string2"
      ],
      "port_of_discharge": [
        "string1"
      ],
      "place_of_delivery": [
        "string1",
        "string2",
        "string3"
      ],
      "shipped_onboard_date": "2024-02-29",
      "terms_and_conditions": "string",
      "origin_receipt_type": "CY",
      "destination_delivery_type": "CY",
      "origin_cargo_movement_type": "str",
      "destination_cargo_movement_type": "str",
      "issue_date": "2024-02-29",
      "received_shipment_date": "2024-02-29",
      "service_contract_ref": "string",
      "contract_quotation_ref": ")ms2X~1]P                          ",
      "declared_value": 0,
      "declared_currency": "QCE",
      "carrier_cd": "_48d",
      "carrier_cd_provider": "SMDG",
      "issuing_party": [
        {
          "name": "Asseco Denmark",
          "address": "Henrik",
          "country": "The Netherlands",
          "contact_nm": "Henrik",
          "contact_type": "Phone",
          "contact_details": "string",
          "identifying_code": "MSK",
          "code_provider": "SMDG",
          "code_name": "LCL",
          "tax_ref_type": "PAN",
          "tax_country_cd": "DK",
          "tax_ref": "AAAAA0000A"
        }
      ],
      "carrier_clause": "It is not allowed to…",
      "transports": [
        {
          "planned_arrival_date": "2024-02-29",
          "planned_departure_date": "2024-02-29",
          "pre_carriage": "RAIL",
          "on_carriage": "RAIL",
          "receipt_location_nm": "Port of Amsterdam",
          "receipt_location_type": "FACI",
          "receipt_unlocation_cd": "FRPAR",
          "receipt_facility_cd": "ADT",
          "receipt_facility_cd_provider": "SMDG",
          "pol_location_nm": "Port of Amsterdam",
          "pol_location_type": "UNLO",
          "pol_unlocation_cd": "FRPAR",
          "delivery_location_nm": "Port of Amsterdam",
          "delivery_location_type": "FACI",
          "delivery_unlocation_cd": "FRPAR",
          "delivery_facility_cd": "ADT",
          "delivery_facility_cd_provider": "SMDG",
          "pod_location_nm": "Port of Amsterdam",
          "pod_location_type": "UNLO",
          "pod_unlocation_cd": "FRPAR",
          "routing_location_nm": "Port of Amsterdam",
          "routing_location_type": "FACI",
          "routing_unlocation_cd": "FRPAR",
          "routing_facility_cd": "ADT",
          "routing_facility_cd_provider": "SMDG",
          "vessel_nm": "King of the Seas",
          "voy_no": "2103S",
          "universal_voy_no": "2103N"
        }
      ],
      "charges": [
        {
          "name": "Documentation fee - Destination",
          "currency_amount": 1012.12,
          "currency_cd": "DKK",
          "payment_term": "PRE",
          "calculation_basis": "Per day",
          "unit_price": 3456.6,
          "quantity": 34.4
        }
      ],
      "issue_place": [
        {
          "location_nm": "Port of Amsterdam",
          "location_type": "UNLO",
          "unlocation_cd": "FRPAR"
        }
      ],
      "invoice_payable_at": [
        {
          "location_nm": "Port of Amsterdam",
          "location_type": "UNLO",
          "unlocation_cd": "FRPAR"
        },
        {
          "location_type": "UNLO",
          "unlocation_cd": "FRPAR"
        }
      ],
      "contact_details": [
        {
          "contact_nm": "Henrik",
          "contact_type": "Phone",
          "contact_value": "string"
        },
        {
          "contact_nm": "Henrik 2",
          "contact_type": "Phone",
          "contact_value": "string"
        }
      ],
      "consignment": [
        {
          "booking_ref": "ABC709951",
          "weight": 13000.3,
          "weight_unit": "KGM",
          "volume": 12,
          "volume_unit": "MTQ",
          "goods_description": "300 boxes of blue shoes size 47",
          "hscode": [
            "851713",
            "851713"
          ],
          "references": [
            {
              "type": "FF",
              "value": "HHL00103004"
            }
          ],
          "custom_references": [
            {
              "type": "ACID",
              "country_cd": "DK",
              "value": "4988470982020120000"
            }
          ],
          "cargo_items": [
            {
              "shipping_marks": "Made in China",
              "equipment_ref": "APZU4812090",
              "weight": 13000.3,
              "weight_unit": "KGM",
              "volume": 12,
              "volume_unit": "MTQ",
              "outer_packaging": [
                {
                  "package_cd": "5H",
                  "package_no": 18,
                  "description": "Drum, steel",
                  "imo_packaging_cd": "1A2",
                  "dangerous_goods": [
                    {
                      "code_variant_list": "2200",
                      "proper_shipping_nm": "Chromium Trioxide, anhydrous",
                      "technical_nm": "string",
                      "imo_class": "1.4S",
                      "subsidiary_risk1": "1.2",
                      "subsidiary_risk2": "1.2",
                      "is_marine_pollutant": false,
                      "packing_group": 3,
                      "is_limited_quantity": false,
                      "is_excepted_quantity": false,
                      "is_salvage_packings": false,
                      "is_empty_uncleaned_residue": false,
                      "is_waste": false,
                      "is_hot": false,
                      "is_competent_authority_approval_provided": false,
                      "competent_authority_approval": "{Name and reference...}",
                      "segregation_groups": [
                        "12"
                      ],
                      "inner_packaging": [
                        {
                          "quantity": 0,
                          "material": "20",
                          "description": "Plastic"
                        }
                      ],
                      "emergency_contact": [
                        {
                          "contact": "string",
                          "provider": "string",
                          "phone": "+45 70262970",
                          "ref_no": "12234"
                        }
                      ],
                      "ems_no": "F-A S-Q",
                      "end_of_holding_time": "2021-09-03",
                      "fumigation_dt": "2021-09-03T09:03:00-02:00",
                      "is_reportable_quantity": false,
                      "inhalation_zone": "A",
                      "gross_weight": [
                        {
                          "value": 12000,
                          "unit": "KGM"
                        }
                      ],
                      "net_weight": [
                        {
                          "value": 12000,
                          "unit": "KGM"
                        }
                      ],
                      "net_explosive_content": [
                        {
                          "value": 12000,
                          "unit": "KGM"
                        }
                      ],
                      "volume": [
                        {
                          "value": 2.4,
                          "unit": "MTQ"
                        }
                      ],
                      "limits": [
                        {
                          "temperature_unit": "CEL",
                          "flash_point": 42,
                          "transport_control_temperature": 24.1,
                          "transport_emergency_temperature": 74.1,
                          "sadt": 54.1,
                          "sapt": 70
                        }
                      ],
                      "reference_standard_type": "UN Number",
                      "reference_number": "1463"
                    }
                  ]
                }
              ],
              "customs_references": [
                {
                  "type": "ACID",
                  "country_cd": "DK",
                  "value": "4988470982020120000 CUSTOMS 1"
                },
                {
                  "type": "ACID",
                  "country_cd": "DK",
                  "value": "4988470982020120000 CUSTOMS 2"
                }
              ]
            }
          ]
        }
      ],
      "utilized_transport_equipment": [
        {
          "equipment": [
            {
              "equipment_ref": "APZU4812090",
              "iso_equipment_cd": "22GP",
              "tare_weight": 4800,
              "weight_unit": "KGM"
            }
          ],
          "cargo_gross_weight": 12000,
          "cargo_gross_weight_unit": "KGM",
          "cargo_gross_volume": 120,
          "cargo_gross_volume_unit": "MTQ",
          "is_shipper_owned": true,
          "is_non_operating_reefer": true,
          "active_reefer": [
            {
              "temperature_setpoint": -15,
              "temperature_unit": "CEL",
              "o2_setpoint": 75.3,
              "co2_setpoint": 25,
              "humidity_setpoint": 95.6,
              "air_exchange_setpoint": 15.4,
              "air_exchange_unit": "MTQ",
              "is_ventilation_open": true,
              "is_drain_holes_open": true,
              "is_bulb_mode": true,
              "is_cold_treatment_required": true,
              "is_controlled_atmosphere_required": true
            }
          ],
          "seals": [
            {
              "seal_number": "string",
              "seal_source": "CUS",
              "seal_type": "WIR"
            }
          ],
          "references": [
            {
              "type": "FF",
              "value": "HHL00103004"
            }
          ],
          "customs_references": [
            {
              "type": "ACID",
              "country_cd": "DK",
              "value": "4988470982020120000"
            }
          ]
        }
      ],
      "references": [
        {
          "type": "FF",
          "value": "HHL00103004"
        }
      ],
      "customs_references": [
        {
          "type": "ACID",
          "country_cd": "DK",
          "value": "4988470982020120000"
        }
      ],
      "document_party": [
        {
          "party": [
            {
              "name": "Asseco Denmark",
              "address": "Henrik",
              "address_country": "The Netherlands",
              "contact_nm": "Henrik",
              "contact_type": "Phone",
              "contact_value": "string",
              "identifying_code": [
                {
                  "party_cd": "MSK",
                  "code_provider": "SMDG",
                  "code_name": "LCL"
                }
              ],
              "tax_ref": [
                {
                  "type": "PAN",
                  "country_code": "DK",
                  "value": "AAAAA0000A"
                }
              ]
            }
          ],
          "party_function": "DDS",
          "displayed_address": [
            "string"
          ],
          "notified": true
        }
      ]
    },
    {
      "bol_ref": "ibI.4YnwqOfRe5@ZR1[&",
      "shipping_ref": "+q<9$nO3|c.~oCO`<\\'c,nDj3dt9(#!A-8W>1/yd2!L|mC!Gcwr1\\Vy0v?+h1e+                                     ",
      "status": "string",
      "shipped_onboard": true,
      "freight_payment_cd": "PRE",
      "origin_charges_cd": "PRE",
      "destination_charges_cd": "PRE",
      "to_order": true,
      "place_of_receipt": [
        "string1"
      ],
      "port_of_load": [
        "string1",
        "string2"
      ],
      "port_of_discharge": [
        "string1"
      ],
      "place_of_delivery": [
        "string1",
        "string2",
        "string3"
      ],
      "shipped_onboard_date": "2024-02-29",
      "terms_and_conditions": "string",
      "origin_receipt_type": "CY",
      "destination_delivery_type": "CY",
      "origin_cargo_movement_type": "str",
      "destination_cargo_movement_type": "str",
      "issue_date": "2024-02-29",
      "received_shipment_date": "2024-02-29",
      "service_contract_ref": "string",
      "contract_quotation_ref": ")ms2X~1]P                          ",
      "declared_value": 0,
      "declared_currency": "QCE",
      "carrier_cd": "_48d",
      "carrier_cd_provider": "SMDG",
      "issuing_party": [
        {
          "name": "Asseco Denmark",
          "address": "Henrik",
          "country": "The Netherlands",
          "contact_nm": "Henrik",
          "contact_type": "Phone",
          "contact_details": "string",
          "identifying_code": "MSK",
          "code_provider": "SMDG",
          "code_name": "LCL",
          "tax_ref_type": "PAN",
          "tax_country_cd": "DK",
          "tax_ref": "AAAAA0000A"
        }
      ],
      "carrier_clause": "It is not allowed to…",
      "transports": [
        {
          "planned_arrival_date": "2024-02-29",
          "planned_departure_date": "2024-02-29",
          "pre_carriage": "RAIL",
          "on_carriage": "RAIL",
          "receipt_location_nm": "Port of Amsterdam",
          "receipt_location_type": "FACI",
          "receipt_unlocation_cd": "FRPAR",
          "receipt_facility_cd": "ADT",
          "receipt_facility_cd_provider": "SMDG",
          "pol_location_nm": "Port of Amsterdam",
          "pol_location_type": "UNLO",
          "pol_unlocation_cd": "FRPAR",
          "delivery_location_nm": "Port of Amsterdam",
          "delivery_location_type": "FACI",
          "delivery_unlocation_cd": "FRPAR",
          "delivery_facility_cd": "ADT",
          "delivery_facility_cd_provider": "SMDG",
          "pod_location_nm": "Port of Amsterdam",
          "pod_location_type": "UNLO",
          "pod_unlocation_cd": "FRPAR",
          "routing_location_nm": "Port of Amsterdam",
          "routing_location_type": "FACI",
          "routing_unlocation_cd": "FRPAR",
          "routing_facility_cd": "ADT",
          "routing_facility_cd_provider": "SMDG",
          "vessel_nm": "King of the Seas",
          "voy_no": "2103S",
          "universal_voy_no": "2103N"
        }
      ],
      "charges": [
        {
          "name": "Documentation fee - Destination",
          "currency_amount": 1012.12,
          "currency_cd": "DKK",
          "payment_term": "PRE",
          "calculation_basis": "Per day",
          "unit_price": 3456.6,
          "quantity": 34.4
        }
      ],
      "issue_place": [
        {
          "location_nm": "Port of Amsterdam",
          "location_type": "UNLO",
          "unlocation_cd": "FRPAR"
        }
      ],
      "invoice_payable_at": [
        {
          "location_nm": "Port of Amsterdam",
          "location_type": "UNLO",
          "unlocation_cd": "FRPAR"
        },
        {
          "location_type": "UNLO",
          "unlocation_cd": "FRPAR"
        }
      ],
      "contact_details": [
        {
          "contact_nm": "Henrik",
          "contact_type": "Phone",
          "contact_value": "string"
        },
        {
          "contact_nm": "Henrik 2",
          "contact_type": "Phone",
          "contact_value": "string"
        }
      ],
      "consignment": [
        {
          "booking_ref": "ABC709951",
          "weight": 13000.3,
          "weight_unit": "KGM",
          "volume": 12,
          "volume_unit": "MTQ",
          "goods_description": "300 boxes of blue shoes size 47",
          "hscode": [
            "851713",
            "851713"
          ],
          "references": [
            {
              "type": "FF",
              "value": "HHL00103004"
            }
          ],
          "custom_references": [
            {
              "type": "ACID",
              "country_cd": "DK",
              "value": "4988470982020120000"
            }
          ],
          "cargo_items": [
            {
              "shipping_marks": "Made in China",
              "equipment_ref": "APZU4812090",
              "weight": 13000.3,
              "weight_unit": "KGM",
              "volume": 12,
              "volume_unit": "MTQ",
              "outer_packaging": [
                {
                  "package_cd": "5H",
                  "package_no": 18,
                  "description": "Drum, steel",
                  "imo_packaging_cd": "1A2",
                  "dangerous_goods": [
                    {
                      "code_variant_list": "2200",
                      "proper_shipping_nm": "Chromium Trioxide, anhydrous",
                      "technical_nm": "string",
                      "imo_class": "1.4S",
                      "subsidiary_risk1": "1.2",
                      "subsidiary_risk2": "1.2",
                      "is_marine_pollutant": false,
                      "packing_group": 3,
                      "is_limited_quantity": false,
                      "is_excepted_quantity": false,
                      "is_salvage_packings": false,
                      "is_empty_uncleaned_residue": false,
                      "is_waste": false,
                      "is_hot": false,
                      "is_competent_authority_approval_provided": false,
                      "competent_authority_approval": "{Name and reference...}",
                      "segregation_groups": [
                        "12"
                      ],
                      "inner_packaging": [
                        {
                          "quantity": 0,
                          "material": "20",
                          "description": "Plastic"
                        }
                      ],
                      "emergency_contact": [
                        {
                          "contact": "string",
                          "provider": "string",
                          "phone": "+45 70262970",
                          "ref_no": "12234"
                        }
                      ],
                      "ems_no": "F-A S-Q",
                      "end_of_holding_time": "2021-09-03",
                      "fumigation_dt": "2021-09-03T09:03:00-02:00",
                      "is_reportable_quantity": false,
                      "inhalation_zone": "A",
                      "gross_weight": [
                        {
                          "value": 12000,
                          "unit": "KGM"
                        }
                      ],
                      "net_weight": [
                        {
                          "value": 12000,
                          "unit": "KGM"
                        }
                      ],
                      "net_explosive_content": [
                        {
                          "value": 12000,
                          "unit": "KGM"
                        }
                      ],
                      "volume": [
                        {
                          "value": 2.4,
                          "unit": "MTQ"
                        }
                      ],
                      "limits": [
                        {
                          "temperature_unit": "CEL",
                          "flash_point": 42,
                          "transport_control_temperature": 24.1,
                          "transport_emergency_temperature": 74.1,
                          "sadt": 54.1,
                          "sapt": 70
                        }
                      ],
                      "reference_standard_type": "UN Number",
                      "reference_number": "1463"
                    }
                  ]
                }
              ],
              "customs_references": [
                {
                  "type": "ACID",
                  "country_cd": "DK",
                  "value": "4988470982020120000 CUSTOMS 1"
                },
                {
                  "type": "ACID",
                  "country_cd": "DK",
                  "value": "4988470982020120000 CUSTOMS 2"
                }
              ]
            }
          ]
        }
      ],
      "utilized_transport_equipment": [
        {
          "equipment": [
            {
              "equipment_ref": "APZU4812090",
              "iso_equipment_cd": "22GP",
              "tare_weight": 4800,
              "weight_unit": "KGM"
            }
          ],
          "cargo_gross_weight": 12000,
          "cargo_gross_weight_unit": "KGM",
          "cargo_gross_volume": 120,
          "cargo_gross_volume_unit": "MTQ",
          "is_shipper_owned": true,
          "is_non_operating_reefer": true,
          "active_reefer": [
            {
              "temperature_setpoint": -15,
              "temperature_unit": "CEL",
              "o2_setpoint": 75.3,
              "co2_setpoint": 25,
              "humidity_setpoint": 95.6,
              "air_exchange_setpoint": 15.4,
              "air_exchange_unit": "MTQ",
              "is_ventilation_open": true,
              "is_drain_holes_open": true,
              "is_bulb_mode": true,
              "is_cold_treatment_required": true,
              "is_controlled_atmosphere_required": true
            }
          ],
          "seals": [
            {
              "seal_number": "string",
              "seal_source": "CUS",
              "seal_type": "WIR"
            }
          ],
          "references": [
            {
              "type": "FF",
              "value": "HHL00103004"
            }
          ],
          "customs_references": [
            {
              "type": "ACID",
              "country_cd": "DK",
              "value": "4988470982020120000"
            }
          ]
        }
      ],
      "references": [
        {
          "type": "FF",
          "value": "HHL00103004"
        }
      ],
      "customs_references": [
        {
          "type": "ACID",
          "country_cd": "DK",
          "value": "4988470982020120000"
        }
      ],
      "document_party": [
        {
          "party": [
            {
              "name": "Asseco Denmark",
              "address": "Henrik",
              "address_country": "The Netherlands",
              "contact_nm": "Henrik",
              "contact_type": "Phone",
              "contact_value": "string",
              "identifying_code": [
                {
                  "party_cd": "MSK",
                  "code_provider": "SMDG",
                  "code_name": "LCL"
                }
              ],
              "tax_ref": [
                {
                  "type": "PAN",
                  "country_code": "DK",
                  "value": "AAAAA0000A"
                }
              ]
            }
          ],
          "party_function": "DDS",
          "displayed_address": [
            "string"
          ],
          "notified": true
        }
      ]
    }
  ],
  "dcsa_ebl_issue_to": [
    {
      "platform_nm": "BOLE",
      "legal_nm": "Digital Container Shipping Association",
      "registration_no": "74567837",
      "registration_loc": "NL",
      "tax_ref": "NL859951480B01",
      "party_codes": [
        {
          "party_code": "529900T8BM49AURSDO55",
          "code_provider": "EPUI",
          "code_name": "Bolero 1"
        },
        {
          "party_code": "529900T8BM49AURSDO55",
          "code_provider": "EPUI",
          "code_name": "Bolero 2"
        }
      ]
    },
    {
      "platform_nm": "BOLA",
      "legal_nm": "Digital Container Shipping Association",
      "registration_no": "74567837",
      "registration_loc": "NL",
      "tax_ref": "NL859951480B01",
      "party_codes": [
        {
          "party_code": "529900T8BM49AURSDO55",
          "code_provider": "EPUI",
          "code_name": "Bolera 1"
        },
        {
          "party_code": "529900T8BM49AURSDO55",
          "code_provider": "EPUI",
          "code_name": "Bolera 2"
        }
      ]
    }
  ],
  "dcsa_ebl_jurisdiction": "string",
  "dcsa_ebl_seat": "string",
  "attachments": [
    {
      "filename": "string",
      "file_content": "string",
      "data": "string",
      "type": "string"
    }
  ]
}