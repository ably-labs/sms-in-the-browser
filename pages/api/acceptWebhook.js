import Ably from "ably/promises";

export default async function handler(req, res) {

    const incomingData = getSmsDetails(req, res);

    if (!incomingData.success) {
        res.status(400).end();
        return;
    }

    const client = new Ably.Realtime(process.env.ABLY_API_KEY);
    const channel = client.channels.get("sms-notifications");
    await channel.publish({ name: "smsEvent", data: incomingData });

    res.send(incomingData);
    res.status(200).end();
};

function getSmsDetails(req, res) {

    const params = req.query;

    if (!params.to || !params.msisdn) {
        console.log('This is not a valid inbound SMS message!');
        return { success: false };
    }

    return {
        success: true,
        messageId: params.messageId,
        from: params.msisdn,
        text: params.text,
        type: params.type,
        timestamp: params['message-timestamp']
    };

}
