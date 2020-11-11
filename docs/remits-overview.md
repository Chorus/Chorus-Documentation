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

![Sitemap - Remits](assets/Remits/Remit_Screenshots/Sitemap-Remits.png)

By default, the 'Recent Remits' view will display. Another view for 'All Remits' is available as well.

- Recent Remits - Remits with a transaction date within the past 30 days. 
- All Remits - All (active?) remits in the system.

To open a remit form, click on a remit record in the grid.

The remit main form displays all remit data and adjustments on the remit as well as the remit lines. Also accessible from here, is the case that was created against the related claim.

### **Remit Info**
The Remit Info tab is where all remit information is displayed. This tab is divided into two main sections - the top half displays the general remit details as outlined below, and the second half of the screen contains detailed remit line information in a sub-grid.


![Remit Info tab](assets/Remits/Remit_Screenshots/RemitInfoTab.png)

| Field | Description |
|---|---|---| --- |
|Status Reason | 
|Claim Number | The Claim number of the claim this remit is responding to. (Patient Account Number) |
|Payor ICN | An identification number assigned to the remit by the payor, which allows the remits to be distinguished and referenced. |
|Payor | A lookup to the payor who has responded with this remit. |
|Patient | A lookup to the patient who received the services for which the claim was billed. |
|Claim Status Code | The claim status as the defined by the payor. (See [Reversals](....) for additional information on claim status codes.)|
|Payment/Check Date | The date the remit was processed on. |
|Total Billed | The amount billed in this remit. This is the sum of the billed amount for each service line in the remit.
|Total Paid | The amount paid in this remit. This is the sum of the paid amount for each service line in the remit.
|Total Cost Share Adjustments | The amount the remit is reduced by payor adjustments with CARC Codes your organization set to include as [Cost Share Adjustments](/Remits/Remit/Adjustments/Cost-Share-Adjustments). This is the sum of the Cost Share Adjustment amount 

The amount the 'Outstanding Amount' on the remit is reduced by [Cost Share Adjustments](/Remits/Remit/Adjustments/Cost-Share-Adjustments) - based on the CARC Codes the organization set to include as Cost Share Adjustments. This is the sum of the Cost Share Adjustment amount for each service line in the claim, and any remit level adjustments on the claim.
|Total Other Adjustments |
|Payment |
|Transaction |
|Claim |
