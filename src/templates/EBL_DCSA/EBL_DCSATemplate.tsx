import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { getDocumentData } from "../../utils";
import { EBL_DCSADocument, EBL_DCSAJsonSchmea, EBL_DCSASchema } from "./types";
import logo from "/static/images/logo-sgtradex.svg";

const smallText = (text: string): JSX.Element => <p className="text-xs">{text}</p >;
const smallStrongText = (text: string): JSX.Element => (
  <p className="text-xs">
    <strong>{text}</strong>
  </p>
);

const parsedValue = (payload: any, identifier: string) => payload[identifier] !== null && payload[identifier] !== undefined ? payload[identifier] : ''

const SingleValueField = ({ identifier, schema, payload, index }: {
  identifier: string,
  schema: any,
  payload: any,
  index?: number
}): JSX.Element => {
  return <div className="flex-1 border-black border-t border-r h-100% last:border-r-0" key={`document-row-${index}`}>
    <div className="p-2">
      {smallText(schema?.[identifier]?.title)}
      <p style={{ wordBreak: "break-word" }}>{parsedValue(payload, identifier)}</p>
    </div>
  </div>
}

const MultiValueField = ({ identifier, schema, payload, index }: {
  identifier: string,
  schema: any,
  payload: any,
  index?: number
}): JSX.Element => {
  return <div className="flex-auto border-black border-t border-r last:border-r-0">
    <div className="p-2">
      {smallStrongText(schema?.[identifier]?.title)}
    </div>
    <div>
      {(payload as any)[identifier]?.map((value: any) => (
        <div className="flex">
          <div className="flex-1 border-black border-t">
            <div className="p-2">
              <div className="text-sm">{value}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
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

const SubTitle1 = ({ title }: { title: any }): JSX.Element => <p className="text-lg p-2"><strong>{title}</strong></p>;

const SubTitle2 = ({ title }: { title: any }): JSX.Element => <p className="text-md p-2"><strong>{title}</strong></p>;

const SubTitle3 = ({ title, italic }: { title: any, italic?: boolean }): JSX.Element => <p className={`text-sm p-2 ${italic ? 'italic' : ''}`}><strong>{title}</strong></p>;

// dcsa_ebl_document
const Section3 = (document: EBL_DCSADocument): JSX.Element => {
  const carrierName = '' //document.carrierName;
  const { dcsa_ebl_document } = document ?? { dcsa_ebl_document: [] };
  return <>
    {dcsa_ebl_document?.map(({
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
        <SubTitle1 title={`Document #${index + 1}`} />

        <div>
          {[['bol_ref', 'shipping_ref', 'status', 'shipped_onboard', 'freight_payment_cd', 'origin_charges_cd', 'destination_charges_cd', 'to_order'],
          ['shipped_onboard_date', 'terms_and_conditions', 'origin_receipt_type', 'destination_delivery_type', 'origin_cargo_movement_type', 'destination_cargo_movement_type', 'issue_date', 'received_shipment_date'],
          ['service_contract_ref', 'contract_quotation_ref', 'declared_value', 'declared_currency', 'carrier_cd', 'carrier_cd_provider', 'carrier_clause']]?.map((row, index) => (
            <div className="flex" key={index}>
              {row?.map((item, index) => (
                <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties} payload={document} />
              ))}
            </div>
          ))}

          <div className="flex" key={index}>
            {['place_of_receipt', 'port_of_load', 'port_of_discharge', 'place_of_delivery']?.map((item, index) => (
              <MultiValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties} payload={document} />
            ))}
          </div>

          {/* Issuing Party */}
          <Spacer />
          <div className="flex-auto border-black border-t">
            {issuing_party?.map((issuing_party_item, index) => {
              return <>
                <SubTitle2 title={`Issuing Party #${index + 1}`} />
                {[['name', 'address', 'country', 'contact_nm', 'contact_type', 'contact_details'], ['identifying_code', 'code_provider', 'code_name', 'tax_ref_type', 'tax_country_cd', 'tax_ref']].map((row, index) => (
                  <div className="flex">
                    {row?.map((item, index) => (
                      <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.issuing_party.items.properties} payload={issuing_party_item} />
                    ))}
                  </div>
                ))}
              </>
            })}
          </div>

          {/* Transports Details */}
          <Spacer />
          <div className="flex-auto border-black border-t">
            {transports?.map((transports_item, index) => {
              return <>
                <SubTitle2 title={`Transports Details #${index + 1}`} />
                {[['planned_arrival_date', 'planned_departure_date', 'pre_carriage', 'on_carriage', 'receipt_location_nm', 'receipt_location_type', 'receipt_unlocation_cd', 'receipt_facility_cd', 'receipt_facility_cd_provider'], ['pol_location_nm', 'pol_location_type', 'pol_unlocation_cd', 'delivery_location_nm', 'delivery_location_type', 'delivery_unlocation_cd', 'delivery_facility_cd', 'delivery_facility_cd_provider', 'pod_location_nm'], ['pod_location_type', 'pod_unlocation_cd', 'routing_location_nm', 'routing_location_type', 'routing_unlocation_cd', 'routing_facility_cd', 'routing_facility_cd_provider', 'vessel_nm', 'voy_no', 'universal_voy_no']]?.map((row) => (
                  <div className="flex">
                    {row?.map((item, index) => (
                      <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.transports.items.properties} payload={transports_item} />
                    ))}
                  </div>
                ))}
              </>
            })}
          </div>

          {/* Charges Details */}
          <Spacer />
          <div className="flex-auto border-black border-t">
            {charges?.map((charges_item, index) => {
              return <>
                <SubTitle2 title={`Charges Details #${index + 1}`} />
                <div className="flex">
                  {['name', 'currency_amount', 'currency_cd', 'payment_term', 'calculation_basis', 'unit_price', 'quantity']?.map((item, index) => (
                    <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.charges.items.properties} payload={charges_item} />
                  ))}
                </div>
              </>
            })}
          </div>

          {/* Place of Issue / Invoice Payable Location / Party Contact Details */}
          <Spacer />
          <div className="flex">
            {/* Place of Issue */}
            <div className="flex-1 flex flex-col border-black border-t border-r">
              <div className="p-2">
                {smallStrongText(`${EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.issue_place.title}`)}
              </div>
              {issue_place?.map((issue_place_item, index) => {
                return <div className="flex flex-1">
                  {['location_nm', 'location_type', 'unlocation_cd']?.map((item, index) => (
                    <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.issue_place.items.properties} payload={issue_place_item} />
                  ))}
                </div>
              })}
            </div>

            {/* Invoice Payable Location */}
            <div className="flex-1 flex flex-col border-black border-t border-r">
              <div className="p-2">
                {smallStrongText(`${EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.invoice_payable_at.title}`)}
              </div>
              {invoice_payable_at?.map((invoice_payable_at_item, index) => {
                return <div className="flex flex-1">
                  {['location_nm', 'location_type', 'unlocation_cd']?.map((item, index) => (
                    <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.invoice_payable_at.items.properties} payload={invoice_payable_at_item} />
                  ))}
                </div>
              })}
            </div>

            {/* Party Contact Details */}
            <div className="flex-1 flex flex-col border-black border-t">
              <div className="p-2">
                {smallStrongText(`${EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.contact_details.title}`)}
              </div>
              {contact_details?.map((contact_details_item, index) => {
                return <div className="flex flex-1">
                  {['contact_nm', 'contact_type', 'contact_value']?.map((item, index) => (
                    <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.contact_details.items.properties} payload={contact_details_item} />
                  ))}
                </div>
              })}
            </div>
          </div>

          {/* Consigment Items */}
          <Spacer />
          <div className="border-black border-t">
            {consignment?.map((consignment_item, index) => {
              return <>
                <SubTitle2 title={`${EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.title}  #${index + 1}`} />
                <div className="flex">
                  {['booking_ref', 'weight', 'weight_unit', 'volume', 'volume_unit', 'goods_description']?.map((item, index) => (
                    <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties} payload={consignment_item} />
                  ))}
                </div>
                <div className="flex">
                  {/* HS Code */}
                  <div className="flex-1 border-black border-r">
                    <MultiValueField identifier="hscode" schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties} payload={consignment_item} />
                  </div>

                  {/* Reference */}
                  <div className="flex-1 flex flex-col border-black border-t border-r">
                    <div className="p-2">
                      {smallStrongText(`${EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.references.title}`)}
                    </div>
                    {consignment_item?.references?.map((references_item, index) => {
                      return <div className="flex flex-1">
                        {['type', 'value']?.map((item, index) => (
                          <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.references.items.properties} payload={references_item} />
                        ))}
                      </div>
                    })}
                  </div>

                  {/* Custom Reference */}
                  <div className="flex-1 flex flex-col border-black border-t">
                    <div className="p-2">
                      {smallStrongText(`${EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.custom_references.title}`)}
                    </div>
                    {consignment_item?.custom_references?.map((custom_references_item, index) => {
                      return <div className="flex flex-1">
                        {['type', 'country_cd', 'value']?.map((item, index) => (
                          <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.custom_references.items.properties} payload={custom_references_item} />
                        ))}
                      </div>
                    })}
                  </div>
                </div>

                {/* Cargo Items */}
                <IndentedTable>
                  {consignment_item?.cargo_items?.map((cargo_item, index) => {
                    return <>
                      <SubTitle3 title={`${EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.cargo_items.title}  #${index + 1}`} />
                      <div className="flex">
                        <div className="flex-1 flex">
                          {/* 'shipping_marks', 'equipment_ref', 'weight', 'weight_unit', 'volume', 'volume_unit' */}
                          {['shipping_marks', 'equipment_ref', 'weight', 'weight_unit', 'volume', 'volume_unit']?.map((item, index) => (
                            <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.cargo_items.items.properties} payload={cargo_item} />
                          ))}
                        </div>
                      </div>

                      {/* Custom Reference */}
                      <div className="flex">
                        <div className="flex-1 flex flex-col border-black border-t">
                          <div className="p-2">
                            {smallStrongText(`${EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.cargo_items.items.properties.customs_references.title}`)}
                          </div>
                          {cargo_item?.customs_references?.map((customs_references_item, index) => {
                            return <div className="flex flex-1">
                              {['type', 'country_cd', 'value']?.map((item, index) => (
                                <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.cargo_items.items.properties.customs_references.items.properties} payload={customs_references_item} />
                              ))}
                            </div>
                          })}
                        </div>
                      </div>

                      {/* outer_packaging */}
                      <IndentedTable>
                        {cargo_item?.outer_packaging?.map((outer_packaging_item, index) => {
                          return <>
                            <SubTitle3 title={`${EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.cargo_items.items.properties.outer_packaging.title} #${index + 1}`} italic />
                            <div className="flex">
                              {/* 'package_cd', 'package_no', 'description', 'imo_packaging_cd' */}
                              {['package_cd', 'package_no', 'description', 'imo_packaging_cd']?.map((item, index) => (
                                <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.cargo_items.items.properties.outer_packaging.items.properties} payload={outer_packaging_item} />
                              ))}
                            </div>

                            {/* dangerous_goods */}
                            <IndentedTable>
                              {outer_packaging_item?.dangerous_goods?.map((dangerous_goods_item, index) => {
                                return <>
                                  <SubTitle3 title={`${EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.cargo_items.items.properties.outer_packaging.items.properties.dangerous_goods.title} #${index + 1}`} italic />
                                  {[['code_variant_list', 'proper_shipping_nm', 'technical_nm', 'imo_class', 'subsidiary_risk1', 'subsidiary_risk2', 'is_marine_pollutant', 'packing_group'], ['is_limited_quantity', 'is_excepted_quantity', 'is_salvage_packings', 'is_empty_uncleaned_residue', 'is_waste', 'is_hot', 'is_competent_authority_approval_provided'], ['competent_authority_approval', 'ems_no', 'end_of_holding_time', 'fumigation_dt', 'is_reportable_quantity', 'inhalation_zone', 'reference_standard_type', 'reference_number']].map((row, index) => (
                                    <div className="flex" key={index}>
                                      {row?.map((item, index) => (
                                        <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.consignment.items.properties.cargo_items.items.properties.outer_packaging.items.properties.dangerous_goods.items.properties} payload={dangerous_goods_item} />
                                      ))}
                                    </div>
                                  ))}

                                  {/* 'gross_weight', 'net_weight', 'net_explosive_content', 'volume' */}
                                  <div className="flex">
                                    {/* Gross Weight */}
                                    <div className="flex-1 flex flex-col border-black border-t border-r">
                                      <div className="p-2">
                                        {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                                          .dcsa_ebl_document.items.properties
                                          .consignment.items.properties
                                          .cargo_items.items.properties
                                          .outer_packaging.items.properties
                                          .dangerous_goods.items.properties
                                          .gross_weight
                                          .title}`)}
                                      </div>
                                      {dangerous_goods_item?.gross_weight?.map((payload, index) => {
                                        return <div className="flex flex-1">
                                          {['value', 'unit']?.map((item, index) => (
                                            <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                                              .dcsa_ebl_document.items.properties
                                              .consignment.items.properties
                                              .cargo_items.items.properties
                                              .outer_packaging.items.properties
                                              .dangerous_goods.items.properties
                                              .gross_weight
                                              .items.properties} payload={payload} />
                                          ))}
                                        </div>
                                      })}
                                    </div>

                                    {/* Net Weight */}
                                    <div className="flex-1 flex flex-col border-black border-t border-r">
                                      <div className="p-2">
                                        {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                                          .dcsa_ebl_document.items.properties
                                          .consignment.items.properties
                                          .cargo_items.items.properties
                                          .outer_packaging.items.properties
                                          .dangerous_goods.items.properties
                                          .net_weight
                                          .title}`)}
                                      </div>
                                      {dangerous_goods_item?.net_weight?.map((payload, index) => {
                                        return <div className="flex flex-1">
                                          {['value', 'unit']?.map((item, index) => (
                                            <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                                              .dcsa_ebl_document.items.properties
                                              .consignment.items.properties
                                              .cargo_items.items.properties
                                              .outer_packaging.items.properties
                                              .dangerous_goods.items.properties
                                              .net_weight
                                              .items.properties} payload={payload} />
                                          ))}
                                        </div>
                                      })}
                                    </div>

                                    {/* Net Explosive Content */}
                                    <div className="flex-1 flex flex-col border-black border-t border-r">
                                      <div className="p-2">
                                        {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                                          .dcsa_ebl_document.items.properties
                                          .consignment.items.properties
                                          .cargo_items.items.properties
                                          .outer_packaging.items.properties
                                          .dangerous_goods.items.properties
                                          .net_explosive_content
                                          .title}`)}
                                      </div>
                                      {dangerous_goods_item?.net_explosive_content?.map((payload, index) => {
                                        return <div className="flex flex-1">
                                          {['value', 'unit']?.map((item, index) => (
                                            <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                                              .dcsa_ebl_document.items.properties
                                              .consignment.items.properties
                                              .cargo_items.items.properties
                                              .outer_packaging.items.properties
                                              .dangerous_goods.items.properties
                                              .net_explosive_content
                                              .items.properties} payload={payload} />
                                          ))}
                                        </div>
                                      })}
                                    </div>

                                    {/* Volume */}
                                    <div className="flex-1 flex flex-col border-black border-t">
                                      <div className="p-2">
                                        {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                                          .dcsa_ebl_document.items.properties
                                          .consignment.items.properties
                                          .cargo_items.items.properties
                                          .outer_packaging.items.properties
                                          .dangerous_goods.items.properties
                                          .volume
                                          .title}`)}
                                      </div>
                                      {dangerous_goods_item?.volume?.map((payload, index) => {
                                        return <div className="flex flex-1">
                                          {['value', 'unit']?.map((item, index) => (
                                            <SingleValueField
                                              identifier={item}
                                              schema={EBL_DCSAJsonSchmea.properties
                                                .dcsa_ebl_document.items.properties
                                                .consignment.items.properties
                                                .cargo_items.items.properties
                                                .outer_packaging.items.properties
                                                .dangerous_goods.items.properties
                                                .volume
                                                .items.properties}
                                              payload={payload}
                                            />
                                          ))}
                                        </div>
                                      })}
                                    </div>
                                  </div>

                                  {/* 'inner_packaging', 'emergency_contact' */}
                                  <div className="flex">
                                    {/* Inner Packagings */}
                                    <div className="flex-1 flex flex-col border-black border-t border-r">
                                      <div className="p-2">
                                        {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                                          .dcsa_ebl_document.items.properties
                                          .consignment.items.properties
                                          .cargo_items.items.properties
                                          .outer_packaging.items.properties
                                          .dangerous_goods.items.properties
                                          .inner_packaging
                                          .title}`)}
                                      </div>
                                      {dangerous_goods_item?.inner_packaging?.map((payload, index) => {
                                        return <div className="flex flex-1">
                                          {['quantity', 'material', 'description']?.map((item, index) => (
                                            <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                                              .dcsa_ebl_document.items.properties
                                              .consignment.items.properties
                                              .cargo_items.items.properties
                                              .outer_packaging.items.properties
                                              .dangerous_goods.items.properties
                                              .inner_packaging
                                              .items.properties} payload={payload} />
                                          ))}
                                        </div>
                                      })}
                                    </div>

                                    {/* Emergency Contact Details */}
                                    <div className="flex-1 flex flex-col border-black border-t">
                                      <div className="p-2">
                                        {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                                          .dcsa_ebl_document.items.properties
                                          .consignment.items.properties
                                          .cargo_items.items.properties
                                          .outer_packaging.items.properties
                                          .dangerous_goods.items.properties
                                          .emergency_contact
                                          .title}`)}
                                      </div>
                                      {dangerous_goods_item?.emergency_contact?.map((payload, index) => {
                                        return <div className="flex flex-1">
                                          {['contact', 'provider', 'phone', 'ref_no']?.map((item, index) => (
                                            <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                                              .dcsa_ebl_document.items.properties
                                              .consignment.items.properties
                                              .cargo_items.items.properties
                                              .outer_packaging.items.properties
                                              .dangerous_goods.items.properties
                                              .emergency_contact
                                              .items.properties} payload={payload} />
                                          ))}
                                        </div>
                                      })}
                                    </div>
                                  </div>

                                  {/* limits */}
                                  <div className="flex">
                                    {/* Limits */}
                                    <div className="flex-1 flex flex-col border-black border-t">
                                      <div className="p-2">
                                        {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                                          .dcsa_ebl_document.items.properties
                                          .consignment.items.properties
                                          .cargo_items.items.properties
                                          .outer_packaging.items.properties
                                          .dangerous_goods.items.properties
                                          .limits
                                          .title}`)}
                                      </div>
                                      {dangerous_goods_item?.limits?.map((payload, index) => {
                                        return <div className="flex flex-1">
                                          {['temperature_unit', 'flash_point', 'transport_control_temperature', 'transport_emergency_temperature', 'sadt', 'sapt']?.map((item, index) => (
                                            <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                                              .dcsa_ebl_document.items.properties
                                              .consignment.items.properties
                                              .cargo_items.items.properties
                                              .outer_packaging.items.properties
                                              .dangerous_goods.items.properties
                                              .limits
                                              .items.properties} payload={payload} />
                                          ))}
                                        </div>
                                      })}
                                    </div>
                                  </div>
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
          </div >

          {/* utilized_transport_equipment */}
          <Spacer />
          <div className="border-black border-t">
            {utilized_transport_equipment?.map((utilized_transport_equipment_item, index) => {
              return <>
                <SubTitle2 title={`${EBL_DCSAJsonSchmea.properties.dcsa_ebl_document.items.properties.utilized_transport_equipment.title}  #${index + 1}`} />
                <div className="flex">
                  {['cargo_gross_weight', 'cargo_gross_weight_unit', 'cargo_gross_volume', 'cargo_gross_volume_unit', 'is_shipper_owned', 'is_non_operating_reefer']?.map((item, index) => (
                    <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                      .dcsa_ebl_document.items.properties
                      .utilized_transport_equipment
                      .items.properties} payload={utilized_transport_equipment_item} />
                  ))}
                </div>

                {/* 'equipment', 'seals' */}
                <div className="flex">
                  {/* equipment */}
                  <div className="flex-1 flex flex-col border-black border-t border-r">
                    <div className="p-2">
                      {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                        .dcsa_ebl_document.items.properties
                        .utilized_transport_equipment.items.properties
                        .equipment
                        .title}`)}
                    </div>
                    {utilized_transport_equipment_item?.equipment?.map((payload, index) => {
                      return <div className="flex flex-1">
                        {['equipment_ref', 'iso_equipment_cd', 'tare_weight', 'weight_unit']?.map((item, index) => (
                          <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                            .dcsa_ebl_document.items.properties
                            .utilized_transport_equipment.items.properties
                            .equipment
                            .items.properties} payload={payload} />
                        ))}
                      </div>
                    })}
                  </div>

                  {/* seals */}
                  <div className="flex-1 flex flex-col border-black border-t">
                    <div className="p-2">
                      {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                        .dcsa_ebl_document.items.properties
                        .utilized_transport_equipment.items.properties
                        .seals
                        .title}`)}
                    </div>
                    {utilized_transport_equipment_item?.seals?.map((payload, index) => {
                      return <div className="flex flex-1">
                        {['seal_number', 'seal_source', 'seal_type']?.map((item, index) => (
                          <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                            .dcsa_ebl_document.items.properties
                            .utilized_transport_equipment.items.properties
                            .seals
                            .items.properties} payload={payload} />
                        ))}
                      </div>
                    })}
                  </div>
                </div>

                {/* 'references', 'customs_references' */}
                <div className="flex">
                  {/* references */}
                  <div className="flex-1 flex flex-col border-black border-t border-r">
                    <div className="p-2">
                      {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                        .dcsa_ebl_document.items.properties
                        .utilized_transport_equipment.items.properties
                        .references
                        .title}`)}
                    </div>
                    {utilized_transport_equipment_item?.references?.map((payload, index) => {
                      return <div className="flex flex-1">
                        {['type', 'value']?.map((item, index) => (
                          <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                            .dcsa_ebl_document.items.properties
                            .utilized_transport_equipment.items.properties
                            .references
                            .items.properties} payload={payload} />
                        ))}
                      </div>
                    })}
                  </div>

                  {/* customs_references */}
                  <div className="flex-1 flex flex-col border-black border-t">
                    <div className="p-2">
                      {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                        .dcsa_ebl_document.items.properties
                        .utilized_transport_equipment.items.properties
                        .customs_references
                        .title}`)}
                    </div>
                    {utilized_transport_equipment_item?.customs_references?.map((payload, index) => {
                      return <div className="flex flex-1">
                        {['type', 'country_cd', 'value']?.map((item, index) => (
                          <SingleValueField
                            identifier={item}
                            schema={EBL_DCSAJsonSchmea.properties
                              .dcsa_ebl_document.items.properties
                              .utilized_transport_equipment.items.properties
                              .customs_references
                              .items.properties}
                            payload={payload}
                          />
                        ))}
                      </div>
                    })}
                  </div>
                </div>

                {/* 'active_reefer' */}
                <IndentedTable>
                  {/* active_reefer */}
                  <div className="flex-1 flex flex-col">
                    {utilized_transport_equipment_item?.active_reefer?.map((payload, index) => {
                      return <>
                        <div className="p-2">
                          {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                            .dcsa_ebl_document.items.properties
                            .utilized_transport_equipment.items.properties
                            .active_reefer
                            .title} #${index + 1}`)}
                        </div>
                        {[['temperature_setpoint', 'temperature_unit', 'o2_setpoint', 'co2_setpoint', 'humidity_setpoint', 'air_exchange_setpoint'], ['air_exchange_unit', 'is_ventilation_open', 'is_drain_holes_open', 'is_bulb_mode', 'is_cold_treatment_required', 'is_controlled_atmosphere_required']].map((row, index) => {
                          return <div className="flex flex-1">
                            {row?.map((item, index) => (
                              <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                                .dcsa_ebl_document.items.properties
                                .utilized_transport_equipment.items.properties
                                .active_reefer
                                .items.properties} payload={payload} />
                            ))}
                          </div>
                        })}
                      </>
                    })}
                  </div>
                </IndentedTable>
              </>
            })}
          </div>

          {/* references / customs_references */}
          <Spacer />
          <div className="flex">
            {/* references */}
            <div className="flex-1 flex flex-col border-black border-t border-r">
              <div className="p-2">
                {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                  .dcsa_ebl_document.items.properties
                  .references
                  .title}`)}
              </div>
              {references?.map((references_item, index) => {
                return <div className="flex flex-1">
                  {['type', 'value']?.map((item, index) => (
                    <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                      .dcsa_ebl_document.items.properties
                      .references
                      .items.properties} payload={references_item} />
                  ))}
                </div>
              })}
            </div>

            {/* customs_references */}
            <div className="flex-1 flex flex-col border-black border-t">
              <div className="p-2">
                {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                  .dcsa_ebl_document.items.properties
                  .customs_references
                  .title}`)}
              </div>
              {customs_references?.map((customs_references_item, index) => {
                return <div className="flex flex-1">
                  {['type', 'country_cd', 'value']?.map((item, index) => (
                    <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                      .dcsa_ebl_document.items.properties
                      .customs_references
                      .items.properties} payload={customs_references_item} />
                  ))}
                </div>
              })}
            </div>
          </div>

          {/* document_party */}
          <Spacer />
          <div className="border-black border-t">
            {document_party?.map((document_party_item, index) => {
              return <>
                <SubTitle2 title={`${EBL_DCSAJsonSchmea.properties
                  .dcsa_ebl_document.items.properties
                  .document_party
                  .title}  #${index + 1}`} />

                <div className="flex">
                  {['party_function', 'displayed_address', 'notified']?.map((item, index) => (
                    <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                      .dcsa_ebl_document.items.properties
                      .document_party
                      .items.properties} payload={document_party_item} />
                  ))}
                </div>

                {/* Party */}
                <IndentedTable>
                  {document_party_item?.party?.map((party_item, index) => {
                    return <>
                      <SubTitle3 title={`${EBL_DCSAJsonSchmea.properties
                        .dcsa_ebl_document.items.properties
                        .document_party.items.properties
                        .party
                        .title}  #${index + 1}`} />

                      {/* 'name', 'address', 'address_country', 'contact_nm', 'contact_type', 'contact_value' */}
                      <div className="flex">
                        {['name', 'address', 'address_country', 'contact_nm', 'contact_type', 'contact_value'].map((item, index) => (
                          <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                            .dcsa_ebl_document.items.properties
                            .document_party.items.properties
                            .party
                            .items.properties} payload={party_item} />
                        ))}
                      </div>

                      {/* 'identifying_code', 'tax_ref' */}
                      <div className="flex">
                        {/* identifying_code */}
                        <div className="flex-1 flex flex-col border-black border-t border-r">
                          <div className="p-2">
                            {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                              .dcsa_ebl_document.items.properties
                              .document_party.items.properties
                              .party.items.properties
                              .identifying_code
                              .title}`)}
                          </div>
                          {party_item?.identifying_code?.map((payload, index) => {
                            return <div className="flex flex-1">
                              {['party_cd', 'code_provider', 'code_name']?.map((item, index) => (
                                <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                                  .dcsa_ebl_document.items.properties
                                  .document_party.items.properties
                                  .party.items.properties
                                  .identifying_code
                                  .items.properties} payload={payload} />
                              ))}
                            </div>
                          })}
                        </div>

                        {/* tax_ref */}
                        <div className="flex-1 flex flex-col border-black border-t">
                          <div className="p-2">
                            {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                              .dcsa_ebl_document.items.properties
                              .document_party.items.properties
                              .party.items.properties
                              .tax_ref
                              .title}`)}
                          </div>
                          {party_item?.tax_ref?.map((payload, index) => {
                            return <div className="flex flex-1">
                              {['type', 'country_code', 'value']?.map((item, index) => (
                                <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties
                                  .dcsa_ebl_document.items.properties
                                  .document_party.items.properties
                                  .party.items.properties
                                  .tax_ref
                                  .items.properties} payload={payload} />
                              ))}
                            </div>
                          })}
                        </div>
                      </div>
                    </>
                  })}
                </IndentedTable >
              </>
            })}
          </div >

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
    {dcsa_ebl_issue_to?.map((payload, index) => {
      return <>
        <div className="flex">
          <div className="flex-1 flex border-black border-r">
            {/* platform_nm, legal_nm, registration_no, registration_loc, tax_ref */}
            {['platform_nm', 'legal_nm', 'registration_no', 'registration_loc', 'tax_ref']?.map((item, index) => (
              <SingleValueField identifier={item} schema={EBL_DCSAJsonSchmea.properties.dcsa_ebl_issue_to.items.properties} payload={payload} />
            ))}
          </div>

          {/* party_codes */}
          <div className="flex-1 flex flex-col border-black border-t">
            <div className="p-2">
              {smallStrongText(`${EBL_DCSAJsonSchmea.properties
                .dcsa_ebl_issue_to.items.properties
                .party_codes
                .title}`)}
            </div>
            {payload?.party_codes?.map((payload, index) => {
              return <div className="flex flex-1">
                {['party_code', 'code_provider', 'code_name']?.map((item, index) => (
                  <SingleValueField
                    identifier={item}
                    schema={EBL_DCSAJsonSchmea.properties
                      .dcsa_ebl_issue_to.items.properties
                      .party_codes
                      .items.properties}
                    payload={payload} />
                ))}
              </div>
            })}
          </div>
        </div>
      </>
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
        <div className="w-1/2 border-black border">
          <div className="p-2 h-full flex justify-center items-center">
            <img data-testid="logo" style={{ width: "150px" }} src={logo} />
          </div>
        </div>
        <div className="w-1/2">
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
      <div className="min-w-[700px]">
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
