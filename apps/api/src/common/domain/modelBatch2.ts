
export type Domain2Model1 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model1(partial?: Partial<Domain2Model1>): Domain2Model1 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-1`,
    label: partial?.label ?? 'Domain2 model 1',
    score: partial?.score ?? 1,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 1, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection1(items: Array<Partial<Domain2Model1>>): Domain2Model1[] {
  return items.map((item, index) => buildDomain2Model1({ ...item, score: item.score ?? index + 1 }));
}


export type Domain2Model2 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model2(partial?: Partial<Domain2Model2>): Domain2Model2 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-2`,
    label: partial?.label ?? 'Domain2 model 2',
    score: partial?.score ?? 2,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 2, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection2(items: Array<Partial<Domain2Model2>>): Domain2Model2[] {
  return items.map((item, index) => buildDomain2Model2({ ...item, score: item.score ?? index + 2 }));
}


export type Domain2Model3 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model3(partial?: Partial<Domain2Model3>): Domain2Model3 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-3`,
    label: partial?.label ?? 'Domain2 model 3',
    score: partial?.score ?? 3,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 3, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection3(items: Array<Partial<Domain2Model3>>): Domain2Model3[] {
  return items.map((item, index) => buildDomain2Model3({ ...item, score: item.score ?? index + 3 }));
}


export type Domain2Model4 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model4(partial?: Partial<Domain2Model4>): Domain2Model4 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-4`,
    label: partial?.label ?? 'Domain2 model 4',
    score: partial?.score ?? 4,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 4, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection4(items: Array<Partial<Domain2Model4>>): Domain2Model4[] {
  return items.map((item, index) => buildDomain2Model4({ ...item, score: item.score ?? index + 4 }));
}


export type Domain2Model5 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model5(partial?: Partial<Domain2Model5>): Domain2Model5 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-5`,
    label: partial?.label ?? 'Domain2 model 5',
    score: partial?.score ?? 5,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 5, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection5(items: Array<Partial<Domain2Model5>>): Domain2Model5[] {
  return items.map((item, index) => buildDomain2Model5({ ...item, score: item.score ?? index + 5 }));
}


export type Domain2Model6 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model6(partial?: Partial<Domain2Model6>): Domain2Model6 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-6`,
    label: partial?.label ?? 'Domain2 model 6',
    score: partial?.score ?? 6,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 6, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection6(items: Array<Partial<Domain2Model6>>): Domain2Model6[] {
  return items.map((item, index) => buildDomain2Model6({ ...item, score: item.score ?? index + 6 }));
}


export type Domain2Model7 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model7(partial?: Partial<Domain2Model7>): Domain2Model7 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-7`,
    label: partial?.label ?? 'Domain2 model 7',
    score: partial?.score ?? 7,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 7, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection7(items: Array<Partial<Domain2Model7>>): Domain2Model7[] {
  return items.map((item, index) => buildDomain2Model7({ ...item, score: item.score ?? index + 7 }));
}


export type Domain2Model8 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model8(partial?: Partial<Domain2Model8>): Domain2Model8 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-8`,
    label: partial?.label ?? 'Domain2 model 8',
    score: partial?.score ?? 8,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 8, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection8(items: Array<Partial<Domain2Model8>>): Domain2Model8[] {
  return items.map((item, index) => buildDomain2Model8({ ...item, score: item.score ?? index + 8 }));
}


export type Domain2Model9 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model9(partial?: Partial<Domain2Model9>): Domain2Model9 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-9`,
    label: partial?.label ?? 'Domain2 model 9',
    score: partial?.score ?? 9,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 9, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection9(items: Array<Partial<Domain2Model9>>): Domain2Model9[] {
  return items.map((item, index) => buildDomain2Model9({ ...item, score: item.score ?? index + 9 }));
}


export type Domain2Model10 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model10(partial?: Partial<Domain2Model10>): Domain2Model10 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-10`,
    label: partial?.label ?? 'Domain2 model 10',
    score: partial?.score ?? 10,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 10, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection10(items: Array<Partial<Domain2Model10>>): Domain2Model10[] {
  return items.map((item, index) => buildDomain2Model10({ ...item, score: item.score ?? index + 10 }));
}


export type Domain2Model11 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model11(partial?: Partial<Domain2Model11>): Domain2Model11 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-11`,
    label: partial?.label ?? 'Domain2 model 11',
    score: partial?.score ?? 11,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 11, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection11(items: Array<Partial<Domain2Model11>>): Domain2Model11[] {
  return items.map((item, index) => buildDomain2Model11({ ...item, score: item.score ?? index + 11 }));
}


export type Domain2Model12 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model12(partial?: Partial<Domain2Model12>): Domain2Model12 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-12`,
    label: partial?.label ?? 'Domain2 model 12',
    score: partial?.score ?? 12,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 12, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection12(items: Array<Partial<Domain2Model12>>): Domain2Model12[] {
  return items.map((item, index) => buildDomain2Model12({ ...item, score: item.score ?? index + 12 }));
}


export type Domain2Model13 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model13(partial?: Partial<Domain2Model13>): Domain2Model13 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-13`,
    label: partial?.label ?? 'Domain2 model 13',
    score: partial?.score ?? 13,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 13, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection13(items: Array<Partial<Domain2Model13>>): Domain2Model13[] {
  return items.map((item, index) => buildDomain2Model13({ ...item, score: item.score ?? index + 13 }));
}


export type Domain2Model14 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model14(partial?: Partial<Domain2Model14>): Domain2Model14 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-14`,
    label: partial?.label ?? 'Domain2 model 14',
    score: partial?.score ?? 14,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 14, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection14(items: Array<Partial<Domain2Model14>>): Domain2Model14[] {
  return items.map((item, index) => buildDomain2Model14({ ...item, score: item.score ?? index + 14 }));
}


export type Domain2Model15 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model15(partial?: Partial<Domain2Model15>): Domain2Model15 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-15`,
    label: partial?.label ?? 'Domain2 model 15',
    score: partial?.score ?? 15,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 15, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection15(items: Array<Partial<Domain2Model15>>): Domain2Model15[] {
  return items.map((item, index) => buildDomain2Model15({ ...item, score: item.score ?? index + 15 }));
}


export type Domain2Model16 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model16(partial?: Partial<Domain2Model16>): Domain2Model16 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-16`,
    label: partial?.label ?? 'Domain2 model 16',
    score: partial?.score ?? 16,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 16, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection16(items: Array<Partial<Domain2Model16>>): Domain2Model16[] {
  return items.map((item, index) => buildDomain2Model16({ ...item, score: item.score ?? index + 16 }));
}


export type Domain2Model17 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model17(partial?: Partial<Domain2Model17>): Domain2Model17 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-17`,
    label: partial?.label ?? 'Domain2 model 17',
    score: partial?.score ?? 17,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 17, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection17(items: Array<Partial<Domain2Model17>>): Domain2Model17[] {
  return items.map((item, index) => buildDomain2Model17({ ...item, score: item.score ?? index + 17 }));
}


export type Domain2Model18 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model18(partial?: Partial<Domain2Model18>): Domain2Model18 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-18`,
    label: partial?.label ?? 'Domain2 model 18',
    score: partial?.score ?? 18,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 18, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection18(items: Array<Partial<Domain2Model18>>): Domain2Model18[] {
  return items.map((item, index) => buildDomain2Model18({ ...item, score: item.score ?? index + 18 }));
}


export type Domain2Model19 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model19(partial?: Partial<Domain2Model19>): Domain2Model19 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-19`,
    label: partial?.label ?? 'Domain2 model 19',
    score: partial?.score ?? 19,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 19, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection19(items: Array<Partial<Domain2Model19>>): Domain2Model19[] {
  return items.map((item, index) => buildDomain2Model19({ ...item, score: item.score ?? index + 19 }));
}


export type Domain2Model20 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model20(partial?: Partial<Domain2Model20>): Domain2Model20 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-20`,
    label: partial?.label ?? 'Domain2 model 20',
    score: partial?.score ?? 20,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 20, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection20(items: Array<Partial<Domain2Model20>>): Domain2Model20[] {
  return items.map((item, index) => buildDomain2Model20({ ...item, score: item.score ?? index + 20 }));
}


export type Domain2Model21 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model21(partial?: Partial<Domain2Model21>): Domain2Model21 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-21`,
    label: partial?.label ?? 'Domain2 model 21',
    score: partial?.score ?? 21,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 21, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection21(items: Array<Partial<Domain2Model21>>): Domain2Model21[] {
  return items.map((item, index) => buildDomain2Model21({ ...item, score: item.score ?? index + 21 }));
}


export type Domain2Model22 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model22(partial?: Partial<Domain2Model22>): Domain2Model22 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-22`,
    label: partial?.label ?? 'Domain2 model 22',
    score: partial?.score ?? 22,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 22, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection22(items: Array<Partial<Domain2Model22>>): Domain2Model22[] {
  return items.map((item, index) => buildDomain2Model22({ ...item, score: item.score ?? index + 22 }));
}


export type Domain2Model23 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model23(partial?: Partial<Domain2Model23>): Domain2Model23 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-23`,
    label: partial?.label ?? 'Domain2 model 23',
    score: partial?.score ?? 23,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 23, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection23(items: Array<Partial<Domain2Model23>>): Domain2Model23[] {
  return items.map((item, index) => buildDomain2Model23({ ...item, score: item.score ?? index + 23 }));
}


export type Domain2Model24 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model24(partial?: Partial<Domain2Model24>): Domain2Model24 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-24`,
    label: partial?.label ?? 'Domain2 model 24',
    score: partial?.score ?? 24,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 24, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection24(items: Array<Partial<Domain2Model24>>): Domain2Model24[] {
  return items.map((item, index) => buildDomain2Model24({ ...item, score: item.score ?? index + 24 }));
}


export type Domain2Model25 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model25(partial?: Partial<Domain2Model25>): Domain2Model25 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-25`,
    label: partial?.label ?? 'Domain2 model 25',
    score: partial?.score ?? 25,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 25, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection25(items: Array<Partial<Domain2Model25>>): Domain2Model25[] {
  return items.map((item, index) => buildDomain2Model25({ ...item, score: item.score ?? index + 25 }));
}


export type Domain2Model26 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model26(partial?: Partial<Domain2Model26>): Domain2Model26 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-26`,
    label: partial?.label ?? 'Domain2 model 26',
    score: partial?.score ?? 26,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 26, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection26(items: Array<Partial<Domain2Model26>>): Domain2Model26[] {
  return items.map((item, index) => buildDomain2Model26({ ...item, score: item.score ?? index + 26 }));
}


export type Domain2Model27 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model27(partial?: Partial<Domain2Model27>): Domain2Model27 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-27`,
    label: partial?.label ?? 'Domain2 model 27',
    score: partial?.score ?? 27,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 27, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection27(items: Array<Partial<Domain2Model27>>): Domain2Model27[] {
  return items.map((item, index) => buildDomain2Model27({ ...item, score: item.score ?? index + 27 }));
}


export type Domain2Model28 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model28(partial?: Partial<Domain2Model28>): Domain2Model28 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-28`,
    label: partial?.label ?? 'Domain2 model 28',
    score: partial?.score ?? 28,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 28, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection28(items: Array<Partial<Domain2Model28>>): Domain2Model28[] {
  return items.map((item, index) => buildDomain2Model28({ ...item, score: item.score ?? index + 28 }));
}


export type Domain2Model29 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model29(partial?: Partial<Domain2Model29>): Domain2Model29 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-29`,
    label: partial?.label ?? 'Domain2 model 29',
    score: partial?.score ?? 29,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 29, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection29(items: Array<Partial<Domain2Model29>>): Domain2Model29[] {
  return items.map((item, index) => buildDomain2Model29({ ...item, score: item.score ?? index + 29 }));
}


export type Domain2Model30 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model30(partial?: Partial<Domain2Model30>): Domain2Model30 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-30`,
    label: partial?.label ?? 'Domain2 model 30',
    score: partial?.score ?? 30,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 30, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection30(items: Array<Partial<Domain2Model30>>): Domain2Model30[] {
  return items.map((item, index) => buildDomain2Model30({ ...item, score: item.score ?? index + 30 }));
}


export type Domain2Model31 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model31(partial?: Partial<Domain2Model31>): Domain2Model31 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-31`,
    label: partial?.label ?? 'Domain2 model 31',
    score: partial?.score ?? 31,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 31, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection31(items: Array<Partial<Domain2Model31>>): Domain2Model31[] {
  return items.map((item, index) => buildDomain2Model31({ ...item, score: item.score ?? index + 31 }));
}


export type Domain2Model32 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model32(partial?: Partial<Domain2Model32>): Domain2Model32 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-32`,
    label: partial?.label ?? 'Domain2 model 32',
    score: partial?.score ?? 32,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 32, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection32(items: Array<Partial<Domain2Model32>>): Domain2Model32[] {
  return items.map((item, index) => buildDomain2Model32({ ...item, score: item.score ?? index + 32 }));
}


export type Domain2Model33 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model33(partial?: Partial<Domain2Model33>): Domain2Model33 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-33`,
    label: partial?.label ?? 'Domain2 model 33',
    score: partial?.score ?? 33,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 33, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection33(items: Array<Partial<Domain2Model33>>): Domain2Model33[] {
  return items.map((item, index) => buildDomain2Model33({ ...item, score: item.score ?? index + 33 }));
}


export type Domain2Model34 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model34(partial?: Partial<Domain2Model34>): Domain2Model34 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-34`,
    label: partial?.label ?? 'Domain2 model 34',
    score: partial?.score ?? 34,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 34, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection34(items: Array<Partial<Domain2Model34>>): Domain2Model34[] {
  return items.map((item, index) => buildDomain2Model34({ ...item, score: item.score ?? index + 34 }));
}


export type Domain2Model35 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model35(partial?: Partial<Domain2Model35>): Domain2Model35 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-35`,
    label: partial?.label ?? 'Domain2 model 35',
    score: partial?.score ?? 35,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 35, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection35(items: Array<Partial<Domain2Model35>>): Domain2Model35[] {
  return items.map((item, index) => buildDomain2Model35({ ...item, score: item.score ?? index + 35 }));
}


export type Domain2Model36 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model36(partial?: Partial<Domain2Model36>): Domain2Model36 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-36`,
    label: partial?.label ?? 'Domain2 model 36',
    score: partial?.score ?? 36,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 36, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection36(items: Array<Partial<Domain2Model36>>): Domain2Model36[] {
  return items.map((item, index) => buildDomain2Model36({ ...item, score: item.score ?? index + 36 }));
}


export type Domain2Model37 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model37(partial?: Partial<Domain2Model37>): Domain2Model37 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-37`,
    label: partial?.label ?? 'Domain2 model 37',
    score: partial?.score ?? 37,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 37, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection37(items: Array<Partial<Domain2Model37>>): Domain2Model37[] {
  return items.map((item, index) => buildDomain2Model37({ ...item, score: item.score ?? index + 37 }));
}


export type Domain2Model38 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model38(partial?: Partial<Domain2Model38>): Domain2Model38 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-38`,
    label: partial?.label ?? 'Domain2 model 38',
    score: partial?.score ?? 38,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 38, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection38(items: Array<Partial<Domain2Model38>>): Domain2Model38[] {
  return items.map((item, index) => buildDomain2Model38({ ...item, score: item.score ?? index + 38 }));
}


export type Domain2Model39 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model39(partial?: Partial<Domain2Model39>): Domain2Model39 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-39`,
    label: partial?.label ?? 'Domain2 model 39',
    score: partial?.score ?? 39,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 39, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection39(items: Array<Partial<Domain2Model39>>): Domain2Model39[] {
  return items.map((item, index) => buildDomain2Model39({ ...item, score: item.score ?? index + 39 }));
}


export type Domain2Model40 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model40(partial?: Partial<Domain2Model40>): Domain2Model40 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-40`,
    label: partial?.label ?? 'Domain2 model 40',
    score: partial?.score ?? 40,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 40, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection40(items: Array<Partial<Domain2Model40>>): Domain2Model40[] {
  return items.map((item, index) => buildDomain2Model40({ ...item, score: item.score ?? index + 40 }));
}


export type Domain2Model41 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model41(partial?: Partial<Domain2Model41>): Domain2Model41 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-41`,
    label: partial?.label ?? 'Domain2 model 41',
    score: partial?.score ?? 41,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 41, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection41(items: Array<Partial<Domain2Model41>>): Domain2Model41[] {
  return items.map((item, index) => buildDomain2Model41({ ...item, score: item.score ?? index + 41 }));
}


export type Domain2Model42 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model42(partial?: Partial<Domain2Model42>): Domain2Model42 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-42`,
    label: partial?.label ?? 'Domain2 model 42',
    score: partial?.score ?? 42,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 42, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection42(items: Array<Partial<Domain2Model42>>): Domain2Model42[] {
  return items.map((item, index) => buildDomain2Model42({ ...item, score: item.score ?? index + 42 }));
}


export type Domain2Model43 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model43(partial?: Partial<Domain2Model43>): Domain2Model43 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-43`,
    label: partial?.label ?? 'Domain2 model 43',
    score: partial?.score ?? 43,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 43, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection43(items: Array<Partial<Domain2Model43>>): Domain2Model43[] {
  return items.map((item, index) => buildDomain2Model43({ ...item, score: item.score ?? index + 43 }));
}


export type Domain2Model44 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model44(partial?: Partial<Domain2Model44>): Domain2Model44 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-44`,
    label: partial?.label ?? 'Domain2 model 44',
    score: partial?.score ?? 44,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 44, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection44(items: Array<Partial<Domain2Model44>>): Domain2Model44[] {
  return items.map((item, index) => buildDomain2Model44({ ...item, score: item.score ?? index + 44 }));
}


export type Domain2Model45 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildDomain2Model45(partial?: Partial<Domain2Model45>): Domain2Model45 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-domain2-45`,
    label: partial?.label ?? 'Domain2 model 45',
    score: partial?.score ?? 45,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 45, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapDomain2Collection45(items: Array<Partial<Domain2Model45>>): Domain2Model45[] {
  return items.map((item, index) => buildDomain2Model45({ ...item, score: item.score ?? index + 45 }));
}
