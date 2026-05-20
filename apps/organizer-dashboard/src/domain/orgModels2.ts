
export type OrgDomain2Model1 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model1(partial?: Partial<OrgDomain2Model1>): OrgDomain2Model1 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-1`,
    label: partial?.label ?? 'OrgDomain2 model 1',
    score: partial?.score ?? 1,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 1, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection1(items: Array<Partial<OrgDomain2Model1>>): OrgDomain2Model1[] {
  return items.map((item, index) => buildOrgDomain2Model1({ ...item, score: item.score ?? index + 1 }));
}


export type OrgDomain2Model2 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model2(partial?: Partial<OrgDomain2Model2>): OrgDomain2Model2 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-2`,
    label: partial?.label ?? 'OrgDomain2 model 2',
    score: partial?.score ?? 2,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 2, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection2(items: Array<Partial<OrgDomain2Model2>>): OrgDomain2Model2[] {
  return items.map((item, index) => buildOrgDomain2Model2({ ...item, score: item.score ?? index + 2 }));
}


export type OrgDomain2Model3 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model3(partial?: Partial<OrgDomain2Model3>): OrgDomain2Model3 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-3`,
    label: partial?.label ?? 'OrgDomain2 model 3',
    score: partial?.score ?? 3,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 3, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection3(items: Array<Partial<OrgDomain2Model3>>): OrgDomain2Model3[] {
  return items.map((item, index) => buildOrgDomain2Model3({ ...item, score: item.score ?? index + 3 }));
}


export type OrgDomain2Model4 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model4(partial?: Partial<OrgDomain2Model4>): OrgDomain2Model4 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-4`,
    label: partial?.label ?? 'OrgDomain2 model 4',
    score: partial?.score ?? 4,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 4, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection4(items: Array<Partial<OrgDomain2Model4>>): OrgDomain2Model4[] {
  return items.map((item, index) => buildOrgDomain2Model4({ ...item, score: item.score ?? index + 4 }));
}


export type OrgDomain2Model5 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model5(partial?: Partial<OrgDomain2Model5>): OrgDomain2Model5 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-5`,
    label: partial?.label ?? 'OrgDomain2 model 5',
    score: partial?.score ?? 5,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 5, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection5(items: Array<Partial<OrgDomain2Model5>>): OrgDomain2Model5[] {
  return items.map((item, index) => buildOrgDomain2Model5({ ...item, score: item.score ?? index + 5 }));
}


export type OrgDomain2Model6 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model6(partial?: Partial<OrgDomain2Model6>): OrgDomain2Model6 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-6`,
    label: partial?.label ?? 'OrgDomain2 model 6',
    score: partial?.score ?? 6,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 6, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection6(items: Array<Partial<OrgDomain2Model6>>): OrgDomain2Model6[] {
  return items.map((item, index) => buildOrgDomain2Model6({ ...item, score: item.score ?? index + 6 }));
}


export type OrgDomain2Model7 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model7(partial?: Partial<OrgDomain2Model7>): OrgDomain2Model7 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-7`,
    label: partial?.label ?? 'OrgDomain2 model 7',
    score: partial?.score ?? 7,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 7, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection7(items: Array<Partial<OrgDomain2Model7>>): OrgDomain2Model7[] {
  return items.map((item, index) => buildOrgDomain2Model7({ ...item, score: item.score ?? index + 7 }));
}


export type OrgDomain2Model8 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model8(partial?: Partial<OrgDomain2Model8>): OrgDomain2Model8 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-8`,
    label: partial?.label ?? 'OrgDomain2 model 8',
    score: partial?.score ?? 8,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 8, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection8(items: Array<Partial<OrgDomain2Model8>>): OrgDomain2Model8[] {
  return items.map((item, index) => buildOrgDomain2Model8({ ...item, score: item.score ?? index + 8 }));
}


export type OrgDomain2Model9 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model9(partial?: Partial<OrgDomain2Model9>): OrgDomain2Model9 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-9`,
    label: partial?.label ?? 'OrgDomain2 model 9',
    score: partial?.score ?? 9,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 9, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection9(items: Array<Partial<OrgDomain2Model9>>): OrgDomain2Model9[] {
  return items.map((item, index) => buildOrgDomain2Model9({ ...item, score: item.score ?? index + 9 }));
}


export type OrgDomain2Model10 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model10(partial?: Partial<OrgDomain2Model10>): OrgDomain2Model10 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-10`,
    label: partial?.label ?? 'OrgDomain2 model 10',
    score: partial?.score ?? 10,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 10, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection10(items: Array<Partial<OrgDomain2Model10>>): OrgDomain2Model10[] {
  return items.map((item, index) => buildOrgDomain2Model10({ ...item, score: item.score ?? index + 10 }));
}


export type OrgDomain2Model11 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model11(partial?: Partial<OrgDomain2Model11>): OrgDomain2Model11 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-11`,
    label: partial?.label ?? 'OrgDomain2 model 11',
    score: partial?.score ?? 11,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 11, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection11(items: Array<Partial<OrgDomain2Model11>>): OrgDomain2Model11[] {
  return items.map((item, index) => buildOrgDomain2Model11({ ...item, score: item.score ?? index + 11 }));
}


export type OrgDomain2Model12 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model12(partial?: Partial<OrgDomain2Model12>): OrgDomain2Model12 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-12`,
    label: partial?.label ?? 'OrgDomain2 model 12',
    score: partial?.score ?? 12,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 12, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection12(items: Array<Partial<OrgDomain2Model12>>): OrgDomain2Model12[] {
  return items.map((item, index) => buildOrgDomain2Model12({ ...item, score: item.score ?? index + 12 }));
}


export type OrgDomain2Model13 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model13(partial?: Partial<OrgDomain2Model13>): OrgDomain2Model13 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-13`,
    label: partial?.label ?? 'OrgDomain2 model 13',
    score: partial?.score ?? 13,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 13, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection13(items: Array<Partial<OrgDomain2Model13>>): OrgDomain2Model13[] {
  return items.map((item, index) => buildOrgDomain2Model13({ ...item, score: item.score ?? index + 13 }));
}


export type OrgDomain2Model14 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model14(partial?: Partial<OrgDomain2Model14>): OrgDomain2Model14 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-14`,
    label: partial?.label ?? 'OrgDomain2 model 14',
    score: partial?.score ?? 14,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 14, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection14(items: Array<Partial<OrgDomain2Model14>>): OrgDomain2Model14[] {
  return items.map((item, index) => buildOrgDomain2Model14({ ...item, score: item.score ?? index + 14 }));
}


export type OrgDomain2Model15 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model15(partial?: Partial<OrgDomain2Model15>): OrgDomain2Model15 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-15`,
    label: partial?.label ?? 'OrgDomain2 model 15',
    score: partial?.score ?? 15,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 15, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection15(items: Array<Partial<OrgDomain2Model15>>): OrgDomain2Model15[] {
  return items.map((item, index) => buildOrgDomain2Model15({ ...item, score: item.score ?? index + 15 }));
}


export type OrgDomain2Model16 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model16(partial?: Partial<OrgDomain2Model16>): OrgDomain2Model16 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-16`,
    label: partial?.label ?? 'OrgDomain2 model 16',
    score: partial?.score ?? 16,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 16, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection16(items: Array<Partial<OrgDomain2Model16>>): OrgDomain2Model16[] {
  return items.map((item, index) => buildOrgDomain2Model16({ ...item, score: item.score ?? index + 16 }));
}


export type OrgDomain2Model17 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model17(partial?: Partial<OrgDomain2Model17>): OrgDomain2Model17 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-17`,
    label: partial?.label ?? 'OrgDomain2 model 17',
    score: partial?.score ?? 17,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 17, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection17(items: Array<Partial<OrgDomain2Model17>>): OrgDomain2Model17[] {
  return items.map((item, index) => buildOrgDomain2Model17({ ...item, score: item.score ?? index + 17 }));
}


export type OrgDomain2Model18 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model18(partial?: Partial<OrgDomain2Model18>): OrgDomain2Model18 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-18`,
    label: partial?.label ?? 'OrgDomain2 model 18',
    score: partial?.score ?? 18,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 18, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection18(items: Array<Partial<OrgDomain2Model18>>): OrgDomain2Model18[] {
  return items.map((item, index) => buildOrgDomain2Model18({ ...item, score: item.score ?? index + 18 }));
}


export type OrgDomain2Model19 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model19(partial?: Partial<OrgDomain2Model19>): OrgDomain2Model19 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-19`,
    label: partial?.label ?? 'OrgDomain2 model 19',
    score: partial?.score ?? 19,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 19, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection19(items: Array<Partial<OrgDomain2Model19>>): OrgDomain2Model19[] {
  return items.map((item, index) => buildOrgDomain2Model19({ ...item, score: item.score ?? index + 19 }));
}


export type OrgDomain2Model20 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model20(partial?: Partial<OrgDomain2Model20>): OrgDomain2Model20 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-20`,
    label: partial?.label ?? 'OrgDomain2 model 20',
    score: partial?.score ?? 20,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 20, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection20(items: Array<Partial<OrgDomain2Model20>>): OrgDomain2Model20[] {
  return items.map((item, index) => buildOrgDomain2Model20({ ...item, score: item.score ?? index + 20 }));
}


export type OrgDomain2Model21 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model21(partial?: Partial<OrgDomain2Model21>): OrgDomain2Model21 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-21`,
    label: partial?.label ?? 'OrgDomain2 model 21',
    score: partial?.score ?? 21,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 21, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection21(items: Array<Partial<OrgDomain2Model21>>): OrgDomain2Model21[] {
  return items.map((item, index) => buildOrgDomain2Model21({ ...item, score: item.score ?? index + 21 }));
}


export type OrgDomain2Model22 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model22(partial?: Partial<OrgDomain2Model22>): OrgDomain2Model22 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-22`,
    label: partial?.label ?? 'OrgDomain2 model 22',
    score: partial?.score ?? 22,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 22, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection22(items: Array<Partial<OrgDomain2Model22>>): OrgDomain2Model22[] {
  return items.map((item, index) => buildOrgDomain2Model22({ ...item, score: item.score ?? index + 22 }));
}


export type OrgDomain2Model23 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model23(partial?: Partial<OrgDomain2Model23>): OrgDomain2Model23 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-23`,
    label: partial?.label ?? 'OrgDomain2 model 23',
    score: partial?.score ?? 23,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 23, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection23(items: Array<Partial<OrgDomain2Model23>>): OrgDomain2Model23[] {
  return items.map((item, index) => buildOrgDomain2Model23({ ...item, score: item.score ?? index + 23 }));
}


export type OrgDomain2Model24 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model24(partial?: Partial<OrgDomain2Model24>): OrgDomain2Model24 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-24`,
    label: partial?.label ?? 'OrgDomain2 model 24',
    score: partial?.score ?? 24,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 24, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection24(items: Array<Partial<OrgDomain2Model24>>): OrgDomain2Model24[] {
  return items.map((item, index) => buildOrgDomain2Model24({ ...item, score: item.score ?? index + 24 }));
}


export type OrgDomain2Model25 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model25(partial?: Partial<OrgDomain2Model25>): OrgDomain2Model25 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-25`,
    label: partial?.label ?? 'OrgDomain2 model 25',
    score: partial?.score ?? 25,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 25, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection25(items: Array<Partial<OrgDomain2Model25>>): OrgDomain2Model25[] {
  return items.map((item, index) => buildOrgDomain2Model25({ ...item, score: item.score ?? index + 25 }));
}


export type OrgDomain2Model26 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model26(partial?: Partial<OrgDomain2Model26>): OrgDomain2Model26 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-26`,
    label: partial?.label ?? 'OrgDomain2 model 26',
    score: partial?.score ?? 26,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 26, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection26(items: Array<Partial<OrgDomain2Model26>>): OrgDomain2Model26[] {
  return items.map((item, index) => buildOrgDomain2Model26({ ...item, score: item.score ?? index + 26 }));
}


export type OrgDomain2Model27 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model27(partial?: Partial<OrgDomain2Model27>): OrgDomain2Model27 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-27`,
    label: partial?.label ?? 'OrgDomain2 model 27',
    score: partial?.score ?? 27,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 27, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection27(items: Array<Partial<OrgDomain2Model27>>): OrgDomain2Model27[] {
  return items.map((item, index) => buildOrgDomain2Model27({ ...item, score: item.score ?? index + 27 }));
}


export type OrgDomain2Model28 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model28(partial?: Partial<OrgDomain2Model28>): OrgDomain2Model28 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-28`,
    label: partial?.label ?? 'OrgDomain2 model 28',
    score: partial?.score ?? 28,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 28, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection28(items: Array<Partial<OrgDomain2Model28>>): OrgDomain2Model28[] {
  return items.map((item, index) => buildOrgDomain2Model28({ ...item, score: item.score ?? index + 28 }));
}


export type OrgDomain2Model29 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model29(partial?: Partial<OrgDomain2Model29>): OrgDomain2Model29 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-29`,
    label: partial?.label ?? 'OrgDomain2 model 29',
    score: partial?.score ?? 29,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 29, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection29(items: Array<Partial<OrgDomain2Model29>>): OrgDomain2Model29[] {
  return items.map((item, index) => buildOrgDomain2Model29({ ...item, score: item.score ?? index + 29 }));
}


export type OrgDomain2Model30 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model30(partial?: Partial<OrgDomain2Model30>): OrgDomain2Model30 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-30`,
    label: partial?.label ?? 'OrgDomain2 model 30',
    score: partial?.score ?? 30,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 30, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection30(items: Array<Partial<OrgDomain2Model30>>): OrgDomain2Model30[] {
  return items.map((item, index) => buildOrgDomain2Model30({ ...item, score: item.score ?? index + 30 }));
}


export type OrgDomain2Model31 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model31(partial?: Partial<OrgDomain2Model31>): OrgDomain2Model31 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-31`,
    label: partial?.label ?? 'OrgDomain2 model 31',
    score: partial?.score ?? 31,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 31, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection31(items: Array<Partial<OrgDomain2Model31>>): OrgDomain2Model31[] {
  return items.map((item, index) => buildOrgDomain2Model31({ ...item, score: item.score ?? index + 31 }));
}


export type OrgDomain2Model32 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model32(partial?: Partial<OrgDomain2Model32>): OrgDomain2Model32 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-32`,
    label: partial?.label ?? 'OrgDomain2 model 32',
    score: partial?.score ?? 32,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 32, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection32(items: Array<Partial<OrgDomain2Model32>>): OrgDomain2Model32[] {
  return items.map((item, index) => buildOrgDomain2Model32({ ...item, score: item.score ?? index + 32 }));
}


export type OrgDomain2Model33 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model33(partial?: Partial<OrgDomain2Model33>): OrgDomain2Model33 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-33`,
    label: partial?.label ?? 'OrgDomain2 model 33',
    score: partial?.score ?? 33,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 33, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection33(items: Array<Partial<OrgDomain2Model33>>): OrgDomain2Model33[] {
  return items.map((item, index) => buildOrgDomain2Model33({ ...item, score: item.score ?? index + 33 }));
}


export type OrgDomain2Model34 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model34(partial?: Partial<OrgDomain2Model34>): OrgDomain2Model34 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-34`,
    label: partial?.label ?? 'OrgDomain2 model 34',
    score: partial?.score ?? 34,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 34, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection34(items: Array<Partial<OrgDomain2Model34>>): OrgDomain2Model34[] {
  return items.map((item, index) => buildOrgDomain2Model34({ ...item, score: item.score ?? index + 34 }));
}


export type OrgDomain2Model35 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model35(partial?: Partial<OrgDomain2Model35>): OrgDomain2Model35 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-35`,
    label: partial?.label ?? 'OrgDomain2 model 35',
    score: partial?.score ?? 35,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 35, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection35(items: Array<Partial<OrgDomain2Model35>>): OrgDomain2Model35[] {
  return items.map((item, index) => buildOrgDomain2Model35({ ...item, score: item.score ?? index + 35 }));
}


export type OrgDomain2Model36 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model36(partial?: Partial<OrgDomain2Model36>): OrgDomain2Model36 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-36`,
    label: partial?.label ?? 'OrgDomain2 model 36',
    score: partial?.score ?? 36,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 36, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection36(items: Array<Partial<OrgDomain2Model36>>): OrgDomain2Model36[] {
  return items.map((item, index) => buildOrgDomain2Model36({ ...item, score: item.score ?? index + 36 }));
}


export type OrgDomain2Model37 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildOrgDomain2Model37(partial?: Partial<OrgDomain2Model37>): OrgDomain2Model37 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-orgdomain2-37`,
    label: partial?.label ?? 'OrgDomain2 model 37',
    score: partial?.score ?? 37,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 37, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapOrgDomain2Collection37(items: Array<Partial<OrgDomain2Model37>>): OrgDomain2Model37[] {
  return items.map((item, index) => buildOrgDomain2Model37({ ...item, score: item.score ?? index + 37 }));
}
