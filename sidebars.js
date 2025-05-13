/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// Qodly Cloud
	GetStarted_Q: [
		{
			type: 'doc',
			id: 'QodlyinCloud/get-started/quickstart'
		},
		{
			type: 'category',
			label: 'Qodly Overview',
			items: ['QodlyinCloud/get-started/first-app',
				'QodlyinCloud/get-started/test-debug',
				'QodlyinCloud/get-started/deployment',
				'QodlyinCloud/get-started/access',
				'QodlyinCloud/get-started/data-management',
				'QodlyinCloud/get-started/support',
				'QodlyinCloud/get-started/updates',
				'QodlyinCloud/get-started/community',
				'QodlyinCloud/get-started/subscriptions',
				'QodlyinCloud/get-started/payments',
				'QodlyinCloud/get-started/refunds',
			],
		},
		{
			type: 'category',
			label: 'Release Notes',
			collapsed: false,
			items: [
						'QodlyinCloud/notes/1.2.0',
						'QodlyinCloud/notes/1.1.0',
						'QodlyinCloud/notes/1.0.0',
						'QodlyinCloud/notes/1.0.0-beta.6',
						'QodlyinCloud/notes/1.0.0-beta.5',
						'QodlyinCloud/notes/1.0.0-beta.4',
						'QodlyinCloud/notes/1.0.0-beta.3',
						'QodlyinCloud/notes/1.0.0-beta.2',
						'QodlyinCloud/notes/1.0.0-beta.1',
						'QodlyinCloud/notes/1.0.0-beta.0'
					],
		},
	],
	Develop_Q: [
		{
			type: 'category',
			label: 'Roles And Privileges',
			items: [
				'QodlyinCloud/studio/roles/example-of-configuration',
				{
					type: 'category',
					label: 'Permissions',
					items: [
						'QodlyinCloud/studio/roles/modelEditorApproach'
					]
				}
			],
		},
		{
			type: 'category',
			label: 'Model',
			items: ['QodlyinCloud/studio/model/model-editor-interface',
				'QodlyinCloud/studio/model/datastore-classes',
				'QodlyinCloud/studio/model/attributes',
				'QodlyinCloud/studio/model/functions',
				'QodlyinCloud/studio/model/import',
			],
		},
		{
			type: 'doc',
			id: 'QodlyinCloud/data-explorer/data-explorer',
			label: "Data Explorer"
		},
		{
			type: 'category',
			label: 'QodlyScript Reference',
			link: {
				type: 'generated-index',
				title: 'QodlyScript',
				description: 'QodlyScript Reference Guide',
				slug: '/category/qodlyscript',
				keywords: ['qodlyscript', 'language'],
				image: '/img/docusaurus.png',
			},
			items: [
				'QodlyinCloud/language/basics/lang-quicktour',
				{
					type: 'category',
					label: 'Basics',
					collapsible: true,
					collapsed: true,
					link: {
						type: 'generated-index',
						title: 'Basics',
						description: 'Main concepts of the QodlyScript Language.',
						slug: '/category/language-basics',
						keywords: ['language'],
						image: '/img/docusaurus.png',
					},
					items: [
						'QodlyinCloud/language/basics/lang-variables',
						{
							type: 'category',
							label: 'Data Types',
							collapsible: true,
							collapsed: true,
							link: {
								type: 'doc',
								id: 'QodlyinCloud/language/basics/lang-data-types',
							},
							items: [
								'QodlyinCloud/language/basics/lang-blob',
								'QodlyinCloud/language/basics/lang-boolean',
								'QodlyinCloud/language/basics/lang-collection',
								'QodlyinCloud/language/basics/lang-date',
								'QodlyinCloud/language/basics/lang-null-undefined',
								'QodlyinCloud/language/basics/lang-number',
								'QodlyinCloud/language/basics/lang-object',
								'QodlyinCloud/language/basics/lang-picture',
								'QodlyinCloud/language/basics/lang-time',
								'QodlyinCloud/language/basics/lang-text',
								'QodlyinCloud/language/basics/lang-variant',
							],
						},
						'QodlyinCloud/language/basics/lang-operators',
						'QodlyinCloud/language/basics/lang-methods',
						'QodlyinCloud/language/basics/lang-classes',
						'QodlyinCloud/language/basics/lang-parameters',
						'QodlyinCloud/language/basics/lang-expressions',
						'QodlyinCloud/language/basics/lang-shared',
						'QodlyinCloud/language/basics/lang-control-flow',
						'QodlyinCloud/language/basics/lang-errors',
						'QodlyinCloud/language/basics/lang-identifiers',
						'QodlyinCloud/language/basics/lang-pathnames',
					],
				},
				{
					type: 'category',
					label: 'Commands',
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: 'QodlyinCloud/language/commands/command-list',
					},
					items: [
						'QodlyinCloud/language/commands/abort',
						'QodlyinCloud/language/commands/abortProcessByID',
						'QodlyinCloud/language/commands/abs',
						'QodlyinCloud/language/commands/addToDate',
						'QodlyinCloud/language/commands/arctan',
						'QodlyinCloud/language/commands/assert',
						'QodlyinCloud/language/commands/asserted',
						'QodlyinCloud/language/commands/base64Decode',
						'QodlyinCloud/language/commands/base64Encode',
						'QodlyinCloud/language/commands/blobToPicture',
						'QodlyinCloud/language/commands/bool',
						'QodlyinCloud/language/commands/callChain',
						'QodlyinCloud/language/commands/callWorker',
						'QodlyinCloud/language/commands/changeString',
						'QodlyinCloud/language/commands/char',
						'QodlyinCloud/language/commands/characterCode',
						'QodlyinCloud/language/commands/clearSemaphore',
						'QodlyinCloud/language/commands/compareStrings',
						'QodlyinCloud/language/commands/convertFromString',
						'QodlyinCloud/language/commands/convertPicture',
						'QodlyinCloud/language/commands/convertToString',
						'QodlyinCloud/language/commands/cos',
						'QodlyinCloud/language/commands/createThumbnail',
						'QodlyinCloud/language/commands/currentDate',
						'QodlyinCloud/language/commands/currentMethodName',
						'QodlyinCloud/language/commands/currentProcess',
						'QodlyinCloud/language/commands/currentProcessName',
						'QodlyinCloud/language/commands/currentTime',
						'QodlyinCloud/language/commands/date',
						'QodlyinCloud/language/commands/dayNumber',
						'QodlyinCloud/language/commands/dayOf',
						'QodlyinCloud/language/commands/dec',
						'QodlyinCloud/language/commands/delayProcess',
						'QodlyinCloud/language/commands/deleteString',
						'QodlyinCloud/language/commands/ds',
						'QodlyinCloud/language/commands/exp',
						'QodlyinCloud/language/commands/false',
						'QodlyinCloud/language/commands/file',
						'QodlyinCloud/language/commands/folder',
						'QodlyinCloud/language/commands/formula',
						'QodlyinCloud/language/commands/formulaFromString',
						'QodlyinCloud/language/commands/generateDigest',
						'QodlyinCloud/language/commands/generatePasswordHash',
						'QodlyinCloud/language/commands/generateUUID',
						'QodlyinCloud/language/commands/getAssertEnabled',
						'QodlyinCloud/language/commands/getPictureFileName',
						'QodlyinCloud/language/commands/getPictureMetadata',
						'QodlyinCloud/language/commands/getProcessActivity',
						'QodlyinCloud/language/commands/highestProcessNumber',
						'QodlyinCloud/language/commands/insertString',
						'QodlyinCloud/language/commands/instanceOf',
						'QodlyinCloud/language/commands/int',
						'QodlyinCloud/language/commands/jsonParse',
						'QodlyinCloud/language/commands/jsonResolvePointers',
						'QodlyinCloud/language/commands/jsonStringify',
						'QodlyinCloud/language/commands/jsonValidate',
						'QodlyinCloud/language/commands/killWorker',
						'QodlyinCloud/language/commands/lastErrors',
						'QodlyinCloud/language/commands/length',
						'QodlyinCloud/language/commands/log',
						'QodlyinCloud/language/commands/logEvent',
						'QodlyinCloud/language/commands/lowercase',
						'QodlyinCloud/language/commands/mailConvertFromMIME',
						'QodlyinCloud/language/commands/mailConvertToMIME',
						'QodlyinCloud/language/commands/matchRegex',
						'QodlyinCloud/language/commands/methodCalledOnError',
						'QodlyinCloud/language/commands/milliseconds',
						'QodlyinCloud/language/commands/mod',
						'QodlyinCloud/language/commands/monthOf',
						'QodlyinCloud/language/commands/newCollection',
						'QodlyinCloud/language/commands/newObject',
						'QodlyinCloud/language/commands/newSharedCollection',
						'QodlyinCloud/language/commands/newSharedObject',
						'QodlyinCloud/language/commands/newSignal',
						'QodlyinCloud/language/commands/not',
						'QodlyinCloud/language/commands/num',
						'QodlyinCloud/language/commands/objectClass',
						'QodlyinCloud/language/commands/objectCopy',
						'QodlyinCloud/language/commands/objectEntries',
						'QodlyinCloud/language/commands/objectIsDefined',
						'QodlyinCloud/language/commands/objectIsEmpty',
						'QodlyinCloud/language/commands/objectIsShared',
						'QodlyinCloud/language/commands/objectKeys',
						'QodlyinCloud/language/commands/objectRemove',
						'QodlyinCloud/language/commands/objectValues',
						'QodlyinCloud/language/commands/onErrCall',
						'QodlyinCloud/language/commands/openDatastore',
						'QodlyinCloud/language/commands/pictureProperties',
						'QodlyinCloud/language/commands/pictureSize',
						'QodlyinCloud/language/commands/pictureToBlob',
						'QodlyinCloud/language/commands/position',
						'QodlyinCloud/language/commands/processInfo',
						'QodlyinCloud/language/commands/processNumber',
						'QodlyinCloud/language/commands/processState',
						'QodlyinCloud/language/commands/random',
						'QodlyinCloud/language/commands/replaceString',
						'QodlyinCloud/language/commands/round',
						'QodlyinCloud/language/commands/semaphore',
						'QodlyinCloud/language/commands/session',
						'QodlyinCloud/language/commands/setAssertEnabled',
						'QodlyinCloud/language/commands/setPictureFileName',
						'QodlyinCloud/language/commands/setPictureMetadata',
						'QodlyinCloud/language/commands/setRealComparisonLevel',
						'QodlyinCloud/language/commands/sin',
						'QodlyinCloud/language/commands/splitString',
						'QodlyinCloud/language/commands/squareRoot',
						'QodlyinCloud/language/commands/storage',
						'QodlyinCloud/language/commands/string',
						'QodlyinCloud/language/commands/substring',
						'QodlyinCloud/language/commands/tan',
						'QodlyinCloud/language/commands/testSemaphore',
						'QodlyinCloud/language/commands/throw',
						'QodlyinCloud/language/commands/time',
						'QodlyinCloud/language/commands/timestamp',
						'QodlyinCloud/language/commands/timeString',
						'QodlyinCloud/language/commands/trace',
						'QodlyinCloud/language/commands/true',
						'QodlyinCloud/language/commands/trunc',
						'QodlyinCloud/language/commands/type',
						'QodlyinCloud/language/commands/uppercase',
						'QodlyinCloud/language/commands/valueType',
						'QodlyinCloud/language/commands/verifyPasswordHash',
						'QodlyinCloud/language/commands/webEvent',
						'QodlyinCloud/language/commands/webForm',
						'QodlyinCloud/language/commands/yearOf',
						'QodlyinCloud/language/commands/zipCreateArchive',
						'QodlyinCloud/language/commands/zipReadArchive',

					],
				},
				{
					type: 'category',
					label: 'Classes',
					collapsible: true,
					collapsed: true,
					link: {
						type: 'generated-index',
						title: 'Classes',
						description: 'QodlyScript classes',
						slug: '/category/classes',
						keywords: ['classes'],
						image: '/img/docusaurus.png',
					},
					items: [
						'QodlyinCloud/language/BlobClass',
						'QodlyinCloud/language/ClassClass',
						'QodlyinCloud/language/CollectionClass',
						'QodlyinCloud/language/CryptoKeyClass',
						'QodlyinCloud/language/DataClassClass',
						'QodlyinCloud/language/DataStoreClass',
						'QodlyinCloud/language/EmailObjectClass',
						'QodlyinCloud/language/EndpointsClass',
						'QodlyinCloud/language/EntityClass',
						'QodlyinCloud/language/EntitySelectionClass',
						'QodlyinCloud/language/FileClass',
						'QodlyinCloud/language/FileHandleClass',
						'QodlyinCloud/language/FolderClass',
						'QodlyinCloud/language/FunctionClass',
						'QodlyinCloud/language/HTTPRequestClass',
						'QodlyinCloud/language/IMAPTransporterClass',
						'QodlyinCloud/language/IncomingMessageClass',
						'QodlyinCloud/language/MailAttachmentClass',
						'QodlyinCloud/language/OutgoingMessageClass',
						'QodlyinCloud/language/POP3TransporterClass',
						'QodlyinCloud/language/QodlyEvents',
						'QodlyinCloud/language/SessionClass',
						'QodlyinCloud/language/SignalClass',
    			        'QodlyinCloud/language/SMTPTransporterClass',
						'QodlyinCloud/language/SystemWorkerClass',
						'QodlyinCloud/language/TCPConnectionClass',
						'QodlyinCloud/language/TCPEventClass',
						'QodlyinCloud/language/UsersClass',
						'QodlyinCloud/language/WebFormClass',
						'QodlyinCloud/language/WebFormItemClass',
						'QodlyinCloud/language/ZipArchiveClass',
						'QodlyinCloud/language/ZipFileClass',
						'QodlyinCloud/language/ZipFolderClass',
					],
				},
			],
		},
	],
	Run_Q: [
		'QodlyinCloud/cloud/consoleOverview',
		{
			type: 'category',
			label: 'Applications',
			items: [
				'QodlyinCloud/cloud/sandbox',
				'QodlyinCloud/cloud/myApps',
			],
		},
		{
			type: 'category',
			label: 'Environments',
			items: [
				'QodlyinCloud/cloud/environmentsOverview',
				'QodlyinCloud/cloud/resourceMonitoring',
				'QodlyinCloud/cloud/apiKeys',
				'QodlyinCloud/cloud/dataManagement',
				'QodlyinCloud/cloud/deployManagement',			
			],
		},
		'QodlyinCloud/cloud/billingSubscriptionManagement',
		'QodlyinCloud/cloud/userAccountManagement',
	],
	Integrations_Q: [
		{
			type: 'category',
			label: 'REST API',
			items: [	
				{
					type: 'doc',
					id: 'QodlyinCloud/api/overview',
				},
				{
					type: 'category',
					label: 'Server Information API',
					items: [
						'QodlyinCloud/api/$catalog',
						'QodlyinCloud/api/$info'
					],
				},
				{
					type: 'category',
					label: 'DataClass Operations API',
					items: [
						'QodlyinCloud/api/dataclassEndpoints',
						'QodlyinCloud/api/dataclassManipulation',
						'QodlyinCloud/api/$asArray',
						'QodlyinCloud/api/$atomic$atOnce',
						'QodlyinCloud/api/$attributes',
						'QodlyinCloud/api/$binary',
						'QodlyinCloud/api/$clean',
						'QodlyinCloud/api/$compute',
						'QodlyinCloud/api/$distinct',
						'QodlyinCloud/api/$entityset',
						'QodlyinCloud/api/$expand',
						'QodlyinCloud/api/$filter',
						'QodlyinCloud/api/$format',
						'QodlyinCloud/api/$imageformat',
						'QodlyinCloud/api/$lock',
						'QodlyinCloud/api/$method',
						'QodlyinCloud/api/$orderby',
						'QodlyinCloud/api/$queryplan',
						'QodlyinCloud/api/$querypath',
						'QodlyinCloud/api/$savedfilter',
						'QodlyinCloud/api/$savedorderby',
						'QodlyinCloud/api/$singleton',
						'QodlyinCloud/api/$skip',
						'QodlyinCloud/api/$timeout',
						'QodlyinCloud/api/$top$limit',
						'QodlyinCloud/api/$version',
					],
				},
				{
					type: 'category',
					label: 'Class Functions API',
					items: [
						'QodlyinCloud/api/classFunctionsOverview',
						'QodlyinCloud/api/classFunctionsParameters',
						'QodlyinCloud/api/classfunctionsFunctionCalls'
					],
				},
			],
		},
		'QodlyinCloud/qodlyLookerStudio/qodlyLookerStudioConnector',
		{
			type: 'link',
			label: 'OAuth 2.0',
			href: 'https://github.com/4d/4D-NetKit/tree/20R8#oauth2provider'
		}, 
		{
			type: 'category',
			label: 'Email',
			items: [	
				{
					type: 'link',
					label: "Office365 (Outlook)",
					href: "https://github.com/4d/4D-NetKit/tree/20R8#office365"
				},
				{
					type: 'link',
					label: "Google (Gmail)",
					href: "https://github.com/4d/4D-NetKit/tree/20R8#google"
				},
			]
		 },   
		{
			type: 'category',
			label: 'Custom Components',
			items: [	
				{
					type: 'doc',
					id: 'QodlyinCloud/customComponent/overview',
				},
				{
					type: 'doc',
					id: 'QodlyinCloud/customComponent/setup',
				},
				{
					type: 'doc',
					id: 'QodlyinCloud/customComponent/structure',
				},
				{
					type: "category",
					label: "API Reference",
					items: [
						{
							type: 'category',
							label: '@ws-ui/webform-editor',
							items: [
								'QodlyinCloud/customComponent/api-reference/webform-editor/v0.2.24',
								'QodlyinCloud/customComponent/api-reference/webform-editor/v0.2.16',
							]
						},
					],
				},
			],
		}
	],
	Guides_Q: [
		{
			type: 'category',
			label: 'Programming Guide',
			items: [	'QodlyinCloud/orda/data-model', 
						'QodlyinCloud/orda/data',
						'QodlyinCloud/orda/queries',
						'QodlyinCloud/language/guides/sessions',
						'QodlyinCloud/language/guides/login',
			],
		}
	],
	// Qodly 4D Pro
	Develop: [
		{
			type: 'doc',
			id: '4DQodlyPro/gettingStarted'
		},
		{
			type: 'doc',
			id: '4DQodlyPro/qodlyStudioInterface'
		},
		{
			type: 'category',
			label: 'Pages',
			items: [
				'4DQodlyPro/pageLoaders/pageLoaderOverview',
				{
					type: 'category',
					label: 'Components',
					items: [
						'4DQodlyPro/pageLoaders/components/componentsBasics',
						'4DQodlyPro/pageLoaders/components/uploadCustomComponents',
						'4DQodlyPro/pageLoaders/components/button',
						'4DQodlyPro/pageLoaders/components/checkbox',
						'4DQodlyPro/pageLoaders/components/datatable',
						'4DQodlyPro/pageLoaders/components/dialog',
						'4DQodlyPro/pageLoaders/components/fileupload',
						'4DQodlyPro/pageLoaders/components/icon',
						'4DQodlyPro/pageLoaders/components/image',
						'4DQodlyPro/pageLoaders/components/matrix',
						'4DQodlyPro/pageLoaders/components/pageLoader',
						'4DQodlyPro/pageLoaders/components/radio',
						'4DQodlyPro/pageLoaders/components/rangeinput',
						'4DQodlyPro/pageLoaders/components/selectbox',
						'4DQodlyPro/pageLoaders/components/selectinput',
						'4DQodlyPro/pageLoaders/components/stylebox',
						'4DQodlyPro/pageLoaders/components/tabs',
						'4DQodlyPro/pageLoaders/components/text',
						'4DQodlyPro/pageLoaders/components/textinput',
					],
				},
				'4DQodlyPro/pageLoaders/craftedComponents',
				'4DQodlyPro/pageLoaders/templates',
				'4DQodlyPro/pageLoaders/date-time-formats',
				'4DQodlyPro/pageLoaders/qodlySources',
				{
					type: 'category',
					label: 'Events',
					items: [
						'4DQodlyPro/pageLoaders/events/overview',
						'4DQodlyPro/pageLoaders/events/eventsManagement',
						'4DQodlyPro/pageLoaders/events/bindingActionToEvents',
					],
				},
				{
					type: 'category',
					label: 'States',
					items: [
						'4DQodlyPro/pageLoaders/states/stateOverview',
						'4DQodlyPro/pageLoaders/states/nonConditionalState',
						'4DQodlyPro/pageLoaders/states/conditionalState',
					],
				},
				'4DQodlyPro/pageLoaders/styling',
				'4DQodlyPro/rendering',
			],
		},
		{
			type: 'category',
			label: 'Coding and Debugging',
			items: ['4DQodlyPro/coding',
				'4DQodlyPro/debugging',
				'4DQodlyPro/qodlyEventsClass',
			],
		},
		{
			type: 'category',
			label: 'Roles And Privileges',
			items: [
				'4DQodlyPro/roles/overview',
				{
					type: 'category',
					label: 'Permissions',
					items: [
						'4DQodlyPro/roles/permissionsOverview',
						'4DQodlyPro/roles/datastorePermissions',
						'4DQodlyPro/roles/dataClassPermissions',
						'4DQodlyPro/roles/attributesPermissions',
						'4DQodlyPro/roles/functionPermissions',
						'4DQodlyPro/roles/modelEditorApproach'
					]
				},
				'4DQodlyPro/roles/includingPrivileges',
				'4DQodlyPro/roles/example-of-configuration',
			],
		},
		{
			type: 'doc',
			id: '4DQodlyPro/httpHandlers',
			label: "HTTP Handlers"
		},
		{
			type: 'doc',
			id: '4DQodlyPro/localization',
			label: "Localization (i18n)"
		},
		{
			type: 'doc',
			id: '4DQodlyPro/settings',
			label: "Settings"
		},
		{
			type: 'link',
			label: 'Data Explorer',
			href: 'https://developer.4d.com/docs/Admin/dataExplorer'
		}, 
	],
};

module.exports = sidebars;
