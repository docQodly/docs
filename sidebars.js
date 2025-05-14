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
	// Old Doc pages
	GetStarted_Q: [
		{
			type: 'category',
			label: 'Qodly Overview',
			items: ['Old/get-started/first-app',
				'Old/get-started/test-debug',
				'Old/get-started/deployment',
				'Old/get-started/access',
				'Old/get-started/data-management',
				'Old/get-started/support',
				'Old/get-started/updates',
				'Old/get-started/community',
				'Old/get-started/subscriptions',
				'Old/get-started/payments',
				'Old/get-started/refunds',
			],
		},
		{
			type: 'category',
			label: 'Release Notes',
			collapsed: false,
			items: [
						'Old/notes/1.2.0',
						'Old/notes/1.1.0',
						'Old/notes/1.0.0',
						'Old/notes/1.0.0-beta.6',
						'Old/notes/1.0.0-beta.5',
						'Old/notes/1.0.0-beta.4',
						'Old/notes/1.0.0-beta.3',
						'Old/notes/1.0.0-beta.2',
						'Old/notes/1.0.0-beta.1',
						'Old/notes/1.0.0-beta.0'
					],
		},
	],
	Develop_Q: [
		{
			type: 'category',
			label: 'Roles And Privileges',
			items: [
				'Old/studio/roles/example-of-configuration',
				{
					type: 'category',
					label: 'Permissions',
					items: [
						'Old/studio/roles/modelEditorApproach'
					]
				}
			],
		},
		{
			type: 'category',
			label: 'Model',
			items: ['Old/studio/model/model-editor-interface',
				'Old/studio/model/datastore-classes',
				'Old/studio/model/attributes',
				'Old/studio/model/functions',
				'Old/studio/model/import',
			],
		},	
		{
			type: 'doc',
			id: 'Old/studio/qodlyEventsClass',
			label: "QodlyEvents Class Interface"
		},
		{
			type: 'doc',
			id: 'Old/data-explorer/data-explorer',
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
				'Old/language/basics/lang-quicktour',
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
						'Old/language/basics/lang-variables',
						{
							type: 'category',
							label: 'Data Types',
							collapsible: true,
							collapsed: true,
							link: {
								type: 'doc',
								id: 'Old/language/basics/lang-data-types',
							},
							items: [
								'Old/language/basics/lang-blob',
								'Old/language/basics/lang-boolean',
								'Old/language/basics/lang-collection',
								'Old/language/basics/lang-date',
								'Old/language/basics/lang-null-undefined',
								'Old/language/basics/lang-number',
								'Old/language/basics/lang-object',
								'Old/language/basics/lang-picture',
								'Old/language/basics/lang-time',
								'Old/language/basics/lang-text',
								'Old/language/basics/lang-variant',
							],
						},
						'Old/language/basics/lang-operators',
						'Old/language/basics/lang-methods',
						'Old/language/basics/lang-classes',
						'Old/language/basics/lang-parameters',
						'Old/language/basics/lang-expressions',
						'Old/language/basics/lang-shared',
						'Old/language/basics/lang-control-flow',
						'Old/language/basics/lang-errors',
						'Old/language/basics/lang-identifiers',
						'Old/language/basics/lang-pathnames',
					],
				},
				{
					type: 'category',
					label: 'Commands',
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: 'Old/language/commands/command-list',
					},
					items: [
						'Old/language/commands/abort',
						'Old/language/commands/abortProcessByID',
						'Old/language/commands/abs',
						'Old/language/commands/addToDate',
						'Old/language/commands/arctan',
						'Old/language/commands/assert',
						'Old/language/commands/asserted',
						'Old/language/commands/base64Decode',
						'Old/language/commands/base64Encode',
						'Old/language/commands/blobToPicture',
						'Old/language/commands/bool',
						'Old/language/commands/callChain',
						'Old/language/commands/callWorker',
						'Old/language/commands/changeString',
						'Old/language/commands/char',
						'Old/language/commands/characterCode',
						'Old/language/commands/clearSemaphore',
						'Old/language/commands/compareStrings',
						'Old/language/commands/convertFromString',
						'Old/language/commands/convertPicture',
						'Old/language/commands/convertToString',
						'Old/language/commands/cos',
						'Old/language/commands/createThumbnail',
						'Old/language/commands/currentDate',
						'Old/language/commands/currentMethodName',
						'Old/language/commands/currentProcess',
						'Old/language/commands/currentProcessName',
						'Old/language/commands/currentTime',
						'Old/language/commands/date',
						'Old/language/commands/dayNumber',
						'Old/language/commands/dayOf',
						'Old/language/commands/dec',
						'Old/language/commands/delayProcess',
						'Old/language/commands/deleteString',
						'Old/language/commands/ds',
						'Old/language/commands/exp',
						'Old/language/commands/false',
						'Old/language/commands/file',
						'Old/language/commands/folder',
						'Old/language/commands/formula',
						'Old/language/commands/formulaFromString',
						'Old/language/commands/generateDigest',
						'Old/language/commands/generatePasswordHash',
						'Old/language/commands/generateUUID',
						'Old/language/commands/getAssertEnabled',
						'Old/language/commands/getPictureFileName',
						'Old/language/commands/getPictureMetadata',
						'Old/language/commands/getProcessActivity',
						'Old/language/commands/highestProcessNumber',
						'Old/language/commands/insertString',
						'Old/language/commands/instanceOf',
						'Old/language/commands/int',
						'Old/language/commands/jsonParse',
						'Old/language/commands/jsonResolvePointers',
						'Old/language/commands/jsonStringify',
						'Old/language/commands/jsonValidate',
						'Old/language/commands/killWorker',
						'Old/language/commands/lastErrors',
						'Old/language/commands/length',
						'Old/language/commands/log',
						'Old/language/commands/logEvent',
						'Old/language/commands/lowercase',
						'Old/language/commands/mailConvertFromMIME',
						'Old/language/commands/mailConvertToMIME',
						'Old/language/commands/matchRegex',
						'Old/language/commands/methodCalledOnError',
						'Old/language/commands/milliseconds',
						'Old/language/commands/mod',
						'Old/language/commands/monthOf',
						'Old/language/commands/newCollection',
						'Old/language/commands/newObject',
						'Old/language/commands/newSharedCollection',
						'Old/language/commands/newSharedObject',
						'Old/language/commands/newSignal',
						'Old/language/commands/not',
						'Old/language/commands/num',
						'Old/language/commands/objectClass',
						'Old/language/commands/objectCopy',
						'Old/language/commands/objectEntries',
						'Old/language/commands/objectIsDefined',
						'Old/language/commands/objectIsEmpty',
						'Old/language/commands/objectIsShared',
						'Old/language/commands/objectKeys',
						'Old/language/commands/objectRemove',
						'Old/language/commands/objectValues',
						'Old/language/commands/onErrCall',
						'Old/language/commands/openDatastore',
						'Old/language/commands/pictureProperties',
						'Old/language/commands/pictureSize',
						'Old/language/commands/pictureToBlob',
						'Old/language/commands/position',
						'Old/language/commands/processInfo',
						'Old/language/commands/processNumber',
						'Old/language/commands/processState',
						'Old/language/commands/random',
						'Old/language/commands/replaceString',
						'Old/language/commands/round',
						'Old/language/commands/semaphore',
						'Old/language/commands/session',
						'Old/language/commands/setAssertEnabled',
						'Old/language/commands/setPictureFileName',
						'Old/language/commands/setPictureMetadata',
						'Old/language/commands/setRealComparisonLevel',
						'Old/language/commands/sin',
						'Old/language/commands/splitString',
						'Old/language/commands/squareRoot',
						'Old/language/commands/storage',
						'Old/language/commands/string',
						'Old/language/commands/substring',
						'Old/language/commands/tan',
						'Old/language/commands/testSemaphore',
						'Old/language/commands/throw',
						'Old/language/commands/time',
						'Old/language/commands/timestamp',
						'Old/language/commands/timeString',
						'Old/language/commands/trace',
						'Old/language/commands/true',
						'Old/language/commands/trunc',
						'Old/language/commands/type',
						'Old/language/commands/uppercase',
						'Old/language/commands/valueType',
						'Old/language/commands/verifyPasswordHash',
						'Old/language/commands/webEvent',
						'Old/language/commands/webForm',
						'Old/language/commands/yearOf',
						'Old/language/commands/zipCreateArchive',
						'Old/language/commands/zipReadArchive',

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
						'Old/language/BlobClass',
						'Old/language/ClassClass',
						'Old/language/CollectionClass',
						'Old/language/CryptoKeyClass',
						'Old/language/DataClassClass',
						'Old/language/DataStoreClass',
						'Old/language/EmailObjectClass',
						'Old/language/EndpointsClass',
						'Old/language/EntityClass',
						'Old/language/EntitySelectionClass',
						'Old/language/FileClass',
						'Old/language/FileHandleClass',
						'Old/language/FolderClass',
						'Old/language/FunctionClass',
						'Old/language/HTTPRequestClass',
						'Old/language/IMAPTransporterClass',
						'Old/language/IncomingMessageClass',
						'Old/language/MailAttachmentClass',
						'Old/language/OutgoingMessageClass',
						'Old/language/POP3TransporterClass',
						'Old/language/QodlyEvents',
						'Old/language/SessionClass',
						'Old/language/SignalClass',
    			        'Old/language/SMTPTransporterClass',
						'Old/language/SystemWorkerClass',
						'Old/language/TCPConnectionClass',
						'Old/language/TCPEventClass',
						'Old/language/UsersClass',
						'Old/language/WebFormClass',
						'Old/language/WebFormItemClass',
						'Old/language/ZipArchiveClass',
						'Old/language/ZipFileClass',
						'Old/language/ZipFolderClass',
					],
				},
			],
		},
	],
	Integrations_Q: [
		{
			type: 'category',
			label: 'REST API',
			items: [	
				{
					type: 'doc',
					id: 'Old/api/overview',
				},
				{
					type: 'category',
					label: 'Server Information API',
					items: [
						'Old/api/$catalog',
						'Old/api/$info'
					],
				},
				{
					type: 'category',
					label: 'DataClass Operations API',
					items: [
						'Old/api/dataclassEndpoints',
						'Old/api/dataclassManipulation',
						'Old/api/$asArray',
						'Old/api/$atomic$atOnce',
						'Old/api/$attributes',
						'Old/api/$binary',
						'Old/api/$clean',
						'Old/api/$compute',
						'Old/api/$distinct',
						'Old/api/$entityset',
						'Old/api/$expand',
						'Old/api/$filter',
						'Old/api/$format',
						'Old/api/$imageformat',
						'Old/api/$lock',
						'Old/api/$method',
						'Old/api/$orderby',
						'Old/api/$queryplan',
						'Old/api/$querypath',
						'Old/api/$savedfilter',
						'Old/api/$savedorderby',
						'Old/api/$singleton',
						'Old/api/$skip',
						'Old/api/$timeout',
						'Old/api/$top$limit',
						'Old/api/$version',
					],
				},
				{
					type: 'category',
					label: 'Class Functions API',
					items: [
						'Old/api/classFunctionsOverview',
						'Old/api/classFunctionsParameters',
						'Old/api/classfunctionsFunctionCalls'
					],
				},
			],
		},
		'Old/qodlyLookerStudio/qodlyLookerStudioConnector',
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
					id: 'Old/customComponent/overview',
				},
				{
					type: 'doc',
					id: 'Old/customComponent/setup',
				},
				{
					type: 'doc',
					id: 'Old/customComponent/structure',
				},
				{
					type: "category",
					label: "API Reference",
					items: [
						{
							type: 'category',
							label: '@ws-ui/webform-editor',
							items: [
								'Old/customComponent/api-reference/webform-editor/v0.2.24',
								'Old/customComponent/api-reference/webform-editor/v0.2.16',
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
			items: [	'Old/orda/data-model', 
						'Old/orda/data',
						'Old/orda/queries',
						'Old/language/guides/sessions',
						'Old/language/guides/login',
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
	// Qodly Cloud
	QodlyCloud: [
		{
			type: 'doc',
			id: 'QodlyinCloud/quickstart'
		},
		{
			type: 'category',
			label: 'Cloud Console',
			items: [
				'QodlyinCloud/console/consoleOverview',
				{
					type: 'category',
					label: 'Applications',
					items: [
						'QodlyinCloud/console/sandbox',
						'QodlyinCloud/console/myApps',
					],
				},
				{
					type: 'category',
					label: 'Environments',
					items: [
						'QodlyinCloud/console/environmentsOverview',
						'QodlyinCloud/console/resourceMonitoring',
						'QodlyinCloud/console/apiKeys',
						'QodlyinCloud/console/dataManagement',
						'QodlyinCloud/console/deployManagement',			
					],
				},
				'QodlyinCloud/console/billingSubscriptionManagement',
				'QodlyinCloud/console/userAccountManagement',
			],
		},
	]

};

module.exports = sidebars;
