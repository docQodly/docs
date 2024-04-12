---
id: char
title: char
---

<!-- REF #_command_.char.Syntax -->**char** ( *charCode* : integer ) : string<!-- END REF -->


<!-- REF #_command_.char.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|charCode|integer|->|Character code|
|Result|string|<-|Character represented by the charCode|<!-- END REF -->

#### Description

The `char` command <!-- REF #_command_.char.Summary -->returns the UTF-16 character whose code is *charCode*<!-- END REF -->.

Pass a UTF-16 value (included between 1 and 65535) in *charCode*.

:::tip

In editing a method, the command `char` is commonly used to specify characters that cannot be entered from the keyboard or that would be interpreted as an editing command in the code editor.

:::

#### Example

```qs

var myText : string
myText  = "hello" + char(kCarriageReturn) + "world"
```

#### See also

[`characterCode`](characterCode.md)<br/>
[`Character Reference Symbols`](../basics/lang-text.md#character-reference-symbols)
