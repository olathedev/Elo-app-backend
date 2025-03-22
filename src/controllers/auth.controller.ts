import { Request, Response } from "express";

export const authHealth = (req: Request, res: Response) => {
    res.status(200).json({
        success:true,
        data: {
            message: 'Auth service is active'
        }
    })
}

export const signup = async () => {};

export const verification = async () => {};

export const resendVerification = async () => {};

export const signin = async () => {};

export const forgotPassword = async () => {};

export const resetPassword = async () => {};
