---
id: RemitsFeatures
title: Remits Features
---

# Remits Features

## Import 835s
The Denial Management process in Remits begins with the import of ERAs to the system, which is usually accomplished by the system, though it can be completed manually as well.


* #### Import Feature

    The import feature is the primary means of pulling remittance advices into the Claims Management application. The system can be configured to check for new remits in the clearinghouse at regular intervals based on specifications. The X12 Remit data will be dissected, and converted to the CDS in a perfectly organized fashion.

    835 files are saturated with relevant information, which the system utilizes to its fullest capacity. Many details - including payer information, patient name, provider identification and more - are extracted, autocreating records such as accounts, contacts, and price lists. This enables considerable parts of the database to be set up without exhausting tedious, manual labor.

* #### Manual Entry

    The manual remit entry enables users to enter ERA information in the same organized manner, on those occasions when paper ERAs are received. Once the data is inputted, it will perform in equivalence to the ERAs imported systematically.

Imported ERAs are inspected, and the system will search through the claims depository for a corresponding claim to link the payment with...
When there is no corresponding claim to associate the payment with, Remits will generate a claim based on the information contained within the ERA.

Once ERAs are linked to a claim, the claim becomes the primary record around which the denial management processes revolve. 


# Claims/Invoices
