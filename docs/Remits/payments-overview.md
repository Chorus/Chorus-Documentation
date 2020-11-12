---
id: PaymentsOverview
title: Payments Overview
hide_title
---

# **Payments Overview**
This section contains an overview of how users interact with payments once they're brought into the system.


## **Viewing a Payment**
Upon import of the X12 data of an 835 Remit file, the system constructs a payment record based on the payment information in the X12 data.

### **Payments Main Grid**

Navigate to the Payments main grid by clicking 'Payments' on the sitemap. To search for and navigate to payments, use the payments main grid.

![Sitemap - Payments](assets\Remits\Remits_Screenshots\Sitemap-Payments.png)

By default, the 'Recent Payments' view will display. Another view with 'All Payments' is available as well.

- Recent Payments - Payments with a Check/Payment date (or transaction date?) within the past 30 days. 
- All Payments - All (active?) payments in the system.

To open a payment form, click on a payment record in the grid.

The payment main form displays the transaction and payment data. As well as a list of all remits included in this payment.


### **Payment Info**
The Payment Info tab shows information about the payment, as well as information about the transaction this payment is part of. 

![Payment Info Tab](assets\Remits\Remits_Screenshots\PaymentInfoTab.png)

| Field | Description |
|---|---|
|Transaction ID |
|Transaction Number |
|Transaction Date |
|Check/EFT Date |
|Credit or Debit |
|Payment Format |
|Payment Method |
|Transaction Handling Code |
|Payor |
|Billing Office |
|Payee |
|Financial Account |
|Delivered To |
|Payment ID |
|Payment Total |
|Total Paid |
|Total Payment Adjustments |


#### **Payment Adjustments Sub-grid**
The payment adjustments applied on the payment level are listed in this sub-grid, along with pertinent details such as the payment adjustment amount, and reason.


### **Remits**
Here, the remits included in this payment are listed in a sub-grid. To see the remit lines included in each remit, click the '>' next to a remit record to expand the grid.

![Payments - Remits Sub-grid](assets\Remits\Remits_Screenshots\Payments-RemitsSub-grid.png)