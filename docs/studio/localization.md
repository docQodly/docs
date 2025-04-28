---
id: localization
title: Localization (i18n)
---

import Column from '@site/src/components/Column'

## Overview

The Localization (i18n) in Qodly provides built-in support for creating multilingual applications without requiring any manual coding.
It enables developers to manage languages, create translation keys, configure dynamic translations for page elements, and allow end-users to switch languages at runtime.

Localization in Qodly is designed to integrate seamlessly into the visual development workflow. Developers can define locales, manage literals (translated text values), and bind language-switching mechanisms using qodlysources, without needing to manipulate data structures manually.

:::info Feature Capabilities
- Define supported application locales.
- Set a primary (default) locale for fallback.
- Create and manage translation keys linked to UI components.
- Edit literals per locale directly within the Webform Editor.
- Enable runtime language switching through the UserLanguage shared source.
- Export and import literals using CSV or JSON for external translation processes.
:::

## Key Concepts

| Term                        | Definition                                                   |
|---------------------------------|---------------------------------------------------------------|
| Locale                    | A specific language or regional variation used for translations. |
| Primary Locale	        | The fallback language displayed when no user selection or supported browser language is available. |
| Literal                   | A piece of user-facing text that can have translations across multiple locales.     |
| Key                       | A unique reference identifier linking a literal to its translations.  |
| UserLanguage	            | A built-in shared source containing the currently selected locale and the list of supported locales. |

## Localization Feature Behavior

Localization within Qodly operates according to a layered priority model to determine which language is displayed to the end user.
The priority order is as follows:

1. User-selected language via the runtime language selector.
2. Session-stored language (persisted from a previous visit).
3. Browser language detection, if supported by the application.
4. Primary locale fallback, if no other condition applies.

If a literal does not have a translation for the active locale, the system will default to displaying the literal in the primary language or the original text if no primary translation exists.


## Managing Localization

### Accessing the Localization Page

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        The **Localization** page provides a centralized interface for managing application languages and translation keys. 

        It is accessible through the **Explorer** view within Qodly Studio.

        From this page, developers can create supported locales, define primary locales, manage literals, and configure translations without modifying application logic.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/explorerLocalization.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


### Creating Locales

A **locale** represents a specific language or regional variant that the application supports. Adding locales allows the application to adapt its content to different audiences.

To add supported languages:

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        1. Navigate to the Localization page.
        
        2. Click **Add new Locale** to open the locale selection dropdown.
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/noLocalLocalization.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        3. Choose the desired language from the list.

        4. Validate the selection to add the locale.
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/addLocalLocalization.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        Developers can define multiple supported locales by clicking on the "+" button <img src={require('./img/addLocalLocalization2.png').default} style={{borderRadius: '6px'}} />.  
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/multipleSupportedLocales.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


:::info

One of the locales must be set as the **Primary Locale**, which acts as the default language whenever no user preference or browser match is available.

<img src={require('./img/primaryLocale.png').default} style={{borderRadius: '6px'}} />

Setting a Primary Locale ensures consistent fallback behavior across user sessions and browsers.
:::

### Previewing Locales in the Studio

By default, no locale is selected when opening a page in the Studio.  

<img src={require('./img/pageDefaultNoLocale.png').default} style={{borderRadius: '6px'}} />

Developers can manually switch between configured locales during development to preview how translations appear across languages.


<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        This is achieved by:
            - Clicking the **Localization** button <img src={require('./img/pageLocalizationButton.png').default} style={{borderRadius: '6px'}} /> in the [Header panel](./pageLoaders/pageLoaderOverview.md#header-panel) of the page. 

            - Selecting any of the available locales to simulate the translated application view.
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/availableLocales.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

This preview is strictly for **design-time visualization** within the canvas and does not affect runtime user sessions or language selection persistence.


### Manual Translation 

A **literal** is any visible text in the application interface (e.g., labels, button texts, titles). By default, each literal exists independently for each locale page. 

Developers can manually modify the literal text **directly** in each locale's version without creating a translation key.  

<Column.List align="center" justifyContent="between">
    <Column.Item width="45%">
        <img src={require('./img/manualEditLocal1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/manualEditLocal2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::info
This method is simple for small applications but becomes harder to maintain as the number of locales grows.
:::

### Creating Translation Keys

A **literal** is any visible text in the application interface (e.g., labels, button texts, titles). By default, each literal exists independently for each locale page. 

For better scalability, **literals can be assigned to translation keys**. A **translation key** links a text element to a centralized reference, allowing it to be easily managed and translated across all supported locales.

Assigning a translation key enables centralized updates, reduces duplication, and ensures consistency when a literal is reused across different pages or components.

To create a translation key:

1. Open the **i18n** menu from the page header panel.
2. Select a locale from the language selector.
<Column.List align="center" justifyContent="between">
    <Column.Item width="45%">
        3. Double-click the text within the text component you want to translate.
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/textTranslationKey.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>
4. From the tooltip, click on the **i18n** button <img src={require('./img/tooltipI18n.png').default} style={{borderRadius: '6px'}} />.
<Column.List align="center" justifyContent="between">
    <Column.Item width="45%">
        5. A modal will appear showing the current text value.
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/tooltipI18nModal.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>
<Column.List align="center" justifyContent="between">
    <Column.Item width="45%">
        6. In the **Search for keys** field, type the desired key name (for example, `marketingText_Key`).
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/tooltipI18nModalSearchForKeys.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>
<Column.List align="center" justifyContent="between">
    <Column.Item width="45%">
        7. The system will suggest creating the key.

        8. Click **Create** to link your text to the new key.
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/tooltipI18nModalCreateKey.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

Once created:

- The translation key will be automatically associated with the text.
- The key will appear in the Localization page under all configured locales.
<img src={require('./img/localizationPageKeyLocale.png').default} style={{borderRadius: '6px'}} />

- Different values can be assigned for the same key depending on the active locale.


### Revoking a Translation Key

If needed, you can remove a translation key association from a text component:
s
<Column.List align="center" justifyContent="between">
    <Column.Item width="45%">
        - Click again on the **i18n** button from the component’s tooltip.

        - In the key field, click the **remove key** ("-") button <img src={require('./img/revokeI18nKeyButton.png').default} style={{borderRadius: '6px'}} /> next to the assigned key.
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/revokeI18nKey.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

This action will unlink the text from the translation key, allowing it to behave as a standard independent literal again.

### Configuring Key Values Per Locale

Translation keys maintain a **single unique identifier** across all locales. However, the **value** associated with the key is locale-specific, allowing developers to configure different translations for each supported language.

To configure key values:

- Navigate to the Localization page.
- Select the desired locale.
- Locate the relevant translation key.
- Edit the literal value for that locale.
- Confirm the changes.

<img src={require('./img/localizationPageKeyLocale2.png').default} style={{borderRadius: '6px'}} />


By switching between locales inside the Studio and previewing the pages, developers can immediately see how each configured translation appears for different languages.

<Column.List align="center" justifyContent="between">
    <Column.Item width="45%">
        <img src={require('./img/studioLocaleValue1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/studioLocaleValue2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


:::info Important Behavior for Key Creation

When creating locales for the first time, **no keys exist initially**.

- The first key must be created while translating elements directly on the page using the i18n buttton.
- Once at least one key has been created through a component (e.g., a text field, button label), the Localization page becomes fully enabled for direct key management.
- After the first key is created, you can create additional translation keys directly from the Localization page, even without selecting elements on the page.

This ensures that key management is progressively unlocked as localization is set up.
:::

### Editing a Locale

To edit an existing locale:

- Navigate to the **Localization** page from the Explorer.
- Locate the locale you want to modify in the list.
- Click on the **Edi** button <img src={require('./img/editLocaleButton.png').default} style={{borderRadius: '6px', width: '35%'}} /> next to the locale name.
- A language selector dropdown will appear.
- Choose a new language to replace the current one.

### Removing a Locale

To completely remove a locale:

- Navigate to the **Localization** page from the Explorer.
- Find the locale you wish to remove.
- Click on the **Delete** button <img src={require('./img/deleteLocaleButton.png').default} style={{borderRadius: '6px', width: '35%'}} /> next to the locale name.

Removing a locale will:

- Delete all translations associated with that locale.
- Automatically update the `UserLanguage.supported` array, removing the deleted language from the runtime switching options.


## Runtime Language Switching

To enable dynamic, user-driven language switching at runtime, the application must be configured to bind to the `UserLanguage` shared Qodly source.

Runtime switching involves the following configuration steps:

<Column.List align="center" justifyContent="between">
    <Column.Item width="45%">
        1. Bind the `UserLanguage.supported` to the listbox qodly source.

        2. Bind the `UserLanguage.selected` to the  *Selected Element** of the listbox.
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/styleboxLanguageSwitching.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

This binding enables users to pick a language dynamically from a dropdown list during runtime.

When the application is rendered:

<Column.List align="center" justifyContent="between">
    <Column.Item width="75%">
        - The select box allows the user to switch between available languages.
    </Column.Item>
    <Column.Item width="20%">
        <img src={require('./img/styleboxLanguageSwitching2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

- Upon selecting a language, the value of `UserLanguage.selected` is updated.

- The application automatically refreshes the displayed text to match the translations configured for the selected locale.

<Column.List align="center" justifyContent="between">
    <Column.Item width="45%">
        <img src={require('./img/localizationResult1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/localizationResult2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::info
If no UserLanguage binding is configured, language switching will not function in preview or renderer modes, even if locales exist.
:::

## Limitations and Considerations

| Condition                             | Behavior                                                   |
|---------------------------------------|---------------------------------------------------------------|
| No UserLanguage configured	        | Language switching at runtime will not function; only design-time preview is possible.|
| Missing translation for key	        | Default literal or primary locale value is used. |
| Unsupported browser language	        | Application defaults to the Primary Locale.    |
| No Primary Locale configured          | System behavior may vary; may revert to first configured locale. |
