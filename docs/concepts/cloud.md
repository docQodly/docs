---
id: cloud
title: Qodly Cloud Architecture
---

![cloud architecture](img/cloud-archi.png)


## Access

Within your application's framework, access is categorized into two levels: **Developer Access** and **End User Access**.


### Developer Access

Developers possess entry to the Qodly Studio environment within the development phase, where they engage in coding activities. The procedure for gaining Qodly Studio access mandates a sequence of steps encompassing transit through a Content Delivery Network (CDN) and a Web Application Firewall (WAF). These measures reinforce security measures, providing a shield against potential threats. 

### SFTP Access

Developers are empowered to utilize SFTP for file uploads and downloads across all environments. To realize SFTP access, developers traverse a Network Load Balancer along with an Identity Service, which collectively handles authentication and authorization requirements. 

### End User Access

End users are granted authorization to interact with renderers across all environments. Comparable to developer access, requests from end users are channeled through a CDN and WAF, bolstering security measures before being directed to the appropriate environment via load balancing. 


## Development steps

The development process of your application involves the following steps and related [environments](../cloud/getStarted.md#environments-and-services): 

- **Development:** During this phase, code is formulated and subjected to testing within the dedicated development environment (dev environment). Developer access to the studio undergoes stringent security protocols through the incorporation of CDN and WAF. 

- **Staging**: Following the validation process within the dev environment, the code is propagated to the staging environment. In this realm, access requests conform to the same security protocols observed during the development phase. 

- **Production**: Once complete testing in the staging environment concludes, the code is disseminated to the production environment (prod environment). This final step integrates automatic database backups for data integrity. Access to this environment is fortified by a combination of CDN, WAF, load balancing, and identity service mechanisms. 

 

Across each environment, dedicated databases store essential data. Moreover, in the production environment, data undergoes periodic migration to a backup storage repository via a scheduled Cron job. This backup data is subsequently preserved in an S3 bucket, bolstering redundancy and enhancing data protection. 

Throughout the entirety of the developmental life cycle, meticulous oversight is maintained, and all relevant processes and components are meticulously tracked within the App Source code repository. This concerted approach ensures a secure and seamless workflow from inception to deployment. 


## Cloud technologies

Qodly Cloud is powered by [**Amazon Web Services**](https://aws.amazon.com/cognito/).  

Every [Qodly Server](../concepts/platform.md#qodly-server) is a container deployed on a Virtual Machine (VM) powered by [AWS Elastic Kubernetes Service](https://aws.amazon.com/eks/) (EKS).  

User access is managed by Qodly Identity Service (QIS) based on [AWS Cognito](https://aws.amazon.com/cognito/). It is a central service to control all users access to Qodly modules. 

Every developer or application user needs to be `declared in QIS` with an appropriate [role](../studio/roles/dataAccessRestrictions.md). Roles allow you to assign assign different permissions at database level for user sessions.

Automatic scheduled backups are provided for staging and production environment. Backups are stored on [AWS S3](https://aws.amazon.com/s3/) services.  


