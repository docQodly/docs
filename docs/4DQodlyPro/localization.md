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


## Localization Setup

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


### Setting the Primary Locale

One of the locales must be set as the **Primary Locale**, which acts as the default language whenever no user preference or browser match is available.

<img src={require('./img/primaryLocale.png').default} style={{borderRadius: '6px'}} />

Setting a Primary Locale ensures consistent fallback behavior across user sessions and browsers.


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


## Translating Content

A **literal** is any visible text in the application interface (e.g., labels, button texts, titles). By default, each literal exists independently for each locale page. 

### Manual Translation 

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
    <img src={require('./img/localizationPageKeyLocale.png').default} style={{borderRadius: '6px'}} />

    :::warning
    The key will not appear under all locales because it was assigned to the component while a specific locale was selected. To assign a key across all locales, make sure you're in the base state (without any locale selected) before adding the key. See the [Translation Key Scenarios section](#translation-key-scenarios) for more details.
    :::

- Different values can be assigned for the same key depending on the active locale.

### Translation Key Scenarios

Here’s a breakdown of the different ways you can localize content:

1. **Assign a Key to All Locales**: Make sure no locale is selected (you're in the base state).
    - Click the purple i18n button.
    - This will create and assign a translation key that appears across all supported locales.
    - Use this when you want the label to stay consistent across all languages unless explicitly overridden.

2. **Assign a Key to a Specific Locale**: First, select a locale using the locale switcher.
    - Then click the purple i18n button.
    - The translation key will be assigned only to the selected locale.
    - Useful when the text content or meaning varies significantly between languages and shouldn't be reused globally.

3. **Manually Edit the Label per Locale**: Instead of using keys, you can manually update the Label field for each locale.
    - Select a locale and directly type the desired label.
    - This is quick and flexible but may become harder to manage at scale.
    - Use the approach that best matches the complexity and reuse patterns of your UI labels.


### Removing a Key from a Literal

If needed, you can remove a translation key association from a text component:

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

:::warning
Removing a key from a literal in a specific locale will only affect that locale. The key remains available and associated in other locales where it has already been used.
:::

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

### Add i18n for Other Specific Components

For components other than the Text component, adding i18n translation keys is done directly through the Properties panel in Qodly Studio.

For example, to localize the label of a Button component:

1. Select the component in your page.
2. Go to the Properties tab in the right-hand panel.
3. Locate the Label/Title field.
4. You have three options:
    - Assign a key to all locales: Click the purple i18n button next to the label field without selecting a locale. This adds the key for all supported locales.
    - Assign a key to a specific locale: First select the target locale from the locale switcher, then click the i18n button. This will assign the key only for that selected locale.
    - Manually edit label value: You can also manually change the value of the label per locale without using a translation key.


## Managing Locales

### Editing a Locale

To edit an existing locale:

- Navigate to the **Localization** page from the Explorer.
- Locate the locale you want to modify in the list.
- Click on the **Edit** button <img src={require('./img/editLocaleButton.png').default} style={{borderRadius: '6px', width: '35%'}} /> next to the locale name.
- A language selector dropdown will appear.
- Choose a new language to replace the current one.

### Removing a Locale

To completely remove a locale:

- Navigate to the **Localization** page from the Explorer.
- Find the locale you wish to remove.
- Click on the **Delete** button <img src={require('./img/deleteLocaleButton.png').default} style={{borderRadius: '6px', width: '35%'}} /> next to the locale name.

Removing a locale will:

- Delete all translation keys associated with that locale.
- Automatically update the `UserLanguage.supported` array, removing the deleted language from the runtime switching options.


## Managing Keys

### Editing a Translation Key

To edit the value of a translation key for a specific locale:

1. Go to the Localization page in Qodly Studio.
2. Select the desired locale.
3. Locate the key you wish to update from the list.
4. Click the edit icon or directly click into the value field.
5. Modify the value and click the ✔ button to confirm your changes or ✖ to cancel.

<img src={require('./img/editKey.png').default} style={{borderRadius: '6px'}} /> 

### Deleting a Translation Key

To delete a translation key entirely from the Localization page:

1. Open the Localization page.
2. Navigate to the locale where the key is visible.
3. Locate the key in the list and click the delete icon.

<img src={require('./img/deleteKey.png').default} style={{borderRadius: '6px'}} /> 

Deleting a key will:

- Remove the key itself.
- Remove all translations associated with it across all locales.
- Unlink any components or literals that were referencing the deleted key.

Use this option only when the key is no longer needed in the application.


## Runtime Language Switching

To enable dynamic, user-driven language switching at runtime, the application must be configured to bind to the [UserLanguage shared Qodly source](./pageLoaders/qodlySources.md#qodlysource-userlanguage).

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

## Localization Feature Behavior

Localization in Qodly follows a **layered priority model** to determine which language is displayed to the end user at any given moment.

The priority order for language resolution is:

1. **User-selected language**:  If the user manually selects a language during their session (for example, using a language switcher dropdown), the application will immediately display the selected language and store it in the session.

2. **Session-stored language**:  On subsequent visits, if a session language has been previously stored, the application will automatically reuse this stored language preference without requiring user interaction.

3. **Browser language detection**:  If no session language is set (e.g., on a user's very first login), the application will attempt to detect the user's browser language.  
   - If the browser language matches one of the supported locales configured in the Localization page, it will be used automatically.

4. **Primary locale fallback**:  If neither a session language nor a matching browser language is available, the application will fall back to displaying the **Primary locale** defined in the Localization settings.

:::info Behavior for Missing Translations

If a literal does not have a translation value for the active locale, the original text value (literal) will be displayed as-is.

This ensures that the application remains functional even if translations are incomplete.

:::

## Exporting and Importing Translations

Qodly makes it easy to manage translations externally by allowing you to **export** and **import** translation files. You can export your application's literals to a CSV or JSON file, translate them externally, and then re-import them back into your application.

### Export First, then Import

Before you can import translations into Qodly, you must first export your application's literals. This ensures that the file structure matches the expected internal format.

You cannot create a valid translation file from scratch or use a file exported from another app. The import process requires a file that was originally exported from your own Qodly app.

Once exported, you can edit the file using a spreadsheet editor (for CSV) or a code/text editor (for JSON), then re-import it into your app.

### Exporting Literals

The **Export** button is initially disabled <img src={require('./img/exportLitralsButton.png').default} style={{borderRadius: '6px', width:'3%'}} />  by default.  

To enable the Export button:

1. You must select at least one locale from the Localization panel.

2. You can either:

    - Manually check the box for one or more locales. <img src={require('./img/exportLitralsCheckbox.png').default} style={{borderRadius: '6px', width:'40%'}} />

    - Or check the **Select All** checkbox <img src={require('./img/exportLitralsCheckboxAll.png').default} style={{borderRadius: '6px', width:'40%'}} /> to select all available locales at once.


    Once at least one locale is selected, the **Export** button becomes active <img src={require('./img/exportLitralsButton2.png').default} style={{borderRadius: '6px', width:'3%'}} />.

3. Click **Export** to open the export configuration modal.

    <Column.List align="center" justifyContent="between">
        <Column.Item width="45%">
            Inside the Export modal:
                - Select your preferred export format:  
                    - **CSV**: Suitable for spreadsheet editing or basic translation workflows.  
                    - **JSON**: Suitable for structured editing and external system integration.
                - After selecting the format, click **Export**.  
        </Column.Item>
        <Column.Item width="45%">
            <img src={require('./img/exportLitralsModal.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

A file will be generated and downloaded in the chosen format containing all literals for the selected locales.

### Importing Literals

To import translated literals:
    - Click the **Import** button <img src={require('./img/importLitralsButton.png').default} style={{borderRadius: '6px', width:'3%'}} /> located next to the Export options.
    <Column.List align="center" justifyContent="between">
        <Column.Item width="45%">
            - A file selector will open.

            - Upload a valid `.csv` or `.json` file matching the export format.
            
            - Once a file is selected, click **Import** to update your application's literals.
        </Column.Item>
        <Column.Item width="45%">
            <img src={require('./img/importLitralsModal.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

### Supported File Formats

Qodly supports two export/import formats: JSON and CSV. Each format has its own structure and is suitable for different use cases.

#### JSON Format

The JSON format is structured for developers and tools that prefer a nested, key-based structure.

| Field | Description |
|-------|-------------|
| `webforms.i18n` | Maps component IDs to their translation data. Each ID represents a UI element. |
| `resolverName` | The type of component (e.g., Label, Text, SelectBox). |
| `props` | An array of translated properties, each with: `__dataPath`, `__default`, and one or more language translations. |
| `i18n` | Contains all custom translation keys created by the developer. Each key includes a `default` value and language-specific values. |

**Example:**
```json
{
  "webforms": {
    "i18n": {
      "1DVbAUpEoU": {
        "resolverName": "Label",
        "props": [
          {
            "__dataPath": "text",
            "__default": "Label",
            "en": "Label",
            "es": "Label"
          }
        ]
      },
      ...
    }
  },
  "i18n": {
    "marketingText_Key": {
      "default": "marketing Style Text",
      "en": "Qodly Studio is a modern, low-code development environment...",
      "fr": "Qodly Studio est un environnement de développement..."
    }
  }
}
```

#### CSV Format

The CSV format is ideal for translation teams working in spreadsheet editors.

| Column | Description |
|--------|-------------|
| `keys` | Path to the literal or translation key. E.g., `webforms.i18n.Z7Gc1JzZ16.doc` or `i18n.marketingText_Key.en`. |
| `resolverName` | Type of the UI component (`Label`, `Text`, etc.). |
| `__t` | The default fallback value shown when a translation is missing. |
| `en`, `es`, `fr`, etc. | Columns for each language code, containing the translated values. |
| `key_default` | The value tied to a custom translation key when applicable. |

**Example:**
```
keys,resolverName,__t,en,es,key_default,zh,ja,it,de,fr
webforms.i18n.1DVbAUpEoU.text,Label,"Label","Label","Label"
i18n.marketingText_Key.en,,,,,Qodly Studio is a modern, low-code development environment...
```
