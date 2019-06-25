---
id: RemitsCoreConcepts
title: Remits Core Concepts
---

# Remits Core Concepts

Here, the core concepts used throughout Remits are detailed and explained.

## Account
An account is a company with which the business unit has a relationship.

In Remits, accounts include the insurance companies, who pay for the customers – those who received services from provider/s.
Information included in the account entity consist of relevant contact information, company information, category, relationship type, and address information. 


## Contact
A contact is a person with which the business unit has a relationship. 

In Remits, accounts include persons such as a provider, or a patient. A contact may also be the contact person for an account.
The contact entity stores all information about a person such as an email address, street address, telephone numbers, and other related information, such as the birthday or anniversary date.


## Invoice
An invoice is a claim against which an ERA/payment is received. 

## Transaction
A transaction is the transfer of funds (and/or ERA) from the payer to the payee. A single transaction may include multiple payments, which can be comprised of invoice payments (applied to an invoice directly) and payment adjustments (not related to any invoice).
The transaction amount is the total dollar amount of the check/EFT, which is a combination of multiple payments (ERAs). This entity includes the sender and receiver information, their financial dimension information (account the funds were transferred from, account the funds were transferred to), the date of the transaction, and more.


## Payment
A payment is the total amount of a single ERA. The information provided within the ERA explains the payment in detail. The payment can include two payment types.

-	An invoice payment which is a payment against an invoice.
-	A payment adjustment which is an adjustment between the provider and payer. A payment adjustment is not associated with any invoice.


## Payment Adjustment
An adjustment refers to any change that relates to how a claim was paid differently than the original billing. 
There are a few types of adjustments.


- #### Payment Adjustment
    An adjustment that is not related to an invoice or invoice line; it is a general adjustment between the payer and payee, referred to as Payment Adjustment.

    In some instances, a payer and provider may have an agreement that calls for periodic advance payments against expected claim volume, and subsequent adjustments, as the actual payments are processed. These adjustments are not on service lines, nor individual claims. These are general payment adjustments, which may involve the payer paying the payee – if the claim amounts exceeded the advance payments, or the payee paying the payer – if the advance payment exceeded the claim amounts.




- #### Invoice Payment Adjustment
    An adjustment that is applied against an invoice; not a specific invoice line is referred to as Invoice Payment Adjustment.

    In the non-institutional and/or outpatient environment, adjustments are provided at the service line level. However, in institutional/in-patient environments that is not always the case. When working with room rate adjustments, administrative days, or non-covered days, it may be appropriate to provide these adjustments at the claim level and not provide details per service line.

    > For example: A hospital bills a payer for a patient’s 15-day stay at their institution, at a fixed rate per day. The payer agrees to pay for only 12 days. The payer will supply an adjustment reason code for the 3 non-covered days, and the total dollar amount related to these reductions. These adjustments are not applied at the service line level, rather on the claim as a whole.

- #### Invoice Line Payment Adjustment
    An adjustment that the payer applies on a service line is referred to Invoice Payment Line Adjustment. These adjustments are categorized:

   - **CO** - Contractual Adjustment
   - **PR** - Patient Responsibility
   - **OA** - Other Adjustment



## Financial Dimension 
In Remits, a financial dimension is a/the financial aspect of an account or contact, such as a bank account or other DFI account. Financial Dimension is the account information from/to which funds can be transferred.
