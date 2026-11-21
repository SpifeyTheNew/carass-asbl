/*
 * ORGANES DE GOUVERNANCE — membres à compléter
 * ---------------------------------------------
 * Pour chaque membre, remplissez les champs entre guillemets :
 *  - nom       : ex. "Dr Jean Kabila"
 *  - titre     : diplômes / grade, ex. "PhD en santé publique"
 *  - photo     : chemin de la photo, ex. "assets/equipe/jean-kabila.jpg"
 *                (déposez la photo dans le dossier assets/equipe/)
 *  - bio       : quelques phrases de présentation
 *  - email, telephone, linkedin : facultatifs
 * Un champ laissé vide ("") n'est pas affiché.
 * Pour ajouter un membre, copiez un bloc { ... } et collez-le à la suite (avec une virgule).
 * La composition (nombre de membres) suit les statuts du CARASS.
 */
window.CARASS_GOUVERNANCE = {

  /* Assemblée générale — Statuts, art. 21 à 23 :
     composée de tous les membres effectifs (nombre variable). */
  assemblee: {
    titre: "Assemblée générale",
    intro: "Organe souverain de l'association. Elle définit les orientations, adopte les statuts, approuve les comptes et élit le Conseil d'administration.",
    composition: [
      "Composée exclusivement des membres effectifs de l'association",
      "Se réunit une fois par an en session ordinaire",
      "Membres d'honneur et observateurs : voix consultative, sans droit de vote"
    ],
    vide: "La liste des membres effectifs sera publiée prochainement.",
    membres: [
      /* Ajoutez ici les membres effectifs, par exemple :
      { role: "Membre fondateur", nom: "", titre: "", photo: "", bio: "", email: "", telephone: "", linkedin: "" },
      */
    ]
  },

  /* Conseil d'administration — Statuts, art. 24 à 27 :
     5 à 8 administrateurs, mandat de 5 ans renouvelable.
     Bureau : Président, Vice-président, Secrétaire, Trésorier. */
  conseil: {
    titre: "Conseil d'administration",
    intro: "Organe collégial chargé de l'administration et de la gestion stratégique de l'association.",
    composition: [
      "5 à 8 administrateurs élus par l'Assemblée générale parmi les membres fondateurs",
      "Mandat de 5 ans renouvelable",
      "Bureau : Président, Vice-président, Secrétaire et Trésorier"
    ],
    membres: [
      { role: "Président du Conseil d'administration", nom: "Prof. Erick Mukala Mayoyo", titre: "PhD", photo: "", bio: "",
        mission: "Représentant légal de l'association ; convoque l'Assemblée générale.", email: "", telephone: "", linkedin: "" },
      { role: "Vice-président", nom: "", titre: "", photo: "", bio: "",
        mission: "Seconde le Président et le remplace en cas d'empêchement.", email: "", telephone: "", linkedin: "" },
      { role: "Secrétaire", nom: "", titre: "", photo: "", bio: "",
        mission: "Assure le secrétariat et la tenue des procès-verbaux du Conseil.", email: "", telephone: "", linkedin: "" },
      { role: "Trésorier", nom: "", titre: "", photo: "", bio: "",
        mission: "Veille au suivi des finances et du budget de l'association.", email: "", telephone: "", linkedin: "" },
      { role: "Administrateur", nom: "", titre: "", photo: "", bio: "",
        mission: "Participe à l'administration et aux décisions stratégiques.", email: "", telephone: "", linkedin: "" }
      /* Jusqu'à 3 administrateurs supplémentaires (8 au maximum) :
      ,{ role: "Administrateur", nom: "", titre: "", photo: "", bio: "", mission: "", email: "", telephone: "", linkedin: "" }
      */
    ]
  },

  /* Commission (comité) de contrôle — Statuts, art. 34 et 35 :
     2 à 3 commissaires aux comptes, mandat de 3 ans renouvelable une fois. */
  controle: {
    titre: "Comité de contrôle",
    intro: "Vérifie la régularité des comptes et des opérations financières, contrôle la gestion financière et présente un rapport écrit à l'Assemblée générale.",
    composition: [
      "2 à 3 commissaires aux comptes élus par l'Assemblée générale",
      "Mandat de 3 ans renouvelable une fois",
      "Fonction incompatible avec celle d'administrateur ou de membre de la direction"
    ],
    membres: [
      { role: "Commissaire aux comptes", nom: "", titre: "", photo: "", bio: "",
        mission: "Vérifie les comptes et la gestion financière.", email: "", telephone: "", linkedin: "" },
      { role: "Commissaire aux comptes", nom: "", titre: "", photo: "", bio: "",
        mission: "Vérifie les comptes et la gestion financière.", email: "", telephone: "", linkedin: "" }
      /* 3e commissaire (facultatif) :
      ,{ role: "Commissaire aux comptes", nom: "", titre: "", photo: "", bio: "", mission: "", email: "", telephone: "", linkedin: "" }
      */
    ]
  },

  /* Direction exécutive — Statuts, art. 28 à 31 */
  direction: {
    titre: "Direction exécutive",
    intro: "Organe chargé de la gestion quotidienne et opérationnelle du CARASS, sous l'autorité du Conseil d'administration.",
    composition: [
      "Un Directeur exécutif, docteur à thèse",
      "Trois directeurs adjoints : scientifique, formation, administratif et financier",
      "Une unité de support : assistant administratif et financier, secrétaire"
    ],
    membres: [
      { role: "Directeur exécutif", nom: "", titre: "", photo: "", bio: "",
        mission: "Assure la direction de l'association, met en œuvre le plan d'action, supervise l'ensemble des activités et rend compte au Conseil d'administration.",
        email: "", telephone: "", linkedin: "" },
      { role: "Directeur scientifique", nom: "", titre: "", photo: "", bio: "",
        mission: "Définit et pilote la stratégie scientifique et les projets de recherche ; veille à la valorisation des résultats, à l'innovation et à l'éthique.",
        email: "", telephone: "", linkedin: "" },
      { role: "Directeur de formation et développement des compétences", nom: "", titre: "", photo: "", bio: "",
        mission: "Définit la stratégie pédagogique, conçoit et exécute les plans de formation et de renforcement des capacités.",
        email: "", telephone: "", linkedin: "" },
      { role: "Directeur administratif et financier", nom: "", titre: "", photo: "", bio: "",
        mission: "Met en œuvre la politique administrative et financière, assure la conformité des projets, le suivi des subventions et l'optimisation du budget.",
        email: "", telephone: "", linkedin: "" }
    ]
  }
};
