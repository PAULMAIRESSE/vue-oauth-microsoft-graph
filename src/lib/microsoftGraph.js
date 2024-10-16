
// file src/lib/microsoftGraph.js
import * as msal from '@azure/msal-browser'
import axios from 'axios';
/**
* List the requested scopes (aka. the requested permissions) */
const requestedScopes = {
    scopes: ["User.Read", "Mail.Read"]
}

const msalInstance = new msal.PublicClientApplication({
    auth: {
        clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
    },
    cache: {
        cacheLocation: "sessionStorage"
    }
})

export async function signInAndGetUser() {
    await msalInstance.initialize();
    try {
        const authResult = await msalInstance.loginPopup(requestedScopes);
        msalInstance.setActiveAccount(authResult.account);
        return authResult.account;
    } catch (error) {
        console.warn('Popup was closed or canceled');
    }
}

export async function signOut() {
    await msalInstance.logoutPopup();
}

export async function getUserEmails() {
    await msalInstance.initialize();
    const account = msalInstance.getActiveAccount();
    if (!account) {
        console.error('User is not signed in');
        return;
    }

    const tokenResponse = await msalInstance.acquireTokenSilent({
        scopes: ["Mail.Read"],
        account: account
    });

    // query latest emails (10)
    const response = await axios.get('https://graph.microsoft.com/v1.0/me/messages?$top=10', {
        headers: { 'Authorization': `Bearer ${tokenResponse.accessToken}` }
    });

    console.log(response?.data.value);

    return response?.data.value;
}

export async function getMailDetails(mailId) {
    await msalInstance.initialize();
    const account = msalInstance.getActiveAccount();
    if (!account) {
        console.error('User is not signed in');
        return;
    }

    const tokenResponse = await msalInstance.acquireTokenSilent({
        scopes: ["Mail.Read"],
        account: account
    });

    // query mail details by id
    const response = await axios.get(`https://graph.microsoft.com/v1.0/me/messages/${mailId}`, {
        headers: { 'Authorization': `Bearer ${tokenResponse.accessToken}` }
    });

    // Query attachments for the specific mail if needed
    const attachmentsResponse = axios.get(`https://graph.microsoft.com/v1.0/me/messages/${mailId}/attachments`, {
        headers: { 'Authorization': `Bearer ${tokenResponse.accessToken}` }
    });

    const attachments = attachmentsResponse.then(response => response.data.value);

    return { data: response?.data, attachments };
}