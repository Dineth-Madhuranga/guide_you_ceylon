import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, tourPackage, travelers, travelDates, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // SMTP configuration with environment variables or user defaults
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
    const smtpUser = process.env.SMTP_USER || "guideuinfo@gmail.com";
    const smtpPass = process.env.SMTP_PASS || "friqghjzvnzkdety";
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "guideuinfo@gmail.com";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for port 465
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 1. Email to Business (Guide You Ceylon)
    const adminMailOptions = {
      from: `"Guide You Ceylon Expeditions" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: `${name} <${email}>`,
      subject: `🌿 New Expedition Inquiry: ${tourPackage || "Wilderness Trek"} - ${name}`,
      text: `
New Expedition Inquiry from Website:

Traveler Name: ${name}
Email: ${email}
Phone / WhatsApp: ${phone || "Not provided"}
Selected Tour Package: ${tourPackage || "General Inquiry"}
Number of Travelers: ${travelers || "1"}
Target Travel Dates: ${travelDates || "Flexible / Not specified"}

Message / Special Requirements:
${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #166534; margin-top: 0; border-bottom: 2px solid #166534; padding-bottom: 12px;">
            🌿 Guide You Ceylon - New Expedition Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 0; color: #525252; font-weight: bold; width: 160px;">Traveler Name:</td>
              <td style="padding: 10px 0; color: #0a0a0a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #525252; font-weight: bold;">Email Address:</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #166534; text-decoration: underline;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #525252; font-weight: bold;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0; color: #0a0a0a;">
                ${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="color: #166534;">${phone}</a>` : "Not provided"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #525252; font-weight: bold;">Selected Tour:</td>
              <td style="padding: 10px 0; color: #166534; font-weight: bold;">${tourPackage || "General Wilderness Inquiry"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #525252; font-weight: bold;">Group Size:</td>
              <td style="padding: 10px 0; color: #0a0a0a;">${travelers || "1"} traveler(s)</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #525252; font-weight: bold;">Target Dates:</td>
              <td style="padding: 10px 0; color: #0a0a0a;">${travelDates || "Flexible / Not specified"}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 18px; background-color: #f4fbf6; border-left: 4px solid #166534; border-radius: 6px;">
            <p style="margin: 0; color: #166534; font-weight: bold; font-size: 14px;">Traveler Message &amp; Notes:</p>
            <p style="margin: 8px 0 0 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #737373;">
            <p style="margin: 0;">💡 You can reply directly to this email to respond to <strong>${name}</strong> at <strong>${email}</strong>.</p>
          </div>
        </div>
      `,
    };

    // 2. Confirmation Email to Traveler
    const travelerMailOptions = {
      from: `"Guide You Ceylon" <${smtpUser}>`,
      to: email,
      subject: `Thank you for contacting Guide You Ceylon! [Inquiry Received]`,
      text: `
Dear ${name},

Ayubowan! Thank you for reaching out to Guide You Ceylon.

We have received your inquiry for:
Tour Package: ${tourPackage || "Wilderness Trekking & Camping Expedition"}
Travelers: ${travelers || "1"}
Target Dates: ${travelDates || "Flexible"}

Our certified expedition team is reviewing your request. We will reach out to you within 24 hours with complete availability, tailored logistics, and answers to any questions you may have.

If you would like immediate assistance, feel free to message or call our lead guide directly on WhatsApp:
WhatsApp / Direct: +94 75 574 0513 (or 0755740513)
Email: guideuinfo@gmail.com

Warm regards,
Guide You Ceylon Expedition Team
Knuckles Mountain Range, Sri Lanka
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 12px; background-color: #ffffff;">
          <div style="text-align: center; border-bottom: 2px solid #166534; padding-bottom: 16px;">
            <h1 style="color: #166534; margin: 0; font-size: 24px; letter-spacing: -0.5px;">GUIDE YOU CEYLON</h1>
            <p style="color: #525252; margin: 4px 0 0 0; font-size: 13px;">Wilderness Trekking &amp; Camping Expeditions • Sri Lanka</p>
          </div>

          <p style="margin-top: 20px; font-size: 16px; color: #0a0a0a;">Ayubowan, <strong>${name}</strong>!</p>
          
          <p style="color: #374151; line-height: 1.6; font-size: 14px;">
            Thank you for reaching out to <strong>Guide You Ceylon</strong>. We have received your inquiry and our team of licensed guides is already reviewing your trip details.
          </p>

          <div style="background-color: #f9fafb; border: 1px solid #e5e5e5; border-radius: 8px; padding: 16px; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0; color: #166534; font-size: 14px;">Summary of Your Request:</h4>
            <ul style="margin: 0; padding-left: 20px; color: #4b5563; font-size: 13px; line-height: 1.8;">
              <li><strong>Tour Package:</strong> ${tourPackage || "Wilderness Trekking Expedition"}</li>
              <li><strong>Group Size:</strong> ${travelers || "1"} traveler(s)</li>
              <li><strong>Preferred Dates:</strong> ${travelDates || "Flexible / To be confirmed"}</li>
            </ul>
          </div>

          <p style="color: #374151; line-height: 1.6; font-size: 14px;">
            One of our certified mountain guides will get in touch with you shortly to confirm route details, weather conditions, permits, and private pickup arrangements.
          </p>

          <div style="margin-top: 24px; padding: 16px; background-color: #f4fbf6; border-radius: 8px; text-align: center;">
            <p style="margin: 0 0 8px 0; font-size: 13px; color: #166534; font-weight: bold;">Need Immediate Assistance?</p>
            <a
              href="https://wa.me/94755740513?text=${encodeURIComponent(`Hi Guide You Ceylon, I submitted an inquiry for ${tourPackage || "a trek"}!`)}"
              style="display: inline-block; background-color: #166534; color: #ffffff; padding: 10px 20px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-size: 13px;"
            >
              💬 Message on WhatsApp (+94 75 574 0513)
            </a>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #525252;">Direct Line: 0755740513 | Email: guideuinfo@gmail.com</p>
          </div>

          <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #e5e5e5; text-align: center; color: #9ca3af; font-size: 12px;">
            <p style="margin: 0;">© 2026 Guide You Ceylon • UNESCO Knuckles Conservation Forest Expeditions</p>
          </div>
        </div>
      `,
    };

    // Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(travelerMailOptions),
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your expedition inquiry has been sent successfully. A confirmation email has been dispatched to your inbox.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Nodemailer dispatch error:", error);
    return NextResponse.json(
      {
        error:
          "We could not send your email automatically. Please reach out to us directly on WhatsApp at 0755740513 or email guideuinfo@gmail.com.",
      },
      { status: 500 }
    );
  }
}
