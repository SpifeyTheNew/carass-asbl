/*
 * ORGANES DE GOUVERNANCE — fiches des membres
 * ============================================
 * Chaque organe contient le NOMBRE MAXIMUM de membres prévu par les statuts :
 *   - Conseil d'administration : 8 (art. 24)
 *   - Comité de contrôle       : 3 (art. 34)
 *   - Direction exécutive      : 4 directeurs + 3 membres de l'unité de support (art. 28)
 *   - Assemblée générale       : tous les membres effectifs, sans maximum (art. 21)
 *     -> ajoutez autant de blocs { ... } que nécessaire dans "membres".
 *
 * CHAMPS DE CHAQUE FICHE (laisser "" si inconnu : le champ ne s'affiche pas)
 *   role        : poste occupé
 *   nom         : ex. "Dr Jean Kabila"
 *   titre       : diplômes / grade, ex. "PhD en santé publique"
 *   specialite  : domaine d'expertise
 *   institution : établissement ou fonction actuelle
 *   pays        : ex. "RD Congo"
 *   photo       : ex. "assets/equipe/jean-kabila.jpg"
 *                 -> déposez la photo (format carré ou portrait) dans site/assets/equipe/
 *   bio         : présentation en quelques phrases
 *   experience  : parcours, années d'expérience, réalisations
 *   mission     : rôle dans le CARASS (déjà rempli d'après les statuts)
 *   email, telephone, linkedin : coordonnées (facultatives)
 */
window.CARASS_GOUVERNANCE = {
  "assemblee": {
    "titre": "Assemblée générale",
    "intro": "Organe souverain de l'association. Elle définit les orientations, adopte les statuts, approuve les comptes et élit le Conseil d'administration.",
    "composition": [
      "Tous les membres effectifs de l'association (pas de nombre maximum)",
      "Se réunit une fois par an en session ordinaire",
      "Membres d'honneur et observateurs : voix consultative, sans droit de vote"
    ],
    "vide": "La liste des membres effectifs sera publiée prochainement.",
    "membres": []
  },
  "conseil": {
    "titre": "Conseil d'administration",
    "intro": "Organe collégial chargé de l'administration et de la gestion stratégique de l'association.",
    "composition": [
      "8 administrateurs au maximum (5 au minimum), élus parmi les membres fondateurs",
      "Mandat de 5 ans renouvelable",
      "Bureau : Président, Vice-président, Secrétaire et Trésorier"
    ],
    "membres": [
      {
        "role": "Président du Conseil d'administration",
        "nom": "Prof. Erick Mukala Mayoyo",
        "titre": "PhD",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Représentant légal de l'association ; convoque l'Assemblée générale.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Vice-président",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Seconde le Président et le remplace en cas d'empêchement.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Secrétaire",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Assure le secrétariat et la tenue des procès-verbaux du Conseil.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Trésorier",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Veille au suivi des finances et du budget de l'association.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Administrateur",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Participe à l'administration et aux décisions stratégiques de l'association.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Administrateur",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Participe à l'administration et aux décisions stratégiques de l'association.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Administrateur",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Participe à l'administration et aux décisions stratégiques de l'association.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Administrateur",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Participe à l'administration et aux décisions stratégiques de l'association.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      }
    ]
  },
  "controle": {
    "titre": "Comité de contrôle",
    "intro": "Vérifie la régularité des comptes et des opérations financières, contrôle la gestion financière et présente un rapport écrit à l'Assemblée générale.",
    "composition": [
      "3 commissaires aux comptes au maximum (2 au minimum), élus par l'Assemblée générale",
      "Mandat de 3 ans renouvelable une fois",
      "Fonction incompatible avec celle d'administrateur ou de membre de la direction"
    ],
    "membres": [
      {
        "role": "Commissaire aux comptes",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Vérifie la régularité des comptes et contrôle la gestion financière.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Commissaire aux comptes",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Vérifie la régularité des comptes et contrôle la gestion financière.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Commissaire aux comptes",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Vérifie la régularité des comptes et contrôle la gestion financière.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      }
    ]
  },
  "direction": {
    "titre": "Direction exécutive",
    "intro": "Organe chargé de la gestion quotidienne et opérationnelle du CARASS, sous l'autorité du Conseil d'administration.",
    "composition": [
      "Un Directeur exécutif, docteur à thèse",
      "Trois directeurs adjoints : scientifique, formation, administratif et financier",
      "Unité de support : 3 membres au maximum"
    ],
    "membres": [
      {
        "role": "Directeur exécutif",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Assure la direction de l'association, met en œuvre le plan d'action, supervise l'ensemble des activités et rend compte au Conseil d'administration.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Directeur scientifique",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Définit et pilote la stratégie scientifique et les projets de recherche ; veille à la valorisation des résultats, à l'innovation et à l'éthique.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Directeur de formation et développement des compétences",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Définit la stratégie pédagogique, conçoit et exécute les plans de formation et de renforcement des capacités.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Directeur administratif et financier",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Met en œuvre la politique administrative et financière, assure la conformité des projets, le suivi des subventions et l'optimisation du budget.",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Assistant administratif et financier",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Appuie la gestion administrative et financière au quotidien (unité de support).",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Secrétaire",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Assure le secrétariat de la Direction exécutive (unité de support).",
        "email": "",
        "telephone": "",
        "linkedin": ""
      },
      {
        "role": "Chargé de la logistique",
        "nom": "",
        "titre": "",
        "specialite": "",
        "institution": "",
        "pays": "",
        "photo": "",
        "bio": "",
        "experience": "",
        "mission": "Assure l'appui logistique aux activités (unité de support).",
        "email": "",
        "telephone": "",
        "linkedin": ""
      }
    ]
  }
};
