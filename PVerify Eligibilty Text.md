

## 

Eligibility

### POSTEligibilitySummary

https://api.pverify.com/api/EligibilitySummary

|Environment|URL|
|---|---|
|Test|[https://api.pverify.com/Test/API/EligibilitySummary](https://api.pverify.com/Test/API/EligibilitySummary)|
|Production|[https://api.pverify.com/API/EligibilitySummary](https://api.pverify.com/API/EligibilitySummary)|

Eligibility summary is our 2nd gen eligibility endpoint designed to cover the vast majority of payers and return simplified objects with key data such as copay for your practice type. For example, when you send as practice type PT, we will return a Physical Therapy object with key PT benefits.

Key benefits are:

- Easy and discrete eligibility information, allowing easy coding to obtain pertinent data.
    
- Support for nearly all types of medical practices with key benefits such as surgical benefits, DME benefits, or PT benefits.
    
- Support for nearly all payers, electronic and non electronic. We have tested all payers available to us and over 90% are returning parsed information correctly
    

To see the currently supported practice types please see the [Practice Type tables.](https://postman.pverify.com/#27234fd2-af03-46b9-9e6d-12612cafd044)

**Medicare**  
We will return a new object for Medicare called MedicareInfoSummary which will return Medicare specific information such as Part A/B deductible, pharmacy payer name, MCA payer name, and more information. This object will only be returned for Medicare, for all other payers it is null. Please use this object when sending Medicare patients to retrieve Medicare specific information.

**Recursive Medicare Advantage Lookup**  
This will need to be enabled by us, so please contact us at [support@pverify.com](https://mailto:support@pverify.com). When enabled, we will automatically perform a eligibility check (using Eligibility Summary) on selected MCA payers that allow lookup by MBI or Name & DOB. If the can be done, the result is returned in a field RecursiveRequestId.

Thus the workflow is this:

- Submit eligibility call to Medicare via Eligibility Summary.
- Capture RecursiveRequestId.
- Run a GET call (GetEligibilitySummary) using this Id.

**Headers**

|Key|Value|
|---|---|
|URL|[https://api.pverify.com/API/EligibilitySummary](https://api.pverify.com/API/EligibilitySummary)|
|Method|POST|
|**Headers**|Description|
|Authorization|Authorization token from above preceded by the String "Bearer"|
|Client-API-Id|API ID provided by pVerify|
|Content-Type|application/json|

*Note: The Client-API-Id is required. Header keys are case sensitive.

## EligibilitySummary Request Details

|Property Name|Data Type|Usage|Description|
|---|---|---|---|
|payerCode|String|Required|pVerify Payer Code(ie Aetna 00001)|
|payerName|String|Optional|Payer Name|
|provider.firstName|String|Optional|Provider First Name|
|provider.middleName|String|Optional|Provider Middle Name|
|provider.lastName|String|Required|Provider Last Name|
|provider.npi|String|Required|10-Digit NPI Value|
|provider.pin|String|Conditional|Required for payer Medi-Cal|
|provider.taxonomy|String|Optional|Taxonomy|
|subscriber.firstName|String|Conditional|First Name of subscriber required for self inquiry|
|subscriber.lastName|String|Conditional|Last Name of subscriber required for self inquiry|
|subscriber.memberId|String|Required|Member Id required for both type inquiries(self,dependent)|
|subscriber.dob|String|Conditional|Required for self-inquiry for better matching result. (Expected format: MM/dd/YYYY ie 01/01/2000)|
|subscriber.ssn|String|Optional|SSN of Subscriber|
|isSubscriberPatient|String|Required|True for self and False for Dependent Query|
|doS_StartDate|String|Required|Date of service start date (Expected format: MM/dd/YYYY ie 01/01/2000)|
|doS_EndDate|String|Required|Date of service end date (Expected format: MM/dd/YYYY ie 01/01/2000)|
|dependent.patient.firstName|String|Conditional|First Name of dependent|
|dependent.patient.middleName|String|Optional|Middle Name of dependent|
|dependent.patient.lastName|String|Conditional|Last Name of dependent|
|dependent.patient.dob|String|Conditional|Required for dependent inquiry. (Expected format: MM/dd/YYYY ie 01/01/2000)|
|dependent.patient.gender|String|Optional|Gender of dependent|
|dependent.relationWithSubscriber|String|Optional|Relation With Subscriber|
|practiceTypeCode|String|Optional|Please consult [Practice Type Code table](https://postman.pverify.com/#27234fd2-af03-46b9-9e6d-12612cafd044) - sets which practice type to use, i.e. 12 for physical therapy, which will return an object with PT benefits in the results. If you do not select a practice type, the default for your account will be used. Contact pVerify for more info.|
|includeTextResponse|Boolean|Optional|Indicates whether to return the full text of the eligibility response|
|referenceId|String|Optional|Patient MRN or account Number|
|location|String|Required|Location is the practice location. Note by setting this, you will lock the patient to one location, so that users that login in via our portal who are not authorized to see that location will not see the patient.|
|internalId|String|Optional|Field from customer with their InternalId|
|customerId|String|Optional|Field from customer with their CustomerId|

## EligibilitySummary Response Fields

|Key|Type|Description|
|---|---|---|
|RequestID|Integer|Eligibility Transaction ID|
|APIResponseCode|String|0-Processed,1-Rejected,2-NoFunds,3-Pending,4-New|
|APIResponseMessage|String|Message about the transaction|
|ProcessedWithError|Boolean|true when processed with error by the payer.|
|EDIErrorMessage|String|Message from Payer about errors|
|FollowUpAction|String|Response from the Payer|
|PossibleResolution|String|Suggested steps to be performed before resubmitting to resolve the issue.|
|PverifyPayerCode|String|pVerify’s Payer Code|
|ErrorCode|String|It contains unique error Code when Processed with error or Rejected|
|ErrorDescription|String|It contians description of the error.|
|PayerName|String|Payer Name as defined by pVerify|
|VerificationType|String|Verification Type –Subscriber or dependent|
|IsPayerBackOffice|String|If it is TRUE-NON EDI Payer, FALSE –EDI Payer|
|DOS|String|Date of service start date – DOS end date|
|IsHMOPlan|Boolean|If true then Patient has HMO plan|
|ExceptionNotes|String|Exception Notes if any. If response demographic info is not matched with that of Request|
|AddtionalInfo|String|If there is any other info|
|Location|String|Location in which trans ran|
|ReferrenceId|String|Referencid passed in request|
|ResultPracticeType|String|Practice type Name|
|AreAllSTCsProcessed*|Boolean|True when all service codes are processed by payer else false, This is helpful to determine to whether transaction needs to be reverify or not.|
|STCsStatusMessage*|String|Contains message when AreAllSTCsProcessed=false. Message contains list of not processed service codes|
|IsProviderInNetwork|Boolean|If true then Provider is InNetwork. Based on Provider Payer Settings* Null, if NO Provider Payer Settings* (*Requires set up in Premium Portal)|
|RecursiveRequestId|Integer|RequestID of secondary lookup for MCA|
|RecursiveAPIResponseCode|string|0-Processed,1-Rejected, Status of Secondary Inquiry.|
|RecursiveAPIResponseMessage|string|Message about the Secondary transaction.|
|RecursiveProcessedWithError|Bollean|true when Recusrvive transaction Processed with error by the payer.|
|InternalId|String|Field from customer with their InternalId|
|CustomerId|String|Field from customer with their CustomerId|
|Notes|String||
|DemographicInfo|Object|It contains the subscriber info or dependent info .|
|ServiceDetails|Object|It contains all Service type details info|
|PreventiveServices|Object|Contains Preventive codes details|
|OtherPayerInfo|Object|It contains Other Payer info. It is null then there is no payer change.|
|PlanCoverageSummary|object|It contains Plan realted info.|
|PCPAuthInfoSummary|Object|It contains PCP auth info.|
|HBPC_Deductible_OOP_Summary|Object|It contains Deductible and OOP in from Health benefit Plan Coverage service type .It is null for Medicare Payer Inquiries.|
|MedicareInfoSummary|Object|It contains Medicare info summary. It is null for other payers and other summary details are empty for Medicare payer transaction.|
|MiscellaneousInfoSummary|Object||
|SpecialistOfficeSummary|PracticeTypeSummary|It contains Specialist Consultation specific Summary (Co-Pay,Co-ins,Ded,OOP) and exclusive values of practice type .|
|DiagnosticLabSummary|PracticeTypeSummary|It contains Diagnostic Lab specific Summary|
|SurgicalSummary|PracticeTypeSummary|It contains Surgical specific Summary|
|ASC_FacilitySummary|PracticeTypeSummary|It contains Ambulatory Service Center Facility specific Summary|
|OncologySummary|PracticeTypeSummary|It contains Oncology specific Summary|
|DMESummary|PracticeTypeSummary|It contains Durable Medical Equipment specific Summary|
|MentalHealthSummary|VisitLimitationsSummary|It contains Mental Health specific Summary|
|PrimaryCareSummary|PracticeTypeSummary|It contains Primary Care specific Summary|
|MRI_CT_ScanSummary|PracticeTypeSummary|It contains MRI, CAT Scan specific Summary|
|UrgentCareSummary|PracticeTypeSummary|It contains Urgent Care specific Summary|
|XRaySummary|PracticeTypeSummary|It contains X Ray specific Summary|
|VisionOptometrySummary|OpthalmologySummary|It contains Opthalmology (Vision) specific Summary|
|PhysicalTherapySummary|TherapySummary|It contains Physical Therapy specific Summary|
|ChiropracticSummary|TherapySummary|It contains Chiropractice specific Summary|
|SpeechThearySummary|TherapySummary|It contains Speech Therapy specific Summary|
|OccupationalTherapySummary|TherapySummary|It contains Occupational Therapy specific Summary|
|EmergencyMedicalSummary|PracticeTypeSummary|It contains Emergency Medical specific Summary|
|WellnessOrRoutineVisitSummary|VisitLimitationsSummary|It contains Wellness Or Routine Visit specific Summary|
|PodiatryOfficeSummary|PracticeTypeSummary|It contains Podiatry Office specific Summary|
|AnesthesiaSummary|PracticeTypeSummary|It contains Anesthesia specific Summary|
|SubstanceAbuseProfessionalSummary|PracticeTypeSummary|It contains Substance Abuse Professional specific Summary|
|SubstanceAbuseInPatientFacilitySummary|PracticeTypeSummary|It contains Substance Abuse InPatient Facility specific Summary|
|SubstanceAbuseOutPatientFacilitySummary|PracticeTypeSummary|It contains Substance Abuse OutPatient Facility specific Summary|
|TelemedicineSummary|PracticeTypeSummary|It contains Telemedicine specific Summary|
|FluVaccinationSummary|PracticeTypeSummary|It contains FluVaccination specific Summary|
|HospitalInpatientSummary|PracticeTypeSummary|It contains Hospital Inpatient specific Summary|
|HospitalOutPatientSummary|PracticeTypeSummary|It contains Hospital Outpatient specific Summary|
|PharmacySummary|PracticeTypeSummary|It contains Pharmacy specific Summary|
|TelemedicinePrimaryCareSummary|PracticeTypeSummary|It contains Telemedicine Primary specific Summary|
|TelemedicineSpecialistSummary|PracticeTypeSummary|It contains Telemedicine Specialist specific Summary|
|TelemedicineUrgentCareSummary|PracticeTypeSummary|It contains Telemedicine Urgent Care specific Summary|
|TelemedicineMentalHealthSummary|VisitLimitationsSummary|It contains Telemedicine Mental Health specific Summary|
|TelemedicinePhysicalTherapySummary|TherapySummary|It contains Telemedicine Physical Therapy specific Summary|
|PsychotherapySummary|VisitLimitationsSummary|It contains Psychotherapy specific Summary|
|SNFSummary|PracticeTypeSummary|It contains SNF specific summary|
|SNFRoomBoardSummary|PracticeTypeSummary|It contains SNF and Board specific summary|
|ProfessionalPhysicianVisitInpatientSummary|PracticeTypeSummary|It contains Professional Physician Visit Inpatient specific summary|
|HospiceSummary|PracticeTypeSummary|It contains Hospice specific summary|
|HomeHealthCareSummary|DaysLimitationsSummary|It contains Home Health Care specific summary. It has more keys than normal practice type.|
|AllergiesSummary|PracticeTypeSummary|It contains Allergies specific summary|
|DiagnosticMedicalSummary|PracticeTypeSummary|It contains Diagnostic Medical specific summary|
|MaternitySummary|PracticeTypeSummary|It contains Maternity specific summary|
|ImmunizationsSummary|PracticeTypeSummary|It contians Immunizations specific summary|
|TelemedicineOccupationalTherapySummary|TherapySummary|It contains Telemedicine details for Occupational therapy|
|TelemedicineSpeechTherapySummary|TherapySummary|It contains Telemedicine details for Speech Therapy|
|EligibilityResult|string|It contains results in formatted text|
|DetailsURL|string|URL for the full report|

HEADERS

Authorization

Bearer {{access-token}}

Client-API-Id

{{client-api-id}}

Content-Type

application/json 

### GETGetEligibilitySummary

https://api.pverify.com/API/GetEligibilitySummary/9882795

|Environment|URL|
|---|---|
|Test|[https://api.pverify.com/Test/API/GetEligibilitySummary](https://api.pverify.com/Test/API/GetEligibilitySummary)|
|Production|[https://api.pverify.com/API/GetEligibilitySummary](https://api.pverify.com/API/GetEligibilitySummary)|

GetEligibilitySummary returns the response from the EligibilitySummary POST call using a unique request id provided in the EligibilitySummary response. EligibilitySummary is not supported for back office payers.

**Headers**

|Key|Value|
|---|---|
|URL|[https://api.pverify.com/API/GetEligibilitySummary](https://api.pverify.com/API/GetEligibilitySummary)|
|Method|GET|
|**Headers**|Description|
|Authorization|Authorization token from above preceded by the String "Bearer"|
|Client-API-Id*|Your pVerify client-api-id|
|Client-API-Id|API ID provided by pVerify|
|Content-Type|application/json|
|URL Parameters|RequestId returned in EligibilitySummary response|

*Note: The Client-API-Id header is required. Header keys are case sensitive.

## GetEligibilitySummary Response Fields

See [EligibilitySummary response](https://postman.pverify.com/#eligibilitysummary-response-fields).

HEADERS

Authorization

Bearer {{access-token}}

Client-API-Id

{{client-api-id}}

Content-Type

application/json

Example Request

GetEligibilitySummary

nodejs

```nodejs
var axios = require('axios');

var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://api.pverify.com/API/GetEligibilitySummary/9882795',
  headers: { 
    'Authorization': 'Bearer {{access-token}}', 
    'Client-API-Id': '{{client-api-id}}', 
    'Content-Type': 'application/json'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

Example Response

No response body

This request doesn't return any response body

### POSTEligibilityInquiry

https://api.pverify.com/API/EligibilityInquiry

|Environment|URL|
|---|---|
|Test|[https://api.pverify.com/Test/API/EligibilityInquiry](https://api.pverify.com/Test/API/EligibilityInquiry)|
|Production|[https://api.pverify.com/API/EligibilityInquiry](https://api.pverify.com/API/EligibilityInquiry)|

The EligibilityInquiry endpoint is the main method used get an eligibility report for a specific subscriber / dependent. This requires customers to post a request, via REST to a designated URL address. Once a request is received by the service an immediate response is sent for each request posted. To use this or any other method, you must first generate a token via the Token endpoint (see above Token method).

Payers return many formats for the eligibility report, which we parse to put into a JSON object format. Critical to the successful parsing of this information is the concept of our pVerify exclusive payer and client specific parsing logic, stored in NetworkSections in the response. See below for more information.

An example of a successful authorization response can be found in the code to the right. Please note you MUST use the pVerify payerCode. We also recommend passing the payer name.

Also note the body of the EligibilityInquiry is populated differently depending on if it is a subscriber query or a dependent query. See examples to the right.

**EligibilityInquiry Request**

|**Type**|Description|
|---|---|
|URL|[https://api.pverify.com/API/EligibilityInquiry](https://api.pverify.com/API/EligibilityInquiry)|
|Method|POST|
|**Headers**|Description|
|Authorization|Token from Step 1 Above (if you are using Postman be sure to put Token Type Bearer before the token.)|
|Client-API-Id*|client-api-id from step one|
|Content-Type|application/json|
|**Body**|Description|
|Data Params|See below and examples to the right|

*Note: The Client-API-Id header is required. Header keys are case sensitive.

**EligibilityInquiry Request Object**

See subscriber and dependent examples to the right

## **EligibilityInquiry Request Fields**

|Property Name|Data Type|Usage|Description|
|---|---|---|---|
|payerCode|String|Required|pVerify Payer Code(ie Aetna 00001)|
|payerName|String|Optional|Payer Name|
|provider.firstName|String|Optional|Provider First Name|
|provider.middleName|String|Optional|Provider Middle Name|
|provider.lastName|String|Required|Provider Last Name|
|provider.npi|String|Required|10-Digit NPI Value|
|provider.pin|String|Conditional|Required for payer Medi-Cal|
|provider.taxonomy|String|Optional|Taxonomy|
|subscriber.firstName|String|Conditional|First Name of subscriber required for self inquiry|
|subscriber.lastName|String|Conditional|Last Name of subscriber required for self inquiry|
|subscriber.memberId|String|Required|Member Id required for both type inquiries(self,dependent)|
|subscriber.dob|String|Conditional|Required for self-inquiry for better matching result. (Expected format: MM/dd/YYYY ie 01/01/2000)|
|subscriber.ssn|String|Optional|SSN of Subscriber|
|isSubscriberPatient|String|Required|True for self and False for Dependent Query|
|doS_StartDate|String|Required|Date of service start date (Expected format: MM/dd/YYYY ie 01/01/2000)|
|doS_EndDate|String|Required|Date of service end date (Expected format: MM/dd/YYYY ie 01/01/2000)|
|serviceCodes|String Array|Required|Services codes to run inquiry. If no service codes are passed then service code 30 will be assigned.|
|dependent.patient.firstName|String|Conditional|First Name of dependent|
|dependent.patient.middleName|String|Optional|Middle Name of dependent|
|dependent.patient.lastName|String|Conditional|Last Name of dependent|
|dependent.patient.dob|String|Conditional|Required for dependent inquiry. (Expected format: MM/dd/YYYY ie 01/01/2000)|
|dependent.patient.gender|String|Optional|Gender of dependent|
|dependent.relationWithSubscriber|String|Optional|Relation With Subscriber|
|includeTextResponse|Boolean|Optional|Indicates whether to return the full text of the eligibility response|
|referenceId|String|Required|Patient MRN or account Number|
|location|String|Required|Location is the practice location. Note by setting this, you will lock the patient to one location, so that users that login in via our portal who are not authorized to see that location will not see the patient.|
|internalId|String|Optional|Field from customer with their InternalId|
|customerId|String|Optional|Field from customer with their CustomerId|

## **EligibilityInquiry Response Fields**

|Name|Type|Description|
|---|---|---|
|ElgRequestID|int|Identification of Eligibility Request|
|Status|String|The eligibility status (active or inactive)|
|PayerName|String|Name of company satisfying the claim|
|payerCode|String|pVerify Payer Code|
|VerificationType|String|Specifies whether the patient verification was a Subscriber Verification or a Dependent Verification|
|isPayerBackOffice|boolean|False - Non-EDI payer. True - EDI Payer|
|verificationStatus|String|Status of the verification - Processed, pending, etc - See Table below|
|verificationMessage|String|Message from Backoffice|
|ProcessedWithError|Boolean|true when processed with error by the payer.|
|DOS|String|Date of Service (Expected format: MM/dd/YYYY ie 01/01/2000)|
|Plan|String|Denotes the health care plan that the individual has|
|ExceptionNotes|String|Notes concerning exceptions to the above fields|
|AdditionalInformation|String|Any further information|
|EDIErrorMessage|String|Error message from clearinghouse|
|FollowUpAction|String|Response from the Payer|
|PossibleResolution|String|Suggested steps to be performed before resubmitting to resolve the issue.|
|ErrorCode|String|It contains unique error code.|
|ErrorDescription|String|It contains error description.|
|OtherMessage|String|Processing message - ie Allowed, insufficient Funds|
|reportURL|String|URL for the full eligibility report (via pVerify portal)|
|doB_R|String|Date of Birth (Expected format: MM/dd/YYYY ie 01/01/2000)|
|eligibilityPeriod|Object|Eligibility dates|
|eligibilityPeriod.effectiveFromDate|String|Date the coverage is effective from|
|eligibilityPeriod.expiredOnDate|String|Date coverage expired|
|DemographicInfo|Object|Demographics|
|DemographicInfo.Subscriber|Object|Subscriber demographics|
|DemographicInfo.Subscriber.Address1|String|Subscriber Address1|
|DemographicInfo.Subscriber.Address2|String|Subscriber Address2|
|DemographicInfo.Subscriber.City|String|Subscriber City|
|DemographicInfo.Subscriber.State|String|Subscriber state|
|DemographicInfo.Subscriber.Zip|String|Subscriber zip code|
|DemographicInfo.Subscriber.DOB_R|String|Subscriber Date of Birth (Expected format: MM/dd/YYYY ie 01/01/2000)|
|DemographicInfo.Subscriber.Firstname|String|Subscriber first name|
|DemographicInfo.Subscriber.Lastname_R|String|Subscriber last name|
|DemographicInfo.Subscriber.Gender_R|String|Subscriber gender|
|DemographicInfo.Subscriber. Identification|Object|Has member ID, group #, group name|
|DemographicInfo.Subscriber. Identification.Code|String|ie: "JOHN"|
|DemographicInfo.Subscriber. Identification.Type|String|ie: "FirstName"|
|DemographicInfo.Subscriber. Identification.Name|String|Name of identification|
|DemographicInfo.Dependent|Object|Dependent Demographics (See subscriber for fields common to both)|
|relationship|String|Dependent relationship to client|
|NetworkSections|Object|Contains copay, deductible, etc. Based on custom result field settings (per payer)|
|NetworkSections.identifier|String|ie: "Deductible"|
|NetworkSections.label|String|ie: "Deductible"|
|NetworkSections.inNetworkParameters|Object|In network details = Deductible, outofPocket, Copay, Coins|
|NetworkSections.inNetworkParameters.key|String|ie: "Annual" (Annual Deductible)|
|NetworkSections.inNetworkParameters.value|String|ie: "600.00"|
|HealthBenefitPlanCoverageServiceType|Object|From eligibility response from clearinghouse, will contain string data with copay, etc.|
|HealthBenefitPlanCoverageServiceType. serviceTypeName|String|ie: "Health Benefit Plan Coverage"|
|HealthBenefitPlanCoverageServiceType. serviceTypeSections|Array|List of service type info|
|HealthBenefitPlanCoverageServiceType. serviceTypeSections.label|String|ie: "In Plan-Network Status"|
|HealthBenefitPlanCoverageServiceType. serviceTypeSections.serviceParameters|Object|Service Parameters|
|HealthBenefitPlanCoverageServiceType. serviceTypeSections.serviceParameters.key|String|Description of field ie Family Calendar Year Deductible|
|HealthBenefitPlanCoverageServiceType. serviceTypeSections.serviceParameters.value|String|Value of field (note most payers are passing info via message, below) ie 1800.00|
|HealthBenefitPlanCoverageServiceType. serviceTypeSections.serviceParameters.message|String|Description of value ie ("MED DENT,MAXIMUM SAVINGS")|
|HealthBenefitPlanCoverageServiceType. serviceTypeSections.serviceParameters.otherInfo|Array|More details about the key - in key/value/message/otherInfo|
|ServiceTypes|Object|Full list of returned service types from clearinghouse|
|ServiceTypeName|String|ie Chiropractic|
|ServiceTypeSection|Object|data regarding service type coverage in key/value/message/otherInfo|
|isHMOPlan|boolean|True of plan type is known to be HMO|
|InternalId|String|Field from customer with their InternalId|
|CustomerId|String|Field from customer with their CustomerId|
|DetailsURL|string|URL for the full report|
|IsProviderInNetwork|Bollean|Nullable Boolean value type.If true then Provider is InNetwork. Based on Provider Payer Settings* Null, if NO Provider Payer Settings* (*Requires set up in Premium Portal)|
|RecursiveRequestId|Integer|Recursive tran Request Id|
|RecursiveAPIResponseCode|string|0-Processed,1-Rejected, Status of Secondary Inquiry.|
|RecursiveAPIResponseMessage|string|Message about the secondary transaction.|

EligibilityInquiry returns verificationStatus which is the status of the inquiry (not the status of the patients eligibility, which is the Status field) according to the table below:

|Status Text|Meaning|
|---|---|
|Processed|We received a valid response from the clearinghouse|
|Rejected|The transaction is rejected due to bad data (ie: missing memberId)|
|Pending+|The transaction is for back office payer and has been queued|
|Canceled|The transaction has been canceled via API endpoint|

+: Status Code 15 Pending is returned when the payer is non-EDI -- pVerify uses manual process (phone/web-login) to get results or in some cases uses screen scraping technology to fetch the eligibility and benefits for such payers -- the delay in getting the results can be anywhere from 1 min. to 12 hours based on payer and agreed terms. These "Delayed Payers" have prefix of either BO or PL, you can either automatically refresh results using the Unique ID every few hours or have a "Get Pending Results" button on your eligibility screen.

**Parsing the Key Eligibility Fields**  
As the response object is complex, below is a guide to where the key eligibility fields are.

**Demographics**  
This is in demographicInfo.subscriber. For example, the first name of the subscriber is demographicInfo.subscriber.firstname

**Copay/Coinsurance:**  
The copay and coinsurance depends on the service type. For physician office visits, it may be in network section (see below for more information), and will be in the physician office visit area.

HEADERS

Authorization

Bearer {{access-token}}

Client-API-Id

{{client-api-id}}

Content-Type

application/json

Bodyraw 

### GETGetEligibilityResponse

https://api.pverify.com/API/GetEligibilityResponse/2428

|Environment|URL|
|---|---|
|Test|[https://api.pverify.com/Test/API/GetEligibilityResponse/{id}](https://api.pverify.com/Test/API/GetEligibilityResponse/%7Bid%7D)|
|Production|[https://api.pverify.com/API/GetEligibilityResponse/{id}](https://api.pverify.com/API/GetEligibilityResponse/%7Bid%7D)|

This GET method is similar to the Eligibility Inquiry except that it is a GET call with the Eligibility Request ID as a parameter. This call allows you to get the eligibility verification result by a unique transaction ID. It is designed for use with non-EDI (back office) payers which require human intervention and are thus time delayed in the response.

**GetEligibilityResponse Request**

|Key|Value|
|---|---|
|URL|[https://api.pverify.com/API/GetEligibilityResponse/{id}](https://api.pverify.com/API/GetEligibilityResponse/%7Bid%7D)|
|Method|GET|
|**Headers**|**Description**|
|Authorization|Authorization token from above preceded by the String "Bearer"|
|Client-API-Id*|Your pVerify client-api-id|

*Note: The Client-API-Id header is required. Header keys are case sensitive.

A successful GetEligibilityResponse call will have the same format as the Eligibility Inquiry response (above). In the case of backoffice payer, many sections will be null including Demographic Info and HealthBenefitPlanCoverageServiceType. The important data returned (copay, coins, etc) is typically in the NetworkSections object, and IsPayerBackOffice is always true. In the case of electronic payers the response object (format and data) is identical to that of EligibilityInquiry.

HEADERS

Authorization

Bearer {{access-token}}

Client-API-Id

{{client-api-id}}

Content-Type

application/json

Example Request

GetEligibilityResponse

nodejs

```nodejs
var axios = require('axios');

var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://api.pverify.com/API/GetEligibilityResponse/2428',
  headers: { 
    'Authorization': 'Bearer {{access-token}}', 
    'Client-API-Id': '{{client-api-id}}', 
    'Content-Type': 'application/json'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

Example Response

No response body

This request doesn't return any response body

### GETGetEligibility271

https://api.pverify.com/API/GetEligibility271/1111

|Environment|URL|
|---|---|
|Test|[https://api.pverify.com/Test/API/GetEligibility271/{id}](https://api.pverify.com/Test/API/GetEligibility271/%7Bid%7D)|
|Production|[https://api.pverify.com/API/GetEligibility271/{id}](https://api.pverify.com/API/GetEligibility271/%7Bid%7D)|

This GET method will return EDI 271 Raw response with Eligibility Request ID as a parameter.

**GetEligibility271 Request**

|Key|Value|
|---|---|
|URL|[https://api.pverify.com/API/GetEligibility271/{id}](https://api.pverify.com/API/GetEligibility271/%7Bid%7D)|
|Method|GET|
|**Headers**|**Description**|
|Authorization|Authorization token from above preceded by the String "Bearer"|
|Client-API-Id*|Your pVerify client-api-id|

*Note: The Client-API-Id header is required. Header keys are case sensitive.

**GetEligibility271** Response

|**Key**|**Value**|
|---|---|
|EDI271ANSI|ANSI String for request or Error Message|

HEADERS

Authorization

Bearer {{access-token}}

Client-API-Id

{{client-api-id}}

Content-Type

application/json

Example Request

GetEligibility271

nodejs

```nodejs
var axios = require('axios');

var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://api.pverify.com/API/GetEligibility271/1111',
  headers: { 
    'Authorization': 'Bearer {{access-token}}', 
    'Client-API-Id': '{{client-api-id}}', 
    'Content-Type': 'application/json'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

Example Response

No response body

This request doesn't return any response body

### POSTEasyEligibility

https://api.pverify.com/API/EasyEligibility

|Environment|URL|
|---|---|
|Production|[https://api.pverify.com/api/EasyEligibility](https://api.pverify.com/api/EasyEligibility)|

This POST call will return the Eligibility Status of a requested provider. The EasyEligibility endpoint is designed to facilitate easy access to Eligibility Information in just one step.

|Key|Value|
|---|---|
|URL|[https://api.pverify.com/api/EasyEligibility](https://api.pverify.com/api/EasyEligibility)|
|Method|POST|
|**Header**|Description|
|Client-API-Id*|Your pVerify client-api-id|
|**Body**|See the data parameters to the right|

*Note: The Client-API-Id header is required. Header keys are case sensitive.

## **EasyEligibility** Request Fields

|Field|Type|Usage|Description|
|---|---|---|---|
|payerCode|String|Required|pVerify payer code|
|provider_lastname|String|Required|Provider Last Name|
|provider_npi|String|Required|NPI number of provider|
|Provider_PIN|String|Conditional|Provider PIN|
|Provider_TaxId|String|Conditional|Provider TaxId|
|Patient_First|String|Conditional|Patient First Name|
|Patient_Last|String|Conditional|Patient Last Name|
|memberID|String|Conditional|Payer Member ID|
|patient_DOB|String|Conditional|Patient date of birth (Expected format: MM/dd/YYYY ie 01/01/2000)|
|date_Of_Service|String|Required|Date of Service (Expected format: MM/dd/YYYY ie 01/01/2000)|
|Date_Of_Service_To|String|Optional|Date of Service To (in format MM-DD-YYYY). Default date is Date of Service Start date|
|serviceCodes|String|Optional|If no STC passed then STC 30 will be used|
|InternalId|String|Optional|Field from customer with their InternalId|
|CustomerId|String|Optional|Field from customer with their CustomerId|

## **EasyEligibility Response**

|Field|Type|Description|
|---|---|---|
|transactionStatus|String|Status of transaction|
|transactionMessage|String|Additional information regarding transaction|
|ediErrorMessage|String|Error message|
|FollowUpAction|String|Response from the Payer|
|PossibleResolution|String|Suggested steps to be performed before resubmitting to resolve the issue.|
|processedWithError|Boolean|true when processed with error by the payer.|
|eligibilityStatus|String|Status of eligibility|
|eligibilityResult|String|Final information regarding eligibility|
|referenceId|String|Patient MRN or account Number|
|location|String|Location is the practice location. Note by setting this, you will lock the patient to one location, so that users that login in via our portal who are not authorized to see that location will not see the patient.|
|InternalId|String|Field from customer with their InternalId|
|CustomerId|String|Field from customer with their CustomerId|
|RecursiveRequestId|Interger|RequestID of secondary lookup for MCA|
|RecursiveAPIResponseCode|String|0-Processed,1-Rejected, Status of Secondary Inquiry.|
|RecursiveAPIResponseMessage|String|Message about the Secondary transaction.|
|DetailsURL|string|URL for the full report|

HEADERS

Client-API-Id

{{client-api-id}}

Client-Secret

{{client-secret}}

Content-Type

application/json

Bodyraw 

### GETDetails URL

https://api.pverify.com/API/GetEligibilityDetailsURL/{requestID}

|Environment|URL|
|---|---|
|Test|/Test/API/GetEligibilityDetailsURL/{id}|
|Production|/API/GetEligibilityDetailsURL/{id}|

This GET method will return details URL with Eligibility Request ID as a parameter.

**GetEligibilityDetailsURL Request**

|Key|Value|
|---|---|
|URL|/API/GetEligibilityDetailsURL/{id}|
|Method|GET|
|**Headers**|**Description**|
|Authorization|Authorization token from above preceded by the String "Bearer"|
|Client-API-Id*|Your pVerify client-api-id|
|Content-Type|application/json|

*Note: The Client-API-Id header is required. Header keys are case sensitive.

**GetEligibilityDetailsURL Resposne**

|**Key**|**Value**|
|---|---|
|isDetailsURLGenerated|True or false|
|url|string URL|
|errorMessage|Message when isDetailsURLGenerated is false|

**JSON Response**

{

"isDetailsURLGenerated": true,

"url": "[https://premium.pverify.com/Details"](https://premium.pverify.com/Details%22),

"errorMessage": null

}

HEADERS

Authorization

Bearer {{access-token}}

Client-API-Id

{{client-api-id}}

Content-Type

application/json