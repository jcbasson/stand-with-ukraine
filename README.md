# Stand with Ukraine applicaton to allow people to contact their local senators and parliament members.

## To run

npm install netlify-cli -g

npm i

netlify dev

## TODOS

- Get key from sendgrid to implement emailing capability in the netlify serverless javascript function.
- Provide more error handling.
- Implement validation messages.
- Implement navigation bar.
- Implement Typescript (to get the POC out as quick as possible I left this till later as am rusty with Typescript)
- Implement testing using react-testing-library
- Implement storybook
- Find api to fetch the senators and parliament members information and remove the dummy json data.

## NOTES

- It is deployed to Netlify and available here https://stand-with-ukraine-aus.netlify.app/
- Eventually I decided to use DooGooder to create this campaign which is available here https://standwithukraine.good.do/expel-russian-diplomats/urge-your-candidates/
- The reason I went with DooGooder is because they had everything we needed out of the box.
- But for learning purposes I continue to tinker with this application.
