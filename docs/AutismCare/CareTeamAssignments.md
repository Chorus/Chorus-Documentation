---
id: CareTeamAssignments
title: Care Team Assignments
---
# Overview

The Care Team Assignments tab has 1 sub grid. This sub grid lists all the Care Team Assignments the Practitioner has.   

<br>

# Care Team Assignments

The sub grid displays the Patient Name, Authorization Service, Amount of Hours, Frequency, Period Start Date and Period End Date. There are 2 different views available. The default view is 'Current Assignments'. This view is filtered to display Care Team Assignment records related to this Practitioner where the Period End Date is equal to Today or is in the future. The other view is 'All Assignments'. This view displays all Care Team Assignments related to this Practitioner.

<img src ="/static/img/careTeamAssignmentSubgrid.jpg" width="900"/>

 ### <u> Add New Care Team Assignments </u>
 
 To create a new Care Team Assignments, click on the 'Add New Care Team Assignments' button on the sub grid. This will open up the New Care Team Assignments Quick Create Form.

<br>

> ### Quick Create: Care Team Assignments
> Care Team Assignment Information
> - <span style="color:red"> * </style>Patient
> 
>   - The lookup field is filtered to display Patients.
>   - After populating the Patient field, the field is locked.  
> - <span style="color:red"> * </style>Episode of Care
>
>   - This field is locked when the Patient field has no value.
>   - Upon populating the Patient field, this field is auto-populated with the Active Episode of Care record related to the Patient. 
>      - If more than one active Episode of Care record exists, the one most recently created is used.
>    - This field is filtered to display Episode of Care records related to this Patient.  
> - <span style="color:red"> * </style>Authorization Service
>
>   - This field is locked when the Patient field has no value.
>   - This field is filtered to display active Authorization Services related to this patient. 
> - <span style="color:red"> * </style>Period Start Date
>
>   - Upon populating the Authorization Service field, this field is populated with the Start Date from the Authorization Service. 
> - <span style="color:red"> * </style>Period End Date
>
>   - Upon populating the Authorization Service field, this field is populated with the End Date from the Authorization Service. 
>  
> Assignment Hours
> - <span style="color:red"> * </style>Amount of Hours
> - <span style="color:red"> * </style>Frequency 
>
>   - Option Set with the values: Hours Per Day, Hours Per Week, Hours Per Month, Hours Per Assignment Period
> 
>Assigned Practitioner
> - <span style="color:red"> * </style>Practitioner
>
>   - The lookup field is filtered to display Practitioner.
>   - Upon navigating from a Practitioner record, this field is hidden and is populated with the Practitioner.
>   - Once populated, this field is locked. 
> - <span style="color:red"> * </style>Practitioner Role
>
>   - This field is filtered to display Practitioner Roles related to the Practitioner. 
>   - If a Practitioner Role is found with a Start Date (Practitioner Role) before the Period Start Date (Care Team Assignment) and the End Date (Practitioner Role) is null or after the Period End Date (Care Team Assignment), this field is auto-populated with the Practitioner Role record related to the Practitioner.
>
><img src ="/static/img/careTeamAssignmentQC.jpg" width="500"/> <img src ="/static/img/careTeamAssignmentQCPopulated.jpg" width="500"/> 

<br>

Care Team Assignment Name - The Care Team Assignment Name is populated as the Patient Name, the Practitioner Name, Service, Period Start Date and the Period End Date separated by a '-'. The Service is pulled from the related Insurance Plan Benefit. Example: 'Laverne Mraz - John Doe - Direct Care - 5/17/2022 - 11/17/2022'.