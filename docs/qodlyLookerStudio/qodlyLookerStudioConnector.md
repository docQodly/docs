---
id: qodlyLookerStudioConnector
title: Qodly Looker Studio Connector
---

import Column from '@site/src/components/Column'

## Overview

The Qodly Looker Studio Connector enables seamless integration between your **Qodly application** and **Google Looker Studio**, a powerful data visualization tool. This allows you to create interactive dashboards, track real-time business metrics, and generate custom reports using your Qodly application data.

## Why Use Looker Studio?

Understanding and analyzing your data is essential for making informed decisions. With this connector, you can:

- Visualize and analyze your Qodly data in a user-friendly interface.

- Monitor business performance using interactive charts and graphs.

- Combine Qodly data with other sources for a comprehensive view.

- Enable real-time insights with automatic data syncing and caching.

- Embed reports into your Qodly application for seamless access.

## How Does It Work?

The Qodly Looker Studio Connector acts as a bridge between your Qodly application and Looker Studio, pulling structured data from Qodly’s REST API and making it available for visualization in Looker Studio.

The integration process consists of:

- Authenticating your Qodly app using an API key.

- Defining the data classes and relationships in Qodly.

- Configuring Looker Studio to retrieve and display Qodly data.

- Building reports that provide valuable business insights.

- Embedding reports within your Qodly application.

By structuring your data effectively, you ensure that Looker Studio presents accurate and meaningful visualizations.


## Setting Up the Qodly Looker Studio Connector

### Structuring Your Data in Qodly

If you already have existing data in Qodly, you can skip this section and move to the next step on connecting Qodly to Looker Studio. However, for the purpose of this guide, we will go through the step-by-step process of structuring the data for testing and demonstration.

Below is the data model that we will use in Qodly:

<img src={require('./img/QodlyLookerModel.png').default} style={{borderRadius: '6px'}} />

This model consists of two key data classes:

- Customer: Stores basic customer details.
- Order: Stores order details, including the country and city where the order was placed.

Each Customer can have multiple Orders, and an Order is not necessarily placed in the customer's home country. Customers may travel and place orders from different locations, making it important to analyze where orders are being placed rather than just where customers are from.


### Connecting Qodly to Looker Studio

#### Step 1: Generate API Credentials in Qodly

To allow Looker Studio to access your Qodly data, you need an [API endpoint](../cloud/apiKeys#api-endpoint) and [API key](../cloud/apiKeys#api-key). These credentials act as authentication tokens that ensure secure access to your data.

1. **Access the Qodly Console**:

    <Column.List align="center" justifyContent="between">
        <Column.Item width="35%">
            - Open the Qodly Console from your browser.
            - Navigate to the API Keys section in the settings menu.
        </Column.Item>
        <Column.Item width="60%">
            <img src={require('./img/apiKeysInterface.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

2. **Retrieve the API Endpoint**:

    - The API Endpoint is a URL that Looker Studio will use to request data from your Qodly app.
    - Copy this URL and store it somewhere accessible, as you will need it in the next step.

3. **Create a New API Key**:

    - Click the "New API Key" button.

    <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            - Enter a descriptive name, such as "Looker API Key", to help you identify it.
            - Set the type to Standard, which provides the necessary permissions for data access.
            - Assign the Admin role to ensure that Looker Studio has the proper authorization to read data.
            - Click Submit and copy the API key.
        </Column.Item>
        <Column.Item width="40%">
            <img src={require('./img/newApiKeysInterface.png').default} style={{borderRadius: '6px', width: '80%'}} />
        </Column.Item>
    </Column.List>



#### Step 2: Connect Qodly to Looker Studio

With the API credentials ready, you can now establish the connection in Looker Studio.

1. **Open Looker Studio**:

    - Navigate to [Google Looker Studio](https://lookerstudio.google.com/u/0/navigation/reporting).
    - Sign in with your Google account if prompted.

2. **Create a New Report**:

    - If you're new to Looker Studio, click the Create button <img src={require('./img/lookerCreateNewReport.png').default} style={{borderRadius: '6px', width: '10%'}} /> on the left sidebar and select Blank Report.
    - If you've used Looker Studio before, you'll see a large plus (+) button in the center of your dashboard labeled Blank Report <img src={require('./img/lookerCreateNewReport2.png').default} style={{borderRadius: '6px', width: '20%'}} />, click that to begin.
    - Looker Studio will then prompt you to add data to report.

    <img src={require('./img/lookerAddDataToReport.png').default} style={{borderRadius: '6px'}} />

3. **Search for the Qodly Partner Connector**:

    <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            - In the search bar, search for "Qodly".
            - It will be displayed under the Partner Connector section.
            - Click on the Qodly connector to proceed.
        </Column.Item>
        <Column.Item width="40%">
            <img src={require('./img/lookerQodlyPartnerConnector.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

4. **Enter Your API Credentials**:

    <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            - Looker Studio will ask for the API Endpoint and API Key that you retrieved earlier.
            - Paste them in the respective fields.
            - Click Next to continue to the configuration screen.
        </Column.Item>
        <Column.Item width="40%">
            <img src={require('./img/lookerQodlyAPICredentials.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

5. **Verify the Connection**:

    - Once the connection is established, Looker Studio will list the available data classes from your Qodly application.
    - If the connection fails, ensure that the API key is correct and that your Qodly app allows external API access.

Now that your Qodly data is connected to Looker Studio, you can start building reports and visualizing your business data.


### Configure the Data Configuration Settings

Once your Qodly Looker Studio Connector is connected, you need to configure key settings to ensure efficient data retrieval and proper visualization in Looker Studio. These settings define how your data will be fetched and structured.

1. **Enter a Dataclass Name**: 

    - Example Value: Order
    - Explanation: This is the main data class you want to report on. Since we're analyzing customer orders, Order is the logical choice. Looker Studio will use this class to fetch and structure the data shown in your report.

2. **Enter a Dataclass Attribute (of type date) to be used by Looker Studio as the main date range**:

    - Example Value: date
    - Explanation: This setting determines the primary date field used for filtering reports. In this case, date represents the order date, which is the most logical date for tracking transactions over time. When you apply a date range filter in Looker Studio (e.g., “Last 30 days”), this is the field it will use.

3. **Pagination Top**:

    - Default Value: 10000
    - Explanation: Defines the number of records retrieved per API request. A higher value (e.g., 10000) reduces API calls but may impact performance if your dataset is very large. If you experience slow performance, you can lower this value (e.g., 5000 or 2000).

4. **Cache TTL (Time-To-Live)**:

    - Default Value: 900 (in seconds)
    - Explanation: This setting controls how frequently Looker Studio refreshes the data. 900 seconds (15 minutes) is a balanced setting to ensure fresh data without excessive API requests. If your data updates frequently, you may want to reduce it (e.g., 300 seconds). If your data is static or doesn’t change often, increase it (e.g., 3600 for 1-hour caching).

5. **Custom Query Filter (Optional)**:

    - Example Value: amount > 500
    - Explanation: Allows you to filter the data before Looker Studio retrieves it. (Example: If you only want to analyze high-value customers, you can set a condition to exclude orders under $500.). You can also filter by country: country = 'USA' to analyze only US-based customers.

6. **Add Additional Attributes to Query (such as relations)**:

    - Example Value: customer.firstName, customer.lastName, customer.email, country, city, amount
    - Explanation: This setting allows you to retrieve related fields from the Customer entity. Since customer is a relation in the Order table, you need to explicitly include attributes like customer.firstName, customer.lastName, and customer.email. Also, include country and city to analyze customer distribution geographically.

Click "Add" to apply the settings and fetch the data.

