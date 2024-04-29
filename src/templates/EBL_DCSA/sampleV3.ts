import { v3 } from "@tradetrust-tt/tradetrust";
import { EBL_DCSASchemaV3 } from "./types";

export const EBL_DCSASampleV3: EBL_DCSASchemaV3 = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
    "https://schemata.openattestation.com/io/tradetrust/bill-of-lading/1.0/bill-of-lading-context.json",
  ],
  type: ["VerifiableCredential", "OpenAttestationCredential"],
  issuanceDate: "2010-01-01T19:23:24Z",
  issuer: {
    id: "https://example.com",
    name: "DEMO TOKEN REGISTRY",
  },
  openAttestationMetadata: {
    template: {
      type: v3.TemplateType.EmbeddedRenderer,
      name: "EBL_DCSA",
      "url": "https://master.dzfel3p4uihte.amplifyapp.com"
    },
    proof: {
      type: v3.ProofType.OpenAttestationProofMethod,
      method: v3.Method.TokenRegistry,
      value: "0x72d9a82203Ef9177239A5E3cB7A8FB9a78D04f17",
    },
    identityProof: {
      type: v3.IdentityProofType.DNSTxt,
      identifier: "demo-tradetrust.openattestation.com",
    },
  },
  credentialSubject: {
    "dcsa_ebl_document": [
      {
        "bol_ref": "SINSGP1234567890",
        "shipping_ref": "REF2024042101",
        "status": "ISSUED",
        "shipped_onboard": true,
        "freight_payment_cd": "PRE",
        "origin_charges_cd": "PRE",
        "destination_charges_cd": "COL",
        "to_order": true,
        "place_of_receipt": ["Singapore Port"],
        "port_of_load": ["Singapore Port"],
        "port_of_discharge": ["Rotterdam Port"],
        "place_of_delivery": ["Antwerp"],
        "shipped_onboard_date": "2024-04-30",
        "terms_and_conditions": "All goods are transported under the standard shipping terms and conditions...",
        "origin_receipt_type": "CY",
        "destination_delivery_type": "CY",
        "origin_cargo_movement_type": "FCL",
        "destination_cargo_movement_type": "FCL",
        "issue_date": "2024-04-21",
        "received_shipment_date": "2024-04-20",
        "service_contract_ref": "SC2024SGPNL",
        "contract_quotation_ref": "CQR2024SGPNL001",
        "declared_value": 50000,
        "declared_currency": "USD",
        "carrier_cd": "MAEU",
        "carrier_cd_provider": "SMDG",
        "issuing_party": [
          {
            "name": "Maersk Line",
            "address": "50 Esplanaden, Copenhagen 1263, Denmark",
            "country": "DK",
            "contact_nm": "John Doe",
            "contact_type": "Phone",
            "contact_details": "+45 3363 3363",
            "identifying_code": "MAEU",
            "code_provider": "SMDG",
            "code_name": "LCL",
            "tax_ref_type": "GSTIN",
            "tax_country_cd": "DK",
            "tax_ref": "DK99999999"
          }
        ],
        "carrier_clause": "Lithium batteries are forbidden for transport.",
        "transports": [
          {
            "planned_arrival_date": "2024-05-10",
            "planned_departure_date": "2024-04-30",
            "pre_carriage": "TRUCK",
            "on_carriage": "TRUCK",
            "receipt_location_nm": "Singapore Warehouse #5",
            "receipt_location_type": "FACI",
            "receipt_unlocation_cd": "SGSIN",
            "receipt_facility_cd": "SGW5",
            "receipt_facility_cd_provider": "SMDG",
            "pol_location_nm": "Singapore Port",
            "pol_location_type": "PORT",
            "pol_unlocation_cd": "SGSIN",
            "delivery_location_nm": "Rotterdam Warehouse #2",
            "delivery_location_type": "FACI",
            "delivery_unlocation_cd": "NLRTM",
            "delivery_facility_cd": "NLW2",
            "delivery_facility_cd_provider": "SMDG",
            "pod_location_nm": "Rotterdam Port",
            "pod_location_type": "PORT",
            "pod_unlocation_cd": "NLRTM",
            "routing_location_nm": "Via Suez Canal",
            "routing_location_type": "ROUTE",
            "routing_unlocation_cd": "EGSUZ",
            "routing_facility_cd": "ROUTE",
            "routing_facility_cd_provider": "SMDG",
            "vessel_nm": "Maersk Edinburgh",
            "voy_no": "ME1234N",
            "universal_voy_no": "2103N"
          }
        ],
        "charges": [
          {
            "name": "Freight Charge",
            "currency_amount": 3200.50,
            "currency_cd": "USD",
            "payment_term": "PRE",
            "calculation_basis": "Per Container",
            "unit_price": 1600.25,
            "quantity": 2
          }
        ],
        "issue_place": [
          {
            "location_nm": "Singapore Port",
            "location_type": "PORT",
            "unlocation_cd": "SGSIN"
          }
        ],
        "invoice_payable_at": [
          {
            "location_nm": "Rotterdam Port",
            "location_type": "PORT",
            "unlocation_cd": "NLRTM"
          }
        ],
        "contact_details": [
          {
            "contact_nm": "John Doe",
            "contact_type": "Phone",
            "contact_value": "+45 3363 3363"
          }
        ],
        "consignment": [
          {
            "booking_ref": "SGRT2024042101",
            "weight": 25000,
            "weight_unit": "KGM",
            "volume": 50,
            "volume_unit": "MTQ",
            "goods_description": "Electronics and Machinery",
            "hscode": ["854321"],
            "references": [
              {
                "type": "CUS",
                "value": "CUST2024SG"
              }
            ],
            "custom_references": [
              {
                "type": "EXP",
                "country_cd": "SG",
                "value": "EXP20240421"
              }
            ],
            "cargo_items": [
              {
                "shipping_marks": "Fragile - Handle with Care",
                "equipment_ref": "MRKU2844389",
                "weight": 25000,
                "weight_unit": "KGM",
                "volume": 50,
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
                    "value": "4988470982020120000"
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
                "equipment_ref": "MRKU2844389",
                "iso_equipment_cd": "45G1",
                "tare_weight": 3800,
                "weight_unit": "KGM"
              }
            ],
            "cargo_gross_weight": 28800,
            "cargo_gross_weight_unit": "KGM",
            "cargo_gross_volume": 60,
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
                "seal_number": "123456",
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
            "type": "BL",
            "value": "BL20240421SGNL"
          }
        ],
        "customs_references": [
          {
            "type": "IMP",
            "country_cd": "NL",
            "value": "IMP20240422"
          }
        ],
        "document_party": [
          {
            "party": [
              {
                "name": "Global Freight Solutions",
                "address": "1 Fullerton Road, Singapore 049213",
                "address_country": "SG",
                "contact_nm": "Lisa Tan",
                "contact_type": "Email",
                "contact_value": "lisa.tan@gfsolutions.com",
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
            "party_function": "NVO",
            "displayed_address": ["1 Fullerton Road, Singapore 049213"],
            "notified": true
          }
        ]
      }
    ],
    "dcsa_ebl_issue_to": [
      {
        "platform_nm": "TTST",
        "legal_nm": "Digital Container Shipping Association",
        "registration_no": "SG2024TT",
        "registration_loc": "SG",
        "tax_ref": "SG99999999",
        "party_codes": [
          {
            "party_code": "529900T8BM49AURSDO55",
            "code_provider": "GLEIF",
            "code_name": "Legal Entity Identifier"
          }
        ]
      }
    ],
    "dcsa_ebl_jurisdiction": "Singapore",
    "dcsa_ebl_seat": "Singapore",
    "attachments": [
      {
        "filename": "Invoice20240421.pdf",
        "file_content": "base64EncodedString=="
      }
    ]
  },
  attachments: [
    {
      "fileName": "string",
      "data": "string",
      "mimeType": "string"
    }
  ]
};
