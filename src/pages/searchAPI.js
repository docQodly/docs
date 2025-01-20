import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import commandList from '../../commandList.json';
import versions from '../../versions.json';


export default function RedirectAPI() {
  const context = useDocusaurusContext();
  const commandListString = JSON.stringify(commandList)
  const listVersions = JSON.stringify(versions)

  const url = context.siteConfig.baseUrl
  return (
      <script
            dangerouslySetInnerHTML={{
              __html: `
              ( function() {
              const commands = JSON.parse('${commandListString}')
              const versions = JSON.parse('${listVersions}')

              const url = new URL(window.location.href);
              const memberWanted = url.searchParams.get("member");
              let versionWanted = url.searchParams.get("v");
              if (!versionWanted)
                  versionWanted = "";
              let commandWanted = url.searchParams.get("command");
              if (commandWanted) {
                  commandWanted = commandWanted.toLowerCase();
              }
              else {
                  commandWanted = ""
              }
                          
              let classWanted = url.searchParams.get("class");
              if (classWanted) {
                  classWanted = classWanted.toLowerCase();
              }
              else {
                  classWanted = ""
              }
                          
              let versionToGo = ""
              if (versionWanted !== "") {
                  //Match version
                  for (let i = 1; i < versions.length; ++i) {
                          
                      const version = versions[i].replace('-', '');
                      if (version === versionWanted) {
                          versionToGo = versions[i] + "/"
                      }
                      i++;
                  }
              }
              if(versionToGo === "")
              {
                  versionWanted = ""
              }
                          
              let commandFile = ""
              const commandsVersion = commands[versionWanted];
                          
              if (commandsVersion) {
                  if (memberWanted) {
                      commandFile = commandsVersion["classes"][classWanted]
                  }
                  else {
                      commandFile = commandsVersion["commands"][commandWanted]
                  }
              }
                          
              let finalUrl = "${url}" + versionToGo + commandFile
              if (memberWanted) {
                  finalUrl += "#" + memberWanted.toLowerCase().replaceAll(" ", "-");
              }

              window.location.href = finalUrl
            })();
                `,
            }}
          />
  );
}