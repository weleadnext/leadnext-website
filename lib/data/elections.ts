export interface ElectionResult {
  year: number;
  date: string;
  registeredVoters: number;
  votesCast?: number;
  turnoutPercent: number;
  winner: {
    name: string;
    party: string;
    votes: number;
  };
  runnerUp: {
    name: string;
    party: string;
    votes: number;
  };
  thirdPlace?: {
    name: string;
    party: string;
    votes: number;
  };
}

export const ELECTION_DATA: ElectionResult[] = [
  {
    year: 1999,
    date: "27 Feb 1999",
    registeredVoters: 57938945,
    votesCast: 30280052,
    turnoutPercent: 52.26,
    winner: {
      name: "Olusegun Obasanjo",
      party: "PDP",
      votes: 18738154
    },
    runnerUp: {
      name: "Olu Falae",
      party: "AD-APP",
      votes: 11110287
    }
  },
  {
    year: 2003,
    date: "19 Apr 2003",
    registeredVoters: 60823022,
    turnoutPercent: 69.08,
    votesCast: 42018735, // Approximate based on turnout
    winner: {
      name: "Olusegun Obasanjo",
      party: "PDP",
      votes: 24456140
    },
    runnerUp: {
      name: "Muhammadu Buhari",
      party: "ANPP",
      votes: 12710022
    },
    thirdPlace: {
      name: "Chukwuemeka Odumegwu Ojukwu",
      party: "APGA",
      votes: 1297445 // Precise figure from historical records for accuracy
    }
  },
  {
    year: 2007,
    date: "21 Apr 2007",
    registeredVoters: 61567036,
    turnoutPercent: 57.00,
    votesCast: 35397517, // Approximate based on turnout
    winner: {
      name: "Umaru Musa Yar'Adua",
      party: "PDP",
      votes: 24638063
    },
    runnerUp: {
      name: "Muhammadu Buhari",
      party: "ANPP",
      votes: 6605299
    },
    thirdPlace: {
      name: "Atiku Abubakar",
      party: "AC",
      votes: 2637848
    }
  },
  {
    year: 2011,
    date: "16 Apr 2011",
    registeredVoters: 73528040,
    turnoutPercent: 53.68,
    votesCast: 39469484,
    winner: {
      name: "Goodluck Jonathan",
      party: "PDP",
      votes: 22495187
    },
    runnerUp: {
      name: "Muhammadu Buhari",
      party: "CPC",
      votes: 12214853
    },
    thirdPlace: {
      name: "Nuhu Ribadu",
      party: "ACN",
      votes: 2079151
    }
  },
  {
    year: 2015,
    date: "28-29 Mar 2015",
    registeredVoters: 68833476,
    turnoutPercent: 43.65,
    votesCast: 29432083,
    winner: {
      name: "Muhammadu Buhari",
      party: "APC",
      votes: 15424921
    },
    runnerUp: {
      name: "Goodluck Jonathan",
      party: "PDP",
      votes: 12853162
    }
  },
  {
    year: 2019,
    date: "23-24 Feb 2019",
    registeredVoters: 82344107,
    votesCast: 28614190,
    turnoutPercent: 34.75,
    winner: {
      name: "Muhammadu Buhari",
      party: "APC",
      votes: 15191847
    },
    runnerUp: {
      name: "Atiku Abubakar",
      party: "PDP",
      votes: 11262978
    },
    thirdPlace: {
      name: "Felix Nicholas",
      party: "PCP",
      votes: 110196
    }
  },
  {
    year: 2023,
    date: "25 Feb 2023",
    registeredVoters: 93469008,
    votesCast: 24965218,
    turnoutPercent: 26.71,
    winner: {
      name: "Bola Ahmed Tinubu",
      party: "APC",
      votes: 8794726
    },
    runnerUp: {
      name: "Atiku Abubakar",
      party: "PDP",
      votes: 6984520
    },
    thirdPlace: {
      name: "Peter Obi",
      party: "LP",
      votes: 6101533
    }
  }
];

export const PARTY_COLORS: Record<string, string> = {
  PDP: "#00a651", // Green/Red/White usually, green dominant
  APC: "#87CEEB", // Broom colors, using a blue variant/green/red - often associated with broom. Let's use a distinct color. Actually APC flag is Green White Blue Red. Let's pick a distinct blue or teal for contrast with PDP green.
  "AD-APP": "#800080",
  ANPP: "#0000FF",
  APGA: "#FFA500", // Cock - Yellow/Orange
  AC: "#000000",
  CPC: "#4169E1",
  ACN: "#000000",
  LP: "#FF0000", // Labour Party Red? Or Green/White. LP logo is Wheel/Family. Often associated with Green/Red. Let's use Red to distinguish from PDP Green.
  PCP: "#808080"
};

// Adjusted colors for the project theme if needed
export const CHART_COLORS = {
  PDP: "#008751", // Nigeria Green
  APC: "#46B8E9", // Light Blue
  LP: "#D43535", // Red
  ANPP: "#333333",
  CPC: "#555555",
  Other: "#999999"
};
