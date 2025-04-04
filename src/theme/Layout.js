import React, { useEffect, useState } from 'react';
import Layout from '@theme-original/Layout';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function CustomLayout(props) {
    const { siteConfig } = useDocusaurusContext();
    const location = useLocation();

    const baseKeywords = siteConfig.themeConfig.metadata.find(
        (meta) => meta.name === 'keywords'
    )?.content || '';

    let extraKeywords = '';
    const path = location.pathname;

    if (path.startsWith('/docs/get-started')) { // qodly getting started
        extraKeywords = 'qodly quickstart, qodly setup, qodly guide, how to use qodly, qodly overview, qodly getting started, qodly basics';
    }
    else if (path.startsWith('/docs/studio')) { // qodly studio
        extraKeywords = 'qodly studio, qodly components, qodly model, qodly events, qodly roles, qodly states, qodly permissions, qodly UI builder, qodly frontend, low-code development, build apps with qodly, qodly interface, qodly http handlers, qodly debugging, qodly rendering';
    }
    else if (path.startsWith('/docs/data-explorer')) { // qodly data explorer
        extraKeywords = 'qodly data explorer, view qodly data, qodly data browser, qodly data admin, qodly data search, qodly data management ui, qodly data ui';
    }
    else if (path.startsWith('/docs/language')) { // qodly script
        extraKeywords = 'qodly script, qodly language, qodly classes, qodly commands, qodly scripting guide, qodly methods, qodly code reference, qodly developer reference, write code in qodly';
    }
    else if (path.startsWith('/docs/cloud')) { // qodly cloud
        extraKeywords = 'qodly cloud, qodly deployment, qodly hosting, qodly environments, qodly billing, qodly subscription management, qodly data management, qodly cloud console, qodly app management, qodly sandbox, qodly release pipeline, qodly monitoring';
    }
    else if (path.startsWith('/docs/api')) { // qodly api
        extraKeywords = 'qodly api, qodly rest api, qodly dataclass api, qodly endpoints, qodly orda api, rest access qodly, qodly external integration, expose qodly data, qodly class functions api, qodly backend api';
    }
    else if (path.startsWith('/docs/customComponent')) { // qodly custom components
        extraKeywords = 'qodly custom components, build custom components qodly, qodly react components, qodly component api, @qodly/cli, extend qodly, reusable components qodly, qodly component setup, qodly component structure';
    }
    else if (path.startsWith('/docs/qodlyLookerStudio')) { // qodlyLookerStudio 
        extraKeywords = 'qodly looker studio, qodly connector, qodly looker data visualization, qodly reports, connect qodly to looker studio, qodly analytics, real-time qodly data, qodly business metrics, qodly looker integration';
    }

    const combinedKeywords = extraKeywords
        ? `${baseKeywords}, ${extraKeywords}`
        : baseKeywords;

    return (
        <>
            <Head>
                <meta name="keywords" content={combinedKeywords} />
            </Head>
            <Layout {...props} />
        </>
    );
}
