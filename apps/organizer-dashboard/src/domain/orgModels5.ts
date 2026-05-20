
export type OrgDomain5Model1 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model1(partial?: Partial<OrgDomain5Model1>): OrgDomain5Model1 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-1`,
    label: partial?.label ?? 'OrgDomain5 model 1',
    score: partial?.score ?? 1,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 1, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection1(items: Array<Partial<OrgDomain5Model1>>): OrgDomain5Model1[] {
  return items.map((item, index) => buildOrgDomain5Model1({ ...item, score: item.score ?? index + 1 }));
}


export type OrgDomain5Model2 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model2(partial?: Partial<OrgDomain5Model2>): OrgDomain5Model2 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-2`,
    label: partial?.label ?? 'OrgDomain5 model 2',
    score: partial?.score ?? 2,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 2, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection2(items: Array<Partial<OrgDomain5Model2>>): OrgDomain5Model2[] {
  return items.map((item, index) => buildOrgDomain5Model2({ ...item, score: item.score ?? index + 2 }));
}


export type OrgDomain5Model3 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model3(partial?: Partial<OrgDomain5Model3>): OrgDomain5Model3 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-3`,
    label: partial?.label ?? 'OrgDomain5 model 3',
    score: partial?.score ?? 3,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 3, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection3(items: Array<Partial<OrgDomain5Model3>>): OrgDomain5Model3[] {
  return items.map((item, index) => buildOrgDomain5Model3({ ...item, score: item.score ?? index + 3 }));
}


export type OrgDomain5Model4 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model4(partial?: Partial<OrgDomain5Model4>): OrgDomain5Model4 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-4`,
    label: partial?.label ?? 'OrgDomain5 model 4',
    score: partial?.score ?? 4,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 4, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection4(items: Array<Partial<OrgDomain5Model4>>): OrgDomain5Model4[] {
  return items.map((item, index) => buildOrgDomain5Model4({ ...item, score: item.score ?? index + 4 }));
}


export type OrgDomain5Model5 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model5(partial?: Partial<OrgDomain5Model5>): OrgDomain5Model5 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-5`,
    label: partial?.label ?? 'OrgDomain5 model 5',
    score: partial?.score ?? 5,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 5, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection5(items: Array<Partial<OrgDomain5Model5>>): OrgDomain5Model5[] {
  return items.map((item, index) => buildOrgDomain5Model5({ ...item, score: item.score ?? index + 5 }));
}


export type OrgDomain5Model6 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model6(partial?: Partial<OrgDomain5Model6>): OrgDomain5Model6 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-6`,
    label: partial?.label ?? 'OrgDomain5 model 6',
    score: partial?.score ?? 6,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 6, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection6(items: Array<Partial<OrgDomain5Model6>>): OrgDomain5Model6[] {
  return items.map((item, index) => buildOrgDomain5Model6({ ...item, score: item.score ?? index + 6 }));
}


export type OrgDomain5Model7 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model7(partial?: Partial<OrgDomain5Model7>): OrgDomain5Model7 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-7`,
    label: partial?.label ?? 'OrgDomain5 model 7',
    score: partial?.score ?? 7,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 7, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection7(items: Array<Partial<OrgDomain5Model7>>): OrgDomain5Model7[] {
  return items.map((item, index) => buildOrgDomain5Model7({ ...item, score: item.score ?? index + 7 }));
}


export type OrgDomain5Model8 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model8(partial?: Partial<OrgDomain5Model8>): OrgDomain5Model8 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-8`,
    label: partial?.label ?? 'OrgDomain5 model 8',
    score: partial?.score ?? 8,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 8, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection8(items: Array<Partial<OrgDomain5Model8>>): OrgDomain5Model8[] {
  return items.map((item, index) => buildOrgDomain5Model8({ ...item, score: item.score ?? index + 8 }));
}


export type OrgDomain5Model9 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model9(partial?: Partial<OrgDomain5Model9>): OrgDomain5Model9 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-9`,
    label: partial?.label ?? 'OrgDomain5 model 9',
    score: partial?.score ?? 9,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 9, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection9(items: Array<Partial<OrgDomain5Model9>>): OrgDomain5Model9[] {
  return items.map((item, index) => buildOrgDomain5Model9({ ...item, score: item.score ?? index + 9 }));
}


export type OrgDomain5Model10 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model10(partial?: Partial<OrgDomain5Model10>): OrgDomain5Model10 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-10`,
    label: partial?.label ?? 'OrgDomain5 model 10',
    score: partial?.score ?? 10,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 10, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection10(items: Array<Partial<OrgDomain5Model10>>): OrgDomain5Model10[] {
  return items.map((item, index) => buildOrgDomain5Model10({ ...item, score: item.score ?? index + 10 }));
}


export type OrgDomain5Model11 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model11(partial?: Partial<OrgDomain5Model11>): OrgDomain5Model11 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-11`,
    label: partial?.label ?? 'OrgDomain5 model 11',
    score: partial?.score ?? 11,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 11, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection11(items: Array<Partial<OrgDomain5Model11>>): OrgDomain5Model11[] {
  return items.map((item, index) => buildOrgDomain5Model11({ ...item, score: item.score ?? index + 11 }));
}


export type OrgDomain5Model12 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model12(partial?: Partial<OrgDomain5Model12>): OrgDomain5Model12 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-12`,
    label: partial?.label ?? 'OrgDomain5 model 12',
    score: partial?.score ?? 12,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 12, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection12(items: Array<Partial<OrgDomain5Model12>>): OrgDomain5Model12[] {
  return items.map((item, index) => buildOrgDomain5Model12({ ...item, score: item.score ?? index + 12 }));
}


export type OrgDomain5Model13 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model13(partial?: Partial<OrgDomain5Model13>): OrgDomain5Model13 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-13`,
    label: partial?.label ?? 'OrgDomain5 model 13',
    score: partial?.score ?? 13,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 13, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection13(items: Array<Partial<OrgDomain5Model13>>): OrgDomain5Model13[] {
  return items.map((item, index) => buildOrgDomain5Model13({ ...item, score: item.score ?? index + 13 }));
}


export type OrgDomain5Model14 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model14(partial?: Partial<OrgDomain5Model14>): OrgDomain5Model14 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-14`,
    label: partial?.label ?? 'OrgDomain5 model 14',
    score: partial?.score ?? 14,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 14, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection14(items: Array<Partial<OrgDomain5Model14>>): OrgDomain5Model14[] {
  return items.map((item, index) => buildOrgDomain5Model14({ ...item, score: item.score ?? index + 14 }));
}


export type OrgDomain5Model15 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model15(partial?: Partial<OrgDomain5Model15>): OrgDomain5Model15 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-15`,
    label: partial?.label ?? 'OrgDomain5 model 15',
    score: partial?.score ?? 15,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 15, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection15(items: Array<Partial<OrgDomain5Model15>>): OrgDomain5Model15[] {
  return items.map((item, index) => buildOrgDomain5Model15({ ...item, score: item.score ?? index + 15 }));
}


export type OrgDomain5Model16 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model16(partial?: Partial<OrgDomain5Model16>): OrgDomain5Model16 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-16`,
    label: partial?.label ?? 'OrgDomain5 model 16',
    score: partial?.score ?? 16,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 16, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection16(items: Array<Partial<OrgDomain5Model16>>): OrgDomain5Model16[] {
  return items.map((item, index) => buildOrgDomain5Model16({ ...item, score: item.score ?? index + 16 }));
}


export type OrgDomain5Model17 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model17(partial?: Partial<OrgDomain5Model17>): OrgDomain5Model17 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-17`,
    label: partial?.label ?? 'OrgDomain5 model 17',
    score: partial?.score ?? 17,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 17, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection17(items: Array<Partial<OrgDomain5Model17>>): OrgDomain5Model17[] {
  return items.map((item, index) => buildOrgDomain5Model17({ ...item, score: item.score ?? index + 17 }));
}


export type OrgDomain5Model18 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model18(partial?: Partial<OrgDomain5Model18>): OrgDomain5Model18 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-18`,
    label: partial?.label ?? 'OrgDomain5 model 18',
    score: partial?.score ?? 18,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 18, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection18(items: Array<Partial<OrgDomain5Model18>>): OrgDomain5Model18[] {
  return items.map((item, index) => buildOrgDomain5Model18({ ...item, score: item.score ?? index + 18 }));
}


export type OrgDomain5Model19 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model19(partial?: Partial<OrgDomain5Model19>): OrgDomain5Model19 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-19`,
    label: partial?.label ?? 'OrgDomain5 model 19',
    score: partial?.score ?? 19,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 19, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection19(items: Array<Partial<OrgDomain5Model19>>): OrgDomain5Model19[] {
  return items.map((item, index) => buildOrgDomain5Model19({ ...item, score: item.score ?? index + 19 }));
}


export type OrgDomain5Model20 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model20(partial?: Partial<OrgDomain5Model20>): OrgDomain5Model20 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-20`,
    label: partial?.label ?? 'OrgDomain5 model 20',
    score: partial?.score ?? 20,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 20, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection20(items: Array<Partial<OrgDomain5Model20>>): OrgDomain5Model20[] {
  return items.map((item, index) => buildOrgDomain5Model20({ ...item, score: item.score ?? index + 20 }));
}


export type OrgDomain5Model21 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model21(partial?: Partial<OrgDomain5Model21>): OrgDomain5Model21 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-21`,
    label: partial?.label ?? 'OrgDomain5 model 21',
    score: partial?.score ?? 21,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 21, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection21(items: Array<Partial<OrgDomain5Model21>>): OrgDomain5Model21[] {
  return items.map((item, index) => buildOrgDomain5Model21({ ...item, score: item.score ?? index + 21 }));
}


export type OrgDomain5Model22 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model22(partial?: Partial<OrgDomain5Model22>): OrgDomain5Model22 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-22`,
    label: partial?.label ?? 'OrgDomain5 model 22',
    score: partial?.score ?? 22,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 22, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection22(items: Array<Partial<OrgDomain5Model22>>): OrgDomain5Model22[] {
  return items.map((item, index) => buildOrgDomain5Model22({ ...item, score: item.score ?? index + 22 }));
}


export type OrgDomain5Model23 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model23(partial?: Partial<OrgDomain5Model23>): OrgDomain5Model23 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-23`,
    label: partial?.label ?? 'OrgDomain5 model 23',
    score: partial?.score ?? 23,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 23, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection23(items: Array<Partial<OrgDomain5Model23>>): OrgDomain5Model23[] {
  return items.map((item, index) => buildOrgDomain5Model23({ ...item, score: item.score ?? index + 23 }));
}


export type OrgDomain5Model24 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model24(partial?: Partial<OrgDomain5Model24>): OrgDomain5Model24 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-24`,
    label: partial?.label ?? 'OrgDomain5 model 24',
    score: partial?.score ?? 24,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 24, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection24(items: Array<Partial<OrgDomain5Model24>>): OrgDomain5Model24[] {
  return items.map((item, index) => buildOrgDomain5Model24({ ...item, score: item.score ?? index + 24 }));
}


export type OrgDomain5Model25 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model25(partial?: Partial<OrgDomain5Model25>): OrgDomain5Model25 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-25`,
    label: partial?.label ?? 'OrgDomain5 model 25',
    score: partial?.score ?? 25,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 25, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection25(items: Array<Partial<OrgDomain5Model25>>): OrgDomain5Model25[] {
  return items.map((item, index) => buildOrgDomain5Model25({ ...item, score: item.score ?? index + 25 }));
}


export type OrgDomain5Model26 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model26(partial?: Partial<OrgDomain5Model26>): OrgDomain5Model26 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-26`,
    label: partial?.label ?? 'OrgDomain5 model 26',
    score: partial?.score ?? 26,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 26, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection26(items: Array<Partial<OrgDomain5Model26>>): OrgDomain5Model26[] {
  return items.map((item, index) => buildOrgDomain5Model26({ ...item, score: item.score ?? index + 26 }));
}


export type OrgDomain5Model27 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model27(partial?: Partial<OrgDomain5Model27>): OrgDomain5Model27 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-27`,
    label: partial?.label ?? 'OrgDomain5 model 27',
    score: partial?.score ?? 27,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 27, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection27(items: Array<Partial<OrgDomain5Model27>>): OrgDomain5Model27[] {
  return items.map((item, index) => buildOrgDomain5Model27({ ...item, score: item.score ?? index + 27 }));
}


export type OrgDomain5Model28 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model28(partial?: Partial<OrgDomain5Model28>): OrgDomain5Model28 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-28`,
    label: partial?.label ?? 'OrgDomain5 model 28',
    score: partial?.score ?? 28,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 28, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection28(items: Array<Partial<OrgDomain5Model28>>): OrgDomain5Model28[] {
  return items.map((item, index) => buildOrgDomain5Model28({ ...item, score: item.score ?? index + 28 }));
}


export type OrgDomain5Model29 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model29(partial?: Partial<OrgDomain5Model29>): OrgDomain5Model29 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-29`,
    label: partial?.label ?? 'OrgDomain5 model 29',
    score: partial?.score ?? 29,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 29, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection29(items: Array<Partial<OrgDomain5Model29>>): OrgDomain5Model29[] {
  return items.map((item, index) => buildOrgDomain5Model29({ ...item, score: item.score ?? index + 29 }));
}


export type OrgDomain5Model30 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model30(partial?: Partial<OrgDomain5Model30>): OrgDomain5Model30 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-30`,
    label: partial?.label ?? 'OrgDomain5 model 30',
    score: partial?.score ?? 30,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 30, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection30(items: Array<Partial<OrgDomain5Model30>>): OrgDomain5Model30[] {
  return items.map((item, index) => buildOrgDomain5Model30({ ...item, score: item.score ?? index + 30 }));
}


export type OrgDomain5Model31 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model31(partial?: Partial<OrgDomain5Model31>): OrgDomain5Model31 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-31`,
    label: partial?.label ?? 'OrgDomain5 model 31',
    score: partial?.score ?? 31,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 31, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection31(items: Array<Partial<OrgDomain5Model31>>): OrgDomain5Model31[] {
  return items.map((item, index) => buildOrgDomain5Model31({ ...item, score: item.score ?? index + 31 }));
}


export type OrgDomain5Model32 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model32(partial?: Partial<OrgDomain5Model32>): OrgDomain5Model32 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-32`,
    label: partial?.label ?? 'OrgDomain5 model 32',
    score: partial?.score ?? 32,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 32, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection32(items: Array<Partial<OrgDomain5Model32>>): OrgDomain5Model32[] {
  return items.map((item, index) => buildOrgDomain5Model32({ ...item, score: item.score ?? index + 32 }));
}


export type OrgDomain5Model33 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model33(partial?: Partial<OrgDomain5Model33>): OrgDomain5Model33 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-33`,
    label: partial?.label ?? 'OrgDomain5 model 33',
    score: partial?.score ?? 33,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 33, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection33(items: Array<Partial<OrgDomain5Model33>>): OrgDomain5Model33[] {
  return items.map((item, index) => buildOrgDomain5Model33({ ...item, score: item.score ?? index + 33 }));
}


export type OrgDomain5Model34 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model34(partial?: Partial<OrgDomain5Model34>): OrgDomain5Model34 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-34`,
    label: partial?.label ?? 'OrgDomain5 model 34',
    score: partial?.score ?? 34,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 34, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection34(items: Array<Partial<OrgDomain5Model34>>): OrgDomain5Model34[] {
  return items.map((item, index) => buildOrgDomain5Model34({ ...item, score: item.score ?? index + 34 }));
}


export type OrgDomain5Model35 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model35(partial?: Partial<OrgDomain5Model35>): OrgDomain5Model35 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-35`,
    label: partial?.label ?? 'OrgDomain5 model 35',
    score: partial?.score ?? 35,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 35, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection35(items: Array<Partial<OrgDomain5Model35>>): OrgDomain5Model35[] {
  return items.map((item, index) => buildOrgDomain5Model35({ ...item, score: item.score ?? index + 35 }));
}


export type OrgDomain5Model36 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model36(partial?: Partial<OrgDomain5Model36>): OrgDomain5Model36 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-36`,
    label: partial?.label ?? 'OrgDomain5 model 36',
    score: partial?.score ?? 36,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 36, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection36(items: Array<Partial<OrgDomain5Model36>>): OrgDomain5Model36[] {
  return items.map((item, index) => buildOrgDomain5Model36({ ...item, score: item.score ?? index + 36 }));
}


export type OrgDomain5Model37 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain5Model37(partial?: Partial<OrgDomain5Model37>): OrgDomain5Model37 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain5-37`,
    label: partial?.label ?? 'OrgDomain5 model 37',
    score: partial?.score ?? 37,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 37, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain5Collection37(items: Array<Partial<OrgDomain5Model37>>): OrgDomain5Model37[] {
  return items.map((item, index) => buildOrgDomain5Model37({ ...item, score: item.score ?? index + 37 }));
}
