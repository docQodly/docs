---
id: formulaFromString
title: formulaFromString
---



<!-- REF #_command_.formula from string.Syntax -->**formulaFromString**( *formulaString* : string ) : 4D.Function<!-- END REF -->


<!-- REF #_command_.formula from string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formulaString|string|->|string formula to be returned as object|
|Result|4D.Function|<-|Native object encapsulating the formula|
<!-- END REF -->


#### Description

The `formula from string` command <!-- REF #_command_.formula from string.Summary -->creates a `4D.Function` object based upon *formulaString*<!-- END REF -->. The *formulaString* [expression](basics/lang-expressions.md) can be as simple as a single value or complex, such as a project method with parameters.

This command is similar to [`formula`](#formula), except that it handles a text-based formula. In most cases, it is recommended to use the `formula` command. `formulaFromString` should only be used when the original formula was expressed as text (e.g., stored externally in a JSON file). 

:::note

This command does not support the use of variables in *formulaString*. An attempt to access a variable with `formulaFromString` will result in an error (-10737).

:::

