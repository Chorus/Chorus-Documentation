---
id: RemitsOverview
title: Remits Overview
hide_title
---

# **Remits Overview**
This section contains an overview of how users interact with remits once they're brought into the system.


## **Viewing a Remit**
Upon import of the X12 data of an 835 Remit file, the system constructs a remit record based on the X12 data.

### **Remits Main Grid**

Navigate to the Remits main grid by clicking 'Remits' on the sitemap. To search for and navigate to remits, use the remits main grid.

![Sitemap - Remits](assets/Remits/Remits_Screenshots/Sitemap-Remits.png)

By default, the 'Recent Remits' view will display. Another view with 'All Remits' is available as well.

- Recent Remits - Remits with a transaction date within the past 30 days. 
- All Remits - All remits in the system.

To open a remit form, click on a remit record in the grid.

The remit main form displays all remit data and adjustments on the remit as well as the remit lines. Also accessible from here, is the case that was created against the related claim.

### **Remit Info**
The Remit Info tab is where all remit information is displayed. This tab is divided into two main sections - the top half displays the general remit details as outlined below, and the second half of the screen contains detailed remit line information in a sub-grid.


<!-- ![Remit Info tab](assets\Remits\Remits_Screenshots\RemitInfoTab.PNG) -->

| Field | Description |
|---|---|
|Status Reason | The remit's status - whether it is active, posted or voided. |
|Claim Number | The claim number of the claim this remit is responding to. (Patient Account Number) |
|Payor ICN | An identification number assigned to the remit by the payor, which allows the remits to be distinguished and referenced. When a payer splits a claim into two there are two ICN's associated with one claim number. The ICN on a payment reversal is identical to the ICN on the payment it is reversing. |
|Payor | A lookup to the payor who has responded with this remit. |
|Patient | A lookup to the patient who received the services for which the claim was billed. |
|Claim Status Code | The claim status as defined by the payor. (See [Reversals](....) for additional information on claim status codes.)|
|Payment/Check Date | The date the remit was processed on. |
|Total Billed | The amount billed in this remit. This is the sum of the billed amount for each service line in the remit. |
|Total Paid | The amount paid in this remit. This is the sum of the paid amount for each service line in the remit. |
|Total Cost Share Adjustments | The amount the remit is reduced by payor adjustments with CARC codes your organization set to include as [Cost Share Adjustments](/Remits/Remit/Adjustments/Cost-Share-Adjustments). This is the sum of the Cost Share Adjustment amount on each service line in the remit. |
|Total Other Adjustments |The amount the remit is reduced by payor adjustments with other CARC codes - that are not included as Cost Share Adjustments by your organization. This is the sum of the Other Adjustment amount on each service line in the remit. |
|Payment | A lookup to the payment this remit is included in. |
|Transaction | A lookup to the transaction this remit is included in. |
|Claim | A lookup to the claim this remit is responding to. |


#### **Remit Lines Sub-grid**

In the remit lines sub-grid the details per service line are displayed, along with the payor's adjustments applied on the remit line.

The remit line adjustments are listed in the Service Adjustment Details column. The three components of each adjustment are grouped together and set up as: Group code - Reason code - Dollar amount associated with this adjustment, for example CO-45-$100.00. When there is more than one adjustment on a service line, the adjustment groups are separated by vertical bars. 

![Remit Lines Subgrid](assets/Remits/Remits_Screenshots/RemitLinesSubgrid-ServiceLineAdjustments.png)


### **Remit Adjustments**
On this tab, the Remit Adjustments sub-grid displays adjustments applied to the remit on the remit level (not on individual remit lines). 

### **Case Info**





