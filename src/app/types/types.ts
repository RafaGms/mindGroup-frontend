export interface AuthContextProp {
   isAuthenticated: boolean;
   user: Iuser | null;
   register: (name: string, image: File, email: string, password: string) => Promise<void>;
   signIn: (name: string, email: string) => Promise<void>;
}

export interface Iuser {
   id: number;
   name: string;
   email: string;
}

export interface Itransation {
   id: number;
   description: string;
   amount: number;
   UserId: number;
   type: string;
   date: string;
}