import { MouseEvent } from "react";

export interface ICommanProps {
    setResponse: React.Dispatch<React.SetStateAction<null | boolean>>;
    setIsTrue: React.Dispatch<React.SetStateAction<boolean>>;
    Response?:null | boolean;
    
  }
  
  export interface IButtonProps{
    color?:string,
    className?:string,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;}

export interface IOTPInputProps {
  length: number; // Length of the OTP
  onChange: (otp: string) => void; // Callback function when OTP changes
}

export type AppState = {
  Verify:boolean
};

// Define action types
export type Action = { type: 'CHECK_VERIFY' };
