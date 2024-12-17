import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { OTP } from 'src/entities/otp.entity';
import { RegisterDto } from '../DTOs/register.dto';
import { LoginDto } from '../DTOs/login.dto';
import { ForgotPasswordDto } from '../DTOs/forget-password.dto';
import { ResetPasswordDto } from '../DTOs/reset-password.dto';
import { EmailService } from 'src/services/email/email.service';
export declare class AuthService {
    private readonly userRepository;
    private readonly otpRepository;
    private readonly emailService;
    constructor(userRepository: Repository<User>, otpRepository: Repository<OTP>, emailService: EmailService);
    register(registerDto: RegisterDto): Promise<string>;
    login(loginDto: LoginDto): Promise<string>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<string>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<string>;
}
