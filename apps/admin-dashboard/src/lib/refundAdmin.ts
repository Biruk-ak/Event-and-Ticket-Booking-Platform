
export type RefundAdminModel1 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel1(partial?: Partial<RefundAdminModel1>): RefundAdminModel1 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-1`,
    label: partial?.label ?? 'RefundAdmin model 1',
    score: partial?.score ?? 1,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 1, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection1(items: Array<Partial<RefundAdminModel1>>): RefundAdminModel1[] {
  return items.map((item, index) => buildRefundAdminModel1({ ...item, score: item.score ?? index + 1 }));
}


export type RefundAdminModel2 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel2(partial?: Partial<RefundAdminModel2>): RefundAdminModel2 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-2`,
    label: partial?.label ?? 'RefundAdmin model 2',
    score: partial?.score ?? 2,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 2, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection2(items: Array<Partial<RefundAdminModel2>>): RefundAdminModel2[] {
  return items.map((item, index) => buildRefundAdminModel2({ ...item, score: item.score ?? index + 2 }));
}


export type RefundAdminModel3 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel3(partial?: Partial<RefundAdminModel3>): RefundAdminModel3 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-3`,
    label: partial?.label ?? 'RefundAdmin model 3',
    score: partial?.score ?? 3,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 3, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection3(items: Array<Partial<RefundAdminModel3>>): RefundAdminModel3[] {
  return items.map((item, index) => buildRefundAdminModel3({ ...item, score: item.score ?? index + 3 }));
}


export type RefundAdminModel4 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel4(partial?: Partial<RefundAdminModel4>): RefundAdminModel4 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-4`,
    label: partial?.label ?? 'RefundAdmin model 4',
    score: partial?.score ?? 4,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 4, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection4(items: Array<Partial<RefundAdminModel4>>): RefundAdminModel4[] {
  return items.map((item, index) => buildRefundAdminModel4({ ...item, score: item.score ?? index + 4 }));
}


export type RefundAdminModel5 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel5(partial?: Partial<RefundAdminModel5>): RefundAdminModel5 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-5`,
    label: partial?.label ?? 'RefundAdmin model 5',
    score: partial?.score ?? 5,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 5, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection5(items: Array<Partial<RefundAdminModel5>>): RefundAdminModel5[] {
  return items.map((item, index) => buildRefundAdminModel5({ ...item, score: item.score ?? index + 5 }));
}


export type RefundAdminModel6 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel6(partial?: Partial<RefundAdminModel6>): RefundAdminModel6 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-6`,
    label: partial?.label ?? 'RefundAdmin model 6',
    score: partial?.score ?? 6,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 6, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection6(items: Array<Partial<RefundAdminModel6>>): RefundAdminModel6[] {
  return items.map((item, index) => buildRefundAdminModel6({ ...item, score: item.score ?? index + 6 }));
}


export type RefundAdminModel7 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel7(partial?: Partial<RefundAdminModel7>): RefundAdminModel7 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-7`,
    label: partial?.label ?? 'RefundAdmin model 7',
    score: partial?.score ?? 7,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 7, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection7(items: Array<Partial<RefundAdminModel7>>): RefundAdminModel7[] {
  return items.map((item, index) => buildRefundAdminModel7({ ...item, score: item.score ?? index + 7 }));
}


export type RefundAdminModel8 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel8(partial?: Partial<RefundAdminModel8>): RefundAdminModel8 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-8`,
    label: partial?.label ?? 'RefundAdmin model 8',
    score: partial?.score ?? 8,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 8, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection8(items: Array<Partial<RefundAdminModel8>>): RefundAdminModel8[] {
  return items.map((item, index) => buildRefundAdminModel8({ ...item, score: item.score ?? index + 8 }));
}


export type RefundAdminModel9 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel9(partial?: Partial<RefundAdminModel9>): RefundAdminModel9 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-9`,
    label: partial?.label ?? 'RefundAdmin model 9',
    score: partial?.score ?? 9,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 9, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection9(items: Array<Partial<RefundAdminModel9>>): RefundAdminModel9[] {
  return items.map((item, index) => buildRefundAdminModel9({ ...item, score: item.score ?? index + 9 }));
}


export type RefundAdminModel10 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel10(partial?: Partial<RefundAdminModel10>): RefundAdminModel10 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-10`,
    label: partial?.label ?? 'RefundAdmin model 10',
    score: partial?.score ?? 10,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 10, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection10(items: Array<Partial<RefundAdminModel10>>): RefundAdminModel10[] {
  return items.map((item, index) => buildRefundAdminModel10({ ...item, score: item.score ?? index + 10 }));
}


export type RefundAdminModel11 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel11(partial?: Partial<RefundAdminModel11>): RefundAdminModel11 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-11`,
    label: partial?.label ?? 'RefundAdmin model 11',
    score: partial?.score ?? 11,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 11, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection11(items: Array<Partial<RefundAdminModel11>>): RefundAdminModel11[] {
  return items.map((item, index) => buildRefundAdminModel11({ ...item, score: item.score ?? index + 11 }));
}


export type RefundAdminModel12 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel12(partial?: Partial<RefundAdminModel12>): RefundAdminModel12 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-12`,
    label: partial?.label ?? 'RefundAdmin model 12',
    score: partial?.score ?? 12,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 12, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection12(items: Array<Partial<RefundAdminModel12>>): RefundAdminModel12[] {
  return items.map((item, index) => buildRefundAdminModel12({ ...item, score: item.score ?? index + 12 }));
}


export type RefundAdminModel13 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel13(partial?: Partial<RefundAdminModel13>): RefundAdminModel13 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-13`,
    label: partial?.label ?? 'RefundAdmin model 13',
    score: partial?.score ?? 13,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 13, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection13(items: Array<Partial<RefundAdminModel13>>): RefundAdminModel13[] {
  return items.map((item, index) => buildRefundAdminModel13({ ...item, score: item.score ?? index + 13 }));
}


export type RefundAdminModel14 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel14(partial?: Partial<RefundAdminModel14>): RefundAdminModel14 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-14`,
    label: partial?.label ?? 'RefundAdmin model 14',
    score: partial?.score ?? 14,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 14, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection14(items: Array<Partial<RefundAdminModel14>>): RefundAdminModel14[] {
  return items.map((item, index) => buildRefundAdminModel14({ ...item, score: item.score ?? index + 14 }));
}


export type RefundAdminModel15 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel15(partial?: Partial<RefundAdminModel15>): RefundAdminModel15 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-15`,
    label: partial?.label ?? 'RefundAdmin model 15',
    score: partial?.score ?? 15,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 15, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection15(items: Array<Partial<RefundAdminModel15>>): RefundAdminModel15[] {
  return items.map((item, index) => buildRefundAdminModel15({ ...item, score: item.score ?? index + 15 }));
}


export type RefundAdminModel16 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel16(partial?: Partial<RefundAdminModel16>): RefundAdminModel16 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-16`,
    label: partial?.label ?? 'RefundAdmin model 16',
    score: partial?.score ?? 16,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 16, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection16(items: Array<Partial<RefundAdminModel16>>): RefundAdminModel16[] {
  return items.map((item, index) => buildRefundAdminModel16({ ...item, score: item.score ?? index + 16 }));
}


export type RefundAdminModel17 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel17(partial?: Partial<RefundAdminModel17>): RefundAdminModel17 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-17`,
    label: partial?.label ?? 'RefundAdmin model 17',
    score: partial?.score ?? 17,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 17, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection17(items: Array<Partial<RefundAdminModel17>>): RefundAdminModel17[] {
  return items.map((item, index) => buildRefundAdminModel17({ ...item, score: item.score ?? index + 17 }));
}


export type RefundAdminModel18 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel18(partial?: Partial<RefundAdminModel18>): RefundAdminModel18 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-18`,
    label: partial?.label ?? 'RefundAdmin model 18',
    score: partial?.score ?? 18,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 18, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection18(items: Array<Partial<RefundAdminModel18>>): RefundAdminModel18[] {
  return items.map((item, index) => buildRefundAdminModel18({ ...item, score: item.score ?? index + 18 }));
}


export type RefundAdminModel19 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel19(partial?: Partial<RefundAdminModel19>): RefundAdminModel19 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-19`,
    label: partial?.label ?? 'RefundAdmin model 19',
    score: partial?.score ?? 19,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 19, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection19(items: Array<Partial<RefundAdminModel19>>): RefundAdminModel19[] {
  return items.map((item, index) => buildRefundAdminModel19({ ...item, score: item.score ?? index + 19 }));
}


export type RefundAdminModel20 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel20(partial?: Partial<RefundAdminModel20>): RefundAdminModel20 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-20`,
    label: partial?.label ?? 'RefundAdmin model 20',
    score: partial?.score ?? 20,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 20, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection20(items: Array<Partial<RefundAdminModel20>>): RefundAdminModel20[] {
  return items.map((item, index) => buildRefundAdminModel20({ ...item, score: item.score ?? index + 20 }));
}


export type RefundAdminModel21 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel21(partial?: Partial<RefundAdminModel21>): RefundAdminModel21 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-21`,
    label: partial?.label ?? 'RefundAdmin model 21',
    score: partial?.score ?? 21,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 21, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection21(items: Array<Partial<RefundAdminModel21>>): RefundAdminModel21[] {
  return items.map((item, index) => buildRefundAdminModel21({ ...item, score: item.score ?? index + 21 }));
}


export type RefundAdminModel22 = {
  id: string;
  label: string;
  score: number;
  active: boolean;
  meta: Record<string, string | number | boolean>;
  createdAt: string;
  updatedAt: string;
};

export function buildRefundAdminModel22(partial?: Partial<RefundAdminModel22>): RefundAdminModel22 {
  const now = new Date().toISOString();
  return {
    id: partial?.id ?? `generated-refundadmin-22`,
    label: partial?.label ?? 'RefundAdmin model 22',
    score: partial?.score ?? 22,
    active: partial?.active ?? true,
    meta: partial?.meta ?? { version: 22, source: 'platform' },
    createdAt: partial?.createdAt ?? now,
    updatedAt: partial?.updatedAt ?? now,
  };
}

export function mapRefundAdminCollection22(items: Array<Partial<RefundAdminModel22>>): RefundAdminModel22[] {
  return items.map((item, index) => buildRefundAdminModel22({ ...item, score: item.score ?? index + 22 }));
}
