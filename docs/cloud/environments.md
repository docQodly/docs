---
id: environments
title: Environments
---

import Column from '@site/src/components/Column'


## Overview

By default, Qodly applications come with a Development environment, but you can add additional environments as needed for Staging, Production, or other custom purposes. Following best practices, environments are typically named according to their role.

:::tip Notes on Environment-Specific Access

- **Development Environment**: Since the **Studio** is only available here, developers assigned to the development environment can actively work on the application code and configuration. This environment is ideal for users with development responsibilities.
  
- **Others Environments**: These environments do not provide Studio access. They are used for testing and final deployment, where roles like Viewer or limited Admin access may be more common, ensuring stable and controlled use of the application without modification risks.

:::