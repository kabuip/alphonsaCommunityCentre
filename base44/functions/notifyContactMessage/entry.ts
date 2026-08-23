import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const v = body.data || {};

    const to = 'kabuipeter001@gmail.com';

    const subject = `New contact message: ${v.subject || '(no subject)'}`;
    const bodyText = `A new message has been sent through the Contact page.

Name: ${v.name || '—'}
Email: ${v.email || '—'}
Subject: ${v.subject || '—'}

Message:
${v.message || '(no message)'}
`;

    await base44.asServiceRole.integrations.Core.SendEmail({
      from_name: 'St. Alphonsa Community Centre',
      to,
      subject,
      body: bodyText,
    });

    return Response.json({ success: true, sent_to: to });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});