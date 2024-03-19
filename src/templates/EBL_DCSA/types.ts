import { v2, v3 } from "@tradetrust-tt/tradetrust";

export type EBL_DCSASchemaV2 = v2.OpenAttestationDocument & EBL_DCSADocument;
export type EBL_DCSASchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: EBL_DCSADocument;
};

export const EBL_DCSAJsonSchmea: any = {
  "title": "DCSA Electronic Bill of Lading",
  "description": "Document issued by a carrier to a shipper that details the type, quantity, and destination of the goods being carried in DCSA standard",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "dcsa_ebl_document": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "bol_ref": {
            "type": "string",
            "pattern": "^\\S+(\\s+\\S+)*$",
            "maxLength": 20,
            "description": "<root><div><label>description</label>:<b>A unique number allocated by the shipping line to the transport document and the main number used for the tracking of the status of the shipment.</b></div><div><label>businessTerm</label>:<b>Bill of Lading Reference Number</b></div><div><label>businessDefinition</label>:<b>A unique number allocated by the shipping line to the transport document and the main number used for the tracking of the status of the shipment.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 20 \\nexample: HHL71800000</b></div></root>",
            "title": "Bill of Lading Reference Number",
            "minLength": 1
          },
          "shipping_ref": {
            "type": [
              "string",
              "null"
            ],
            "pattern": "^\\S+(\\s+\\S+)*$",
            "maxLength": 100,
            "description": "<root><div><label>description</label>:<b>The identifier for a Shipping Istructions provided by the carrier for system purposes.</b></div><div><label>businessTerm</label>:<b>Shipping Instructions Reference</b></div><div><label>businessDefinition</label>:<b>The identifier for a Shipping Istructions provided by the carrier for system purposes.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: e0559d83-00e2-438e-afd9-fdd610c1a008</b></div></root>",
            "title": "Shipping Instructions Reference"
          },
          "status": {
            "type": "string",
            "maxLength": 50,
            "description": "<root><div><label>description</label>:<b>The status of the Transport Document. Possible values are: DRAFT, APPROVED, ISSUED, PENDING SURRENDER FOR AMENDMENT, SURRENDER FOR AMENDMENT, PENDING SURRENDER FOR DELIVERY, SURRENDER FOR DELIVERY, VOIDED</b></div><div><label>businessTerm</label>:<b>Document Status</b></div><div><label>businessDefinition</label>:<b>The status of the Transport Document. Possible values are: DRAFT, APPROVED, ISSUED, PENDING SURRENDER FOR AMENDMENT, SURRENDER FOR AMENDMENT, PENDING SURRENDER FOR DELIVERY, SURRENDER FOR DELIVERY, VOIDED</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 50 \\nexample: DRAFT</b></div></root>",
            "title": "Document Status",
            "minLength": 1
          },
          "shipped_onboard": {
            "type": "boolean",
            "description": "<root><div><label>description</label>:<b>Specifies whether the Transport document is a received for shipment, or shipped on board.</b></div><div><label>businessTerm</label>:<b>Is Shipped Onboard Type</b></div><div><label>businessDefinition</label>:<b>Specifies whether the Transport document is a received for shipment, or shipped on board.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: true</b></div></root>",
            "title": "Is Shipped Onboard Type"
          },
          "freight_payment_cd": {
            "type": "string",
            "enum": [
              "PRE",
              "COL"
            ],
            "description": "<root><div><label>description</label>:<b>An indicator of whether freight and ancillary fees for the main transport are prepaid (PRE) or collect (COL). When prepaid the charges are the responsibility of the shipper or the Invoice payer on behalf of the shipper (if provided). When collect, the charges are the responsibility of the consignee or the Invoice payer on behalf of the consignee (if provided). Possible values are: PRE (Prepaid), COL (Collect).</b></div><div><label>businessTerm</label>:<b>Freight Payment Term Code</b></div><div><label>businessDefinition</label>:<b>An indicator of whether freight and ancillary fees for the main transport are prepaid (PRE) or collect (COL). When prepaid the charges are the responsibility of the shipper or the Invoice payer on behalf of the shipper (if provided). When collect, the charges are the responsibility of the consignee or the Invoice payer on behalf of the consignee (if provided). Possible values are: PRE (Prepaid), COL (Collect).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: PRE \\nENUM: [ PRE, COL ]</b></div></root>",
            "title": "Freight Payment Term Code",
            "minLength": 1
          },
          "origin_charges_cd": {
            "type": [
              "string",
              "null"
            ],
            "enum": [
              "PRE",
              "COL"
            ],
            "description": "<root><div><label>description</label>:<b>An indicator of whether origin charges are prepaid (PRE) or collect (COL). When prepaid, the charges are the responsibility of the shipper or the Invoice payer on behalf of the shipper (if provided). When collect, the charges are the responsibility of the consignee or the Invoice payer on behalf of the consignee (if provided). Examples of origin charges are customs clearance fees, documentation fees, container packing and loading charges levied at the port of origin to cover the costs of preparing the cargo for shipment. They include the cost of inland transportation to the port, when applicable. Possible values are: PRE (Prepaid), COL (Collect).</b></div><div><label>businessTerm</label>:<b>Origin Charges Payment Term Code</b></div><div><label>businessDefinition</label>:<b>An indicator of whether origin charges are prepaid (PRE) or collect (COL). When prepaid, the charges are the responsibility of the shipper or the Invoice payer on behalf of the shipper (if provided). When collect, the charges are the responsibility of the consignee or the Invoice payer on behalf of the consignee (if provided). Examples of origin charges are customs clearance fees, documentation fees, container packing and loading charges levied at the port of origin to cover the costs of preparing the cargo for shipment. They include the cost of inland transportation to the port, when applicable. Possible values are: PRE (Prepaid), COL (Collect).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: PRE \\nENUM: [ PRE, COL ]</b></div></root>",
            "title": "Origin Charges Payment Term Code"
          },
          "destination_charges_cd": {
            "type": [
              "string",
              "null"
            ],
            "enum": [
              "PRE",
              "COL"
            ],
            "description": "<root><div><label>description</label>:<b>An indicator of whether destination charges are prepaid (PRE) or collect (COL). When prepaid, the charges are the responsibility of the shipper or the Invoice payer on behalf of the shipper (if provided). When collect, the charges are the responsibility of the consignee or the Invoice payer on behalf of the consignee (if provided). Examples of destination charges are customs clearance fees, documentation fees, terminal handling fees at the destination port and the costs of inland transportation from the port to the final delivery location, when applicable. Possible values are: PRE (Prepaid), COL (Collect).</b></div><div><label>businessTerm</label>:<b>Destination Charges Payment Term Code</b></div><div><label>businessDefinition</label>:<b>An indicator of whether destination charges are prepaid (PRE) or collect (COL). When prepaid, the charges are the responsibility of the shipper or the Invoice payer on behalf of the shipper (if provided). When collect, the charges are the responsibility of the consignee or the Invoice payer on behalf of the consignee (if provided). Examples of destination charges are customs clearance fees, documentation fees, terminal handling fees at the destination port and the costs of inland transportation from the port to the final delivery location, when applicable. Possible values are: PRE (Prepaid), COL (Collect).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: PRE \\nENUM: [ PRE, COL ]</b></div></root>",
            "title": "Destination Charges Payment Term Code"
          },
          "to_order": {
            "type": "boolean",
            "description": "<root><div><label>description</label>:<b>Indicates whether the B/L is issued to order or not. If true, the B/L is considered negotiable and an Endorsee party can be defined in the Document parties. If no Endorsee is defined, the B/L is blank endorsed. If false, the B/L is considered non-negotiable (also referred to as straight).</b></div><div><label>businessTerm</label>:<b>Is To Order</b></div><div><label>businessDefinition</label>:<b>Indicates whether the B/L is issued to order or not. If true, the B/L is considered negotiable and an Endorsee party can be defined in the Document parties. If no Endorsee is defined, the B/L is blank endorsed. If false, the B/L is considered non-negotiable (also referred to as straight).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: true</b></div></root>",
            "title": "Is To Order"
          },
          "place_of_receipt": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": [
                "string",
                "null"
              ]
            },
            "maxItems": 5,
            "description": "<root><div><label>description</label>:<b>The name to be used in order to specify how the Place of Receipt should be displayed on the transport document to match the name and/or address provided on the letter of credit. \\n \\nA line of the address to be displayed on the transport document.</b></div><div><label>businessTerm</label>:<b>Place of Receipt</b></div><div><label>businessDefinition</label>:<b>The name to be used in order to specify how the Place of Receipt should be displayed on the transport document to match the name and/or address provided on the letter of credit. \\n \\nA line of the address to be displayed on the transport document.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minItems: 1 \\nmaxItems: 5</b></div></root>",
            "title": "Place of Receipt"
          },
          "port_of_load": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": [
                "string",
                "null"
              ]
            },
            "maxItems": 5,
            "description": "<root><div><label>description</label>:<b>The name to be used in order to specify how the Port of Load should be displayed on the transport document to match the name and/or address provided on the letter of credit \\n \\nA line of the address to be displayed on the transport document.</b></div><div><label>businessTerm</label>:<b>Port of Load</b></div><div><label>businessDefinition</label>:<b>The name to be used in order to specify how the Port of Load should be displayed on the transport document to match the name and/or address provided on the letter of credit \\n \\nA line of the address to be displayed on the transport document.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minItems: 1 \\nmaxItems: 5</b></div></root>",
            "title": "Port of Load"
          },
          "port_of_discharge": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": [
                "string",
                "null"
              ]
            },
            "maxItems": 5,
            "description": "<root><div><label>description</label>:<b>The name to be used in order to specify how the Port of Discharge should be displayed on the transport document to match the name and/or address provided on the letter of credit. \\n \\nA line of the address to be displayed on the transport document.</b></div><div><label>businessTerm</label>:<b>Port of Discharge</b></div><div><label>businessDefinition</label>:<b>The name to be used in order to specify how the Port of Discharge should be displayed on the transport document to match the name and/or address provided on the letter of credit. \\n \\nA line of the address to be displayed on the transport document.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minItems: 1 \\nmaxItems: 5</b></div></root>",
            "title": "Port of Discharge"
          },
          "place_of_delivery": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": [
                "string",
                "null"
              ]
            },
            "maxItems": 5,
            "description": "<root><div><label>description</label>:<b>The name to be used in order to specify how the Place of Delivery should be displayed on the transport document to match the name and/or address provided on the letter of credit. \\n \\nA line of the address to be displayed on the transport document.</b></div><div><label>businessTerm</label>:<b>Place of Delivery</b></div><div><label>businessDefinition</label>:<b>The name to be used in order to specify how the Place of Delivery should be displayed on the transport document to match the name and/or address provided on the letter of credit. \\n \\nA line of the address to be displayed on the transport document.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minItems: 1 \\nmaxItems: 5</b></div></root>",
            "title": "Place of Delivery"
          },
          "shipped_onboard_date": {
            "type": [
              "string",
              "null"
            ],
            "format": "date",
            "description": "<root><div><label>description</label>:<b>Date when the last container that is linked to the transport document is physically loaded onboard the vessel indicated on the transport document. \\n \\nWhen provided on a transport document, the transportDocument is a Shipped On Board B/L. Exactly one of shippedOnBoard and receiveForShipmentDate must be provided on an issued B/L.</b></div><div><label>businessTerm</label>:<b>Shipped Onboard Date</b></div><div><label>businessDefinition</label>:<b>Date when the last container that is linked to the transport document is physically loaded onboard the vessel indicated on the transport document. \\n \\nWhen provided on a transport document, the transportDocument is a Shipped On Board B/L. Exactly one of shippedOnBoard and receiveForShipmentDate must be provided on an issued B/L.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 2020-12-12</b></div></root>",
            "title": "Shipped Onboard Date"
          },
          "terms_and_conditions": {
            "type": "string",
            "maxLength": 50000,
            "description": "<root><div><label>description</label>:<b>Carrier terms and conditions of transport.</b></div><div><label>businessTerm</label>:<b>Terms and Conditions</b></div><div><label>businessDefinition</label>:<b>Carrier terms and conditions of transport.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 50000</b></div></root>",
            "title": "Terms and Conditions",
            "minLength": 1
          },
          "origin_receipt_type": {
            "type": "string",
            "enum": [
              "CY",
              "SD",
              "CFS"
            ],
            "maxLength": 3,
            "description": "<root><div><label>description</label>:<b>Indicates the type of service offered at Origin. Options are defined in the Receipt/Delivery entity. Possible values are: CY (Container yard (incl. rail ramp)), SD (Store Door), CFS (Container Freight Station)</b></div><div><label>businessTerm</label>:<b>Receipt Type at Origin</b></div><div><label>businessDefinition</label>:<b>Indicates the type of service offered at Origin. Options are defined in the Receipt/Delivery entity. Possible values are: CY (Container yard (incl. rail ramp)), SD (Store Door), CFS (Container Freight Station)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 3 \\nexample: CY \\nEnum: [ CY, SD, CFS ]</b></div></root>",
            "title": "Receipt Type at Origin",
            "minLength": 1
          },
          "destination_delivery_type": {
            "type": "string",
            "enum": [
              "CY",
              "SD",
              "CFS"
            ],
            "maxLength": 3,
            "description": "<root><div><label>description</label>:<b>Indicates the type of service offered at Destination. Options are defined in the Receipt/Delivery entity. Possible values are: CY (Container yard (incl. rail ramp)), SD (Store Door), CFS (Container Freight Station)</b></div><div><label>businessTerm</label>:<b>Delivery Type at Destination</b></div><div><label>businessDefinition</label>:<b>Indicates the type of service offered at Destination. Options are defined in the Receipt/Delivery entity. Possible values are: CY (Container yard (incl. rail ramp)), SD (Store Door), CFS (Container Freight Station)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 3 \\nexample: CY \\nEnum: [ CY, SD, CFS ]</b></div></root>",
            "title": "Delivery Type at Destination",
            "minLength": 1
          },
          "origin_cargo_movement_type": {
            "type": "string",
            "maxLength": 3,
            "description": "<root><div><label>description</label>:<b>Refers to the shipment term at the loading of the cargo into the container. Options are defined in the Cargo Movement Type entity. Possible values are: FCL (Full Container Load), LCL (Less than Container Load)</b></div><div><label>businessTerm</label>:<b>Cargo Movement Type at Origin</b></div><div><label>businessDefinition</label>:<b>Refers to the shipment term at the loading of the cargo into the container. Options are defined in the Cargo Movement Type entity. Possible values are: FCL (Full Container Load), LCL (Less than Container Load)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 3 \\nexample: FCL</b></div></root>",
            "title": "Cargo Movement Type at Origin",
            "minLength": 1
          },
          "destination_cargo_movement_type": {
            "type": "string",
            "maxLength": 3,
            "description": "<root><div><label>description</label>:<b>Refers to the shipment term at the unloading of the cargo out of the container. Options are defined in the Cargo Movement Type entity. Possible values are: FCL (Full Container Load), LCL (Less than Container Load)</b></div><div><label>businessTerm</label>:<b>Cargo Movement Type at Destination</b></div><div><label>businessDefinition</label>:<b>Refers to the shipment term at the unloading of the cargo out of the container. Options are defined in the Cargo Movement Type entity. Possible values are: FCL (Full Container Load), LCL (Less than Container Load)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 3 \\nexample: FCL</b></div></root>",
            "title": "Cargo Movement Type at Destination",
            "minLength": 1
          },
          "issue_date": {
            "type": "string",
            "format": "date",
            "description": "<root><div><label>description</label>:<b>Local date when the transport document has been issued.</b></div><div><label>businessTerm</label>:<b>Issue Date</b></div><div><label>businessDefinition</label>:<b>Local date when the transport document has been issued.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 2020-12-12</b></div></root>",
            "title": "Issue Date",
            "minLength": 1
          },
          "received_shipment_date": {
            "type": [
              "string",
              "null"
            ],
            "format": "date",
            "description": "<root><div><label>description</label>:<b>Date when the last container linked to the transport document is physically in the terminal (customers cleared against the intended vessel). When provided on a transport document, the transportDocument is a Received For Shipment B/L. Exactly one of shippedOnBoard and receiveForShipmentDate must be provided on an issued B/L.</b></div><div><label>businessTerm</label>:<b>Received for Shipment Date</b></div><div><label>businessDefinition</label>:<b>Date when the last container linked to the transport document is physically in the terminal (customers cleared against the intended vessel). When provided on a transport document, the transportDocument is a Received For Shipment B/L. Exactly one of shippedOnBoard and receiveForShipmentDate must be provided on an issued B/L.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 2020-12-13</b></div></root>",
            "title": "Received for Shipment Date"
          },
          "service_contract_ref": {
            "type": [
              "string",
              "null"
            ],
            "maxLength": 30,
            "description": "<root><div><label>description</label>:<b>Reference number for agreement between shipper and carrier through which the shipper commits to provide a certain minimum quantity of cargo over a fixed period, and the carrier commits to a certain rate or rate schedule.</b></div><div><label>businessTerm</label>:<b>Service Contract Reference</b></div><div><label>businessDefinition</label>:<b>Reference number for agreement between shipper and carrier through which the shipper commits to provide a certain minimum quantity of cargo over a fixed period, and the carrier commits to a certain rate or rate schedule.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 30 \\nexample: HHL51800000</b></div></root>",
            "title": "Service Contract Reference"
          },
          "contract_quotation_ref": {
            "type": [
              "string",
              "null"
            ],
            "pattern": "^\\S+(\\s+\\S+)*$",
            "maxLength": 35,
            "description": "<root><div><label>description</label>:<b>Information provided by the shipper to identify whether pricing for the shipment has been agreed via a contract or a quotation reference. Mandatory if service contract (owner) is not provided.</b></div><div><label>businessTerm</label>:<b>Contract Quotation Reference</b></div><div><label>businessDefinition</label>:<b>Information provided by the shipper to identify whether pricing for the shipment has been agreed via a contract or a quotation reference. Mandatory if service contract (owner) is not provided.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 35 \\nexample: HHL1401</b></div></root>",
            "title": "Contract Quotation Reference"
          },
          "declared_value": {
            "type": [
              "number",
              "null"
            ],
            "minimum": 0,
            "format": "double",
            "description": "<root><div><label>description</label>:<b>The value of the cargo that the shipper declares to avoid the carrier's limitation of liability and \"\"Ad Valorem\"\" freight, i.e. freight which is calculated based on the value of the goods declared by the shipper.</b></div><div><label>businessTerm</label>:<b>Declared Value</b></div><div><label>businessDefinition</label>:<b>The value of the cargo that the shipper declares to avoid the carrier's limitation of liability and \"\"Ad Valorem\"\" freight, i.e. freight which is calculated based on the value of the goods declared by the shipper.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nexample: 1231.1</b></div></root>",
            "title": "Declared Value"
          },
          "declared_currency": {
            "type": [
              "string",
              "null"
            ],
            "pattern": "^[A-Z]{3}$",
            "maxLength": 3,
            "description": "<root><div><label>description</label>:<b>The currency used for the declared value, using the 3-character code defined by ISO 4217.</b></div><div><label>businessTerm</label>:<b>Declared Value Currency</b></div><div><label>businessDefinition</label>:<b>The currency used for the declared value, using the 3-character code defined by ISO 4217.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{3}$ \\nmaxLength: 3 \\nexample: DKK</b></div></root>",
            "title": "Declared Value Currency"
          },
          "carrier_cd": {
            "type": "string",
            "pattern": "^\\S+$",
            "maxLength": 4,
            "description": "<root><div><label>description</label>:<b>The code containing the SCAC and/or the SMDG code to specify the issuing carrier. Details about the issuer can be given in the Document Parties entity using the party function code MS.</b></div><div><label>businessTerm</label>:<b>Carrier Code</b></div><div><label>businessDefinition</label>:<b>The code containing the SCAC and/or the SMDG code to specify the issuing carrier. Details about the issuer can be given in the Document Parties entity using the party function code MS.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+$ \\nmaxLength: 4 \\nexample: MMCU</b></div></root>",
            "title": "Carrier Code",
            "minLength": 1
          },
          "carrier_cd_provider": {
            "type": "string",
            "enum": [
              "SMDG",
              "NMFTA"
            ],
            "description": "<root><div><label>description</label>:<b>The provider used for identifying the issuer Code. Possible values are: SMDG (Ship Message Design Group), NMFTA (National Motor Freight Traffic Association) includes SPLC (Standard Point Location Code)</b></div><div><label>businessTerm</label>:<b>Carrier Code List Provider</b></div><div><label>businessDefinition</label>:<b>The provider used for identifying the issuer Code. Possible values are: SMDG (Ship Message Design Group), NMFTA (National Motor Freight Traffic Association) includes SPLC (Standard Point Location Code)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: NMFTA \\nEnum: [ SMDG, NMFTA ]</b></div></root>",
            "title": "Carrier Code List Provider",
            "minLength": 1
          },
          "issuing_party": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "name": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Asseco Denmark",
                  "description": "<root><div><label>description</label>:<b>Name of the party.</b></div><div><label>businessTerm</label>:<b>Issuing Party Name</b></div><div><label>businessDefinition</label>:<b>Name of the party.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Asseco Denmark</b></div></root>",
                  "title": "Issuing Party Name",
                  "minLength": 1
                },
                "address": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Henrik",
                  "description": "<root><div><label>description</label>:<b>Name of the address</b></div><div><label>businessTerm</label>:<b>Issuing Party's Address</b></div><div><label>businessDefinition</label>:<b>Name of the address</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Henrik</b></div></root>",
                  "title": "Issuing Party's Address",
                  "minLength": 1
                },
                "country": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 75,
                  "example": "The Netherlands",
                  "description": "<root><div><label>description</label>:<b>The country of the party's address.</b></div><div><label>businessTerm</label>:<b>Issuing Party's Country</b></div><div><label>businessDefinition</label>:<b>The country of the party's address.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 75 \\nexample: The Netherlands</b></div></root>",
                  "title": "Issuing Party's Country",
                  "minLength": 1
                },
                "contact_nm": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Henrik",
                  "description": "<root><div><label>description</label>:<b>Name of the contact</b></div><div><label>businessTerm</label>:<b>Issuing Party Contact Name</b></div><div><label>businessDefinition</label>:<b>Name of the contact</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Henrik</b></div></root>",
                  "title": "Issuing Party Contact Name",
                  "minLength": 1
                },
                "contact_type": {
                  "type": "string",
                  "enum": [
                    "Phone",
                    "Email"
                  ],
                  "example": "Phone",
                  "description": "<root><div><label>description</label>:<b>The contact details of the person to contact. It is mandatory to provide either phone and/or email</b></div><div><label>businessTerm</label>:<b>Issuing Party Contact Type</b></div><div><label>businessDefinition</label>:<b>The contact details of the person to contact. It is mandatory to provide either phone and/or email</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: Phone \\nEnum: [ Phone, Email ]</b></div></root>",
                  "title": "Issuing Party Contact Type",
                  "minLength": 1
                },
                "contact_details": {
                  "type": "string",
                  "description": "<root><div><label>description</label>:<b>Phone number for the contact / Email address to be used</b></div><div><label>businessTerm</label>:<b>Issuing Party Contact Details</b></div><div><label>businessDefinition</label>:<b>Phone number for the contact / Email address to be used</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>For Phone \\npattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 30 \\nexample: +45 70262970 \\nFor Email \\npattern: ^.+@\\S+$ \\nmaxLength: 100 \\nexample: info@dcsa.org</b></div></root>",
                  "title": "Issuing Party Contact Details",
                  "minLength": 1
                },
                "identifying_code": {
                  "type": "string",
                  "maxLength": 100,
                  "example": "MSK",
                  "description": "<root><div><label>description</label>:<b>Code to identify the party as provided by the code list provider</b></div><div><label>businessTerm</label>:<b>Issuing Party Identifying Code</b></div><div><label>businessDefinition</label>:<b>Code to identify the party as provided by the code list provider</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\nexample: MSK</b></div></root>",
                  "title": "Issuing Party Identifying Code",
                  "minLength": 1
                },
                "code_provider": {
                  "type": "string",
                  "maxLength": 5,
                  "example": "SMDG",
                  "description": "<root><div><label>description</label>:<b>A DCSA provided code for UN/CEFACT code list providers: \\n \\n- ISO (International Standards Organization) \\n- UNECE (United Nations Economic Commission for Europe) \\n- LLOYD (Lloyd's register of shipping) \\n- BIC (Bureau International des Containeurs) \\n- IMO (International Maritime Organization) \\n- SCAC (Standard Carrier Alpha Code) \\n- ITIGG (International Transport Implementation Guidelines Group) \\n- ITU (International Telecommunication Union) \\n- SMDG (Shipplanning Message Development Group) \\n- NCBH (NCB Hazcheck) \\n- FMC (Federal Maritime Commission) \\n- CBSA (Canada Border Services Agency) \\n- DCSA (Digitial Container Shipping Association) \\n- W3C (World Wide Web Consortium) \\n- GLEIF (Global Legal Entity Identifier Foundation) \\n- EPI (EBL Platform Identifier) \\n- ZZZ (Mutually defined)</b></div><div><label>businessTerm</label>:<b>Issuing Party Identifying Code List Provider</b></div><div><label>businessDefinition</label>:<b>A DCSA provided code for UN/CEFACT code list providers: \\n \\n- ISO (International Standards Organization) \\n- UNECE (United Nations Economic Commission for Europe) \\n- LLOYD (Lloyd's register of shipping) \\n- BIC (Bureau International des Containeurs) \\n- IMO (International Maritime Organization) \\n- SCAC (Standard Carrier Alpha Code) \\n- ITIGG (International Transport Implementation Guidelines Group) \\n- ITU (International Telecommunication Union) \\n- SMDG (Shipplanning Message Development Group) \\n- NCBH (NCB Hazcheck) \\n- FMC (Federal Maritime Commission) \\n- CBSA (Canada Border Services Agency) \\n- DCSA (Digitial Container Shipping Association) \\n- W3C (World Wide Web Consortium) \\n- GLEIF (Global Legal Entity Identifier Foundation) \\n- EPI (EBL Platform Identifier) \\n- ZZZ (Mutually defined)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 5 \\nexample: SMDG</b></div></root>",
                  "title": "Issuing Party Identifying Code List Provider",
                  "minLength": 1
                },
                "code_name": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "maxLength": 100,
                  "example": "LCL",
                  "description": "<root><div><label>description</label>:<b>The name of the list, provided by the code list provider</b></div><div><label>businessTerm</label>:<b>Issuing Party Identifying Code List Name</b></div><div><label>businessDefinition</label>:<b>The name of the list, provided by the code list provider</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\nexample: LCL</b></div></root>",
                  "title": "Issuing Party Identifying Code List Name"
                },
                "tax_ref_type": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 50,
                  "example": "PAN",
                  "description": "<root><div><label>description</label>:<b>The reference type code as defined by the relevant tax and/or legal authority. \\nA list of examples: \\n \\nType Country Description \\nPAN IN  Goods and Services Tax Identification Number in India \\nGSTIN IN  Goods and Services Tax Identification Number in India \\nIEC IN  Importer-Exported Code in India \\nRUC EC  Registro Único del Contribuyente in Ecuador \\nRUC PE  Registro Único del Contribuyente in Peru \\nNIF  MG  Numéro d’Identification Fiscal in Madagascar \\nNIF  DZ  Numéro d’Identification Fiscal in Algeria \\nAllowed combinations of type and country are maintained in GitHub.</b></div><div><label>businessTerm</label>:<b>Tax and Legal Reference Type</b></div><div><label>businessDefinition</label>:<b>The reference type code as defined by the relevant tax and/or legal authority. \\nA list of examples: \\n \\nType  Country Description \\nPAN IN  Goods and Services Tax Identification Number in India \\nGSTIN IN  Goods and Services Tax Identification Number in India \\nIEC IN  Importer-Exported Code in India \\nRUC EC  Registro Único del Contribuyente in Ecuador \\nRUC PE  Registro Único del Contribuyente in Peru \\nNIF  MG  Numéro d’Identification Fiscal in Madagascar \\nNIF  DZ  Numéro d’Identification Fiscal in Algeria \\nAllowed combinations of type and country are maintained in GitHub.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 50 \\nexample: PAN</b></div></root>",
                  "title": "Tax and Legal Reference Type",
                  "minLength": 1
                },
                "tax_country_cd": {
                  "type": "string",
                  "pattern": "^[A-Z]{2}$",
                  "minLength": 2,
                  "maxLength": 2,
                  "example": "DK",
                  "description": "<root><div><label>description</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>businessTerm</label>:<b>Tax and Legal Reference Country Code</b></div><div><label>businessDefinition</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}$ \\nminLength: 2 \\nmaxLength: 2 \\nexample: DK</b></div></root>",
                  "title": "Tax and Legal Reference Country Code"
                },
                "tax_ref": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "AAAAA0000A",
                  "description": "<root><div><label>description</label>:<b>Reference that uniquely identifies a party for tax and/or legal purposes in accordance with the relevant jurisdiction.</b></div><div><label>businessTerm</label>:<b>Tax and Legal Reference</b></div><div><label>businessDefinition</label>:<b>Reference that uniquely identifies a party for tax and/or legal purposes in accordance with the relevant jurisdiction.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: AAAAA0000A</b></div></root>",
                  "title": "Tax and Legal Reference",
                  "minLength": 1
                }
              },
              "required": [
                "name",
                "address",
                "country",
                "contact_nm",
                "contact_type",
                "contact_details",
                "identifying_code",
                "code_provider",
                "tax_ref_type",
                "tax_country_cd",
                "tax_ref"
              ]
            },
            "description": "<root><div><label>description</label>:<b>Refers to a company or a legal entity.</b></div><div><label>businessTerm</label>:<b>Issuing Party</b></div><div><label>businessDefinition</label>:<b>Refers to a company or a legal entity.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "Issuing Party",
            "minItems": 1
          },
          "carrier_clause": {
            "type": [
              "string",
              "null"
            ],
            "pattern": "^\\S+(\\s+\\S+)*$",
            "maxLength": 20000,
            "example": "It is not allowed to…",
            "description": "<root><div><label>description</label>:<b>Additional clauses for a specific shipment added by the carrier to the Bill of Lading, subject to local rules / guidelines or certain mandatory information required to be shared with the customer.</b></div><div><label>businessTerm</label>:<b>Carrier Clause</b></div><div><label>businessDefinition</label>:<b>Additional clauses for a specific shipment added by the carrier to the Bill of Lading, subject to local rules / guidelines or certain mandatory information required to be shared with the customer.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 20000 \\nexample: It is not allowed to…</b></div></root>",
            "title": "Carrier Clause"
          },
          "transports": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "planned_arrival_date": {
                  "type": "string",
                  "format": "date",
                  "description": "<root><div><label>description</label>:<b>The planned date of arrival.</b></div><div><label>businessTerm</label>:<b>Planned Arrival Date</b></div><div><label>businessDefinition</label>:<b>The planned date of arrival.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                  "title": "Planned Arrival Date",
                  "minLength": 1
                },
                "planned_departure_date": {
                  "type": "string",
                  "format": "date",
                  "description": "<root><div><label>description</label>:<b>The planned date of departure.</b></div><div><label>businessTerm</label>:<b>Planned Departure Date</b></div><div><label>businessDefinition</label>:<b>The planned date of departure.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                  "title": "Planned Departure Date",
                  "minLength": 1
                },
                "pre_carriage": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "maxLength": 50,
                  "example": "RAIL",
                  "description": "<root><div><label>description</label>:<b>Mode of transportation for pre-carriage when transport to the port of loading is organized by the carrier. If this attributes is populated, then a Place of Receipt must also be defined. The currently supported values include: \\n \\n- VESSEL \\n- RAIL \\n- TRUCK \\n- BARGE</b></div><div><label>businessTerm</label>:<b>Pre-Carriage By</b></div><div><label>businessDefinition</label>:<b>Mode of transportation for pre-carriage when transport to the port of loading is organized by the carrier. If this attributes is populated, then a Place of Receipt must also be defined. The currently supported values include: \\n \\n- VESSEL \\n- RAIL \\n- TRUCK \\n- BARGE</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 50 \\nexample: RAIL</b></div></root>",
                  "title": "Pre-Carriage By"
                },
                "on_carriage": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "maxLength": 50,
                  "example": "RAIL",
                  "description": "<root><div><label>description</label>:<b>Mode of transportation for on-carriage when transport from the port of discharge is organized by the carrier. If this attributes is populated, then a Place of Delivery must also be defined. The currently supported values include: \\n \\n- VESSEL \\n- RAIL \\n- TRUCK \\n- BARGE</b></div><div><label>businessTerm</label>:<b>On Carriage By</b></div><div><label>businessDefinition</label>:<b>Mode of transportation for on-carriage when transport from the port of discharge is organized by the carrier. If this attributes is populated, then a Place of Delivery must also be defined. The currently supported values include: \\n \\n- VESSEL \\n- RAIL \\n- TRUCK \\n- BARGE</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 50 \\nexample: RAIL</b></div></root>",
                  "title": "On Carriage By"
                },
                "receipt_location_nm": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Port of Amsterdam",
                  "description": "<root><div><label>description</label>:<b>To capture Place of Receipt location name: the location where the cargo is handed over by the shipper, or his agent, to the shipping line. This indicates the point at which the shipping line takes on responsibility for carriage of the container. \\n \\nCondition: Only when pre-carriage is done by the carrier.</b></div><div><label>businessTerm</label>:<b>Place of Receipt - Location Name</b></div><div><label>businessDefinition</label>:<b>To capture Place of Receipt location name: the location where the cargo is handed over by the shipper, or his agent, to the shipping line. This indicates the point at which the shipping line takes on responsibility for carriage of the container. \\n \\nCondition: Only when pre-carriage is done by the carrier.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Port of Amsterdam</b></div></root>",
                  "title": "Place of Receipt - Location Name"
                },
                "receipt_location_type": {
                  "type": "string",
                  "example": "FACI",
                  "description": "<root><div><label>description</label>:<b>To capture Place of Receipt location type (discriminator used to identify this as a Facility Location interface): the location where the cargo is handed over by the shipper, or his agent, to the shipping line. This indicates the point at which the shipping line takes on responsibility for carriage of the container. \\n \\nCondition: Only when pre-carriage is done by the carrier.</b></div><div><label>businessTerm</label>:<b>Place of Receipt - Location Type</b></div><div><label>businessDefinition</label>:<b>To capture Place of Receipt location type (discriminator used to identify this as a Facility Location interface): the location where the cargo is handed over by the shipper, or his agent, to the shipping line. This indicates the point at which the shipping line takes on responsibility for carriage of the container. \\n \\nCondition: Only when pre-carriage is done by the carrier.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: FACI</b></div></root>",
                  "title": "Place of Receipt - Location Type",
                  "minLength": 1
                },
                "receipt_unlocation_cd": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "pattern": "^[A-Z]{2}[A-Z2-9]{3}$",
                  "maxLength": 5,
                  "example": "FRPAR",
                  "description": "<root><div><label>description</label>:<b>To capture Place of Receipt UNLocation code (The UN Location code specifying where the place is located. This field is conditionally mandatory depending on the value of the facilityCodeListProvider field): the location where the cargo is handed over by the shipper, or his agent, to the shipping line. This indicates the point at which the shipping line takes on responsibility for carriage of the container. \\n \\nCondition: Only when pre-carriage is done by the carrier.</b></div><div><label>businessTerm</label>:<b>Place of Receipt - UNLocation Code</b></div><div><label>businessDefinition</label>:<b>To capture Place of Receipt UNLocation code (The UN Location code specifying where the place is located. This field is conditionally mandatory depending on the value of the facilityCodeListProvider field): the location where the cargo is handed over by the shipper, or his agent, to the shipping line. This indicates the point at which the shipping line takes on responsibility for carriage of the container. \\n \\nCondition: Only when pre-carriage is done by the carrier.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}[A-Z2-9]{3}$ \\nminLength: 5 \\nmaxLength: 5 \\nexample: FRPAR</b></div></root>",
                  "title": "Place of Receipt - UNLocation Code"
                },
                "receipt_facility_cd": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 6,
                  "nullable": false,
                  "example": "ADT",
                  "description": "<root><div><label>description</label>:<b>To capture Place of Receipt location facility code (The code used for identifying the specific facility. This code does not include the UN Location Code. The definition of the code depends on the facilityCodeListProvider. As code list providers maintain multiple codeLists the following codeList is used: for SMDG - the codeList used is the SMDG Terminal Code List; for BIC - the codeList used is the BIC Facility Codes): the location where the cargo is handed over by the shipper, or his agent, to the shipping line. This indicates the point at which the shipping line takes on responsibility for carriage of the container. \\n \\nCondition: Only when pre-carriage is done by the carrier.</b></div><div><label>businessTerm</label>:<b>Place of Receipt - Facility Code</b></div><div><label>businessDefinition</label>:<b>To capture Place of Receipt location facility code (The code used for identifying the specific facility. This code does not include the UN Location Code. The definition of the code depends on the facilityCodeListProvider. As code list providers maintain multiple codeLists the following codeList is used: for SMDG - the codeList used is the SMDG Terminal Code List; for BIC - the codeList used is the BIC Facility Codes): the location where the cargo is handed over by the shipper, or his agent, to the shipping line. This indicates the point at which the shipping line takes on responsibility for carriage of the container. \\n \\nCondition: Only when pre-carriage is done by the carrier.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 6 \\nnullable: false \\nexample: ADT</b></div></root>",
                  "title": "Place of Receipt - Facility Code",
                  "minLength": 1
                },
                "receipt_facility_cd_provider": {
                  "type": "string",
                  "example": "SMDG",
                  "description": "<root><div><label>description</label>:<b>To capture Place of Receipt location code list provider (The provider used for identifying the facility Code. Some facility codes are only defined in combination with an UN Location Code: BIC (Requires a UN Location Code); SMDG (Requires a UN Location Code)): the location where the cargo is handed over by the shipper, or his agent, to the shipping line. This indicates the point at which the shipping line takes on responsibility for carriage of the container. \\n \\nCondition: Only when pre-carriage is done by the carrier.</b></div><div><label>businessTerm</label>:<b>Place of Receipt - Facility Code List Provider</b></div><div><label>businessDefinition</label>:<b>To capture Place of Receipt location code list provider (The provider used for identifying the facility Code. Some facility codes are only defined in combination with an UN Location Code: BIC (Requires a UN Location Code); SMDG (Requires a UN Location Code)): the location where the cargo is handed over by the shipper, or his agent, to the shipping line. This indicates the point at which the shipping line takes on responsibility for carriage of the container. \\n \\nCondition: Only when pre-carriage is done by the carrier.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: SMDG</b></div></root>",
                  "title": "Place of Receipt - Facility Code List Provider",
                  "minLength": 1
                },
                "pol_location_nm": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Port of Amsterdam",
                  "description": "<root><div><label>description</label>:<b>To capture Port of Loading location name: the location where the cargo is loaded onto a first sea-going vessel for water transportation.</b></div><div><label>businessTerm</label>:<b>Port of Loading - Location Name</b></div><div><label>businessDefinition</label>:<b>To capture Port of Loading location name: the location where the cargo is loaded onto a first sea-going vessel for water transportation.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Port of Amsterdam</b></div></root>",
                  "title": "Port of Loading - Location Name"
                },
                "pol_location_type": {
                  "type": "string",
                  "example": "UNLO",
                  "description": "<root><div><label>description</label>:<b>To capture Port of Loading location type (discriminator used to identify this as a UNLocation location interface): the location where the cargo is loaded onto a first sea-going vessel for water transportation.</b></div><div><label>businessTerm</label>:<b>Port of Loading - Location Type</b></div><div><label>businessDefinition</label>:<b>To capture Port of Loading location type (discriminator used to identify this as a UNLocation location interface): the location where the cargo is loaded onto a first sea-going vessel for water transportation.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: UNLO</b></div></root>",
                  "title": "Port of Loading - Location Type",
                  "minLength": 1
                },
                "pol_unlocation_cd": {
                  "type": "string",
                  "pattern": "^[A-Z]{2}[A-Z2-9]{3}$",
                  "minLength": 5,
                  "maxLength": 5,
                  "example": "FRPAR",
                  "description": "<root><div><label>description</label>:<b>To capture Port of Loading UNLocation Code (The UN Location code specifying where the place is located. The pattern used must be 2 characters for the country code using ISO 3166-1 alpha-2; 3 characters to code a location within that country. Letters A-Z and numbers from 2-9 can be used. More info can be found here: UN/LOCODE): the location where the cargo is loaded onto a first sea-going vessel for water transportation.</b></div><div><label>businessTerm</label>:<b>Port of Loading - UNLocation Code</b></div><div><label>businessDefinition</label>:<b>To capture Port of Loading UNLocation Code (The UN Location code specifying where the place is located. The pattern used must be 2 characters for the country code using ISO 3166-1 alpha-2; 3 characters to code a location within that country. Letters A-Z and numbers from 2-9 can be used. More info can be found here: UN/LOCODE): the location where the cargo is loaded onto a first sea-going vessel for water transportation.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}[A-Z2-9]{3}$ \\nminLength: 5 \\nmaxLength: 5 \\nexample: FRPAR</b></div></root>",
                  "title": "Port of Loading - UNLocation Code"
                },
                "delivery_location_nm": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Port of Amsterdam",
                  "description": "<root><div><label>description</label>:<b>To capture Place of Delivery location name: the location where the cargo is handed over to the consignee, or his agent, by the shipping line and where responsibility of the shipping line ceases. \\n \\nCondition: Only when onward transport is done by the carrier</b></div><div><label>businessTerm</label>:<b>Place of Delivery - Location Name</b></div><div><label>businessDefinition</label>:<b>To capture Place of Delivery location name: the location where the cargo is handed over to the consignee, or his agent, by the shipping line and where responsibility of the shipping line ceases. \\n \\nCondition: Only when onward transport is done by the carrier</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Port of Amsterdam</b></div></root>",
                  "title": "Place of Delivery - Location Name"
                },
                "delivery_location_type": {
                  "type": "string",
                  "example": "FACI",
                  "description": "<root><div><label>description</label>:<b>To capture Place of Delivery location type (discriminator used to identify this as a Facility Location interface): the location where the cargo is handed over to the consignee, or his agent, by the shipping line and where responsibility of the shipping line ceases. \\n \\nCondition: Only when onward transport is done by the carrier</b></div><div><label>businessTerm</label>:<b>Place of Deivery- Location Type</b></div><div><label>businessDefinition</label>:<b>To capture Place of Delivery location type (discriminator used to identify this as a Facility Location interface): the location where the cargo is handed over to the consignee, or his agent, by the shipping line and where responsibility of the shipping line ceases. \\n \\nCondition: Only when onward transport is done by the carrier</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: FACI</b></div></root>",
                  "title": "Place of Deivery- Location Type",
                  "minLength": 1
                },
                "delivery_unlocation_cd": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "pattern": "^[A-Z]{2}[A-Z2-9]{3}$",
                  "maxLength": 5,
                  "example": "FRPAR",
                  "description": "<root><div><label>description</label>:<b>To capture Place of Delivery location UNLocation code (The UN Location code specifying where the place is located. This field is conditionally mandatory depending on the value of the facilityCodeListProvider field): the location where the cargo is handed over to the consignee, or his agent, by the shipping line and where responsibility of the shipping line ceases. \\n \\nCondition: Only when onward transport is done by the carrier</b></div><div><label>businessTerm</label>:<b>Place of Delivery - UNLocation Code</b></div><div><label>businessDefinition</label>:<b>To capture Place of Delivery location UNLocation code (The UN Location code specifying where the place is located. This field is conditionally mandatory depending on the value of the facilityCodeListProvider field): the location where the cargo is handed over to the consignee, or his agent, by the shipping line and where responsibility of the shipping line ceases. \\n \\nCondition: Only when onward transport is done by the carrier</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}[A-Z2-9]{3}$ \\nminLength: 5 \\nmaxLength: 5 \\nexample: FRPAR</b></div></root>",
                  "title": "Place of Delivery - UNLocation Code"
                },
                "delivery_facility_cd": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 6,
                  "nullable": false,
                  "example": "ADT",
                  "description": "<root><div><label>description</label>:<b>To capture Place of Delivery location facility code (The code used for identifying the specific facility. This code does not include the UN Location Code. The definition of the code depends on the facilityCodeListProvider. As code list providers maintain multiple codeLists the following codeList is used: for SMDG - the codeList used is the SMDG Terminal Code List; for BIC - the codeList used is the BIC Facility Codes): the location where the cargo is handed over to the consignee, or his agent, by the shipping line and where responsibility of the shipping line ceases. \\n \\nCondition: Only when onward transport is done by the carrier</b></div><div><label>businessTerm</label>:<b>Place of Delivery - Facility Code</b></div><div><label>businessDefinition</label>:<b>To capture Place of Delivery location facility code (The code used for identifying the specific facility. This code does not include the UN Location Code. The definition of the code depends on the facilityCodeListProvider. As code list providers maintain multiple codeLists the following codeList is used: for SMDG - the codeList used is the SMDG Terminal Code List; for BIC - the codeList used is the BIC Facility Codes): the location where the cargo is handed over to the consignee, or his agent, by the shipping line and where responsibility of the shipping line ceases. \\n \\nCondition: Only when onward transport is done by the carrier</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 6 \\nnullable: false \\nexample: ADT</b></div></root>",
                  "title": "Place of Delivery - Facility Code",
                  "minLength": 1
                },
                "delivery_facility_cd_provider": {
                  "type": "string",
                  "example": "SMDG",
                  "description": "<root><div><label>description</label>:<b>To capture Place of Delivery location code list provider (The provider used for identifying the facility Code. Some facility codes are only defined in combination with an UN Location Code: BIC (Requires a UN Location Code); SMDG (Requires a UN Location Code)): the location where the cargo is handed over to the consignee, or his agent, by the shipping line and where responsibility of the shipping line ceases. \\n \\nCondition: Only when onward transport is done by the carrier</b></div><div><label>businessTerm</label>:<b>Place of Delivery - Facility Code List Provider</b></div><div><label>businessDefinition</label>:<b>To capture Place of Delivery location code list provider (The provider used for identifying the facility Code. Some facility codes are only defined in combination with an UN Location Code: BIC (Requires a UN Location Code); SMDG (Requires a UN Location Code)): the location where the cargo is handed over to the consignee, or his agent, by the shipping line and where responsibility of the shipping line ceases. \\n \\nCondition: Only when onward transport is done by the carrier</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: SMDG</b></div></root>",
                  "title": "Place of Delivery - Facility Code List Provider",
                  "minLength": 1
                },
                "pod_location_nm": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Port of Amsterdam",
                  "description": "<root><div><label>description</label>:<b>To capture Port of Discharge location name: the location where the cargo is discharged from the last sea-going vessel.</b></div><div><label>businessTerm</label>:<b>Port of Discharge - Location Name</b></div><div><label>businessDefinition</label>:<b>To capture Port of Discharge location name: the location where the cargo is discharged from the last sea-going vessel.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Port of Amsterdam</b></div></root>",
                  "title": "Port of Discharge - Location Name"
                },
                "pod_location_type": {
                  "type": "string",
                  "example": "UNLO",
                  "description": "<root><div><label>description</label>:<b>To capture Port of Discharge location name: the location where the cargo is discharged from the last sea-going vessel.</b></div><div><label>businessTerm</label>:<b>Port of Discharge - Location Type</b></div><div><label>businessDefinition</label>:<b>To capture Port of Discharge location name: the location where the cargo is discharged from the last sea-going vessel.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: UNLO</b></div></root>",
                  "title": "Port of Discharge - Location Type",
                  "minLength": 1
                },
                "pod_unlocation_cd": {
                  "type": "string",
                  "pattern": "^[A-Z]{2}[A-Z2-9]{3}$",
                  "minLength": 5,
                  "maxLength": 5,
                  "example": "FRPAR",
                  "description": "<root><div><label>description</label>:<b>To capture Port of Discharge location name: the location where the cargo is discharged from the last sea-going vessel.</b></div><div><label>businessTerm</label>:<b>Port of Discharge - UNLocation Code</b></div><div><label>businessDefinition</label>:<b>To capture Port of Discharge location name: the location where the cargo is discharged from the last sea-going vessel.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}[A-Z2-9]{3}$ \\nminLength: 5 \\nmaxLength: 5 \\nexample: FRPAR</b></div></root>",
                  "title": "Port of Discharge - UNLocation Code"
                },
                "routing_location_nm": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Port of Amsterdam",
                  "description": "<root><div><label>description</label>:<b>To capture Onward Inland Routing location name specified as the end location of the inland movement that takes place after the container(s) being delivered to the port of discharge/place of delivery for account and risk of merchant (merchant haulage).</b></div><div><label>businessTerm</label>:<b>Onward Inland Routing - Location Name</b></div><div><label>businessDefinition</label>:<b>To capture Onward Inland Routing location name specified as the end location of the inland movement that takes place after the container(s) being delivered to the port of discharge/place of delivery for account and risk of merchant (merchant haulage).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Port of Amsterdam</b></div></root>",
                  "title": "Onward Inland Routing - Location Name"
                },
                "routing_location_type": {
                  "type": "string",
                  "example": "FACI",
                  "description": "<root><div><label>description</label>:<b>To capture Onward Inland Routing location type (discriminator used to identify this as a Facility Location interface) specified as the end location of the inland movement that takes place after the container(s) being delivered to the port of discharge/place of delivery for account and risk of merchant (merchant haulage).</b></div><div><label>businessTerm</label>:<b>Onward Inland Routing- Location Type</b></div><div><label>businessDefinition</label>:<b>To capture Onward Inland Routing location type (discriminator used to identify this as a Facility Location interface) specified as the end location of the inland movement that takes place after the container(s) being delivered to the port of discharge/place of delivery for account and risk of merchant (merchant haulage).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: FACI</b></div></root>",
                  "title": "Onward Inland Routing- Location Type",
                  "minLength": 1
                },
                "routing_unlocation_cd": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "pattern": "^[A-Z]{2}[A-Z2-9]{3}$",
                  "maxLength": 5,
                  "example": "FRPAR",
                  "description": "<root><div><label>description</label>:<b>To capture Onward Inland Routing location UNLocation code (The UN Location code specifying where the place is located. This field is conditionally mandatory depending on the value of the facilityCodeListProvider field) specified as the end location of the inland movement that takes place after the container(s) being delivered to the port of discharge/place of delivery for account and risk of merchant (merchant haulage).</b></div><div><label>businessTerm</label>:<b>Onward Inland Routing - UNLocation Code</b></div><div><label>businessDefinition</label>:<b>To capture Onward Inland Routing location UNLocation code (The UN Location code specifying where the place is located. This field is conditionally mandatory depending on the value of the facilityCodeListProvider field) specified as the end location of the inland movement that takes place after the container(s) being delivered to the port of discharge/place of delivery for account and risk of merchant (merchant haulage).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}[A-Z2-9]{3}$ \\nminLength: 5 \\nmaxLength: 5 \\nexample: FRPAR</b></div></root>",
                  "title": "Onward Inland Routing - UNLocation Code"
                },
                "routing_facility_cd": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 6,
                  "nullable": false,
                  "example": "ADT",
                  "description": "<root><div><label>description</label>:<b>To capture Onward Inland Routing location facility code (The code used for identifying the specific facility. This code does not include the UN Location Code. The definition of the code depends on the facilityCodeListProvider. As code list providers maintain multiple codeLists the following codeList is used: for SMDG - the codeList used is the SMDG Terminal Code List; for BIC - the codeList used is the BIC Facility Codes) specified as the end location of the inland movement that takes place after the container(s) being delivered to the port of discharge/place of delivery for account and risk of merchant (merchant haulage).</b></div><div><label>businessTerm</label>:<b>Onward Inland Routing - Facility Code</b></div><div><label>businessDefinition</label>:<b>To capture Onward Inland Routing location facility code (The code used for identifying the specific facility. This code does not include the UN Location Code. The definition of the code depends on the facilityCodeListProvider. As code list providers maintain multiple codeLists the following codeList is used: for SMDG - the codeList used is the SMDG Terminal Code List; for BIC - the codeList used is the BIC Facility Codes) specified as the end location of the inland movement that takes place after the container(s) being delivered to the port of discharge/place of delivery for account and risk of merchant (merchant haulage).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 6 \\nnullable: false \\nexample: ADT</b></div></root>",
                  "title": "Onward Inland Routing - Facility Code",
                  "minLength": 1
                },
                "routing_facility_cd_provider": {
                  "type": "string",
                  "example": "SMDG",
                  "description": "<root><div><label>description</label>:<b>To capture Onward Inland Routing location code list provider (The provider used for identifying the facility Code. Some facility codes are only defined in combination with an UN Location Code: BIC (Requires a UN Location Code); SMDG (Requires a UN Location Code)) specified as the end location of the inland movement that takes place after the container(s) being delivered to the port of discharge/place of delivery for account and risk of merchant (merchant haulage).</b></div><div><label>businessTerm</label>:<b>Onward Inland Routing - Facility Code List Provider</b></div><div><label>businessDefinition</label>:<b>To capture Onward Inland Routing location code list provider (The provider used for identifying the facility Code. Some facility codes are only defined in combination with an UN Location Code: BIC (Requires a UN Location Code); SMDG (Requires a UN Location Code)) specified as the end location of the inland movement that takes place after the container(s) being delivered to the port of discharge/place of delivery for account and risk of merchant (merchant haulage).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: SMDG</b></div></root>",
                  "title": "Onward Inland Routing - Facility Code List Provider",
                  "minLength": 1
                },
                "vessel_nm": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 35,
                  "example": "King of the Seas",
                  "description": "<root><div><label>description</label>:<b>The name of the first sea going Vessel on board which the cargo is loaded or intended to be loaded</b></div><div><label>businessTerm</label>:<b>Vessel Name</b></div><div><label>businessDefinition</label>:<b>The name of the first sea going Vessel on board which the cargo is loaded or intended to be loaded</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 35 \\nexample: King of the Seas</b></div></root>",
                  "title": "Vessel Name",
                  "minLength": 1
                },
                "voy_no": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 50,
                  "example": "2103S",
                  "description": "<root><div><label>description</label>:<b>The identifier of an export voyage. The carrier-specific identifier of the export Voyage.</b></div><div><label>businessTerm</label>:<b>Carrier Export Voyage Number</b></div><div><label>businessDefinition</label>:<b>The identifier of an export voyage. The carrier-specific identifier of the export Voyage.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 50 \\nexample: 2103S</b></div></root>",
                  "title": "Carrier Export Voyage Number",
                  "minLength": 1
                },
                "universal_voy_no": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "pattern": "^\\d{2}[0-9A-Z]{2}[NEWSR]$",
                  "example": "2103N",
                  "description": "<root><div><label>description</label>:<b>A global unique voyage reference for the export Voyage, as per DCSA standard, agreed by VSA partners for the voyage. The voyage reference must match the regular expression pattern: \\d{2}[0-9A-Z]{2}[NEWSR] \\n \\n- 2 digits for the year \\n- 2 alphanumeric characters for the sequence number of the voyage \\n- 1 character for the direction/haul (North, East, West, South or Roundtrip).</b></div><div><label>businessTerm</label>:<b>Universal Export Voyage Reference</b></div><div><label>businessDefinition</label>:<b>A global unique voyage reference for the export Voyage, as per DCSA standard, agreed by VSA partners for the voyage. The voyage reference must match the regular expression pattern: \\d{2}[0-9A-Z]{2}[NEWSR] \\n \\n- 2 digits for the year \\n- 2 alphanumeric characters for the sequence number of the voyage \\n- 1 character for the direction/haul (North, East, West, South or Roundtrip).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\d{2}[0-9A-Z]{2}[NEWSR]$ \\nexample: 2103N</b></div></root>",
                  "title": "Universal Export Voyage Reference"
                }
              },
              "required": [
                "planned_arrival_date",
                "planned_departure_date",
                "receipt_location_type",
                "receipt_facility_cd",
                "receipt_facility_cd_provider",
                "pol_location_type",
                "pol_unlocation_cd",
                "delivery_location_type",
                "delivery_facility_cd",
                "delivery_facility_cd_provider",
                "pod_location_type",
                "pod_unlocation_cd",
                "routing_location_type",
                "routing_facility_cd",
                "routing_facility_cd_provider",
                "vessel_nm",
                "voy_no"
              ]
            },
            "description": "<root><div><label>description</label>:<b>An interface used to express a location using a Facility. The facility can either be expressed using a BIC code or a SMDG code. The facilityCode does not contain the UNLocationCode - this should be provided in the UnLocationCode attribute.</b></div><div><label>businessTerm</label>:<b>Transports Details</b></div><div><label>businessDefinition</label>:<b>An interface used to express a location using a Facility. The facility can either be expressed using a BIC code or a SMDG code. The facilityCode does not contain the UNLocationCode - this should be provided in the UnLocationCode attribute.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "Transports Details",
            "minItems": 1
          },
          "charges": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "name": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 50,
                  "example": "Documentation fee - Destination",
                  "description": "<root><div><label>description</label>:<b>Free text field describing the charge to apply</b></div><div><label>businessTerm</label>:<b>Charges Name</b></div><div><label>businessDefinition</label>:<b>Free text field describing the charge to apply</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 50 \\nexample: Documentation fee - Destination</b></div></root>",
                  "title": "Charges Name",
                  "minLength": 1
                },
                "currency_amount": {
                  "type": "number",
                  "minimum": 0,
                  "example": 1012.12,
                  "format": "double",
                  "description": "<root><div><label>description</label>:<b>The monetary value of all freight and other service charges for a transport document, with a maximum of 2-digit decimals.</b></div><div><label>businessTerm</label>:<b>Currency Amount</b></div><div><label>businessDefinition</label>:<b>The monetary value of all freight and other service charges for a transport document, with a maximum of 2-digit decimals.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nexample: 1012.12</b></div></root>",
                  "title": "Currency Amount"
                },
                "currency_cd": {
                  "type": "string",
                  "pattern": "^[A-Z]{3}$",
                  "maxLength": 3,
                  "example": "DKK",
                  "description": "<root><div><label>description</label>:<b>The currency for the charge, using a 3-character code (ISO 4217).</b></div><div><label>businessTerm</label>:<b>Currency Code</b></div><div><label>businessDefinition</label>:<b>The currency for the charge, using a 3-character code (ISO 4217).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{3}$ \\nmaxLength: 3 \\nexample: DKK</b></div></root>",
                  "title": "Currency Code",
                  "minLength": 1
                },
                "payment_term": {
                  "type": "string",
                  "enum": [
                    "PRE",
                    "COL"
                  ],
                  "example": "PRE",
                  "description": "<root><div><label>description</label>:<b>An indicator of whether a charge is prepaid (PRE) or collect (COL). When prepaid, the charge is the responsibility of the shipper or the Invoice payer on behalf of the shipper (if provided). When collect, the charge is the responsibility of the consignee or the Invoice payer on behalf of the consignee (if provided). Possible values are: PRE (Prepaid) and COL (Collect)</b></div><div><label>businessTerm</label>:<b>Payment Term Code</b></div><div><label>businessDefinition</label>:<b>An indicator of whether a charge is prepaid (PRE) or collect (COL). When prepaid, the charge is the responsibility of the shipper or the Invoice payer on behalf of the shipper (if provided). When collect, the charge is the responsibility of the consignee or the Invoice payer on behalf of the consignee (if provided). Possible values are: PRE (Prepaid) and COL (Collect)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: PRE \\nEnum: [ PRE, COL ]</b></div></root>",
                  "title": "Payment Term Code",
                  "minLength": 1
                },
                "calculation_basis": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 50,
                  "example": "Per day",
                  "description": "<root><div><label>description</label>:<b>The code specifying the measure unit used for the corresponding unit price for this cost, such as per day, per ton, per square metre.</b></div><div><label>businessTerm</label>:<b>Calcultion Basis</b></div><div><label>businessDefinition</label>:<b>The code specifying the measure unit used for the corresponding unit price for this cost, such as per day, per ton, per square metre.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 50 \\nexample: Per day</b></div></root>",
                  "title": "Calcultion Basis",
                  "minLength": 1
                },
                "unit_price": {
                  "type": "number",
                  "minimum": 0,
                  "example": 3456.6,
                  "format": "double",
                  "description": "<root><div><label>description</label>:<b>The unit price of this charge item in the currency of the charge.</b></div><div><label>businessTerm</label>:<b>Unit Price</b></div><div><label>businessDefinition</label>:<b>The unit price of this charge item in the currency of the charge.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nexample: 3456.6</b></div></root>",
                  "title": "Unit Price"
                },
                "quantity": {
                  "type": "number",
                  "minimum": 0,
                  "example": 34.4,
                  "format": "double",
                  "description": "<root><div><label>description</label>:<b>The amount of unit for this charge item.</b></div><div><label>businessTerm</label>:<b>Quantity </b></div><div><label>businessDefinition</label>:<b>The amount of unit for this charge item.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nexample: 34.4</b></div></root>",
                  "title": "Quantity "
                }
              },
              "required": [
                "name",
                "currency_amount",
                "currency_cd",
                "payment_term",
                "calculation_basis",
                "unit_price",
                "quantity"
              ]
            },
            "description": "<root><div><label>description</label>:<b>Addresses the monetary value of freight and other service charges for a Transport Document</b></div><div><label>businessTerm</label>:<b>Charges Details</b></div><div><label>businessDefinition</label>:<b>Addresses the monetary value of freight and other service charges for a Transport Document</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "Charges Details"
          },
          "issue_place": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "location_nm": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Port of Amsterdam",
                  "description": "<root><div><label>description</label>:<b>To capture location name of the original Transport Document (Bill of Lading) will be issued.</b></div><div><label>businessTerm</label>:<b>Place of Issue - Location Name</b></div><div><label>businessDefinition</label>:<b>To capture location name of the original Transport Document (Bill of Lading) will be issued.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Port of Amsterdam</b></div></root>",
                  "title": "Place of Issue - Location Name"
                },
                "location_type": {
                  "type": "string",
                  "example": "UNLO",
                  "description": "<root><div><label>description</label>:<b>To capture location type (discriminator used to identify this as a UNLocation location interface) of the original Transport Document (Bill of Lading) will be issued.</b></div><div><label>businessTerm</label>:<b>Place of Issue - Location Type</b></div><div><label>businessDefinition</label>:<b>To capture location type (discriminator used to identify this as a UNLocation location interface) of the original Transport Document (Bill of Lading) will be issued.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: UNLO</b></div></root>",
                  "title": "Place of Issue - Location Type",
                  "minLength": 1
                },
                "unlocation_cd": {
                  "type": "string",
                  "pattern": "^[A-Z]{2}[A-Z2-9]{3}$",
                  "minLength": 5,
                  "maxLength": 5,
                  "example": "FRPAR",
                  "description": "<root><div><label>description</label>:<b>To capture UNLocation code (The UN Location code specifying where the place is located. This field is conditionally mandatory depending on the value of the facilityCodeListProvider field) of the original Transport Document (Bill of Lading) will be issued.</b></div><div><label>businessTerm</label>:<b>Place of Issue - UNLocation Code</b></div><div><label>businessDefinition</label>:<b>To capture UNLocation code (The UN Location code specifying where the place is located. This field is conditionally mandatory depending on the value of the facilityCodeListProvider field) of the original Transport Document (Bill of Lading) will be issued.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}[A-Z2-9]{3}$ \\nminLength: 5 \\nmaxLength: 5 \\nexample: FRPAR</b></div></root>",
                  "title": "Place of Issue - UNLocation Code"
                }
              },
              "required": [
                "pol_location_type",
                "pol_unlocation_cd"
              ]
            },
            "description": "<root><div><label>description</label>:<b>General purpose object to capture where the original Transport Document (Bill of Lading) will be issued.</b></div><div><label>businessTerm</label>:<b>Place of Issue</b></div><div><label>businessDefinition</label>:<b>General purpose object to capture where the original Transport Document (Bill of Lading) will be issued.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "Place of Issue"
          },
          "invoice_payable_at": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "location_nm": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Port of Amsterdam",
                  "description": "<root><div><label>description</label>:<b>To capture Invoice Payable location name: location where payment by the customer will take place. Usually refers to Basic Ocean Freight alone.</b></div><div><label>businessTerm</label>:<b>Invoice Payable Location Name</b></div><div><label>businessDefinition</label>:<b>To capture Invoice Payable location name: location where payment by the customer will take place. Usually refers to Basic Ocean Freight alone.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Port of Amsterdam</b></div></root>",
                  "title": "Invoice Payable Location Name"
                },
                "location_type": {
                  "type": "string",
                  "example": "UNLO",
                  "description": "<root><div><label>description</label>:<b>To capture Invoice Payable location type (discriminator used to identify this as a UNLocation location interface): location where payment by the customer will take place. Usually refers to Basic Ocean Freight alone.</b></div><div><label>businessTerm</label>:<b>Invoice Payable Location Type</b></div><div><label>businessDefinition</label>:<b>To capture Invoice Payable location type (discriminator used to identify this as a UNLocation location interface): location where payment by the customer will take place. Usually refers to Basic Ocean Freight alone.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: UNLO</b></div></root>",
                  "title": "Invoice Payable Location Type",
                  "minLength": 1
                },
                "unlocation_cd": {
                  "type": "string",
                  "pattern": "^[A-Z]{2}[A-Z2-9]{3}$",
                  "minLength": 5,
                  "maxLength": 5,
                  "example": "FRPAR",
                  "description": "<root><div><label>description</label>:<b>To capture Invoice Payable UNLocation code (The UN Location code specifying where the place is located. This field is conditionally mandatory depending on the value of the facilityCodeListProvider field): location where payment by the customer will take place. Usually refers to Basic Ocean Freight alone.</b></div><div><label>businessTerm</label>:<b>Invoice Payable Location Code</b></div><div><label>businessDefinition</label>:<b>To capture Invoice Payable UNLocation code (The UN Location code specifying where the place is located. This field is conditionally mandatory depending on the value of the facilityCodeListProvider field): location where payment by the customer will take place. Usually refers to Basic Ocean Freight alone.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}[A-Z2-9]{3}$ \\nminLength: 5 \\nmaxLength: 5 \\nexample: FRPAR</b></div></root>",
                  "title": "Invoice Payable Location Code"
                }
              },
              "required": [
                "location_type",
                "unlocation_cd"
              ]
            },
            "description": "<root><div><label>description</label>:<b>General purpose object to capture Invoice Payable At location specified as: location where payment by the customer will take place. Usually refers to Basic Ocean Freight alone.</b></div><div><label>businessTerm</label>:<b>Invoice Payable Location</b></div><div><label>businessDefinition</label>:<b>General purpose object to capture Invoice Payable At location specified as: location where payment by the customer will take place. Usually refers to Basic Ocean Freight alone.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "Invoice Payable Location"
          },
          "contact_details": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "contact_nm": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Henrik",
                  "description": "<root><div><label>description</label>:<b>Name of the contact</b></div><div><label>businessTerm</label>:<b>Contact Name</b></div><div><label>businessDefinition</label>:<b>Name of the contact</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Henrik</b></div></root>",
                  "title": "Contact Name",
                  "minLength": 1
                },
                "contact_type": {
                  "type": "string",
                  "example": "Phone",
                  "enum": [
                    "Phone",
                    "Email"
                  ],
                  "description": "<root><div><label>description</label>:<b>Specifies the contact type: phone or email</b></div><div><label>businessTerm</label>:<b>Contact Type</b></div><div><label>businessDefinition</label>:<b>Specifies the contact type: phone or email</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: Phone \\nEnum: [ Phone, Email ]</b></div></root>",
                  "title": "Contact Type",
                  "minLength": 1
                },
                "contact_value": {
                  "type": "string",
                  "description": "<root><div><label>description</label>:<b>Phone number for the contact / Email address to be used</b></div><div><label>businessTerm</label>:<b>Phone Number / Email Address</b></div><div><label>businessDefinition</label>:<b>Phone number for the contact / Email address to be used</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>For Phone \\npattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 30 \\nexample: +45 70262970 \\nFor Email \\npattern: ^.+@\\S+$ \\nmaxLength: 100 \\nexample: info@dcsa.org</b></div></root>",
                  "title": "Phone Number / Email Address",
                  "minLength": 1
                }
              },
              "required": [
                "contact_nm",
                "contact_type",
                "contact_value"
              ]
            },
            "description": "<root><div><label>description</label>:<b>The contact details of the person(s) to contact in relation to the Transport Document (changes, notifications etc.)</b></div><div><label>businessTerm</label>:<b>Party Contact Details</b></div><div><label>businessDefinition</label>:<b>The contact details of the person(s) to contact in relation to the Transport Document (changes, notifications etc.)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "Party   Contact Details",
            "minItems": 1
          },
          "consignment": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "booking_ref": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 35,
                  "example": "ABC709951",
                  "description": "<root><div><label>description</label>:<b>The associated booking number provided by the carrier for this Consignment Item. When multiple carrierBookingReferences are used then the bookings referred to must all contain the same: \\n \\n- transportPlan \\n- shipmentLocations \\n- receiptTypeAtOrigin \\n- deliveryTypeAtDestination \\n- cargoMovementTypeAtOrigin \\n- cargoMovementTypeAtDestination \\n- serviceContractReference \\n- termsAndConditions \\n- Place of B/L Issue (if provided)</b></div><div><label>businessTerm</label>:<b>Carrier Booking Reference</b></div><div><label>businessDefinition</label>:<b>The associated booking number provided by the carrier for this Consignment Item. When multiple carrierBookingReferences are used then the bookings referred to must all contain the same: \\n \\n- transportPlan \\n- shipmentLocations \\n- receiptTypeAtOrigin \\n- deliveryTypeAtDestination \\n- cargoMovementTypeAtOrigin \\n- cargoMovementTypeAtDestination \\n- serviceContractReference \\n- termsAndConditions \\n- Place of B/L Issue (if provided)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 35 \\nexample: ABC709951</b></div></root>",
                  "title": "Carrier Booking Reference",
                  "minLength": 1
                },
                "weight": {
                  "type": "number",
                  "minimum": 0,
                  "exclusiveMinimum": true,
                  "example": 13000.3,
                  "format": "double",
                  "description": "<root><div><label>description</label>:<b>The total weight of all the CargoItems listed in the ConsignmentItem. Excludes the tare weight of the container(s).</b></div><div><label>businessTerm</label>:<b>Weight</b></div><div><label>businessDefinition</label>:<b>The total weight of all the CargoItems listed in the ConsignmentItem. Excludes the tare weight of the container(s).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nexclusiveMinimum: true \\nexample: 13000.3</b></div></root>",
                  "title": "Weight"
                },
                "weight_unit": {
                  "type": "string",
                  "example": "KGM",
                  "enum": [
                    "KGM",
                    "LBR"
                  ],
                  "description": "<root><div><label>description</label>:<b>The unit of measure which can be expressed in imperial or metric terms \\n \\n- KGM (Kilograms) \\n- LBR (Pounds)</b></div><div><label>businessTerm</label>:<b>Weight Unit</b></div><div><label>businessDefinition</label>:<b>The unit of measure which can be expressed in imperial or metric terms \\n \\n- KGM (Kilograms) \\n- LBR (Pounds)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: KGM \\nEnum: [ KGM, LBR ]</b></div></root>",
                  "title": "Weight Unit",
                  "minLength": 1
                },
                "volume": {
                  "type": [
                    "number",
                    "null"
                  ],
                  "minimum": 0,
                  "exclusiveMinimum": true,
                  "example": 12,
                  "format": "double",
                  "description": "<root><div><label>description</label>:<b>The total volume of all the CargoItems listed in the ConsignmentItem.</b></div><div><label>businessTerm</label>:<b>Volume</b></div><div><label>businessDefinition</label>:<b>The total volume of all the CargoItems listed in the ConsignmentItem.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nexclusiveMinimum: true \\nexample: 12</b></div></root>",
                  "title": "Volume"
                },
                "volume_unit": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "example": "MTQ",
                  "enum": [
                    "MTQ",
                    "FTQ"
                  ],
                  "description": "<root><div><label>description</label>:<b>The unit of measure which can be expressed in either imperial or metric terms \\n \\n- FTQ (Cubic foot) \\n- MTQ (Cubic meter)</b></div><div><label>businessTerm</label>:<b>Volume Unit</b></div><div><label>businessDefinition</label>:<b>The unit of measure which can be expressed in either imperial or metric terms \\n \\n- FTQ (Cubic foot) \\n- MTQ (Cubic meter)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: MTQ \\nEnum: [ MTQ, FTQ ]</b></div></root>",
                  "title": "Volume Unit"
                },
                "goods_description": {
                  "type": "string",
                  "maxLength": 5000,
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "example": "300 boxes of blue shoes size 47",
                  "description": "<root><div><label>description</label>:<b>The cargo description are details which accurately and properly describe the cargo being shipped in the container(s) as provided by the shipper.</b></div><div><label>businessTerm</label>:<b>Description of Goods</b></div><div><label>businessDefinition</label>:<b>The cargo description are details which accurately and properly describe the cargo being shipped in the container(s) as provided by the shipper.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 5000 \\npattern: ^\\S+(\\s+\\S+)*$ \\nexample: 300 boxes of blue shoes size 47</b></div></root>",
                  "title": "Description of Goods",
                  "minLength": 1
                },
                "hscode": {
                  "type": "array",
                  "items": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "pattern": "^\\d{6,10}$",
                    "maxLength": 10,
                    "example": 851713
                  },
                  "description": "<root><div><label>description</label>:<b>Used by customs to classify the product being shipped. The type of HS code depends on country and customs requirements. The code must be at least 6 and at most 10 digits. More information can be found here: HS Nomenclature 2022 edition. This standard is based on the 2022 revision.</b></div><div><label>businessTerm</label>:<b>HS Code</b></div><div><label>businessDefinition</label>:<b>Used by customs to classify the product being shipped. The type of HS code depends on country and customs requirements. The code must be at least 6 and at most 10 digits. More information can be found here: HS Nomenclature 2022 edition. This standard is based on the 2022 revision.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\d{6,10}$ \\nminLength: 6 \\nmaxLength: 10 \\nexample: 851713</b></div></root>",
                  "title": "HS Code",
                  "minItems": 1
                },
                "references": {
                  "type": [
                    "array",
                    "null"
                  ],
                  "items": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "type": {
                        "type": "string",
                        "maxLength": 3,
                        "example": "FF",
                        "description": "<root><div><label>description</label>:<b>The reference type codes defined by DCSA. Possible values are: \\n \\n- FF (Freight Forwarder’s Reference) \\n- SI (Shipper’s Reference) \\n- SPO (Shippers Purchase Order Reference) \\n- CPO (Consignees Purchase Order Reference) \\n- CR (Customer’s Reference) \\n- AAO (Consignee’s Reference) \\n- ECR (Empty container release reference) \\n- CSI (Customer shipment ID) \\n- BPR (Booking party reference number) \\n- BID (Booking Request ID) \\n- SAC (Shipping Agency Code)</b></div><div><label>businessTerm</label>:<b>Reference Type</b></div><div><label>businessDefinition</label>:<b>The reference type codes defined by DCSA. Possible values are: \\n \\n- FF (Freight Forwarder’s Reference) \\n- SI (Shipper’s Reference) \\n- SPO (Shippers Purchase Order Reference) \\n- CPO (Consignees Purchase Order Reference) \\n- CR (Customer’s Reference) \\n- AAO (Consignee’s Reference) \\n- ECR (Empty container release reference) \\n- CSI (Customer shipment ID) \\n- BPR (Booking party reference number) \\n- BID (Booking Request ID) \\n- SAC (Shipping Agency Code)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 3 \\nexample: FF</b></div></root>",
                        "title": "Reference Type",
                        "minLength": 1
                      },
                      "value": {
                        "type": "string",
                        "maxLength": 100,
                        "example": "HHL00103004",
                        "description": "<root><div><label>description</label>:<b>The actual value of the reference</b></div><div><label>businessTerm</label>:<b>Reference Value</b></div><div><label>businessDefinition</label>:<b>The actual value of the reference</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\nexample: HHL00103004</b></div></root>",
                        "title": "Reference Value",
                        "minLength": 1
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ]
                  },
                  "description": "<root><div><label>description</label>:<b>References provided by the shipper or freight forwarder at the time of Booking or at the time of providing Shipping Instructions. Carriers share it back when providing track and trace event updates, some are also printed on the B/L. Customers can use these references to track shipments in their internal systems.</b></div><div><label>businessTerm</label>:<b>Reference</b></div><div><label>businessDefinition</label>:<b>References provided by the shipper or freight forwarder at the time of Booking or at the time of providing Shipping Instructions. Carriers share it back when providing track and trace event updates, some are also printed on the B/L. Customers can use these references to track shipments in their internal systems.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                  "title": "Reference"
                },
                "custom_references": {
                  "type": [
                    "array",
                    "null"
                  ],
                  "items": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "type": {
                        "type": "string",
                        "pattern": "^\\S+(\\s+\\S+)*$",
                        "maxLength": 50,
                        "example": "ACID",
                        "description": "<root><div><label>description</label>:<b>The reference type code as defined in the relevant customs jurisdiction.</b></div><div><label>businessTerm</label>:<b>Custom Reference Type</b></div><div><label>businessDefinition</label>:<b>The reference type code as defined in the relevant customs jurisdiction.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 50 \\nexample: ACID</b></div></root>",
                        "title": "Custom Reference Type",
                        "minLength": 1
                      },
                      "country_cd": {
                        "type": "string",
                        "pattern": "^[A-Z]{2}$",
                        "minLength": 2,
                        "maxLength": 2,
                        "example": "DK",
                        "description": "<root><div><label>description</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>businessTerm</label>:<b>Custom Reference Country Code</b></div><div><label>businessDefinition</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}$ \\nminLength: 2 \\nmaxLength: 2 \\nexample: DK</b></div></root>",
                        "title": "Custom Reference Country Code"
                      },
                      "value": {
                        "type": "string",
                        "pattern": "^\\S+(\\s+\\S+)*$",
                        "maxLength": 100,
                        "example": 4988470982020120000,
                        "description": "<root><div><label>description</label>:<b>The value of the customsReference</b></div><div><label>businessTerm</label>:<b>Custom Reference Value</b></div><div><label>businessDefinition</label>:<b>The value of the customsReference</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: 4988470982020120017</b></div></root>",
                        "title": "Custom Reference Value",
                        "minLength": 1
                      }
                    },
                    "required": [
                      "type",
                      "country_cd",
                      "value"
                    ]
                  },
                  "description": "<root><div><label>description</label>:<b>Reference associated with customs and/or excise purposes required by the relevant authorities for the import, export, or transit of the goods. \\n \\nA (small) list of examples: \\n \\nType  Country Description \\nACID  EG  Advance Cargo Information Declaration in Egypt \\nCERS CA  Canadian Export Reporting System \\nITN  US  Internal Transaction Number in US \\nPEB ID  PEB reference number \\nCSN  IN  Cargo Summary Notification (CSN)</b></div><div><label>businessTerm</label>:<b>Custom Reference</b></div><div><label>businessDefinition</label>:<b>Reference associated with customs and/or excise purposes required by the relevant authorities for the import, export, or transit of the goods. \\n \\nA (small) list of examples: \\n \\nType Country Description \\nACID  EG  Advance Cargo Information Declaration in Egypt \\nCERS CA  Canadian Export Reporting System \\nITN  US  Internal Transaction Number in US \\nPEB ID  PEB reference number \\nCSN  IN  Cargo Summary Notification (CSN)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                  "title": "Custom Reference"
                },
                "cargo_items": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "shipping_marks": {
                        "type": [
                          "string",
                          "null"
                        ],
                        "maxLength": 500,
                        "example": "Made in China",
                        "description": "<root><div><label>description</label>:<b>The identifying details of a package or the actual markings that appear on the package(s). This information is provided by the customer.</b></div><div><label>businessTerm</label>:<b>Shipping Marks</b></div><div><label>businessDefinition</label>:<b>The identifying details of a package or the actual markings that appear on the package(s). This information is provided by the customer.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 500 \\nexample: Made in China</b></div></root>",
                        "title": "Shipping Marks"
                      },
                      "equipment_ref": {
                        "type": [
                          "string",
                          "null"
                        ],
                        "pattern": "^\\S+(\\s+\\S+)*$",
                        "maxLength": 11,
                        "example": "APZU4812090",
                        "description": "<root><div><label>description</label>:<b>The unique identifier for the equipment, which should follow the BIC ISO Container Identification Number where possible. According to ISO 6346, a container identification code consists of a 4-letter prefix and a 7-digit number (composed of a 3-letter owner code, a category identifier, a serial number, and a check-digit). If a container does not comply with ISO 6346, it is suggested to follow Recommendation #2: Containers with non-ISO identification from SMDG.</b></div><div><label>businessTerm</label>:<b>Equiment Reference</b></div><div><label>businessDefinition</label>:<b>The unique identifier for the equipment, which should follow the BIC ISO Container Identification Number where possible. According to ISO 6346, a container identification code consists of a 4-letter prefix and a 7-digit number (composed of a 3-letter owner code, a category identifier, a serial number, and a check-digit). If a container does not comply with ISO 6346, it is suggested to follow Recommendation #2: Containers with non-ISO identification from SMDG.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 11 \\nexample: APZU4812090</b></div></root>",
                        "title": "Equiment Reference"
                      },
                      "weight": {
                        "type": "number",
                        "format": "double",
                        "minimum": 0,
                        "exclusiveMinimum": true,
                        "example": 13000.3,
                        "description": "<root><div><label>description</label>:<b>The total weight of the cargo including packaging items being carried in the container(s). Excludes the tare weight of the container(s).</b></div><div><label>businessTerm</label>:<b>Weight</b></div><div><label>businessDefinition</label>:<b>The total weight of the cargo including packaging items being carried in the container(s). Excludes the tare weight of the container(s).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nexclusiveMinimum: true \\nexample: 13000.3</b></div></root>",
                        "title": "Weight"
                      },
                      "weight_unit": {
                        "type": "string",
                        "example": "KGM",
                        "enum": [
                          "KGM",
                          "LBR"
                        ],
                        "description": "<root><div><label>description</label>:<b>The unit of measure which can be expressed in imperial or metric terms \\n \\n- KGM (Kilograms) \\n- LBR (Pounds)</b></div><div><label>businessTerm</label>:<b>Weight Unit</b></div><div><label>businessDefinition</label>:<b>The unit of measure which can be expressed in imperial or metric terms \\n \\n- KGM (Kilograms) \\n- LBR (Pounds)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: KGM \\nEnum: [ KGM, LBR ]</b></div></root>",
                        "title": "Weight Unit",
                        "minLength": 1
                      },
                      "volume": {
                        "type": [
                          "number",
                          "null"
                        ],
                        "format": "double",
                        "minimum": 0,
                        "exclusiveMinimum": true,
                        "example": 12,
                        "description": "<root><div><label>description</label>:<b>Calculated by multiplying the width, height, and length of the packed cargo.</b></div><div><label>businessTerm</label>:<b>Volume</b></div><div><label>businessDefinition</label>:<b>Calculated by multiplying the width, height, and length of the packed cargo.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nexclusiveMinimum: true \\nexample: 12</b></div></root>",
                        "title": "Volume"
                      },
                      "volume_unit": {
                        "type": [
                          "string",
                          "null"
                        ],
                        "example": "MTQ",
                        "enum": [
                          "MTQ",
                          "FTQ"
                        ],
                        "description": "<root><div><label>description</label>:<b>The unit of measure which can be expressed in either imperial or metric terms \\n \\n- FTQ (Cubic foot) \\n- MTQ (Cubic meter)</b></div><div><label>businessTerm</label>:<b>Volume Unit</b></div><div><label>businessDefinition</label>:<b>The unit of measure which can be expressed in either imperial or metric terms \\n \\n- FTQ (Cubic foot) \\n- MTQ (Cubic meter)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: MTQ \\nEnum: [ MTQ, FTQ ]</b></div></root>",
                        "title": "Volume Unit"
                      },
                      "outer_packaging": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "additionalProperties": false,
                          "properties": {
                            "package_cd": {
                              "type": [
                                "string",
                                "null"
                              ],
                              "pattern": "^[A-Z0-9]{2}$",
                              "example": "5H",
                              "description": "<root><div><label>description</label>:<b>A code identifying the outer packaging/overpack. PackageCode must follow the codes specified in Recommendation N°21 - Revision 12 Annexes V and VI. Condition: only applicable to dangerous goods if the IMO packaging code is not available.</b></div><div><label>businessTerm</label>:<b>Package Code</b></div><div><label>businessDefinition</label>:<b>A code identifying the outer packaging/overpack. PackageCode must follow the codes specified in Recommendation N°21 - Revision 12 Annexes V and VI. Condition: only applicable to dangerous goods if the IMO packaging code is not available.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z0-9]{2}$ \\nexample: 5H</b></div></root>",
                              "title": "Package Code"
                            },
                            "package_no": {
                              "type": "integer",
                              "format": "int64",
                              "minimum": 1,
                              "example": 18,
                              "description": "<root><div><label>description</label>:<b>Specifies the number of outer packagings/overpacks associated with this Cargo Item.</b></div><div><label>businessTerm</label>:<b>Number of Packages</b></div><div><label>businessDefinition</label>:<b>Specifies the number of outer packagings/overpacks associated with this Cargo Item.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 1 \\nexample: 18</b></div></root>",
                              "title": "Number of Packages"
                            },
                            "description": {
                              "type": "string",
                              "maxLength": 100,
                              "example": "Drum, steel",
                              "description": "<root><div><label>description</label>:<b>Description of the outer packaging/overpack.</b></div><div><label>businessTerm</label>:<b>Description</b></div><div><label>businessDefinition</label>:<b>Description of the outer packaging/overpack.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\nexample: Drum, steel</b></div></root>",
                              "title": "Description",
                              "minLength": 1
                            },
                            "imo_packaging_cd": {
                              "type": [
                                "string",
                                "null"
                              ],
                              "pattern": "^[A-Z0-9]{1,5}$",
                              "example": "1A2",
                              "description": "<root><div><label>description</label>:<b>The code of the packaging as per IMO. \\n \\nCondition: only applicable to dangerous goods if specified in the IMO IMDG code amendment version 41-22. If not available, the package code as per UN recommendation 21 should be used.</b></div><div><label>businessTerm</label>:<b>IMO Packaging Code</b></div><div><label>businessDefinition</label>:<b>The code of the packaging as per IMO. \\n \\nCondition: only applicable to dangerous goods if specified in the IMO IMDG code amendment version 41-22. If not available, the package code as per UN recommendation 21 should be used.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z0-9]{1,5}$ \\nexample: 1A2</b></div></root>",
                              "title": "IMO Packaging Code"
                            },
                            "dangerous_goods": {
                              "type": [
                                "array",
                                "null"
                              ],
                              "items": {
                                "type": "object",
                                "additionalProperties": false,
                                "properties": {
                                  "code_variant_list": {
                                    "type": [
                                      "string",
                                      "null"
                                    ],
                                    "pattern": "^[0-3][0-9A-Z]{3}$",
                                    "example": 2200,
                                    "description": "<root><div><label>description</label>:<b>Four-character code supplied by Exis Technologies that assists to remove ambiguities when identifying a variant within a single UN number or NA number that may occur when two companies exchange DG information. \\n \\nCharacter Valid Characters  Description \\n1 0, 1, 2, 3  The packing group. Code 0 indicates there is no packing group \\n2 0 to 9 and A to Z A sequence letter for the PSN, or 0 if there were no alternative PSNs \\n3 and 4 0 to 9 and A to Z Two sequence letters for other information, for the cases where the variant is required because of different in subrisks, packing instruction etc.</b></div><div><label>businessTerm</label>:<b>Coded Variant List</b></div><div><label>businessDefinition</label>:<b>Four-character code supplied by Exis Technologies that assists to remove ambiguities when identifying a variant within a single UN number or NA number that may occur when two companies exchange DG information. \\n \\nCharacter  Valid Characters  Description \\n1 0, 1, 2, 3  The packing group. Code 0 indicates there is no packing group \\n2 0 to 9 and A to Z A sequence letter for the PSN, or 0 if there were no alternative PSNs \\n3 and 4 0 to 9 and A to Z Two sequence letters for other information, for the cases where the variant is required because of different in subrisks, packing instruction etc.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[0-3][0-9A-Z]{3}$ \\nexample: 2200</b></div></root>",
                                    "title": "Coded Variant List"
                                  },
                                  "proper_shipping_nm": {
                                    "type": "string",
                                    "maxLength": 250,
                                    "example": "Chromium Trioxide, anhydrous",
                                    "description": "<root><div><label>description</label>:<b>The proper shipping name for goods under IMDG Code, or the product name for goods under IBC Code and IGC Code, or the bulk cargo shipping name for goods under IMSBC Code, or the name of oil for goods under Annex I to the MARPOL Convention.</b></div><div><label>businessTerm</label>:<b>Proper Shipping Name</b></div><div><label>businessDefinition</label>:<b>The proper shipping name for goods under IMDG Code, or the product name for goods under IBC Code and IGC Code, or the bulk cargo shipping name for goods under IMSBC Code, or the name of oil for goods under Annex I to the MARPOL Convention.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 250 \\nexample: Chromium Trioxide, anhydrous</b></div></root>",
                                    "title": "Proper Shipping Name",
                                    "minLength": 1
                                  },
                                  "technical_nm": {
                                    "type": [
                                      "string",
                                      "null"
                                    ],
                                    "maxLength": 250,
                                    "description": "<root><div><label>description</label>:<b>The recognized chemical or biological name or other name currently used for the referenced dangerous goods as described in chapter 3.1.2.8 of the IMDG Code.</b></div><div><label>businessTerm</label>:<b>Technical Name</b></div><div><label>businessDefinition</label>:<b>The recognized chemical or biological name or other name currently used for the referenced dangerous goods as described in chapter 3.1.2.8 of the IMDG Code.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 250</b></div></root>",
                                    "title": "Technical Name"
                                  },
                                  "imo_class": {
                                    "type": [
                                      "string",
                                      "null"
                                    ],
                                    "maxLength": 4,
                                    "example": "1.4S",
                                    "description": "<root><div><label>description</label>:<b>The hazard class code of the referenced dangerous goods according to the specified regulation. Examples of possible values are: \\n \\n- `1.1A` (Substances and articles which have a mass explosion hazard) \\n- `1.6N` (Extremely insensitive articles which do not have a mass explosion hazard) \\n- `2.1` (Flammable gases) \\n- `8` (Corrosive substances) \\nThe value must comply with one of the values in the DG IMO Class value table</b></div><div><label>businessTerm</label>:<b>IMO Class</b></div><div><label>businessDefinition</label>:<b>The hazard class code of the referenced dangerous goods according to the specified regulation. Examples of possible values are: \\n \\n- `1.1A` (Substances and articles which have a mass explosion hazard) \\n- `1.6N` (Extremely insensitive articles which do not have a mass explosion hazard) \\n- `2.1` (Flammable gases) \\n- `8` (Corrosive substances) \\nThe value must comply with one of the values in the DG IMO Class value table</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 4 \\nexample: 1.4S</b></div></root>",
                                    "title": "IMO Class"
                                  },
                                  "subsidiary_risk1": {
                                    "type": [
                                      "string",
                                      "null"
                                    ],
                                    "pattern": "^[0-9](\\.[0-9])?$",
                                    "example": 1.2,
                                    "description": "<root><div><label>description</label>:<b>Any risk in addition to the class of the referenced dangerous goods according to the IMO IMDG Code.</b></div><div><label>businessTerm</label>:<b>Subsidiary Risk 1</b></div><div><label>businessDefinition</label>:<b>Any risk in addition to the class of the referenced dangerous goods according to the IMO IMDG Code.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[0-9](\\.[0-9])?$ \\nexample: 1.2</b></div></root>",
                                    "title": "Subsidiary Risk 1"
                                  },
                                  "subsidiary_risk2": {
                                    "type": [
                                      "string",
                                      "null"
                                    ],
                                    "pattern": "^[0-9](\\.[0-9])?$",
                                    "example": 1.2,
                                    "description": "<root><div><label>description</label>:<b>Any risk in addition to the class of the referenced dangerous goods according to the IMO IMDG Code.</b></div><div><label>businessTerm</label>:<b>Subsidiary Risk 2</b></div><div><label>businessDefinition</label>:<b>Any risk in addition to the class of the referenced dangerous goods according to the IMO IMDG Code.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[0-9](\\.[0-9])?$ \\nexample: 1.2</b></div></root>",
                                    "title": "Subsidiary Risk 2"
                                  },
                                  "is_marine_pollutant": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ],
                                    "example": false,
                                    "description": "<root><div><label>description</label>:<b>Indicates if the goods belong to the classification of Marine Pollutant.</b></div><div><label>businessTerm</label>:<b>Is Marine Pollutant </b></div><div><label>businessDefinition</label>:<b>Indicates if the goods belong to the classification of Marine Pollutant.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: false</b></div></root>",
                                    "title": "Is Marine Pollutant "
                                  },
                                  "packing_group": {
                                    "type": [
                                      "integer",
                                      "null"
                                    ],
                                    "format": "int64",
                                    "minimum": 1,
                                    "maximum": 3,
                                    "example": 3,
                                    "description": "<root><div><label>description</label>:<b>The packing group according to the UN Recommendations on the Transport of Dangerous Goods and IMO IMDG Code.</b></div><div><label>businessTerm</label>:<b>Packing Group</b></div><div><label>businessDefinition</label>:<b>The packing group according to the UN Recommendations on the Transport of Dangerous Goods and IMO IMDG Code.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 1 \\nmaximum: 3 \\nexample: 3</b></div></root>",
                                    "title": "Packing Group"
                                  },
                                  "is_limited_quantity": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ],
                                    "example": false,
                                    "description": "<root><div><label>description</label>:<b>Indicates if the dangerous goods can be transported as limited quantity in accordance with Chapter 3.4 of the IMO IMDG Code.</b></div><div><label>businessTerm</label>:<b>Is Limited Quantity</b></div><div><label>businessDefinition</label>:<b>Indicates if the dangerous goods can be transported as limited quantity in accordance with Chapter 3.4 of the IMO IMDG Code.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: false</b></div></root>",
                                    "title": "Is Limited Quantity"
                                  },
                                  "is_excepted_quantity": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ],
                                    "example": false,
                                    "description": "<root><div><label>description</label>:<b>Indicates if the dangerous goods can be transported as excepted quantity in accordance with Chapter 3.5 of the IMO IMDG Code.</b></div><div><label>businessTerm</label>:<b>Is Excepted Quantity </b></div><div><label>businessDefinition</label>:<b>Indicates if the dangerous goods can be transported as excepted quantity in accordance with Chapter 3.5 of the IMO IMDG Code.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: false</b></div></root>",
                                    "title": "Is Excepted Quantity "
                                  },
                                  "is_salvage_packings": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ],
                                    "example": false,
                                    "description": "<root><div><label>description</label>:<b>Indicates if the cargo has special packaging for the transport, recovery or disposal of damaged, defective, leaking or nonconforming hazardous materials packages, or hazardous materials that have spilled or leaked.</b></div><div><label>businessTerm</label>:<b>Is Salvage Packings</b></div><div><label>businessDefinition</label>:<b>Indicates if the cargo has special packaging for the transport, recovery or disposal of damaged, defective, leaking or nonconforming hazardous materials packages, or hazardous materials that have spilled or leaked.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: false</b></div></root>",
                                    "title": "Is Salvage Packings"
                                  },
                                  "is_empty_uncleaned_residue": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ],
                                    "example": false,
                                    "description": "<root><div><label>description</label>:<b>Indicates if the cargo is residue.</b></div><div><label>businessTerm</label>:<b>Is Empty Uncleaned Residue</b></div><div><label>businessDefinition</label>:<b>Indicates if the cargo is residue.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: false</b></div></root>",
                                    "title": "Is Empty Uncleaned Residue"
                                  },
                                  "is_waste": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ],
                                    "example": false,
                                    "description": "<root><div><label>description</label>:<b>Indicates if waste is being shipped</b></div><div><label>businessTerm</label>:<b>Is Waste</b></div><div><label>businessDefinition</label>:<b>Indicates if waste is being shipped</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: false</b></div></root>",
                                    "title": "Is Waste"
                                  },
                                  "is_hot": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ],
                                    "example": false,
                                    "description": "<root><div><label>description</label>:<b>Indicates if high temperature cargo is shipped.</b></div><div><label>businessTerm</label>:<b>Is Hot</b></div><div><label>businessDefinition</label>:<b>Indicates if high temperature cargo is shipped.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: false</b></div></root>",
                                    "title": "Is Hot"
                                  },
                                  "is_competent_authority_approval_provided": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ],
                                    "example": false,
                                    "description": "<root><div><label>description</label>:<b>Indicates if the cargo require approval from authorities</b></div><div><label>businessTerm</label>:<b>Is Competent Authority Approval Provided</b></div><div><label>businessDefinition</label>:<b>Indicates if the cargo require approval from authorities</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: false</b></div></root>",
                                    "title": "Is Competent Authority Approval Provided"
                                  },
                                  "competent_authority_approval": {
                                    "type": [
                                      "string",
                                      "null"
                                    ],
                                    "pattern": "^\\S+(\\s+\\S+)*$",
                                    "maxLength": 70,
                                    "example": "{Name and reference...}",
                                    "description": "<root><div><label>description</label>:<b>Name and reference number of the competent authority providing the approval.</b></div><div><label>businessTerm</label>:<b>Competent Authority Approval</b></div><div><label>businessDefinition</label>:<b>Name and reference number of the competent authority providing the approval.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 70 \\nexample: {Name and reference...}</b></div></root>",
                                    "title": "Competent Authority Approval"
                                  },
                                  "segregation_groups": {
                                    "type": [
                                      "array",
                                      "null"
                                    ],
                                    "items": {
                                      "type": [
                                        "string",
                                        "null"
                                      ],
                                      "maxLength": 2,
                                      "example": 12
                                    },
                                    "description": "<root><div><label>description</label>:<b>List of the segregation groups applicable to specific hazardous goods according to the IMO IMDG Code. Condition: only applicable to specific hazardous goods. \\nGrouping of Dangerous Goods having certain similar chemical properties. Possible values are: \\n \\n1 (Acids) \\n2 (Ammonium Compounds) \\n3 (Bromates) \\n4 (Chlorates) \\n5 (Chlorites) \\n6 (Cyanides) \\n7 (Heavy metals and their salts) \\n8 (Hypochlorites) \\n9 (Lead and its compounds) \\n10 (Liquid halogenated hydrocarbons) \\n11 (Mercury and mercury compounds) \\n12 (Nitrites and their mixtures) \\n13 (Perchlorates) \\n14 (Permanganates) \\n15 (Powdered metals) \\n16 (Peroxides), \\n17 (Azides) \\n18 (Alkalis)</b></div><div><label>businessTerm</label>:<b>Segregation Groups</b></div><div><label>businessDefinition</label>:<b>List of the segregation groups applicable to specific hazardous goods according to the IMO IMDG Code. Condition: only applicable to specific hazardous goods. \\nGrouping of Dangerous Goods having certain similar chemical properties. Possible values are: \\n \\n1 (Acids) \\n2 (Ammonium Compounds) \\n3 (Bromates) \\n4 (Chlorates) \\n5 (Chlorites) \\n6 (Cyanides) \\n7 (Heavy metals and their salts) \\n8 (Hypochlorites) \\n9 (Lead and its compounds) \\n10 (Liquid halogenated hydrocarbons) \\n11 (Mercury and mercury compounds) \\n12 (Nitrites and their mixtures) \\n13 (Perchlorates) \\n14 (Permanganates) \\n15 (Powdered metals) \\n16 (Peroxides), \\n17 (Azides) \\n18 (Alkalis)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 2 \\nexample: 12</b></div></root>",
                                    "title": "Segregation Groups"
                                  },
                                  "inner_packaging": {
                                    "type": [
                                      "array",
                                      "null"
                                    ],
                                    "items": {
                                      "type": "object",
                                      "additionalProperties": false,
                                      "properties": {
                                        "quantity": {
                                          "type": "integer",
                                          "format": "int64",
                                          "minLength": 1,
                                          "description": "<root><div><label>description</label>:<b>Count of Inner Packagings of the referenced Dangerous Goods.</b></div><div><label>businessTerm</label>:<b>Quantity </b></div><div><label>businessDefinition</label>:<b>Count of Inner Packagings of the referenced Dangerous Goods.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 20</b></div></root>",
                                          "title": "Quantity "
                                        },
                                        "material": {
                                          "type": "string",
                                          "example": 20,
                                          "description": "<root><div><label>description</label>:<b>The material used for the Inner Packaging of the referenced Dangerous Goods.</b></div><div><label>businessTerm</label>:<b>Material</b></div><div><label>businessDefinition</label>:<b>The material used for the Inner Packaging of the referenced Dangerous Goods.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\nexample: Plastic</b></div></root>",
                                          "title": "Material",
                                          "minLength": 1
                                        },
                                        "description": {
                                          "type": "string",
                                          "maxLength": 100,
                                          "example": "Plastic",
                                          "description": "<root><div><label>description</label>:<b>Description of the packaging.</b></div><div><label>businessTerm</label>:<b>Description</b></div><div><label>businessDefinition</label>:<b>Description of the packaging.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\nexample: Wowen plastic water resistant Bag</b></div></root>",
                                          "title": "Description",
                                          "minLength": 1
                                        }
                                      },
                                      "required": [
                                        "quantity",
                                        "material",
                                        "description"
                                      ]
                                    },
                                    "description": "<root><div><label>description</label>:<b>A list of Inner Packings contained inside this outer packaging/overpack.</b></div><div><label>businessTerm</label>:<b>Inner Packagings</b></div><div><label>businessDefinition</label>:<b>A list of Inner Packings contained inside this outer packaging/overpack.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minLength: 1</b></div></root>",
                                    "title": "Inner Packagings"
                                  },
                                  "emergency_contact": {
                                    "type": [
                                      "array",
                                      "null"
                                    ],
                                    "items": {
                                      "type": "object",
                                      "additionalProperties": false,
                                      "properties": {
                                        "contact": {
                                          "type": "string",
                                          "maxLength": 255,
                                          "description": "<root><div><label>description</label>:<b>Name of the Contact person during an emergency.</b></div><div><label>businessTerm</label>:<b>Contact</b></div><div><label>businessDefinition</label>:<b>Name of the Contact person during an emergency.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 255</b></div></root>",
                                          "title": "Contact",
                                          "minLength": 1
                                        },
                                        "provider": {
                                          "type": [
                                            "string",
                                            "null"
                                          ],
                                          "maxLength": 255,
                                          "description": "<root><div><label>description</label>:<b>Name of the third party vendor providing emergency support</b></div><div><label>businessTerm</label>:<b>Provider</b></div><div><label>businessDefinition</label>:<b>Name of the third party vendor providing emergency support</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 255</b></div></root>",
                                          "title": "Provider"
                                        },
                                        "phone": {
                                          "type": "string",
                                          "pattern": "^\\S+(\\s+\\S+)*$",
                                          "maxLength": 30,
                                          "example": "+45 70262970",
                                          "description": "<root><div><label>description</label>:<b>Phone number for the contact</b></div><div><label>businessTerm</label>:<b>Phone</b></div><div><label>businessDefinition</label>:<b>Phone number for the contact</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 30 \\nexample: +45 70262970</b></div></root>",
                                          "title": "Phone",
                                          "minLength": 1
                                        },
                                        "ref_no": {
                                          "type": [
                                            "string",
                                            "null"
                                          ],
                                          "maxLength": 255,
                                          "example": 12234,
                                          "description": "<root><div><label>description</label>:<b>Contract reference for the emergency support provided by an external third party vendor.</b></div><div><label>businessTerm</label>:<b>Reference Number</b></div><div><label>businessDefinition</label>:<b>Contract reference for the emergency support provided by an external third party vendor.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 255 \\nexample: 12234</b></div></root>",
                                          "title": "Reference Number"
                                        }
                                      },
                                      "required": [
                                        "contact",
                                        "phone"
                                      ]
                                    },
                                    "description": "<root><div><label>description</label>:<b>24 hr emergency contact details</b></div><div><label>businessTerm</label>:<b>Emergency Contact Details</b></div><div><label>businessDefinition</label>:<b>24 hr emergency contact details</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                                    "title": "Emergency Contact Details"
                                  },
                                  "ems_no": {
                                    "type": [
                                      "string",
                                      "null"
                                    ],
                                    "maxLength": 7,
                                    "example": "F-A S-Q",
                                    "description": "<root><div><label>description</label>:<b>The emergency schedule identified in the IMO EmS Guide – Emergency Response Procedures for Ships Carrying Dangerous Goods. Comprises 2 values; 1 for spillage and 1 for fire. Possible values spillage: S-A to S-Z. Possible values fire: F-A to F-Z.</b></div><div><label>businessTerm</label>:<b>EMS Number</b></div><div><label>businessDefinition</label>:<b>The emergency schedule identified in the IMO EmS Guide – Emergency Response Procedures for Ships Carrying Dangerous Goods. Comprises 2 values; 1 for spillage and 1 for fire. Possible values spillage: S-A to S-Z. Possible values fire: F-A to F-Z.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 7 \\nexample: F-A S-Q</b></div></root>",
                                    "title": "EMS Number"
                                  },
                                  "end_of_holding_time": {
                                    "type": [
                                      "string",
                                      "null"
                                    ],
                                    "format": "date",
                                    "example": "2021-09-03",
                                    "description": "<root><div><label>description</label>:<b>Date by when the refrigerated liquid needs to be delivered.</b></div><div><label>businessTerm</label>:<b>End of Holding Time</b></div><div><label>businessDefinition</label>:<b>Date by when the refrigerated liquid needs to be delivered.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 2021-09-03</b></div></root>",
                                    "title": "End of Holding Time"
                                  },
                                  "fumigation_dt": {
                                    "type": [
                                      "string",
                                      "null"
                                    ],
                                    "format": "date-time",
                                    "example": "2021-09-03T09:03:00-02:00",
                                    "description": "<root><div><label>description</label>:<b>Date & time when the container was fumigated</b></div><div><label>businessTerm</label>:<b>Fumigation Date Time</b></div><div><label>businessDefinition</label>:<b>Date & time when the container was fumigated</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 2021-09-03T09:03:00-02:00</b></div></root>",
                                    "title": "Fumigation Date Time"
                                  },
                                  "is_reportable_quantity": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ],
                                    "example": false,
                                    "description": "<root><div><label>description</label>:<b>Indicates if a container of hazardous material is at the reportable quantity level. If TRUE, a report to the relevant authority must be made in case of spill.</b></div><div><label>businessTerm</label>:<b>Is Reportable Quantity</b></div><div><label>businessDefinition</label>:<b>Indicates if a container of hazardous material is at the reportable quantity level. If TRUE, a report to the relevant authority must be made in case of spill.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: false</b></div></root>",
                                    "title": "Is Reportable Quantity"
                                  },
                                  "inhalation_zone": {
                                    "type": [
                                      "string",
                                      "null"
                                    ],
                                    "maxLength": 1,
                                    "example": "A",
                                    "description": "<root><div><label>description</label>:<b>The zone classification of the toxicity of the inhalant. Possible values are: \\n \\nA (Hazard Zone A) can be asigned to specific gases and liquids \\nB (Hazard Zone B) can be asigned to specific gases and liquids \\nC (Hazard Zone C) can only be asigned to specific gases \\nD (Hazard Zone D) can only be asigned to specific gases</b></div><div><label>businessTerm</label>:<b>Inhalation Zone</b></div><div><label>businessDefinition</label>:<b>The zone classification of the toxicity of the inhalant. Possible values are: \\n \\nA (Hazard Zone A) can be asigned to specific gases and liquids \\nB (Hazard Zone B) can be asigned to specific gases and liquids \\nC (Hazard Zone C) can only be asigned to specific gases \\nD (Hazard Zone D) can only be asigned to specific gases</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 1 \\nminLength: 1 \\nexample: A</b></div></root>",
                                    "title": "Inhalation Zone"
                                  },
                                  "gross_weight": {
                                    "type": [
                                      "array",
                                      "null"
                                    ],
                                    "items": {
                                      "type": "object",
                                      "additionalProperties": false,
                                      "properties": {
                                        "value": {
                                          "type": "number",
                                          "format": "double",
                                          "example": 12000,
                                          "minimum": 0,
                                          "exclusiveMinimum": true,
                                          "description": "<root><div><label>description</label>:<b>The grand total weight of the DG cargo and weight per UNNumber/NANumber including packaging items being carried, which can be expressed in imperial or metric terms, as provided by the shipper.</b></div><div><label>businessTerm</label>:<b>DG Gross Weight Value</b></div><div><label>businessDefinition</label>:<b>The grand total weight of the DG cargo and weight per UNNumber/NANumber including packaging items being carried, which can be expressed in imperial or metric terms, as provided by the shipper.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 12000 \\nminimum: 0 \\nexclusiveMinimum: true</b></div></root>",
                                          "title": "DG Gross Weight Value"
                                        },
                                        "unit": {
                                          "type": "string",
                                          "enum": [
                                            "KGM",
                                            "LBR"
                                          ],
                                          "example": "KGM",
                                          "description": "<root><div><label>description</label>:<b>The unit of measure which can be expressed in imperial or metric terms \\n \\n- KGM (Kilograms) \\n- LBR (Pounds)</b></div><div><label>businessTerm</label>:<b>DG Gross Weight Unit</b></div><div><label>businessDefinition</label>:<b>The unit of measure which can be expressed in imperial or metric terms \\n \\n- KGM (Kilograms) \\n- LBR (Pounds)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: KGM \\nEnum: [ KGM, LBR ]</b></div></root>",
                                          "title": "DG Gross Weight Unit",
                                          "minLength": 1
                                        }
                                      },
                                      "required": [
                                        "value",
                                        "unit"
                                      ]
                                    },
                                    "description": "<root><div><label>description</label>:<b>Total weight of the goods carried, including packaging.</b></div><div><label>businessTerm</label>:<b>Gross Weight</b></div><div><label>businessDefinition</label>:<b>Total weight of the goods carried, including packaging.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                                    "title": "Gross Weight"
                                  },
                                  "net_weight": {
                                    "type": [
                                      "array",
                                      "null"
                                    ],
                                    "items": {
                                      "type": "object",
                                      "additionalProperties": false,
                                      "properties": {
                                        "value": {
                                          "type": "number",
                                          "format": "double",
                                          "example": 12000,
                                          "minimum": 0,
                                          "exclusiveMinimum": true,
                                          "description": "<root><div><label>description</label>:<b>Total weight of the goods carried, excluding packaging.</b></div><div><label>businessTerm</label>:<b>Net Weight Value</b></div><div><label>businessDefinition</label>:<b>Total weight of the goods carried, excluding packaging.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 12000 \\nminimum: 0 \\nexclusiveMinimum: true</b></div></root>",
                                          "title": "Net Weight Value"
                                        },
                                        "unit": {
                                          "type": "string",
                                          "enum": [
                                            "KGM",
                                            "LBR"
                                          ],
                                          "example": "KGM",
                                          "description": "<root><div><label>description</label>:<b>Unit of measure used to describe the netWeight. Possible values are \\n \\n- KGM (Kilograms) \\n- LBR (Pounds)</b></div><div><label>businessTerm</label>:<b>Net Weight Unit</b></div><div><label>businessDefinition</label>:<b>Unit of measure used to describe the netWeight. Possible values are \\n \\n- KGM (Kilograms) \\n- LBR (Pounds)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: KGM \\nEnum: [ KGM, LBR ]</b></div></root>",
                                          "title": "Net Weight Unit",
                                          "minLength": 1
                                        }
                                      },
                                      "required": [
                                        "value",
                                        "unit"
                                      ]
                                    },
                                    "description": "<root><div><label>description</label>:<b>Total weight of the goods carried, excluding packaging.</b></div><div><label>businessTerm</label>:<b>Net Weight</b></div><div><label>businessDefinition</label>:<b>Total weight of the goods carried, excluding packaging.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                                    "title": "Net Weight"
                                  },
                                  "net_explosive_content": {
                                    "type": [
                                      "array",
                                      "null"
                                    ],
                                    "items": {
                                      "type": "object",
                                      "additionalProperties": false,
                                      "properties": {
                                        "value": {
                                          "type": "number",
                                          "format": "double",
                                          "example": 12000,
                                          "minimum": 0,
                                          "exclusiveMinimum": true,
                                          "description": "<root><div><label>description</label>:<b>The total weight of the explosive substances, without the packaging’s, casings, etc.</b></div><div><label>businessTerm</label>:<b>Net Explosive Content Value</b></div><div><label>businessDefinition</label>:<b>The total weight of the explosive substances, without the packaging’s, casings, etc.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 12000 \\nminimum: 0 \\nexclusiveMinimum: true</b></div></root>",
                                          "title": "Net Explosive Content Value"
                                        },
                                        "unit": {
                                          "type": "string",
                                          "example": "KGM",
                                          "enum": [
                                            "KGM",
                                            "LBR"
                                          ],
                                          "description": "<root><div><label>description</label>:<b>Unit of measure used to describe the netExplosiveWeight. Possible values are \\n \\n- KGM (Kilograms) \\n- GRM (Grams)</b></div><div><label>businessTerm</label>:<b>Net Explosive Content Unit</b></div><div><label>businessDefinition</label>:<b>Unit of measure used to describe the netExplosiveWeight. Possible values are \\n \\n- KGM (Kilograms) \\n- GRM (Grams)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: KGM \\nEnum: [ KGM, LBR ]</b></div></root>",
                                          "title": "Net Explosive Content Unit",
                                          "minLength": 1
                                        }
                                      },
                                      "required": [
                                        "value",
                                        "unit"
                                      ]
                                    },
                                    "description": "<root><div><label>description</label>:<b>The total weight of the explosive substances, without the packaging’s, casings, etc.</b></div><div><label>businessTerm</label>:<b>Net Explosive Content</b></div><div><label>businessDefinition</label>:<b>The total weight of the explosive substances, without the packaging’s, casings, etc.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                                    "title": "Net Explosive Content"
                                  },
                                  "volume": {
                                    "type": [
                                      "array",
                                      "null"
                                    ],
                                    "items": {
                                      "type": "object",
                                      "additionalProperties": false,
                                      "properties": {
                                        "value": {
                                          "type": "number",
                                          "format": "double",
                                          "example": 2.4,
                                          "description": "<root><div><label>description</label>:<b>The volume of the referenced dangerous goods.</b></div><div><label>businessTerm</label>:<b>DG Volume Value</b></div><div><label>businessDefinition</label>:<b>The volume of the referenced dangerous goods.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 2.4</b></div></root>",
                                          "title": "DG Volume Value"
                                        },
                                        "unit": {
                                          "type": "string",
                                          "enum": [
                                            "MTQ",
                                            "FTQ",
                                            "LTR"
                                          ],
                                          "example": "MTQ",
                                          "description": "<root><div><label>description</label>:<b>The unit of measure which can be expressed in either imperial or metric terms \\n \\n- FTQ (Cubic foot) \\n- MTQ (Cubic meter) \\n- LTR (Litre)</b></div><div><label>businessTerm</label>:<b>DG Volume Unit</b></div><div><label>businessDefinition</label>:<b>The unit of measure which can be expressed in either imperial or metric terms \\n \\n- FTQ (Cubic foot) \\n- MTQ (Cubic meter) \\n- LTR (Litre)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: MTQ \\nEnum: [ MTQ, FTQ, LTR ]</b></div></root>",
                                          "title": "DG Volume Unit",
                                          "minLength": 1
                                        }
                                      },
                                      "required": [
                                        "value",
                                        "unit"
                                      ]
                                    },
                                    "description": "<root><div><label>description</label>:<b>The volume of the referenced dangerous goods. Condition: only applicable to liquids and gas.</b></div><div><label>businessTerm</label>:<b>Volume</b></div><div><label>businessDefinition</label>:<b>The volume of the referenced dangerous goods. Condition: only applicable to liquids and gas.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                                    "title": "Volume"
                                  },
                                  "limits": {
                                    "type": [
                                      "array",
                                      "null"
                                    ],
                                    "items": {
                                      "type": "object",
                                      "additionalProperties": false,
                                      "properties": {
                                        "temperature_unit": {
                                          "type": "string",
                                          "enum": [
                                            "CEL",
                                            "FAH"
                                          ],
                                          "example": "CEL",
                                          "description": "<root><div><label>description</label>:<b>The unit for all attributes in the limits structure in Celsius or Fahrenheit \\n \\n- CEL (Celsius) \\n- FAH (Fahrenheit)</b></div><div><label>businessTerm</label>:<b>Temperature Unit</b></div><div><label>businessDefinition</label>:<b>The unit for all attributes in the limits structure in Celsius or Fahrenheit \\n \\n- CEL (Celsius) \\n- FAH (Fahrenheit)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: CEL \\nEnum: [ CEL, FAH ]</b></div></root>",
                                          "title": "Temperature Unit",
                                          "minLength": 1
                                        },
                                        "flash_point": {
                                          "type": [
                                            "number",
                                            "null"
                                          ],
                                          "format": "double",
                                          "example": 42,
                                          "description": "<root><div><label>description</label>:<b>Lowest temperature at which a chemical can vaporize to form an ignitable mixture in air. Condition: only applicable to specific hazardous goods according to the IMO IMDG Code amendment version 41-22.</b></div><div><label>businessTerm</label>:<b>Flash Point</b></div><div><label>businessDefinition</label>:<b>Lowest temperature at which a chemical can vaporize to form an ignitable mixture in air. Condition: only applicable to specific hazardous goods according to the IMO IMDG Code amendment version 41-22.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 42</b></div></root>",
                                          "title": "Flash Point"
                                        },
                                        "transport_control_temperature": {
                                          "type": [
                                            "number",
                                            "null"
                                          ],
                                          "format": "double",
                                          "example": 24.1,
                                          "description": "<root><div><label>description</label>:<b>Maximum temperature at which certain substance (such as organic peroxides and self-reactive and related substances) can be safely transported for a prolonged period.</b></div><div><label>businessTerm</label>:<b>Transport Control Temperature</b></div><div><label>businessDefinition</label>:<b>Maximum temperature at which certain substance (such as organic peroxides and self-reactive and related substances) can be safely transported for a prolonged period.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 24.1</b></div></root>",
                                          "title": "Transport Control Temperature"
                                        },
                                        "transport_emergency_temperature": {
                                          "type": [
                                            "number",
                                            "null"
                                          ],
                                          "format": "double",
                                          "example": 74.1,
                                          "description": "<root><div><label>description</label>:<b>Temperature at which emergency procedures shall be implemented</b></div><div><label>businessTerm</label>:<b>Transport Emergency Temperature</b></div><div><label>businessDefinition</label>:<b>Temperature at which emergency procedures shall be implemented</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 74.1</b></div></root>",
                                          "title": "Transport Emergency Temperature"
                                        },
                                        "sadt": {
                                          "type": [
                                            "number",
                                            "null"
                                          ],
                                          "format": "double",
                                          "example": 54.1,
                                          "description": "<root><div><label>description</label>:<b>Lowest temperature in which self-accelerating decomposition may occur in a substance</b></div><div><label>businessTerm</label>:<b>SADT</b></div><div><label>businessDefinition</label>:<b>Lowest temperature in which self-accelerating decomposition may occur in a substance</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 54.1</b></div></root>",
                                          "title": "SADT"
                                        },
                                        "sapt": {
                                          "type": [
                                            "number",
                                            "null"
                                          ],
                                          "format": "double",
                                          "example": 70,
                                          "description": "<root><div><label>description</label>:<b>Lowest temperature in which self-accelerating polymerization may occur in a substance</b></div><div><label>businessTerm</label>:<b>SAPT</b></div><div><label>businessDefinition</label>:<b>Lowest temperature in which self-accelerating polymerization may occur in a substance</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 70</b></div></root>",
                                          "title": "SAPT"
                                        }
                                      },
                                      "required": [
                                        "temperature_unit"
                                      ]
                                    },
                                    "description": "<root><div><label>description</label>:<b>Limits for the Dangerous Goods. The same Temperature Unit needs to apply to all attributes in this structure.</b></div><div><label>businessTerm</label>:<b>Limits</b></div><div><label>businessDefinition</label>:<b>Limits for the Dangerous Goods. The same Temperature Unit needs to apply to all attributes in this structure.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                                    "title": "Limits"
                                  },
                                  "reference_standard_type": {
                                    "type": "string",
                                    "example": "UN Number",
                                    "enum": [
                                      "UN Number",
                                      "NA Number"
                                    ],
                                    "description": "<root><div><label>description</label>:<b>Reference standard type: UN Number or NA Number</b></div><div><label>businessTerm</label>:<b>Reference Standard Type</b></div><div><label>businessDefinition</label>:<b>Reference standard type: UN Number or NA Number</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: UN Number \\nEnum: [ UN Number, NA Number ]</b></div></root>",
                                    "title": "Reference Standard Type",
                                    "minLength": 1
                                  },
                                  "reference_number": {
                                    "type": "string",
                                    "pattern": "^\\d{4}$",
                                    "example": 1463,
                                    "description": "<root><div><label>description</label>:<b>Reference number of the standard type: UN Number or NA Number selected. \\n \\nUN Number: United Nations Dangerous Goods Identifier (UNDG) assigned by the UN Sub-Committee of Experts on the Transport of Dangerous Goods and shown in the IMO IMDG. \\n \\nNA Number: Four-digit number that is assigned to dangerous, hazardous, and harmful substances by the United States Department of Transportation.</b></div><div><label>businessTerm</label>:<b>Reference Number</b></div><div><label>businessDefinition</label>:<b>Reference number of the standard type: UN Number or NA Number selected. \\n \\nUN Number: United Nations Dangerous Goods Identifier (UNDG) assigned by the UN Sub-Committee of Experts on the Transport of Dangerous Goods and shown in the IMO IMDG. \\n \\nNA Number: Four-digit number that is assigned to dangerous, hazardous, and harmful substances by the United States Department of Transportation.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\d{4}$ \\nexample: 1463</b></div></root>",
                                    "title": "Reference Number",
                                    "minLength": 1
                                  }
                                },
                                "required": [
                                  "proper_shipping_nm",
                                  "reference_standard_type",
                                  "reference_number"
                                ]
                              },
                              "description": "<root><div><label>description</label>:<b>Specification for Dangerous Goods. It is mandatory to either provide the unNumber or the naNumber. Dangerous Goods is based on IMDG Amendment Version 41-22.</b></div><div><label>businessTerm</label>:<b>Dangerous Goods</b></div><div><label>businessDefinition</label>:<b>Specification for Dangerous Goods. It is mandatory to either provide the unNumber or the naNumber. Dangerous Goods is based on IMDG Amendment Version 41-22.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                              "title": "Dangerous Goods"
                            }
                          },
                          "required": [
                            "package_no",
                            "description"
                          ]
                        },
                        "description": "<root><div><label>description</label>:<b>Object for outer packaging/overpack specification. Examples of overpacks are a number of packages stacked on to a pallet and secured by strapping or placed in a protective outer packaging such as a box or crate to form one unit for the convenience of handling and stowage during transport. It is an array of the attributes below.</b></div><div><label>businessTerm</label>:<b>Outer Packaging</b></div><div><label>businessDefinition</label>:<b>Object for outer packaging/overpack specification. Examples of overpacks are a number of packages stacked on to a pallet and secured by strapping or placed in a protective outer packaging such as a box or crate to form one unit for the convenience of handling and stowage during transport. It is an array of the attributes below.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                        "title": "Outer Packaging",
                        "minItems": 1
                      },
                      "customs_references": {
                        "type": [
                          "array",
                          "null"
                        ],
                        "items": {
                          "type": "object",
                          "additionalProperties": false,
                          "properties": {
                            "type": {
                              "type": "string",
                              "pattern": "^\\S+(\\s+\\S+)*$",
                              "maxLength": 50,
                              "example": "ACID",
                              "description": "<root><div><label>description</label>:<b>The reference type code as defined in the relevant customs jurisdiction.</b></div><div><label>businessTerm</label>:<b>Customs References Type</b></div><div><label>businessDefinition</label>:<b>The reference type code as defined in the relevant customs jurisdiction.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 50 \\nexample: ACID</b></div></root>",
                              "title": "Customs References Type",
                              "minLength": 1
                            },
                            "country_cd": {
                              "type": "string",
                              "pattern": "^[A-Z]{2}$",
                              "minLength": 2,
                              "maxLength": 2,
                              "example": "DK",
                              "description": "<root><div><label>description</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>businessTerm</label>:<b>Customs References Country Code</b></div><div><label>businessDefinition</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}$ \\nminLength: 2 \\nmaxLength: 2 \\nexample: DK</b></div></root>",
                              "title": "Customs References Country Code"
                            },
                            "value": {
                              "type": "string",
                              "pattern": "^\\S+(\\s+\\S+)*$",
                              "maxLength": 100,
                              "example": 4988470982020120000,
                              "description": "<root><div><label>description</label>:<b>The value of the customsReference</b></div><div><label>businessTerm</label>:<b>Customs References Value</b></div><div><label>businessDefinition</label>:<b>The value of the customsReference</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: 4988470982020120017</b></div></root>",
                              "title": "Customs References Value",
                              "minLength": 1
                            }
                          },
                          "required": [
                            "type",
                            "country_cd",
                            "value"
                          ]
                        },
                        "description": "<root><div><label>description</label>:<b>Reference associated with customs and/or excise purposes required by the relevant authorities for the import, export, or transit of the goods. \\n \\nA (small) list of examples: \\n \\nType  Country Description \\nACID  EG  Advance Cargo Information Declaration in Egypt \\nCERS CA  Canadian Export Reporting System \\nITN  US  Internal Transaction Number in US \\nPEB ID  PEB reference number \\nCSN  IN  Cargo Summary Notification (CSN) \\nAllowed combinations of type and country are maintained in GitHub.</b></div><div><label>businessTerm</label>:<b>Customs References</b></div><div><label>businessDefinition</label>:<b>Reference associated with customs and/or excise purposes required by the relevant authorities for the import, export, or transit of the goods. \\n \\nA (small) list of examples: \\n \\nType  Country Description \\nACID  EG  Advance Cargo Information Declaration in Egypt \\nCERS CA  Canadian Export Reporting System \\nITN  US  Internal Transaction Number in US \\nPEB ID  PEB reference number \\nCSN  IN  Cargo Summary Notification (CSN) \\nAllowed combinations of type and country are maintained in GitHub.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                        "title": "Customs References"
                      }
                    },
                    "required": [
                      "weight",
                      "weight_unit",
                      "outer_packaging"
                    ]
                  },
                  "description": "<root><div><label>description</label>:<b>A cargoItem is the smallest unit used by stuffing. A cargoItem cannot be split across containers.</b></div><div><label>businessTerm</label>:<b>Cargo Items</b></div><div><label>businessDefinition</label>:<b>A cargoItem is the smallest unit used by stuffing. A cargoItem cannot be split across containers.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                  "title": "Cargo Items",
                  "minItems": 1
                }
              },
              "required": [
                "booking_ref",
                "weight",
                "weight_unit",
                "goods_description",
                "hscode",
                "cargo_items"
              ]
            },
            "description": "<root><div><label>description</label>:<b>Defines a list of CargoItems belonging together and the associated Booking. A ConsignmentItem can be split across multiple containers (UtilizedTransportEquipment) by referencing multiple CargoItems</b></div><div><label>businessTerm</label>:<b>Consigment Items</b></div><div><label>businessDefinition</label>:<b>Defines a list of CargoItems belonging together and the associated Booking. A ConsignmentItem can be split across multiple containers (UtilizedTransportEquipment) by referencing multiple CargoItems</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "Consigment Items",
            "minItems": 1
          },
          "utilized_transport_equipment": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "equipment": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "equipment_ref": {
                        "type": "string",
                        "pattern": "^\\S+(\\s+\\S+)*$",
                        "maxLength": 11,
                        "example": "APZU4812090",
                        "description": "<root><div><label>description</label>:<b>The unique identifier for the equipment, which should follow the BIC ISO Container Identification Number where possible. According to ISO 6346, a container identification code consists of a 4-letter prefix and a 7-digit number (composed of a 3-letter owner code, a category identifier, a serial number, and a check-digit). \\n \\nIf a container does not comply with ISO 6346, it is suggested to follow Recommendation #2: Containers with non-ISO identification from SMDG.</b></div><div><label>businessTerm</label>:<b>Equiment Reference</b></div><div><label>businessDefinition</label>:<b>The unique identifier for the equipment, which should follow the BIC ISO Container Identification Number where possible. According to ISO 6346, a container identification code consists of a 4-letter prefix and a 7-digit number (composed of a 3-letter owner code, a category identifier, a serial number, and a check-digit). \\n \\nIf a container does not comply with ISO 6346, it is suggested to follow Recommendation #2: Containers with non-ISO identification from SMDG.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 11 \\nexample: APZU4812090</b></div></root>",
                        "title": "Equiment Reference",
                        "minLength": 1
                      },
                      "iso_equipment_cd": {
                        "type": [
                          "string",
                          "null"
                        ],
                        "pattern": "^\\S+(\\s+\\S+)*$",
                        "maxLength": 4,
                        "example": "22GP",
                        "description": "<root><div><label>description</label>:<b>Unique code for the different equipment size and type used to transport commodities. The code can refer to either the ISO size type (e.g. 22G1) or the ISO type group (e.g. 22GP) following the ISO 6346 standard.</b></div><div><label>businessTerm</label>:<b>ISO Equipment Code</b></div><div><label>businessDefinition</label>:<b>Unique code for the different equipment size and type used to transport commodities. The code can refer to either the ISO size type (e.g. 22G1) or the ISO type group (e.g. 22GP) following the ISO 6346 standard.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 4 \\nexample: 22GP</b></div></root>",
                        "title": "ISO Equipment Code"
                      },
                      "tare_weight": {
                        "type": [
                          "number",
                          "null"
                        ],
                        "format": "double",
                        "minimum": 0,
                        "exclusiveMinimum": true,
                        "example": 4800,
                        "description": "<root><div><label>description</label>:<b>The weight of an empty container (gross container weight).</b></div><div><label>businessTerm</label>:<b>Tare Weight</b></div><div><label>businessDefinition</label>:<b>The weight of an empty container (gross container weight).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nexclusiveMinimum: true \\nexample: 4800</b></div></root>",
                        "title": "Tare Weight"
                      },
                      "weight_unit": {
                        "type": [
                          "string",
                          "null"
                        ],
                        "example": "KGM",
                        "enum": [
                          "KGM",
                          "LBR"
                        ],
                        "description": "<root><div><label>description</label>:<b>The unit of measure which can be expressed in imperial or metric terms \\n- KGM (Kilograms) \\n- LBR (Pounds) \\nConditional: Mandatory to provide if tareWeight is provided</b></div><div><label>businessTerm</label>:<b>Weight Unit</b></div><div><label>businessDefinition</label>:<b>The unit of measure which can be expressed in imperial or metric terms \\n- KGM (Kilograms) \\n- LBR (Pounds) \\nConditional: Mandatory to provide if tareWeight is provided</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: KGM \\nEnum: [ KGM, LBR ]</b></div></root>",
                        "title": "Weight Unit"
                      }
                    },
                    "required": [
                      "equipment_ref"
                    ]
                  },
                  "description": "<root><div><label>description</label>:<b>Used for storing cargo in/on during transport. The equipment size/type is defined by the ISO 6346 code. The most common equipment size/type is 20'/40'/45' DRY Freight Container, but several different versions exist.</b></div><div><label>businessTerm</label>:<b>Equipment</b></div><div><label>businessDefinition</label>:<b>Used for storing cargo in/on during transport. The equipment size/type is defined by the ISO 6346 code. The most common equipment size/type is 20'/40'/45' DRY Freight Container, but several different versions exist.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                  "title": "Equipment",
                  "minItems": 1
                },
                "cargo_gross_weight": {
                  "type": "number",
                  "format": "double",
                  "example": 12000,
                  "minimum": 0,
                  "exclusiveMinimum": true,
                  "description": "<root><div><label>description</label>:<b>The grand total weight of the cargo and weight per container including packaging, which can be expressed in imperial or metric terms, as provided by the shipper. Excludes the tare weight of the container.</b></div><div><label>businessTerm</label>:<b>Cargo Gross Weight</b></div><div><label>businessDefinition</label>:<b>The grand total weight of the cargo and weight per container including packaging, which can be expressed in imperial or metric terms, as provided by the shipper. Excludes the tare weight of the container.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 12000 \\nminimum: 0 \\nexclusiveMinimum: true</b></div></root>",
                  "title": "Cargo Gross Weight"
                },
                "cargo_gross_weight_unit": {
                  "type": "string",
                  "example": "KGM",
                  "enum": [
                    "KGM",
                    "LBR"
                  ],
                  "description": "<root><div><label>description</label>:<b>The unit of measure which can be expressed in imperial or metric terms \\n \\n- KGM (Kilograms) \\n- LBR (Pounds)</b></div><div><label>businessTerm</label>:<b>Cargo Gross Weight Unit</b></div><div><label>businessDefinition</label>:<b>The unit of measure which can be expressed in imperial or metric terms \\n \\n- KGM (Kilograms) \\n- LBR (Pounds)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: KGM \\nEnum: [ KGM, LBR ]</b></div></root>",
                  "title": "Cargo Gross Weight Unit",
                  "minLength": 1
                },
                "cargo_gross_volume": {
                  "type": [
                    "number",
                    "null"
                  ],
                  "format": "double",
                  "example": 120,
                  "minimum": 0,
                  "description": "<root><div><label>description</label>:<b>The grand total volume of the cargo per container, which can be expressed in imperial or metric terms, as provided by the shipper.</b></div><div><label>businessTerm</label>:<b>Cargo Gross Volume</b></div><div><label>businessDefinition</label>:<b>The grand total volume of the cargo per container, which can be expressed in imperial or metric terms, as provided by the shipper.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 120 \\nminimum: 0</b></div></root>",
                  "title": "Cargo Gross Volume"
                },
                "cargo_gross_volume_unit": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "example": "MTQ",
                  "enum": [
                    "MTQ",
                    "FTQ"
                  ],
                  "description": "<root><div><label>description</label>:<b>The unit of measure which can be expressed in either imperial or metric terms \\n- FTQ (Cubic foot) \\n- MTQ (Cubic meter) \\nConditional: if cargoGrossVolume is provided then cargoGrossVolumeUnit is required</b></div><div><label>businessTerm</label>:<b>Cargo Gross Volume Unit</b></div><div><label>businessDefinition</label>:<b>The unit of measure which can be expressed in either imperial or metric terms \\n- FTQ (Cubic foot) \\n- MTQ (Cubic meter) \\nConditional: if cargoGrossVolume is provided then cargoGrossVolumeUnit is required</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: MTQ \\nEnum: [ MTQ, FTQ ]</b></div></root>",
                  "title": "Cargo Gross Volume Unit"
                },
                "is_shipper_owned": {
                  "type": "boolean",
                  "example": true,
                  "description": "<root><div><label>description</label>:<b>Indicates whether the container is shipper owned (SOC).</b></div><div><label>businessTerm</label>:<b>Is Shipper Owned</b></div><div><label>businessDefinition</label>:<b>Indicates whether the container is shipper owned (SOC).</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: true</b></div></root>",
                  "title": "Is Shipper Owned"
                },
                "is_non_operating_reefer": {
                  "type": [
                    "boolean",
                    "null"
                  ],
                  "example": true,
                  "description": "<root><div><label>description</label>:<b>If the equipment is a Reefer Container then setting this attribute will indicate that the container should be treated as a DRY container. Condition: Only applicable if ISOEquipmentCode shows a Reefer type.</b></div><div><label>businessTerm</label>:<b>Is Non Operating Reefer</b></div><div><label>businessDefinition</label>:<b>If the equipment is a Reefer Container then setting this attribute will indicate that the container should be treated as a DRY container. Condition: Only applicable if ISOEquipmentCode shows a Reefer type.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: true</b></div></root>",
                  "title": "Is Non Operating Reefer"
                },
                "active_reefer": {
                  "type": [
                    "array",
                    "null"
                  ],
                  "items": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "temperature_setpoint": {
                        "type": [
                          "number",
                          "null"
                        ],
                        "format": "double",
                        "example": -15,
                        "description": "<root><div><label>description</label>:<b>Target value of the temperature for the Reefer based on the cargo requirement.</b></div><div><label>businessTerm</label>:<b>Temperature Setpoint</b></div><div><label>businessDefinition</label>:<b>Target value of the temperature for the Reefer based on the cargo requirement.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: -15</b></div></root>",
                        "title": "Temperature Setpoint"
                      },
                      "temperature_unit": {
                        "type": [
                          "string",
                          "null"
                        ],
                        "example": "CEL",
                        "enum": [
                          "CEL",
                          "FAH"
                        ],
                        "description": "<root><div><label>description</label>:<b>The unit for temperature in Celsius or Fahrenheit \\n- CEL (Celsius) \\n- FAH (Fahrenheit) \\nCondition: Mandatory to provide if temperatureSetpoint is provided</b></div><div><label>businessTerm</label>:<b>Temperature Unit</b></div><div><label>businessDefinition</label>:<b>The unit for temperature in Celsius or Fahrenheit \\n- CEL (Celsius) \\n- FAH (Fahrenheit) \\nCondition: Mandatory to provide if temperatureSetpoint is provided</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: CEL \\nEnum: [ CEL, FAH ]</b></div></root>",
                        "title": "Temperature Unit"
                      },
                      "o2_setpoint": {
                        "type": [
                          "number",
                          "null"
                        ],
                        "format": "double",
                        "minimum": 0,
                        "maximum": 100,
                        "example": 75.3,
                        "description": "<root><div><label>description</label>:<b>The percentage of the controlled atmosphere O2 target value</b></div><div><label>businessTerm</label>:<b>O2 Setpoint</b></div><div><label>businessDefinition</label>:<b>The percentage of the controlled atmosphere O2 target value</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nmaximum: 100 \\nexample: 75.3</b></div></root>",
                        "title": "O2 Setpoint"
                      },
                      "co2_setpoint": {
                        "type": [
                          "number",
                          "null"
                        ],
                        "format": "double",
                        "minimum": 0,
                        "maximum": 100,
                        "example": 25,
                        "description": "<root><div><label>description</label>:<b>The percentage of the controlled atmosphere CO2 target value</b></div><div><label>businessTerm</label>:<b>CO2 Setpoint</b></div><div><label>businessDefinition</label>:<b>The percentage of the controlled atmosphere CO2 target value</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nmaximum: 100 \\nexample: 25</b></div></root>",
                        "title": "CO2 Setpoint"
                      },
                      "humidity_setpoint": {
                        "type": [
                          "number",
                          "null"
                        ],
                        "format": "double",
                        "minimum": 0,
                        "maximum": 100,
                        "example": 95.6,
                        "description": "<root><div><label>description</label>:<b>The percentage of the controlled atmosphere humidity target value</b></div><div><label>businessTerm</label>:<b>Humidity Setpoint</b></div><div><label>businessDefinition</label>:<b>The percentage of the controlled atmosphere humidity target value</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nmaximum: 100 \\nexample: 95.6</b></div></root>",
                        "title": "Humidity Setpoint"
                      },
                      "air_exchange_setpoint": {
                        "type": [
                          "number",
                          "null"
                        ],
                        "format": "double",
                        "minimum": 0,
                        "example": 15.4,
                        "description": "<root><div><label>description</label>:<b>Target value for the air exchange rate which is the rate at which outdoor air replaces indoor air within a Reefer container</b></div><div><label>businessTerm</label>:<b>Air Exchange Setpoint</b></div><div><label>businessDefinition</label>:<b>Target value for the air exchange rate which is the rate at which outdoor air replaces indoor air within a Reefer container</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minimum: 0 \\nexample: 15.4</b></div></root>",
                        "title": "Air Exchange Setpoint"
                      },
                      "air_exchange_unit": {
                        "type": [
                          "string",
                          "null"
                        ],
                        "example": "MTQ",
                        "enum": [
                          "MTQ",
                          "FTQ"
                        ],
                        "description": "<root><div><label>description</label>:<b>The unit for airExchange in metrics- or imperial- units per hour \\n- MQH (Cubic metre per hour) \\n- FQH (Cubic foot per hour) \\nNB: This is a conditional field. If airExchange is specified then this field is required</b></div><div><label>businessTerm</label>:<b>Air Exchange Unit </b></div><div><label>businessDefinition</label>:<b>The unit for airExchange in metrics- or imperial- units per hour \\n- MQH (Cubic metre per hour) \\n- FQH (Cubic foot per hour) \\nNB: This is a conditional field. If airExchange is specified then this field is required</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: MTQ \\nEnum: [ MTQ, FTQ ]</b></div></root>",
                        "title": "Air Exchange Unit "
                      },
                      "is_ventilation_open": {
                        "type": [
                          "boolean",
                          "null"
                        ],
                        "example": true,
                        "description": "<root><div><label>description</label>:<b>If true the ventilation orifice is Open - if false the ventilation orifice is closed</b></div><div><label>businessTerm</label>:<b>Is Ventilation Open</b></div><div><label>businessDefinition</label>:<b>If true the ventilation orifice is Open - if false the ventilation orifice is closed</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: true</b></div></root>",
                        "title": "Is Ventilation Open"
                      },
                      "is_drain_holes_open": {
                        "type": [
                          "boolean",
                          "null"
                        ],
                        "example": true,
                        "description": "<root><div><label>description</label>:<b>Is drainholes open on the container</b></div><div><label>businessTerm</label>:<b>Is Drain Holes Open</b></div><div><label>businessDefinition</label>:<b>Is drainholes open on the container</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: true</b></div></root>",
                        "title": "Is Drain Holes Open"
                      },
                      "is_bulb_mode": {
                        "type": [
                          "boolean",
                          "null"
                        ],
                        "example": true,
                        "description": "<root><div><label>description</label>:<b>Is special container setting for handling flower bulbs active</b></div><div><label>businessTerm</label>:<b>Is Bulb Mode</b></div><div><label>businessDefinition</label>:<b>Is special container setting for handling flower bulbs active</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: true</b></div></root>",
                        "title": "Is Bulb Mode"
                      },
                      "is_cold_treatment_required": {
                        "type": [
                          "boolean",
                          "null"
                        ],
                        "example": true,
                        "description": "<root><div><label>description</label>:<b>Indicator whether cargo requires cold treatment prior to loading at origin or during transit, but prior arrival at POD</b></div><div><label>businessTerm</label>:<b>Is Cold Treatment Required</b></div><div><label>businessDefinition</label>:<b>Indicator whether cargo requires cold treatment prior to loading at origin or during transit, but prior arrival at POD</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: true</b></div></root>",
                        "title": "Is Cold Treatment Required"
                      },
                      "is_controlled_atmosphere_required": {
                        "type": [
                          "boolean",
                          "null"
                        ],
                        "example": true,
                        "description": "<root><div><label>description</label>:<b>Indicator of whether cargo requires Controlled Atmosphere.</b></div><div><label>businessTerm</label>:<b>Is Controlled Atmosphere Required</b></div><div><label>businessDefinition</label>:<b>Indicator of whether cargo requires Controlled Atmosphere.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: true</b></div></root>",
                        "title": "Is Controlled Atmosphere Required"
                      }
                    }
                  },
                  "description": "<root><div><label>description</label>:<b>The specifications for a Reefer equipment. Condition: Only applicable whenisNonOperatingReefer is set to false</b></div><div><label>businessTerm</label>:<b>Active Reefer Settings</b></div><div><label>businessDefinition</label>:<b>The specifications for a Reefer equipment. Condition: Only applicable whenisNonOperatingReefer is set to false</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                  "title": "Active Reefer Settings"
                },
                "seals": {
                  "type": "array",
                  "minLength": 1,
                  "items": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "seal_number": {
                        "type": "string",
                        "maxLength": 15,
                        "description": "<root><div><label>description</label>:<b>Identifies a seal affixed to the container.</b></div><div><label>businessTerm</label>:<b>Seal Number</b></div><div><label>businessDefinition</label>:<b>Identifies a seal affixed to the container.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 15</b></div></root>",
                        "title": "Seal Number",
                        "minLength": 1
                      },
                      "seal_source": {
                        "type": [
                          "string",
                          "null"
                        ],
                        "maxLength": 5,
                        "example": "CUS",
                        "description": "<root><div><label>description</label>:<b>The source of the seal, namely who has affixed the seal. This attribute links to the Seal Source ID defined in the Seal Source reference data entity. Possible values are: \\n \\n- CAR (Carrier) \\n- SHI (Shipper) \\n- PHY (Phytosanitary) \\n- VET (Veterinary) \\n- CUS (Customs) \\nCondition: Conditional on type of commodity</b></div><div><label>businessTerm</label>:<b>Seal Source</b></div><div><label>businessDefinition</label>:<b>The source of the seal, namely who has affixed the seal. This attribute links to the Seal Source ID defined in the Seal Source reference data entity. Possible values are: \\n \\n- CAR (Carrier) \\n- SHI (Shipper) \\n- PHY (Phytosanitary) \\n- VET (Veterinary) \\n- CUS (Customs) \\nCondition: Conditional on type of commodity</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 5 \\nexample: CUS</b></div></root>",
                        "title": "Seal Source"
                      },
                      "seal_type": {
                        "type": [
                          "string",
                          "null"
                        ],
                        "maxLength": 5,
                        "example": "WIR",
                        "description": "<root><div><label>description</label>:<b>The type of seal. This attribute links to the Seal Type ID defined in the Seal Type reference data entity. Possible values are: \\n \\n- KLP (Keyless padlock) \\n- BLT (Bolt) \\n- WIR (Wire)</b></div><div><label>businessTerm</label>:<b>Seal Type</b></div><div><label>businessDefinition</label>:<b>The type of seal. This attribute links to the Seal Type ID defined in the Seal Type reference data entity. Possible values are: \\n \\n- KLP (Keyless padlock) \\n- BLT (Bolt) \\n- WIR (Wire)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 5 \\nexample: WIR</b></div></root>",
                        "title": "Seal Type"
                      }
                    },
                    "required": [
                      "seal_number"
                    ]
                  },
                  "description": "<root><div><label>description</label>:<b>Addresses the seal-related information associated with the shipment equipment. A seal is put on a shipment equipment once it is loaded. This Seal is meant to stay on until the shipment equipment reaches its final destination.</b></div><div><label>businessTerm</label>:<b>Seals</b></div><div><label>businessDefinition</label>:<b>Addresses the seal-related information associated with the shipment equipment. A seal is put on a shipment equipment once it is loaded. This Seal is meant to stay on until the shipment equipment reaches its final destination.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minLength: 1</b></div></root>",
                  "title": "Seals",
                  "minItems": 1
                },
                "references": {
                  "type": [
                    "array",
                    "null"
                  ],
                  "items": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "type": {
                        "type": "string",
                        "maxLength": 3,
                        "example": "FF",
                        "description": "<root><div><label>description</label>:<b>The reference type codes defined by DCSA. Possible values are: \\n \\n- FF (Freight Forwarder’s Reference) \\n- SI (Shipper’s Reference) \\n- SPO (Shippers Purchase Order Reference) \\n- CPO (Consignees Purchase Order Reference) \\n- CR (Customer’s Reference) \\n- AAO (Consignee’s Reference) \\n- ECR (Empty container release reference) \\n- CSI (Customer shipment ID) \\n- BPR (Booking party reference number) \\n- BID (Booking Request ID) \\n- SAC (Shipping Agency Code)</b></div><div><label>businessTerm</label>:<b>Reference Type</b></div><div><label>businessDefinition</label>:<b>The reference type codes defined by DCSA. Possible values are: \\n \\n- FF (Freight Forwarder’s Reference) \\n- SI (Shipper’s Reference) \\n- SPO (Shippers Purchase Order Reference) \\n- CPO (Consignees Purchase Order Reference) \\n- CR (Customer’s Reference) \\n- AAO (Consignee’s Reference) \\n- ECR (Empty container release reference) \\n- CSI (Customer shipment ID) \\n- BPR (Booking party reference number) \\n- BID (Booking Request ID) \\n- SAC (Shipping Agency Code)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 3 \\nexample: FF</b></div></root>",
                        "title": "Reference Type",
                        "minLength": 1
                      },
                      "value": {
                        "type": [
                          "string",
                          "null"
                        ],
                        "maxLength": 100,
                        "example": "HHL00103004",
                        "description": "<root><div><label>description</label>:<b>The actual value of the reference.</b></div><div><label>businessTerm</label>:<b>Reference Value</b></div><div><label>businessDefinition</label>:<b>The actual value of the reference.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\nexample: HHL00103004</b></div></root>",
                        "title": "Reference Value"
                      }
                    },
                    "required": [
                      "type"
                    ]
                  },
                  "description": "<root><div><label>description</label>:<b>References provided by the shipper or freight forwarder at the time of Booking or at the time of providing Shipping Instructions. Carriers share it back when providing track and trace event updates, some are also printed on the B/L. Customers can use these references to track shipments in their internal systems.</b></div><div><label>businessTerm</label>:<b>References</b></div><div><label>businessDefinition</label>:<b>References provided by the shipper or freight forwarder at the time of Booking or at the time of providing Shipping Instructions. Carriers share it back when providing track and trace event updates, some are also printed on the B/L. Customers can use these references to track shipments in their internal systems.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                  "title": "References"
                },
                "customs_references": {
                  "type": [
                    "array",
                    "null"
                  ],
                  "items": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "type": {
                        "type": "string",
                        "pattern": "^\\S+(\\s+\\S+)*$",
                        "maxLength": 50,
                        "example": "ACID",
                        "description": "<root><div><label>description</label>:<b>The reference type code as defined in the relevant customs jurisdiction.</b></div><div><label>businessTerm</label>:<b>Customs References Type</b></div><div><label>businessDefinition</label>:<b>The reference type code as defined in the relevant customs jurisdiction.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 50 \\nexample: ACID</b></div></root>",
                        "title": "Customs References Type",
                        "minLength": 1
                      },
                      "country_cd": {
                        "type": "string",
                        "pattern": "^[A-Z]{2}$",
                        "minLength": 2,
                        "maxLength": 2,
                        "example": "DK",
                        "description": "<root><div><label>description</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>businessTerm</label>:<b>Customs References Country Code</b></div><div><label>businessDefinition</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}$ \\nminLength: 2 \\nmaxLength: 2 \\nexample: DK</b></div></root>",
                        "title": "Customs References Country Code"
                      },
                      "value": {
                        "type": "string",
                        "pattern": "^\\S+(\\s+\\S+)*$",
                        "maxLength": 100,
                        "example": 4988470982020120000,
                        "description": "<root><div><label>description</label>:<b>The value of the customsReference</b></div><div><label>businessTerm</label>:<b>Customs References Value</b></div><div><label>businessDefinition</label>:<b>The value of the customsReference</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: 4988470982020120017</b></div></root>",
                        "title": "Customs References Value",
                        "minLength": 1
                      }
                    },
                    "required": [
                      "type",
                      "country_cd",
                      "value"
                    ]
                  },
                  "description": "<root><div><label>description</label>:<b>Reference associated with customs and/or excise purposes required by the relevant authorities for the import, export, or transit of the goods. \\n \\nA (small) list of examples: \\n \\nType  Country Description \\nACID  EG  Advance Cargo Information Declaration in Egypt \\nCERS CA  Canadian Export Reporting System \\nITN  US  Internal Transaction Number in US \\nPEB ID  PEB reference number \\nCSN  IN  Cargo Summary Notification (CSN) \\nAllowed combinations of type and country are maintained in GitHub.</b></div><div><label>businessTerm</label>:<b>Customs References</b></div><div><label>businessDefinition</label>:<b>Reference associated with customs and/or excise purposes required by the relevant authorities for the import, export, or transit of the goods. \\n \\nA (small) list of examples: \\n \\nType  Country Description \\nACID  EG  Advance Cargo Information Declaration in Egypt \\nCERS CA  Canadian Export Reporting System \\nITN  US  Internal Transaction Number in US \\nPEB ID  PEB reference number \\nCSN  IN  Cargo Summary Notification (CSN) \\nAllowed combinations of type and country are maintained in GitHub.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                  "title": "Customs References"
                }
              },
              "required": [
                "equipment",
                "cargo_gross_weight",
                "cargo_gross_weight_unit",
                "is_shipper_owned",
                "seals"
              ]
            },
            "description": "<root><div><label>description</label>:<b>Specifies the container (equipment), the total weight, total volume, possible ActiveReeferSettings, seals and references</b></div><div><label>businessTerm</label>:<b>Utilized Transport Equipments</b></div><div><label>businessDefinition</label>:<b>Specifies the container (equipment), the total weight, total volume, possible ActiveReeferSettings, seals and references</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "Utilized Transport Equipments",
            "minItems": 1
          },
          "references": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "type": {
                  "type": "string",
                  "maxLength": 3,
                  "example": "FF",
                  "description": "<root><div><label>description</label>:<b>The reference type codes defined by DCSA. Possible values are: \\n \\n- FF (Freight Forwarder’s Reference) \\n- SI (Shipper’s Reference) \\n- SPO (Shippers Purchase Order Reference) \\n- CPO (Consignees Purchase Order Reference) \\n- CR (Customer’s Reference) \\n- AAO (Consignee’s Reference) \\n- ECR (Empty container release reference) \\n- CSI (Customer shipment ID) \\n- BPR (Booking party reference number) \\n- BID (Booking Request ID) \\n- SAC (Shipping Agency Code)</b></div><div><label>businessTerm</label>:<b>Reference Type</b></div><div><label>businessDefinition</label>:<b>The reference type codes defined by DCSA. Possible values are: \\n \\n- FF (Freight Forwarder’s Reference) \\n- SI (Shipper’s Reference) \\n- SPO (Shippers Purchase Order Reference) \\n- CPO (Consignees Purchase Order Reference) \\n- CR (Customer’s Reference) \\n- AAO (Consignee’s Reference) \\n- ECR (Empty container release reference) \\n- CSI (Customer shipment ID) \\n- BPR (Booking party reference number) \\n- BID (Booking Request ID) \\n- SAC (Shipping Agency Code)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 3 \\nexample: FF</b></div></root>",
                  "title": "Reference Type",
                  "minLength": 1
                },
                "value": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "maxLength": 100,
                  "example": "HHL00103004",
                  "description": "<root><div><label>description</label>:<b>The actual value of the reference.</b></div><div><label>businessTerm</label>:<b>Reference Value</b></div><div><label>businessDefinition</label>:<b>The actual value of the reference.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\nexample: HHL00103004</b></div></root>",
                  "title": "Reference Value"
                }
              },
              "required": [
                "type"
              ]
            },
            "description": "<root><div><label>description</label>:<b>References provided by the shipper or freight forwarder at the time of Booking or at the time of providing Shipping Instructions. Carriers share it back when providing track and trace event updates, some are also printed on the B/L. Customers can use these references to track shipments in their internal systems.</b></div><div><label>businessTerm</label>:<b>References</b></div><div><label>businessDefinition</label>:<b>References provided by the shipper or freight forwarder at the time of Booking or at the time of providing Shipping Instructions. Carriers share it back when providing track and trace event updates, some are also printed on the B/L. Customers can use these references to track shipments in their internal systems.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "References"
          },
          "customs_references": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "type": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 50,
                  "example": "ACID",
                  "description": "<root><div><label>description</label>:<b>The reference type code as defined in the relevant customs jurisdiction.</b></div><div><label>businessTerm</label>:<b>Customs References Type</b></div><div><label>businessDefinition</label>:<b>The reference type code as defined in the relevant customs jurisdiction.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 50 \\nexample: ACID</b></div></root>",
                  "title": "Customs References Type",
                  "minLength": 1
                },
                "country_cd": {
                  "type": "string",
                  "pattern": "^[A-Z]{2}$",
                  "minLength": 2,
                  "maxLength": 2,
                  "example": "DK",
                  "description": "<root><div><label>description</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>businessTerm</label>:<b>Customs References Country Code</b></div><div><label>businessDefinition</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}$ \\nminLength: 2 \\nmaxLength: 2 \\nexample: DK</b></div></root>",
                  "title": "Customs References Country Code"
                },
                "value": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": 4988470982020120000,
                  "description": "<root><div><label>description</label>:<b>The value of the customsReference</b></div><div><label>businessTerm</label>:<b>Customs References Value</b></div><div><label>businessDefinition</label>:<b>The value of the customsReference</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: 4988470982020120017</b></div></root>",
                  "title": "Customs References Value",
                  "minLength": 1
                }
              },
              "required": [
                "type",
                "country_cd",
                "value"
              ]
            },
            "description": "<root><div><label>description</label>:<b>Reference associated with customs and/or excise purposes required by the relevant authorities for the import, export, or transit of the goods. \\n \\nA (small) list of examples: \\n \\nType  Country Description \\nACID  EG  Advance Cargo Information Declaration in Egypt \\nCERS CA  Canadian Export Reporting System \\nITN  US  Internal Transaction Number in US \\nPEB ID  PEB reference number \\nCSN  IN  Cargo Summary Notification (CSN) \\nAllowed combinations of type and country are maintained in GitHub.</b></div><div><label>businessTerm</label>:<b>Customs References</b></div><div><label>businessDefinition</label>:<b>Reference associated with customs and/or excise purposes required by the relevant authorities for the import, export, or transit of the goods. \\n \\nA (small) list of examples: \\n \\nType  Country Description \\nACID  EG  Advance Cargo Information Declaration in Egypt \\nCERS CA  Canadian Export Reporting System \\nITN  US  Internal Transaction Number in US \\nPEB ID  PEB reference number \\nCSN  IN  Cargo Summary Notification (CSN) \\nAllowed combinations of type and country are maintained in GitHub.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "Customs References"
          },
          "document_party": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "party": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "type": "string",
                        "pattern": "^\\S+(\\s+\\S+)*$",
                        "maxLength": 100,
                        "example": "Asseco Denmark",
                        "description": "<root><div><label>description</label>:<b>Name of the Party.</b></div><div><label>businessTerm</label>:<b>Party Name</b></div><div><label>businessDefinition</label>:<b>Name of the Party.</b></div><div><label>applicableStandardName</label>:<b>NA</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Asseco Denmark</b></div></root>",
                        "title": "Party Name",
                        "minLength": 1
                      },
                      "address": {
                        "type": "string",
                        "pattern": "^\\S+(\\s+\\S+)*$",
                        "maxLength": 100,
                        "example": "Henrik",
                        "description": "<root><div><label>description</label>:<b>Name of the adress</b></div><div><label>businessTerm</label>:<b>Party Address Name</b></div><div><label>businessDefinition</label>:<b>Name of the adress</b></div><div><label>applicableStandardName</label>:<b>NA</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Henrik</b></div></root>",
                        "title": "Party Address Name",
                        "minLength": 1
                      },
                      "address_country": {
                        "type": "string",
                        "pattern": "^\\S+(\\s+\\S+)*$",
                        "maxLength": 75,
                        "example": "The Netherlands",
                        "description": "<root><div><label>description</label>:<b>The country of the party’s address.</b></div><div><label>businessTerm</label>:<b>Party Address Country</b></div><div><label>businessDefinition</label>:<b>The country of the party’s address.</b></div><div><label>applicableStandardName</label>:<b>NA</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 75 \\nexample: The Netherlands</b></div></root>",
                        "title": "Party Address Country",
                        "minLength": 1
                      },
                      "contact_nm": {
                        "type": "string",
                        "pattern": "^\\S+(\\s+\\S+)*$",
                        "maxLength": 100,
                        "example": "Henrik",
                        "description": "<root><div><label>description</label>:<b>Name of the contact</b></div><div><label>businessTerm</label>:<b>Party Contact Name</b></div><div><label>businessDefinition</label>:<b>Name of the contact</b></div><div><label>applicableStandardName</label>:<b>NA</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Henrik</b></div></root>",
                        "title": "Party Contact Name",
                        "minLength": 1
                      },
                      "contact_type": {
                        "type": "string",
                        "example": "Phone",
                        "enum": [
                          "Phone",
                          "Email"
                        ],
                        "description": "<root><div><label>description</label>:<b>Contact type provided (phone/email)</b></div><div><label>businessTerm</label>:<b>Party Contact Type</b></div><div><label>businessDefinition</label>:<b>Contact type provided (phone/email)</b></div><div><label>applicableStandardName</label>:<b>NA</b></div><div><label>dataFormat</label>:<b>example: Phone \\nEnum: [ Phone, Email ]</b></div></root>",
                        "title": "Party Contact Type",
                        "minLength": 1
                      },
                      "contact_value": {
                        "type": "string",
                        "description": "<root><div><label>description</label>:<b>Phone number for the contact / Email address to be used</b></div><div><label>businessTerm</label>:<b>Party Contact (Phone/Email)</b></div><div><label>businessDefinition</label>:<b>Phone number for the contact / Email address to be used</b></div><div><label>applicableStandardName</label>:<b>NA</b></div><div><label>dataFormat</label>:<b>For Phone \\npattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 30 \\nexample: +45 70262970 \\nFor Email \\npattern: ^.+@\\S+$ \\nmaxLength: 100 \\nexample: info@dcsa.org</b></div></root>",
                        "title": "Party Contact (Phone/Email)",
                        "minLength": 1
                      },
                      "identifying_code": {
                        "type": [
                          "array",
                          "null"
                        ],
                        "items": {
                          "type": "object",
                          "additionalProperties": false,
                          "properties": {
                            "party_cd": {
                              "type": "string",
                              "maxLength": 100,
                              "example": "MSK",
                              "description": "<root><div><label>description</label>:<b>Code to identify the party as provided by the code list provider</b></div><div><label>businessTerm</label>:<b>Party Identifying Codes </b></div><div><label>businessDefinition</label>:<b>Code to identify the party as provided by the code list provider</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\nexample: MSK</b></div></root>",
                              "title": "Party Identifying Codes ",
                              "minLength": 1
                            },
                            "code_provider": {
                              "type": "string",
                              "maxLength": 5,
                              "example": "SMDG",
                              "description": "<root><div><label>description</label>:<b>A DCSA provided code for UN/CEFACT code list providers: \\n \\n- ISO (International Standards Organization) \\n- UNECE (United Nations Economic Commission for Europe) \\n- LLOYD (Lloyd's register of shipping) \\n- BIC (Bureau International des Containeurs) \\n- IMO (International Maritime Organization) \\n- SCAC (Standard Carrier Alpha Code) \\n- ITIGG (International Transport Implementation Guidelines Group) \\n- ITU (International Telecommunication Union) \\n- SMDG (Shipplanning Message Development Group) \\n- NCBH (NCB Hazcheck) \\n- FMC (Federal Maritime Commission) \\n- CBSA (Canada Border Services Agency) \\n- DCSA (Digitial Container Shipping Association) \\n- W3C (World Wide Web Consortium) \\n- GLEIF (Global Legal Entity Identifier Foundation) \\n- EPI (EBL Platform Identifier) \\n- ZZZ (Mutually defined)</b></div><div><label>businessTerm</label>:<b>Identifying Codes List Provider</b></div><div><label>businessDefinition</label>:<b>A DCSA provided code for UN/CEFACT code list providers: \\n \\n- ISO (International Standards Organization) \\n- UNECE (United Nations Economic Commission for Europe) \\n- LLOYD (Lloyd's register of shipping) \\n- BIC (Bureau International des Containeurs) \\n- IMO (International Maritime Organization) \\n- SCAC (Standard Carrier Alpha Code) \\n- ITIGG (International Transport Implementation Guidelines Group) \\n- ITU (International Telecommunication Union) \\n- SMDG (Shipplanning Message Development Group) \\n- NCBH (NCB Hazcheck) \\n- FMC (Federal Maritime Commission) \\n- CBSA (Canada Border Services Agency) \\n- DCSA (Digitial Container Shipping Association) \\n- W3C (World Wide Web Consortium) \\n- GLEIF (Global Legal Entity Identifier Foundation) \\n- EPI (EBL Platform Identifier) \\n- ZZZ (Mutually defined)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 5 \\nexample: SMDG</b></div></root>",
                              "title": "Identifying Codes List Provider",
                              "minLength": 1
                            },
                            "code_name": {
                              "type": [
                                "string",
                                "null"
                              ],
                              "maxLength": 100,
                              "example": "LCL",
                              "description": "<root><div><label>description</label>:<b>The name of the list, provided by the code list provider</b></div><div><label>businessTerm</label>:<b>Identifying Codes List Name</b></div><div><label>businessDefinition</label>:<b>The name of the list, provided by the code list provider</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\nexample: LCL</b></div></root>",
                              "title": "Identifying Codes List Name"
                            }
                          },
                          "required": [
                            "party_cd",
                            "code_provider"
                          ]
                        },
                        "description": "<root><div><label>description</label>:<b>Identifying codes for the Party with a role.</b></div><div><label>businessTerm</label>:<b>Identifying Codes</b></div><div><label>businessDefinition</label>:<b>Identifying codes for the Party with a role.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                        "title": "Identifying Codes"
                      },
                      "tax_ref": {
                        "type": [
                          "array",
                          "null"
                        ],
                        "items": {
                          "type": "object",
                          "additionalProperties": false,
                          "properties": {
                            "type": {
                              "type": "string",
                              "pattern": "^\\S+(\\s+\\S+)*$",
                              "maxLength": 50,
                              "example": "PAN",
                              "description": "<root><div><label>description</label>:<b>The reference type code as defined by the relevant tax and/or legal authority. \\nA list of examples: \\n \\nType Country Description \\nPAN IN  Goods and Services Tax Identification Number in India \\nGSTIN IN  Goods and Services Tax Identification Number in India \\nIEC IN  Importer-Exported Code in India \\nRUC EC  Registro Único del Contribuyente in Ecuador \\nRUC PE  Registro Único del Contribuyente in Peru \\nNIF  MG  Numéro d’Identification Fiscal in Madagascar \\nNIF  DZ  Numéro d’Identification Fiscal in Algeria \\nAllowed combinations of type and country are maintained in GitHub.</b></div><div><label>businessTerm</label>:<b>Tax Legal References Type</b></div><div><label>businessDefinition</label>:<b>The reference type code as defined by the relevant tax and/or legal authority. \\nA list of examples: \\n \\nType Country Description \\nPAN IN  Goods and Services Tax Identification Number in India \\nGSTIN IN  Goods and Services Tax Identification Number in India \\nIEC IN  Importer-Exported Code in India \\nRUC EC  Registro Único del Contribuyente in Ecuador \\nRUC PE  Registro Único del Contribuyente in Peru \\nNIF  MG  Numéro d’Identification Fiscal in Madagascar \\nNIF  DZ  Numéro d’Identification Fiscal in Algeria \\nAllowed combinations of type and country are maintained in GitHub.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 50 \\nexample: PAN</b></div></root>",
                              "title": "Tax Legal References Type",
                              "minLength": 1
                            },
                            "country_code": {
                              "type": "string",
                              "pattern": "^[A-Z]{2}$",
                              "minLength": 2,
                              "maxLength": 2,
                              "example": "DK",
                              "description": "<root><div><label>description</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>businessTerm</label>:<b>Tax Legal References Country Code</b></div><div><label>businessDefinition</label>:<b>The 2 characters for the country code using ISO 3166-1 alpha-2</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^[A-Z]{2}$ \\nminLength: 2 \\nmaxLength: 2 \\nexample: DK</b></div></root>",
                              "title": "Tax Legal References Country Code"
                            },
                            "value": {
                              "type": "string",
                              "pattern": "^\\S+(\\s+\\S+)*$",
                              "maxLength": 100,
                              "example": "AAAAA0000A",
                              "description": "<root><div><label>description</label>:<b>The value of the taxLegalReference</b></div><div><label>businessTerm</label>:<b>Tax Legal References Value</b></div><div><label>businessDefinition</label>:<b>The value of the taxLegalReference</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: AAAAA0000A</b></div></root>",
                              "title": "Tax Legal References Value",
                              "minLength": 1
                            }
                          },
                          "required": [
                            "type",
                            "country_code",
                            "value"
                          ]
                        },
                        "description": "<root><div><label>description</label>:<b>Reference that uniquely identifies a party for tax and/or legal purposes in accordance with the relevant jurisdiction.</b></div><div><label>businessTerm</label>:<b>Tax Legal References</b></div><div><label>businessDefinition</label>:<b>Reference that uniquely identifies a party for tax and/or legal purposes in accordance with the relevant jurisdiction.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                        "title": "Tax Legal References"
                      }
                    },
                    "required": [
                      "name",
                      "address",
                      "address_country",
                      "contact_nm",
                      "contact_type",
                      "contact_value"
                    ]
                  },
                  "description": "<root><div><label>description</label>:<b>Refers to a company or a legal entity.</b></div><div><label>businessTerm</label>:<b>Party</b></div><div><label>businessDefinition</label>:<b>Refers to a company or a legal entity.</b></div><div><label>applicableStandardName</label>:<b>NA</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
                  "title": "Party",
                  "minItems": 1
                },
                "party_function": {
                  "type": "string",
                  "maxLength": 3,
                  "example": "DDS",
                  "description": "<root><div><label>description</label>:<b>Specifies the role of the party in a given context. Possible values are: \\n \\n- OS (Original shipper) \\n- CN (Consignee) \\n- COW (Invoice payer on behalf of the consignor (shipper)) \\n- COX (Invoice payer on behalf of the consignee) \\n- MS (Document/message issuer/sender) \\n- N1 (First Notify Party) \\n- N2 (Second Notify Party) \\n- NI (Other Notify Party) \\n- DDR (Consignor's freight forwarder) \\n- DDS (Consignee's freight forwarder) \\n- HE (Carrier booking office (transportation office)) \\n- SCO (Service contract owner - Defined by DCSA) \\n- BA (Booking Agency) \\n- END (Endorsee Party)</b></div><div><label>businessTerm</label>:<b>Party Function </b></div><div><label>businessDefinition</label>:<b>Specifies the role of the party in a given context. Possible values are: \\n \\n- OS (Original shipper) \\n- CN (Consignee) \\n- COW (Invoice payer on behalf of the consignor (shipper)) \\n- COX (Invoice payer on behalf of the consignee) \\n- MS (Document/message issuer/sender) \\n- N1 (First Notify Party) \\n- N2 (Second Notify Party) \\n- NI (Other Notify Party) \\n- DDR (Consignor's freight forwarder) \\n- DDS (Consignee's freight forwarder) \\n- HE (Carrier booking office (transportation office)) \\n- SCO (Service contract owner - Defined by DCSA) \\n- BA (Booking Agency) \\n- END (Endorsee Party)</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 3 \\nexample: DDS</b></div></root>",
                  "title": "Party Function ",
                  "minLength": 1
                },
                "displayed_address": {
                  "type": [
                    "array",
                    "null"
                  ],
                  "items": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "maxItems": 5,
                  "description": "<root><div><label>description</label>:<b>The address to be displayed in the Transport Document. The displayed address may be used to match the address provided in the letter of credit. It is mandatory to provide a displayed address if the B/L needs to be switched to paper later in the process \\n \\nA single address line to be used when a B/L needs to be printed.</b></div><div><label>businessTerm</label>:<b>Displayed Address</b></div><div><label>businessDefinition</label>:<b>The address to be displayed in the Transport Document. The displayed address may be used to match the address provided in the letter of credit. It is mandatory to provide a displayed address if the B/L needs to be switched to paper later in the process \\n \\nA single address line to be used when a B/L needs to be printed.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>minItems: 1 \\nmaxItems: 5</b></div></root>",
                  "title": "Displayed Address"
                },
                "notified": {
                  "type": "boolean",
                  "example": true,
                  "description": "<root><div><label>description</label>:<b>Used to decide whether the party will be notified of the arrival of the cargo.</b></div><div><label>businessTerm</label>:<b>Is To Be Notified</b></div><div><label>businessDefinition</label>:<b>Used to decide whether the party will be notified of the arrival of the cargo.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: true</b></div></root>",
                  "title": "Is To Be Notified"
                }
              },
              "required": [
                "party",
                "party_function",
                "notified"
              ]
            },
            "description": "<root><div><label>description</label>:<b>Associates a Party with a role.</b></div><div><label>businessTerm</label>:<b>Document Parties</b></div><div><label>businessDefinition</label>:<b>Associates a Party with a role.</b></div><div><label>applicableStandardName</label>:<b>NA</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "Document Parties",
            "minItems": 1
          }
        },
        "required": [
          "bol_ref",
          "status",
          "shipped_onboard",
          "freight_payment_cd",
          "to_order",
          "terms_and_conditions",
          "origin_receipt_type",
          "destination_delivery_type",
          "origin_cargo_movement_type",
          "destination_cargo_movement_type",
          "issue_date",
          "carrier_cd",
          "carrier_cd_provider",
          "issuing_party",
          "transports",
          "contact_details",
          "consignment",
          "utilized_transport_equipment",
          "document_party"
        ]
      },
      "description": "<root><div><label>description</label>:<b>The document that governs the terms of carriage between shipper and carrier for maritime transportation. </b></div><div><label>businessTerm</label>:<b>Document</b></div><div><label>businessDefinition</label>:<b>The document that governs the terms of carriage between shipper and carrier for maritime transportation. </b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
      "title": "Document",
      "minItems": 1
    },
    "dcsa_ebl_issue_to": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "platform_nm": {
            "type": "string",
            "pattern": "\\S+",
            "maxLength": 4,
            "example": "BOLE",
            "description": "<root><div><label>description</label>:<b>The sendToPlatform is the EBL platform the eBL is issued to/the eBL platform of the shipper. Must be a code from https://github.com/dcsaorg/DCSA-Information-Model/blob/master/datamodel/referencedata.d/eblsolutionproviders.csv.</b></div><div><label>businessTerm</label>:<b>Send to Platform</b></div><div><label>businessDefinition</label>:<b>The sendToPlatform is the EBL platform the eBL is issued to/the eBL platform of the shipper. Must be a code from https://github.com/dcsaorg/DCSA-Information-Model/blob/master/datamodel/referencedata.d/eblsolutionproviders.csv.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: \\S+ \\nmaxLength: 4 \\nexample: BOLE</b></div></root>",
            "title": "Send to Platform",
            "minLength": 1
          },
          "legal_nm": {
            "type": "string",
            "maxLength": 100,
            "pattern": "^\\S+(\\s+\\S+)*$",
            "example": "Digital Container Shipping Association",
            "description": "<root><div><label>description</label>:<b>Legal name of the party/user as shown on the endorsement chain</b></div><div><label>businessTerm</label>:<b>Legal Name</b></div><div><label>businessDefinition</label>:<b>Legal name of the party/user as shown on the endorsement chain</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\npattern: ^\\S+(\\s+\\S+)*$ \\nexample: Digital Container Shipping Association</b></div></root>",
            "title": "Legal Name",
            "minLength": 1
          },
          "registration_no": {
            "type": [
              "string",
              "null"
            ],
            "example": 74567837,
            "pattern": "^\\S+(\\s+\\S+)*$",
            "maxLength": 100,
            "description": "<root><div><label>description</label>:<b>Company registration number of this party. E.g. registration number on the local chamber of commerse.</b></div><div><label>businessTerm</label>:<b>Registration Number</b></div><div><label>businessDefinition</label>:<b>Company registration number of this party. E.g. registration number on the local chamber of commerse.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: 74567837 \\npattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100</b></div></root>",
            "title": "Registration Number"
          },
          "registration_loc": {
            "type": [
              "string",
              "null"
            ],
            "maxLength": 2,
            "pattern": "^[A-Z]+$",
            "example": "NL",
            "description": "<root><div><label>description</label>:<b>Country code of the location of registration according to ISO 3166-1 alpha-2</b></div><div><label>businessTerm</label>:<b>Location of Registration</b></div><div><label>businessDefinition</label>:<b>Country code of the location of registration according to ISO 3166-1 alpha-2</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 2 \\nminLength: 2 \\npattern: ^[A-Z]+$ \\nexample: NL</b></div></root>",
            "title": "Location of Registration"
          },
          "tax_ref": {
            "type": [
              "string",
              "null"
            ],
            "pattern": "^\\S+$",
            "example": "NL859951480B01",
            "description": "<root><div><label>description</label>:<b>Tax reference used in the location of registration</b></div><div><label>businessTerm</label>:<b>Tax Reference</b></div><div><label>businessDefinition</label>:<b>Tax reference used in the location of registration</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+$ \\nexample: NL859951480B01</b></div></root>",
            "title": "Tax Reference"
          },
          "party_codes": {
            "type": [
              "array",
              "null"
            ],
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "party_code": {
                  "type": "string",
                  "maxLength": 100,
                  "minLength": 1,
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "example": "529900T8BM49AURSDO55",
                  "description": "<root><div><label>description</label>:<b>Code to identify the party as provided by the partyCodeListProvider and codeListName</b></div><div><label>businessTerm</label>:<b>Party Code</b></div><div><label>businessDefinition</label>:<b>Code to identify the party as provided by the partyCodeListProvider and codeListName</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>maxLength: 100 \\nminLength: 1 \\npattern: ^\\S+(\\s+\\S+)*$ \\nexample: 529900T8BM49AURSDO55</b></div></root>",
                  "title": "Party Code"
                },
                "code_provider": {
                  "type": "string",
                  "enum": [
                    "GLEIF",
                    "W3C",
                    "EPUI"
                  ],
                  "example": "EPIU",
                  "description": "<root><div><label>description</label>:<b>Describes the organisation that provides the party code. \\n \\n- EPUI:The party code is an EBL Platform User Identifier (that is, an identifier provided by a platform, used to transfer eBLs). EPIU should be combined with the codeListName, to identify the platform that issued the identifier. \\n- GLEIF: The party code is issued by Global Legal Entity Identifier Foundation (GLEIF). See https://www.gleif.org/en. The codeNameList (if omitted) defaults to LEI. \\n- W3C: The party code is issued by a standard created by World Wide Web Consortium (W3C). See https://www.w3.org/. The codeNameList (if omitted) defaults to DID.</b></div><div><label>businessTerm</label>:<b>Code List Provider</b></div><div><label>businessDefinition</label>:<b>Describes the organisation that provides the party code. \\n \\n- EPUI:The party code is an EBL Platform User Identifier (that is, an identifier provided by a platform, used to transfer eBLs). EPIU should be combined with the codeListName, to identify the platform that issued the identifier. \\n- GLEIF: The party code is issued by Global Legal Entity Identifier Foundation (GLEIF). See https://www.gleif.org/en. The codeNameList (if omitted) defaults to LEI. \\n- W3C: The party code is issued by a standard created by World Wide Web Consortium (W3C). See https://www.w3.org/. The codeNameList (if omitted) defaults to DID.</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>example: EPIU \\nEnum: [ GLEIF, W3C, EPUI ]</b></div></root>",
                  "title": "Code List Provider",
                  "minLength": 1
                },
                "code_name": {
                  "type": "string",
                  "pattern": "^\\S+(\\s+\\S+)*$",
                  "maxLength": 100,
                  "example": "Bolero",
                  "description": "<root><div><label>description</label>:<b>The name of the code list / code generation mechanism / code authority for the party code. \\n \\nFor EPUI: \\n \\nWave: An identifier provided by Wave BL. \\nCargoX: An identifier provided by CargoX \\nEdoxOnline: An identifier provided by EdoxOnline \\nIQAX: An identifier provided by IQAX \\nEssDOCS: An identifier provided by essDOCS \\nBolero: An identifier provided by Bolero \\nTradeGO: An identifierprovided by TradeGo \\nSecro: An identifier provided by Secro \\nGSBN: An identifier provided by GSBN \\nWiseTech: An identifier provided by WiseTech \\nFor W3C: \\n \\nDID: The party code is a Decentralized Identifier (see https://www.w3.org/TR/did-core/). \\nFor GLEIF: \\n \\nLEI: The party code is a Legal Entity Identifier (LEI) as issued by Global Legal Entity Identifier Foundation (GLEIF). See https://www.gleif.org/en</b></div><div><label>businessTerm</label>:<b>Code List Name</b></div><div><label>businessDefinition</label>:<b>The name of the code list / code generation mechanism / code authority for the party code. \\n \\nFor EPUI: \\n \\nWave: An identifier provided by Wave BL. \\nCargoX: An identifier provided by CargoX \\nEdoxOnline: An identifier provided by EdoxOnline \\nIQAX: An identifier provided by IQAX \\nEssDOCS: An identifier provided by essDOCS \\nBolero: An identifier provided by Bolero \\nTradeGO: An identifierprovided by TradeGo \\nSecro: An identifier provided by Secro \\nGSBN: An identifier provided by GSBN \\nWiseTech: An identifier provided by WiseTech \\nFor W3C: \\n \\nDID: The party code is a Decentralized Identifier (see https://www.w3.org/TR/did-core/). \\nFor GLEIF: \\n \\nLEI: The party code is a Legal Entity Identifier (LEI) as issued by Global Legal Entity Identifier Foundation (GLEIF). See https://www.gleif.org/en</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>pattern: ^\\S+(\\s+\\S+)*$ \\nmaxLength: 100 \\nexample: Bolero</b></div></root>",
                  "title": "Code List Name",
                  "minLength": 1
                }
              },
              "required": [
                "party_code",
                "code_provider"
              ]
            },
            "description": "<root><div><label>description</label>:<b>Recipient's code</b></div><div><label>businessTerm</label>:<b>Party Codes</b></div><div><label>businessDefinition</label>:<b>Recipient's code</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
            "title": "Party Codes"
          }
        },
        "required": [
          "platform_nm",
          "legal_nm"
        ]
      },
      "description": "<root><div><label>description</label>:<b>Details of receipient</b></div><div><label>businessTerm</label>:<b>Issue To</b></div><div><label>businessDefinition</label>:<b>Details of receipient</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
      "title": "Issue To",
      "minItems": 1
    },
    "dcsa_ebl_jurisdiction": {
      "type": "string",
      "description": "<root><div><label>description</label>:<b>To be defined</b></div><div><label>businessTerm</label>:<b>Jurisdiction </b></div><div><label>businessDefinition</label>:<b>To be defined</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>to be defined</b></div></root>",
      "title": "Jurisdiction ",
      "minLength": 1
    },
    "dcsa_ebl_seat": {
      "type": "string",
      "description": "<root><div><label>description</label>:<b>To be defined</b></div><div><label>businessTerm</label>:<b>Seat</b></div><div><label>businessDefinition</label>:<b>To be defined</b></div><div><label>applicableStandardName</label>:<b>International</b></div><div><label>dataFormat</label>:<b>to be defined</b></div></root>",
      "title": "Seat",
      "minLength": 1
    },
    "attachments": {
      "type": "array",
      "description": "<root><div><label>description</label>:<b>Electronic Bill of Lading Attachment</b></div><div><label>businessTerm</label>:<b>Electronic Bill of Lading Attachment</b></div><div><label>businessDefinition</label>:<b>Electronic Bill of Lading Attachment</b></div><div><label>applicableStandardName</label>:<b>NA</b></div><div><label>dataFormat</label>:<b>NA</b></div></root>",
      "title": "Electronic Bill of Lading Attachment",
      "items": {
        "required": [
          "file_content",
          "filename"
        ],
        "type": "object",
        "properties": {
          "filename": {
            "title": "Filename",
            "type": "string",
            "description": "file name with extension. ex:invoice_123.pdf",
            "minLength": 1
          },
          "file_content": {
            "title": "File Content",
            "type": "string",
            "description": "/push or /provide : Base64 Encoded Content\n\n/receive : file_content is S3 bucket key value (use \"GET\" /files/{file_id} to get Base64 Encoded Content)\n",
            "minLength": 1
          }
        },
        "description": "attachment file type for CDI"
      },
      "minItems": 1
    }
  },
  "required": [
    "dcsa_ebl_document",
    "dcsa_ebl_issue_to",
    "dcsa_ebl_jurisdiction",
    "dcsa_ebl_seat",
    "attachments"
  ]
}

export type EBL_DCSASchema = EBL_DCSASchemaV2 | EBL_DCSASchemaV3;

export interface EBL_DCSADocument {
  dcsa_ebl_document: {
    bol_ref: string;
    shipping_ref?: string;
    status: string;
    shipped_onboard: boolean;
    freight_payment_cd: string | 'PRE' | 'COL';
    origin_charges_cd?: string | 'PRE' | 'COL';
    destination_charges_cd?: string | 'PRE' | 'COL';
    to_order: boolean;
    place_of_receipt?: string[];
    port_of_load?: string[];
    port_of_discharge?: string[];
    place_of_delivery?: string[];
    shipped_onboard_date?: string;
    terms_and_conditions: string;
    origin_receipt_type: string | 'CY' | 'SD' | 'CFS';
    destination_delivery_type: string | 'CY' | 'SD' | 'CFS';
    origin_cargo_movement_type: string;
    destination_cargo_movement_type: string;
    issue_date: string;
    received_shipment_date?: string;
    service_contract_ref?: string;
    contract_quotation_ref?: string;
    declared_value?: number;
    declared_currency?: string;
    carrier_cd: string;
    carrier_cd_provider: string | 'SMDG' | 'NMFTA';
    carrier_clause?: string;
    issuing_party: {
      name: string;
      address: string;
      country: string;
      contact_nm: string;
      contact_type: string | 'Phone' | 'Email';
      contact_details: string;
      identifying_code: string;
      code_provider: string;
      code_name?: string;
      tax_ref_type: string;
      tax_country_cd: string;
      tax_ref: string;
    }[];
    transports: {
      planned_arrival_date: string;
      planned_departure_date: string;
      pre_carriage?: string;
      on_carriage?: string;
      receipt_location_nm?: string;
      receipt_location_type: string;
      receipt_unlocation_cd?: string;
      receipt_facility_cd: string;
      receipt_facility_cd_provider: string;
      pol_location_nm?: string;
      pol_location_type: string;
      pol_unlocation_cd: string;
      delivery_location_nm?: string;
      delivery_location_type: string;
      delivery_unlocation_cd?: string;
      delivery_facility_cd: string;
      delivery_facility_cd_provider: string;
      pod_location_nm?: string;
      pod_location_type: string;
      pod_unlocation_cd: string;
      routing_location_nm?: string;
      routing_location_type: string;
      routing_unlocation_cd?: string;
      routing_facility_cd: string;
      routing_facility_cd_provider: string;
      vessel_nm: string;
      voy_no: string;
      universal_voy_no?: string;
    }[];
    charges?: {
      name: string;
      currency_amount: number;
      currency_cd: string;
      payment_term: string | 'PRE' | 'COL';
      calculation_basis: string;
      unit_price: number;
      quantity: number;
    }[];
    issue_place?: {
      location_nm?: string;
      location_type: string;
      unlocation_cd: string;
    }[];
    invoice_payable_at?: {
      location_nm?: string;
      location_type: string;
      unlocation_cd: string;
    }[];
    contact_details: {
      contact_nm: string;
      contact_type: string | 'Phone' | 'Email';
      contact_value: string;
    }[];
    consignment: {
      booking_ref: string;
      weight: number;
      weight_unit: string;
      volume?: number;
      volume_unit?: string | 'MTQ' | 'FTQ';
      goods_description: string;
      hscode: string[];
      references?: {
        type: string;
        value: string;
      }[];
      custom_references?: {
        type: string;
        country_cd: string;
        value: string;
      }[];
      cargo_items: {
        shipping_marks?: string;
        equipment_ref?: string;
        weight: number;
        weight_unit: string;
        volume?: number;
        volume_unit?: string | 'MTQ' | 'FTQ';
        customs_references?: {
          type: string;
          country_cd: string;
          value: string;
        }[];
        outer_packaging: {
          package_cd?: string;
          package_no: number;
          description: string;
          imo_packaging_cd?: string;
          dangerous_goods?: {
            code_variant_list?: string;
            proper_shipping_nm: string;
            technical_nm?: string;
            imo_class?: string;
            subsidiary_risk1?: string;
            subsidiary_risk2?: string;
            is_marine_pollutant?: boolean;
            packing_group?: number;
            is_limited_quantity?: boolean;
            is_excepted_quantity?: boolean;
            is_salvage_packings?: boolean;
            is_empty_uncleaned_residue?: boolean;
            is_waste?: boolean;
            is_hot?: boolean;
            is_competent_authority_approval_provided?: boolean;
            competent_authority_approval?: string;
            ems_no?: string;
            end_of_holding_time?: string;
            fumigation_dt?: string;
            is_reportable_quantity?: boolean;
            inhalation_zone?: string;
            reference_standard_type: string | "UN Number" | "NA Number";
            reference_number: string;
            segregation_groups?: string[];
            inner_packaging?: {
              quantity: number
              material: string
              description: string
            }[];
            emergency_contact?: {
              contact: string;
              provider?: string;
              phone: string;
              ref_no?: string;
            }[];
            gross_weight?: {
              value: number;
              unit: string | 'KGM' | 'LBR';
            }[];
            net_weight?: {
              value: number;
              unit: string | 'KGM' | 'LBR';
            }[];
            net_explosive_content?: {
              value: number;
              unit: string | 'KGM' | 'LBR';
            }[];
            volume?: {
              value: number;
              unit: string | 'MTQ' | 'FTQ' | 'LTR';
            }[];
            limits?: {
              temperature_unit: string | 'CEL' | 'FAH';
              flash_point?: number;
              transport_control_temperature?: number;
              transport_emergency_temperature?: number;
              sadt?: number;
              sapt?: number;
            }[];
          }[];
        }[];
      }[];
    }[];
    utilized_transport_equipment: {
      cargo_gross_weight: number;
      cargo_gross_weight_unit: string | 'KGM' | 'LBR';
      cargo_gross_volume?: number;
      cargo_gross_volume_unit?: string | 'MTQ' | 'FTQ';
      is_shipper_owned: boolean;
      is_non_operating_reefer?: boolean;
      active_reefer?: {
        temperature_setpoint?: number;
        temperature_unit?: string | 'CEL' | 'FAH';
        o2_setpoint?: number;
        co2_setpoint?: number;
        humidity_setpoint?: number;
        air_exchange_setpoint?: number;
        air_exchange_unit?: string | 'MTQ' | 'FTQ';
        is_ventilation_open?: boolean;
        is_drain_holes_open?: boolean;
        is_bulb_mode?: boolean;
        is_cold_treatment_required?: boolean;
        is_controlled_atmosphere_required?: boolean;
      }[];
      equipment: {
        equipment_ref: string;
        iso_equipment_cd?: string;
        tare_weight?: number;
        weight_unit?: string;
      }[];
      seals: {
        seal_number: string;
        seal_source?: string;
        seal_type?: string;
      }[];
      references?: {
        type: string;
        value?: string;
      }[];
      customs_references?: {
        type: string;
        country_cd: string;
        value: string;
      }[];
    }[];
    references?: {
      type: string;
      value?: string;
    }[];
    customs_references?: {
      type: string;
      country_cd: string;
      value: string;
    }[];
    document_party: {
      party: {
        name: string;
        address: string;
        address_country: string;
        contact_nm: string;
        contact_type: string | 'Phone' | 'Email';
        contact_value: string;
        identifying_code: {
          party_cd: string;
          code_provider: string;
          code_name?: string;
        }[];
        tax_ref: {
          type: string;
          country_code: string;
          value: string;
        }[];
      }[];
      party_function: string;
      displayed_address?: string[];
      notified: boolean;
    }[];
  }[];
  dcsa_ebl_issue_to: {
    platform_nm: string;
    legal_nm: string;
    registration_no?: string;
    registration_loc?: string;
    tax_ref?: string;
    party_codes?: {
      party_code: string;
      code_provider: string | 'GLEIF' | 'W3C' | 'EPUI';
      code_name?: string;
    }[];
  }[];
  dcsa_ebl_jurisdiction: string;
  dcsa_ebl_seat: string;
  attachments: {
    filename: string;
    file_content: string;
  }[];
}
