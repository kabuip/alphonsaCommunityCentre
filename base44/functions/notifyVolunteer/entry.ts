import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const v = body.data || {};

    const to = 'kabuipeter001@gmail.com';

    const interestLabels: Record<string, string> = {
      caregiving: 'Caregiving & being with the children',
      teaching: 'Teaching & education',
      medical: 'Medical / physiotherapy',
      skills: 'Professional skills',
      prayer: 'Prayer & spiritual support',
      other: 'Something else',
    };
    const interest = interestLabels[v.interest] || v.interest || '—';

    const subject = `New volunteer sign-up: ${v.full_name || 'Unknown'}`;
    const bodyText = `A new volunteer has signed up on the Get Involved page.

Name: ${v.full_name || '—'}
Email: ${v.email || '—'}
Phone: ${v.phone || '—'}
Interest: ${interest}

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