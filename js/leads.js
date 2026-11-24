/**
 * AlunoTec - Sistema de Gestão e Captura de Leads
 * Polo Autorizado Cruzeiro do Sul Virtual & Cefe Educa EJA - Araranguá/SC
 */

const AlunoTecConfig = {
  // Dados Oficiais de Contato do Polo AlunoTec
  whatsappNumero: "5548996191212", // (48) 99619-1212
  whatsappFormatado: "(48) 99619-1212",
  emailContato: "cruzeiroadmaru@gmail.com",
  endereco: "Av. Sete de Setembro, 1917 - Centro, Araranguá - SC, 88900-049",
  
  // Horários de Atendimento do Polo Físico
  horarios: {
    seg: "09:30 às 21:00",
    ter: "09:30 às 18:00",
    qua: "09:30 às 21:00",
    qui: "09:30 às 18:00",
    sex: "09:30 às 18:00",
    sab: "Fechado",
    dom: "Fechado"
  },

  // Links Oficiais para a Área do Aluno (Informações.txt)
  portalCruzeiro: "https://novoportal.cruzeirodosul.edu.br/",
  portalCefeEduca: "https://avacefe.com.br/login/index.php",

  // Futuro CRM AlunoTec
  crmWebhookUrl: null
};

// Captura de UTMs e métricas de tráfego (Google Ads, Meta Ads, Instagram)
function getMarketingTracking() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get('utm_source') || 'site_organico',
    medium: urlParams.get('utm_medium') || 'direto',
    campaign: urlParams.get('utm_campaign') || 'polo_alunotec',
    term: urlParams.get('utm_term') || '',
    content: urlParams.get('utm_content') || '',
    pagina_origem: window.location.pathname,
    dispositivo: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    data_hora: new Date().toISOString()
  };
}

// Processamento de Lead com proteção de comissão (WhatsApp direto + storage)
function processarLead(leadData) {
  const tracking = getMarketingTracking();
  
  const payloadCRM = {
    nome: leadData.nome,
    whatsapp: leadData.whatsapp,
    email: leadData.email || '',
    modalidade: leadData.modalidade || 'Geral',
    curso_interesse: leadData.curso_interesse || 'Não informado',
    origem_formulario: leadData.origem || 'formulario_site',
    tracking: tracking
  };

  try {
    const leadsSalvos = JSON.parse(localStorage.getItem('alunotec_leads') || '[]');
    leadsSalvos.push(payloadCRM);
    localStorage.setItem('alunotec_leads', JSON.stringify(leadsSalvos));
  } catch (e) {
    console.warn("Storage local não disponível", e);
  }

  if (AlunoTecConfig.crmWebhookUrl) {
    fetch(AlunoTecConfig.crmWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payloadCRM)
    }).catch(err => console.error("Erro CRM:", err));
  }

  // Montagem da mensagem amigável para o WhatsApp do polo
  let textoWhats = `*Olá, Polo AlunoTec!* 👋\n\n`;
  textoWhats += `Me chamo *${leadData.nome}* e gostaria de informações e bolsas para o curso:\n`;
  if (leadData.curso_interesse) {
    textoWhats += `🎓 *Curso:* ${leadData.curso_interesse}\n`;
  }
  if (leadData.modalidade && leadData.modalidade !== 'Geral') {
    textoWhats += `📌 *Modalidade:* ${leadData.modalidade}\n`;
  }
  if (leadData.email) {
    textoWhats += `✉️ *E-mail:* ${leadData.email}\n`;
  }
  textoWhats += `\nPoderiam me enviar os valores com desconto e como funciona a matrícula com o polo?`;

  const numeroWhats = AlunoTecConfig.whatsappNumero.replace(/\D/g, '');
  const urlFinal = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(textoWhats)}`;

  return {
    crmPayload: payloadCRM,
    whatsappUrl: urlFinal
  };
}

window.AlunoTecLeads = {
  processarLead,
  config: AlunoTecConfig,
  getMarketingTracking
};
