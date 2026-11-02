export const siteConfig = {
  company: 'MAT TRANSPORT',
  whatsappNumber: '48695574028',
  whatsappLink: 'https://api.whatsapp.com/send?phone=48695574028',
  facebookUrl: 'https://facebook.com/mattransportkrakow',
  instagramUrl: 'https://www.instagram.com/mattransport',
  email: 'biuro@mattransport.pl',
  phoneNumbers: ['+48 695 57 40 28', '+48 601 55 49 81', 'TEL/FAX 12 655 49 81'],
  emailJs: {
    serviceId: 'gmail',
    templateId: 'template_1G20d3s3',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS ?? '',
  },
} as const;
