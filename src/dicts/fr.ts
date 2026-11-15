import type { dictRecord } from '../types.js'

export const dict: dictRecord = {
  // Réponses informatives
  100: 'Continuer',
  101: 'Changement de protocole',
  102: 'Traitement en cours',
  103: 'Premiers indices',
  104: 'Reprise de téléversement prise en charge',

  // Réponses de succès
  200: 'OK',
  201: 'Créé',
  202: 'Accepté',
  203: 'Informations non autoritatives',
  204: 'Aucun contenu',
  205: 'Réinitialiser le contenu',
  206: 'Contenu partiel',
  207: 'Multi-statuts',
  208: 'Déjà signalé',
  226: 'IM utilisé',

  // Messages de redirection
  300: 'Choix multiples',
  301: 'Déplacé définitivement',
  302: 'Trouvé',
  303: 'Voir ailleurs',
  304: 'Non modifié',
  305: 'Utiliser un proxy', // Obsolète
  306: 'Changer de proxy', // Inutilisé
  307: 'Redirection temporaire',
  308: 'Redirection permanente',

  // Réponses d’erreur côté client
  400: 'Requête incorrecte',
  401: 'Non autorisé',
  402: 'Paiement requis',
  403: 'Interdit',
  404: 'Non trouvé',
  405: 'Méthode non autorisée',
  406: 'Non acceptable',
  407: 'Authentification de proxy requise',
  408: 'Délai d’attente de la requête dépassé',
  409: 'Conflit',
  410: 'Disparu',
  411: 'Longueur requise',
  412: 'Précondition non remplie',
  413: 'Contenu trop volumineux',
  414: 'URI trop long',
  415: 'Type de média non pris en charge',
  416: 'Plage non satisfiable',
  417: 'Échec de l’attente',
  418: 'Je suis une théière',
  421: 'Requête mal dirigée',
  422: 'Contenu non traitable',
  423: 'Verrouillé',
  424: 'Échec de la dépendance',
  425: 'Trop tôt',
  426: 'Mise à niveau requise',
  428: 'Précondition requise',
  429: 'Trop de requêtes',
  431: 'Champs d’en-tête de requête trop volumineux',
  451: 'Indisponible pour des raisons légales',

  // Réponses d’erreur côté serveur
  500: 'Erreur interne du serveur',
  501: 'Non implémenté',
  502: 'Mauvaise passerelle',
  503: 'Service indisponible',
  504: 'Délai d’attente de la passerelle',
  505: 'Version HTTP non prise en charge',
  506: 'La variante négocie également',
  507: 'Stockage insuffisant',
  508: 'Boucle détectée',
  510: 'Non étendu',
  511: 'Authentification réseau requise'
}
