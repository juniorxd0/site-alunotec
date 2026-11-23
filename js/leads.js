/**
 * AlunoTec - Sistema de Gestão e Captura de Leads
 * Desenvolvido para máxima conversão e preparado para integração com futuro CRM da AlunoTec
 */

const AlunoTecConfig = {
  // Configuração padrão dos canais de atendimento (podem ser atualizados a qualquer momento)
  whatsappDefault: "5511999999999", // Atualize com o número oficial com DDD
  emailContato: "contato@alunotec.com.br",
  
  // Endpoint do futuro CRM AlunoTec (quando estiver pronto, basta descomentar e apontar)
  crmWebhookUrl: null, // Exemplo: "https://crm.alunotec.com.br/api/leads"

  // Links dos Portais de Alunos
  portalCruzeiro: "https://www.cruzeirodosulvirtual.com.br/", // Link de acesso direto do aluno
  portalCefeEduca: "https://www.cefeduca.com.br/" // Link de acesso direto do aluno
};

// Captura automática de parâmetros UTM da URL (Google Ads, Facebook Ads, Instagram, etc.)
function getMarketingTracking() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get('utm_source') || 'site_organico',
    medium: urlParams.get('utm_medium') || 'direto',
    campaign: urlParams.get('utm_campaign') || 'institucional',
    term: urlParams.get('utm_term') || '',
    content: urlParams.get('utm_content') || '',
    pagina_origem: window.location.pathname,
    dispositivo: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    data_hora: new Date().toISOString()
  };
}

// Processa o Lead e encaminha para o WhatsApp com mensagem persuasiva e armazena para o CRM
function processarLead(leadData) {
  const tracking = getMarketingTracking();
  
  // Objeto estruturado padrão para o CRM da AlunoTec
  const payloadCRM = {
    nome: leadData.nome,
    whatsapp: leadData.whatsapp,
    email: leadData.email || '',
    modalidade: leadData.modalidade || 'Geral',
    curso_interesse: leadData.curso_interesse || 'Não informado',
    origem_formulario: leadData.origem || 'formulario_principal',
    tracking: tracking
  };

  // 1. Armazenamento local (backup de leads no navegador)
  try {
    const leadsSalvos = JSON.parse(localStorage.getItem('alunotec_leads') || '[]');
    leadsSalvos.push(payloadCRM);
    localStorage.setItem('alunotec_leads', JSON.stringify(leadsSalvos));
  } catch (e) {
    console.warn("Storage não disponível", e);
  }

  // 2. Disparo para futuro CRM se configurado
  if (AlunoTecConfig.crmWebhookUrl) {
    fetch(AlunoTecConfig.crmWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payloadCRM)
    }).catch(err => console.error("Erro ao enviar para CRM:", err));
  }

  // 3. Montagem da mensagem humanizada e direta para o WhatsApp da AlunoTec
  let textoWhats = `*Olá, Polo AlunoTec!* 👋\n\n`;
  textoWhats += `Me chamo *${leadData.nome}* e tenho interesse em me matricular com bolsa!\n`;
  if (leadData.modalidade) {
    textoWhats += `📌 *Modalidade:* ${leadData.modalidade}\n`;
  }
  if (leadData.curso_interesse && leadData.curso_interesse !== 'Geral') {
    textoWhats += `🎓 *Curso de Interesse:* ${leadData.curso_interesse}\n`;
  }
  if (leadData.email) {
    textoWhats += `✉️ *E-mail:* ${leadData.email}\n`;
  }
  textoWhats += `\nPoderiam me passar os valores com desconto e como funciona a matrícula?`;

  const numeroWhats = AlunoTecConfig.whatsappDefault.replace(/\D/g, '');
  const urlFinal = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(textoWhats)}`;

  return {
    crmPayload: payloadCRM,
    whatsappUrl: urlFinal
  };
}

// Exporta globalmente para uso no site
window.AlunoTecLeads = {
  processarLead,
  config: AlunoTecConfig,
  getMarketingTracking
};
