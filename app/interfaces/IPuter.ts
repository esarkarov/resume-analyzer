import type { TChatMessageRole, TChatMessageType } from "~/types";

export interface IFSItem {
  id: string;
  uid: string;
  name: string;
  path: string;
  is_dir: boolean;
  parent_id: string;
  parent_uid: string;
  created: number;
  modified: number;
  accessed: number;
  size: number | null;
  writable: boolean;
}

export interface IPuterUser {
  uuid: string;
  username: string;
}

export interface IKVItem {
  key: string;
  value: string;
}

export interface IChatMessageContent {
  type: TChatMessageType;
  puter_path?: string;
  text?: string;
}

export interface IChatMessage {
  role: TChatMessageRole;
  content: string | IChatMessageContent[];
}

export interface IPuterChatOptions {
  model?: string;
  stream?: boolean;
  max_tokens?: number;
  temperature?: number;
  tools?: {
    type: "function";
    function: {
      name: string;
      description: string;
      parameters: { type: string; properties: {} };
    }[];
  };
}

export interface IAIResponse {
  index: number;
  message: {
    role: string;
    content: string | any[];
    refusal: null | string;
    annotations: any[];
  };
  logprobs: null | any;
  finish_reason: string;
  usage: {
    type: string;
    model: string;
    amount: number;
    cost: number;
  }[];
  via_ai_chat_service: boolean;
}

export interface IPuterStore {
  isLoading: boolean;
  error: string | null;
  puterReady: boolean;
  auth: {
    user: IPuterUser | null;
    isAuthenticated: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
    refreshUser: () => Promise<void>;
    checkAuthStatus: () => Promise<boolean>;
    getUser: () => IPuterUser | null;
  };
  fs: {
    write: (
      path: string,
      data: string | File | Blob
    ) => Promise<File | undefined>;
    read: (path: string) => Promise<Blob | undefined>;
    upload: (file: File[] | Blob[]) => Promise<IFSItem | undefined>;
    delete: (path: string) => Promise<void>;
    readDir: (path: string) => Promise<IFSItem[] | undefined>;
  };
  ai: {
    chat: (
      prompt: string | IChatMessage[],
      imageURL?: string | IPuterChatOptions,
      testMode?: boolean,
      options?: IPuterChatOptions
    ) => Promise<IAIResponse | undefined>;
    feedback: (
      path: string,
      message: string
    ) => Promise<IAIResponse | undefined>;
    img2txt: (
      image: string | File | Blob,
      testMode?: boolean
    ) => Promise<string | undefined>;
  };
  kv: {
    get: (key: string) => Promise<string | null | undefined>;
    set: (key: string, value: string) => Promise<boolean | undefined>;
    delete: (key: string) => Promise<boolean | undefined>;
    list: (
      pattern: string,
      returnValues?: boolean
    ) => Promise<string[] | IKVItem[] | undefined>;
    flush: () => Promise<boolean | undefined>;
  };

  init: () => void;
  clearError: () => void;
}
