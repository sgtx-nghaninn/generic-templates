import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { getDocumentData } from "../../utils";
import { EBL_DCSADocument, EBL_DCSAJsonSchmea, EBL_DCSASchema } from "./types";
import logo from "/static/images/logo-sgtradex.svg";

const smallText = (text: string): JSX.Element => <p className="text-xs font-light" style={{ wordBreak: "break-word" }}>{text}</p>;
const smallSemiBoldText = (text: string): JSX.Element => <p className="text-xs font-semibold">{text}</p>;
const smallStrongText = (text: string): JSX.Element => <p className="text-xs font-bold">{text}</p>;

const SubTitle1 = ({ title }: { title: any }): JSX.Element => <p className="text-lg p-2"><strong>{title}</strong></p>;

const SubTitle2 = ({ title }: { title: any }): JSX.Element => <p className="text-md p-2"><strong>{title}</strong></p>;

const SubTitle3 = ({ title, italic }: { title: any, italic?: boolean }): JSX.Element => <p className={`text-sm p-2 ${italic ? 'italic' : ''}`}><strong>{title}</strong></p>;

const parsedValue = (value: any) => value !== null && value !== undefined ? `${value}` : ''

const labelValueDivider = () => <div className="mt-2 mb-2 border-black border-t width-1"></div>

const SingleValueField = ({ identifier, schema, payload, index }: {
  identifier: string,
  schema: any,
  payload: any,
  index?: number
}): JSX.Element => {
  return <div className="flex-1 text-xs border-black border-t border-r last:border-r-0" key={`document-row-${index}`}>
    <div className="p-2">
      {smallSemiBoldText(schema?.[identifier]?.title)}
      {labelValueDivider()}
      {smallText(parsedValue(payload?.[identifier]))}
    </div>
  </div>
}
const Row = ({ children, escapePrintBottomBorder = false }: { children: JSX.Element | JSX.Element[], escapePrintBottomBorder?: boolean }) => {
  return <div className={`flex print:break-inside-avoid ${escapePrintBottomBorder ? '' : ' print:border-border print:broder-b print:mb-[-1px]'}`}>
    {children}
  </div>
}


const MultiValueField = ({ identifier, schema, payload, index, escapePrintBottomBorder = false }: {
  identifier: string,
  schema: any,
  payload: any,
  index?: number,
  escapePrintBottomBorder?: boolean
}): JSX.Element => {
  return <div className={`flex-auto border-black border-t border-r h-auto only:h-full only:border-r last:border-r-0 print:break-inside-avoid ${escapePrintBottomBorder ? '' : 'print:border-b print:mb-[-1px]'}`}>
    <div className="p-2">
      {smallSemiBoldText(schema?.[identifier]?.title)}
      {labelValueDivider()}
      <div>
        {(payload as any)[identifier]?.map((value: any) => (
          <div className="flex flex-row items-center">
            <li />
            {smallText(parsedValue(value))}
          </div>
        ))}
      </div>
    </div>
  </div>
}

const MultiObjectField = ({
  identifier,
  schema,
  payload,
  arrayKeys = [Object.keys(payload)],
  // className = "flex-1 flex flex-col outline-black outline-1",
  className = "flex-1 flex flex-col border-black border-t",
  title = schema?.[identifier]?.title,
  escapePrintBottomBorder = false
}: {
  identifier: string,
  schema: any,
  payload: any,
  arrayKeys?: string[][],
  className?: string,
  title?: string | JSX.Element,
  escapePrintBottomBorder?: boolean
}): JSX.Element => {
  // Default payload to single object array
  if (!Array.isArray(payload) && payload) {
    payload = [payload];
  }
  if (payload?.length === 0 || !payload) {
    payload = [[]];
    let defaultObj: any = {}
    arrayKeys.flat().map((key) => defaultObj[key] = null);
    payload[0].push(defaultObj);
  }

  // return <div className={className + " print:break-before-avoid"}>
  return <div className={className}>
    <div className="break-after-avoid">
      {typeof title === 'string' && title?.length ?
        <div className="p-2">
          {smallStrongText(`${title}`)}
        </div>
        : title
      }
    </div>
    {arrayKeys?.map((keys) => {
      return <>
        {payload?.map((payloadItem: any) => {
          return <div className={`flex flex-1 print:break-inside-avoid print:border-black ${escapePrintBottomBorder ? '' : 'print:border-b print:mb-[-1px]'}`}>
            {keys?.map((item, index) => (
              <SingleValueField
                identifier={item}
                schema={schema?.[identifier].items.properties}
                payload={payloadItem} />
            ))}
          </div>
        })}
      </>
    })}
  </div>
}

const Spacer = () => <div className="h-4 border-black border-t bg-gray-100" />;

const indentSize = 4;
const Indent = () => <div className={`border-black border-r bg-gray-100`}
  style={{ width: `${indentSize}px` }}
/>;

const IndentedTable = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
  return <div className="flex border-black border-t">
    <Indent />
    <div className=""
      style={{ width: `calc(100% - ${indentSize}px)` }}
    >
      {children}
    </div>
  </div>
};

// dcsa_ebl_document
const Section3 = (document: EBL_DCSADocument): JSX.Element => {
  const carrierName = '' //document.carrierName;
  const { dcsa_ebl_document } = document ?? { dcsa_ebl_document: [] };
  return <>
    {(dcsa_ebl_document ?? [{} as any])?.map(({
      issuing_party,
      transports,
      charges,
      issue_place,
      invoice_payable_at,
      contact_details,
      consignment,
      utilized_transport_equipment,
      references,
      customs_references,
      document_party,
      ...document
    }, index) => (
      <div className="border-black border border-2 mb-8">
        <MultiObjectField
          className=""
          identifier="dcsa_ebl_document"
          schema={EBL_DCSAJsonSchmea.properties}
          payload={document}
          arrayKeys={[['bol_ref', 'shipping_ref', 'status', 'shipped_onboard', 'freight_payment_cd', 'origin_charges_cd'], ['destination_charges_cd', 'to_order', 'shipped_onboard_date', 'terms_and_conditions', 'origin_receipt_type', 'destination_delivery_type'], ['origin_cargo_movement_type', 'destination_cargo_movement_type', 'issue_date', 'received_shipment_date', 'service_contract_ref', 'contract_quotation_ref'], ['declared_value', 'declared_currency', 'carrier_cd', 'carrier_cd_provider', 'carrier_clause']]}
          title={<SubTitle1 title={`Document #${index + 1}`} />}
        />

        <Row>
          {['place_of_receipt', 'port_of_load', 'port_of_discharge', 'place_of_delivery']?.map((item, index) => (
            <MultiValueField identifier={item}
              schema={EBL_DCSAJsonSchmea.properties
                .dcsa_ebl_document.items.properties}
              payload={document} />
          ))}
        </Row>

        {/* Issuing Party */}
        <Spacer />
        <div className="flex-auto border-black border-t">
          {(issuing_party ?? [{} as any])?.map((issuing_party_item, index) => {
            return <MultiObjectField
              className=""
              identifier="issuing_party"
              schema={EBL_DCSAJsonSchmea.properties
                .dcsa_ebl_document.items.properties}
              payload={issuing_party_item}
              arrayKeys={[['name', 'address', 'country', 'contact_nm', 'contact_type', 'contact_details'], ['identifying_code', 'code_provider', 'code_name', 'tax_ref_type', 'tax_country_cd', 'tax_ref']]}
              title={<SubTitle2
                title={`${EBL_DCSAJsonSchmea.properties
                  .dcsa_ebl_document.items.properties
                  .issuing_party.title} #${index + 1}`} />}
            />
          })}
        </div>

        {/* Transports Details */}
        <Spacer />
        <div className="flex-auto border-black border-t">
          {(transports ?? [{} as any])?.map((transports_item, index) => {
            return <MultiObjectField
              className=""
              identifier="transports"
              schema={EBL_DCSAJsonSchmea.properties
                .dcsa_ebl_document.items.properties}
              payload={transports_item}
              arrayKeys={[['planned_arrival_date', 'planned_departure_date', 'pre_carriage', 'on_carriage', 'receipt_location_nm', 'receipt_location_type'], ['receipt_unlocation_cd', 'receipt_facility_cd', 'receipt_facility_cd_provider', 'pol_location_nm', 'pol_location_type', 'pol_unlocation_cd'], ['delivery_location_nm', 'delivery_location_type', 'delivery_unlocation_cd', 'delivery_facility_cd', 'delivery_facility_cd_provider', 'pod_location_nm'], ['pod_location_type', 'pod_unlocation_cd', 'routing_location_nm', 'routing_location_type', 'routing_unlocation_cd', 'routing_facility_cd'], ['routing_facility_cd_provider', 'vessel_nm', 'voy_no', 'universal_voy_no']]}
              title={<SubTitle2
                title={`${EBL_DCSAJsonSchmea.properties
                  .dcsa_ebl_document.items.properties
                  .transports.title} #${index + 1}`} />}
            />
          })}
        </div>

        {/* Charges Details */}
        <Spacer />
        <div className="flex-auto border-black border-t">
          {(charges ?? [{} as any])?.map((charges_item, index) => {
            return <MultiObjectField
              className=""
              identifier="charges"
              schema={EBL_DCSAJsonSchmea.properties
                .dcsa_ebl_document.items.properties}
              payload={charges_item}
              arrayKeys={[['name', 'currency_amount', 'currency_cd', 'payment_term', 'calculation_basis', 'unit_price', 'quantity']]}
              title={<SubTitle2
                title={`${EBL_DCSAJsonSchmea.properties
                  .dcsa_ebl_document.items.properties
                  .charges.title} #${index + 1}`} />}
            />
          })}
        </div>

        {/* Place of Issue / Invoice Payable Location / Party Contact Details */}
        <Spacer />

        {/* Place of Issue */}
        <MultiObjectField
          className="flex-1 flex flex-col border-black border-t"
          identifier="issue_place"
          schema={EBL_DCSAJsonSchmea.properties
            .dcsa_ebl_document.items.properties}
          payload={issue_place}
          arrayKeys={[['location_nm', 'location_type', 'unlocation_cd']]}
          title={`${EBL_DCSAJsonSchmea.properties
            .dcsa_ebl_document.items.properties
            .issue_place.title}`}
        />

        {/* Invoice Payable Location */}
        <MultiObjectField
          className="flex-1 flex flex-col border-black border-t"
          identifier="invoice_payable_at"
          schema={EBL_DCSAJsonSchmea.properties
            .dcsa_ebl_document.items.properties}
          payload={invoice_payable_at}
          arrayKeys={[['location_nm', 'location_type', 'unlocation_cd']]}
          title={`${EBL_DCSAJsonSchmea.properties
            .dcsa_ebl_document.items.properties
            .invoice_payable_at.title}`}
        />

        {/* Party Contact Details */}
        <MultiObjectField
          className="flex-1 flex flex-col border-black border-t"
          identifier="contact_details"
          schema={EBL_DCSAJsonSchmea.properties
            .dcsa_ebl_document.items.properties}
          payload={contact_details}
          arrayKeys={[['contact_nm', 'contact_type', 'contact_value']]}
          title={`${EBL_DCSAJsonSchmea.properties
            .dcsa_ebl_document.items.properties
            .contact_details.title}`}
        />

        {/* Consigment Items */}
        <Spacer />
        <div className="border-black border-t">
          {(consignment ?? [{} as any])?.map((consignment_item, index) => {
            return <>
              <MultiObjectField
                className=""
                identifier="consignment"
                schema={EBL_DCSAJsonSchmea.properties
                  .dcsa_ebl_document.items.properties}
                payload={consignment_item}
                arrayKeys={[['booking_ref', 'weight', 'weight_unit', 'volume', 'volume_unit', 'goods_description']]}
                title={<SubTitle2
                  title={`${EBL_DCSAJsonSchmea.properties
                    .dcsa_ebl_document.items.properties
                    .consignment.title}  #${index + 1}`} />}
              />

              <Row>
                {/* HS Code */}
                <div className="flex-1">
                  <MultiValueField identifier="hscode" schema={EBL_DCSAJsonSchmea.properties
                    .dcsa_ebl_document.items.properties
                    .consignment.items.properties}
                    payload={consignment_item}
                    escapePrintBottomBorder={true}
                  />
                </div>

                {/* Reference */}
                <MultiObjectField
                  identifier="references"
                  schema={EBL_DCSAJsonSchmea.properties
                    .dcsa_ebl_document.items.properties
                    .consignment.items.properties}
                  payload={consignment_item?.references}
                  arrayKeys={[['type', 'value']]}
                  escapePrintBottomBorder={true}
                />
              </Row>

              {/* Custom Reference */}
              <MultiObjectField
                identifier="custom_references"
                schema={EBL_DCSAJsonSchmea.properties
                  .dcsa_ebl_document.items.properties
                  .consignment.items.properties}
                payload={consignment_item?.custom_references}
                arrayKeys={[['type', 'country_cd', 'value']]}
              />

              {/* Cargo Items */}
              <IndentedTable>
                {(consignment_item?.cargo_items ?? [{} as any])?.map((cargo_item, index) => {
                  return <>
                    <MultiObjectField
                      className=""
                      identifier="cargo_items"
                      schema={EBL_DCSAJsonSchmea.properties
                        .dcsa_ebl_document.items.properties
                        .consignment.items.properties}
                      payload={cargo_item}
                      arrayKeys={[['shipping_marks', 'equipment_ref', 'weight', 'weight_unit', 'volume', 'volume_unit']]}
                      title={<SubTitle3 title={`${EBL_DCSAJsonSchmea.properties
                        .dcsa_ebl_document.items.properties
                        .consignment.items.properties
                        .cargo_items.title}  #${index + 1}`} />}
                    />

                    {/* Custom Reference */}
                    <MultiObjectField
                      identifier="customs_references"
                      schema={EBL_DCSAJsonSchmea.properties
                        .dcsa_ebl_document.items.properties
                        .consignment.items.properties
                        .cargo_items.items.properties}
                      payload={cargo_item?.customs_references}
                      arrayKeys={[['type', 'country_cd', 'value']]}
                    />

                    {/* outer_packaging */}
                    <IndentedTable>
                      {(cargo_item?.outer_packaging ?? [{} as any])?.map((outer_packaging_item, index) => {
                        return <>
                          <MultiObjectField
                            className=""
                            identifier="outer_packaging"
                            schema={EBL_DCSAJsonSchmea.properties
                              .dcsa_ebl_document.items.properties
                              .consignment.items.properties
                              .cargo_items.items.properties}
                            payload={outer_packaging_item}
                            arrayKeys={[['package_cd', 'package_no', 'description', 'imo_packaging_cd']]}
                            title={<SubTitle3 title={`${EBL_DCSAJsonSchmea.properties
                              .dcsa_ebl_document.items.properties
                              .consignment.items.properties
                              .cargo_items.items.properties
                              .outer_packaging.title} #${index + 1}`} italic />}
                          />

                          {/* dangerous_goods */}
                          <IndentedTable>
                            {(outer_packaging_item?.dangerous_goods ?? [{} as any])?.map((dangerous_goods_item, index) => {
                              return <>
                                <MultiObjectField
                                  className=""
                                  identifier="dangerous_goods"
                                  schema={EBL_DCSAJsonSchmea.properties
                                    .dcsa_ebl_document.items.properties
                                    .consignment.items.properties
                                    .cargo_items.items.properties
                                    .outer_packaging.items.properties}
                                  payload={dangerous_goods_item}
                                  arrayKeys={[['code_variant_list', 'proper_shipping_nm', 'technical_nm', 'imo_class', 'subsidiary_risk1', 'subsidiary_risk2'], ['is_marine_pollutant', 'packing_group', 'is_limited_quantity', 'is_excepted_quantity', 'is_salvage_packings', 'is_empty_uncleaned_residue'], ['is_waste', 'is_hot', 'is_competent_authority_approval_provided', 'competent_authority_approval', 'ems_no', 'end_of_holding_time'], ['fumigation_dt', 'is_reportable_quantity', 'inhalation_zone', 'reference_standard_type', 'reference_number']]}
                                  title={<SubTitle3 title={`${EBL_DCSAJsonSchmea.properties
                                    .dcsa_ebl_document.items.properties
                                    .consignment.items.properties
                                    .cargo_items.items.properties
                                    .outer_packaging.items.properties
                                    .dangerous_goods.title} #${index + 1}`} italic />}
                                />

                                {/* 'gross_weight', 'net_weight' */}
                                <Row>
                                  {/* Gross Weight */}
                                  <MultiObjectField
                                    className="flex-1 flex flex-col border-black border-t border-r"
                                    identifier="gross_weight"
                                    schema={EBL_DCSAJsonSchmea.properties
                                      .dcsa_ebl_document.items.properties
                                      .consignment.items.properties
                                      .cargo_items.items.properties
                                      .outer_packaging.items.properties
                                      .dangerous_goods.items.properties}
                                    payload={dangerous_goods_item?.gross_weight}
                                    arrayKeys={[['value', 'unit']]}
                                  />

                                  {/* Net Weight */}
                                  <MultiObjectField
                                    className="flex-1 flex flex-col border-black border-t"
                                    identifier="net_weight"
                                    schema={EBL_DCSAJsonSchmea.properties
                                      .dcsa_ebl_document.items.properties
                                      .consignment.items.properties
                                      .cargo_items.items.properties
                                      .outer_packaging.items.properties
                                      .dangerous_goods.items.properties}
                                    payload={dangerous_goods_item?.net_weight}
                                    arrayKeys={[['value', 'unit']]}
                                  />
                                </Row>

                                {/* 'net_explosive_content', 'volume' */}
                                <Row>
                                  {/* Net Explosive Content */}
                                  <MultiObjectField
                                    className="flex-1 flex flex-col border-black border-t border-r"
                                    identifier="net_explosive_content"
                                    schema={EBL_DCSAJsonSchmea.properties
                                      .dcsa_ebl_document.items.properties
                                      .consignment.items.properties
                                      .cargo_items.items.properties
                                      .outer_packaging.items.properties
                                      .dangerous_goods.items.properties}
                                    payload={dangerous_goods_item?.net_explosive_content}
                                    arrayKeys={[['value', 'unit']]}
                                  />

                                  {/* Volume */}
                                  <MultiObjectField
                                    className="flex-1 flex flex-col border-black border-t"
                                    identifier="volume"
                                    schema={EBL_DCSAJsonSchmea.properties
                                      .dcsa_ebl_document.items.properties
                                      .consignment.items.properties
                                      .cargo_items.items.properties
                                      .outer_packaging.items.properties
                                      .dangerous_goods.items.properties}
                                    payload={dangerous_goods_item?.volume}
                                    arrayKeys={[['value', 'unit']]}
                                  />
                                </Row>

                                {/* 'inner_packaging', 'emergency_contact' */}
                                <Row>
                                  {/* Inner Packagings */}
                                  <MultiObjectField
                                    className="flex-1 flex flex-col border-black border-t border-r"
                                    identifier="inner_packaging"
                                    schema={EBL_DCSAJsonSchmea.properties
                                      .dcsa_ebl_document.items.properties
                                      .consignment.items.properties
                                      .cargo_items.items.properties
                                      .outer_packaging.items.properties
                                      .dangerous_goods.items.properties}
                                    payload={dangerous_goods_item?.inner_packaging}
                                    arrayKeys={[['quantity', 'material', 'description']]}
                                    title={`${EBL_DCSAJsonSchmea.properties
                                      .dcsa_ebl_document.items.properties
                                      .consignment.items.properties
                                      .cargo_items.items.properties
                                      .outer_packaging.items.properties
                                      .dangerous_goods.items.properties
                                      .inner_packaging.title}`}
                                  />

                                  {/* Emergency Contact Details */}
                                  <MultiObjectField
                                    className="flex-1 flex flex-col border-black border-t"
                                    identifier="emergency_contact"
                                    schema={EBL_DCSAJsonSchmea.properties
                                      .dcsa_ebl_document.items.properties
                                      .consignment.items.properties
                                      .cargo_items.items.properties
                                      .outer_packaging.items.properties
                                      .dangerous_goods.items.properties}
                                    payload={dangerous_goods_item?.emergency_contact}
                                    arrayKeys={[['contact', 'provider', 'phone', 'ref_no']]}
                                  />
                                </Row>

                                {/* Limits */}
                                <MultiObjectField
                                  className="flex-1 flex flex-col border-black border-t"
                                  identifier="limits"
                                  schema={EBL_DCSAJsonSchmea.properties
                                    .dcsa_ebl_document.items.properties
                                    .consignment.items.properties
                                    .cargo_items.items.properties
                                    .outer_packaging.items.properties
                                    .dangerous_goods.items.properties}
                                  payload={dangerous_goods_item?.limits}
                                  arrayKeys={[['temperature_unit', 'flash_point', 'transport_control_temperature', 'transport_emergency_temperature', 'sadt', 'sapt']]}
                                />
                              </>
                            }) as JSX.Element[]}
                          </IndentedTable>
                        </>
                      })}
                    </IndentedTable>
                  </>
                })}
              </IndentedTable>
            </>
          })}
        </div>

        {/* utilized_transport_equipment */}
        <Spacer />
        <div className="border-black border-t">
          {(utilized_transport_equipment ?? [{} as any])?.map((utilized_transport_equipment_item, index) => {
            return <>
              <MultiObjectField
                className=""
                identifier="utilized_transport_equipment"
                schema={EBL_DCSAJsonSchmea.properties
                  .dcsa_ebl_document.items.properties}
                payload={utilized_transport_equipment_item}
                arrayKeys={[['cargo_gross_weight', 'cargo_gross_weight_unit', 'cargo_gross_volume', 'cargo_gross_volume_unit', 'is_shipper_owned', 'is_non_operating_reefer']]}
                title={<SubTitle2
                  title={`${EBL_DCSAJsonSchmea.properties
                    .dcsa_ebl_document.items.properties
                    .utilized_transport_equipment.title}  #${index + 1}`} />}
              />

              {/* 'equipment', 'seals' */}
              <Row>
                {/* equipment */}
                <MultiObjectField
                  className="flex-1 flex flex-col border-black border-t border-r"
                  identifier="equipment"
                  schema={EBL_DCSAJsonSchmea.properties
                    .dcsa_ebl_document.items.properties
                    .utilized_transport_equipment.items.properties}
                  payload={utilized_transport_equipment_item?.equipment}
                  arrayKeys={[['equipment_ref', 'iso_equipment_cd', 'tare_weight', 'weight_unit']]}
                />

                {/* seals */}
                <MultiObjectField
                  className="flex-1 flex flex-col border-black border-t"
                  identifier="seals"
                  schema={EBL_DCSAJsonSchmea.properties
                    .dcsa_ebl_document.items.properties
                    .utilized_transport_equipment.items.properties}
                  payload={utilized_transport_equipment_item?.seals}
                  arrayKeys={[['seal_number', 'seal_source', 'seal_type']]}
                />
              </Row>

              {/* 'references', 'customs_references' */}
              <Row>
                {/* references */}
                <MultiObjectField
                  className="flex-1 flex flex-col border-black border-t border-r"
                  identifier="references"
                  schema={EBL_DCSAJsonSchmea.properties
                    .dcsa_ebl_document.items.properties
                    .utilized_transport_equipment.items.properties}
                  payload={utilized_transport_equipment_item?.references}
                  arrayKeys={[['type', 'value']]}
                />

                {/* customs_references */}
                <MultiObjectField
                  className="flex-1 flex flex-col border-black border-t"
                  identifier="customs_references"
                  schema={EBL_DCSAJsonSchmea.properties
                    .dcsa_ebl_document.items.properties
                    .utilized_transport_equipment.items.properties}
                  payload={utilized_transport_equipment_item?.customs_references}
                  arrayKeys={[['type', 'country_cd', 'value']]}
                />
              </Row>

              {/* 'active_reefer' */}
              <IndentedTable>
                {/* active_reefer */}
                <div className="flex-1 flex flex-col">
                  {(utilized_transport_equipment_item?.active_reefer ?? [{} as any])?.map((payload, index) => {
                    return <>
                      <MultiObjectField
                        className=""
                        identifier="active_reefer"
                        schema={EBL_DCSAJsonSchmea.properties
                          .dcsa_ebl_document.items.properties
                          .utilized_transport_equipment.items.properties}
                        payload={payload}
                        arrayKeys={[['temperature_setpoint', 'temperature_unit', 'o2_setpoint', 'co2_setpoint', 'humidity_setpoint', 'air_exchange_setpoint'], ['air_exchange_unit', 'is_ventilation_open', 'is_drain_holes_open', 'is_bulb_mode', 'is_cold_treatment_required', 'is_controlled_atmosphere_required']]}
                        title={`${EBL_DCSAJsonSchmea.properties
                          .dcsa_ebl_document.items.properties
                          .utilized_transport_equipment.items.properties
                          .active_reefer
                          .title} #${index + 1}`}
                      />
                    </>
                  })}
                </div>
              </IndentedTable>
            </>
          })}
        </div>

        {/* references / customs_references */}
        <Spacer />
        <Row>
          {/* references */}
          <MultiObjectField
            className="flex-1 flex flex-col border-black border-t border-r"
            identifier="references"
            schema={EBL_DCSAJsonSchmea.properties
              .dcsa_ebl_document.items.properties}
            payload={references}
            arrayKeys={[['type', 'value']]}
          />

          {/* customs_references */}
          <MultiObjectField
            className="flex-1 flex flex-col border-black border-t"
            identifier="customs_references"
            schema={EBL_DCSAJsonSchmea.properties
              .dcsa_ebl_document.items.properties}
            payload={customs_references}
            arrayKeys={[['type', 'country_cd', 'value']]}
          />
        </Row>

        {/* document_party */}
        <Spacer />
        <div className="border-black border-t">
          {(document_party ?? [{} as any])?.map((document_party_item, index) => {
            return <>
              <MultiObjectField
                className=""
                identifier="document_party"
                schema={EBL_DCSAJsonSchmea.properties
                  .dcsa_ebl_document.items.properties}
                payload={document_party_item}
                arrayKeys={[['party_function', 'displayed_address', 'notified']]}
                title={<SubTitle2
                  title={`${EBL_DCSAJsonSchmea.properties
                    .dcsa_ebl_document.items.properties
                    .document_party.title}  #${index + 1}`} />}
              />

              {/* Party */}
              <IndentedTable>
                {(document_party_item?.party ?? [{} as any])?.map((party_item, index) => {
                  return <>
                    {/* 'name', 'address', 'address_country', 'contact_nm', 'contact_type', 'contact_value' */}
                    <MultiObjectField
                      className=""
                      identifier="party"
                      schema={EBL_DCSAJsonSchmea.properties
                        .dcsa_ebl_document.items.properties
                        .document_party.items.properties}
                      payload={party_item}
                      arrayKeys={[['name', 'address', 'address_country', 'contact_nm', 'contact_type', 'contact_value']]}
                      title={<SubTitle3 title={`${EBL_DCSAJsonSchmea.properties
                        .dcsa_ebl_document.items.properties
                        .document_party.items.properties
                        .party.title}  #${index + 1}`} />}
                    />

                    {/* 'identifying_code', 'tax_ref' */}
                    <Row>
                      {/* identifying_code */}
                      <MultiObjectField
                        className="flex-1 flex flex-col border-black border-t border-r"
                        identifier="identifying_code"
                        schema={EBL_DCSAJsonSchmea.properties
                          .dcsa_ebl_document.items.properties
                          .document_party.items.properties
                          .party
                          .items.properties}
                        payload={party_item?.identifying_code}
                        arrayKeys={[['party_cd', 'code_provider', 'code_name']]}
                      />

                      {/* tax_ref */}
                      <MultiObjectField
                        className="flex-1 flex flex-col border-black border-t"
                        identifier="tax_ref"
                        schema={EBL_DCSAJsonSchmea.properties
                          .dcsa_ebl_document.items.properties
                          .document_party.items.properties
                          .party
                          .items.properties}
                        payload={party_item?.tax_ref}
                        arrayKeys={[['type', 'country_code', 'value']]}
                      />
                    </Row>
                  </>
                })}
              </IndentedTable >
            </>
          })}
        </div>
      </div>
    ))}
  </>;
};

const Section2 = (document: EBL_DCSADocument): JSX.Element => {
  const dcsa_ebl_issue_to = document?.dcsa_ebl_issue_to ?? [{
    platform_nm: "",
    legal_nm: "",
    registration_no: "",
    registration_loc: "",
    tax_ref: "",
    party_codes: [{
      party_code: "", code_provider: "", code_name: ""
    }]
  }];

  return <div className="border-black border-2">
    {(dcsa_ebl_issue_to ?? [{} as any])?.map((payload, index) => {
      return <Row>
        <MultiObjectField
          className="flex-1 flex flex-col border-black border-r"
          identifier="dcsa_ebl_issue_to"
          schema={EBL_DCSAJsonSchmea.properties}
          payload={payload}
          arrayKeys={[['platform_nm', 'legal_nm', 'registration_no', 'registration_loc', 'tax_ref']]}
          title={""}
        />

        {/* party_codes */}
        <MultiObjectField
          identifier="party_codes"
          schema={EBL_DCSAJsonSchmea.properties
            .dcsa_ebl_issue_to.items.properties}
          payload={payload?.party_codes}
          arrayKeys={[['party_code', 'code_provider', 'code_name']]}
        />
      </Row>
    })}
  </div>;
};

const Section1 = (document: EBL_DCSADocument): JSX.Element => {
  const { dcsa_ebl_jurisdiction, dcsa_ebl_seat } = document ??
  {
    dcsa_ebl_jurisdiction: "",
    dcsa_ebl_seat: "",
  };
  return (
    <div className="border-black border border-r-2">
      <div className="flex">
        <div className="w-1/3 border-black border">
          <div className="p-2 h-full flex justify-center items-center">
            <img data-testid="logo" style={{ width: "150px" }} src={logo} />
          </div>
        </div>
        <div className="w-2/3">
          <div className="flex">
            <div className="w-2/3 border-black border">
              <div className="p-2">
                <p className="mb-4">
                  <strong>DCSA Electronic Bill of Lading</strong>
                </p>
                <p className="text-sm">
                  Document issued by a carrier to a shipper that details the type, quantity, and destination of the goods being carried in DCSA standard
                </p>
              </div>
            </div>
            <div className="w-1/3 border-black border border-r-0">
              <div className="p-2 border-black border-b-2">
                Jurisdiction
                <p>
                  <strong className="break-all">{dcsa_ebl_jurisdiction}</strong>
                </p>
              </div>
              <div className="p-2">
                Seat
                <p>
                  <strong className="break-all">{dcsa_ebl_seat}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EBL_DCSATemplate: FunctionComponent<TemplateProps<EBL_DCSASchema>> = ({ document }) => {
  const documentData = getDocumentData(document) as EBL_DCSADocument;
  const qrCodeUrl = false //documentData?.links?.self.href;
  return (
    <Wrapper data-testid="bill-of-lading-template">
      <div className="w-[600px] mx-auto">
        <div className="mb-8">{Section1(documentData)}</div>
        <div className="text-center">
          <p>
            <strong>Issue To</strong>
          </p>
        </div>
        <div className="mb-8">{Section2(documentData)}</div>
        {Section3(documentData)}
        {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
      </div>
    </Wrapper>
  );
};
