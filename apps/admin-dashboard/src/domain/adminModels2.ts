
export type AdminDomain2Model1 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model1(partial?: Partial<AdminDomain2Model1>): AdminDomain2Model1 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-1`,
    label: partial?.label ?? 'AdminDomain2 model 1',
    score: partial?.score ?? 1,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 1, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection1(items: Array<Partial<AdminDomain2Model1>>): AdminDomain2Model1[] {
  return items.map((item, index) => buildAdminDomain2Model1({ ...item, score: item.score ?? index + 1 }));
}


export type AdminDomain2Model2 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model2(partial?: Partial<AdminDomain2Model2>): AdminDomain2Model2 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-2`,
    label: partial?.label ?? 'AdminDomain2 model 2',
    score: partial?.score ?? 2,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 2, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection2(items: Array<Partial<AdminDomain2Model2>>): AdminDomain2Model2[] {
  return items.map((item, index) => buildAdminDomain2Model2({ ...item, score: item.score ?? index + 2 }));
}


export type AdminDomain2Model3 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model3(partial?: Partial<AdminDomain2Model3>): AdminDomain2Model3 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-3`,
    label: partial?.label ?? 'AdminDomain2 model 3',
    score: partial?.score ?? 3,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 3, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection3(items: Array<Partial<AdminDomain2Model3>>): AdminDomain2Model3[] {
  return items.map((item, index) => buildAdminDomain2Model3({ ...item, score: item.score ?? index + 3 }));
}


export type AdminDomain2Model4 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model4(partial?: Partial<AdminDomain2Model4>): AdminDomain2Model4 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-4`,
    label: partial?.label ?? 'AdminDomain2 model 4',
    score: partial?.score ?? 4,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 4, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection4(items: Array<Partial<AdminDomain2Model4>>): AdminDomain2Model4[] {
  return items.map((item, index) => buildAdminDomain2Model4({ ...item, score: item.score ?? index + 4 }));
}


export type AdminDomain2Model5 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model5(partial?: Partial<AdminDomain2Model5>): AdminDomain2Model5 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-5`,
    label: partial?.label ?? 'AdminDomain2 model 5',
    score: partial?.score ?? 5,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 5, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection5(items: Array<Partial<AdminDomain2Model5>>): AdminDomain2Model5[] {
  return items.map((item, index) => buildAdminDomain2Model5({ ...item, score: item.score ?? index + 5 }));
}


export type AdminDomain2Model6 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model6(partial?: Partial<AdminDomain2Model6>): AdminDomain2Model6 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-6`,
    label: partial?.label ?? 'AdminDomain2 model 6',
    score: partial?.score ?? 6,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 6, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection6(items: Array<Partial<AdminDomain2Model6>>): AdminDomain2Model6[] {
  return items.map((item, index) => buildAdminDomain2Model6({ ...item, score: item.score ?? index + 6 }));
}


export type AdminDomain2Model7 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model7(partial?: Partial<AdminDomain2Model7>): AdminDomain2Model7 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-7`,
    label: partial?.label ?? 'AdminDomain2 model 7',
    score: partial?.score ?? 7,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 7, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection7(items: Array<Partial<AdminDomain2Model7>>): AdminDomain2Model7[] {
  return items.map((item, index) => buildAdminDomain2Model7({ ...item, score: item.score ?? index + 7 }));
}


export type AdminDomain2Model8 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model8(partial?: Partial<AdminDomain2Model8>): AdminDomain2Model8 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-8`,
    label: partial?.label ?? 'AdminDomain2 model 8',
    score: partial?.score ?? 8,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 8, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection8(items: Array<Partial<AdminDomain2Model8>>): AdminDomain2Model8[] {
  return items.map((item, index) => buildAdminDomain2Model8({ ...item, score: item.score ?? index + 8 }));
}


export type AdminDomain2Model9 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model9(partial?: Partial<AdminDomain2Model9>): AdminDomain2Model9 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-9`,
    label: partial?.label ?? 'AdminDomain2 model 9',
    score: partial?.score ?? 9,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 9, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection9(items: Array<Partial<AdminDomain2Model9>>): AdminDomain2Model9[] {
  return items.map((item, index) => buildAdminDomain2Model9({ ...item, score: item.score ?? index + 9 }));
}


export type AdminDomain2Model10 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model10(partial?: Partial<AdminDomain2Model10>): AdminDomain2Model10 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-10`,
    label: partial?.label ?? 'AdminDomain2 model 10',
    score: partial?.score ?? 10,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 10, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection10(items: Array<Partial<AdminDomain2Model10>>): AdminDomain2Model10[] {
  return items.map((item, index) => buildAdminDomain2Model10({ ...item, score: item.score ?? index + 10 }));
}


export type AdminDomain2Model11 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model11(partial?: Partial<AdminDomain2Model11>): AdminDomain2Model11 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-11`,
    label: partial?.label ?? 'AdminDomain2 model 11',
    score: partial?.score ?? 11,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 11, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection11(items: Array<Partial<AdminDomain2Model11>>): AdminDomain2Model11[] {
  return items.map((item, index) => buildAdminDomain2Model11({ ...item, score: item.score ?? index + 11 }));
}


export type AdminDomain2Model12 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model12(partial?: Partial<AdminDomain2Model12>): AdminDomain2Model12 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-12`,
    label: partial?.label ?? 'AdminDomain2 model 12',
    score: partial?.score ?? 12,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 12, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection12(items: Array<Partial<AdminDomain2Model12>>): AdminDomain2Model12[] {
  return items.map((item, index) => buildAdminDomain2Model12({ ...item, score: item.score ?? index + 12 }));
}


export type AdminDomain2Model13 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model13(partial?: Partial<AdminDomain2Model13>): AdminDomain2Model13 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-13`,
    label: partial?.label ?? 'AdminDomain2 model 13',
    score: partial?.score ?? 13,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 13, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection13(items: Array<Partial<AdminDomain2Model13>>): AdminDomain2Model13[] {
  return items.map((item, index) => buildAdminDomain2Model13({ ...item, score: item.score ?? index + 13 }));
}


export type AdminDomain2Model14 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model14(partial?: Partial<AdminDomain2Model14>): AdminDomain2Model14 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-14`,
    label: partial?.label ?? 'AdminDomain2 model 14',
    score: partial?.score ?? 14,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 14, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection14(items: Array<Partial<AdminDomain2Model14>>): AdminDomain2Model14[] {
  return items.map((item, index) => buildAdminDomain2Model14({ ...item, score: item.score ?? index + 14 }));
}


export type AdminDomain2Model15 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model15(partial?: Partial<AdminDomain2Model15>): AdminDomain2Model15 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-15`,
    label: partial?.label ?? 'AdminDomain2 model 15',
    score: partial?.score ?? 15,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 15, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection15(items: Array<Partial<AdminDomain2Model15>>): AdminDomain2Model15[] {
  return items.map((item, index) => buildAdminDomain2Model15({ ...item, score: item.score ?? index + 15 }));
}


export type AdminDomain2Model16 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model16(partial?: Partial<AdminDomain2Model16>): AdminDomain2Model16 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-16`,
    label: partial?.label ?? 'AdminDomain2 model 16',
    score: partial?.score ?? 16,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 16, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection16(items: Array<Partial<AdminDomain2Model16>>): AdminDomain2Model16[] {
  return items.map((item, index) => buildAdminDomain2Model16({ ...item, score: item.score ?? index + 16 }));
}


export type AdminDomain2Model17 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model17(partial?: Partial<AdminDomain2Model17>): AdminDomain2Model17 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-17`,
    label: partial?.label ?? 'AdminDomain2 model 17',
    score: partial?.score ?? 17,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 17, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection17(items: Array<Partial<AdminDomain2Model17>>): AdminDomain2Model17[] {
  return items.map((item, index) => buildAdminDomain2Model17({ ...item, score: item.score ?? index + 17 }));
}


export type AdminDomain2Model18 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model18(partial?: Partial<AdminDomain2Model18>): AdminDomain2Model18 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-18`,
    label: partial?.label ?? 'AdminDomain2 model 18',
    score: partial?.score ?? 18,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 18, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection18(items: Array<Partial<AdminDomain2Model18>>): AdminDomain2Model18[] {
  return items.map((item, index) => buildAdminDomain2Model18({ ...item, score: item.score ?? index + 18 }));
}


export type AdminDomain2Model19 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model19(partial?: Partial<AdminDomain2Model19>): AdminDomain2Model19 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-19`,
    label: partial?.label ?? 'AdminDomain2 model 19',
    score: partial?.score ?? 19,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 19, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection19(items: Array<Partial<AdminDomain2Model19>>): AdminDomain2Model19[] {
  return items.map((item, index) => buildAdminDomain2Model19({ ...item, score: item.score ?? index + 19 }));
}


export type AdminDomain2Model20 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model20(partial?: Partial<AdminDomain2Model20>): AdminDomain2Model20 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-20`,
    label: partial?.label ?? 'AdminDomain2 model 20',
    score: partial?.score ?? 20,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 20, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection20(items: Array<Partial<AdminDomain2Model20>>): AdminDomain2Model20[] {
  return items.map((item, index) => buildAdminDomain2Model20({ ...item, score: item.score ?? index + 20 }));
}


export type AdminDomain2Model21 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model21(partial?: Partial<AdminDomain2Model21>): AdminDomain2Model21 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-21`,
    label: partial?.label ?? 'AdminDomain2 model 21',
    score: partial?.score ?? 21,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 21, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection21(items: Array<Partial<AdminDomain2Model21>>): AdminDomain2Model21[] {
  return items.map((item, index) => buildAdminDomain2Model21({ ...item, score: item.score ?? index + 21 }));
}


export type AdminDomain2Model22 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model22(partial?: Partial<AdminDomain2Model22>): AdminDomain2Model22 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-22`,
    label: partial?.label ?? 'AdminDomain2 model 22',
    score: partial?.score ?? 22,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 22, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection22(items: Array<Partial<AdminDomain2Model22>>): AdminDomain2Model22[] {
  return items.map((item, index) => buildAdminDomain2Model22({ ...item, score: item.score ?? index + 22 }));
}


export type AdminDomain2Model23 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model23(partial?: Partial<AdminDomain2Model23>): AdminDomain2Model23 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-23`,
    label: partial?.label ?? 'AdminDomain2 model 23',
    score: partial?.score ?? 23,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 23, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection23(items: Array<Partial<AdminDomain2Model23>>): AdminDomain2Model23[] {
  return items.map((item, index) => buildAdminDomain2Model23({ ...item, score: item.score ?? index + 23 }));
}


export type AdminDomain2Model24 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model24(partial?: Partial<AdminDomain2Model24>): AdminDomain2Model24 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-24`,
    label: partial?.label ?? 'AdminDomain2 model 24',
    score: partial?.score ?? 24,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 24, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection24(items: Array<Partial<AdminDomain2Model24>>): AdminDomain2Model24[] {
  return items.map((item, index) => buildAdminDomain2Model24({ ...item, score: item.score ?? index + 24 }));
}


export type AdminDomain2Model25 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model25(partial?: Partial<AdminDomain2Model25>): AdminDomain2Model25 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-25`,
    label: partial?.label ?? 'AdminDomain2 model 25',
    score: partial?.score ?? 25,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 25, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection25(items: Array<Partial<AdminDomain2Model25>>): AdminDomain2Model25[] {
  return items.map((item, index) => buildAdminDomain2Model25({ ...item, score: item.score ?? index + 25 }));
}


export type AdminDomain2Model26 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model26(partial?: Partial<AdminDomain2Model26>): AdminDomain2Model26 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-26`,
    label: partial?.label ?? 'AdminDomain2 model 26',
    score: partial?.score ?? 26,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 26, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection26(items: Array<Partial<AdminDomain2Model26>>): AdminDomain2Model26[] {
  return items.map((item, index) => buildAdminDomain2Model26({ ...item, score: item.score ?? index + 26 }));
}


export type AdminDomain2Model27 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model27(partial?: Partial<AdminDomain2Model27>): AdminDomain2Model27 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-27`,
    label: partial?.label ?? 'AdminDomain2 model 27',
    score: partial?.score ?? 27,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 27, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection27(items: Array<Partial<AdminDomain2Model27>>): AdminDomain2Model27[] {
  return items.map((item, index) => buildAdminDomain2Model27({ ...item, score: item.score ?? index + 27 }));
}


export type AdminDomain2Model28 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model28(partial?: Partial<AdminDomain2Model28>): AdminDomain2Model28 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-28`,
    label: partial?.label ?? 'AdminDomain2 model 28',
    score: partial?.score ?? 28,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 28, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection28(items: Array<Partial<AdminDomain2Model28>>): AdminDomain2Model28[] {
  return items.map((item, index) => buildAdminDomain2Model28({ ...item, score: item.score ?? index + 28 }));
}


export type AdminDomain2Model29 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model29(partial?: Partial<AdminDomain2Model29>): AdminDomain2Model29 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-29`,
    label: partial?.label ?? 'AdminDomain2 model 29',
    score: partial?.score ?? 29,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 29, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection29(items: Array<Partial<AdminDomain2Model29>>): AdminDomain2Model29[] {
  return items.map((item, index) => buildAdminDomain2Model29({ ...item, score: item.score ?? index + 29 }));
}


export type AdminDomain2Model30 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model30(partial?: Partial<AdminDomain2Model30>): AdminDomain2Model30 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-30`,
    label: partial?.label ?? 'AdminDomain2 model 30',
    score: partial?.score ?? 30,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 30, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection30(items: Array<Partial<AdminDomain2Model30>>): AdminDomain2Model30[] {
  return items.map((item, index) => buildAdminDomain2Model30({ ...item, score: item.score ?? index + 30 }));
}


export type AdminDomain2Model31 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model31(partial?: Partial<AdminDomain2Model31>): AdminDomain2Model31 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-31`,
    label: partial?.label ?? 'AdminDomain2 model 31',
    score: partial?.score ?? 31,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 31, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection31(items: Array<Partial<AdminDomain2Model31>>): AdminDomain2Model31[] {
  return items.map((item, index) => buildAdminDomain2Model31({ ...item, score: item.score ?? index + 31 }));
}


export type AdminDomain2Model32 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model32(partial?: Partial<AdminDomain2Model32>): AdminDomain2Model32 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-32`,
    label: partial?.label ?? 'AdminDomain2 model 32',
    score: partial?.score ?? 32,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 32, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection32(items: Array<Partial<AdminDomain2Model32>>): AdminDomain2Model32[] {
  return items.map((item, index) => buildAdminDomain2Model32({ ...item, score: item.score ?? index + 32 }));
}


export type AdminDomain2Model33 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model33(partial?: Partial<AdminDomain2Model33>): AdminDomain2Model33 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-33`,
    label: partial?.label ?? 'AdminDomain2 model 33',
    score: partial?.score ?? 33,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 33, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection33(items: Array<Partial<AdminDomain2Model33>>): AdminDomain2Model33[] {
  return items.map((item, index) => buildAdminDomain2Model33({ ...item, score: item.score ?? index + 33 }));
}


export type AdminDomain2Model34 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model34(partial?: Partial<AdminDomain2Model34>): AdminDomain2Model34 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-34`,
    label: partial?.label ?? 'AdminDomain2 model 34',
    score: partial?.score ?? 34,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 34, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection34(items: Array<Partial<AdminDomain2Model34>>): AdminDomain2Model34[] {
  return items.map((item, index) => buildAdminDomain2Model34({ ...item, score: item.score ?? index + 34 }));
}


export type AdminDomain2Model35 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model35(partial?: Partial<AdminDomain2Model35>): AdminDomain2Model35 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-35`,
    label: partial?.label ?? 'AdminDomain2 model 35',
    score: partial?.score ?? 35,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 35, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection35(items: Array<Partial<AdminDomain2Model35>>): AdminDomain2Model35[] {
  return items.map((item, index) => buildAdminDomain2Model35({ ...item, score: item.score ?? index + 35 }));
}


export type AdminDomain2Model36 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model36(partial?: Partial<AdminDomain2Model36>): AdminDomain2Model36 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-36`,
    label: partial?.label ?? 'AdminDomain2 model 36',
    score: partial?.score ?? 36,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 36, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection36(items: Array<Partial<AdminDomain2Model36>>): AdminDomain2Model36[] {
  return items.map((item, index) => buildAdminDomain2Model36({ ...item, score: item.score ?? index + 36 }));
}


export type AdminDomain2Model37 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildAdminDomain2Model37(partial?: Partial<AdminDomain2Model37>): AdminDomain2Model37 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-admindomain2-37`,
    label: partial?.label ?? 'AdminDomain2 model 37',
    score: partial?.score ?? 37,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 37, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapAdminDomain2Collection37(items: Array<Partial<AdminDomain2Model37>>): AdminDomain2Model37[] {
  return items.map((item, index) => buildAdminDomain2Model37({ ...item, score: item.score ?? index + 37 }));
}
