---
id: stateOverview
title: Overview
---

import Column from '@site/src/components/Column'


## Introduction

Web applications often need to change how pages look or behave based on different scenarios, user interactions, or conditions. Qodly uses states to manage these dynamic changes efficiently. There are two primary types of states:

- Non-Conditional States: Static changes applied to a page, regardless of user input or conditions.
- Conditional States: Dynamic changes triggered by specific conditions like user roles, input, or privileges.

Before exploring these states, it’s essential to understand the [Base State](#base-state)—the default state of the page.

## Base State

The **Base State** refers to the initial version of a page when it first loads, before any customizations or dynamic changes are applied. It includes all the components, layout, and default styles that make up the page. Essentially, the **Base State** is the starting point from which further modifications can be made using either Non-Conditional or Conditional States.

In the Base State:

- All the page’s elements (e.g., buttons, forms, and sections) are visible.
- The default design (e.g., colors, fonts, and layouts) is applied.
- No special conditions or triggers have modified the page’s behavior yet.


## Non-Conditional States

### Definition

**Non-Conditional States** allow static, predefined changes to the page’s **Base State**. These states modify the page’s layout or style when triggered by events (e.g., a button click) or on page load. While they are similar to the Base State, they include specific static changes such as style modifications or read-only properties. For example, the navigation bar could be hidden by default for mobile users, or specific fields could be made read-only for all users once they submit a form.

:::info
Importantly, Non-Conditional States do not allow any sort of binding (e.g., functions, standard actions...) or changes to the Qodly source.
:::

:::tip
For additional details on how to implement Non-Conditional States, please refer to the [Non-Conditional States](./states) section.
:::

### Key Characteristics:

The key characteristics of Non-Conditional States include:

- **Static Behavior**: Non-Conditional States apply fixed changes to the UI that do not depend on any condition or user action.


- **Style Modifications**: Non-Conditional States can include changes to styles (like colors or fonts) without dynamic interaction.

:::info Example 
A travel booking website applies a blue background color to the entire page to align with its branding when the user first accesses it.
:::


- **Text & Label Modifications**: You can modify the text of components, such as labels, text boxes, or buttons in a Non-Conditional State. These changes are applied statically and don't depend on external data sources or logic.

:::info Example 
In a dashboard, the label of a “Save” button could be changed to “Saved” after the user performs a save action. 
:::


- **Component-Specific Properties**: The properties that you can modify depend on the type of component. For example, some components allow their visibility to be toggled, while others may allow the change of properties such as the read-only property, which ensures users see the same Base State structure but with certain fields not editable.

:::info Example 
In the travel booking website, fields for selecting travel dates become read-only after the user has clicked on the button to submit their choices, preventing further edits. 
:::


- **Static Visibility**: Elements can be made visible or hidden, similar to how they appear in the Base State, but without dynamic conditions.

:::info Example 
A travel booking website hides the sidebar on mobile devices for better usability when the page first loads.
:::


## Conditional States

### Definition

Unlike **Non-Conditional States**, **Conditional States** are applied dynamically when predefined conditions are met. These states allow the page to adapt in real-time to user input, privileges, or qodlysource value changes.

:::info
Once a condition is associated with a state, it becomes a `Conditional` state. As soon as the condition is `True`, the state is enabled. If the condition is `False`, the state is disabled.
:::

:::tip
For additional details on how to implement Conditional States, please refer to the [Conditional States](./conditionalStates) section.
:::

### Key Characteristics

The key characteristics of Conditional States include:

- **Dynamic UI Customization**: Elements can appear or disappear based on specific conditions or data changes.

:::info Example 
On the travel booking website, if the user selects "one-way" travel, an additional field appears asking for the return date, adapting the form based on user input. 
:::

- **Real-Time Feedback**: Conditional States enable the page to respond dynamically as conditions change, providing immediate feedback to the user.

:::info Example 
If the user selects a specific travel destination that requires a visa, the travel booking website displays a message regarding visa requirements immediately after the selection. 
:::

- **User-Centric Design**: Conditional States create a tailored experience by modifying the UI based on user privileges.

:::info Example 
In the travel booking website, travel agents see an additional option for bulk booking that regular users do not, ensuring the UI is tailored to each user’s role. 
:::

- **Client-Side Logic**: Conditional logic is often processed on the client side, improving performance and reducing server load.

:::info Example 
When a user filters flights based on price or duration, the travel booking website instantly updates the list of available options, providing real-time updates without reloading the entire page. 
:::


## Non-Conditional Vs Conditional States

| Feature | Non-Conditional States | Conditional States |
| ------- | ---------------------- | ------------------ |
| **Condition Dependence** | No conditions; applied when triggered by an event.	 | Applied only when predefined conditions are met. |
| **Purpose** | Static UI modifications or basic user interactions. | Dynamic behavior based on logic or input (Qodly sources, states or privileges). |
| **When Applied** | On page load or when an event is triggered (e.g., button click). | Dynamically, as conditions are evaluated (true or false). |


## Conflict Resolution

When multiple states are applied to a page, conflicts may arise if more than one state modifies the same element (e.g., visibility, style, or properties). In such cases, Qodly uses the following conflict resolution rules:

- **Most Recently Applied State Wins**: If two or more states modify the same element in conflicting ways, the most recent state takes precedence.

- **Conditional States Have Priority Over Non-Conditional States**: If both a Conditional State and a Non-Conditional State are applied to the same element, the Conditional State will take priority, provided the condition is met.

- **Base State as Defaul**t: If no states modify a specific element, the page retains its Base State settings for that element.