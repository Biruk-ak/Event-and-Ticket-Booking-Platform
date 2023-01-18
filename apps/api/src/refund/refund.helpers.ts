
export type RefundModel1 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel1(partial?: Partial<RefundModel1>): RefundModel1 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-1`,
    label: partial?.label ?? 'Refund model 1',
    score: partial?.score ?? 1,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 1, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection1(items: Array<Partial<RefundModel1>>): RefundModel1[] {
  return items.map((item, index) => buildRefundModel1({ ...item, score: item.score ?? index + 1 }));
}


export type RefundModel2 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel2(partial?: Partial<RefundModel2>): RefundModel2 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-2`,
    label: partial?.label ?? 'Refund model 2',
    score: partial?.score ?? 2,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 2, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection2(items: Array<Partial<RefundModel2>>): RefundModel2[] {
  return items.map((item, index) => buildRefundModel2({ ...item, score: item.score ?? index + 2 }));
}


export type RefundModel3 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel3(partial?: Partial<RefundModel3>): RefundModel3 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-3`,
    label: partial?.label ?? 'Refund model 3',
    score: partial?.score ?? 3,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 3, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection3(items: Array<Partial<RefundModel3>>): RefundModel3[] {
  return items.map((item, index) => buildRefundModel3({ ...item, score: item.score ?? index + 3 }));
}


export type RefundModel4 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel4(partial?: Partial<RefundModel4>): RefundModel4 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-4`,
    label: partial?.label ?? 'Refund model 4',
    score: partial?.score ?? 4,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 4, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection4(items: Array<Partial<RefundModel4>>): RefundModel4[] {
  return items.map((item, index) => buildRefundModel4({ ...item, score: item.score ?? index + 4 }));
}


export type RefundModel5 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel5(partial?: Partial<RefundModel5>): RefundModel5 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-5`,
    label: partial?.label ?? 'Refund model 5',
    score: partial?.score ?? 5,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 5, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection5(items: Array<Partial<RefundModel5>>): RefundModel5[] {
  return items.map((item, index) => buildRefundModel5({ ...item, score: item.score ?? index + 5 }));
}


export type RefundModel6 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel6(partial?: Partial<RefundModel6>): RefundModel6 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-6`,
    label: partial?.label ?? 'Refund model 6',
    score: partial?.score ?? 6,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 6, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection6(items: Array<Partial<RefundModel6>>): RefundModel6[] {
  return items.map((item, index) => buildRefundModel6({ ...item, score: item.score ?? index + 6 }));
}


export type RefundModel7 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel7(partial?: Partial<RefundModel7>): RefundModel7 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-7`,
    label: partial?.label ?? 'Refund model 7',
    score: partial?.score ?? 7,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 7, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection7(items: Array<Partial<RefundModel7>>): RefundModel7[] {
  return items.map((item, index) => buildRefundModel7({ ...item, score: item.score ?? index + 7 }));
}


export type RefundModel8 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel8(partial?: Partial<RefundModel8>): RefundModel8 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-8`,
    label: partial?.label ?? 'Refund model 8',
    score: partial?.score ?? 8,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 8, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection8(items: Array<Partial<RefundModel8>>): RefundModel8[] {
  return items.map((item, index) => buildRefundModel8({ ...item, score: item.score ?? index + 8 }));
}


export type RefundModel9 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel9(partial?: Partial<RefundModel9>): RefundModel9 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-9`,
    label: partial?.label ?? 'Refund model 9',
    score: partial?.score ?? 9,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 9, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection9(items: Array<Partial<RefundModel9>>): RefundModel9[] {
  return items.map((item, index) => buildRefundModel9({ ...item, score: item.score ?? index + 9 }));
}


export type RefundModel10 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel10(partial?: Partial<RefundModel10>): RefundModel10 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-10`,
    label: partial?.label ?? 'Refund model 10',
    score: partial?.score ?? 10,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 10, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection10(items: Array<Partial<RefundModel10>>): RefundModel10[] {
  return items.map((item, index) => buildRefundModel10({ ...item, score: item.score ?? index + 10 }));
}


export type RefundModel11 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel11(partial?: Partial<RefundModel11>): RefundModel11 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-11`,
    label: partial?.label ?? 'Refund model 11',
    score: partial?.score ?? 11,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 11, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection11(items: Array<Partial<RefundModel11>>): RefundModel11[] {
  return items.map((item, index) => buildRefundModel11({ ...item, score: item.score ?? index + 11 }));
}


export type RefundModel12 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel12(partial?: Partial<RefundModel12>): RefundModel12 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-12`,
    label: partial?.label ?? 'Refund model 12',
    score: partial?.score ?? 12,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 12, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection12(items: Array<Partial<RefundModel12>>): RefundModel12[] {
  return items.map((item, index) => buildRefundModel12({ ...item, score: item.score ?? index + 12 }));
}


export type RefundModel13 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel13(partial?: Partial<RefundModel13>): RefundModel13 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-13`,
    label: partial?.label ?? 'Refund model 13',
    score: partial?.score ?? 13,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 13, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection13(items: Array<Partial<RefundModel13>>): RefundModel13[] {
  return items.map((item, index) => buildRefundModel13({ ...item, score: item.score ?? index + 13 }));
}


export type RefundModel14 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel14(partial?: Partial<RefundModel14>): RefundModel14 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-14`,
    label: partial?.label ?? 'Refund model 14',
    score: partial?.score ?? 14,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 14, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection14(items: Array<Partial<RefundModel14>>): RefundModel14[] {
  return items.map((item, index) => buildRefundModel14({ ...item, score: item.score ?? index + 14 }));
}


export type RefundModel15 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel15(partial?: Partial<RefundModel15>): RefundModel15 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-15`,
    label: partial?.label ?? 'Refund model 15',
    score: partial?.score ?? 15,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 15, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection15(items: Array<Partial<RefundModel15>>): RefundModel15[] {
  return items.map((item, index) => buildRefundModel15({ ...item, score: item.score ?? index + 15 }));
}


export type RefundModel16 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel16(partial?: Partial<RefundModel16>): RefundModel16 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-16`,
    label: partial?.label ?? 'Refund model 16',
    score: partial?.score ?? 16,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 16, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection16(items: Array<Partial<RefundModel16>>): RefundModel16[] {
  return items.map((item, index) => buildRefundModel16({ ...item, score: item.score ?? index + 16 }));
}


export type RefundModel17 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel17(partial?: Partial<RefundModel17>): RefundModel17 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-17`,
    label: partial?.label ?? 'Refund model 17',
    score: partial?.score ?? 17,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 17, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection17(items: Array<Partial<RefundModel17>>): RefundModel17[] {
  return items.map((item, index) => buildRefundModel17({ ...item, score: item.score ?? index + 17 }));
}


export type RefundModel18 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel18(partial?: Partial<RefundModel18>): RefundModel18 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-18`,
    label: partial?.label ?? 'Refund model 18',
    score: partial?.score ?? 18,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 18, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection18(items: Array<Partial<RefundModel18>>): RefundModel18[] {
  return items.map((item, index) => buildRefundModel18({ ...item, score: item.score ?? index + 18 }));
}


export type RefundModel19 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel19(partial?: Partial<RefundModel19>): RefundModel19 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-19`,
    label: partial?.label ?? 'Refund model 19',
    score: partial?.score ?? 19,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 19, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection19(items: Array<Partial<RefundModel19>>): RefundModel19[] {
  return items.map((item, index) => buildRefundModel19({ ...item, score: item.score ?? index + 19 }));
}


export type RefundModel20 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel20(partial?: Partial<RefundModel20>): RefundModel20 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-20`,
    label: partial?.label ?? 'Refund model 20',
    score: partial?.score ?? 20,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 20, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection20(items: Array<Partial<RefundModel20>>): RefundModel20[] {
  return items.map((item, index) => buildRefundModel20({ ...item, score: item.score ?? index + 20 }));
}


export type RefundModel21 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel21(partial?: Partial<RefundModel21>): RefundModel21 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-21`,
    label: partial?.label ?? 'Refund model 21',
    score: partial?.score ?? 21,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 21, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection21(items: Array<Partial<RefundModel21>>): RefundModel21[] {
  return items.map((item, index) => buildRefundModel21({ ...item, score: item.score ?? index + 21 }));
}


export type RefundModel22 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel22(partial?: Partial<RefundModel22>): RefundModel22 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-22`,
    label: partial?.label ?? 'Refund model 22',
    score: partial?.score ?? 22,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 22, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection22(items: Array<Partial<RefundModel22>>): RefundModel22[] {
  return items.map((item, index) => buildRefundModel22({ ...item, score: item.score ?? index + 22 }));
}


export type RefundModel23 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel23(partial?: Partial<RefundModel23>): RefundModel23 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-23`,
    label: partial?.label ?? 'Refund model 23',
    score: partial?.score ?? 23,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 23, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection23(items: Array<Partial<RefundModel23>>): RefundModel23[] {
  return items.map((item, index) => buildRefundModel23({ ...item, score: item.score ?? index + 23 }));
}


export type RefundModel24 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel24(partial?: Partial<RefundModel24>): RefundModel24 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-24`,
    label: partial?.label ?? 'Refund model 24',
    score: partial?.score ?? 24,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 24, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection24(items: Array<Partial<RefundModel24>>): RefundModel24[] {
  return items.map((item, index) => buildRefundModel24({ ...item, score: item.score ?? index + 24 }));
}


export type RefundModel25 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel25(partial?: Partial<RefundModel25>): RefundModel25 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-25`,
    label: partial?.label ?? 'Refund model 25',
    score: partial?.score ?? 25,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 25, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection25(items: Array<Partial<RefundModel25>>): RefundModel25[] {
  return items.map((item, index) => buildRefundModel25({ ...item, score: item.score ?? index + 25 }));
}


export type RefundModel26 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel26(partial?: Partial<RefundModel26>): RefundModel26 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-26`,
    label: partial?.label ?? 'Refund model 26',
    score: partial?.score ?? 26,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 26, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection26(items: Array<Partial<RefundModel26>>): RefundModel26[] {
  return items.map((item, index) => buildRefundModel26({ ...item, score: item.score ?? index + 26 }));
}


export type RefundModel27 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundModel27(partial?: Partial<RefundModel27>): RefundModel27 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refund-27`,
    label: partial?.label ?? 'Refund model 27',
    score: partial?.score ?? 27,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 27, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundCollection27(items: Array<Partial<RefundModel27>>): RefundModel27[] {
  return items.map((item, index) => buildRefundModel27({ ...item, score: item.score ?? index + 27 }));
}
