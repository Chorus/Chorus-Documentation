---
id: Qualifications
title: Qualifications
---
# Overview

The Qualifcations tab has 1 sub grid. This sub grid lists all the certifications the Practitioner has.   

<br>

# Qualifications

## Qualifications 

The sub grid displays the Qualification Name, Certification Date, Expiration Date and the Qualification Number. 

 ### <u> Add New Practitioner Qualification </u>
 
 To create a new Practitioner Qualification, click on the 'New Practitioner Qualification' button. This will open up the New Practitioner Qualification Quick Create Form.

<img src ="/static/img/qualification.jpg" width="900"/>

<br>

> ### Quick Create: Practitioner Qualification
>
> - Practitioner - This field is populated with the Practitioner navigating from.
> - <span style="color:red"> * </style>Qualification
>
>   - The lookup field displayed is filtered to display Qualification Definitions.
>   - Upon saving this record, this field is locked and cannot be edited. 
> - <span style="color:red"> * </style>Certification Date
> - Expiration Date
> - Qualification Number 
>
> <img src ="/static/img/pqQuickCreate.jpg" width="400"/>

Upon clicking on an existing record in the sub grid, the record displays in pop out mode. The Practitioner field and the Qualification field are locked. 
Upon clicking the 'New' button, the Practitioner Qualification Main Form opens. 

> ### Practitioner Qualification Main Form
>
> - Practitioner
> - <span style="color:red"> * </style>Qualification
>
>   - The lookup field displayed is filtered to display Qualification Definitions.
>   - Upon saving this record, this field is locked and cannot be edited. 
> - <span style="color:red"> * </style>Certification Date
> - Expiration Date
> - Qualification Number 
>

<br>

Practitioner Qualification Name - The Practitioner Qualification Name is populated as the Practitioner Name, the Qualification and the Expiration Date separated by a '-'. Before the expiration date, the word 'Exp' is added. See below. 


<img src ="/static/img/PractitionerQualificationName.jpg" width="300"/>
<br>

### <b> Importance of correct qualification information </b>

It is important that the qualification and the dates are accurate. When scheduling a Session with a Practitioner, the system checks that the Practitioner has the required qualification for the service being provided.
 
> <b>How do you know what the required qualifications are for the service? </b>
>
> The Insurance Plan Benefit (related to the Encounter Service) has a list of the qualifications a Practitioner must have to receieve payment for rendering the service. See below. 
>
> <img src ="/static/img/PractitionerQualification.jpg" width="1300" height="400"/>
>
> Upon saving an Encounter Service, if the Authorization Service field was not populated, it is auto populated based on the Care Team Assignment. Every Authorization Service has a lookup to an Insurance Plan Benefit. The Insurance Plan Benefit has an Insurance Plan, a Procedure Code of a Service and all other requirements related to the Service provided.