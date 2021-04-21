# Show SMS Notifications in the Browser with Next.JS, Ably, Vercel and Vonage

This demo uses [Vonage SMS API](https://developer.vonage.com/messaging/sms/overview), the Ably realtime messaging platform, Next.js and Vercel to receive SMS messages in the browser in realtime as they are received.

## Dependencies

* **An Ably account** for sending messages: [Create an account with Ably for free](https://www.ably.io/signup).
* **A Vonage Account** to rent a mobile number to receive SMS: [Create an account with Vonage for free](https://www.vonage.co.uk/log-in/)
* **A Vercel Account** for hosting on production: [Create an account with Vercel for free](https://vercel.com/signup).
* **Node 12** (LTS) or greater: [Install Node](https://nodejs.org/en/).

## Building the Realtime Sms App Locally
#### <a name="newnextjsapp">To Create the Starter App:</a>

1. Fork this demo and clone it to your machine.
2. Create a new file called `.env` in the root of the directory; this is where we'll put the project's environment variables.
3. Add your Ably API key to the .env file with the following text:
```
ABLY_API_KEY=your-ably-api-key:goes-here
```
4. Navigate to your the demo's root `sms-in-the-browser` directory and type into the console:

```bash
npm run dev
```

The Next.js dev server will start up, and will open the demo in your chosen browser.

## How Does it Work?

To read more about the code and how this demo works, check out [this tutorial by Vonage](todo:tutorial link here)

## Make It Yours!

[This demo](https://github.com/ably-labs/sms-in-the-browser) is open-source, fork it and make it your own. Don't forget to show us what you build [@ablyRealtime](https://twitter.com/ablyrealtime).

If you're looking for ways to extend this project, you could consider:
* Building a televoting app
* Adding a database to store messages
* Adding the ability to send a response text.

## Let us Know

If this tutorial was helpful, or you're using Next.js and Ably in your project, we'd love to hear about it. Drop us a [message on Twitter](https://twitter.com/ablyrealtime) or email us at [devrel@ably.io](mailto:devrel@ably.io).
