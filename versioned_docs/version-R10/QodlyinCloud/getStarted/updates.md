---
id: updates
title: Updates and Versioning
---



## Releases

Qodly uses Semantic versioning (also known as *SemVer*) with the format (Major.Minor.Patch).


### Major Releases

A major release brings significant changes to Qodly, posing potential risks to your application. Verify compatibility before upgrading is highly recommended. 

These updates are made every one or two years and include core changes such as the evolution of ORDA or QodlyScript, the addition of a new technology, and/or significant changes in Qodly Server. 

We support two major releases at a time.

### Minor Releases

A minor release introduces new features that enhance productivity and efficiency, resulting in a second number increment.


### Patch Releases

A patch release fixes bugs without adding new features, incrementing the third number.

## How to Upgrade

The following steps are required to upgrade your Qodly application:

1. Create a [new release](../console/releaseManagementDeployment.md)
2. Update the Development environment
3. [Test the app](test-debug.md)
4. Fix any bugs
5. Once tests are successful, create a new release
6. Deploy to the QA environment
7. If everything is fine, deploy to Production environment
8. Notify users if necessary.
