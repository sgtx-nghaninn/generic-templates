import { TTv4 } from "@tradetrust/open-attestation";
import { InvoiceDocumentSchemaTTV4 } from "./types";

export const InvoiceSampleIDVCV4: InvoiceDocumentSchemaTTV4 = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/io/tradetrust/4.0/alpha-context.json",
  ],
  type: ["VerifiableCredential", "TradeTrustCredential"],
  validFrom: "2021-03-08T12:00:00+08:00",
  issuer: {
    id: "did:ethr:0xE94E4f16ad40ADc90C29Dc85b42F1213E034947C",
    type: "TradeTrustIssuer",
    name: "My Own Company Pte Ltd",
    identityProof: {
      identityProofType: TTv4.IdentityProofType.Idvc,
      identifier: "My Own Company Pte Ltd",
      identityVC: {
        type: "TradeTrustIdentityVC",
        data: {
          "@context": [
            "https://w3id.org/security/bbs/v1",
            "https://www.w3.org/2018/credentials/v1",
            "https://stg.issuer.myinfo.gov.sg/myinfobusiness/schema/corporatebasicdetails/v1",
            "https://w3id.org/vc/status-list/2021/v1",
          ],
          id: "https://sbl.alwaysdata.net/oa/credentials/123456789",
          type: ["VerifiableCredential"],
          issuer: "did:web:sbl.alwaysdata.net:oa",
          credentialSubject: {
            uen: "198801234E",
            companyname: "My Own Company Pte Ltd",
            type: ["CorporateBasicDetails"],
            id: "did:ethr:0xE94E4f16ad40ADc90C29Dc85b42F1213E034947C",
          },
          expirationDate: "2023-11-01T06:45:43Z",
          credentialStatus: {
            id: "https://sbl.alwaysdata.net/oa/status/1#325",
            type: "StatusList2021Entry",
            statusListIndex: 325,
            statusListCredential: "https://sbl.alwaysdata.net/oa/status/1/325",
          },
          issuanceDate: "2023-22-13T01:35:08Z",
          proof: {
            type: "BbsBlsSignature2020",
            created: "2023-10-18T07:14:46Z",
            proofPurpose: "assertionMethod",
            proofValue:
              "tqvUVZOPaY/A+7Wu47HZIYbboPU/MPGhb1EPLUKKPRwmRe8QJ/dzjRviQ5fAbR88TjSalqLbaBeopNocjrl7TmzCOlLQxGeNC4El1TCICu5tiX0HxGSNAPY4t5CglTLMTsdu5kg4f0a5MGQTnFgwyw==",
            verificationMethod: "did:web:sbl.alwaysdata.net:oa#didkey",
          },
        },
      },
    },
  },
  credentialStatus: {
    type: "TradeTrustCredentialStatus",
    credentialStatusType: TTv4.CredentialStatusType.None,
  },
  renderMethod: {
    type: "TradeTrustRenderMethod",
    renderMethodType: TTv4.RenderMethodType.EmbeddedRenderer,
    name: "INVOICE",
    url: "https://generic-templates.tradetrust.io",
  },
  credentialSubject: {
    name: "TradeTrust Invoice",
    id: "urn:uuid:a013fb9d-bb03-4056-b696-05575eceaf42",
    date: "2018-02-21",
    customerId: "564",
    terms: "Due Upon Receipt",
    billFrom: {
      name: "ABC Company",
      streetAddress: "Level 1, Industry Offices",
      city: "Singapore",
      postalCode: "123456",
      phoneNumber: "60305029",
    },
    billTo: {
      company: {
        name: "DEF Company",
        streetAddress: "Level 2, Industry Offices",
        city: "Singapore",
        postalCode: "612345",
        phoneNumber: "61204028",
      },
      name: "James Lee",
      email: "def@company.com",
    },
    billableItems: [
      {
        description: "Service Fee",
        quantity: "1",
        unitPrice: "200",
        amount: "200",
      },
      {
        description: "Labor: 5 hours at $75/hr",
        quantity: "5",
        unitPrice: "75",
        amount: "375",
      },
      {
        description: "New client discount",
        quantity: "1",
        unitPrice: "50",
        amount: "50",
      },
    ],
    subtotal: "625",
    tax: "0",
    taxTotal: "0",
    total: "625",
  },
  proof: {
    type: "TradeTrustMerkleProofSignature2018",
    proofPurpose: TTv4.ProofPurpose.AssertionMethod,
    targetHash: "841c8d1fb121bf7baab0b1677c91dc47cca6aa1e8ac772f38e96f8b4315d1150",
    proofs: [],
    merkleRoot: "841c8d1fb121bf7baab0b1677c91dc47cca6aa1e8ac772f38e96f8b4315d1150",
    salts:
      "W3sidmFsdWUiOiJiYjMyNjdiNGRkZGY0ZWRkMzJlZDNmY2YxYTlhOWM5NzY3NGFiYjBlMjk5MDc3ZTgxNjA0MzIyYjA0Y2IyZjg3IiwicGF0aCI6IkBjb250ZXh0WzBdIn0seyJ2YWx1ZSI6ImZiNzJiODdmNGRjMTM3MmFmNGQzOTcxYWQ3OWFiNzMxNDIwNGU0ZWU5YmU4NmE4N2NhNDQwYzdjMmU1OTY0ZGIiLCJwYXRoIjoiQGNvbnRleHRbMV0ifSx7InZhbHVlIjoiN2EzMTliZTQ4Nzk1ZDRlMjAxYjAyMDE0YzlmMjFkZmJlZjM3YWE2ODZlMzViNWM2Y2YyMjMwYTExMGRjNDJiNiIsInBhdGgiOiJ0eXBlWzBdIn0seyJ2YWx1ZSI6ImQ2MzlhNzI4MGVjNjNlYzc2N2MwYTFiZmRmZGQ3MTQxYjVjNWNlZTg5NzU2ZmIxMGYzMTZhZGM3MTA3MGU4OTAiLCJwYXRoIjoidHlwZVsxXSJ9LHsidmFsdWUiOiIyN2M5YzYwMzUzMGFmYWExZTdjYmFjNTI4Y2VmM2ZiZjJhNTA5NTNjNjg2MzY0NTgyNWY2MzhmMDAwOWZlNjg5IiwicGF0aCI6InZhbGlkRnJvbSJ9LHsidmFsdWUiOiI1ZGMwNmM2ZWZiZTMyYzAzODgyMmRmYzNlMGI5NjJiMzc4YzI4MjE0MzdkZTU0NjU4MzUyZWVmYWJlNGM0OTUxIiwicGF0aCI6Imlzc3Vlci5pZCJ9LHsidmFsdWUiOiI1ZjBhZTFmM2ZjODYzMjFmZmYwMGRkMzZiN2QxNDBhOGY3Y2U2Y2FiOGQ1ZmIwZDE3NDcxNThkMTQ3NWJkNmZhIiwicGF0aCI6Imlzc3Vlci50eXBlIn0seyJ2YWx1ZSI6ImUxMDZmZTFlMzZhYzA1YzZiYzgyNDg2NWVmYmI5YzM5MGNkZWI2OTQ3NjZjZGYzNDIyZTEwZWE4OTEzMDVmNjgiLCJwYXRoIjoiaXNzdWVyLm5hbWUifSx7InZhbHVlIjoiOWJjZDE3YzRiNDQ1MjE0YjMwYTMxMGNjZDIyMWQ1MzcxNjY1NGQxZDBmZjc3YmZjNzI5YjZkODE1ZmU1MGJmZCIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVByb29mVHlwZSJ9LHsidmFsdWUiOiIwM2FmYzQzNTViNTQyYTc2ZDM4MTQ5NDlhNjMyZjEzYTM0YzcyOTE4MWM4MmI5ODRiMmFhM2RiMDgxN2FjMzRhIiwicGF0aCI6Imlzc3Vlci5pZGVudGl0eVByb29mLmlkZW50aWZpZXIifSx7InZhbHVlIjoiMTFkYjMzODJmMzI0OTNjOTViMjYwNWY4NWQ0MWVmMmJkMTcwMTlhMDFkNTM3NTk5Y2M3Y2Y2OGI3NGNjNjdlYSIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLnR5cGUifSx7InZhbHVlIjoiZmZkOTQ5ZDRiMDA1ZjhlMjRiYzI4ODgyNjQ4YzM2NjE3NDM1NzA5MDI0ZDU4M2M2ZTE3NmYxY2JmY2Q5NzZmMyIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEuQGNvbnRleHRbMF0ifSx7InZhbHVlIjoiZjNkNDgzY2YyMmI2YmVlMTUzN2RiMjlhYThkOWE2OTYyNWIyM2E2N2Y0ZmIxZjg4ODNjNWMzNmMzOTA3MjkyMiIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEuQGNvbnRleHRbMV0ifSx7InZhbHVlIjoiYzA5ZDZlMjBlZmQzZjg5ODM3ZTg1YTczMjYwZWRiZGEzNmUyYmZmODhlNTk0YzZmMGIxMzljOTZjOTg0YTdiMyIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEuQGNvbnRleHRbMl0ifSx7InZhbHVlIjoiYTc0ZDRmODc2ZmI5NGMyZjI5Yjc4ZTRlMmRhMDY2ZjIxNTE0OWVlYTY3ZmJjM2RhZTgzYTE0OTZiZTllZWUyNCIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEuQGNvbnRleHRbM10ifSx7InZhbHVlIjoiOTM2ZTQzMzgwMjI1Y2FmMWViNTE1NmYzNTBmODBmNjIxYzk4YWVlMjAxMWU3YzdlODE1ZmUzMTM5NmQ1YzlhYiIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEuaWQifSx7InZhbHVlIjoiMDkxYThjM2I4OTIwMjM1NzdlYjIwNzIwM2VkZWQ5YWU3NDFjYjQwYjJhYWNjZjJjNzAxM2UzNjJlMzRhNDhhZSIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEudHlwZVswXSJ9LHsidmFsdWUiOiJhMTVmYmQ4MTdiNjQ4Y2U3MTVmNGY5ZmRjNDU3YmZjMTI4ZmExMjg3ZjJjOWQyY2Y5NDlhN2I5NGQwZWRhYTY1IiwicGF0aCI6Imlzc3Vlci5pZGVudGl0eVByb29mLmlkZW50aXR5VkMuZGF0YS5pc3N1ZXIifSx7InZhbHVlIjoiYTcwYmE3YjJlNTI2MjRkZTQzYjljODRmYjIwMzc0ODY0NmUwZTcxYTVhODJjNjk2YzA0M2VmYWY2MjI5ZDEzZiIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEuY3JlZGVudGlhbFN1YmplY3QudWVuIn0seyJ2YWx1ZSI6ImJlOGJhZDU4MTRhYWM3OGY3Njk5N2ZiY2U1NGJhMmJmYjk4MWU2ODAwNWU4ZTY4MzkzNjA2MGM0MmQ1MTUzZDEiLCJwYXRoIjoiaXNzdWVyLmlkZW50aXR5UHJvb2YuaWRlbnRpdHlWQy5kYXRhLmNyZWRlbnRpYWxTdWJqZWN0LmNvbXBhbnluYW1lIn0seyJ2YWx1ZSI6ImY5MTkxMjFkMmU4ODA0MTc3Y2M2MmJjZDMwYzMxZGQ1M2JhNDY2ZTlhZDQwNDNmNTZiZWZmNGM0MzYzZTE1ZDgiLCJwYXRoIjoiaXNzdWVyLmlkZW50aXR5UHJvb2YuaWRlbnRpdHlWQy5kYXRhLmNyZWRlbnRpYWxTdWJqZWN0LnR5cGVbMF0ifSx7InZhbHVlIjoiMmY3NmE4ZWUyYTI3MjgxOGNmOTIzYjg4YmVhOGRmYzUxNmIwZWU4OTNjMjI4OTIzZWExNDJkN2E4YWVmODA3YyIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEuY3JlZGVudGlhbFN1YmplY3QuaWQifSx7InZhbHVlIjoiNzg1ZDc5OGE3M2Y2NjU5YTc2M2E0MzUzOTRlYTE1NGM3Y2RmNDRmNjA3YTM1YmZjYWZhMWZhYWE4N2VlZGZiZiIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEuZXhwaXJhdGlvbkRhdGUifSx7InZhbHVlIjoiM2E3MjAwZGU4NWRjOTlkMjQyMWQwYjEwZTUxNDg0ZDk2ZTdhODIxYzMxMmViZjllZWY2ZDIzMmJlNjJlZjJiOSIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEuY3JlZGVudGlhbFN0YXR1cy5pZCJ9LHsidmFsdWUiOiI2MTY3NzRjMjE3YWZjN2UwZjZmMjkwOTNjYWZkMzM2ODNmODVjNzVkNmE4ZDdjYjMwM2Q5MGYyMDljNTUyOGY5IiwicGF0aCI6Imlzc3Vlci5pZGVudGl0eVByb29mLmlkZW50aXR5VkMuZGF0YS5jcmVkZW50aWFsU3RhdHVzLnR5cGUifSx7InZhbHVlIjoiMmI4NWY5NWVmZGQ2ODViNzM5ODcxZjVmNzhiZDUwMTZlZDAyNTMxNDIwMjNkZDczM2ZjOWEwNzI1ZWFmZTBkMCIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEuY3JlZGVudGlhbFN0YXR1cy5zdGF0dXNMaXN0SW5kZXgifSx7InZhbHVlIjoiZDU3YzQ3NGYwN2Q4YTExMjNhMzk0YmZiMGYyNzRjOTYxZDUwMzQwMjEzN2IyYzkwNmZjODhmZjRkNWEzYWE5MSIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEuY3JlZGVudGlhbFN0YXR1cy5zdGF0dXNMaXN0Q3JlZGVudGlhbCJ9LHsidmFsdWUiOiJiZjMxYWIzNmVlNjUwNGNkZmUzYTgxMTg2ZDdlZTk5MGI0MTczZjA4MGEwZTZhMTVlYzk3YmUyZGU5NTU2MTM2IiwicGF0aCI6Imlzc3Vlci5pZGVudGl0eVByb29mLmlkZW50aXR5VkMuZGF0YS5pc3N1YW5jZURhdGUifSx7InZhbHVlIjoiZDljNmYxNTFiNDU4NTI0OWZjNmY1YzBhZDhiZGVmYmM2NjFkN2VhN2U3YzFmZWI4MGFhMTZkNzNhYzg1MGRjZSIsInBhdGgiOiJpc3N1ZXIuaWRlbnRpdHlQcm9vZi5pZGVudGl0eVZDLmRhdGEucHJvb2YudHlwZSJ9LHsidmFsdWUiOiI4YmIyMzFmYzJkMmIxOGMxOWJiYmZhMzA2YzlkMWQ3ZWNhYjcyMTE0NTI3Zjk0NTNjYTY1MjkyMDc3N2Y1NTIzIiwicGF0aCI6Imlzc3Vlci5pZGVudGl0eVByb29mLmlkZW50aXR5VkMuZGF0YS5wcm9vZi5jcmVhdGVkIn0seyJ2YWx1ZSI6IjNmNGNkYWM1NDg5NzA0M2VjYThmOWZjNzUwNmYyYjUxOGU5NzU2YTljMTVhNmJmM2E0NWRjNDkzZDUyN2Y1MzIiLCJwYXRoIjoiaXNzdWVyLmlkZW50aXR5UHJvb2YuaWRlbnRpdHlWQy5kYXRhLnByb29mLnByb29mUHVycG9zZSJ9LHsidmFsdWUiOiJlNDVhNTA0NzY4OTA3MDE0YmU2ZjRiMDc5ZDZkZTNkYjZhY2MxMzNhMzRmYTg2ZWU4MjgxNmUwMzE3ZDFkOGE5IiwicGF0aCI6Imlzc3Vlci5pZGVudGl0eVByb29mLmlkZW50aXR5VkMuZGF0YS5wcm9vZi5wcm9vZlZhbHVlIn0seyJ2YWx1ZSI6IjQ1YmM3NTY5MTJmZWZkNjFjNTViYmY2ZDc3MGY5OGZiZDVhNWQyMDI4ZWE5ZDUxMDQyMzY1OGQzOTQ3N2MzYTAiLCJwYXRoIjoiaXNzdWVyLmlkZW50aXR5UHJvb2YuaWRlbnRpdHlWQy5kYXRhLnByb29mLnZlcmlmaWNhdGlvbk1ldGhvZCJ9LHsidmFsdWUiOiI4MzUwOGI0N2Q5NDkzOTM1MGJkYzBlMGIxNGI3MGQyYjUwYTc1ZmI5ZmFlNzdhYTA0MWViZjQ1YjJhNzFlYWRjIiwicGF0aCI6ImNyZWRlbnRpYWxTdGF0dXMudHlwZSJ9LHsidmFsdWUiOiI1M2QyM2RmM2ZkYTc3YWU3MzQwMDg2MTY5YTgzYjE1YjY3Y2Q1ODdhMDU5NWQzMWRlOTI5YjAxZDQxZTE5OTQzIiwicGF0aCI6ImNyZWRlbnRpYWxTdGF0dXMuY3JlZGVudGlhbFN0YXR1c1R5cGUifSx7InZhbHVlIjoiNDg2NGUxYWJjOTBkZGFmNDk0YmUxMTkyOGEyYzI2YmJlODNjMGY0ZmMxNWQ1YWJiY2NlNTJmNTE1NGVkNTQ0YyIsInBhdGgiOiJyZW5kZXJNZXRob2QudHlwZSJ9LHsidmFsdWUiOiJmZmQxMzg5NmFiMWJkNjg0ZGNhNzA3N2JjNDljNzE0ZjNjNzIwMjMwNTY5ODYzMmI5NTYzMmZmNWU2MjBiZmI2IiwicGF0aCI6InJlbmRlck1ldGhvZC5yZW5kZXJNZXRob2RUeXBlIn0seyJ2YWx1ZSI6ImI0NDUyNzAwZjE0ZDg5ZGFlOTQzNGZkNzRlN2MzMmNlNjUyMGI3YjY5ODYxYjVmZTc3YTJlZTQ0MGMyZjEyYzAiLCJwYXRoIjoicmVuZGVyTWV0aG9kLm5hbWUifSx7InZhbHVlIjoiNzU5NDFkOTFmMjRmYTgyMDhmNWRmZTdhMWMwOGI0ZWJlZjA1OGQ4MWYzZjJjNzQ0YTZkZDk1MGY3Mzc2ZjY3YyIsInBhdGgiOiJyZW5kZXJNZXRob2QudXJsIn0seyJ2YWx1ZSI6IjVkN2E2NGUwOThhOWQxYjA2MjljYjRkZjE4YjE5ZWQ1NTQwMGQ5ZjRkZTcwY2U2Mzk1ZjlmYmM3NDc4YzdiZWEiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QubmFtZSJ9LHsidmFsdWUiOiIxNDM1MzFhMDA0ZDNjZjBmOGYyZGE2NGY5OTIwNjA1MDcwYzlhZmViNTk5YTg1MTZjNWZlM2NhN2I5M2M5NzBhIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmlkIn0seyJ2YWx1ZSI6ImZjYWFjODY4MDdjNDRhNjI5ZmEwYTdhZWNlYjk0NjRlN2Y0MDYxNGFjYWI5YTZjMzVlNGQ1MGUxNWE5ZGQ4MDYiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuZGF0ZSJ9LHsidmFsdWUiOiIyN2ZkNDRhYTI2ZWM1MzE2MzM5OWRiMzE4MzkxZTAzNzdlODdlNjIxOGRmZDU1N2VlOGFhZDhhZjY3M2U4MGViIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmN1c3RvbWVySWQifSx7InZhbHVlIjoiMTNlMDc4NjMzZmU2MWViOGYzMmM1N2U1MjU3NmQ0NzMxZDUxMzEzMjJjNmNmYzFiZDRiMDkyN2Y4NTIwZGVlNCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC50ZXJtcyJ9LHsidmFsdWUiOiI0YzcxNWU5YTFhZmI3N2MwMDNmYTk3M2M2MGI3MzYzMWI0N2ViNjM2N2MyYTMzNWFhNjlkMWFkOWY5NmM3NjljIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmJpbGxGcm9tLm5hbWUifSx7InZhbHVlIjoiOTIxNWUwOTdjNDc3MjhiOTc5NGVlZjg4YjMxODJjYmUxMGUwMmVjNDA4YTYzODIyMjQ3OThjZGM4YjE3ZTViOSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5iaWxsRnJvbS5zdHJlZXRBZGRyZXNzIn0seyJ2YWx1ZSI6IjJkMjIxY2IwYzRlOTI3ZTUyYjNkNjZlZTNkNDY4ODFmZWNlN2QyNzg4MDgzMTFmYjQwZDdjNjE4OThmNmQ3OTEiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuYmlsbEZyb20uY2l0eSJ9LHsidmFsdWUiOiI5OTdhZjU5ZTJhODE5ZDYwZmFlNjVhMDI2MGNlZjg1MmM2ZWY0NDI0ZGQxZjJjZmU2NWRjODk0MWI5NWFhNzNhIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmJpbGxGcm9tLnBvc3RhbENvZGUifSx7InZhbHVlIjoiZmZjMWIzMjI5MDQxMmM3Yjg5OGU4M2E3MmYxNDE2ZmE4YzhjOGZjNTY1N2U1ODdmMmU2Mzg0MWJiZjY1YTVhZCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5iaWxsRnJvbS5waG9uZU51bWJlciJ9LHsidmFsdWUiOiI5NmM0MGUwOWFiZDU4NTZhNWVjZTkyMGI4NjNiMzZmMzliMmI3ZjA4YzhjZDBhODk0YjFhOWVmZmZhYTkxYjkzIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmJpbGxUby5jb21wYW55Lm5hbWUifSx7InZhbHVlIjoiNjU3ZDJhNzJiMzFhNDExNWQwZTAzOTg4NTYxZmQ4MDgxYjI3YmM5YzljOWM2YmZmNTU3MTUzMzQwNWViMWRiMiIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5iaWxsVG8uY29tcGFueS5zdHJlZXRBZGRyZXNzIn0seyJ2YWx1ZSI6ImZmZDQyOWI0YWQ2ZmU4MTAxZjJlNjMwMzQ2OWNmNTljNWFjNTU1NmU0ZDdjMjljYzU1YTkyZTM2MzBmNzRjZmEiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuYmlsbFRvLmNvbXBhbnkuY2l0eSJ9LHsidmFsdWUiOiI2NjQ3ZmRiM2U5YzYwNzdmYjRjM2VkMzA2ZmIzMWQ5OGE2NzhkMTkzZDMxYWFlMDBlNGY2MjJiMzg0OWE4ZmFjIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmJpbGxUby5jb21wYW55LnBvc3RhbENvZGUifSx7InZhbHVlIjoiZDhiMjJjYzMyZDUzODBmYjFkYzE1Y2RlYzA3ZGY5YTZmOGQ3ZTljYzdiNjY1MzliOTZmOWFiYTZmMTI5MGI0ZiIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5iaWxsVG8uY29tcGFueS5waG9uZU51bWJlciJ9LHsidmFsdWUiOiJkZDkxYmEyYmUzOWNiNjY5MGVkZGQ4MTE2NmI0MDNjMDllMmI2MWJhZTVmNjc0MzBmYTUwMDdkZjcxNWNlMWVhIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmJpbGxUby5uYW1lIn0seyJ2YWx1ZSI6IjFjNDcxM2NkNTRlOWNjODUyZWVkZWRiYjUxYTQ4Yzk5OWE0NGVlODZlNDdiNzUyZGZjMWU2ZWM0MTBlMWIzYTQiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuYmlsbFRvLmVtYWlsIn0seyJ2YWx1ZSI6IjRlOTY2OWU3N2Q3MTFmMzYyZDY2MGNjYWU5ZTM3OWFiYzU3NWRlMmU0OGFlNjE3OTMxMTY2MjNhYWRkNDBkNGIiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuYmlsbGFibGVJdGVtc1swXS5kZXNjcmlwdGlvbiJ9LHsidmFsdWUiOiIzN2RjYTdjOWU3M2YwNjFmYWUwMWM4NDBhOGYyNjMwYmI5NTBlOWQ3NWM3MDE2NWVjODBiM2IxNWY5NjY4MjYzIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmJpbGxhYmxlSXRlbXNbMF0ucXVhbnRpdHkifSx7InZhbHVlIjoiNDExNzM2MjUyZjhkMjY4MGQwZmE4NDEyNjU0ZTlhMmMwZTdiYzY1NTliMDAyNTZjZTVmM2EyNjI4YzViZGM5OSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5iaWxsYWJsZUl0ZW1zWzBdLnVuaXRQcmljZSJ9LHsidmFsdWUiOiJmMmIzZmU3YTI3OWQwMTc0NTRhNjM0Y2ViNzRkMWJiMGRhZDk1YTM2MjViOThjYTY4MTJkYzYwYjc1ZDI3NTVlIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmJpbGxhYmxlSXRlbXNbMF0uYW1vdW50In0seyJ2YWx1ZSI6ImUyNzE1N2ZmOTRjMDk0YTA2NmZhMzE4NGIzNGQzNTJhZWNlMGZkNDRlZWFjZjJhOTRiOGQ2N2VkMTZlOWI2OTEiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuYmlsbGFibGVJdGVtc1sxXS5kZXNjcmlwdGlvbiJ9LHsidmFsdWUiOiIxYzY3NzBmMmNmNjU4MmEwMWUwNjZiMzg5YTRmZjlmNjM1M2Y1NGVkMzhlMjgwZjZkZjc2NGE5YTk5N2Y3Yzk1IiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmJpbGxhYmxlSXRlbXNbMV0ucXVhbnRpdHkifSx7InZhbHVlIjoiZWUxYjFjMzFkNzAwZWUxYjM5YWRlNmIwNjgwMTQzMzljMDE5YjQxNmU5MGU2ZmJlOGRjOTliZDE3ZTBjZTEzNCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5iaWxsYWJsZUl0ZW1zWzFdLnVuaXRQcmljZSJ9LHsidmFsdWUiOiJjOThmZjcyMWZkZDM0NGU2OWZlM2I3Yzg1NDFlOTg4YTJhMjgyNzhmMmZkMTk2Zjk5MmVlZDQwYmIwOTBlZDZmIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmJpbGxhYmxlSXRlbXNbMV0uYW1vdW50In0seyJ2YWx1ZSI6IjE5NzRjMjNkNzY1Zjk2NzhhYWJjNGJkMTA3Mzg3MjQwOTNiNWRiNTM1MjU2NDhhYTViZmMzMGMwZjVlNmNmZjUiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3QuYmlsbGFibGVJdGVtc1syXS5kZXNjcmlwdGlvbiJ9LHsidmFsdWUiOiIzN2ZlMjY1ZjU0ODY4ZTA4YWIwOTcyNmIzYjljYzQxMTNlMTY4N2RhYjI5MzRhN2Q2Nzg5YjRiNzUwOTQ3NTFjIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmJpbGxhYmxlSXRlbXNbMl0ucXVhbnRpdHkifSx7InZhbHVlIjoiMDgzNWRhZWJiNGVmYzQ4ZDcxYzU0MDQwMDU1NTVmOGY1ZThjNWQyZGFiMmRkMmU3NzRiNzZhNmEzZjcyY2Q5MiIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC5iaWxsYWJsZUl0ZW1zWzJdLnVuaXRQcmljZSJ9LHsidmFsdWUiOiIzZmYyNDI4MjhmMzk3MDNjNzA4ZDkwMDEwMjFlNTllNGYwMTkxNDUzZmMzYmQ5YmQ2YzE1ZGE5OTA5ZWI4MWJkIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LmJpbGxhYmxlSXRlbXNbMl0uYW1vdW50In0seyJ2YWx1ZSI6IjdiZWU2ZWIyMWI1YTk0NDRjMGY3MGExNjBhYjJiMDJiOWFmN2E4ZWY1NjVmNjMzZDhjYzgyMWFhNzJiOWNkMzQiLCJwYXRoIjoiY3JlZGVudGlhbFN1YmplY3Quc3VidG90YWwifSx7InZhbHVlIjoiYTAzNWQ0MjdjYzk2NDlhOTBlOWI4MWE4YzdmMTkxNDMzZmNmMTNlMzU1ZTM5NjRjY2Q5ODdkNmI2MjZhMzQwMCIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC50YXgifSx7InZhbHVlIjoiZGQ4NDEyMzMzYTAyNzUwYzc0MTMxMzQzYmVkMDk3ZTQ5MDczMWEyMzI5M2Y3MGFlOTY4ZjZkY2ZjYzRiYWVlZSIsInBhdGgiOiJjcmVkZW50aWFsU3ViamVjdC50YXhUb3RhbCJ9LHsidmFsdWUiOiJiNmRkMjM3ODYyMGQ1YjlkZDljNjE1MmRmMmNmNjRhOGI3MGZhOGZhOGJjNzMwYjU5MmJlYmRiZmM5NmYwN2FjIiwicGF0aCI6ImNyZWRlbnRpYWxTdWJqZWN0LnRvdGFsIn1d",
    privacy: {
      obfuscated: [],
    },
    key: "did:ethr:0xE94E4f16ad40ADc90C29Dc85b42F1213E034947C#controller",
    signature:
      "0x76c3def684b98da04733f8f47c596f2ab0ba943cd1ea3b80431e2580197159ea36da3f6e95ec891eacf1fe4fcfeb2997eade29e9a0aa0da44c24ded5a3d951db1c",
  },
};