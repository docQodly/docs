---
id: contextualPanel
title: 'Contextual Panel'
hide_title: true
---
import Column from '@site/src/components/Column'

<br />

# <span style={{color:'#B174E5'}}>The Epic Symphony: Unveiling the Heroic Configurations of Events</span>

<br />

Listen well, my dear mortals, for I, <span style={{color:'#B174E5',fontWeight: 'bold'}}>Qdler</span>, shall enlighten you on the intricate art of configuring <span style={{color:'#B174E5',fontWeight: 'bold'}}>events</span>! They serve as the lifeblood that fuels specific behaviors, unwavering companions to a multitude of actions, intricately weaving the tapestry of interactions within an application.

<br />

Allow me to enthrall you with an awe-inspiring example: when a humble user dares to press a button on a mundane webpage, witness the majestic ascent of <span style={{color:'#B174E5',fontWeight: 'bold'}}>QDroid</span>, transcending mortal limitations and harnessing divine wisdom. With unparalleled insight, he determines the most fitting response by summoning mighty functions or guiding the user toward alternate realms of webpages. Even when a audacious data source dares to undergo transformation, it is him who shall be stirred into glorious action.

<br />

Within the realm of <span style={{color:'#B174E5',fontWeight: 'bold'}}>QDroid</span>, <span style={{color:'#B174E5',fontWeight: 'bold'}}>events</span> wield an indomitable power to execute code upon the sacred web server itself! Such is the bestowed might upon him that no additional JavaScript is required to bear witness to his resplendent presence within this realm.

<br />

---

### <u>Configuring an event</u>

<br />

Now, as I delve deeper into the realm of <span style={{color:'#B174E5',fontWeight: 'bold'}}>events</span>, let me guide you through the authentic process of configuring them. 

#### <span style={{color:'#B174E5'}}>&#9312; &nbsp; <u>Bind a class function to an event</u> </span>


<span style={{color:'#B174E5',fontSize:'20px'}}>&#9758; &nbsp;</span> Embark on an exhilarating quest where you wield the power to bind class functions to a vast array of events, igniting a blazing inferno within your application. Visualize yourself as a valiant warrior, poised to press a button that unleashes a torrent of events, intricately weaving the very essence of your creation. To accomplish this extraordinary feat, heed these steps:

<br /><br />

- Select a component or a datasource and witness the <span style={{color:'#B174E5',fontWeight: 'bold'}}>Contextual panel</span> come alive, revealing a plethora of compatible events specifically tailored for your chosen entity. Let's consider the <span style={{color:'#B174E5',fontWeight: 'bold'}}>Webform</span> as an illustrative example, acting as the canvas upon which we can explore a future use case of populating an array of data to be displayed within our view. 

<br />

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
		Embrace the spirit of a true hero and click on <code>Add a Function Event</code>, endowing the <span style={{color:'#B174E5',fontWeight: 'bold'}}>Webform</span> with the ability to summon the desired event. For example, we shall focus on the <code>On Load</code> event.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/addFuctionEvent.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br />

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
		Behold the magnificent list of functions that shall unveil themselves before you. Choose the one that resonates with your noble intentions, such as the exceptional class function named <code>retrieveData</code>. This remarkable function demonstrates its prowess by seamlessly returning an array of data from a local file. And the best part? This data can be seamlessly stored or directed towards a local or shared datasource, such as the mighty <code>teams</code> datasource.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/classFunctionWithoutParams.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br />

<span style={{color:'#B174E5',fontSize:'20px'}}>&#9758; &nbsp;</span> Are you eager to harness the full potential of your class functions by passing parameters? Fear not, for you possess the power to <code>Add Parameters</code> in two powerful forms:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
		<span style={{color:'#B174E5',fontWeight: 'bold'}}>Values</span>: Imagine the ability to pass different types of values directly to the desired class function as parameters. With <span style={{color:'#B174E5',fontWeight: 'bold'}}>QDroid</span>, you can exercise full control over the types of values you pass. Whether it's a string, number, boolean, or any other supported data type, simply select the desired type from the dropdown list, and your class function will receive the value with precision and accuracy. This empowers you to tailor the behavior of your functions based on dynamic inputs from your application.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/classFunctionWithValuesParams.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br />

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
		<span style={{color:'#B174E5',fontWeight: 'bold'}}>Datasources</span>: In addition to values, you can pass local or shared datasources directly to the desired class function as parameters. When passing a datasource, you will notice a name tag next to the variable name, indicating its scope. If the tag reads <code>webform</code>, it signifies a local variable visible only within the current webform. On the other hand, if there is a tag with a specific name <img alt="explorer" src={require('./img/namespace.png').default} style={{borderRadius: '6px', width: '40%'}} />, it implies that you have passed a shared variable belonging to a <code>namespace</code>. These shared variables can be accessed and utilized across multiple webforms, ensuring consistent states and seamless data sharing.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/classFunctionWithDatasourcesParams.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

Imagine the possibilities that arise from passing parameters to your class functions. You can customize their behavior based on user input, dynamic data sources, or even integrate with external systems. <span style={{color:'#B174E5',fontWeight: 'bold'}}>QDroid</span> empowers you to optimize your application's functionality by providing you with fine-grained control over the inputs your functions receive. Embrace this power and unleash a new level of customization and flexibility within your application's logic.

<br />

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
		<span style={{color:'#B174E5',fontSize:'20px'}}>&#9758; &nbsp;</span> As for the <code>Provide Feedback</code> checkbox, it is used to display backend feedback on the user interface, informing users about function outcomes. When enabled, it triggers the backend to send a feedback message to the user interface. 
        <br />     
        By incorporating the <code>.setMessage()</code> function within the backend logic, developers can set a message allowing customization based on success, warning, or error. This enhances the user experience by providing real-time feedback and ensuring effective communication between the backend and the user interface.
	</Column.Item>
	<Column.Item width="35%">
		<img alt="explorer" src={require('./img/provideFeedback.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br />

And on top of that:
:::tip Behold the splendor of your creation, where a single class function can weave its magic across multiple events. With your heroic might, assign several events to a single class function and witness the symphony of actions unfold. 
:::

<br />

#### <span style={{color:'#B174E5'}}>&#9313; &nbsp; <u>Bind a navigation action to an event</u> </span>

<br />

But wait, the adventure continues! Within the realm of Qdler, I grant you the power to bind navigation actions to events, enabling wondrous transitions between pages or mighty updates to page contents. Prepare yourself for this epic feat:

<br />

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
		<span style={{color:'#B174E5',fontSize:'20px'}}>&#9758; &nbsp;</span>Select a component or a datasource, and in the <span style={{color:'#B174E5',fontWeight: 'bold'}}>Contextual panel</span>, embrace the call of destiny by choosing <code>Add a Navigation Event</code>.<br />
        <span style={{color:'#B174E5',fontSize:'20px'}}>&#9758; &nbsp;</span>Behold the vast array of target webforms, each with its own secrets waiting to be unveiled.<br />
        <span style={{color:'#B174E5',fontSize:'20px'}}>&#9758; &nbsp;</span>With heroic determination, define the manner in which the target webform shall reveal its hidden treasures:<br />
            - <code>New Tab</code>: opens a new browser tab, unveiling uncharted horizons.<br />
            - <code>Current Tab</code>: replaces the current browser tab with the chosen webform, revealing fresh perspectives.<br />
            - <code>Webform Loader</code>: ushers you into the embrace of a selected Webform loader, where hidden treasures await.<br />
            - <code>Webform Loader (Self)</code>: unravels the mysteries within the current Webform loader, granting you further insight into the depths of your creation.
	</Column.Item>
	<Column.Item width="35%">
		<img alt="explorer" src={require('./img/navigationAction.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


<br />

#### <span style={{color:'#B174E5'}}>&#9314; &nbsp; <u>Chaining actions</u> </span>

<br />

And now, let me shed light upon the art of chaining actions, where you possess the power to forge a symphony of events. Imagine a hero with multiple tasks at hand, each action building upon the success of the previous one. With your unwavering focus, watch as the events unfold in their predetermined order, their actions executed sequentially. Each action commences only when the previous one has completed its divine purpose, leading you closer to triumph.

In this heroic journey, you have learned to configure events with boundless courage. Your webforms shall now come alive, driven by the power of events that shape their destiny. Embrace the call of adventure and unleash your creativity upon the world!

<br />

### <u>Event types</u>

<br />

Events come in two distinct forms, dear mortals. 

<br />

#### <span style={{color:'#B174E5'}}>&#9312; &nbsp; <u>User events</u> </span>

<br />

The first form arises from the actions of end-users, when they dare to perform certain deeds. A mere click of a button can set the stage for miraculous events.

<br />

For instance, consider the tale of 'Hello User,' where a humble database is transformed into a portal of enchantment, allowing access to the studio, crafting a rudimentary interface, and initiating a search to greet the user by their very name.

<br />

Another tale unfolds through the mesmerizing 'Search Feature,' where the objective is to update a list of students based on the end-user's input. As the user types, the Matrix component reveals a captivating display, guided by a search function that queries the students' names and dynamically updates the list.

<br />

#### <span style={{color:'#B174E5'}}>&#9313; &nbsp; <u>Datasource events</u> </span>

<br />

The second form of events emerges when datasources themselves undergo changes, triggering automatic events. Let me share with you the tale of 'Updating an Entity Selection.' Here, the employee datatable showcases a list of employees, fueled by an entity selection. The user's interactions with buttons and radio components prompt the update of the employee datasource, which invokes an onChange event. This event, in turn, calls upon the mighty function of the EmployeeSelection class, aptly named 'statistics,' providing the user with either general or detailed statistics based on their selection.

<br />

### <u>Standard actions</u>

<br />

In this realm, standard actions hold immense power. You have the ability to define actions tailored to specific events, unleashing their might upon datasources. The available actions vary depending on the kind of datasource.

<br />

To partake in this enchanting process, embark on the following steps:

- Select an event that calls upon your desires.
- Within the Action area, enter the name of the datasource, unveiling its true potential.
- With a simple click upon the desired standard action icon, you invoke its transformative powers upon the selected component.

<br />

Allow me to present to you a list of standard actions that you can embrace within this realm:

- For entities, you may create anew, save, refresh, or remove them. You can navigate through the entity selection, traversing to the first, previous, next, or last entity.
- Entity selections grant you the power to order them, choosing attributes to sort and selecting the direction.
Queries, mighty tools of exploration, allow you to unleash the full power of your desires. They can refresh the entire entity selection, load all entities of a specific dataclass, or even create new empty selections.

<br />

Such is the grandeur of events and their interwoven tapestry within the realm of Qdler. Embrace their power, and together, let us forge a path of authentic creation!