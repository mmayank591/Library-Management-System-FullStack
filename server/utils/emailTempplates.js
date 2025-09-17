export function generateVerificationOtpEmailTemplate(otpCode){
    return `<div>
            ${otpCode}
    </div>`;
}

export function generateForgotPasswordEmailTemplate(resetPasswordUrl){
    return `
    <div>
    <p>Reset Password Url -> ${resetPasswordUrl}
    </p>
    </div>
    `
}