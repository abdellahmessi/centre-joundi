// All editable center content lives here. Paths are relative to the site root.
// Use approved real photographs only. null means the asset is not yet supplied.
export const center = {
  name: 'Centre Joundi de Soutien', phone: '+212 607-064982', whatsapp: '212607064982',
  address: 'Hay El Salam', city: 'Safi, Maroc', instagram: 'centre_joundi',
  logo: 'assets/images/logo/centre-joundi.png',
  heroImage: null, heroImageAlt: 'Une salle de cours du Centre Joundi',
  aboutImage: 'assets/images/center/classroom.webp', aboutImageAlt: 'Cours au Centre Joundi à Safi : deux enseignants au tableau devant les élèves',
  preparationImage: null, preparationImageAlt: 'Une séance de préparation au BAC au Centre Joundi',
  mapsEmbedUrl: null, // Exact Google Maps embed URL once verified.
  registrationMessage: "Bonjour Centre Joundi, je souhaite avoir plus d'informations concernant les cours et l'inscription."
};
export const teachers = [
  { id: 'joundi', name: 'Prof. Joundi', subject: 'Français', levels: ['1BAC'], detail: 'Préparation à l’examen régional', photo: 'assets/images/teachers/joundi.webp', width: 400, height: 600, position: '50% 0%' },
  { id: 'cheikhi', name: 'Prof. Ayoub Cheikhi', subject: 'Physique-Chimie', levels: ['1BAC', '2BAC'], detail: 'Filières scientifiques', photo: 'assets/images/teachers/cheikhi.webp', width: 345, height: 580, position: '50% 0%' },
  { id: 'lahmoudi', name: 'Prof. Lahmoudi', subject: 'Mathématiques', levels: ['1BAC', '2BAC'], detail: 'Filières scientifiques', photo: 'assets/images/teachers/lahmoudi.webp', width: 383, height: 600, position: '50% 0%' },
  { id: 'arkhis', name: 'Prof. Taha Arkhis', subject: 'Économie', levels: ['1BAC', '2BAC'], detail: 'Filières économiques', photo: 'assets/images/teachers/arkhis.webp', width: 400, height: 600, position: '50% 0%' },
  { id: 'kamal', name: 'Teacher Kamal', subject: 'Anglais', levels: ['2BAC'], detail: 'Préparation à l’examen national', photo: 'assets/images/teachers/kamal.webp', width: 386, height: 608, position: '50% 0%' },
  { id: 'benani', name: 'Prof. Benani', subject: 'SVT', levels: ['2BAC'], detail: 'Filières scientifiques', photo: 'assets/images/teachers/benani.webp', width: 397, height: 597, position: '50% 0%' },
  { id: 'amine', name: 'Prof. Amine', subject: 'Philosophie / Arabe', levels: ['1BAC', '2BAC'], detail: 'Selon votre filière', photo: 'assets/images/teachers/amine.webp', width: 374, height: 602, position: '50% 0%' }
];
export const subjects = [
  { name: 'Mathématiques', icon: 'sigma', levels: ['1BAC', '2BAC'] },
  { name: 'Physique-Chimie', icon: 'atom', levels: ['1BAC', '2BAC'] },
  { name: 'SVT', icon: 'leaf', levels: ['2BAC'] },
  { name: 'Français', icon: 'book', levels: ['1BAC'] },
  { name: 'Anglais', icon: 'languages', levels: ['2BAC'] },
  { name: 'Philosophie', icon: 'thought', levels: ['1BAC', '2BAC'] },
  { name: 'Arabe', icon: 'pen', levels: ['1BAC', '2BAC'] },
  { name: 'Économie', icon: 'chart', levels: ['1BAC', '2BAC'] }
];
// Never publish unconfirmed class times. day must match a French day below.
// { id: 'unique-id', day: 'Lundi', level: '1BAC', subject: 'Français', start: '17:00', end: '19:00', teacher: 'Prof. Joundi' }
export const schedules = [];
// Add a PDF to assets/resources, then add its path to documents.
// Document: { title: 'Titre du document', type: 'Cours', level: '2BAC', url: 'assets/resources/document.pdf' }
export const resources = [
  { subject: 'Mathématiques', icon: 'sigma', documents: [] },
  { subject: 'Physique-Chimie', icon: 'atom', documents: [] },
  { subject: 'SVT', icon: 'leaf', documents: [] },
  { subject: 'Français', icon: 'book', documents: [] }
];
// { src: 'assets/gallery/classroom.webp', alt: 'Description précise', caption: 'Une séance au centre' }
export const gallery = [
  { src: 'assets/images/center/classroom.webp', alt: 'Deux enseignants au tableau devant les élèves du Centre Joundi à Safi', caption: 'Au cœur des cours', width: 195, height: 228, position: '50% 35%' },
  { src: 'assets/images/gallery/educational-event.webp', alt: 'Un enseignant s’adresse aux participants dans un auditorium', caption: 'Des moments à partager', width: 200, height: 228, position: '50% 50%' },
  { src: 'assets/images/gallery/team-event.webp', alt: 'Un groupe réuni sur scène avec des certificats lors d’un événement', caption: 'Ensemble, au-delà des cours', width: 196, height: 153, position: '50% 40%' }
];
// Only approved, authentic quotes: { quote: '...', name: '...', detail: 'Élève de 2BAC' }
export const testimonials = [];
// Optional: { text: 'Annonce vérifiée', link: '#planning', label: 'En savoir plus' }
export const announcement = null;
