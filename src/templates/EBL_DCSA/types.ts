import { v2, v3 } from "@tradetrust-tt/tradetrust";

export type EBL_DCSASchemaV2 = v2.OpenAttestationDocument & EBL_DCSADocument;
export type EBL_DCSASchemaV3 = v3.OpenAttestationDocument & {
  credentialSubject: EBL_DCSADocument;
};

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
            ems_no?: string;
            end_of_holding_time?: string;
            fumigation_dt?: string;
            is_reportable_quantity?: boolean;
            inhalation_zone?: string;
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
            reference_standard_type: string | "UN Number" | "NA Number";
            reference_number: string;
          }[];
        }[];
        customs_references?: {
          type: string;
          country_cd: string;
          value: string;
        }[];
      }[];
    }[];
    utilized_transport_equipment: {
      equipment: {
        equipment_ref: string;
        iso_equipment_cd?: string;
        tare_weight?: number;
        weight_unit?: string;
      }[];
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
