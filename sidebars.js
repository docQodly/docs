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
						'QodlyinCloud/qodlyScript/guides/sessions',
						'QodlyinCloud/qodlyScript/guides/login',
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
				'QodlyinCloud/qodlyScript/basics/lang-quicktour',
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
						'QodlyinCloud/qodlyScript/basics/lang-variables',
						{
							type: 'category',
							label: 'Data Types',
							collapsible: true,
							collapsed: true,
							link: {
								type: 'doc',
								id: 'QodlyinCloud/qodlyScript/basics/lang-data-types',
							},
							items: [
								'QodlyinCloud/qodlyScript/basics/lang-blob',
								'QodlyinCloud/qodlyScript/basics/lang-boolean',
								'QodlyinCloud/qodlyScript/basics/lang-collection',
								'QodlyinCloud/qodlyScript/basics/lang-date',
								'QodlyinCloud/qodlyScript/basics/lang-null-undefined',
								'QodlyinCloud/qodlyScript/basics/lang-number',
								'QodlyinCloud/qodlyScript/basics/lang-object',
								'QodlyinCloud/qodlyScript/basics/lang-picture',
								'QodlyinCloud/qodlyScript/basics/lang-time',
								'QodlyinCloud/qodlyScript/basics/lang-text',
								'QodlyinCloud/qodlyScript/basics/lang-variant',
							],
						},
						'QodlyinCloud/qodlyScript/basics/lang-operators',
						'QodlyinCloud/qodlyScript/basics/lang-methods',
						'QodlyinCloud/qodlyScript/basics/lang-classes',
						'QodlyinCloud/qodlyScript/basics/lang-parameters',
						'QodlyinCloud/qodlyScript/basics/lang-expressions',
						'QodlyinCloud/qodlyScript/basics/lang-shared',
						'QodlyinCloud/qodlyScript/basics/lang-control-flow',
						'QodlyinCloud/qodlyScript/basics/lang-errors',
						'QodlyinCloud/qodlyScript/basics/lang-identifiers',
						'QodlyinCloud/qodlyScript/basics/lang-pathnames',
					],
				},
				{
					type: 'category',
					label: 'Commands',
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: 'QodlyinCloud/qodlyScript/commands/command-list',
					},
					items: [
						'QodlyinCloud/qodlyScript/commands/abort',
						'QodlyinCloud/qodlyScript/commands/abortProcessByID',
						'QodlyinCloud/qodlyScript/commands/abs',
						'QodlyinCloud/qodlyScript/commands/addToDate',
						'QodlyinCloud/qodlyScript/commands/arctan',
						'QodlyinCloud/qodlyScript/commands/assert',
						'QodlyinCloud/qodlyScript/commands/asserted',
						'QodlyinCloud/qodlyScript/commands/base64Decode',
						'QodlyinCloud/qodlyScript/commands/base64Encode',
						'QodlyinCloud/qodlyScript/commands/blobToPicture',
						'QodlyinCloud/qodlyScript/commands/bool',
						'QodlyinCloud/qodlyScript/commands/callChain',
						'QodlyinCloud/qodlyScript/commands/callWorker',
						'QodlyinCloud/qodlyScript/commands/changeString',
						'QodlyinCloud/qodlyScript/commands/char',
						'QodlyinCloud/qodlyScript/commands/characterCode',
						'QodlyinCloud/qodlyScript/commands/clearSemaphore',
						'QodlyinCloud/qodlyScript/commands/compareStrings',
						'QodlyinCloud/qodlyScript/commands/convertFromString',
						'QodlyinCloud/qodlyScript/commands/convertPicture',
						'QodlyinCloud/qodlyScript/commands/convertToString',
						'QodlyinCloud/qodlyScript/commands/cos',
						'QodlyinCloud/qodlyScript/commands/createThumbnail',
						'QodlyinCloud/qodlyScript/commands/currentDate',
						'QodlyinCloud/qodlyScript/commands/currentMethodName',
						'QodlyinCloud/qodlyScript/commands/currentProcess',
						'QodlyinCloud/qodlyScript/commands/currentProcessName',
						'QodlyinCloud/qodlyScript/commands/currentTime',
						'QodlyinCloud/qodlyScript/commands/date',
						'QodlyinCloud/qodlyScript/commands/dayNumber',
						'QodlyinCloud/qodlyScript/commands/dayOf',
						'QodlyinCloud/qodlyScript/commands/dec',
						'QodlyinCloud/qodlyScript/commands/delayProcess',
						'QodlyinCloud/qodlyScript/commands/deleteString',
						'QodlyinCloud/qodlyScript/commands/ds',
						'QodlyinCloud/qodlyScript/commands/exp',
						'QodlyinCloud/qodlyScript/commands/false',
						'QodlyinCloud/qodlyScript/commands/file',
						'QodlyinCloud/qodlyScript/commands/folder',
						'QodlyinCloud/qodlyScript/commands/formula',
						'QodlyinCloud/qodlyScript/commands/formulaFromString',
						'QodlyinCloud/qodlyScript/commands/generateDigest',
						'QodlyinCloud/qodlyScript/commands/generatePasswordHash',
						'QodlyinCloud/qodlyScript/commands/generateUUID',
						'QodlyinCloud/qodlyScript/commands/getAssertEnabled',
						'QodlyinCloud/qodlyScript/commands/getPictureFileName',
						'QodlyinCloud/qodlyScript/commands/getPictureMetadata',
						'QodlyinCloud/qodlyScript/commands/getProcessActivity',
						'QodlyinCloud/qodlyScript/commands/highestProcessNumber',
						'QodlyinCloud/qodlyScript/commands/insertString',
						'QodlyinCloud/qodlyScript/commands/instanceOf',
						'QodlyinCloud/qodlyScript/commands/int',
						'QodlyinCloud/qodlyScript/commands/jsonParse',
						'QodlyinCloud/qodlyScript/commands/jsonResolvePointers',
						'QodlyinCloud/qodlyScript/commands/jsonStringify',
						'QodlyinCloud/qodlyScript/commands/jsonValidate',
						'QodlyinCloud/qodlyScript/commands/killWorker',
						'QodlyinCloud/qodlyScript/commands/lastErrors',
						'QodlyinCloud/qodlyScript/commands/length',
						'QodlyinCloud/qodlyScript/commands/log',
						'QodlyinCloud/qodlyScript/commands/logEvent',
						'QodlyinCloud/qodlyScript/commands/lowercase',
						'QodlyinCloud/qodlyScript/commands/mailConvertFromMIME',
						'QodlyinCloud/qodlyScript/commands/mailConvertToMIME',
						'QodlyinCloud/qodlyScript/commands/matchRegex',
						'QodlyinCloud/qodlyScript/commands/methodCalledOnError',
						'QodlyinCloud/qodlyScript/commands/milliseconds',
						'QodlyinCloud/qodlyScript/commands/mod',
						'QodlyinCloud/qodlyScript/commands/monthOf',
						'QodlyinCloud/qodlyScript/commands/newCollection',
						'QodlyinCloud/qodlyScript/commands/newObject',
						'QodlyinCloud/qodlyScript/commands/newSharedCollection',
						'QodlyinCloud/qodlyScript/commands/newSharedObject',
						'QodlyinCloud/qodlyScript/commands/newSignal',
						'QodlyinCloud/qodlyScript/commands/not',
						'QodlyinCloud/qodlyScript/commands/num',
						'QodlyinCloud/qodlyScript/commands/objectClass',
						'QodlyinCloud/qodlyScript/commands/objectCopy',
						'QodlyinCloud/qodlyScript/commands/objectEntries',
						'QodlyinCloud/qodlyScript/commands/objectIsDefined',
						'QodlyinCloud/qodlyScript/commands/objectIsEmpty',
						'QodlyinCloud/qodlyScript/commands/objectIsShared',
						'QodlyinCloud/qodlyScript/commands/objectKeys',
						'QodlyinCloud/qodlyScript/commands/objectRemove',
						'QodlyinCloud/qodlyScript/commands/objectValues',
						'QodlyinCloud/qodlyScript/commands/onErrCall',
						'QodlyinCloud/qodlyScript/commands/openDatastore',
						'QodlyinCloud/qodlyScript/commands/pictureProperties',
						'QodlyinCloud/qodlyScript/commands/pictureSize',
						'QodlyinCloud/qodlyScript/commands/pictureToBlob',
						'QodlyinCloud/qodlyScript/commands/position',
						'QodlyinCloud/qodlyScript/commands/processInfo',
						'QodlyinCloud/qodlyScript/commands/processNumber',
						'QodlyinCloud/qodlyScript/commands/processState',
						'QodlyinCloud/qodlyScript/commands/random',
						'QodlyinCloud/qodlyScript/commands/replaceString',
						'QodlyinCloud/qodlyScript/commands/round',
						'QodlyinCloud/qodlyScript/commands/semaphore',
						'QodlyinCloud/qodlyScript/commands/session',
						'QodlyinCloud/qodlyScript/commands/setAssertEnabled',
						'QodlyinCloud/qodlyScript/commands/setPictureFileName',
						'QodlyinCloud/qodlyScript/commands/setPictureMetadata',
						'QodlyinCloud/qodlyScript/commands/setRealComparisonLevel',
						'QodlyinCloud/qodlyScript/commands/sin',
						'QodlyinCloud/qodlyScript/commands/splitString',
						'QodlyinCloud/qodlyScript/commands/squareRoot',
						'QodlyinCloud/qodlyScript/commands/storage',
						'QodlyinCloud/qodlyScript/commands/string',
						'QodlyinCloud/qodlyScript/commands/substring',
						'QodlyinCloud/qodlyScript/commands/tan',
						'QodlyinCloud/qodlyScript/commands/testSemaphore',
						'QodlyinCloud/qodlyScript/commands/throw',
						'QodlyinCloud/qodlyScript/commands/time',
						'QodlyinCloud/qodlyScript/commands/timestamp',
						'QodlyinCloud/qodlyScript/commands/timeString',
						'QodlyinCloud/qodlyScript/commands/trace',
						'QodlyinCloud/qodlyScript/commands/true',
						'QodlyinCloud/qodlyScript/commands/trunc',
						'QodlyinCloud/qodlyScript/commands/type',
						'QodlyinCloud/qodlyScript/commands/uppercase',
						'QodlyinCloud/qodlyScript/commands/valueType',
						'QodlyinCloud/qodlyScript/commands/verifyPasswordHash',
						'QodlyinCloud/qodlyScript/commands/webEvent',
						'QodlyinCloud/qodlyScript/commands/webForm',
						'QodlyinCloud/qodlyScript/commands/yearOf',
						'QodlyinCloud/qodlyScript/commands/zipCreateArchive',
						'QodlyinCloud/qodlyScript/commands/zipReadArchive',

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
						'QodlyinCloud/qodlyScript/BlobClass',
						'QodlyinCloud/qodlyScript/ClassClass',
						'QodlyinCloud/qodlyScript/CollectionClass',
						'QodlyinCloud/qodlyScript/CryptoKeyClass',
						'QodlyinCloud/qodlyScript/DataClassClass',
						'QodlyinCloud/qodlyScript/DataStoreClass',
						'QodlyinCloud/qodlyScript/EmailObjectClass',
						'QodlyinCloud/qodlyScript/EndpointsClass',
						'QodlyinCloud/qodlyScript/EntityClass',
						'QodlyinCloud/qodlyScript/EntitySelectionClass',
						'QodlyinCloud/qodlyScript/FileClass',
						'QodlyinCloud/qodlyScript/FileHandleClass',
						'QodlyinCloud/qodlyScript/FolderClass',
						'QodlyinCloud/qodlyScript/FunctionClass',
						'QodlyinCloud/qodlyScript/HTTPRequestClass',
						'QodlyinCloud/qodlyScript/IMAPTransporterClass',
						'QodlyinCloud/qodlyScript/IncomingMessageClass',
						'QodlyinCloud/qodlyScript/MailAttachmentClass',
						'QodlyinCloud/qodlyScript/OutgoingMessageClass',
						'QodlyinCloud/qodlyScript/POP3TransporterClass',
						'QodlyinCloud/qodlyScript/QodlyEvents',
						'QodlyinCloud/qodlyScript/SessionClass',
						'QodlyinCloud/qodlyScript/SignalClass',
    			        'QodlyinCloud/qodlyScript/SMTPTransporterClass',
						'QodlyinCloud/qodlyScript/SystemWorkerClass',
						'QodlyinCloud/qodlyScript/TCPConnectionClass',
						'QodlyinCloud/qodlyScript/TCPEventClass',
						'QodlyinCloud/qodlyScript/UsersClass',
						'QodlyinCloud/qodlyScript/WebFormClass',
						'QodlyinCloud/qodlyScript/WebFormItemClass',
						'QodlyinCloud/qodlyScript/ZipArchiveClass',
						'QodlyinCloud/qodlyScript/ZipFileClass',
						'QodlyinCloud/qodlyScript/ZipFolderClass',
					],
				},
			],
		},
	]

};

module.exports = sidebars;
