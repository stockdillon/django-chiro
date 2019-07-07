export interface TransactionHistory {
  data: Datum[];
}

export interface Datum {
  id: string;
  type: string;
  status: string;
  amount: Amount;
  native_amount: Amount;
  description?: any;
  created_at: string;
  updated_at: string;
  resource: string;
  resource_path: string;
  instant_exchange: boolean;
  buy?: Buy;
  details: Details;
  network?: Network;
  to?: To;
}

export interface To {
  resource: string;
  address: string;
  currency: string;
  address_info: Addressinfo;
}

export interface Addressinfo {
  address: string;
}

export interface Network {
  status: string;
  hash: string;
  transaction_fee: Amount;
  transaction_amount: Amount;
  confirmations: number;
}

export interface Details {
  title: string;
  subtitle: string;
  payment_method_name?: string;
}

export interface Buy {
  id: string;
  resource: string;
  resource_path: string;
}

export interface Amount {
  amount: string;
  currency: string;
}
