---
id: ClaimLifecycle
title: The Claim Lifecycle
hide_title
---

# **The Claim Lifecycle**
Claims within *Remits* begin life when remittance advices are received, with denials creating cases to queue follow-up.  Once follow-up is complete and denied claims are paid, cases are automatically closed and claims marked as "paid".

## Remittance Advice Import
Healthcare claims submitted to insurance companies are paid or denied after adjudication.  These payments and denials are returned on remittance advices, which is the claim's entry point into *Remits*.  These remits are either manually keyed, or automatically imported into *Remits*.  

## Claim Population
From the received payment data, *Remits* is able to reverse-engineer the original claims sent to insurance companies.  These claims are then stored and used as a reference point for future transactions.

## Denial Tracking
For any claim with non-contractual claim adjustments (denials), *Remits* will generate a case.  Cases serve as a "ticket" of sorts where billers can record any and all activity related to the claim.
<!-- 
## Claim Resubmission
After denials are handled and corrected claims submitted, claim status is updated in *Remits* and the response form the insurer is waited on. -->

## Final Payment
Once final payment is received and posted, cases for fully-paid claims are resolved and marked "paid".