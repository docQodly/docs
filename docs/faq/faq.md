---
id: faq
title: FAQ
---

## Qodly Studio

<details>
<summary style= {{ fontWeight: "bold", marginBottom: "20px" }}> Do I need specific expertise in HTML, CSS, or JavaScript to use Qodly Studio?</summary>
No, Qodly Studio offers an experience of intuitive and visual web development that does not require any expertise of web technologies.
</details>

<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}> Is Qodly Studio supported on all Web browsers?</summary>
See the requirements list [here](../studio/overview.md#requirements).
</details>


<details>
<summary style= {{ fontWeight: "bold", marginBottom: "20px" }}> Why is the Base State Visible Before the Correct State?</summary>

The Base state becomes momentarily visible because the actual correct state is applied only after the [page has initially rendered](../studio/rendering#pagerenderer-lifecycle). This occurs due to the timing of when qodly sources and conditions are processed. Initially, the page loads and displays the Base state by default. As qodly sources are fetched and conditions evaluated, the appropriate state for the user is determined and applied, causing the transition from the Base state to the correct state.

To resolve this, the `onInit` event should be used to ensure that all necessary qodly sources and conditions are set up before the page is rendered. This approach prevents the Base state from being displayed and ensures the page renders directly into the correct state based on the user's role and conditions.

</details>



<details>
<summary style= {{ fontWeight: "bold", marginBottom: "20px" }}> Why are privileges lost after a page refresh in Qodly?</summary>

The issue may be due to different URL schemes (HTTP vs. HTTPS) being used by the WebAdmin and the 4D web server, leading to incorrect session management.

Explanation:

- **URL Schemes**: Qodly Studio's URL scheme configuration (HTTP and HTTPS) determines how many licenses are retained when rendering Qodly forms.

- **WebAdmin Web Server**: Provides secured web access to Qodly Studio, typically running on HTTPS.

- **4D Web Server**: Communicates with the Qodly renderer using REST requests and may run on HTTP or HTTPS.

If the two servers (WebAdmin and 4D web server) do not use the same scheme, it might lead to incorrect license counting and session issues, such as losing privileges after a page refresh.

</details>


## Qodly Cloud  

<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}> Why is there only a sandbox category?</summary>
Other categories (applications and shared applications) will be open after the Beta phase.
</details>


<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}> Where are stored my data?</summary>
Your data are stored on AWS (Amazon Cloud).
</details>



## Qodly Server

<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}> Can I install a local instance of Qodly Server?</summary>
No, Qodly Server is only proposed a a cloud service.
</details>


## Qodly Script

<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}> What's the difference between cs and ds?</summary>

  `cs` is the Class Store object, containing all classes of the current project:
    - user classes (e.g. `cs.MyUserClass`)
    - datastore classes (e.g. `cs.People`, `cs.PeopleEntity`, etc.).

  It is used for:
    - **declaration** of both user class and datastore class object variables
    - **instantiation** of user class objects.

  `ds` is a shortcut to the main DataStore object, providing access to the [ORDA model and data object](../orda/data-model.md) instances. It is a kind of singleton, used for **instantiation** of datastore objects.
  Datastore objects are instantiated and managed by ORDA and cannot be handled through the `cs` Class Store.

  ```qs
  //declare an object variable of class cs.myClass
  var myInstance : cs.myClass
  //declare two datastore object variables of class cs.PeopleEntity
  var myEntity,myNewEntity : cs.PeopleEntity

  //create a new instance of myClass class and put it in the variable
  myInstance = cs.myClass.new()
  //create a new instance of People dataclass (i.e. a blank entity) and put it in the variable
  myNewEntity = ds.People.new()
  //put an instance of People dataclass (i.e. an entity) in the variable
  myEntity = ds.People.get(167)
  ```
</details>


## Custom Components

<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}> Why did my custom component fail to upload? </summary>
  
If you encounter an error while importing a custom component, follow these steps to troubleshoot the issue:

1. **Clearing Browser Cache**

    Sometimes, even after a successful import, the component may not appear in the list. In such cases:

    - **Clear Your Browser Cache:** Clear your browser cache and refresh the page.

    - **Re-Test the Import:** Try importing the component again.

2. **Check Zip File Structure**

    Ensure that your zip file has the correct structure:

    - **Top-Level `manifest.json` File:** The zip file should include a `manifest.json` at the top level.

    - **Valid `manifest.json` Content:** The `manifest.json` file should contain valid content with correct paths.

    - **No Source Folder:** Ensure the zip file is not a downloaded repository source (e.g., containing a folder named `zip` at the top level). It should be a properly built component from the Releases section.

</details>


<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}> What does the failed upload error message mean? </summary>
  
If the upload fails, you might see the following error message:


```
The upload of the custom component failed. 
Make sure you are importing a properly built custom component for Qodly. 
```


This message indicates that the system was unable to process the zip file you provided. Ensure the zip file is structured correctly and contains all necessary files as per the guidelines.

</details>


<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}> Common mistakes to avoid while developing custom components </summary>
  
Avoid these common mistakes to ensure a smooth import process:

- **Manual Addition of `manifest.json`:** Adding a `manifest.json` manually without valid content can cause errors.

- **Incorrect Paths in `manifest.json`:** Ensure all paths specified in the `manifest.json` are correct and point to valid files within the zip.

</details>


## MISC

<details>
<summary style= {{ fontWeight: "bold" , marginBottom: "20px" }}> Can I use Qodly to build public web sites? </summary>
Qodly is rather designed to build business applications with a web interface. All users need to be logged.
</details>
