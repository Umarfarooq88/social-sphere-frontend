interface OAuthParams {
  client_id: string;
  redirect_uri: string;
  scope: string;
  state: string;
  include_granted_scopes: string;
  response_type: string;
  [key: string]: string; // Index signature to allow access using string keys
}




 export const trySampleRequest = () => {
  const YOUTUBE_CLIENT_ID = process.env.NEXT_PUBLIC_YOUTUBE_CLIENT_ID || "";
  const YOUTUBE_REDIRECT_URI = process.env.NEXT_PUBLIC_YOUTUBE_REDIRECT_URI || "";

  console.log(YOUTUBE_CLIENT_ID);
  console.log(YOUTUBE_REDIRECT_URI)

    const fragmentString = location.hash.substring(1);
    const params: OAuthParams = {
      client_id: YOUTUBE_CLIENT_ID,
      redirect_uri: YOUTUBE_REDIRECT_URI,
      scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
      state: 'try_sample_request',
      include_granted_scopes: 'true',
      response_type: 'token'
    };
    const regex = /([^&=]+)=([^&]*)/g;
    let m;
    while ((m = regex.exec(fragmentString))) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    if (Object.keys(params).length > 0) {
      localStorage.setItem('oauth2-test-params', JSON.stringify(params));
      if (params['state'] && params['state'] === 'try_sample_request') {
        sampleRequest();
      }
    }
  };

  const sampleRequest = () => {
    const params = JSON.parse(localStorage.getItem('oauth2-test-params') || '{}') as OAuthParams;
    const accessToken = params.access_token;
    if (accessToken) {
      const xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        'https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true&' +
          'access_token=' + accessToken
      );
      xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.response);
          // Store the access token in local storage
          localStorage.setItem('youtubeAccessToken', accessToken);
        } else if (xhr.readyState === 4 && xhr.status === 401) {
          // Token invalid, so prompt for user permission.
          oauth2SignIn();
        }
      };
      xhr.send(null);
    } else {
      oauth2SignIn();
    }
  };

  const oauth2SignIn = () => {
    const YOUTUBE_CLIENT_ID = process.env.NEXT_PUBLIC_YOUTUBE_CLIENT_ID || "";
const YOUTUBE_REDIRECT_URI = process.env.NEXT_PUBLIC_YOUTUBE_REDIRECT_URI || "";

  console.log(YOUTUBE_CLIENT_ID);
  console.log(YOUTUBE_REDIRECT_URI)
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    const form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', oauth2Endpoint);

    const params: OAuthParams = {
      client_id: YOUTUBE_CLIENT_ID,
      redirect_uri: YOUTUBE_REDIRECT_URI,
      scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
      state: 'try_sample_request',
      include_granted_scopes: 'true',
      response_type: 'token'
    };

    for (const p in params) {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

