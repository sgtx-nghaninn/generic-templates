import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { getDocumentData } from "../../utils";
import { EBL_DCSADocument, EBL_DCSASchema } from "./types";
import logo from "/static/images/logo-sgtradex.svg";

const smallText = (text: string): JSX.Element => <p style={{ fontSize: "0.8em" }}>{text}</p>;
const smallStrongText = (text: string): JSX.Element => (
  <p style={{ fontSize: "0.8em" }}>
    <strong>{text}</strong>
  </p>
);

const Section3 = (document: EBL_DCSADocument): JSX.Element => {
  const carrierName = '' //document.carrierName;
  const { dcsa_ebl_document } = document ?? { dcsa_ebl_document: [] };
  return <>
    {dcsa_ebl_document?.map(({ bol_ref, shipping_ref, status, shipped_onboard, freight_payment_cd, origin_charges_cd, destination_charges_cd, to_order, place_of_receipt, port_of_load, port_of_discharge, place_of_delivery, shipped_onboard_date, terms_and_conditions, origin_receipt_type, destination_delivery_type, origin_cargo_movement_type, destination_cargo_movement_type, issue_date, received_shipment_date, service_contract_ref, contract_quotation_ref, declared_value, declared_currency, carrier_cd, carrier_cd_provider, carrier_clause }, index) => (
      <div className="border-black border">
        Documents
        <div>
          <div className="flex">
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Bill of Lading Reference Number")}
                <div>{bol_ref}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Shipping Instructions Reference")}
                <div>{shipping_ref}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Document Status")}
                <div>{status}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Is Shipped Onboard Type")}
                <div>{shipped_onboard}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Freight Payment Term Code")}
                <div>{freight_payment_cd}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Origin Charges Payment Term Code")}
                <div>{origin_charges_cd}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Destination Charges Payment Term Code")}
                <div>{destination_charges_cd}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Is To Order")}
                <div>{to_order}</div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex-auto border-black border-t border-l border-r">
              <div>
                <div className="p-2">
                  {smallText("Place of Receipt")}
                </div>
                <div>
                  {place_of_receipt?.map((item, index) => (
                    <div className="flex" key={index}>
                      <div className="flex-1 border-black border-t">
                        <div className="p-2">
                          {/* {smallText("Party Code")} */}
                          <div>{item}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-auto border-black border-t border-l border-r">
              <div>
                <div className="p-2">
                  {smallText("Port of Load")}
                </div>
                <div>
                  {port_of_load?.map((item, index) => (
                    <div className="flex" key={index}>
                      <div className="flex-1 border-black border-t">
                        <div className="p-2">
                          {/* {smallText("Party Code")} */}
                          <div>{item}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-auto border-black border-t border-l border-r">
              <div>
                <div className="p-2">
                  {smallText("Port of Discharge")}
                </div>
                <div>
                  {port_of_discharge?.map((item, index) => (
                    <div className="flex" key={index}>
                      <div className="flex-1 border-black border-t">
                        <div className="p-2">
                          {/* {smallText("Party Code")} */}
                          <div>{item}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-auto border-black border-t border-l border-r">
              <div>
                <div className="p-2">
                  {smallText("Place of Delivery")}
                </div>
                <div>
                  {place_of_delivery?.map((item, index) => (
                    <div className="flex" key={index}>
                      <div className="flex-1 border-black border-t">
                        <div className="p-2">
                          {/* {smallText("Party Code")} */}
                          <div>{item}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Bill of Lading Reference Number")}
                <div>{shipped_onboard_date}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Shipping Instructions Reference")}
                <div>{terms_and_conditions}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Document Status")}
                <div>{origin_receipt_type}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Is Shipped Onboard Type")}
                <div>{destination_delivery_type}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Freight Payment Term Code")}
                <div>{origin_cargo_movement_type}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Origin Charges Payment Term Code")}
                <div>{destination_cargo_movement_type}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Destination Charges Payment Term Code")}
                <div>{issue_date}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Is To Order")}
                <div>{received_shipment_date}</div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Bill of Lading Reference Number")}
                <div>{service_contract_ref}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Shipping Instructions Reference")}
                <div>{contract_quotation_ref}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Document Status")}
                <div>{declared_value}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Is Shipped Onboard Type")}
                <div>{declared_currency}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Freight Payment Term Code")}
                <div>{carrier_cd}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Origin Charges Payment Term Code")}
                <div>{carrier_cd_provider}</div>
              </div>
            </div>
            <div className="w-1/4 border-black border">
              <div className="p-2 h-24">
                {smallText("Destination Charges Payment Term Code")}
                <div>{carrier_clause}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>;
};

const Section2 = (document: EBL_DCSADocument): JSX.Element => {
  const { dcsa_ebl_issue_to } = document ?? { dcsa_ebl_issue_to: [] };

  return <>
    {dcsa_ebl_issue_to.map(({ platform_nm, legal_nm, registration_no, registration_loc, tax_ref, party_codes }, index) => (
      <div className="border-black border-t border-l border-r last:border-b-2">
        <div className="flex">
          <div className="w-1/8 border-black border-t border-l border-r">
            <div className="p-2">
              {smallText("Send to Platform")}
              <div>{platform_nm}</div>
            </div>
          </div>
          <div className="w-1/8 border-black border-t border-l border-r">
            <div className="p-2">
              {smallText("Legal Name")}
              <div>{legal_nm}</div>
            </div>
          </div>
          <div className="w-1/8 border-black border-t border-l border-r">
            <div className="p-2">
              {smallText("Registration Number")}
              <div>{registration_no}</div>
            </div>
          </div>
          <div className="w-1/8 border-black border-t border-l border-r">
            <div className="p-2">
              {smallText("Location of Registration")}
              <div>{registration_loc}</div>
            </div>
          </div>
          <div className="w-1/8 border-black border-t border-l border-r">
            <div className="p-2">
              {smallText("Tax Reference")}
              <div>{tax_ref}</div>
            </div>
          </div>
          <div className="flex-auto border-black border-t border-l border-r">
            <div>
              <div className="p-2">
                {smallText("Party Codes")}
              </div>
              <div>
                {party_codes?.map(({ party_code, code_provider, code_name }, index) => (
                  <div className="flex" key={index}>
                    <div className="flex-1 border-black border-t">
                      <div className="p-2">
                        {smallText("Party Code")}
                        <div>{party_code}</div>
                      </div>
                    </div>
                    <div className="flex-1 border-black border-t">
                      <div className="p-2">
                        {smallText("Code List Provider")}
                        <div>{code_provider}</div>
                      </div>
                    </div>
                    <div className="flex-1 border-black border-t">
                      <div className="p-2">
                        {smallText("Code List Name")}
                        <div>{code_name}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>;
};

const Section1 = (document: EBL_DCSADocument): JSX.Element => {
  const { dcsa_ebl_jurisdiction, dcsa_ebl_seat } = document ??
  {
    dcsa_ebl_jurisdiction: "",
    dcsa_ebl_seat: "",
  };
  return (
    <div className="border-black border">
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
            <div className="w-1/3 border-black border">
              <div className="p-2 border-black border-b-2">
                Jurisdiction
                <p data-testid="blNumber">
                  <strong className="break-all">{dcsa_ebl_jurisdiction}</strong>
                </p>
              </div>
              <div className="p-2">
                Seat
                <p data-testid="blNumber">
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
      <div className="mb-8">{Section1(documentData)}</div>
      <div className="text-center">
        <p>
          <strong>Issue To</strong>
        </p>
      </div>
      <div className="mb-8">{Section2(documentData)}</div>
      {Section3(documentData)}
      {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
    </Wrapper>
  );
};
