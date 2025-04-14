---
id: billingSubscriptionManagement
title: Billing Subscription Management
---

import Column from '@site/src/components/Column'

The **Billing** and **Subscription** pages in Qodly offer comprehensive tools for managing payments, invoices, and environment-specific subscriptions. 

## Billing Page

The **Billing Page** provides a detailed overview of your current subscription, payment methods, and past invoices. It is designed to give you control over payment details and an understanding of upcoming charges. 

<img src={require('./img/billingOverview.png').default} style={{borderRadius: '6px'}} />

### Next Invoice

The **Next Invoice** section displays the amount and date of your next scheduled payment, with the option to view a detailed breakdown.

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
      <ul>
         <li><strong>Amount</strong>: The total cost of the upcoming invoice.</li> &nbsp;
         <li><strong>Billing Date</strong>: The scheduled date for the next payment.</li> &nbsp;
         <li><strong>View Details</strong>: Opens a breakdown of the invoice, showing the following details:</li>
      </ul>
    </Column.Item>
    <Column.Item width="40%">
      <img src={require('./img/billingNextInvoice.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="100%">
    <ul>
        <ul>
            <li><strong>Description</strong>: Items included in the subscription, such as: Qodly Power (computing resources), Storage extensions, and the Internet outbound data transfer packs.</li> &nbsp;
            <li><strong>Quantity</strong>: Amount of each resource being billed.</li> &nbsp;
            <li><strong>Unit Price</strong>: The price per unit of each resource.</li> &nbsp;
            <li><strong>Total</strong>: The cost for each resource and the total sum of all charges.</li>
        </ul>
    </ul>
    </Column.Item>
</Column.List>
<img src={require('./img/billingNextInvoiceDetails.png').default} style={{borderRadius: '6px'}} />


### Subscription Overview

This section provides the status and cycle of your subscription, along with the associated payment method.

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
      <ul>
         <li><strong>Status</strong>: Indicates whether the subscription is active or inactive.</li> &nbsp;
         <li><strong>Start Date</strong>: The date your subscription began.</li> &nbsp;
         <li><strong>Billing Cycle Start/End</strong>: Defines the current subscription cycle's start and end dates.</li> &nbsp;
         <li><strong>Payment Method</strong>: Displays the card currently linked to your subscription.</li>
      </ul>
    </Column.Item>
    <Column.Item width="45%">
      <img src={require('./img/billingSubscriptionOverview.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

### Change Payment Method

Clicking the <strong>Change Payment Method</strong> card <img src={require('./img/billingChangePayement.png').default} style={{borderRadius: '6px', width:'20%'}} /> opens a dialog box where you can update the card details, including:


<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
      <ul>
         <li><strong>Email</strong>: The associated email address.</li> &nbsp;
         <li><strong>Card Number</strong>: The new payment card details.</li> &nbsp;
         <li><strong>Expiration Date</strong> and <strong>Security Code (CVC)</strong>.</li> &nbsp;
         <li><strong>Country</strong>: The billing country for the card.</li>
      </ul>
    </Column.Item>
    <Column.Item width="40%">
      <img src={require('./img/billingChangePayement2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

Updating the payment method ensures the next payment is processed without interruptions.


### Invoices

The **Invoices** section lists past invoices with downloadable options for receipts and invoice details:

  - **Date**: When the invoice was issued.
  - **Status**: Displays whether the invoice has been paid.
  - **Invoice Number**: A unique identifier for each invoice.
  - **Total Amount**: The total charge for that invoice.

<img src={require('./img/billingInvoices.png').default} style={{borderRadius: '6px'}} />

&nbsp; &nbsp; 

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        Clicking the <strong>Download Invoice</strong> <img src={require('./img/billingDownloadInvoice.png').default} style={{borderRadius: '6px', width:'20%'}} /> button redirects you to a detailed invoice page where you can:
        &nbsp; &nbsp; 
        <ul>
            <li><strong>Download Invoice</strong>: Get a PDF copy of the invoice for record-keeping.</li> &nbsp;
            <li><strong>Download Receipt</strong>: Obtain a receipt for accounting or reimbursement purposes.</li>
        </ul>
    </Column.Item>
    <Column.Item width="40%">
      <img src={require('./img/billingDownloadInvoice2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


### Manage Subscription

The **Manage Subscription** <img src={require('./img/billingManageSubscription.png').default} style={{borderRadius: '6px', width:'10%'}} />  button directs you to the [Subscription Page](#subscription-page), where you can manage services and environments, including upgrading or deleting environments.


## Subscription Page

The **Subscription Page** is designed for managing environment-specific services and associated costs. It allows you to upgrade, delete, or add environments, providing detailed control over the resources allocated to each environment.

### Environment Overview

The **Environment Overview** section lists all environments with details of their configurations and associated costs.

<img src={require('./img/subscriptionOverview.png').default} style={{borderRadius: '6px'}} />

Clicking on an environment card reveals detailed configurations and associated costs for the environment:

- **Qodly Power**: Displays the computing resources (CPU and memory) assigned to the environment, along with the monthly cost.
- **Extra Storage**: Shows any additional storage allocated to the environment.
- **Internet Outbound Data Transfer Pack**: Indicates the bandwidth included for outbound data transfers.
- **Backup Service**: Displays if the database backup option is enabled.

<img src={require('./img/subscriptionOverview2.png').default} style={{borderRadius: '6px'}} />


### Add Environment

The **Add Environment** <img src={require('./img/subscriptionAddEnvironement.png').default} style={{borderRadius: '6px', width:'15%'}} /> button enables the creation of new environments. Users can:

- Add multiple environments in one session.

- Customize each environment with specific computing power, storage, bandwidth, and additional services.

- Review configuration summaries and total costs before finalizing.

- Either submit <img src={require('./img/submit.png').default} style={{borderRadius: '6px', width:'8%'}} /> all configured environments or discard <img src={require('./img/discard.png').default} style={{borderRadius: '6px', width:'8%'}} /> the entire session.

    <img src={require('./img/subscriptionAddEnvironement2.png').default} style={{borderRadius: '6px'}} />


:::tip
The configuration options for each environment in this section are the same as those in the [Step 3: Configure Application Details](./myApps.md#step-3-configure-application-details) section when creating a new app for the first time. Each added environment requires independent configuration, including options for:
:::


### View Environment

The **View Environment** <img src={require('./img/subscriptionOpen.png').default} style={{borderRadius: '6px', width:'4%'}} /> button opens the [selected environment’s overview page](./environmentsOverview.md) for further details and monitoring.

### Upgrading an Environment

The **Upgrade** <img src={require('./img/subscriptionUpgrade.png').default} style={{borderRadius: '6px', width:'4%'}} /> button opens a configuration panel where you can adjust the resources allocated to a specific environment, enhancing its capabilities based on your project needs.

:::tip
The current configuration settings for the environment are pre-selected by default, making it easy to adjust specific elements as needed.
:::

The upgrade panel includes the Environment Configuration options, consistent with the settings available in the [Step 3: Configure Application Details section](./myApps.md#environment-configuration) during initial app creation. Changes can be applied by clicking "Save Changes" <img src={require('./img/saveChanges.png').default} style={{borderRadius: '6px', width:'10%'}} /> or discarded by selecting Cancel <img src={require('./img/cancel.png').default} style={{borderRadius: '6px', width:'9%'}} />.

<img src={require('./img/subscriptionUpgradePanel.png').default} style={{borderRadius: '6px'}} />

:::tip
Billing adjustments are prorated for the remaining duration of the current billing cycle, as displayed in the summary panel to the right.
:::

:::info
If the Database Backup Service was enabled during the initial creation of the environment, it remains locked and cannot be deselected in the upgrade configuration.
:::

### Deleting an Environment

The **Delete** <img src={require('./img/subscriptionDelete.png').default} style={{borderRadius: '6px', width:'4%'}} /> button removes the selected environment (except Development) after confirmation:

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
      <ul>
         <li>Available for all environments except Development.</li> &nbsp;
         <li>Requires entering the environment name in a confirmation dialog to prevent accidental deletions.</li> &nbsp;
         <li>Once deleted, the environment and its associated resources are removed, and the subscription is updated.</li>
      </ul>
    </Column.Item>
    <Column.Item width="45%">
      <img src={require('./img/subscriptionDelete2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

