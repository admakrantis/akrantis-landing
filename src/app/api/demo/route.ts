import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { nome, email, empresa } = body as {
      nome: string;
      email: string;
      empresa: string;
    };

    if (!nome || !email || !empresa) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Akrantis <onboarding@resend.dev>",
      to: "contato@akrantis.com.br",
      replyTo: email,
      subject: `Nova solicitação de demonstração — ${empresa}`,
      html: `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Erro interno ao enviar email." },
      { status: 500 }
    );
  }
}
