import { AuthService } from './auth.service';
import { RegisterDto } from '../DTOs/register.dto';
import { LoginDto } from '../DTOs/login.dto';
import { ForgotPasswordDto } from '../DTOs/forget-password.dto';
import { ResetPasswordDto } from '../DTOs/reset-password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<string>;
    login(loginDto: LoginDto): Promise<string>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<string>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<string>;
}
