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
         <li><strong>Amount</strong>: The total cost of the upcoming invoice.</li>
         <br/>
         <li><strong>Billing Date</strong>: The scheduled date for the next payment.</li>
         <br/>
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
            <li><strong>Description</strong>: Items included in the subscription, such as: Qodly Power (computing resources), Storage extensions, and the Internet outbound data transfer packs.</li>
            <br/>
            <li><strong>Quantity</strong>: Amount of each resource being billed.</li>
            <br/>
            <li><strong>Unit Price</strong>: The price per unit of each resource.</li>
            <br/>
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
         <li><strong>Status</strong>: Indicates whether the subscription is active or inactive.</li>
         <br/>
         <li><strong>Start Date</strong>: The date your subscription began.</li>
         <br/>
         <li><strong>Billing Cycle Start/End</strong>: Defines the current subscription cycle's start and end dates.</li>
         <br/>
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
         <li><strong>Email</strong>: The associated email address.</li>
         <br/>
         <li><strong>Card Number</strong>: The new payment card details.</li>
         <br/>
         <li><strong>Expiration Date</strong> and <strong>Security Code (CVC)</strong>.</li>
         <br/>
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

<br/><br/>

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        Clicking the <strong>Download Invoice</strong> <img src={require('./img/billingDownloadInvoice.png').default} style={{borderRadius: '6px', width:'20%'}} /> button redirects you to a detailed invoice page where you can:
        <br/><br/>
        <ul>
            <li><strong>Download Invoice</strong>: Get a PDF copy of the invoice for record-keeping.</li>
            <br/>
            <li><strong>Download Receipt</strong>: Obtain a receipt for accounting or reimbursement purposes.</li>
        </ul>
    </Column.Item>
    <Column.Item width="40%">
      <img src={require('./img/billingDownloadInvoice2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


### Manage Subscription

The **Manage Subscription** <img src={require('./img/billingManageSubscription.png').default} style={{borderRadius: '6px', width:'10%'}} />  button directs you to the [Subscription Page](#subscription-page), where you can manage services and environments, including upgrading or deleting environments.

