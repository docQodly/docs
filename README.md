# qodly documentation

Welcome to the Qodly documentation site.

## Start

Two processes should run at the same time:

* The preprocess
* The docusaurus start

#### The Preprocess

run `npm run start_watch` in one terminal.
The files from the folder "docs" will be preprocessed in the folder named "docsPostProcessed". A change to a file will be automatically preprocessed.

#### Docusaurus Start

The `docusaurus.config_start.js` uses `docusaurus.config.js` with a few modifications:

* path: "docsPostProcessed/docs"
* versions: only the current version is used

`npm run start -- --config ./docusaurus.config_start.js` in a new terminal to start the preview with this new config.

## Added features

### Coming soon component

1- Import the 'ComingSoon' component with the following code:
`import ComingSoon from '@site/src/components/ComingSoon'`

2- Place <ComingSoon/> wherever you'd like it to appear on the page
If it's a blank page, you can simply include the 'Coming Soon' Component like this:
```
import ComingSoon from '@site/src/components/ComingSoon'
<ComingSoon/>
```

If you want to add it within a specific section that has not been crafted yet, on a page that already contains other content, follow these steps: 
```
import ComingSoon from '@site/src/components/ComingSoon'

## Section Finished
// Some text

## Section Not Crafted Yet
<ComingSoon/>
```
